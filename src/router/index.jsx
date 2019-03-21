import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../container/home";
import Market from "../container/market";
import Life from "../container/life";
import Mine from "../container/mine";
import Location from "../container/location/index";
import Shiyou from "../container/shiyou/index";
import Shequ from "../container/shequ/index";
import search from "../container/search";
import Xiangqing from "../container/xiangqing/index";
import login from "../compones/login";
import hot_search from "../container/shequ/hot_search";
import Msg from "../compones/msg/index";
import Shopcar from "../compones/shopCar/index";
import Shop_info from "../container/shop_info";
import Info from "../container/info/index";

export default class MainRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* 基本页 */}
          <Route exact path="/" component={Home} />
          <Route path="/market" component={Market} />
          <Route path="/life" component={Life} />
          <Route path="/mine" component={Mine} />

          {/* 定位 */}
          <Route path="/location" component={Location} />
          {/* 室友 */}
          <Route path="/shiyou" component={Shiyou} />
          {/* 社区 */}
          <Route path="/shequ" component={Shequ} />
          {/* 搜索 */}
          <Route path="/search" component={search} />
          {/* 商品详情 */}
          <Route path="/xiangqing" component={Xiangqing} />
          {/* 登陆 */}
          <Route path="/login" component={login} />
          {/* 热门搜索 */}
          <Route path="/hotsearch" component={hot_search} />
          {/* 我的消息 */}
          <Route path="/msg" component={Msg} />
          {/* 购物车 */}
          <Route path="/shopcar" component={Shopcar} />
          {/* 商城商品详情 */}
          <Route path="/shop_info" component={Shop_info} />
          {/* 商城商品详情 */}
          <Route path="/info/:info" component={Info} />
        </Switch>
      </BrowserRouter>
    );
  }
}
