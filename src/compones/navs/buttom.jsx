import React from "react";
import { NavLink } from "react-router-dom";
export default class ButtomNav extends React.Component {
  render() {
    return (
      <ul className="ButtomNav">
        <li>
          <NavLink exact to="/">
            <i className="iconfont icon-home" />
            首页
          </NavLink>
        </li>
        <li>
          <NavLink to="/life">
            <i className="iconfont icon-trophy" />
            生活服务
          </NavLink>
        </li>
        <li>
          <NavLink to="/market">
            <i className="iconfont icon-shop" />
            商城
          </NavLink>
        </li>
        <li>
          <NavLink to="/mine">
            <i className="iconfont icon-team" />
            我的
          </NavLink>
        </li>
      </ul>
    );
  }
}
