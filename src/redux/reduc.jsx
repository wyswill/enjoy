import { combineReducers } from "redux";
import location_reduc from "./location_reduc";
import imgSrc_reduc from "./imgSrc_reduc";
import isLogin_reduce from "./isLogin_reduce";
import shop_car_reduc from "./shop_car";

const rootReducer = combineReducers({
  location_reduc,
  imgSrc_reduc,
  isLogin_reduce,
  shop_car_reduc
});
export default rootReducer;
