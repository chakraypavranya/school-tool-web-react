import React from 'react';
import {Router, Route,Switch} from 'react-router-dom';

import history from '../history';
import Landing from './Landing/Landing';
import SchoolHome from './School/Home';
import GurdianHome from './Gurdian/Home';
import TeacherHome from './Teacher/Home';
import ProtectedRoute from './ProtectedRoute';
import Register from './School/Register';

import '../styles/main.scss';

import {
    ROOT_URL,
    SCHOOL_HOME_URL,
    GURDIAN_HOME_URL,
    TEACHER_HOME_URL,
    REGISTER_SCHOOL_URL,
    NEW_EVENT_URL
} from '../resources/urls';
import Login from './Login/Login';
import NewEvent from './School/Event/NewEvent';

const App = () =>{
    return (
        <Router history={history}>
            <Switch>
                <Route path={ROOT_URL} exact component={Landing}/>
                <Route path='/Login' exact component={Login}/>
                {/* <Route path={REGISTER_SCHOOL_URL} exact component={Register}/> */}
                <ProtectedRoute path={SCHOOL_HOME_URL} exact component={SchoolHome}/>
                <ProtectedRoute path={GURDIAN_HOME_URL} exact component={GurdianHome}/>
                <ProtectedRoute path={TEACHER_HOME_URL} exact component={TeacherHome}/>
                <ProtectedRoute path={REGISTER_SCHOOL_URL} exact component={Register}/>
                <ProtectedRoute path={NEW_EVENT_URL} exact component={NewEvent}/>
            </Switch>
        </Router>
    )
}

export default App;