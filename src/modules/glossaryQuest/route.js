import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import QuestListContainer from './containers/QuestListContainer'

class route extends Component {
    render() {
        return (
            <Switch>
                <Route component={QuestListContainer} path='/' />
            </Switch>
        )
    }
}

export default route
