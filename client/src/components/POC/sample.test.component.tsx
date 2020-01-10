import React, { Fragment } from 'react';
import data from './fakedata/data.json';
import { TestData } from './fakedata/types';
import OptionsComponent from './fakedata/options.component';

function Sample() {
    const testData: TestData = data;
    return (
        <Fragment>
            <p>Hello!!</p>
            {testData.questions.map((question) => (
                <Fragment>
                    <p>Q: {question.question}</p>
                    <OptionsComponent id={question.id} options={question.options} />
                </Fragment>
            ))}
        </Fragment>
    )
}

export default Sample;
