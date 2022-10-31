import upArrow from "../../asset/icons/up-arrow.png";
import downArrow from "../../asset/icons/down-arrow.png";

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
