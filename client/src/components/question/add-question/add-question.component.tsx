import React, { Fragment, useState } from 'react';
import QuestionComponent from '../question.component';
import OptionComponent from '../../options/option/option.component';
import RadioOptionComponent from '../../options/optionRadio/radio.option.component';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestionInit } from '../question.actions';
import { selectTestId } from '../../test/test.selectors';
import { MINIMUM_OPTIONS, MAXIMUM_OPTIONS } from '../../../helpers/constants';


const AddQuestionComponent : React.FC = () => {

  let initOptions: string[] = [];
  for(let i=1; i<= MINIMUM_OPTIONS; i++){
    initOptions.push('')
  }

  function updateOptionsCount(numberOfOptions: number) {
    if(numberOfOptions < MINIMUM_OPTIONS){
      return;
    }
    if(numberOfOptions> noOfOptions) {
      for(let i= noOfOptions; i< numberOfOptions; i++) {
        options.push('');
      }
    }
    if(numberOfOptions< noOfOptions) {
      for(let i= noOfOptions; i > numberOfOptions; i--) {
        options.pop();
      }
    }
    updateOptions(options);
    updateNoOfOptions(numberOfOptions);
  }
  const [answerOption, setAnswerOption] = useState<number>(0);
  const [noOfOptions, updateNoOfOptions] = useState<number>(MINIMUM_OPTIONS)
  const [question, setQuestion] = useState<string>('');
  const [options, updateOptions] = useState<string[]>(initOptions);
  const testId = useSelector(selectTestId);
  const dispatch = useDispatch();

  function addQuestion () {
    dispatch(addQuestionInit({
      question,
      noOfOptions: noOfOptions,
      options,
      testId,
      answerIndex: answerOption
    }))
  }

  function updateOptionValue(value: any, index: number) {
    options[index] = value;
    updateOptions(options);
  }

  return (
    <Fragment>
      <label>No of Options</label>
      <input type = 'number' name= 'noOfOptions' min= {MINIMUM_OPTIONS} max= {MAXIMUM_OPTIONS} defaultValue= {MINIMUM_OPTIONS} onChange = {(e) => updateOptionsCount(parseInt(e.target.value))}></input>
      <QuestionComponent setQuestion= {setQuestion}/>
      {
        options.map ( (option,index) => (
          <div key={index}>
            <RadioOptionComponent radioNumber={index+1} setAnswer = {(index) => setAnswerOption(index-1)}/>
            <OptionComponent option= {index} updateOption = {(value, index) => updateOptionValue(value, index)}/>
          </div>
        ))
      }
      <button onClick = {addQuestion}>Add Question</button>
    </Fragment>
  );
}

export default AddQuestionComponent;