import React, { Fragment } from 'react';
import RadioOptionComponent from '../optionRadio/radio.option.component';

interface Props{
  option: number;
  updateOption: (value: any, index: number) => void;
}

function OptionComponent(props: Props) {
  return(
    <Fragment>
      <input type= 'text' name= 'option' placeholder= 'Enter option here' onChange = {(e) => props.updateOption(e.target.value, props.option)}></input>
    </Fragment>
  );
}

export default OptionComponent;