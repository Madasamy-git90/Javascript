function validateAge(age) {
    if (age < 18) {
        throw new Error("Age must be at least 18.");
    }
    return "Age is valid.";
}

try {
    console.log(validateAge(16)); // Throws an error
} catch (error) {
    console.error("Validation Error:", error.message);
}
