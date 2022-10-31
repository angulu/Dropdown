import AddClearToggle from "./AddClearToggle";
import ArrowToggle from "./ArrowToggle";
import { getOptionTitle } from "./helperFunctions";
import Tile from "./Tile";

function Display(props) {
  const { handleAddAllOptions, handleRemoveOption, handleRemoveAllOptions, isDropdownOpen, multiple, optionLabel, selectedOptions, setIsDropdownOpen, allSelectedOptions } = props;

  const handleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const actions = (
    <div className="actions">
      {multiple && (
        <>
          <AddClearToggle
            allSelectedOptions={allSelectedOptions}
            handleAddAllOptions={handleAddAllOptions}
            handleRemoveAllOptions={handleRemoveAllOptions}
          />
          <span className="divider"></span>
        </>
      )}
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
  
export default Display;
  