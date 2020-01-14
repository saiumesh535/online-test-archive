import React, { useState } from 'react'
import InputComponent from '../stateless/input/input.component'
import { testAPI } from '../../api/http';

function TestComponent() {
    const [testName, setTestName] = useState('');
    const [testTime, setTestTime] = useState(0);
    const [testCutOff, setTestCutOff] = useState(0);
    async function onFormSubmit() {
        try {
            await testAPI({
                name: testName,
                cutoff: testCutOff,
                timer: testTime
            });
        } catch (error) {
            console.error(error)
        }
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
