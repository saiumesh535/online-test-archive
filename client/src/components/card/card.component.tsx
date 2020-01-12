import React from 'react';
import { prependOnceListener } from 'cluster';

interface Props{
  name: string;
  action: () => void;
}
function CardComponent(props: Props) {
  return (
    <div>
      <div className= 'card' onClick = {()=> props.action()}>
        <span className = 'card_name'>{props.name}</span>
      </div>
    </div>
  );
}

export default CardComponent;
