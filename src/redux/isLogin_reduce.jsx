export default function login(sdate = {}, action) {
  switch (action.type) {
    case "login":
      return (sdate = action.data);
    default:
      return sdate;
  }
}
