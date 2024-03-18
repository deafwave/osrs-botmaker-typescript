declare namespace net.runelite.api {
	/**
	 * A doubly linked list.
	 */
	export interface Deque<T> extends Iterable<T> {
		/**
		 * Add a new element to the end of the deque
		 * @param t the element
		 */
		addLast(t: T): void;

		/**
		 * clear the deque
		 */
		clear(): void;
	}
}
