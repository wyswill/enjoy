export default function imgSrc_reduc(sdate = {}, action) {
  switch (action.type) {
    case "imgSrc":
      return (sdate = action.data);
    default:
      return sdate;
  }
}
