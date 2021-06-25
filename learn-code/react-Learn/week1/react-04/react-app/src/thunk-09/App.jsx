import React, { Component } from 'react';
import  { connect } from 'react-redux'
import { getListAction } from './store/actionCreator'

@connect(state => ({list:state.list}), dispatch => ({
    getList(){
        dispatch(getListAction())
    }
}))
class App extends Component {
    componentDidMount() {
        this.props.getList()
    }
    render() {

        const { list } = this.props
        return (
            <ul>
                {
                 list && list.map((item) => (
                    <li key = { item.positionId }>{ item.positionName }</li>
                 ))   
                }
            </ul>
        );
    }
}

export default App;
