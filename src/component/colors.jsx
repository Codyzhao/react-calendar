import React from "react";

const Colors = props => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="color-code">
        <div className="square bg-primary" /> current day
      </div>
      <div className="color-code">
        <div className="square bg-light" /> disabled day
      </div>
      <div className="color-code">
        <div className="square bg-holiday" /> Holiday
      </div>
      <div className="color-code">
        <div className="square bg-birthday" /> Birthday
      </div>
      <div className="color-code">
        <div className="square bg-busy" /> Busy
      </div>
      <div className="color-code">
        <div className="square bg-anniversary" /> Anniversary
      </div>
    </div>
  );
};

export default Colors;
