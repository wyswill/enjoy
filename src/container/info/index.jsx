import React from "react";
/* img */
import Back_top from "../../compones/navs/back_top";
import dots from "../../static/images/dots.png";
import car from "../../static/images/market/car.png";
/* redux
------------- */
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as actions from "../../redux/action";
import { bindActionCreators } from "redux";
/* antd */
import { Tooltip } from "antd";
class Info extends React.Component {
  state = {
    items: {},
    isFrist: true
  };
  buy() {
    let isLogin = this.props.login_state.isLogin;
    if (isLogin != undefined) {
      console.log(this.state.items);
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
    let { id, img, content, previce, title } = this.state.items;
    this.setState({
      isFrist: false
    });
    return {
      id,
      img,
      content,
      mony: previce,
      title,
      count: 1
    };
  }

  componentDidMount() {
    let { info } = this.props.match.params;
    const datas = JSON.parse(sessionStorage.getItem("info"));
    this.setState({
      items: datas[info]
    });
  }
  render() {
    let { img, content, previce, title } = this.state.items;
    return (
      <div className="Mark_info">
        <Back_top title=" " img_r={dots} link="javascript;" />
        <img src={img} alt="" className="show" />
        <div className="waper">
          <h3>{title}</h3>
          <p id="previce">¥{previce}</p>
          <p id="content">{content}</p>
        </div>
        <div className="bottom">
          <button id="buy" onClick={this.buy.bind(this)}>
            购买
          </button>
          <Tooltip title="已加入购物车！" trigger="click">
            <button id="add_shop_car" onClick={this.shopCar.bind(this)}>
              加入购物车
            </button>
          </Tooltip>
          <Link to="/shopcar">
            <img src={car} alt="" />
          </Link>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
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
  )(Info)
);
