import React, { Component } from "react";

class Day extends Component {
  state = {
    selectedCategory: ""
  };

  //handle day click
  setCategory = event => {
    this.setState({
      selectedCategory: event.target.value
    });
  };

  handleCategorySelector = () => {
    const categories = ["", "Holiday", "Birthday", "Busy", "Anniversary"];
    return (
      <select
        name="categories"
        className="categories"
        onChange={this.setCategory}
        value={this.state.selectedCategory}
      >
        {categories.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  };

  render() {
    const { day, monthStart, selectedDate } = this.props;
    const { selectedCategory: category } = this.state;
    return (
      <div
        className={`day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block ${
          !day.isSame(monthStart, "month")
            ? "bg-light text-muted"
            : day.isSame(selectedDate, "day")
              ? "bg-primary text-white"
              : ""
        } bg-${category.toString().toLowerCase()} ${
          day.day() === 6 || day.day() === 0 ? "text-primary" : ""
        }
        `}
        onClick={this.handleCategory}
      >
        <div className="row align-items-center">
          <div className="date col-1 small">
            {day.format("D")}
            {day.isSame(monthStart, "month")
              ? this.handleCategorySelector()
              : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Day;
