/**
 * Represents data for a worldmap surface
 */
interface WorldMapData
{
	/**
	 * Checks whether the passed coordinates are on the surface of the
	 * world map.
	 *
	 * @param x x-axis coordinate
	 * @param y y-axis coordinate
	 * @return true if the coordinate is on the surface, false otherwise
	 */
	surfaceContainsPosition(x: number, y: number): boolean;
}