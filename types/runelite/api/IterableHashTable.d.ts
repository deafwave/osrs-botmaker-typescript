/// <reference path="RuneliteNode.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents an iterable hash table.
	 */
	export interface IterableHashTable<T extends RuneliteNode>
		extends Iterable<T> {
		/**
		 * Retrieves the node associated with the given hash.
		 *
		 * @param hash - The hash value
		 * @returns The node associated with the hash
		 */
		get(hash: number): T;

		/**
		 * Associates the specified node with the given hash.
		 *
		 * @param node - The node to put into the hash table
		 * @param hash - The hash value
		 */
		put(node: T, hash: number): void;
	}
}
