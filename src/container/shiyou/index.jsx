import React from "react";

import arror_left from "../../static/images/arrow-left.png";
import msg from "../../static/images/msg.png";
import bg from "../../static/images/shiyou/shiyou_bg.png";
import info1 from "../../static/images/shiyou/shiyou_info1.png";
import info2 from "../../static/images/shiyou/shiyou_info2.png";
import pen from "../../static/images/shiyou/icon_fabu.png";
import eay from "../../static/images/shiyou/icon_chakan.png";
import headIcon1 from "../../static/images/shiyou/img_touxiang01.png";
import headIcon2 from "../../static/images/shiyou/img_touxiang02.png";
import men from "../../static/images/shiyou/img_man.png";
import wumen from "../../static/images/shiyou/icon_woman.png";
import { Link } from "react-router-dom";
export default class Shiyou extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.inputHandler = this.inputHandler.bind(this);
  }
  inputHandler() {}
  render() {
    const info = [
      {
        haveHouse: "无房",
        title: "有意思的小伙伴一起来奋斗吧",
        houeImg: info1,
        headIcon: headIcon1,
        name: "闰江南",
        sex: men,
        time: "12分钟前更新"
      },
      {
        haveHouse: "有房",
        title: "两个女生或一对情侣，35-40平超大卧室转租。",
        houeImg: info2,
        headIcon: headIcon2,
        name: "黄柯榕",
        sex: wumen,
        time: "20分钟前更新"
      }
    ];
    return (
      <div className="Shiyou">
        {/* 顶部 */}
        <div className="home-header clear-fix">
          <div className="home-header-left float-left">
            <Link to="/">
              <img src={arror_left} alt="" />
            </Link>
          </div>
          <div className="home-header-right float-right">
            <Link to="/msg">
              <img src={msg} alt="" />
            </Link>
          </div>
          <div className="home-header-middle">
            <div
              className="search-container"
              style={{ backgroundColor: "#ff5555" }}
            >
              找室友
            </div>
          </div>
        </div>

        {/* 背景 */}
        <div className="bg">
          <img src={bg} alt="" />
        </div>
        {/* 消息 */}
        {info.map((ele, index) => {
          return (
            <div className="info waper" key={index}>
              <span className="btn">{ele.haveHouse}</span>
              <span className="title">{ele.title}</span>
              <img src={ele.houeImg} alt="" className="house" />
              <div className="bottom">
                <img src={ele.headIcon} alt="" className="head" />
                <span className="name">
                  {ele.name}
                  <img src={ele.sex} alt="" className="sex" />
                </span>
                <span className="time">{ele.time}</span>
              </div>
            </div>
          );
        })}
        <div className="right_fix">
          <img src={pen} alt="" />
          <img src={eay} alt="" />
        </div>
      </div>
    );
  }
}
