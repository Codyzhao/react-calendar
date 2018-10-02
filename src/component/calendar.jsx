import React, { Component } from "react";
import Month from "./month";
import moment from "moment";

class Calendar extends Component {
  state = {
    currentDate: new Date(),
    selectDate: new Date(),
    selectYear: new Date().getFullYear()
  };

  //render all monthes
  handleMonth() {
    const totalMonthes = 12;
    const monthes = [];
    for (let i = 0; i < totalMonthes; i++) {
      monthes.push(i);
    }
    return monthes;
  }

  //render year change select
  renderYearSelector() {
    const yearsAllowed = 2;
    const currentYear = new Date().getFullYear();
    let yearsPast = [];
    let yearsFuture = [];

    for (let i = 0; i < yearsAllowed; i++) {
      yearsPast.push(currentYear - (i + 1));
      yearsFuture.push(currentYear + (i + 1));
    }

    yearsPast.reverse();

    let years = [...yearsPast, currentYear, ...yearsFuture];
    return (
      <div className="form-group form-inline mt-5">
        <label className="mr-2" htmlFor="years">
          Please select a year
        </label>
        <select
          name="years"
          id="years"
          onChange={this.setSelectYear}
          value={this.state.selectYear}
          className="custom-select"
        >
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    );
  }

  //handle year change
  setSelectYear = event => {
    this.setState({
      selectYear: event.target.value
    });
  };

  render() {
    const { currentDate, selectDate, selectYear } = this.state;

    console.log(moment().years(10));
    return (
      <React.Fragment>
        <div className="year-filter d-flex justify-content-center">
          {this.renderYearSelector()}
        </div>
        <div className="row">
          {this.handleMonth().map(month => (
            <Month
              key={month}
              index={month}
              currentDate={currentDate}
              selectDate={selectDate}
              selectYear={selectYear}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Calendar;
