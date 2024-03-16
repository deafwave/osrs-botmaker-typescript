Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:



/**
 * Represents the entire 3D scene
 */
public interface Scene
{
	/**
	 * Gets the tiles in the scene
	 *
	 * @return a 4x104x104 array of tiles in [plane][x][y]
	 */
	Tile[][][] getTiles();

	/**
	 * Get the extended scene. This is larger than 104x104, and its size is {@link Constants#EXTENDED_SCENE_SIZE}.
	 */
	Tile[][][] getExtendedTiles();

	/**
	 * Get the extended tile settings. This is larger than 104x104, and its size is {@link Constants#EXTENDED_SCENE_SIZE}.
	 */
	byte[][][] getExtendedTileSettings();

	int getDrawDistance();
	void setDrawDistance(int drawDistance);

	/**
	 * Get the minimum scene level which will be rendered
	 *
	 * @return the plane of the minimum level
	 */
	int getMinLevel();

	/**
	 * Set the minimum scene level which will be rendered
	 *
	 * @param minLevel the plane of the minimum level
	 */
	void setMinLevel(int minLevel);

	/**
	 * Remove a tile from the scene
	 * @param tile
	 */
	void removeTile(Tile tile);

	/**
	 * Remove a game object from the scene
	 * @param gameObject
	 */
	void removeGameObject(GameObject gameObject);

	void generateHouses();

	void setRoofRemovalMode(int flags);

	/**
	 * Get the underlay ids for the scene. The value stored is id + 1, with 0 for no underlay.
	 * @return
	 */
	short[][][] getUnderlayIds();

	/**
	 * Get the overlay ids for the scene. The value stored is id + 1, with 0 for no overlay.
	 * @return
	 */
	short[][][] getOverlayIds();

	/**
	 * Get the shapes of the tiles for the scene.
	 * @return
	 */
	byte[][][] getTileShapes();

	/**
	 * Get the heights of the tiles on the scene.
	 * @return
	 */
	int[][][] getTileHeights();

	/**
	 * Returns the x-axis base coordinate.
	 * <p>
	 * This value is the x-axis world coordinate of tile (0, 0) in
	 * this scene (ie. the bottom-left most coordinates in the scene).
	 *
	 * @return the base x-axis coordinate
	 */
	int getBaseX();

	/**
	 * Returns the y-axis base coordinate.
	 * <p>
	 * This value is the y-axis world coordinate of tile (0, 0) in
	 * this scene (ie. the bottom-left most coordinates in the scene).
	 *
	 * @return the base y-axis coordinate
	 */
	int getBaseY();

	/**
	 * Check if this scene is an instance
	 * @see #getInstanceTemplateChunks()
	 * @return
	 */
	boolean isInstance();

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
	int[][][] getInstanceTemplateChunks();
}
