import React, { Fragment, useState } from 'react';
import QuestionComponent from '../question/question.component';
import OptionComponent from '../options/option/option.component';


const AddQuestionComponent : React.FC = () => {
  const [optionsNumber, updateOptionsCount] = useState<number>(4);
  let options = [];
  for (let i = 0; i < optionsNumber; ++i) {
    options.push(<div key={i}>
      <OptionComponent index = {i}></OptionComponent>
    </div>)
  }

  return (
    <Fragment>
      <input type = 'number' name= 'noOfOptions' defaultValue= '4' onChange = {(e) => updateOptionsCount(parseInt(e.target.value))}></input>
      <QuestionComponent />
      {options}
      <button>Next Question</button>
      <button>Save Test</button>
    </Fragment>
  );
}

export default AddQuestionComponent;