/// <reference path="../../java/index.d.ts" />
/// <reference path="WorldType.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Holds data of a RuneScape world.
	 */
	export interface World {
		/**
		 * Gets all applicable world types for this world.
		 *
		 * @return the world types
		 */
		getTypes(): EnumSet<WorldType>;

		/**
		 * Sets world types.
		 *
		 * @param types the types
		 */
		setTypes(types: EnumSet<WorldType>): void;

		/**
		 * Gets the current number of players logged in the world.
		 *
		 * @return the player count
		 */
		getPlayerCount(): number;

		/**
		 * Sets the player count of the world.
		 *
		 * @param playerCount the new player count
		 */
		setPlayerCount(playerCount: number): void;

		/**
		 * Gets the world location value.
		 *
		 * @return the world location
		 */
		getLocation(): number;

		/**
		 * Sets the world location value.
		 *
		 * @param location the location
		 */
		setLocation(location: number): void;

		/**
		 * Gets the worlds index.
		 *
		 * @return the index
		 */
		getIndex(): number;

		/**
		 *  Sets the worlds index.
		 *
		 * @param index the index
		 */
		setIndex(index: number): void;

		/**
		 * Gets the world number.
		 *
		 * @return the world number
		 */
		getId(): number;

		/**
		 * Sets the world number.
		 *
		 * @param id the world number
		 */
		setId(id: number): void;

		/**
		 * Gets the world activity description.
		 * <p>
		 * For example, world 2 would return "Trade - Members".
		 *
		 * @return the world activity
		 */
		getActivity(): string;

		/**
		 * Sets the world activity description.
		 *
		 * @param activity the activity
		 */
		setActivity(activity: string): void;

		/**
		 * Gets the address of the world.
		 *
		 * @return the world address
		 */
		getAddress(): string;

		/**
		 * Sets the address of the world.
		 *
		 * @param address the address
		 */
		setAddress(address: string): void;
	}
}
