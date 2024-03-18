/// <reference path="WorldMapRegion.d.ts" />
declare namespace net.runelite.api.worldmap {
	/**
	 * Renderer for the current worldmap map. Whenever the map is changed (eg between overworld and ancient cavern)
	 * the renderer is recreated and reloaded with data from the new map.
	 */
	export interface WorldMapRenderer {
		/**
		 * Checks whether the world map is currently loaded.
		 *
		 * @return true if the map is loaded, false otherwise
		 */
		isLoaded(): boolean;

		/**
		 * Get the map regions in this map. Each map region is 64x64 tiles.
		 * @return
		 */
		getMapRegions(): net.runelite.api.worldmap.WorldMapRegion[][];
	}
}
