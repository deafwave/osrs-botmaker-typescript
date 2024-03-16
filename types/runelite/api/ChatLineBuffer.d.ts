/// <reference path="MessageNode.d.ts" />
/**
 * Represents the buffer containing all messages in the chatbox.
 */
interface ChatLineBuffer {
	/**
	 * Gets an array of message nodes currently in the chatbox.
	 *
	 * @returns messages in the chatbox
	 */
	getLines(): MessageNode[];

	/**
	 * Gets the length of the {@link #getLines()} array.
	 *
	 * @returns the length
	 */
	getLength(): number;

	/**
	 * Removes a message node.
	 *
	 * This method modifies the underlying MessageNode array. If removing multiple MessageNodes at a time,
	 * clone the original {@link #getLines()} array; as items in the array will get modified and be left in an
	 * inconsistent state.
	 *
	 * @param node the {@link MessageNode} to remove
	 */
	removeMessageNode(node: MessageNode): void;
}
