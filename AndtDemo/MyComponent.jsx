import React from "react";

import { DatePicker } from "antd";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>在组件中引入 andt</h3>
        <DatePicker />
      </div>
    );
  }
}
