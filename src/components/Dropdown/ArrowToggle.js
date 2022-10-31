import upArrow from "../../asset/icons/up-arrow.png";
import downArrow from "../../asset/icons/down-arrow.png";

/**
 * ArrowToggle enables opening and closing of the dropdown 
 * @param {boolean} isDropdownOpen 
 * @param {function} handleDropdownOpen callback to toggle isDropdownOpen
 * @returns 
 */
function ArrowToggle(props) {
  const { isDropdownOpen, handleDropdownOpen } = props;
  if (isDropdownOpen) {
    return (
      <img
          src={upArrow}
          onClick={handleDropdownOpen}
          width={15}
          height={15}
          alt="up arrow"
          className="pointer"
        />
       );
  }

  return (
    <img
      src={downArrow}
      onClick={handleDropdownOpen}
      width={15}
      height={15}
      alt="down arrow"
      className="pointer"
    />
  );
}

export default ArrowToggle;
