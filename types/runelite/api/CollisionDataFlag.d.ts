declare namespace net.runelite.api {
	/**
	 * A utility class containing collision data flags for tiles.
	 */
	export class CollisionDataFlag {
		/**
		 * Directional movement blocking flags.
		 */
		static readonly BLOCK_MOVEMENT_NORTH_WEST = 0x1;
		static readonly BLOCK_MOVEMENT_NORTH = 0x2;
		static readonly BLOCK_MOVEMENT_NORTH_EAST = 0x4;
		static readonly BLOCK_MOVEMENT_EAST = 0x8;
		static readonly BLOCK_MOVEMENT_SOUTH_EAST = 0x10;
		static readonly BLOCK_MOVEMENT_SOUTH = 0x20;
		static readonly BLOCK_MOVEMENT_SOUTH_WEST = 0x40;
		static readonly BLOCK_MOVEMENT_WEST = 0x80;

		/**
		 * Movement blocking type flags.
		 */
		static readonly BLOCK_MOVEMENT_OBJECT = 0x100;
		static readonly BLOCK_MOVEMENT_FLOOR_DECORATION = 0x40000;
		static readonly BLOCK_MOVEMENT_FLOOR = 0x200000; // Eg. water
		static readonly BLOCK_MOVEMENT_FULL: 0x100 | 0x40000 | 0x200000;

		/**
		 * Directional line of sight blocking flags.
		 */
		static readonly BLOCK_LINE_OF_SIGHT_NORTH = 0x400;
		static readonly BLOCK_LINE_OF_SIGHT_EAST = 0x1000;
		static readonly BLOCK_LINE_OF_SIGHT_SOUTH = 0x4000;
		static readonly BLOCK_LINE_OF_SIGHT_WEST = 0x10000;
		static readonly BLOCK_LINE_OF_SIGHT_FULL = 0x20000;
	}
}
