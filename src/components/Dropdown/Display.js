import { getOptionTitle } from "./helperFunctions";

function Display(props) {
  const { selectedOptions, setIsDropdownOpen } = props;

  const handleDropdownOpen = () => {
    setIsDropdownOpen((state) => !state);
  }

  const getTitles = () => {
    return selectedOptions.map(getOptionTitle).join(", ")
  }

  return (
    <div
      className="display"
      onClick={handleDropdownOpen}
    >
      {getTitles()}
    </div>
  );
}
  
export default Display;
  