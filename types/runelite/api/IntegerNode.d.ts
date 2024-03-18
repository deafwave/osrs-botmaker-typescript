/// <reference path="RuneliteNode.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents an integer typically in a {@link HashTable}.
	 */
	export interface IntegerNode extends RuneliteNode {
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
}
