import React, { Component } from 'react';
import RegistrationFormPage1 from './RegistrationFormPage1';
import RegistrationFormPage2 from './RegistrationFormPage2';
import RegistrationFormSubmit from './RegistrationFormSubmit';


export class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { page } = this.state;

    return (
      <div className="ui container">
        <div className="ui segment">
          {page === 1 && <RegistrationFormPage1 onSubmit={this.nextPage} title="Fill Guardian Details" />}
          {page === 2 && (<RegistrationFormPage2 previousPage={this.previousPage} onSubmit={this.nextPage} title="Fill Guardian Address"/>)}
          {page === 3 && (<RegistrationFormSubmit previousPage={this.previousPage} title="Confirm Guardian Details" />)}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
