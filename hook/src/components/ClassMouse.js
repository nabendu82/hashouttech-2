import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = e => {
        console.log('logMousePosition classbased')
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        console.log('logMousePosition componentDidMount')
        window.addEventListener('mousemove', this.logMousePosition)
    }

    componentWillUnmount(){
        console.log('componentWillUnmount called')
        window.removeEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <>
                <h1> X - {this.state.x}, Y - {this.state.y}</h1>
            </>
        )
    }
}

export default ClassMouse