import React, { Fragment } from 'react';
import RadioOptionComponent from '../optionRadio/radio.option.component';

interface Props{
  index: number;
}

function OptionComponent(props: Props) {
  return(
    <Fragment>
      <RadioOptionComponent radioNumber={props.index} />
      <input type= 'text' name= 'option' placeholder= 'Enter option here'></input>
    </Fragment>
  );
}

export default OptionComponent;