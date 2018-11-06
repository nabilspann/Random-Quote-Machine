import React, { Component } from "react";

const QuoteText = props => {
  return (
    <div className="quote-container" style={{ color: props.color }}>
      <i className="fas fa-quote-left" style={{ whiteSpace: "nowrap" }} />
      <div
        dangerouslySetInnerHTML={{ __html: props.quote }}
        className="quote-text"
        id="text"
      />
    </div>
  );
};
export default QuoteText;
