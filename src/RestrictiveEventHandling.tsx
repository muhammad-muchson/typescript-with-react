import React, { Component, MouseEvent } from "react";
interface Props {
  title: string;
}
export class RestrictiveEventHandling extends Component<Props> {
  /*
   Here we restrict all handleClicks to be exclusively on 
   HTMLButton Elements
  */
  handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    alert(event.currentTarget.tagName); // alerts BUTTON
  }

  /* 
    Generics support union types. This event handler works on
    HTMLButtonElement and HTMLAnchorElement (links).
  */
  handleAnotherClick(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    event.preventDefault();
    alert("Yeah!");
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>{this.props.children}</button>;
        <h4>{this.props.title}</h4>
      </>
    );
  }
}
