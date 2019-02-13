import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form} from 'informed';
import Field from './Field';
import {FormGroup,SubtleText,ButtonStyled} from './Style';
import { FaLock, FaUserAlt } from 'react-icons/fa';

class BoxContent extends Component {

  state = {
    buttonIsLoading: false
  }

  toggleButtonLoading = () => {
    this.setState({
      buttonIsLoading: !this.state.buttonIsLoading
    });
  }

  onSubmit = (formObject) => {
    this.setState({
      buttonIsLoading: true
    });
    this.props.onSubmit({
      component: {
        toggleButtonLoading: this.toggleButtonLoading,
        formObject
      }
    })
  }


  render() {
    const {buttonText, buttonLoadingText, subtleText} = this.props;
    return (
      <Form
        onSubmit={this.onSubmit}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {this.renderFormGroups()}
          <FormGroup justify='space-between' style={{marginTop: '1em'}}>
            {subtleText}
            <ButtonStyled disabled={this.state.buttonIsLoading} type='submit'>
              {this.state.buttonIsLoading ? (buttonLoadingText + '...') :buttonText}
            </ButtonStyled>
          </FormGroup>
        </div>
      </Form>
    );
  }

  renderFormGroups = () => (
    (this.props.formGroups &&
    this.props.formGroups.map(formGroup=>(
      <FormGroup key={formGroup.name} justify={formGroup.justify || 'center'}>
        <Field name={formGroup.name} type={formGroup.type} placeholder={formGroup.placeholder} icon={formGroup.icon}/>
      </FormGroup>
    ))) ||
    <p style={{textAlign:'center'}}>No content.</p>
  )

}

BoxContent.propTypes = {
  buttonText: PropTypes.string,
  buttonLoadingText: PropTypes.string,
  onSubmit: PropTypes.func
}

BoxContent.defaultProps = {
  buttonText: 'Submit',
  buttonLoadingText: 'Submiting',
  onSubmit:()=>console.log("submited")
}

export default BoxContent;