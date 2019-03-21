export default function location_reduc(
  sdate = {
    curent: "北京市",
    sx: "bj"
  },
  action
) {
  switch (action.type) {
    case "location":
      return (sdate = action.data);
    default:
      return sdate;
  }
}
