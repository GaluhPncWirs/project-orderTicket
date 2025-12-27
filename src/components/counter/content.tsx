import React from "react";
import "./style.scss";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //   componentDidMount(): void {
  //     this.setState({ count: 10 });
  //   }

  componentDidUpdate(prevProps: any, prevState: any): void {
    if (this.state.count % 2 === 0 && this.state.count % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (this.state.count % 2 === 0) {
      console.log("Fizz");
    } else if (this.state.count % 5 === 0) {
      console.log("Buzz");
    }
  }

  render(): React.ReactNode {
    return (
      <div className="containerCounter">
        <h1 className="containerCounter__resultDisplay">{this.state.count}</h1>
        <button
          className="containerCounter__buttonClick"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Tambah
        </button>
      </div>
    );
  }
}
