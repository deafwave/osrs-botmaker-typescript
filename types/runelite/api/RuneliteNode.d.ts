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
