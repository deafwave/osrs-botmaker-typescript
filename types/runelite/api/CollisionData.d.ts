// Reference: Constants.d.ts, CollisionDataFlag.d.ts (Assuming relevant external references)

/**
 * Represents tile collision data for the scene.
 */
interface CollisionData {
	/**
	 * Gets a 2D array of tile collision flags.
	 *
	 * The array covers all tiles in the scene (104x104), and the index into
	 * the array is of format [x][y] where x and y are the tiles scene
	 * coordinates, respectively.
	 *
	 * Collision flags are checked using the bitwise and (&) operator. Flag
	 * values can be obtained and used with the CollisionDataFlag class.
	 *
	 * @returns all collision flags for the tiles in the scene
	 * @see Constants.SCENE_SIZE
	 */
	getFlags(): number[][];
}
