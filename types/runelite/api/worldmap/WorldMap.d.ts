/// <reference path="../Point.d.ts" />
/// <reference path="../coords/WorldPoint.d.ts" />
/// <reference path="WorldMapRenderer.d.ts" />
/// <reference path="WorldMapData.d.ts" />
declare namespace net.runelite.api.worldmap {
	/**
	 * Represents the World Map
	 */
	export interface WorldMap {
		/**
		 * Gets the current position of the local player on the world map.
		 *
		 * @return the world map position
		 */
		getWorldMapPosition(): Point;

		/**
		 * Gets the current zoom level of the world map.
		 *
		 * @return the world map zoon
		 */
		getWorldMapZoom(): number;

		/**
		 * Sets the target position of the world map.
		 *
		 * @param worldPoint the new target position
		 */
		setWorldMapPositionTarget(
			worldPoint: net.runelite.api.coords.WorldPoint,
		): void;

		/**
		 * Gets the world map renderer.
		 *
		 * @return the world map renderer
		 */
		getWorldMapRenderer(): net.runelite.api.worldmap.WorldMapRenderer;

		/**
		 * Initializes the world map with the provided data.
		 *
		 * @param worldMapData the new map data
		 */
		initializeWorldMap(
			worldMapData: net.runelite.api.worldmap.WorldMapData,
		): void;

		/**
		 * The data represented by the render.
		 *
		 * @return the map data
		 */
		getWorldMapData(): net.runelite.api.worldmap.WorldMapData;
	}
}
