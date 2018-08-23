import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount /100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  
  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState(() => ({ description }));
  }; 

  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (event) => {
    const amount = event.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
       this.setState(() => ({ amount }));
       }
  }
  
  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }
  
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }
  
  onFormSubmit = (event) => {
    event.preventDefault();
    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please enter valid description and amount' })); 
    } else {
      this.setState(() => ({ error: '' })); 
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      });
    }  
  } 

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input 
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type='text'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused }
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea 
            placeholder='Add a note for your expense (optional)'
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
