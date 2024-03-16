Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.worldmap;

import java.util.Collection;

public interface WorldMapRegion
{
	/**
	 * Gets visible map icons. The underlying list is modified as the map is panned around.
	 * @return
	 */
	Collection<WorldMapIcon> getMapIcons();
}
