import React from "react";
import Back_top from "../navs/back_top";
import laba from "../../static/images/xiaoxi/icon_tongzhi.png";
import msg from "../../static/images/msg.png";
class Msg extends React.Component {
  state = {
    top_nav: ["交易物流", "通知", "互动"],
    items: [
      {
        img: laba,
        title: "宜居租房",
        time: " 14:32",
        content:
          "恭喜你！您预定的东城区-安外大街3 号院1室1厅1卫-44m²房源付款成功 期待你的入住。"
      },
      {
        img: laba,
        title: "宜居租房",
        time: " 14:32",
        content:
          "恭喜你！您预定的东城区-安外大街3 号院1室1厅1卫-44m²房源付款成功 期待你的入住。"
      }
    ]
  };
  render() {
    return (
      <div className="msg">
        <Back_top title="我的消息" img_r={msg} link="msg" />
        <ul className="too_nav">
          {this.state.top_nav.map((ele, index) => {
            return <li key={index}>{ele}</li>;
          })}
        </ul>
        <div className="waper">
          {this.state.items.map((ele, index) => {
            return (
              <div className="item" key={index}>
                <img src={ele.img} alt="" />
                <h1>{ele.title}</h1>
                <p>{ele.time}</p>
                <div className="content">{ele.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Msg;
