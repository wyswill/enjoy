import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/action";
import { withRouter } from "react-router-dom";

class TopNav extends React.Component {
  state = {
    curent: "北京"
  };
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.inputHandler = this.inputHandler.bind(this);
  }
  componentDidMount() {
    let lct = this.props.location_reduc.curent || "北京";
    this.setState({
      curent: lct
    });
  }
  inputHandler(e) {
    if (e.keyCode === 13) {
      this.props.history.push({
        pathname: "search"
      });
      this.input.current.value = "";
    }
  }
  render() {
    return (
      <div id="" className="home-header clear-fix">
        <div className="home-header-left float-left">
          <Link to="/location">
            <span>{this.state.curent}</span>
            <i className="icon-angle-down" />
          </Link>
        </div>
        <div className="home-header-right float-right">
          <i className="iconfont icon-car" />
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search" />
            <input ref={this.input} onKeyDown={this.inputHandler} />
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
  )(TopNav)
);
