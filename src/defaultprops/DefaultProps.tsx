import React, { Component } from "react";

type NoticeProps = {
  msg: string;
};

export class DefaultProps extends Component<NoticeProps> {
  static defaultProps = {
    msg: "Hello everyone!",
  };

  render() {
    return <p>{this.props.msg}</p>;
  }
}

// const el = <defaultProps />; // Will compile in TS 3.0
