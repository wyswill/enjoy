import React from "react";
import ButtomNav from "../compones/navs/buttom";
import car from "../static/images/market/car.png";
import bg from "../static/images/market/bg.png";

import chuwugui from "../static/images/market/img_chuwugui.png";
import zhaomingdeng from "../static/images/market/img_zhaoming.png";
import baozheng from "../static/images/market/img_baozhen.png";
import jignzi from "../static/images/market/img_jingzi.png";
import Back_top from "../compones/navs/back_top";
import { Link } from "react-router-dom";

export default class Market extends React.Component {
  state = {
    list: [
      {
        title: "热销单品",
        imgList: [chuwugui, zhaomingdeng, baozheng, jignzi],
        names: ["储物柜", "照明灯", "抱枕", "镜子"]
      },
      {
        title: "热销单品",
        imgList: [chuwugui, zhaomingdeng, baozheng, jignzi],
        names: ["储物柜", "照明灯", "抱枕", "镜子"]
      },
      {
        title: "热销单品",
        imgList: [chuwugui, zhaomingdeng, baozheng, jignzi],
        names: ["储物柜", "照明灯", "抱枕", "镜子"]
      }
    ]
  };
  render() {
    return (
      <div className="Market">
        {/* 顶部 */}
        <Back_top img_r={car} link="shopcar" />
        {/* banner */}
        <div className="banner">
          <img src={bg} alt="" />
        </div>
        <div className="btn">
          <div className="left">
            <span>新品上市</span>
          </div>
          <div className="right">
            <span>二手商城</span>
          </div>
        </div>
        {this.state.list.map((ele, index) => {
          return (
            <div className="waper" key={index}>
              <div className="item">
                <h3>{ele.title}</h3>
                <ul className="lists">
                  {ele.imgList.map((ele_img, index_img) => {
                    return (
                      <li key={index_img}>
                        <Link to="/Shop_info">
                          <img src={ele_img} alt="" key={index_img} />
                          <p>{ele.names[index_img]}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
        <div style={{ height: "60px" }} />
        <ButtomNav />
      </div>
    );
  }
}
