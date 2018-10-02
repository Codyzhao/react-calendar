import React from "react";

const Filter = props => {
  const yearsAllowed = 4;
  const currentYear = new Date().getFullYear();
  let yearsPast = [];
  let yearsFuture = [];

  for (let i = 0; i < yearsAllowed; i++) {
    yearsPast.push(currentYear - (i + 1));
    yearsFuture.push(currentYear + (i + 1));
  }

  yearsPast.reverse();

  let years = [...yearsPast, currentYear, ...yearsFuture];
  const { selectYear, onSelectYear } = props;

  return (
    <div className="year-filter d-flex justify-content-center">
      <div className="form-group form-inline mt-4">
        <label className="mr-2" htmlFor="years">
          Please select a year
        </label>
        <select
          name="years"
          id="years"
          onChange={e => onSelectYear(e)}
          value={selectYear}
          className="custom-select"
        >
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
