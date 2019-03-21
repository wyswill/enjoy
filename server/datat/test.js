const Mock = require("mockjs");

var data = Mock.mock({
  hous: [
    {
      "id|1000-100000": 10,
      addr: citys[curentCity] + " @county",
      mianji: /(\d室)(\d厅)(\d卫)-(\d\d\d\dm)/,
      "mony|1000-100000": 1000,
      "imgList|1-3": imgArr,
      "zu|1": zu
    }
  ]
});

console.log(JSON.stringify(data, null, 4));
