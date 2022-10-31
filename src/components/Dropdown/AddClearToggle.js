import clear from '../../asset/icons/clear.png';
import add from '../../asset/icons/add.png';

/**
 * Allows selecting and deselecting all options
 * @param {boolean} allSelectedOptions true if all options are selected
 * @param {function} handleSelectAllOptions callback to select all options
 * @param {function} handleDeselectAllOptions callback to remove all options
 */
function AddClearToggle(props) {
  const { allSelectedOptions, handleSelectAllOptions, handleDeselectAllOptions } = props;
  if (allSelectedOptions) {
    return (
    <img
      src={clear}
      onClick={handleDeselectAllOptions}
      width={21}
      height={21}
      alt="clear"
      className="pointer"
      />
    );
  }

  return (
    <img
      src={add}
      onClick={handleSelectAllOptions}
      width={21}
      height={21}
      alt="add"
      className="pointer"
     />
   );
}
  
export default AddClearToggle;
  