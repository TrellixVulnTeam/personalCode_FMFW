import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from  './01-base/01-class组件'
// import App from  './01-base/02-函数式组件'
// import App from  './01-base/03-组件的嵌套'
// import App from  './01-base/04-组件的样式'
// import App from  './01-base/05-事件绑定-1'
// import App from  './01-base/06-事件绑定-2'
// import App from  './01-base/07-ref'
// import App from  './01-base/08-state'
// import App from  './01-base/09-循环渲染'
// import App from  './01-base/10-todolist'
// import App from  './01-base/12-卖座选项卡'
// import App from  './01-base/13-setstate同步异步'
// import App from  './01-base/14-betterScroll'
// import App from  './01-base/16-props'
// import App from  './01-base/17-props函数式组件'
// import App from  './01-base/18-状态vs属性'
// import App from  './01-base/19-非受控'
// import App from  './01-base/20-受控组件'
// import App from  './01-base/21-受控Cinima'
// import App from  './01-base/22-受控todoList'
// import App from  './02-advanced/01-子传父'
// import App from  './02-advanced/03-受控卖座选项卡'
// import App from  './02-advanced/04-父子通信版-表单域组件'
// import App from  './02-advanced/05-ref版-表单域组件'
// import App from  './02-advanced/06-中间人模式'
// import App from  './02-advanced/07-发布订阅模式'
// import App from  './02-advanced/08-订阅发布模式案例'
// import App from  './02-advanced/09-contex'
// import App from  './02-advanced/10-插槽'
// import App from  './02-advanced/11-插槽抽屉'
// import App from  './02-advanced/12-生命周期-初始化'
// import App from  './02-advanced/13-生命周期-初始化案例'
// import App from  './02-advanced/14-生命周期-更新阶段'
// import App from  './02-advanced/15-生命周期-更新阶段2'
// import App from  './02-advanced/16-生命周期-更新阶段2-案例'
// import App from  './02-advanced/17-生命周期-更新阶段3'
// import App from  './02-advanced/18-生命周期-更新阶段3-案例'
// import App from  './02-advanced/19-生命周期-销毁'
// import App from  './02-advanced/20-新生命周期-1'
// import App from  './02-advanced/21-新生命周期-1-案例'
// import App from  './02-advanced/22-新生命周期-2-案例'
// import App from  './02-advanced/23-新生命周期-2-案例'
// import App from  './02-advanced/24-性能优化'
// import App from  './02-advanced/25-swiper同步'
// import App from  './02-advanced/26-swiper-异步'
// import App from  './02-advanced/27-swiper组件'
// import App from  './03-hooks/01-useState'
// import App from  './03-hooks/02-todolist'
// import App from  './03-hooks/03-useEffect'
// import App from  './03-hooks/04-useEffect2'
// import App from  './03-hooks/05-useEffect2-案例'
// import App from  './03-hooks/06-useEffect3-案例'
// import App from  './03-hooks/07-useCallback'
// import App from  './03-hooks/08-useCallback2'
// import App from  './03-hooks/09-useMemo'
// import App from  './03-hooks/10-useRef'
// import App from  './03-hooks/11-useRef保存值'
// import App from  './03-hooks/12-useContext'
// import App from  './03-hooks/13-useReducer1'
// import App from  './03-hooks/14-useReducer2'
// import App from  './03-hooks/15-useReducer3'
// import App from  './03-hooks/16-自定义Hooks'
// import App from './04-antd/01-antd'
// import App from './04-antd/02-栅格'
import 'antd/dist/antd.min.css';
import './index.css'
// import App from './04-antd/08-树形控件'
import App from './05-immutable/06-修改信息'

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
// <React.StrictMode>
//     <App/>
// </React.StrictMode>
// )
root.render(
        <App/>
    )

/**
 * jsx语法 js+xmls
 */