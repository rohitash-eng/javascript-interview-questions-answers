function convertTitleCaseToCamalCase(str) {
    // Split the string into an array of words.
    // Use trim() to remove any leading or trailing whitespace.
    // Use replace(/([A-Z])/,` $1`) to add a space before each capital letter.
    // Use toLowerCase() to convert all letters to lowercase.
    // Use split(" ") to split the string into an array of words.
    // Use map() to capitalize the first letter of each word.
    // Use join(" ") to combine the array of words back into a string.
    let splitSte = str.split(" ");

    let afterReplace = splitSte.map((item) => {
        // this is line for add the space before the capital letter letter
        return item.trim().replace(/([A-Z])/,` $1`);
    });
    let  mapAfter = afterReplace.map((item) => {
        // this is line for add the space before the capital letter letter
        return item.trim().toLowerCase();
    });
    const newStr = mapAfter.join(" ");
    const newStrArr = newStr.split(" ");
    const finalTitleCaseString = newStrArr.map((item) =>{
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
    return finalTitleCaseString.join(" ");
}
console.log(convertTitleCaseToCamalCase("the simplestThings in LIFE are alwaysThe best"));