import clear from '../../asset/icons/clear.png';
import "./index.css";

/**
 * Tile displays selected options
 * @param {function} handleRemoveOption callback to remove option
 * @param {string} title option title
 * @returns 
 */
function Tile(props) {
  const { handleRemoveOption, title } = props;
  return (
   <div className="tile">
    <span>{title}</span>
    <img
      src={clear}
      onClick={handleRemoveOption}
      width={20}
      height={20}
      alt="clear"
    />
   </div>
  );
}

export default Tile;
