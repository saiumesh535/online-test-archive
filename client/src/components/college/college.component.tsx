import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTests } from '../test/tests.selector'
import SelectComponent from '../stateless/input/select/select.component';
import InputComponent from '../stateless/input/input.component';
import { saveCollege } from './college.actions';

function CollegeComponent() {
    const tests = useSelector(selectTests);
    const [selectedTestId, setSelectedTestId] = useState<number>(tests[0].id);
    const [collegeName, setCollegeName] = useState('');

    const dispatch = useDispatch();

    function onTestSelect(value: string) {
        const selectedTest = tests.find((test) => test.name === value);
        if(selectedTest) {
            setSelectedTestId(selectedTest.id);
        }
    }

    function onCollegeSubmit() {
        dispatch(saveCollege({
            name: collegeName,
            testID: selectedTestId
        }));
    }

    return (
        <Fragment>
            <SelectComponent
                onSelect={onTestSelect}
                options={tests.map((test) => test.name)}
            />
            <InputComponent
                id="college_name"
                label="Enter College name"
                onChange={(e) => setCollegeName(e.target.value)}
                placeholder="Enter College name"
                type="text"
                value={collegeName}
            />
            <button onClick={onCollegeSubmit}>Save</button>
        </Fragment>
    )
}

export default CollegeComponent
