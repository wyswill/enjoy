import React from "react";
/* navs
------------ */
import ButtomNav from "../compones/navs/buttom";
/* others
------------ */
import axios from "axios";
/* react-redux
---------------- */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/action";
import { withRouter } from "react-router-dom";
/* igms
------------ */
import msg from "../static/images/msg.png";
import mapIcon from "../static/images/life/mapicon.png";
import bg from "../static/images/life/img_banner.png";
import worter from "../static/images/life/icon_shuifei.png";
import lite from "../static/images/life/icon_dainfei.png";
import network from "../static/images/life/icon_kuandai.png";
import more from "../static/images/life/icon_more.png";
import baojie from "../static/images/life/img_baojie.png";
import banjia from "../static/images/life/img_banjia.png";
import jiaxiu from "../static/images/life/img_jiaxiu.png";
import richang from "../static/images/life/img_richang.png";
import chuman from "../static/images/life/img_chuman.png";
import yijubanjia from "../static/images/life/img_banjia.png";
import chongzhi from "../static/images/life/img_chongzhika.png";
import Back_top from "../compones/navs/back_top";

class Life extends React.Component {
  render() {
    return (
      <div className="Life">
        {/* 顶部 */}
        <Back_top img={mapIcon} title="生活服务" img_r={msg} link="msg" />
        {/* img */}
        <div className="bg">
          <img src={bg} alt="" />
        </div>
        <div className="waper">
          <div className="jiaofei">
            <h1>生活缴费</h1>
            <ul className="list">
              <li>
                <img src={worter} alt="" />
                <span>水费</span>
              </li>
              <li>
                <img src={lite} alt="" />
                <span>电费</span>
              </li>
              <li>
                <img src={network} alt="" />
                <span>宽带</span>
              </li>
              <li>
                <img src={more} alt="" />
                <span>更多</span>
              </li>
            </ul>
            <ul className="imgs">
              <li>
                <img src={baojie} alt="" />
                <span style={{ left: "13%" }}>保洁</span>
              </li>
              <li>
                <img src={banjia} alt="" />
                <span style={{ left: "47%" }}>搬家</span>
              </li>
              <li>
                <img src={jiaxiu} alt="" />
                <span style={{ left: "81%" }}>家修</span>
              </li>
            </ul>
          </div>
          {/* hot */}
          <div className="hot">
            <h1>热门推荐</h1>
            <small>为您提供最优质的服务，享受生活每一天 </small>
            <ul className="imgs">
              <li>
                <img src={richang} alt="" />
                <span style={{ left: "15%", top: "15%" }}>日常保洁</span>
              </li>
              <li>
                <img src={chuman} alt="" />
                <span style={{ left: "67%", top: "15%" }}>除螨保洁</span>
              </li>
              <li>
                <img src={banjia} alt="" />
                <span style={{ left: "15%", bottom: "15%" }}>宜居搬家</span>
              </li>
              <li>
                <img src={chongzhi} alt="" />
                <span style={{ left: "67%", bottom: "15%" }}>充值卡优惠</span>
              </li>
            </ul>
          </div>
        </div>
        {/* 底部导航 */}
        <ButtomNav />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    imgSrc: state.imgSrc_reduc,
    locations: state.location_reduc
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Life)
);
