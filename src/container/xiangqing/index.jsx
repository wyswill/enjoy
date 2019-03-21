import React from "react";
import Back_top from "../../compones/navs/back_top";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../redux/action";
import { bindActionCreators } from "redux";
/* other */
import axios from "axios";
import MainSwiper from "../../compones/swiper/index";
import dots from "../../static/images/dots.png";
/* antd */
import { Tooltip } from "antd";
class Xiangqing extends React.Component {
  state = {
    hous_info: {
      imgList: []
    },
    isFrist: true
  };
  componentDidMount() {
    let location = this.props.location_reduc.sx;
    let url = `http://localhost:8080/xiangqing?city=${location}`;
    axios(url).then(ele => {
      this.setState({
        hous_info: ele.data
      });
    });
  }
  buy() {
    let isLogin = this.props.login_state.isLogin;
    if (isLogin != undefined) {
      console.log(this.state.hous_info);
    } else {
      this.props.history.push("/login");
    }
  }
  shopCar() {
    let isLogin = this.props.login_state.isLogin;
    if (isLogin != undefined) {
      if (this.state.isFrist) {
        this.props.actions.add_shop_car(this.gethousinfo());
      } else {
        let { id } = this.gethousinfo();
        this.props.actions.xiugai_item_length(id);
      }
    } else {
      this.props.history.push("/login");
    }
  }
  gethousinfo() {
    let { id, addr, imgList, mony, fnagxing } = this.state.hous_info;
    this.setState({
      isFrist: false
    });
    return {
      id,
      addr,
      img: imgList[0],
      mony,
      fnagxing,
      count: 1
    };
  }
  render() {
    let {
      addr,
      floor,
      fnagxing,
      mianji,
      mony,
      type,
      years,
      zhuangxiu,
      direction
    } = this.state.hous_info;
    return (
      <div className="Xiangqing">
        <Back_top img_r={dots} link="xiangqing" />
        <div className="banner">
          <MainSwiper data={this.state.hous_info.imgList} />
        </div>
        <div className="waper">
          <div className="title">
            <h3>
              {addr} {fnagxing}
            </h3>
          </div>
          <div className="info">
            <div>
              <p>{mony}/月</p>
              <span>租金</span>
            </div>
            <div>
              <p>{fnagxing}</p>
              <span>房型 </span>
            </div>
            <div>
              <p>{mianji}</p>
              <span>面积</span>
            </div>
          </div>
          <div className="houseInfo">
            <div>
              <span>楼层:</span>
              <span>{floor}</span>
            </div>
            <div>
              <span>装修:</span>
              <span>{zhuangxiu}</span>
            </div>
            <div>
              <span>类型:</span>
              <span>{type}</span>
            </div>
            <div>
              <span>朝向:</span>
              <span>{direction}</span>
            </div>
            <div>
              <span>年代:</span>
              <span>{years}/年</span>
            </div>
          </div>
          <div className="bottom">
            <div className="btn" onClick={this.buy.bind(this)}>
              购买
            </div>
            <Tooltip title="已加入购物车！" trigger="click">
              <div className="btn" onClick={this.shopCar.bind(this)}>
                加入购物车
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    location_reduc: state.location_reduc,
    login_state: state.isLogin_reduce,
    shop_car: state.shop_car_reduc
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
  )(Xiangqing)
);
