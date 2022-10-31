import { useState } from "react";
import "./index.css";

function Option(props) {
    const { title, handleSelectedOption, multiple } = props;

    // Handles call callbacks to add or remove an option
    // in the selectedOptions state
    const handleSelect = () => {
        handleSelectedOption();
    }

    if (multiple) {
      return (
        <div
         className="option"
         onClick={handleSelect}
        >
          {title}
        </div>
      );
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
  