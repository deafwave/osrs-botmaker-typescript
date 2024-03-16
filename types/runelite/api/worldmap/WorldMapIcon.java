Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.worldmap;

import net.runelite.api.coords.WorldPoint;

public interface WorldMapIcon
{
	/**
	 * Get the mapelement config id of this icon
	 * @return
	 */
	int getType();

	/**
	 * Get the coordinate of the map icon
	 * @return
	 */
	WorldPoint getCoordinate();
}
