import React from 'react';
import { Switch, Route } from 'react-router';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' />
            <Route path='/terjemahan' />
            <Route path='/legalisasi' />
            <Route path='/about' />
            <Route path='/contact' />
            <Route path='/blog' />
        </Switch>
    )
}

export default Routes