import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from '../Layout/Header';
import MainLayout from '../Layout/MainLayout';
import InlineLoader from '../UI/InlineLoader';

import{getGuardians} from '../../redux/actions/guardian';

import {
  NEW_EVENT_URL
} from '../../resources/urls';

import { GuardianTable } from './GuardianTable';

export class Guardian extends Component {
    
    state={
        isLoading: true
    }

    componentDidMount(){
        this.props.getGuardians(this.props.schoolId);
    }

    componentDidUpdate(prevPorps){
        if(this.props.guardians !== prevPorps.guardians){
          this.setState({isLoading:false});
        }
    }
    
    renderGuardianTable(){
        if(this.props.guardians){
          return(
            <GuardianTable value = {this.props.guardians}/>
          )
        }
    }

    render() {
        const {firstName, lastName, image_Url} = this.props.googleUser;
        
        return (
          <React.Fragment>
            <MainLayout>
              <Header firstName={firstName} lastName={lastName} image_Url={image_Url}/>
              <div className="ui container calendar">
                {this.renderGuardianTable()} 
              </div>
            </MainLayout>
            {this.state.isLoading &&
                <InlineLoader/>
            }
          </React.Fragment>
        )
      }
}

const mapStateToProps = (state) =>{
    return{ schoolId: state.auth.user.id,  
            googleUser: state.auth.googleUser , 
            guardians: state.school.guardians  }
  }

export default connect(mapStateToProps,{getGuardians})(Guardian)
