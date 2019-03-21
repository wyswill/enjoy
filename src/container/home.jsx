import React from "react";
import ButtomNav from "../compones/navs/buttom";
import TopNav from "../compones/navs/top";

import MainSwiper from "../compones/swiper/index";
import Hothost from "./hot_host";
import axios from "axios";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/action";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  state = {
    imgSrc: [],
    house: []
  };
  componentDidMount() {
    let { imgSrc } = this.props.imgSrc;
    if (imgSrc) {
      this.setState({
        imgSrc: imgSrc
      });
    } else {
      axios("http://localhost:8080/bannerImgs").then(res => {
        this.setState({
          imgSrc: res.data
        });
        this.props.actions.imgSrc({
          imgSrc: res.data
        });
      });
    }
    let { sx } = this.props.locations;
    let url = `http://localhost:8080/location?city=${sx}`;
    axios(url).then(res => {
      this.setState({
        house: res.data.hous
      });
    });
    window.onscroll = () => {};
  }
  render() {
    return (
      <div>
        {/* 导航栏 */}
        <TopNav />
        {/* 轮播图 */}
        <MainSwiper data={this.state.imgSrc} />
        {/* 找室友 */}
        <div className="links waper">
          <span className="btns">
            <Link to="/shiyou">找室友 </Link>
          </span>
          <span className="btns">
            <Link to="/shequ">宜居社区</Link>
          </span>
        </div>
        {/* 热门房源 */}
        <h4 className="waper">热门房源</h4>
        <Hothost house={this.state.house} />
        {/* 底部菜单 */}
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
  )(Home)
);
