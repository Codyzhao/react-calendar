import React, { Component } from "react";
import Month from "./month";

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

  render() {
    const { currentDate, selectDate, selectYear } = this.state;
    return (
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
    );
  }
}

export default Calendar;
