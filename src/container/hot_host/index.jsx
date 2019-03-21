import React from "react";
import Link from "react-router-dom/Link";
class Hothost extends React.Component {
  state = {
    house: []
  };
  render() {
    return (
      <div className="hothots">
        {this.props.house.map((ele, index) => {
          return (
            <Link to="/xiangqing" key={index}>
              <div className="hous_list">
                <img src={ele.imgList} alt="dasdasd" />
                <div className="mask">
                  <div className="left">
                    <p>{ele.addr}</p>
                    <p>{ele.mianji}</p>
                  </div>
                  <div className="right">
                    <p className="btn">{ele.zu}</p>
                    <span style={{ color: "#FF5555" }}>{ele.mony}/月</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
export default Hothost;
