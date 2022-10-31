/**
 * GetOptionTitle get a value to display for as an option title/label
 * @param {*} option 
 * @param {string} optionLabel 
 */
export const getOptionTitle = (option, optionLabel) => {
  if (typeof option === "string") {
    return option;
  } else if (typeof option === "object" && !Array.isArray(option)) {
    return option[optionLabel];
  }
  return "";
}

/**
 * Filters for elements not in selectedOptions
 * @param {Array} options 
 * @param {Array} selectedOptions 
 * @returns {Array}
 */
export const filterOptionsNotInArray = (options, selectedOptions) => {
  return options.filter((option) => !selectedOptions.includes(option));
}

/**
 * Ensures width is a number and is greater or equal to 100
 * @param {*} width 
 * @returns {number}
 */
export const getValidWidth = (width) => {
  if (typeof width !== "number") {
    return 500;
  } else if (width < 100) {
    return 100;
  } else {
    return width;
  }
}