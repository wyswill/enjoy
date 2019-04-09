const express = require("express");
const router = express.Router();
const fs = require("fs");
const Mock = require("mockjs");
//获取图片url
function get_img_src(path, cb) {
  let imgArr = [];
  const basePath = "/Users/mac/code/enjoy/server/static/images/";
  fs.readdir(basePath + path, (err, data) => {
    if (err) console.log(err);
    data.map(ele => {
      let t = `http://localhost:8088/images/${path}/${ele}`;
      imgArr.push(t);
    });
    cb(imgArr);
  });
}

router.all("*", (req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*"
  });
  next();
});
router.get('/', (req, res) => {
  res.send('ok!')
})
//首页轮播图
router.get("/bannerImgs", (req, res) => {
  get_img_src("banner", imgArr => {
    res.send(imgArr);
  });
});
//hot housk
router.get("/location", (req, res) => {
  const citys = {
    bj: "北京市",
    sh: "上海市",
    sz: "深圳市",
    gz: "广州市",
    hz: "杭州市",
    nj: "南京市",
    sz: "苏州市",
    cd: "成都市",
    wh: "武汉市"
  };
  let curentCity = req.query.city;
  get_img_src("banner", imgArr => {
    const zu = ["整租", "月租"];
    var data = Mock.mock({
      "hous|5-20": [
        {
          "id|1000-100000": 10,
          addr: citys[curentCity] + " @county",
          mianji: /(\d室)(\d厅)(\d卫)-(\d\d\d\dm)/,
          "mony|1000-100000": 1000,
          "imgList|1": imgArr,
          "zu|1": zu
        }
      ]
    });
    if (citys[curentCity]) res.send(data);
    else
      res.send({
        code: -1,
        msg: "参数错误"
      });
  });
});
// 详情
router.get("/xiangqing", (req, res) => {
  const citys = {
    bj: "北京市",
    sh: "上海市",
    sz: "深圳市",
    gz: "广州市",
    hz: "杭州市",
    nj: "南京市",
    sz: "苏州市",
    cd: "成都市",
    wh: "武汉市"
  };
  let curentCity = req.query.city;
  get_img_src("banner", imgArr => {
    const zu = ["整租", "月租"],
      floor = ["底层", "中层", "高层"];
    var data = Mock.mock({
      hous: {
        "id|1000-100000": 10,
        addr: citys[curentCity] + " @county",
        mianji: /(\d{3}m)/,
        fnagxing: /(\d室)(\d厅)(\d卫)/,
        "mony|1000-100000": 1000,
        "imgList|1-2": imgArr,
        "zu|1": zu,
        "floor|1": floor,
        "zhuangxiu|1": ["精装修", "毛坯房", "豪华套装", "总统限定"],
        "type|1": ["普通住宅", "低级住宅", "垃圾住宅", "总统限定"],
        "years|1990-2019": 1990,
        "direction|1": ["东", "南", "西", "北"]
      }
    });
    res.send(data.hous);
  });
});
//登陆
router.post("/login", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*"
  });
  res.send({
    msg: "ok",
    code: 1
  });
});
router.get("/getShop_info", (req, res) => {
  get_img_src("woshi", imgArr => {
    const res_data = Mock.mock({
      "items|2-6": [
        {
          "id|1000-100000": 10,
          "title|1": [
            "百纯家具",
            "卡菲纳真皮双人床",
            "美式吊灯",
            "卡菲纳真皮双人床 拷贝"
          ],
          "content|1": [
            "百纯家具 布艺沙发大小户型可拆洗简约 客厅整装转角U型组合沙发",
            "卡菲纳真皮双人床1.8米现代简约主卧 榻榻米床1.5米欧式储物家具",
            "美式乡村全铜吊灯客厅灯具现代简约欧式 复古大气创意卧室餐厅灯",
            "卡菲纳真皮双人床1.8米现代简约主卧 榻榻米床1.5米欧式储物家具"
          ],
          "previce|200-500": 200,
          "img|1": imgArr.filter(
            ele => ele != "http://localhost:8088/images/woshi/.DS_Store"
          )
        }
      ]
    });

    res.send(res_data);
  });
});
module.exports = router;
