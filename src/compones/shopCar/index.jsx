import React from "react";
/* redux */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/action";
import { withRouter } from "react-router-dom";
/* other */
import Back_top from "../navs/back_top";
import { Checkbox } from "antd";
/* imgs */
import lajitong from "../../static/images/shopcar/laijitong.png";
class Shopcar extends React.Component {
  state = {
    items: this.props.shop_car,
    all: [],
    prise: 0
  };
  /* 减少商品数目 */
  sub(id) {
    this.props.actions.sub_item_length(id);
    this.setState({
      items: this.props.shop_car
    });
    this.cpmputi_prise();
  }
  /* 添加商品数目 */
  plus(id) {
    this.props.actions.xiugai_item_length(id);
    this.setState({
      items: this.props.shop_car
    });
    this.cpmputi_prise();
  }
  /* 商品选择 */
  onSelected(data, e) {
    if (e.target.checked) {
      let temp = this.state.all;
      let fig = temp.some(ele => ele.id == data.id);
      if (fig) {
        return;
      }
      temp.push(data);
      this.setState({
        all: temp
      });
    }
    if (!e.target.checked) {
      let temp = this.state.all;
      temp.map((ele, index) => {
        if (ele.id == data.id) {
          temp.splice(index, 1);
        }
      });
      this.setState({
        all: temp
      });
    }
    this.cpmputi_prise();
  }
  /* 计算总价 */
  cpmputi_prise() {
    let p = [];
    if (this.state.all.length > 0) {
      this.state.all.map(ele => {
        let ps = ele.mony * ele.count;
        p.push(ps);
      });
    } else {
      this.setState({
        prise: 0
      });
      return;
    }
    let app = p.reduce((t, num) => t + num);
    this.setState({
      prise: app
    });
  }
  /* 结算 */
  jiesuan() {}
  render() {
    return (
      <div className="Shopcar">
        <Back_top title="购物车" img_r={lajitong} link="shopcar" />
        <div className="waper">
          {this.state.items.length != 0 ? (
            ""
          ) : (
            <h1 className="empte">购物车里空空的哦！</h1>
          )}
          <ul>
            {this.state.items.map((ele, index) => {
              return (
                <li key={index}>
                  <Checkbox onChange={this.onSelected.bind(this, ele)} />
                  <img src={ele.img} alt="" />
                  <p>{ele.addr || ele.title}</p>
                  <p> ¥{ele.mony}</p>
                  <div className="conts">
                    <span className="sub" onClick={this.sub.bind(this, ele.id)}>
                      -
                    </span>
                    <span className="num">{ele.count}</span>
                    <span
                      className="plus"
                      onClick={this.plus.bind(this, ele.id)}
                    >
                      +
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="buttom">
            <span className="prise">¥{this.state.prise}</span>
            <div className="jiesuan">
              <span onClick={this.jiesuan.bind(this)}> 结算</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
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
  )(Shopcar)
);
