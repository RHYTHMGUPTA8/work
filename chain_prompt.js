/*
Step 1: Accept a string input.
Step 2: Convert all characters to lowercase.
Step 3: Remove special characters.
Step 4: Replace spaces with hyphens.
Step 5: Return the final kebab-case string.
*/

function toKebabCase(input) {
  const lower = input.toLowerCase();
  const cleaned = lower.replace(/[^a-z0-9\s]/g, "");
  const kebab = cleaned.trim().replace(/\s+/g, "-");
  return kebab;
}

console.log(toKebabCase("Chain Prompt Example Here"));
