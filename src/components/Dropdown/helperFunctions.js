export const getOptionTitle = (option) => {
    if (typeof option === "string") {
        return option;
    } else if (typeof option === "object" && !Array.isArray(option)) {
        return option.title;
    }
    return "";
}

export const filterOptionsNotInArray = (options, selectedOptions) => {
    return options.filter((option) => !selectedOptions.includes(option));
}