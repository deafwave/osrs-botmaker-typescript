/// <reference path="Renderable.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="Animation.d.ts" />
/**
 * Represents a graphics object/spotanim.
 */
interface GraphicsObject extends Renderable {
	/**
	 * The graphics object ID.
	 *
	 * @return the ID
	 */
	getId(): number;

	/**
	 * The location of the object.
	 *
	 * @return the location
	 */
	getLocation(): LocalPoint;

	/**
	 * Get the time this spotanim starts
	 *
	 * @return
	 */
	getStartCycle(): number;

	/**
	 * The plane the spotanim is on.
	 *
	 * @return
	 */
	getLevel(): number;

	/**
	 * Gets the z coordinate
	 */
	getZ(): number;

	/**
	 * Checks if this spotanim is done animating
	 *
	 * @return
	 */
	finished(): boolean;

	/**
	 * Set if this spotanim is done animating. If finished, the spotanim will despawn next frame.
	 * @param finished
	 */
	setFinished(finished: boolean): void;

	/**
	 * The animation of the spotanim
	 * @return
	 */

	getAnimation(): Animation | null;

	/**
	 * The frame of the current animation
	 * @return
	 */
	getAnimationFrame(): number;
}
