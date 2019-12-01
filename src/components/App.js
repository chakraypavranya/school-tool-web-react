import React from 'react';
import {Router, Route,Switch} from 'react-router-dom';

import history from '../history';
import Landing from './Landing/Landing';
import SchoolHome from './School/Home';
import GurdianHome from './Gurdian/Home';
import TeacherHome from './Teacher/Home';
import ProtectedRoute from './ProtectedRoute';

import Register from './School/Register';
import Guardian from './School/Guardian';

import GuardianRegister from './Gurdian/Register';
import Login from './Login/Login';
import NewEvent from './School/Event/NewEvent';
import EditEvent  from './School/Event/EditEvent';
import '../styles/main.scss';

import {
    ROOT_URL,
    SCHOOL_HOME_URL,
    GURDIAN_HOME_URL,
    TEACHER_HOME_URL,
    REGISTER_SCHOOL_URL,
    NEW_EVENT_URL,
    EDIT_EVENT_URL,
    LOGIN_URL,
    SCHOOL_GUARDIAN_NEW_URL,
    SCHOOL_GUARDIAN_URL 
} from '../resources/urls';


const App = () =>{
    return (
        <Router history={history}>
            <Switch>
                <Route path={ROOT_URL} exact component={Landing}/>
                <Route path={LOGIN_URL} exact component={Login}/>
               
                <ProtectedRoute path={SCHOOL_HOME_URL} exact component={SchoolHome}/>
                <ProtectedRoute path={SCHOOL_GUARDIAN_NEW_URL} exact component={GuardianRegister}/>
                <ProtectedRoute path={SCHOOL_GUARDIAN_URL} exact component={Guardian}/>
                <ProtectedRoute path={NEW_EVENT_URL} exact component={NewEvent}/>
                <ProtectedRoute path={EDIT_EVENT_URL} exact component={EditEvent}/>


                <ProtectedRoute path={GURDIAN_HOME_URL} exact component={GurdianHome}/>
                <ProtectedRoute path={TEACHER_HOME_URL} exact component={TeacherHome}/>

                <ProtectedRoute path={REGISTER_SCHOOL_URL} exact component={Register}/>
                
                
            </Switch>
        </Router>
    )
}

export default App;