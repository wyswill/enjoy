import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Pagination from "./Pagination";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class MainSwiper extends React.Component {
  state = {
    index: 0
  };
  handleChangeIndex = index => {
    this.setState({
      index
    });
  };

  render() {
    const { index } = this.state;
    const img = this.props.data;
    return (
      <div className="shouye_swiper">
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex.bind(this)}
        >
          {img.map((ele, indesx) => {
            return <img src={ele} key={indesx} alt="首页" />;
          })}
        </AutoPlaySwipeableViews>
        <Pagination
          dots={img}
          index={index}
          onChangeIndex={this.handleChangeIndex.bind(this)}
        />
      </div>
    );
  }
}
