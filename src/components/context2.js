import React, { Component } from 'react'
import Context1 from './context1'

export class Context2 extends Component {
    render() {
        return (
            <div>
                <Context1/>
                <h2>Context 2</h2>
            </div>
        )
    }
}

export default Context2
