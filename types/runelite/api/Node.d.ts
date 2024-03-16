// FIXME: RuneliteNode name is a workaround for the type "dom" Problem
// Uncertain why it's showing up in global types when it's not inside of the tsconfig.json

/**
 * Represents a doubly linked node.
 */
interface RuneliteNode {
	/**
	 * Gets the next node.
	 *
	 * @return the next node
	 */
	getNext(): RuneliteNode;

	/**
	 * Gets the previous node.
	 *
	 * @return the previous node
	 */
	getPrevious(): RuneliteNode;

	/**
	 * Gets the hash value of the node.
	 *
	 * @return the hash value
	 */
	getHash(): number;
}
