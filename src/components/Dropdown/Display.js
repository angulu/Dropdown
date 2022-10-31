import { getOptionTitle } from "./helperFunctions";
import Tile from "./Tile";

function Display(props) {
  const { handleAddAllOptions, handleRemoveOption, handleRemoveAllOptions, selectedOptions, setIsDropdownOpen } = props;

  const handleDropdownOpen = () => {
    setIsDropdownOpen((state) => !state);
  }

  return (
    <div
      className="display tile-group"
      onClick={handleDropdownOpen}
    >
      {selectedOptions.map((option, index) => (
        <Tile
          key={index}
          title={getOptionTitle(option)}
          handleRemoveOption={() => handleRemoveOption(index)}
        />
      ))}
    </div>
  );
}
  
export default Display;
  