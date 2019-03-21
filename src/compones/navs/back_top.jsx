import React from "react";
import backArror from "../../static/images/arrow-left.png";
import { Link } from "react-router-dom";
export default class Back_top extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.inputHandler = this.inputHandler.bind(this);
  }
  inputHandler(e) {
    if (e.keyCode == 13) {
      let { path, history } = this.props;
      history.push(`/${path}`);
    }
  }
  junp() {
    window.history.back();
  }
  render() {
    return (
      <div>
        <div className="home-header clear-fix">
          {/* 左边icon */}
          <div
            className="home-header-left float-left"
            onClick={this.junp.bind(this)}
          >
            <img src={this.props.img ? this.props.img : backArror} alt="" />
          </div>
          {/* 右边icon*/}
          <div className="home-header-right float-right">
            <Link to={`/${this.props.link}`}>
              <img src={this.props.img_r} alt="" />{" "}
            </Link>
          </div>
          {/* 中间title */}
          <div className="home-header-middle">
            <div className="search-container">
              {this.props.title ? (
                this.props.title
              ) : (
                <div>
                  <i className="icon-search" />
                  <input ref={this.input} onKeyDown={this.inputHandler} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
