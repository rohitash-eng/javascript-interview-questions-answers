function customDebounce(func, dely){
    let timeoutId;
    return function(...args){
        if (timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, dely);
    }
}

function search(query) {
    console.log(`Searching for: ${query}`);
    // Here you could make an API call or search through a list
}

// Create the debounced version of the search function
const debouncedSearch = customDebounce(search, 500); // 500ms debounce time

// Attach the debounced search function to an input field
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (event) => {
    debouncedSearch(event.target.value);
});