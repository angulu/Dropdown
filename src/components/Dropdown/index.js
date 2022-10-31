import React, { useEffect, useState } from "react";
import DisplaySelectedOptions from "./DisplaySelectedOptions";
import Option from "./Option";
import { filterOptionsNotInArray, getOptionTitle, getValidWidth } from "./helperFunctions";
import "./index.css";

/**
 * Dropdown component
 * @param {*} options 
 * @param {boolean} multiple if true allow selecting multiple options
 * @param {function} onChange 
 * @param {string} optionLabel if option is an object, optionLabel is the name of the property whose
 * value is to be displayed as a title/label for the option
 * @param {number} width 
 */
function Dropdown(props) {
  const { options, multiple, onChange, optionLabel, width} = props;
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
  const handleSelectAllOptions = () => {
    setSelectedOptions([...options]);
  }

  /* Remove all options from state */
  const handleDeselectAllOptions = () => {
    setSelectedOptions([]);
  }

  useEffect(() => {
    if (isDropdownOpen) {
      onChange([...selectedOptions]);
    }
  }, [selectedOptions]);

  if (!Array.isArray(options)) {
    return <></>
  }

  const optionsNotSelected = filterOptionsNotInArray(options, selectedOptions);
  // Allow clearing selected options in multi select when all are selected,
  // in single select when one option is selected
  const allowDeselectOptions = options.length === selectedOptions.length || (!multiple && selectedOptions.length);
  return (
    <div style={{width: getValidWidth(width)}}>
      <DisplaySelectedOptions
        handleSelectAllOptions={handleSelectAllOptions}
        handleRemoveOption={handleRemoveOption}
        handleDeselectAllOptions={handleDeselectAllOptions}
        isDropdownOpen={isDropdownOpen}
        multiple={multiple}
        optionLabel={optionLabel}
        selectedOptions={selectedOptions}
        setIsDropdownOpen={setIsDropdownOpen}
        deselectOptions={allowDeselectOptions}
      />
      {isDropdownOpen && (
        <div id="menu">
          {optionsNotSelected.map((option, index) => (
            <Option
              key={index}
              title={getOptionTitle(option, optionLabel)}
              handleSelectedOption={() => handleSelectedOption(option)}
            />
          ))}
          {optionsNotSelected.length === 0 && (
            <div id="option-placeholder">No options</div>
          )}
        </div>
      )}
    </div>
  );
}
  
export default Dropdown;
  