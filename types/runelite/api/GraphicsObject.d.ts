/// <reference path="coords/LocalPoint.d.ts" />
/**
 * Represents a graphics object or spot animation.
 */
interface GraphicsObject extends Renderable {
	/**
	 * The ID of the graphics object.
	 */
	getId(): number;

	/**
	 * The location of the object.
	 */
	getLocation(): LocalPoint;

	/**
	 * Get the time this spot animation starts.
	 */
	getStartCycle(): number;

	/**
	 * The plane the spot animation is on.
	 */
	getLevel(): number;

	/**
	 * Gets the z-coordinate.
	 */
	getZ(): number;

	/**
	 * Checks if this spot animation is done animating.
	 */
	finished(): boolean;

	/**
	 * Set if this spot animation is done animating. If finished, the spot animation will despawn next frame.
	 * @param finished
	 */
	setFinished(finished: boolean): void;

	/**
	 * The animation of the spot animation.
	 */
	getAnimation(): Animation | null;

	/**
	 * The frame of the current animation.
	 */
	getAnimationFrame(): number;
}
