import React, { memo, ChangeEvent } from 'react'

interface Props {
    options: string[];
    onSelect: (value: string) => void;
}

function SelectComponent(props: Props) {
    function onSelect(e: ChangeEvent<HTMLSelectElement>) {
        props.onSelect(e.target.value);
    }
    return (
        <select onChange={onSelect}>
            {
                props.options.map((option, index) => (
                    <option
                        key={option}
                        value={option}>{option}
                    </option>
                ))
            }
        </select>
    )
}

export default memo(SelectComponent);

