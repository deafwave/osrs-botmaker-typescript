/// <reference path="../coords/WorldPoint.d.ts" />
/// <reference path="WorldMapRenderer.d.ts" />
/// <reference path="WorldMapData.d.ts" />
/**
 * Represents the World Map
 */
interface WorldMap {
	/**
	 * Gets the current position of the local player on the world map.
	 *
	 * @return the world map position
	 */
	getWorldMapPosition(): Point;

	/**
	 * Gets the current zoom level of the world map.
	 *
	 * @return the world map zoom
	 */
	getWorldMapZoom(): number;

	/**
	 * Sets the target position of the world map.
	 *
	 * @param worldPoint the new target position
	 */
	setWorldMapPositionTarget(worldPoint: WorldPoint): void;

	/**
	 * Gets the world map renderer.
	 *
	 * @return the world map renderer
	 */
	getWorldMapRenderer(): WorldMapRenderer;

	/**
	 * Initializes the world map with the provided data.
	 *
	 * @param worldMapData the new map data
	 */
	initializeWorldMap(worldMapData: WorldMapData): void;

	/**
	 * The data represented by the renderer.
	 *
	 * @return the map data
	 */
	getWorldMapData(): WorldMapData;
}
