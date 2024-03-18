/// <reference path="RuneliteNode.d.ts" />
declare namespace net.runelite.api {
	/**
	 * A data structure that uses a hash function to compute an index into an
	 * array of buckets from which node objects can be quickly obtained.
	 */
	export interface HashTable<T extends RuneliteNode> extends Iterable<T> {
		/**
		 * Gets a node by its hash value.
		 *
		 * @param value the node value
		 * @return the associated node
		 */
		get(value: number): T;
	}
}
