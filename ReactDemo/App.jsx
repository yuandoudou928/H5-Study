import React from "react";

import { HashRouter, Route, Link } from "react-router-dom";

import Home from "./Home";
import Home from "./Movie";
import Home from "./About";
import Movie from "./Movie";
import About from "./About";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // 使用 <HashRouter> 标签把根元素包裹起来，网站就已经启用了路由功能
      <HashRouter>
        <div>
          <h1>APP 组件</h1>
          <hr />
          <Link to="/home">首页</Link>
          &nbsp;&nbsp;
          <Link to="/movie">电影</Link>
          &nbsp;&nbsp;
          <Link to="/about">关于</Link>
          <hr />
          <Rout path="/home" component={Home} />
          <Rout path="/movie" component={Movie} />
          <Rout path="/about" component={About} />
        </div>
      </HashRouter>
    );
  }
}
