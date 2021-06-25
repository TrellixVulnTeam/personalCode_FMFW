import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableHighlight,
} from "react-native";

//FlatList 优先渲染屏幕的可见区域的数据，类似与懒加载

export default function App() {
  const [prolist, setProlist] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const flatRef = useRef();

  useEffect(() => {
    // fetch('./../../../week1/react-project/jd-admin/public/pro.json')
    // .then(res => res.json())
    // .then(res => {
    //   console.log(res)
    // })

    // async function fetchData () {
    //   let result = await fetch('/pro.json')
    //   let res = await result.json()
    //   //这里做赋值
    // }
    //fetchData()

    setProlist([
      {
        categoryname: "热门推荐M",
        categoryid: 42,
        name: "闪购",
        id: 572,
        jump: "https://wqs.jd.com/portal/wx/seckill_m/brand.shtml",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t18802/237/1502687907/7460/2f227c66/5acc51efN1dae98b2.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "90",
        activityDays: "5天",
        proname: "商品001",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "热门推荐M",
        categoryid: 42,
        name: "唯品会",
        id: 810,
        jump: "https://pro.m.jd.com/mall/active/2aiozXgZK1PUVZA37WNq62KLtjcC/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t1/106342/37/16553/4901/5e7cc859E4a33be03/f52cec80c8dc344d.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "商品002",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "3C专区",
        categoryid: 38,
        name: "手机馆",
        id: 588,
        jump: "https://pro.m.jd.com/mall/active/Y9FVe619hMoajzqpxky1CQQJAkk/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t18859/148/1985801887/5540/79c57f95/5ae0605bN31eb138b.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "商品003",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "3C专区",
        categoryid: 38,
        name: "玩3C",
        id: 587,
        jump: "https://pro.m.jd.com/mall/active/3JAoyewPmdVBMeRWTBiHDdGH5M36/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t18376/164/1541644268/6421/ead422d3/5acdae58N63f7e1dd.jpg",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 1,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "商品004",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "3C专区",
        categoryid: 38,
        name: "京东家电",
        id: 589,
        jump: "https://pro.m.jd.com/mall/active/48v7Xzb3FfKt6mKgMaS9EoHrvieE/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t19129/11/1997624184/4584/f1b38046/5ae06098N0fd3a5ac.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 1,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "商品005",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "3C专区",
        categoryid: 38,
        name: "电脑办公",
        id: 636,
        jump: "https://pro.m.jd.com/mall/active/31XPWPTonxJ9e5YoQ85HS7z8XNYQ/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t18301/164/2005078858/4649/c7d7540e/5ae062baN937b5e1d.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 1,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "商品006",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "3C专区",
        categoryid: 38,
        name: "拍拍验机",
        id: 1019,
        jump: "https://paipai.m.jd.com/direct/?entryid=p005ppyj0jdapp5",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t1/78894/12/9054/6394/5d6e250aE019a121d/d746e2ad3f4d07cc.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 1,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "商品007",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "3C专区",
        categoryid: 38,
        name: "拍拍回收",
        id: 1020,
        jump: "https://huishou.m.jd.com/index",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t23398/266/591438711/7785/2e4fc95e/5b38409fN0192ac56.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 1,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "商品008",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "京东超市",
        id: 594,
        jump: "https://pro.m.jd.com/mall/active/WDFXanZGBTUPMcNicUEZ8q8nhRF/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t17749/340/1545725508/7727/738cd479/5acdb885N66a4aec2.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "商品009",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "沃尔玛",
        id: 599,
        jump: "https://pro.m.jd.com/mall/active/3d34Pm49obpjLEdhhagSZuM5QrwC/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t1/87664/20/16561/5314/5e7cc946E7e532dff/678c6520e0d3059b.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "商品0010",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "山姆店",
        id: 600,
        jump: "https://shop.m.jd.com/?shopId=598847",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t18703/92/1540811278/7831/b08d3a2f/5acdb954Na451ebe3.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "商品00111",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "图书音像",
        id: 601,
        jump: "https://pro.m.jd.com/mall/active/3u1Q7ZjCfQKrRb52c623WNf3Cjz5/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t19120/326/2015194654/5703/bb2c7da9/5ae060d7N7a921d20.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "美食城",
        id: 603,
        jump: "https://pro.m.jd.com/mall/active/46s9NeY97sZFwvirKh1w69xMJfjs/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t19510/99/1997173036/5986/e640aaee/5ae06136N2f38f602.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "中外名酒",
        id: 605,
        jump: "https://pro.m.jd.com/mall/active/zGwAUzL3pVGjptBBGeYfpKjYdtX/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t19684/90/2029898820/5560/748cfaf1/5ae06148Nfde7d99c.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "爱美丽",
        id: 606,
        jump: "https://pro.m.jd.com/mall/active/2kmaPNrGDNYo1LKwYtRoaSmsgbj6/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t17569/222/1962890348/5757/a9d42ee3/5ae06168N529944f3.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "个护清洁",
        id: 608,
        jump: "https://pro.m.jd.com/mall/active/icTjaGCfgvk53N36uZFX7WLBoTK/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t17443/206/2024826859/5801/907d0843/5ae06199Nd92cdfe3.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "家装城",
        id: 610,
        jump: "https://pro.m.jd.com/mall/active/387eAn8NbK2b52rdJyJSGA3xpQdT/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t20113/188/1953566/6389/fae1eb1/5ae061a5Nf8b362d4.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "童装馆",
        id: 614,
        jump: "https://pro.m.jd.com/mall/active/3Af6mZNcf5m795T8dtDVfDwWVNhJ/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t18757/157/2047065647/5924/3026c3b/5ae061daNf4cc5db7.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "大药房",
        id: 617,
        jump: "https://pro.m.jd.com/mall/active/2btYJRGQbBERp23M6aXGwm1tve3X/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t18721/355/1552352057/6451/aac83cfe/5acdbbe8Ndb0625c4.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "汽车用品",
        id: 618,
        jump: "https://pro.m.jd.com/mall/active/2X7RWsf6YroLanMXGz6Z8p3W9jjV/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t19726/325/2005987992/6401/2075e896/5ae06206N8412b247.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "爱车生活",
        id: 619,
        jump: "https://pro.m.jd.com/mall/active/dj6us2JJRLMMBb4iDaSK4wxvBMt/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t16603/270/2022426636/7650/199cf9bd/5ae06211N55458fb6.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "工业品",
        id: 1067,
        jump: "https://pro.m.jd.com/mall/active/4RYbb8NtVAegmT35SuM2N3KKYLWt/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t1/11450/28/11433/7104/5c889da6Ebb724d42/0a53d60ab3603557.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "超市生活",
        categoryid: 39,
        name: "京东汽车",
        id: 873,
        jump: "https://pro.m.jd.com/mall/active/7buZFEUJouLZZywhvvRWkGNSRMS/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t1/3314/29/6094/7416/5ba20dbeE93e7cc02/10349aa463525de5.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "时尚穿搭",
        categoryid: 43,
        name: "服装馆",
        id: 620,
        jump: "https://pro.m.jd.com/mall/active/3GTca2WsjgRdohGtJCUnWB3bDs8o/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t16741/258/1541877121/7017/6e03894b/5acdc628Nf7d6f780.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "时尚穿搭",
        categoryid: 43,
        name: "女装馆",
        id: 622,
        jump: "https://pro.m.jd.com/mall/active/DpSh7ma8JV7QAxSE2gJNro8Q2h9/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t18544/26/1952502036/6690/15b4ae4c/5ae06227N98bd13c4.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "时尚穿搭",
        categoryid: 43,
        name: "鞋靴箱包",
        id: 623,
        jump: "https://pro.m.jd.com/mall/active/B5nbBHuCjfNkWN1nocNkawR2E8N/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t17989/84/2013323368/7072/e0a973da/5ae06232Nab1597b5.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "时尚穿搭",
        categoryid: 43,
        name: "内衣馆",
        id: 624,
        jump: "https://pro.m.jd.com/mall/active/4PgpL1xqPSW1sVXCJ3xopDbB1f69/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t19102/69/1987169084/6757/e53b7760/5ae06242Nc044c906.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "时尚穿搭",
        categoryid: 43,
        name: "运动户外",
        id: 626,
        jump: "https://pro.m.jd.com/mall/active/oKAAQpTfmbKWmL338JdgxNDeWK2/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t19957/358/3216993/6100/3abf816a/5ae06259N29275358.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "时尚穿搭",
        categoryid: 43,
        name: "珠宝首饰",
        id: 628,
        jump: "https://pro.m.jd.com/mall/active/zHUHpTHNTaztSRfNBFNVZscyFZU/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t19948/66/3191014/6800/7429b1fd/5ae0629dN6ea95c15.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "时尚穿搭",
        categoryid: 43,
        name: "男装馆",
        id: 621,
        jump: "https://pro.m.jd.com/mall/active/32EphPL81Mb6FD4qLCTtYmd31YXr/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t17803/169/1530358935/12101/d01c64c8/5acdc644N509e3ae3.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "时尚穿搭",
        categoryid: 43,
        name: "钟表馆",
        id: 629,
        jump: "https://pro.m.jd.com/mall/active/2BcJPCVVzMEtMUynXkPscCSsx68W/index.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t18856/164/2014839175/6910/a31444be/5ae062a8N64914ce2.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "特色频道",
        categoryid: 41,
        name: "京东拍卖",
        id: 630,
        jump: "https://mauction.jd.com/home.html",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t18079/183/1510693228/11548/45734eb3/5acdcd69N09472720.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "特色频道",
        categoryid: 41,
        name: "京东智能",
        id: 631,
        jump: "https://pro.m.jd.com/mall/active/KcfFqWvhb5hHtaQkS4SD1UU6RcQ/index.html?utm_source=pdappwakeupup_20170001",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t17968/290/1529570480/6438/33c45b16/5acdcda6Nc6a0a289.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
      {
        categoryname: "特色频道",
        categoryid: 41,
        name: "彩票",
        id: 1050,
        jump: "https://caipiao.m.jd.com",
        icon: "https://m.360buyimg.com/mobilecms/s80x80_jfs/t16855/264/1777290411/12102/e339fc7/5ad88e8aNda959270.png",
        img: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/163652/6/1428/120414/5ff6d564Eaabf2f88/b50c2814b70ef1ba.jpg!q80.dpg.webp",
        isKill: 0,
        isRecommond: 0,
        isSale: 0,
        originPrice: "100",
        newPrice: "80",
        activityDays: "5天",
        proname: "无钢圈文胸",
        descri:
          "穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用，穿着舒适，放心使用",
      },
    ]);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 20 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "left",
        }}
      >
        <FlatList
          ref={flatRef}
          data={prolist}
          ListHeaderComponent={() => { // 这里会渲染头部
            return <View style={{ height: 300 }}></View>;
          }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  borderBottomColor: "#ccc",
                  borderBottomWidth: 1,
                  marginBottom: 5,
                }}
              >
                <View>
                  <Image
                    style={{ width: 60, height: 60, margin: 5 }}
                    source={{
                      uri: item.img,
                    }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ textAlign: "right", paddingRight: 15 }}>
                    {item.categoryname}
                  </Text>
                  <Text style={{ textAlign: "right", paddingRight: 15 }}>
                    活动剩余时间{item.activityDays}
                  </Text>
                  <Text style={{ textAlign: "right", paddingRight: 15 }}>
                    ¥{item.newPrice}
                  </Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => String(item.id)}
          // 值越小滚动条靠近底部越近才会触发上拉刷新
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            console.log("上拉加载更多");
            // 在这里做数据请求，并改变refreshing状态
          }}
          // 该状态是控制是否显示下拉刷新的loading
          refreshing={refreshing}
          onRefresh={() => {
            console.log("下来加载更多");
            // 在这里做数据请求，并改变refreshing状态
          }}
        />
        <TouchableHighlight
          onPress={() => {
            console.log("返回顶部");
            flatRef.current.scrollToIndex({
              animated: true,
              offset: 0 //这里会回到顶部
            });
          }}
        >
          <View style={{ position: "absolute", bottom: 40, right: 10 }}>
            <Text style={{ fontSize: 40 }}>⬆️</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
