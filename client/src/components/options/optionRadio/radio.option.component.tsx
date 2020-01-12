import React from 'react';

interface Props {
  radioNumber: number;
}
function RadioOptionComponent(props: Props) {
 return(
     <span>{props.radioNumber}</span>
 );
}

export default RadioOptionComponent;