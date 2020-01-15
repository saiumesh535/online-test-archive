import React, { Fragment } from 'react';

interface Props {
  radioNumber: number;
  setAnswer: (radio: number) => void;
}
function RadioOptionComponent(props: Props) {
  return (
    <Fragment>
      <span>{props.radioNumber}</span>
      <input
        type = 'radio'
        name = 'option'
        placeholder = {props.radioNumber.toString()}
        onClick = {() => props.setAnswer(props.radioNumber)}
        />
    </Fragment>
  );
}

export default RadioOptionComponent;