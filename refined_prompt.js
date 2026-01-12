function toKebabCase(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-");
}

// Handles extra spaces and special characters
console.log(toKebabCase("  Hello, World! From JS  "));
