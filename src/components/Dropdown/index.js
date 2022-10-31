import React, { useEffect, useState } from "react";
import Display from "./Display";
import Option from "./Option";
import { filterOptionsNotInArray, getOptionTitle } from "./helperFunctions";
import "./index.css";

/**
 * Dropdown component
 * @param {array} options 
 * @param {boolean} multiple 
 * @param {function} onChange 
 * @param {number} width 
 */
function Dropdown(props) {
  const { options, multiple, onChange, width} = props;
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  /* Add selected option to state */
  const handleSelectedOption = (option) => {
    if (multiple) {
        setSelectedOptions((state) => [...state, option]);
    } else {
        setSelectedOptions([option]);
    }
  }

  /* Remove the option from state */
  const handleRemoveOption = (removedIndex) => {
    setSelectedOptions((state) => {
      return state.filter((_, index) => index !== removedIndex);
    });
  }

  /* Add all options to state */
  const handleAddAllOptions = () => {
    setSelectedOptions([...options]);
  }

  /* Remove all options from state */
  const handleRemoveAllOptions = () => {
    setSelectedOptions([]);
  }

  useEffect(() => {
    if (isDropdownOpen) {
      onChange([...selectedOptions]);
    }
  }, [selectedOptions]);

  const optionsNotSelected = filterOptionsNotInArray(options, selectedOptions);
  return (
   <div style={{width: width || 300}}>
    <Display
      handleAddAllOptions={handleAddAllOptions}
      handleRemoveOption={handleRemoveOption}
      handleRemoveAllOptions={handleRemoveAllOptions}
      isDropdownOpen={isDropdownOpen}
      multiple={multiple}
      selectedOptions={selectedOptions}
      setIsDropdownOpen={setIsDropdownOpen}
      allSelectedOptions={options.length === selectedOptions.length}
    />
    {isDropdownOpen && (
      <div id="menu">
        {optionsNotSelected.map((option, index) => (
          <Option
            key={index}
            title={getOptionTitle(option)}
            handleSelectedOption={() => handleSelectedOption(option)}
            multiple={multiple}
          />
        ))}
      </div>
    )}
   </div>
  );
  }
  
  export default Dropdown;
  