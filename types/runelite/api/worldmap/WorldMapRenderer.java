Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.worldmap;

/**
 * Renderer for the current worldmap map. Whenever the map is changed (eg between overworld and ancient cavern)
 * the renderer is recreated and reloaded with data from the new map.
 */
public interface WorldMapRenderer
{
	/**
	 * Checks whether the world map is currently loaded.
	 *
	 * @return true if the map is loaded, false otherwise
	 */
	boolean isLoaded();

	/**
	 * Get the map regions in this map. Each map region is 64x64 tiles.
	 * @return
	 */
	WorldMapRegion[][] getMapRegions();
}
