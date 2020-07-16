import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState()
    console.log(selectedOption)

    const handleChange = (selectedOption) => {
        setSelectedOption({ selectedOption })
    }

    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
        />
    )
}

export default Dropdown;