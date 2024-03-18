/// <reference path="../../java/index.d.ts" />
/**
 * A utility class containing constant values.
 */
declare namespace net.runelite.api {
	class Constants {
		/**
		 * The original width of the game when running in fixed mode.
		 */
		static readonly GAME_FIXED_WIDTH = 765;

		/**
		 * The original height of the game when running in fixed mode.
		 */
		static readonly GAME_FIXED_HEIGHT = 503;

		/**
		 * Dimension representation of the width and height of the game in fixed mode.
		 */
		static readonly GAME_FIXED_SIZE: Dimension;

		/**
		 * The aspect ratio of the game when running in fixed mode.
		 */
		static readonly GAME_FIXED_ASPECT_RATIO: number;

		/**
		 * The default camera zoom value.
		 */
		static readonly CLIENT_DEFAULT_ZOOM = 512;

		/**
		 * The width and length of a chunk (8x8 tiles).
		 */
		static readonly CHUNK_SIZE = 8;

		/**
		 * The width and length of a map region (64x64 tiles).
		 */
		static readonly REGION_SIZE = 64;

		/**
		 * The width and length of the scene (13 chunks x 8 tiles).
		 */
		static readonly SCENE_SIZE = 104;

		/**
		 * Size of the extended scene. To compute the offset to convert from scene coordinate to
		 * extended scene coordinate, use (EXTENDED_SCENE_SIZE-SCENE_SIZE)/2.
		 */
		static readonly EXTENDED_SCENE_SIZE = 184;

		/**
		 * The max allowed plane by the game.
		 * <p>
		 * This value is exclusive. The plane is set by 2 bits which restricts
		 * the plane value to 0-3.
		 */
		static readonly MAX_Z = 4;

		static readonly TILE_FLAG_BRIDGE = 2;
		static readonly TILE_FLAG_UNDER_ROOF = 4;

		/**
		 * Flag for roof removal to remove the roofs above the player's current position.
		 */
		static readonly ROOF_FLAG_POSITION = 1;

		/**
		 * Flag for roof removal to remove the roofs above the currently hovered tile.
		 */
		static readonly ROOF_FLAG_HOVERED = 2;

		/**
		 * Flag for roof removal to remove the roofs above the player's destination tile.
		 */
		static readonly ROOF_FLAG_DESTINATION = 4;

		/**
		 * Flag for roof removal to remove the roofs that are above any tile between the camera and the player.
		 */
		static readonly ROOF_FLAG_BETWEEN = 8;

		/**
		 * The height of the overworld, in tiles. Coordinates above this are in caves and other such zones.
		 */
		static readonly OVERWORLD_MAX_Y = 4160;

		/**
		 * The number of milliseconds in a client tick.
		 * <p>
		 * This is the length of a single frame when the client is running at
		 * the maximum framerate of 50 fps.
		 */
		static readonly CLIENT_TICK_LENGTH = 20;

		/**
		 * The number of milliseconds in a server game tick.
		 * <p>
		 * This is the length of a single game cycle under ideal conditions.
		 * All game-play actions operate within multiples of this duration.
		 */
		static readonly GAME_TICK_LENGTH = 600;

		/**
		 * Width of a standard item sprite
		 */
		static readonly ITEM_SPRITE_WIDTH = 36;

		/**
		 * Height of a standard item sprite
		 */
		static readonly ITEM_SPRITE_HEIGHT = 32;

		/**
		 * High alchemy = shop price * HIGH_ALCHEMY_MULTIPLIER
		 *
		 * @see ItemComposition#getPrice
		 */
		static readonly HIGH_ALCHEMY_MULTIPLIER = 0.6;
	}
}
