/// <reference path="Nameable.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents a container of Nameable objects.
	 */
	export interface NameableContainer<T extends Nameable> {
		/**
		 * Get the number of members in this container
		 *
		 * @return
		 */
		getCount(): number;

		/**
		 * Get the maximum size of the container.
		 *
		 * @return
		 */
		getSize(): number;

		/**
		 * Get the members in this container
		 *
		 * @return
		 */
		getMembers(): T[];

		/**
		 * Find a nameable by name
		 *
		 * @param name the name
		 * @return
		 */
		findByName(name: string): T;
	}
}
