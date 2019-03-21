import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/action";
import { withRouter } from "react-router-dom";
class Location extends React.Component {
  state = {
    city: [
      "北京市",
      "上海市",
      "深圳市",
      "广州市",
      "杭州市",
      "南京市",
      "苏州市",
      "成都市",
      "武汉市"
    ],
    curentcity: "北京市"
  };
  clickHandler(e) {
    const citys = {
      北京市: "bj",
      上海市: "sh",
      深圳市: "sz",
      广州市: "gz",
      杭州市: "hz",
      南京市: "nj",
      苏州市: "sz",
      成都市: "cd",
      武汉市: "wh"
    };
    this.setState({
      curentcity: e.target.innerText
    });
    this.props.actions.location({
      curent: e.target.innerText,
      sx: citys[e.target.innerText]
    });
    window.history.back();
  }
  render() {
    return (
      <div className="location">
        {/* 头部输入框 */}
        <div className="header home-header">
          <div className="home-header-middle">
            <div className="search-container">
              <i className="icon-search" />
              <input placeholder="请输入城市名或拼音" />
            </div>
          </div>
        </div>
        {/* 定位信息 */}
        <div className="now">
          <div className="waper">
            <h3>当前定位</h3>
            <span>{this.state.curentcity} </span>
          </div>
        </div>
        <div className="hot">
          <div className="waper">
            <h3>热门城市</h3>
            {this.state.city.map((ele, index) => {
              return (
                <span key={index} onClick={this.clickHandler.bind(this)}>
                  {ele}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    location_reduc: state.location_reduc
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
  )(Location)
);
