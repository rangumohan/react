import React, { Component } from 'react'
import Context2 from './context2'
export const UserContext=React.createContext()
export class context3 extends Component {
    render() {
        return (
            <div>
                <UserContext.Provider value={"naveen"}>
                <Context2/>
                </UserContext.Provider>
                
                <h3>Context 3</h3>
            </div>
        )
    }
}

export default context3
