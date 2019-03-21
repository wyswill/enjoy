import React from "react";
import Back_top from "../../../compones/navs/back_top";
class hot_search extends React.Component {
  state = {
    hot_title: [
      "回龙观",
      "望京",
      "宋家庄",
      "百子湾",
      "通天宛",
      "芍药局",
      "立水桥",
      "常营",
      "来广营",
      "公寓"
    ]
  };
  render() {
    return (
      <div className="hot_search">
        <Back_top path="hotsearch" history={this.props.history} />
        <div className="waper">
          <h1>热门搜索</h1>
          <ul>
            {this.state.hot_title.map((ele, index) => {
              return <li key={index}>{ele}</li>;
            })}
          </ul>
          <button>清除搜索历史</button>
        </div>
      </div>
    );
  }
}
export default hot_search;
