/**
 * A utility class containing constant values.
 */
interface Constants {
	/**
	 * The original width of the game when running in fixed mode.
	 */
	GAME_FIXED_WIDTH: number;

	/**
	 * The original height of the game when running in fixed mode.
	 */
	GAME_FIXED_HEIGHT: number;

	/**
	 * Dimension representation of the width and height of the game in fixed mode.
	 */
	GAME_FIXED_SIZE: { width: number; height: number };

	/**
	 * The aspect ratio of the game when running in fixed mode.
	 */
	GAME_FIXED_ASPECT_RATIO: number;

	/**
	 * The default camera zoom value.
	 */
	CLIENT_DEFAULT_ZOOM: number;

	/**
	 * The width and length of a chunk (8x8 tiles).
	 */
	CHUNK_SIZE: number;

	/**
	 * The width and length of a map region (64x64 tiles).
	 */
	REGION_SIZE: number;

	/**
	 * The width and length of the scene (13 chunks x 8 tiles).
	 */
	SCENE_SIZE: number;

	/**
	 * Size of the extended scene. To compute the offset to convert from scene coordinate to
	 * extended scene coordinate, use (EXTENDED_SCENE_SIZE-SCENE_SIZE)/2.
	 */
	EXTENDED_SCENE_SIZE: number;

	/**
	 * The max allowed plane by the game.
	 * <p>
	 * This value is exclusive. The plane is set by 2 bits which restricts
	 * the plane value to 0-3.
	 */
	MAX_Z: number;

	TILE_FLAG_BRIDGE: number;
	TILE_FLAG_UNDER_ROOF: number;

	/**
	 * Flag for roof removal to remove the roofs above the player's current position.
	 */
	ROOF_FLAG_POSITION: number;

	/**
	 * Flag for roof removal to remove the roofs above the currently hovered tile.
	 */
	ROOF_FLAG_HOVERED: number;

	/**
	 * Flag for roof removal to remove the roofs above the player's destination tile.
	 */
	ROOF_FLAG_DESTINATION: number;

	/**
	 * Flag for roof removal to remove the roofs that are above any tile between the camera and the player.
	 */
	ROOF_FLAG_BETWEEN: number;

	/**
	 * The height of the overworld, in tiles. Coordinates above this are in caves and other such zones.
	 */
	OVERWORLD_MAX_Y: number;

	/**
	 * The number of milliseconds in a client tick.
	 * <p>
	 * This is the length of a single frame when the client is running at
	 * the maximum framerate of 50 fps.
	 */
	CLIENT_TICK_LENGTH: number;

	/**
	 * The number of milliseconds in a server game tick.
	 * <p>
	 * This is the length of a single game cycle under ideal conditions.
	 * All game-play actions operate within multiples of this duration.
	 */
	GAME_TICK_LENGTH: number;

	/**
	 * Width of a standard item sprite
	 */
	ITEM_SPRITE_WIDTH: number;

	/**
	 * Height of a standard item sprite
	 */
	ITEM_SPRITE_HEIGHT: number;

	/**
	 * High alchemy = shop price * HIGH_ALCHEMY_MULTIPLIER
	 *
	 * @see ItemComposition#getPrice
	 */
	HIGH_ALCHEMY_MULTIPLIER: number;
}
