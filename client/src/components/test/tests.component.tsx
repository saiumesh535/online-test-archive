import React, { useState, Fragment } from 'react'
import InputComponent from '../stateless/input/input.component'
import { useDispatch } from 'react-redux';
import { createTest } from './test.actions';

function TestComponent() {
    const [testName, setTestName] = useState('');
    const [testTime, setTestTime] = useState(0);
    const [testCutOff, setTestCutOff] = useState(0);
    const dispatch = useDispatch();

    function submitTest() {
        dispatch(createTest({
            name: testName,
            timer: testTime,
            cutOff: testCutOff
          }));
    }

    return (
        <Fragment>
            <InputComponent
                id="test_name"
                label="Test Name"
                placeholder="Enter Test Name"
                type='text'
                value={testName}
                onChange={(e) => setTestName(e.target.value)}
            />
            <InputComponent
                id="test_time"
                label="Test Time"
                placeholder="Enter Test Time"
                value={testTime}
                type={'number'}
                onChange={(e) => setTestTime(Number(e.target.value))}
            />
            <InputComponent
                id="test_cutoff"
                label="Test Cutoff"
                placeholder="Enter Test Cutoff"
                type={'number'}
                value={testCutOff}
                onChange={(e) => setTestCutOff(Number(e.target.value))}
            />
            <button value="Create Test" onClick ={submitTest} />
        </Fragment>
    )
}

export default TestComponent
