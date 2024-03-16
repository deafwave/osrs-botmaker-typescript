/// <reference path="Nameable.d.ts" />
/**
 * Represents a container of Nameable objects.
 */
interface NameableContainer<T extends Nameable> {
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
