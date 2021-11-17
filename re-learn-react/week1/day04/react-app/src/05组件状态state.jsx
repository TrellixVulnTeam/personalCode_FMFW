
import React, { Component } from 'react'


export default class App extends Component {

    //状态state的两种方式，一种是直接添加，一种是通过es6的继承机制添加state

    // state = {
    //     list: ['aaaa', 'bbbb']
    // }

    constructor (props) {  //es5和es6继承机制的区别
        super(props)
        this.state = {
            list: ['111', '2222']
        }
    }
    render () {
        return (
            <>
                { this.state.list }
            </>
        )
    }
}
