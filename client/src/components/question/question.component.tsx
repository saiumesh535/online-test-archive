import React from 'react';

interface Props {
  setQuestion: (value: string) => void;
}

function QuestionComponent( props: Props) {
  return (
  <div>
    <textarea placeholder= 'Enter question here' onChange = {(e) => props.setQuestion(e.target.value)}/>
  </div>
  );
}

export default QuestionComponent;