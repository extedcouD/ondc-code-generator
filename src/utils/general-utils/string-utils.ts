import { nodeReservedKeywords } from "../../constants/syntax.js";
import { TestObject } from "../../types/config-types.js";
import { getVariablesFromTest } from "./test-object-utils.js";

/**
 * 	Check if the string matches the pattern: lowercase letters and underscores only, no leading or trailing underscores
 *
 * @param str
 * @returns true if the string is in snake_case, false otherwise
 */
export function isSnakeCase(str: string): boolean {
	const snakeCasePattern = /^[a-z0-9]+(_[a-z0-9]+)*$/;
	return snakeCasePattern.test(str);
}

export function isValidVariableName(input: string): boolean {
	// Regular expression to match valid variable names
	const validVariableNameRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

	// Check if input matches the regex
	const matchesPattern = validVariableNameRegex.test(input);

	const isNotReservedKeyword = !nodeReservedKeywords.has(input);

	return matchesPattern && isNotReservedKeyword;
}

/**
 * Adds '>' at the beginning of each line in the given Markdown string.
 *
 * @param {string} markdown - The input Markdown string.
 * @returns {string} - The modified Markdown string with '>' added to each line.
 */
export function addBlockquoteToMarkdown(markdown: string): string {
	return markdown
		.split("\n") // Split the input string into an array of lines.
		.map((line) => ">" + (line.trim() !== "" ? " " + line : "")) // Add '>' in front of each line.
		.join("\n"); // Join the array of lines back into a single string.
}

export function ConvertArrayToStringsInTestObject(testObject: TestObject) {
	const variables = getVariablesFromTest(testObject);
	const testDuplicate = { ...testObject };
	for (const variable of variables) {
		if (Array.isArray(testObject[variable])) {
			let vals = testObject[variable].map((v) => `"${v}"`).join(", ");
			vals = vals.replace(/"/g, `"`);
			testDuplicate[variable] = `[${vals}]`;
		}
	}
	return testDuplicate;
}

export function ConvertArrayToString(arr: any[]) {
	let vals = arr.map((v) => `"${v}"`).join(", ");
	vals = vals.replace(/"/g, `"`);
	return `[${vals}]`;
}
