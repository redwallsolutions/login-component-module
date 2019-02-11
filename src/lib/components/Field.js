import React, {Component} from 'react';
import {asField} from 'informed';
import {InputStyled, LabelStyled, InputIcon} from './Style';

class Field extends Component {

  state = {
    isFocused: false
  }

  toggleFocus = () => {
    this.setState({
      isFocused:!this.state.isFocused
    });
  }

  onFocus = () => {
    this.toggleFocus();
  }

  render(){
    const {
      onChange,
      onBlur,
      initialValue,
      forwardedRef,
      fieldState,
      fieldApi,
      icon,
      ...rest
    } = this.props;
    const {value} = fieldState;
    const {setValue, setTouched} = fieldApi;
    return (<React.Fragment>
      <InputIcon isFocused={this.state.isFocused}>
        {icon}
      </InputIcon>
      <InputStyled {...rest} ref={forwardedRef} value={!value && value !== 0
        ? ''
        : value
      } onChange={e => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      }
      } onBlur={e => {
        setTouched();
        this.toggleFocus();
        if (onBlur) {
          onBlur(e);
        }
      }} onFocus={this.onFocus}
        isFocused={this.state.isFocused}/>
    </React.Fragment>);
  }
}

export default asField(Field);
