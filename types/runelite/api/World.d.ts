/// <reference path="../../java/index.d.ts" />
/// <reference path="WorldType.d.ts" />

/**
 * Holds data of a RuneScape world.
 */
interface World {
	/**
	 * Gets all applicable world types for this world.
	 */
	getTypes(): EnumSet<WorldType>;

	/**
	 * Sets world types.
	 */
	setTypes(types: EnumSet<WorldType>): void;

	/**
	 * Gets the current number of players logged in the world.
	 */
	getPlayerCount(): number;

	/**
	 * Sets the player count of the world.
	 */
	setPlayerCount(playerCount: number): void;

	/**
	 * Gets the world location value.
	 */
	getLocation(): number;

	/**
	 * Sets the world location value.
	 */
	setLocation(location: number): void;

	/**
	 * Gets the worlds index.
	 */
	getIndex(): number;

	/**
	 * Sets the worlds index.
	 */
	setIndex(index: number): void;

	/**
	 * Gets the world number.
	 */
	getId(): number;

	/**
	 * Sets the world number.
	 */
	setId(id: number): void;

	/**
	 * Gets the world activity description.
	 * For example, world 2 would return "Trade - Members".
	 */
	getActivity(): string;

	/**
	 * Sets the world activity description.
	 */
	setActivity(activity: string): void;

	/**
	 * Gets the address of the world.
	 */
	getAddress(): string;

	/**
	 * Sets the address of the world.
	 */
	setAddress(address: string): void;
}
