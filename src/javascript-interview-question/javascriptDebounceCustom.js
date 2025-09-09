<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Debounce Test</title>
</head>
<body>
  <h2>Search with Debounce</h2>
  <input type="text" id="searchInput" placeholder="Type to search..." />

  <script>
    // ✅ Custom debounce
    function customDebounce(func, delay) {
      let timeout;
      return function(...args) {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          func.call(this, ...args);  // fixed spread
        }, delay);
      };
    }

    // ✅ Search function
    function search(query) {
      console.log(`Searching for: ${query}`);
      // Here you could make an API call or search logic
    }

    // ✅ DOM element
    const searchInput = document.getElementById("searchInput");

    // ✅ Wrap search with debounce
    const searchWithDebounce = customDebounce(search, 500);

    // ✅ Event listener
    searchInput.addEventListener("input", (event) => {
      searchWithDebounce(event.target.value);
    });
  </script>
</body>
</html>
