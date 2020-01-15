import React, { Fragment, ChangeEvent, memo } from 'react';

interface Props {
    id: string;
    label: string;
    placeholder: string;
    value: string | number;
    type: 'number' | 'text' | 'radio';
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputComponent(props: Props) {
    return (
        <Fragment>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </Fragment>
    )
}

export default memo(InputComponent);

