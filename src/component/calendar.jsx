import React, { Component } from "react";
import Month from "./month";
import Colors from "./colors";
import Filter from "./filter";

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

  //handle year change
  setSelectYear = event => {
    this.setState({
      selectYear: event.target.value
    });
  };

  render() {
    const { currentDate, selectDate, selectYear } = this.state;
    return (
      <React.Fragment>
        <Colors />
        <Filter onSelectYear={this.setSelectYear} selectYear={selectYear} />
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
