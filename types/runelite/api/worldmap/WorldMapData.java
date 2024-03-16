Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.worldmap;

/**
 * Represents data for a worldmap surface
 */
public interface WorldMapData
{
	/**
	 * Checks whether the passed coordinates are on the surface of the
	 * world map.
	 *
	 * @param x x-axis coordinate
	 * @param y y-axis coordinate
	 * @return true if the coordinate is on the surface, false otherwise
	 */
	boolean surfaceContainsPosition(int x, int y);
}
