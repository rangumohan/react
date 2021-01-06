import React, { Component } from 'react'
import { UserContext } from './context3'
export class Context1 extends Component {
    render() {
        return (
            <div>
            <UserContext.Consumer>
                {
                    user=>
                    {
                    return<div>user context   value {user}</div>
                    }
                }
            </UserContext.Consumer>
                <h3>Context 1</h3>
            </div>
        )
    }
}

export default Context1
