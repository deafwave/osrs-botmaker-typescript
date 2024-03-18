/// <reference path="DecorativeObject.d.ts" />
/// <reference path="GameObject.d.ts" />
/// <reference path="ItemLayer.d.ts" />
/// <reference path="GroundObject.d.ts" />
/// <reference path="WallObject.d.ts" />
/// <reference path="SceneTilePaint.d.ts" />
/// <reference path="SceneTileModel.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="../../java/index.d.ts" />
/// <reference path="TileItem.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents a tile in the game.
	 */
	export interface Tile {
		/**
		 * Gets the decoration on the tile.
		 *
		 * @return the tile decoration
		 */
		getDecorativeObject(): DecorativeObject;

		/**
		 * Gets all game objects on the tile.
		 *
		 * @return the game objects
		 */
		getGameObjects(): GameObject[];

		/**
		 * Gets the items held on this tile.
		 *
		 * @return the item
		 */
		getItemLayer(): ItemLayer;

		/**
		 * Gets the object on the ground layer of the tile.
		 *
		 * @return the ground object
		 */
		getGroundObject(): GroundObject;

		/**
		 * Sets the object on the ground layer of the tile.
		 *
		 * @param groundObject the ground object
		 */
		setGroundObject(groundObject: GroundObject): void;

		/**
		 * Gets the wall of the tile.
		 *
		 * @return the wall object
		 */
		getWallObject(): WallObject;

		/**
		 * Gets the scene paint of the tile.
		 *
		 * @return the paint
		 */
		getSceneTilePaint(): SceneTilePaint;

		/**
		 * Gets the model of the tile in the scene.
		 *
		 * @return the tile model
		 */
		getSceneTileModel(): SceneTileModel;

		/**
		 * Gets the location coordinate of the tile in the world.
		 *
		 * @return the world location
		 */
		getWorldLocation(): net.runelite.api.coords.WorldPoint;

		/**
		 * Gets the location coordinate of the tile in scene coords
		 *
		 * @return the scene location
		 */
		getSceneLocation(): Point;

		/**
		 * Gets the local coordinate of the tile.
		 *
		 * @return the local location
		 */
		getLocalLocation(): net.runelite.api.coords.LocalPoint;

		/**
		 * Gets the plane that this tile is on.
		 *
		 * @return the plane
		 */
		getPlane(): number;

		/**
		 * Get the plane this tile is rendered on, which is where the tile heights are from.
		 *
		 * @return
		 */
		getRenderLevel(): number;

		/**
		 * Get all the ground items for this tile
		 *
		 * @return the ground items
		 */
		getGroundItems(): List<TileItem>;

		/**
		 * Return the tile under this one, if this tile is a bridge
		 *
		 * @return
		 */
		getBridge(): Tile;
	}
}
