import React from "react";
import { Link } from "react-router-dom";
import Hot_host from "../hot_host";
import axios from "axios";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/action";
import { withRouter } from "react-router-dom";
import backArror from "../../static/images/arrow-left.png";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.bottom = React.createRef();
    this.inputHandler = this.inputHandler.bind(this);
  }
  state = {
    house: []
  };
  componentDidMount() {
    this.lode_data();
    const bottomEle = this.bottom.current;
    window.onscroll = () => {
      let { scrollY } = window;
      let elementToTop = bottomEle.getBoundingClientRect().top;
      if (elementToTop - scrollY < 2) {
        this.lode_data("lode");
      }
    };
  }
  inputHandler(e) {
    if (e.keyCode === 13) this.lode_data();
  }
  lode_data(isLode = null) {
    let { sx } = this.props.location_reduc;
    let url = `http://localhost:8080/location?city=${sx}`;
    axios(url).then(res => {
      if (!isLode) {
        this.setState({
          house: res.data.hous
        });
      } else {
        this.setState({
          house: this.state.house.concat(res.data.hous)
        });
      }
    });
    this.input.current.value = "";
  }
  render() {
    return (
      <div>
        <div className="home-header clear-fix">
          <div className="home-header-left float-left">
            <Link to="/">
              <img src={backArror} alt="" />
            </Link>
          </div>
          <div className="home-header-middle">
            <div className="search-container">
              <i className="icon-search" />
              <input ref={this.input} onKeyDown={this.inputHandler} />
            </div>
          </div>
        </div>
        <Hot_host house={this.state.house} isOher="true" />
        <div className="bottom" ref={this.bottom} />
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
  )(Search)
);
