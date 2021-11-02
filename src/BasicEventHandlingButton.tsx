import React, { Component, MouseEvent } from "react";
interface Props {
  children: string;
}
export default class BasicEventHandlingButton extends Component<Props> {
  handleClick(event: MouseEvent) {
    event.preventDefault();
    alert(event.currentTarget.tagName); // alerts BUTTON
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>;
  }
}
