import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { history } from '../../../helpers/history.helper';
import { RoutingPaths } from '../../../helpers/routing.paths';
import { createTest } from '../test.actions';

function CreateTestComponent() {

  const [testName , updateTestName] = useState<string>('');
  const [duration, updateDuration] = useState<number>(0);

  const dispatch = useDispatch();

  function onCreateTest() {
    dispatch(createTest({
      name: testName,
      timer: duration
    }));
    history.push(RoutingPaths.add_question);
  }

  return (
    <div>
      <input type="text" name = 'test_name' placeholder= 'Enter test name' onChange = {(e) => updateTestName(e.target.value)}/>
      <input type="text" name = 'duration' placeholder= 'Enter test duration' onChange = {(e) => updateDuration(parseInt(e.target.value))}/>
      <button onClick = {() => onCreateTest()}>Create Test</button>
    </div>
  );
}

export default CreateTestComponent;