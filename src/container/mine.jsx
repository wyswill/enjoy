import React from "react";
/* nav
--------------- */
import ButtomNav from "../compones/navs/buttom";
/* imgs
---------------*/
import msg from "../static/images/msg.png";
import chilun from "../static/images/icon_setting.png";
import head_img from "../static/images/mine/img_touxiang.png";
/* item1 */
import youhui from "../static/images/mine/icon_youhuiquan.png";
import shoucang from "../static/images/mine/icon_shoucang.png";
import yuekan from "../static/images/mine/icon_yuekan.png";
import dingdan from "../static/images/mine/icon_dingfdan.png";
import sirenzhuli from "../static/images/mine/icon_sirenzhuli.png";
import weiliao from "../static/images/mine/icon_weiliao.png";
import pingjia from "../static/images/mine/icon_pingjia.png";
import tousujianyi from "../static/images/mine/icon_tousu.png";

import hetong from "../static/images/mine/icon_hetong.png";
import zhuanzu from "../static/images/mine/icon_zhuanzu.png";
import tuizu from "../static/images/mine/icon_tuizu.png";
import zhima from "../static/images/mine/icon_zhimaxinyong.png";
import xuzu from "../static/images/mine/icon_xuzu.png";
import zhangdan from "../static/images/mine/icon_zhangdan.png";

export default class Mine extends React.Component {
  state = {
    items: [
      {
        imgs: [
          youhui,
          shoucang,
          yuekan,
          dingdan,
          sirenzhuli,
          weiliao,
          pingjia,
          tousujianyi
        ],
        names: [
          "优惠券",
          "收藏",
          "约看",
          "订单",
          "私人助理",
          "微聊",
          "评价",
          "投诉建议"
        ]
      },
      {
        title: "宜居管家",
        sub_title: "宜居专享服务",
        imgs: [hetong, zhuanzu, tuizu, zhima, xuzu, zhangdan],
        names: ["我的合同", "转租", "退租", "芝麻信用", "续租", "账单"]
      }
    ]
  };
  render() {
    return (
      <div className="Mine">
        {/* 顶部 */}
        <div className="home-header clear-fix">
          <div className="home-header-left float-left">
            <img src={msg} alt="" />
          </div>
          <div className="home-header-right float-right">
            <img src={chilun} alt="" />
          </div>
        </div>

        <div className="head">
          <img src={head_img} alt="" />
        </div>

        <div className="waper">
          {this.state.items.map((ele, index) => {
            return (
              <div className="container">
                <h3>{ele.title}</h3>
                <small>{ele.sub_title}</small>
                <div className="item" key={index}>
                  <ul>
                    {ele.imgs.map((ele_img, index_img) => {
                      return (
                        <li key={index_img}>
                          <img src={ele_img} alt="" />
                          <p>{ele.names[index_img]}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>{" "}
              </div>
            );
          })}
        </div>
        <div style={{ height: "60px" }} />
        <ButtomNav />
      </div>
    );
  }
}
