/// <reference path="Renderable.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/**
 * Represents a projectile entity. (ie. cannonball, arrow)
 */
interface Projectile extends Renderable {
	/**
	 * Gets the ID of the projectile.
	 *
	 * @return the projectile ID
	 * @see GraphicID
	 */
	getId(): number;

	/**
	 * Gets the actor that is targeted by this projectile.
	 *
	 * @return the target actor, or null if this projectile is an AoE attack
	 */
	getInteracting(): Actor | null;

	/**
	 * Get the target point of the projectile. For projectiles with an actor target,
	 * this is updated each frame to the actor position.
	 *
	 * @return
	 */
	getTarget(): LocalPoint;

	/**
	 * Gets the original x-axis coordinate that this projectile started from.
	 *
	 * @return the original coordinate
	 */
	getX1(): number;

	/**
	 * Gets the original y-axis coordinate that this projectile started from.
	 *
	 * @return the original coordinate
	 */
	getY1(): number;

	/**
	 * Gets the plane that the projectile is on.
	 *
	 * @return the plane
	 */
	getFloor(): number;

	/**
	 * Gets the height of the projectile.
	 *
	 * @return the height
	 */
	getHeight(): number;

	/**
	 * Gets the ending height of the projectile.
	 *
	 * @return the ending height
	 */
	getEndHeight(): number;

	/**
	 * Gets the game cycle that the projectile begun movement at.
	 *
	 * @return the start game cycle
	 */
	getStartCycle(): number;

	/**
	 * Gets the game cycle that the projectile will reach its target at.
	 *
	 * @return the end game cycle
	 */
	getEndCycle(): number;

	/**
	 * Sets the game cycle the projectile will reach its target at. The
	 * projectile automatically despawns after this time, and setting the
	 * end cycle to a time in the past is an effective way of removing the
	 * projectile.
	 * @param cycle
	 */
	setEndCycle(cycle: number): void;

	/**
	 * Gets the remaining game cycles until the projectile reaches its
	 * target and despawns.
	 *
	 * @return the remaining game cycles
	 */
	getRemainingCycles(): number;

	/**
	 * Gets the slope of the projectile.
	 * <p>
	 * This value indicates how much arc the projectile can have. Projectiles
	 * with larger slopes have a more noticeable arc when thrown.
	 *
	 * @return the slope of the projectile
	 */
	getSlope(): number;

	/**
	 * Gets the starting height of the projectile.
	 *
	 * @return the starting height
	 */
	getStartHeight(): number;

	/**
	 * Gets the current x-axis coordinate of the projectile.
	 *
	 * @return the x-axis coordinate
	 */
	getX(): number;

	/**
	 * Gets the current y-axis coordinate of the projectile.
	 *
	 * @return the y-axis coordinate
	 */
	getY(): number;

	/**
	 * Gets the current z-axis coordinate of the projectile.
	 *
	 * @return the z-axis coordinate
	 */
	getZ(): number;

	/**
	 * Gets the scalar quantity (speed) at which the projectile is travelling.
	 *
	 * @return the scalar quantity
	 */
	getScalar(): number;

	/**
	 * Gets the x-axis velocity of the projectile.
	 *
	 * @return the x-axis velocity
	 */
	getVelocityX(): number;

	/**
	 * Gets the y-axis velocity of the projectile.
	 *
	 * @return the y-axis velocity
	 */
	getVelocityY(): number;

	/**
	 * Gets the z-axis velocity of the projectile.
	 *
	 * @return the z-axis velocity
	 */
	getVelocityZ(): number;

	/**
	 * The animation of the projectile
	 * @return
	 */
	getAnimation(): Animation | null;

	/**
	 * The frame of the current animation
	 * @return
	 */
	getAnimationFrame(): number;
}
