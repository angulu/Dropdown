import "./index.css";

/**
 * Displays options title/label
 * @param {string} title 
 * @param {function} handleSelectedOption callback to select the clicked option
 */
function Option(props) {
  const { title, handleSelectedOption } = props;

  // Handles call callbacks to add or remove an option
  // in the selectedOptions state
  const handleSelect = () => {
    handleSelectedOption();
  }

  return (
    <div
      className="option"
      onClick={handleSelect}
    >
      {title}
    </div>
  );
}
  
export default Option;
  