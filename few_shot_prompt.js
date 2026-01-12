/*
Convert a string into kebab-case.

Examples:
Input: "Hello World"
Output: "hello-world"

Input: "JavaScript Is Fun"
Output: "javascript-is-fun"

Now convert:
Input: "Learning Prompt Engineering"
Output:
*/

function toKebabCase(input) {
  return input.toLowerCase().trim().replace(/\s+/g, "-");
}
