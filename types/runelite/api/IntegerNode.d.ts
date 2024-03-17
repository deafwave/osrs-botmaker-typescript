/// <reference path="RuneliteNode.d.ts" />
/**
 * Represents an integer typically in a {@link HashTable}.
 */
interface IntegerNode extends RuneliteNode {
	/**
	 * Gets the value of the node.
	 *
	 * @return the int value
	 */
	getValue(): number;

	/**
	 * Sets the value of the node.
	 *
	 * @param value the new int value
	 */
	setValue(value: number): void;
}
