import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };
  
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate)); 
    this.props.dispatch(setEndDate(endDate)); 
  };

  onFocusChange = (calendarFocused) => { 
    this.setState(() => ({ calendarFocused }))
  };

  render() {
    return (
      <div>
        <input 
          type='text' 
          value={this.props.filters.text}
          onChange={(event) => {
            this.props.dispatch(setTextFilter(event.target.value));        
          }} 
        />
        <select 
          value={this.props.filters.sortBy} 
          onChange={(event) => {
            if(event.target.value === 'date') {
              this.props.dispatch(sortByDate());  
            } else if(event.target.value === 'amount'){
              this.props.dispatch(sortByAmount()); 
            }            
          }}  
        >
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDateId={'startDate'}
          endDateId={'endDate'}
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={false}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters); 




