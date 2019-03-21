export default function shop_car_reduc(state = [], action) {
  switch (action.type) {
    case "add_shop_car":
      state.push(action.data);
      return state;
    case "remove_shop_car":
      return state.filter(ele => {
        return ele != action.data;
      });
    case "get_item_length":
      return state.filter(ele => {
        return ele == action.data;
      });
    case "xiugai_item_length":
      state.map(ele => {
        if (ele.id == action.data) {
          ele.count++;
        }
      });
      return state;
    case "sub_item_length":
      state.map(ele => {
        if (ele.id == action.data) {
          ele.count--;
        }
        if (ele.count < 1) {
          ele.count = 0;
        }
      });
      return state.filter(ele => {
        return ele.count > 0;
      });
    default:
      return state;
  }
}
