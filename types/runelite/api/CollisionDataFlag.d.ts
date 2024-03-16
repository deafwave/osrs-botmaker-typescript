// Reference: Constants.d.ts

/**
 * A utility class containing collision data flags for tiles.
 */
declare class CollisionDataFlag {
	/**
	 * Directional movement blocking flags.
	 */
	static readonly BLOCK_MOVEMENT_NORTH_WEST: number;
	static readonly BLOCK_MOVEMENT_NORTH: number;
	static readonly BLOCK_MOVEMENT_NORTH_EAST: number;
	static readonly BLOCK_MOVEMENT_EAST: number;
	static readonly BLOCK_MOVEMENT_SOUTH_EAST: number;
	static readonly BLOCK_MOVEMENT_SOUTH: number;
	static readonly BLOCK_MOVEMENT_SOUTH_WEST: number;
	static readonly BLOCK_MOVEMENT_WEST: number;

	/**
	 * Movement blocking type flags.
	 */
	static readonly BLOCK_MOVEMENT_OBJECT: number;
	static readonly BLOCK_MOVEMENT_FLOOR_DECORATION: number;
	static readonly BLOCK_MOVEMENT_FLOOR: number;
	static readonly BLOCK_MOVEMENT_FULL: number;

	/**
	 * Directional line of sight blocking flags.
	 */
	static readonly BLOCK_LINE_OF_SIGHT_NORTH: number;
	static readonly BLOCK_LINE_OF_SIGHT_EAST: number;
	static readonly BLOCK_LINE_OF_SIGHT_SOUTH: number;
	static readonly BLOCK_LINE_OF_SIGHT_WEST: number;
	static readonly BLOCK_LINE_OF_SIGHT_FULL: number;
}
