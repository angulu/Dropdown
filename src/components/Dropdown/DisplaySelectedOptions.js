import AddClearToggle from "./AddClearToggle";
import ArrowToggle from "./ArrowToggle";
import { getOptionTitle } from "./helperFunctions";
import Tile from "./Tile";

/**
 * Displays selected options and has functionality to remove all or a single option,
 * functionality to add all options and functionality to open and close the dropdown
 * @param {function} handleSelectAllOptions callback to select all options
 * @param {function} handleRemoveOption callback to remove an option
 * @param {function} handleDeselectAllOptions callback to deselect all options
 * @param {boolean} isDropdownOpen
 * @param {boolean} multiple if true allow selecting multiple options
 * @param {string} optionLabel if option is an object, optionLabel is the name of the property whose
 * value is to be displayed as a title/label for the option
 * @param {Array} selectedOptions array of selected options
 * @param {function} setIsDropdownOpen callback to set selected options
 * @param {boolean} deselectOptions if true allow deselecting selected options
 */
function DisplaySelectedOptions(props) {
  const { handleSelectAllOptions, handleRemoveOption, handleDeselectAllOptions, isDropdownOpen, multiple, optionLabel, selectedOptions, setIsDropdownOpen, deselectOptions } = props;

  const handleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  // Components to open dropdown and select or deselect all options
  const actions = (
    <div className="actions">
      <AddClearToggle
        deselectOptions={deselectOptions}
        handleSelectAllOptions={handleSelectAllOptions}
        handleDeselectAllOptions={handleDeselectAllOptions}
        multiple={multiple}
      />
      <span className="divider"></span>
      <ArrowToggle
        isDropdownOpen={isDropdownOpen}
        handleDropdownOpen={handleDropdownOpen}
      />
    </div>
  )

  if (multiple) {
    return (
      <div
        className="display"
      >
        <section className="tile-group">
          {selectedOptions.map((option, index) => (
            <Tile
              key={index}
              title={getOptionTitle(option, optionLabel)}
              handleRemoveOption={() => handleRemoveOption(index)}
            />
          ))}
        </section>
        <span>
        {actions}
        </span>
      </div>
    );
  }

  return (
    <div
      className="display"
    >
      <span className="single-option">{getOptionTitle(selectedOptions[0], optionLabel) || ""}</span>
      {actions}
    </div>
  );
}
  
export default DisplaySelectedOptions;
  