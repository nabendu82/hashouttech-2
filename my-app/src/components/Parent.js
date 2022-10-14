import React, { Component } from 'react'
import Child from './Child'
import UserContext from './userContext'

class Parent extends Component {
    static contextType = UserContext;

    render() {
        return (
            <>
                <Child />
                <h2>Parent Component - {this.context}</h2>
            </>
        )
    }
}

export default Parent