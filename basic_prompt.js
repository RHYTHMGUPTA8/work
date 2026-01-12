function toKebabCase(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}

// Example usage
const result = toKebabCase("Hello World From JavaScript");
console.log(result);
