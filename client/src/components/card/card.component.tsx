import React from 'react';

interface Props{
  name: string;
  action: () => void;
}
function CardComponent(props: Props) {
  return (
    <div>
      <button className= 'card' onClick = {props.action}>{props.name}</button>
    </div>
  );
}

export default CardComponent;
