import clear from '../../asset/icons/clear.png';
import add from '../../asset/icons/add.png';

/**
 * Allows selecting and deselecting all options
 * @param {boolean} deselectOptions if true allow deselecting selected options
 * @param {function} handleSelectAllOptions callback to select all options
 * @param {function} handleDeselectAllOptions callback to remove all options
 * @param {boolean} multiple if true allow selecting multiple options
 */
function AddClearToggle(props) {
  const { deselectOptions, handleSelectAllOptions, handleDeselectAllOptions, multiple } = props;
  if (deselectOptions) {
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

  if (multiple) {
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

  return <></>;
}
  
export default AddClearToggle;
  