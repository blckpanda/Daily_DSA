// Function to memorize data
function memorize(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Function to recall memorized data
function recall(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Example usage
const userData = { name: "John", age: 30 };
memorize("user", userData);

const recalledData = recall("user");
console.log(recalledData); // Outputs: { name: "John", age: 30 }
