import React from 'react';
import {Router, Route,Switch} from 'react-router-dom';

import history from '../history';
import Landing from './Landing/Landing';
import Home from './School/Home';
import ProtectedRoute from './ProtectedRoute';

const App = () =>{
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/" exact component={Landing}/>
                        <ProtectedRoute path="/home" exact component={Home}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;