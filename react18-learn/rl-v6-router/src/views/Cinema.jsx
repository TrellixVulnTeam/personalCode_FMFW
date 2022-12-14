import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "../06-Redux/redux/store";
import { getCinemaListAction } from "./../06-Redux/redux/actionCreator/getCinemaListAction";
import BetterScroll from "better-scroll";

export default function Cinema(props) {
  const [cityName, setCityName] = useState(
    store.getState().CityReducer.cityname
  );
  const [cinemaList, setCinemaList] = useState(
    store.getState().CinemaListReducer.list
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (store.getState().CinemaListReducer.list.length === 0) {
      //去后台取数据
      // actionCreator 在这里处理异步处理
      store.dispatch(getCinemaListAction("8989")).then((res) => {
        setCinemaList(res);
      });
    } else {
        // 获取缓存数据
      setCinemaList(store.getState().CinemaListReducer.list);
    }
  }, []);

  return (
    <div>
      <div style={{ overflow: 'hidden' }}>
        <div style={{ float: 'left' }} onClick={() => {
                navigate("/city");
            }}>城市： {cityName}</div>
        <div style={{ float: 'right' }} onClick={() => {
                navigate("/cinemas/search");
            }}>搜索</div>
      </div>
      {cinemaList.map((item, index) => (
        <dl style={{ padding: "10px" }} key={item.cinemaId}>
          <dt>{item.name}</dt>
          <dd style={{ fontSize: "12px" }}>{item.address}</dd>
        </dl>
      ))}
    </div>
  );
}
