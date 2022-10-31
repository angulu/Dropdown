import clear from '../../asset/icons/clear.png';
import add from '../../asset/icons/add.png';

function AddClearToggle(props) {
    const { allSelectedOptions, handleAddAllOptions, handleRemoveAllOptions } = props;
    if (allSelectedOptions) {
        return (
        <img
            src={clear}
            onClick={handleRemoveAllOptions}
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
           onClick={handleAddAllOptions}
           width={21}
           height={21}
           alt="add"
           className="pointer"
         />
     );
}
  
  export default AddClearToggle;
  