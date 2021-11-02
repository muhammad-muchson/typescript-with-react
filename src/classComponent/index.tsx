import React, { Component } from "react";
interface State {
  counter: number;
}
// +++++use type as parameter+++++
// type Props = {
//   title: string;
//   nama?: string;
// };
// +++++use interface as parameter+++++
interface Props {
  title: string;
  nama?: string;
}
export class ClassComp extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 0,
    };
    // this._addCount = this._addCount.bind(this);
  }
  _addCount(param: number): void {
    // this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: param + 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.state.counter}
        {this.props.nama}
        <div>
          {/* <button onClick={this._addCount.bind(this)}>Add Count</button> */}
          {/* <button onClick={() => this._addCount()}>Add Count</button> */}
          <button onClick={this._addCount.bind(this, this.state.counter)}>
            Add Count
          </button>
        </div>
      </div>
    );
  }
}

export default ClassComp;
