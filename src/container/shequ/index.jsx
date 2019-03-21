import React from "react";
import Back_top from "../../compones/navs/back_top";

import mc from "../../static/images/huatong.png";
import head from "../../static/images/shequ_head.png";
import plus from "../../static/images/icon_fabu.png";
import msg from "../../static/images/msg.png";

export default class Shequ extends React.Component {
  state = {
    top_list: ["全部", "好物评测", "生活技能", "闲话家常"],
    data: [
      {
        imgSrc: mc,
        content:
          "关于冰箱，你有什么要吐槽的？ 你对你家冰箱有什么不满：不够好看、容量太小或太 大、制冷效果不好、总有异味，还是......?快",
        headImg: head,
        plus: plus
      },
      {
        imgSrc: mc,
        content:
          "关于冰箱，你有什么要吐槽的？ 你对你家冰箱有什么不满：不够好看、容量太小或太 大、制冷效果不好、总有异味，还是......?快",
        headImg: head,
        plus: plus
      },
      {
        imgSrc: mc,
        content:
          "关于冰箱，你有什么要吐槽的？ 你对你家冰箱有什么不满：不够好看、容量太小或太 大、制冷效果不好、总有异味，还是......?快",
        headImg: head,
        plus: plus
      }
    ]
  };
  render() {
    return (
      <div className="Shequ">
        <Back_top
          path="hotsearch"
          history={this.props.history}
          img_r={msg}
          link="msg"
        />
        <div className="waper">
          <div className="top_list ">
            <ul>
              {this.state.top_list.map((ele, index) => {
                return <li key={index}>{ele}</li>;
              })}
            </ul>
          </div>
          {this.state.data.map((ele, index) => {
            return (
              <div className="item " key={index}>
                <div className="mc">
                  <img src={ele.imgSrc} alt="" />
                </div>
                <div className="title">{ele.content}</div>
                <div className="taolun">
                  <img src={ele.headImg} alt="" />
                  <span>1401人参与讨论</span>
                </div>
              </div>
            );
          })}
          <div className="plus">
            <img src={plus} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
