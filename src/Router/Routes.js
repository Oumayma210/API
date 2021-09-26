import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Profile from './../components/Profile';
import UserList from './../components/UserList';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={UserList}/>
            <Route exact path='/profile/:id' component={Profile}/>

        </Switch>
    )
}

export default Routes
