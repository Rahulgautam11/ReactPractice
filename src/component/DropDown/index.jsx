import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const options = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown}>{`${selectedOption ? selectedOption : "Select an option"}`}</button>
            {isOpen && (
                <ul>
                    {options.map((option) => (
                        <li key={option} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
};

export default Dropdown;