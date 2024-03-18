/// <reference path="Tile.d.ts" />
/// <reference path="GameObject.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents the entire 3D scene
	 */
	export interface Scene {
		/**
		 * Gets the tiles in the scene
		 *
		 * @return a 4x104x104 array of tiles in [plane][x][y]
		 */
		getTiles(): Tile[][][];

		/**
		 * Get the extended scene. This is larger than 104x104, and its size is {@link Constants#EXTENDED_SCENE_SIZE}.
		 */
		getExtendedTiles(): Tile[][][];

		/**
		 * Get the extended tile settings. This is larger than 104x104, and its size is {@link Constants#EXTENDED_SCENE_SIZE}.
		 */
		getExtendedTileSettings(): number[][][];

		getDrawDistance(): number;
		setDrawDistance(drawDistance: number): void;

		/**
		 * Get the minimum scene level which will be rendered
		 *
		 * @return the plane of the minimum level
		 */
		getMinLevel(): number;

		/**
		 * Set the minimum scene level which will be rendered
		 *
		 * @param minLevel the plane of the minimum level
		 */
		setMinLevel(minLevel: number): void;

		/**
		 * Remove a tile from the scene
		 * @param tile
		 */
		removeTile(tile: Tile): void;

		/**
		 * Remove a game object from the scene
		 * @param gameObject
		 */
		removeGameObject(gameObject: GameObject): void;

		generateHouses(): void;

		setRoofRemovalMode(flags: number): void;

		/**
		 * Get the underlay ids for the scene. The value stored is id + 1, with 0 for no underlay.
		 * @return
		 */
		getUnderlayIds(): number[][][];

		/**
		 * Get the overlay ids for the scene. The value stored is id + 1, with 0 for no overlay.
		 * @return
		 */
		getOverlayIds(): number[][][];

		/**
		 * Get the shapes of the tiles for the scene.
		 * @return
		 */
		getTileShapes(): number[][][];

		/**
		 * Get the heights of the tiles on the scene.
		 * @return
		 */
		getTileHeights(): number[][][];

		/**
		 * Returns the x-axis base coordinate.
		 * <p>
		 * This value is the x-axis world coordinate of tile (0, 0) in
		 * this scene (ie. the bottom-left most coordinates in the scene).
		 *
		 * @return the base x-axis coordinate
		 */
		getBaseX(): number;

		/**
		 * Returns the y-axis base coordinate.
		 * <p>
		 * This value is the y-axis world coordinate of tile (0, 0) in
		 * this scene (ie. the bottom-left most coordinates in the scene).
		 *
		 * @return the base y-axis coordinate
		 */
		getBaseY(): number;

		/**
		 * Check if this scene is an instance
		 * @see #getInstanceTemplateChunks()
		 * @return
		 */
		isInstance(): boolean;

		/**
		 * Contains a 3D array of template chunks for instanced areas.
		 * <p>
		 * The array returned is of format [z][x][y], where z is the
		 * plane, x and y the x-axis and y-axis coordinates of a tile
		 * divided by the size of a chunk.
		 * <p>
		 * The bits of the int value held by the coordinates are -1 if there is no data,
		 * structured in the following format:
		 * <pre>{@code
		 *  0                   1                   2                   3
		 *  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
		 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
		 * | |rot|     y chunk coord     |    x chunk coord    |pln|       |
		 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
		 * }</pre>
		 * @return the array of instance template chunks
		 * @see Constants#CHUNK_SIZE
		 * @see InstanceTemplates
		 */
		getInstanceTemplateChunks(): number[][][];
	}
}
