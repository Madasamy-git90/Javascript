fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log("Fetched Data:", data))
    .catch(error => console.error("Error fetching data:", error.message))
    .finally(() => console.log("Fetch operation complete."));
