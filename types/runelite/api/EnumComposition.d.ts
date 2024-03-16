/**
 * Represents an enumeration composition.
 */
interface EnumComposition {
	/**
	 * Gets the size of the enumeration.
	 * @returns the size
	 */
	size(): number;

	/**
	 * Gets the keys of the enumeration.
	 * @returns an array of keys
	 */
	getKeys(): number[];

	/**
	 * Gets the integer values of the enumeration.
	 * @returns an array of integer values
	 */
	getIntVals(): number[];

	/**
	 * Gets the string values of the enumeration.
	 * @returns an array of string values
	 */
	getStringVals(): string[];

	/**
	 * Gets the integer value associated with the given key.
	 * @param key the key
	 * @returns the integer value
	 */
	getIntValue(key: number): number;

	/**
	 * Gets the string value associated with the given key.
	 * @param key the key
	 * @returns the string value
	 */
	getStringValue(key: number): string;
}
