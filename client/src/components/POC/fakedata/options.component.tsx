import React, { Fragment, useState, ChangeEvent } from 'react';

interface Props {
    id: number;
    options: string[];
}

interface OptionsCheck {
    checked: boolean;
    option: string;
}

function mapOptions(options: string[]): OptionsCheck[] {
    return options.map((option) => {
        return {
            checked: false,
            option
        };
    });
}


function OptionsComponent(props: Props) {
    const [options, setOptions] = useState(mapOptions(props.options))
    function onOptionChange(e: ChangeEvent<HTMLInputElement>) {
        const lol: OptionsCheck[] = options.reduce<OptionsCheck[]>((prev, curr) => {
            if (curr.option === e.target.name) {
                return [...prev, { ...curr, checked: true }];
            }
            return [...prev, { ...curr, checked: false }];
        }, []);
        setOptions(lol);
    }
    return (
        <form>
            {options.map((option) => (
                <Fragment>
                    <label>{option.option}</label>
                    <input
                        onChange={onOptionChange}
                        type="radio"
                        name={option.option}
                        value={option.option}
                        checked={option.checked} />
                </Fragment>
            ))}
        </form>
    )
}

export default OptionsComponent;
