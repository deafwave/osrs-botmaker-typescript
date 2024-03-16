/// <reference path="../../java/index.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="TileObject.d.ts" />
/// <reference path="Renderable.d.ts" />
/**
 * Represents a game object.
 * <p>
 * Most objects in the RuneScape world are considered as game objects. Things
 * such as trees, anvils, boxes, etc are all game objects.
 */
interface GameObject extends TileObject {
	/**
	 * Get the size of this object, in tiles, on the x-axis.
	 *
	 * @return the size on the x-axis
	 */
	sizeX(): number;

	/**
	 * Get the size of this object, in tiles, on the y-axis.
	 *
	 * @return the size on the y-axis
	 */
	sizeY(): number;

	/**
	 * Gets the minimum x and y scene coordinate pair for this game object.
	 *
	 * @return the minimum scene coordinate
	 */
	getSceneMinLocation(): Point;

	/**
	 * Gets the maximum x and y scene coordinate pair for this game object.
	 * <p>
	 * This value differs from {@link #getSceneMinLocation()} when the size
	 * of the object is more than 1 tile.
	 *
	 * @return the maximum scene coordinate
	 */
	getSceneMaxLocation(): Point;

	/**
	 * Gets the convex hull of the object's model.
	 *
	 * @return the convex hull
	 * @see net.runelite.api.model.Jarvis
	 */
	getConvexHull(): Shape;

	/**
	 * Get the orientation of the object.
	 * @see net.runelite.api.coords.Angle
	 * @return the orientation
	 */
	getOrientation(): number;

	getRenderable(): Renderable;

	/**
	 * Gets the orientation of the model in JAU.
	 * This is typically 0 for non-actors, since
	 * most object's models are oriented prior to
	 * lighting during scene loading. See {@link #getOrientation()}
	 * instead for object orientation.
	 *
	 * @see net.runelite.api.coords.Angle
	 */
	getModelOrientation(): number;

	/**
	 * A bitfield containing various flags:
	 * <pre>{@code
	 * object type = bits & 31
	 * orientation = bits >>> 6 & 3
	 * supports items = bits >>> 8 & 1
	 * }</pre>
	 */
	getConfig(): number;
}
