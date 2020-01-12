import React, { useState } from 'react'
import InputComponent from '../stateless/input/input.component'
import { useDispatch } from 'react-redux';
import { createTest } from './test.actions';
import { RoutingPaths } from '../../helpers/routing.paths';
import { history } from '../../helpers/history.helper';

function TestComponent() {
    const [testName, setTestName] = useState('');
    const [testTime, setTestTime] = useState(0);
    const [testCutOff, setTestCutOff] = useState(0);
    const dispatch = useDispatch();

    async function onFormSubmit() {
        dispatch(createTest({
            name: testName,
            timer: testTime,
            cutoff: testCutOff
          }));
        history.push(RoutingPaths.add_question);
    }

    return (
        <form onSubmit={onFormSubmit}>
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
            <input type="submit" value="submit"/>
        </form>
    )
}

export default TestComponent
