/**
 * Some additional helper string functions.
 */
/**
 * Converts a string that contains comma separated values to a string containing json array syntax.
 * Example: commaseparatedToArrayString('en,de') return '["en", "de"]'.
 * @param commaSeparatedList the list string
 * @return the formatted string
 */
export declare function commaseparatedToArrayString(commaSeparatedList: string): string;
/**
 * Converts a string[] that contains some values to a string containing json array syntax.
 * Example: toArrayString(['en', 'de']) return '["en", "de"]'.
 * @param values the strings to be formatted
 * @return the formatted string
 */
export declare function toArrayString(values: string[]): string;
