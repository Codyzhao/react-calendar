import React, { Component } from "react";
import moment from "moment";
import Day from "./day";

class Month extends Component {
  //render calendar header
  handleHeader() {
    const { index } = this.props;
    const monthLabels = moment.months();
    const weekLabels = moment.weekdaysShort(true);
    return (
      <header>
        <p className="mb-0 text-center text-primary">{monthLabels[index]}</p>
        <div className="row d-none d-sm-flex pt-2 text-dark bg-light">
          {weekLabels.map(label => (
            <h5 key={label} className="col-sm p-1 text-center small">
              {label}
            </h5>
          ))}
        </div>
      </header>
    );
  }

  handleDays() {
    const { index: month, selectYear, selectDate } = this.props;
    // get start date and end date for any given month
    const monthStart = new Date(selectYear, month, 1);
    const monthEnd = moment(monthStart).endOf("month");
    const weekStart = moment(monthStart).startOf("week");
    const weekEnd = monthEnd.endOf("week");
    const rows = [];
    let days = [];
    let day = weekStart;

    while (day <= weekEnd) {
      for (let i = 0; i < 7; i++) {
        days.push(
          <Day
            key={day}
            day={day}
            monthStart={monthStart}
            selectDate={selectDate}
          />
        );
        day = moment(day).add(1, "days");
      }
      rows.push(
        <div
          key={day}
          className="row border border-right-0 border-bottom-0 week"
        >
          {days}
        </div>
      );
      days = [];
    }

    return <React.Fragment>{rows}</React.Fragment>;
  }

  render() {
    return (
      <div className="col-sm-4">
        <div className="month my-3 px-2">
          {this.handleHeader()}
          {this.handleDays()}
        </div>
      </div>
    );
  }
}

export default Month;
