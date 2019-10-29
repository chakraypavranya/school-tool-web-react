import React from 'react';
import {Router, Route,Switch} from 'react-router-dom';

import history from '../history';
import Landing from './Landing/Landing';
import SchoolHome from './School/Home';
import GurdianHome from './Gurdian/Home';
import TeacherHome from './Teacher/Home';
import ProtectedRoute from './ProtectedRoute';
import Register from './School/Register';

import {
    ROOT_URL,
    SCHOOL_HOME_URL,
    GURDIAN_HOME_URL,
    TEACHER_HOME_URL,
    REGISTER_SCHOOL_URL
} from '../resources/urls';

const App = () =>{
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path={ROOT_URL} exact component={Landing}/>
                        <ProtectedRoute path={SCHOOL_HOME_URL} exact component={SchoolHome}/>
                        <ProtectedRoute path={GURDIAN_HOME_URL} exact component={GurdianHome}/>
                        <ProtectedRoute path={TEACHER_HOME_URL} exact component={TeacherHome}/>
                        <ProtectedRoute path={REGISTER_SCHOOL_URL} exact component={Register}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;