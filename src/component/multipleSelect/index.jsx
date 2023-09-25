// import React, { useState } from 'react';
// const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
// const MultipleSelectCheckbox = ({ onChange }) => {
//     const [selectedOptions, setSelectedOptions] = useState([]);

//     const handleCheckboxChange = (option) => {
//         if (selectedOptions.includes(option)) {
//             setSelectedOptions(selectedOptions.filter(item => item !== option));
//         } else {
//             setSelectedOptions([...selectedOptions, option]);
//         }

//         if (onChange) {
//             onChange(selectedOptions);
//         }

//         console.log(option, "qqqqq1")
//     };

//     return (
//         <div>
//             <h1>MultipleSelectCheckbox</h1>
//             {options.map(option => (
//                 <label key={option}>
//                     <input
//                         type="checkbox"
//                         value={option}
//                         checked={selectedOptions.includes(option)}
//                         onChange={() => handleCheckboxChange(option)}
//                     />
//                     {option}
//                 </label>
//             ))}
//         </div>
//     );
// };

// export default MultipleSelectCheckbox;


import React, { useState } from 'react';

const MultipleSelectCheckbox = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [checkboxItems, setCheckboxItems] = useState([]);


    const option = [
        { id: 1, label: 'Item 1' },
        { id: 2, label: 'Item 2' },
        { id: 3, label: 'Item 3' },
        { id: 4, label: 'Item 4' },
        { id: 5, label: 'Item 5' },
        { id: 6, label: 'Item 6' }]

    const toggleCheckbox = (item) => {

        if (!checkboxItems.includes(item)) {
            setCheckboxItems(pre => [...pre, item])
        } else {
            const res = checkboxItems.filter(ra => ra !== item)
            setCheckboxItems(res)
        }

    };
    console.log(checkboxItems, "value66")

    const toggleSelectAll = () => {
        const selectall = option.id.length;
        // setSelectAll(!selectall);
        console.log(selectall, "ww")
    };

    return (
        <div><h1>checkbox</h1>
            <label>
                <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={toggleSelectAll}
                />
                Select All
            </label>
            <ul>
                {option.map(item => (
                    <li key={item.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={checkboxItems.includes(item.id)}
                                onChange={() => toggleCheckbox(item.id)}
                            />
                            {item.id}
                            {item.label}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MultipleSelectCheckbox;