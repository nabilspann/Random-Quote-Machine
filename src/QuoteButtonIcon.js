import React, { Component } from "react";

const QuoteButtonIcon = props => {
  return (
    <div className="quote-button">
      <a
        id="tweet-quote"
        target="_blank"
        href="https://twitter.com/intent/tweet"
      >
        <i
          className="fa fa-twitter-square twitter"
          style={{ fontSize: "36px", color: props.color }}
        />
      </a>

      <a target="_blank" href="https://www.tumblr.com/share">
        <i
          className="fa fa-tumblr-square twitter"
          style={{ fontSize: "36px", color: props.color }}
        />
      </a>

      <button
        className="button-style"
        onClick={props.onclick}
        style={{ background: props.color }}
        id="new-quote"
      >
        New quote
      </button>
    </div>
  );
};

export default QuoteButtonIcon;
