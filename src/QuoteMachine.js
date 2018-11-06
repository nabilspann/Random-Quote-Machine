import React, { Component } from "react";
import axios from "axios";
import QuoteButtonIcon from "./QuoteButtonIcon";
import Author from "./Author";
import QuoteText from "./QuoteText";
import "./Quote.css";

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [
        "magenta",
        "green",
        "rgb(243,156,18)",
        "rgb(212,81,19)",
        "rgb(8,126,139)",
        "rgb(56,66,59)"
      ],
      colorindex: 0,
      quotedata: [{}],
      backupdata: [
        {
          content: "<p>Information is cheap, meaning is expensive.</p>",
          title: "George Dyson"
        },
        {
          content:
            "<p>The creative person basically has two kinds of jobs: One is the sexy, creative kind. Second is the kind that pays the bills. Sometimes the task at hand covers both bases, but not often.</p>",
          title: "Derek Sivers"
        },
        {
          content: "<p>Verbalizing design is another act of design.</p>",
          title: "Kenya Hara"
        },
        {
          content:
            "<p>The modern artist is working with space and time, and expressing his feelings rather than illustrating.</p>",
          title: "Jackson Pollock"
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    let colorindex = Math.floor(Math.random() * Math.floor(6));
    let quoteindex = Math.floor(Math.random() * Math.floor(1000));
    let backupindex = Math.floor(Math.random() * Math.floor(4));

    axios
      .get(
        `https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=${quoteindex}`
      )
      .then(res => {
        // res.data[0].content = res.data[0].content.replace("<p>", "<p id='text'>");
        res.data[0].content = res.data[0].content.replace("\n", "");
        console.log(res.data[0]);
        this.setState({
          colorindex: colorindex,
          quotedata: res.data[0]
        });
      })
      .catch(err => {
        console.log(err.response);
        this.setState({ quotedata: this.state.backupdata[backupindex] });
      });
  }

  handleClick() {
    let colorindex = Math.floor(Math.random() * Math.floor(6));
    let quoteindex = Math.floor(Math.random() * Math.floor(3000));
    let backupindex = Math.floor(Math.random() * Math.floor(4));
    axios
      .get(
        `https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=${quoteindex}`
      )
      .then(res => {
        // res.data[0].content = res.data[0].content.replace("<p>", "<p id='text'>");
        res.data[0].content = res.data[0].content.replace("\n", "");

        this.setState({
          colorindex: colorindex,
          quotedata: res.data[0]
        });
      })
      .catch(err => {
        console.log(err.response);
        this.setState({ quotedata: this.state.backupdata[backupindex] });
      });
    // this.setState({colorindex: colorindex});
  }

  render() {
    document.body.style = `background: ${
      this.state.color[this.state.colorindex]
    }`;
    return (
      <div className="wrapper" id="quote-box">
        <QuoteText
          quote={this.state.quotedata.content}
          color={this.state.color[this.state.colorindex]}
        />

        <Author
          author={this.state.quotedata.title}
          color={this.state.color[this.state.colorindex]}
        />

        <QuoteButtonIcon
          color={this.state.color[this.state.colorindex]}
          onclick={this.handleClick}
        />
      </div>
    );
  }
}

export default QuoteMachine;
