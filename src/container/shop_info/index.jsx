import React from "react";
import Back_top from "../../compones/navs/back_top";
/* imgs 
---------------*/
import ing_r from "../../static/images/icon_shaixuan.png";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

export default class Shop_info extends React.Component {
  state = {
    top_nav: ["销量优先", "价格高低", "综合排序"],
    items: []
  };
  componentDidMount() {
    axios.get("http://localhost:8080/getShop_info").then(res => {
      this.setState({
        items: res.data.items
      });
      sessionStorage.setItem("info", JSON.stringify(res.data.items));
    });
  }
  render() {
    return (
      <div className="shop_info">
        <Back_top img_r={ing_r} title="卧室" path="" />
        <ul>
          {this.state.top_nav.map((ele, index) => {
            return (
              <NavLink to="/shop_info" key={index}>
                <li>{ele}</li>
              </NavLink>
            );
          })}
        </ul>
        <div className="waper">
          {this.state.items.map((ele, index) => {
            return (
              <Link to={`/info/${index}`} key={index}>
                <div className="items">
                  <img src={ele.img} alt="" />
                  <h3>{ele.title}</h3>
                  <p>{ele.content}</p>
                  <small style={{ color: "red" }}>¥{ele.previce}</small>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
