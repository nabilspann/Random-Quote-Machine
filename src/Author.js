import React, { Component } from "react";

const Author = props => {
  return (
    <div className="author" id="author" style={{ color: props.color }}>
      <p>-{props.author}</p>
    </div>
  );
};

export default Author;
