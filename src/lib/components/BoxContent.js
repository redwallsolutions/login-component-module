import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form} from 'informed';
import {InputField} from 'form-component-module';
import {FormGroup,ButtonStyled} from './Style';
import Button from 'button-component-module';

class BoxContent extends Component {

  componentDidMount() {
    this.props.getBoxController(this.exposeBoxController());
  }

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
    this.props.onSubmit(formObject)
  }

  exposeBoxController = () => ({
    toggleButtonLoading: this.toggleButtonLoading
  })

  render() {
    const {buttonText, buttonLoadingText, subtleText} = this.props;
    return (
      <Form
        onSubmit={this.onSubmit}
        getApi={this.props.getFormApi}
      autoComplete='off'>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {this.renderFormGroups()}
          <FormGroup justify='space-between'>
            {subtleText}
            <Button loading={this.state.buttonIsLoading} appearance='primary' size='large' type='submit'>
              {buttonText}
            </Button>
          </FormGroup>
        </div>
      </Form>
    );
  }

  renderFormGroups = () => (
    (this.props.formGroups &&
    this.props.formGroups.map(formGroup=>(
      <FormGroup key={formGroup.name} justify={formGroup.justify || 'center'}>
        <InputField field={formGroup.name} type={formGroup.type} placeholder={formGroup.placeholder} icon={formGroup.icon}/>
      </FormGroup>
    ))) ||
    <p style={{textAlign:'center'}}>No content.</p>
  )

}

BoxContent.propTypes = {
  buttonText: PropTypes.string,
  buttonLoadingText: PropTypes.string,
  onSubmit: PropTypes.func,
  getFormApi: PropTypes.func
}

BoxContent.defaultProps = {
  buttonText: 'Submit',
  buttonLoadingText: 'Submiting',
  onSubmit:()=>console.log("submited"),
  getFormApi: (formApi)=>{console.log("Form Api ", formApi);}
}

export default BoxContent;
