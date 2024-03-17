/// <reference path="Renderable.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="IterableHashTable.d.ts" />
/// <reference path="ActorSpotAnim.d.ts" />
/// <reference path="../../java/index.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="SpritePixels.d.ts" />
/// <reference path="coords/WorldArea.d.ts" />
/**
 * Represents a RuneScape actor/entity.
 */
interface Actor extends Renderable {
	/**
	 * Gets the combat level of the actor.
	 *
	 * @return the combat level
	 */
	getCombatLevel(): number;

	/**
	 * Gets the name of the actor.
	 *
	 * @return the name
	 */

	getName(): string | null;

	/**
	 * Gets if the actor is interacting with another actor.
	 * {@link #getInteracting()} will return the interacting actor,
	 * unless they are outside of the visibility range.
	 * @return
	 */
	isInteracting(): boolean;

	/**
	 * Gets the actor being interacted with.
	 * <p>
	 * Examples of interaction include:
	 * <ul>
	 *     <li>A monster focusing an Actor to attack</li>
	 *     <li>Targetting a player to trade</li>
	 *     <li>Following a player</li>
	 * </ul>
	 *
	 * @return the actor, null if no interaction is occurring
	 */
	getInteracting(): Actor;

	/**
	 * Gets the health of the actor in {@link #getHealthScale()} units.
	 *
	 * The server does not transmit actors' real health, only this value
	 * between zero and {@link #getHealthScale()}. Some actors may be
	 * missing this info, in which case -1 is returned.
	 */
	getHealthRatio(): number;

	/**
	 * Gets the maximum value {@link #getHealthRatio()} can return
	 *
	 * For actors with the default size health bar this is 30, but
	 * for bosses with a larger health bar this can be a larger number.
	 * Some actors may be missing this info, in which case -1 is returned.
	 */
	getHealthScale(): number;

	/**
	 * Gets the server-side location of the actor.
	 * <p>
	 * This value is typically ahead of where the client renders and is not
	 * affected by things such as animations.
	 *
	 * @return the server location
	 */
	getWorldLocation(): WorldPoint;

	/**
	 * Gets the client-side location of the actor.
	 *
	 * @return the client location
	 */
	getLocalLocation(): LocalPoint;

	/**
	 * Gets the target orientation of the actor.
	 *
	 * @return the orientation
	 * @see net.runelite.api.coords.Angle
	 */
	getOrientation(): number;

	/**
	 * Gets the current orientation of the actor.
	 *
	 * @return the orientation
	 * @see net.runelite.api.coords.Angle
	 */
	getCurrentOrientation(): number;

	/**
	 * Gets the current animation the actor is performing.
	 *
	 * @return the animation ID
	 * @see AnimationID
	 */
	getAnimation(): number;

	/**
	 * Gets the secondary animation the actor is performing. Usually an idle animation, or one of the walking ones.
	 *
	 * @return the animation ID
	 * @see AnimationID
	 */
	getPoseAnimation(): number;

	/**
	 * Set the idle pose animation.
	 * @param animation
	 * @see AnimationID
	 */
	setPoseAnimation(animation: number): void;

	/**
	 * Get the frame of the idle animation the actor is performing
	 * @return
	 */
	getPoseAnimationFrame(): number;

	/**
	 * Set the frame of the idle animation the actor is performing
	 * @param frame
	 */
	setPoseAnimationFrame(frame: number): void;

	/**
	 * The idle pose animation. If the actor is not walking or otherwise animating, this will be used
	 * for their pose animation.
	 *
	 * @return the animation ID
	 * @see AnimationID
	 */
	getIdlePoseAnimation(): number;

	setIdlePoseAnimation(animation: number): void;

	/**
	 * Animation used for rotating left if the actor is also not walking
	 *
	 * @return the animation ID
	 * @see AnimationID
	 */
	getIdleRotateLeft(): number;

	setIdleRotateLeft(animationID: number): void;

	/**
	 * Animation used for rotating right if the actor is also not walking
	 *
	 * @return the animation ID
	 * @see AnimationID
	 */
	getIdleRotateRight(): number;

	setIdleRotateRight(animationID: number): void;

	/**
	 * Animation used for walking
	 *
	 * @return the animation ID
	 * @see AnimationID
	 */
	getWalkAnimation(): number;

	setWalkAnimation(animationID: number): void;

	/**
	 * Animation used for rotating left while walking
	 *
	 * @return the animation ID
	 * @see AnimationID
	 */
	getWalkRotateLeft(): number;

	setWalkRotateLeft(animationID: number): void;

	/**
	 * Animation used for rotating right while walking
	 *
	 * @return the animation ID
	 * @see AnimationID
	 */
	getWalkRotateRight(): number;

	setWalkRotateRight(animationID: number): void;

	/**
	 * Animation used for an about-face while walking
	 *
	 * @return the animation ID
	 * @see AnimationID
	 */
	getWalkRotate180(): number;

	setWalkRotate180(animationID: number): void;

	/**
	 * Animation used for running
	 *
	 * @return the animation ID
	 * @see AnimationID
	 */
	getRunAnimation(): number;

	setRunAnimation(animationID: number): void;

	/**
	 * Sets an animation for the actor to perform.
	 *
	 * @param animation the animation ID
	 * @see AnimationID
	 */

	setAnimation(animation: number): void;

	/**
	 * Get the frame of the animation the actor is performing
	 *
	 * @return the frame
	 */
	getAnimationFrame(): number;

	/**
	 * Sets the frame of the animation the actor is performing.
	 *
	 * @param frame the animation frame
	 * @deprecated use setAnimationFrame
	 */

	setActionFrame(frame: number): void;

	/**
	 * Sets the frame of the animation the actor is performing.
	 *
	 * @param frame the animation frame
	 */
	setAnimationFrame(frame: number): void;

	/**
	 * Get the spotanims on the actor.
	 * It is important to not modify the table directly or indirectly via
	 * eg. iterator remove().
	 * @see #createSpotAnim(int, int, int, int)
	 * @see #removeSpotAnim(int)
	 * @see #clearSpotAnims()
	 * @return
	 */
	getSpotAnims(): IterableHashTable<ActorSpotAnim>;

	/**
	 * Check if the actor has a spotanim
	 * @param spotAnimId the spot anim id
	 * @see GraphicID
	 * @return
	 */
	hasSpotAnim(spotAnimId: number): boolean;

	/**
	 * Create an actor spotanim
	 * @param id key for the {@link #getSpotAnims()} table
	 * @param spotAnimId spotanim id {@link GraphicID}
	 * @param height height offspot for spot anim
	 * @param delay initial delay, in client ticks, before spotanim is active
	 */
	createSpotAnim(
		id: number,
		spotAnimId: number,
		height: number,
		delay: number,
	): void;

	/**
	 * Remove an actor spotanim
	 * @param id key for the {@link #getSpotAnims()} table
	 */
	removeSpotAnim(id: number): void;

	/**
	 * Remove all actor spotanims
	 */
	clearSpotAnims(): void;

	/**
	 * Get the graphic/spotanim that is currently on the actor.
	 * Actors can have multiple spotanims, this gets only one of them. Use {@link #hasSpotAnim(int)} instead.
	 *
	 * @return the spotanim of the actor
	 * @see GraphicID
	 * @deprecated see {@link #hasSpotAnim(int)}
	 */

	getGraphic(): number;

	/**
	 * Set the graphic/spotanim that is currently on the actor.
	 *
	 * @param graphic The spotanim id
	 * @see GraphicID
	 * @deprecated see {@link #createSpotAnim(int, int, int, int)}
	 */

	setGraphic(graphic: number): void;

	/**
	 * Get the height of the graphic/spotanim on the actor
	 * @return
	 * @deprecated see {@link ActorSpotAnim#getHeight()}
	 */

	getGraphicHeight(): number;

	/**
	 * Set the height of the graphic/spotanim on the actor
	 * @param height
	 * @deprecated see {@link ActorSpotAnim#setHeight(int)}
	 */

	setGraphicHeight(height: number): void;

	/**
	 * Get the frame of the currently playing spotanim
	 *
	 * @return
	 * @deprecated see {@link ActorSpotAnim#getFrame()}
	 */

	getSpotAnimFrame(): number;

	/**
	 * Set the frame of the currently playing spotanim
	 *
	 * @param spotAnimFrame
	 * @deprecated see {@link ActorSpotAnim#setFrame(int)}
	 */

	setSpotAnimFrame(spotAnimFrame: number): void;

	/**
	 * Gets the canvas area of the current tiles the actor is standing on.
	 *
	 * @return the current tile canvas area
	 */
	getCanvasTilePoly(): Polygon;

	/**
	 * Gets the point at which text should be drawn, relative to the
	 * current location with the given z-axis offset.
	 *
	 * @param graphics engine graphics
	 * @param text the text to draw
	 * @param zOffset the z-axis offset
	 * @return the text drawing location
	 */

	getCanvasTextLocation(
		graphics: Graphics2D,
		text: string,
		zOffset: number,
	): Point | null;

	/**
	 * Gets the point at which an image should be drawn, relative to the
	 * current location with the given z-axis offset.
	 *
	 * @param image the image to draw
	 * @param zOffset the z-axis offset
	 * @return the image drawing location
	 */
	getCanvasImageLocation(image: BufferedImage, zOffset: number): Point;

	/**
	 * Gets the point at which a sprite should be drawn, relative to the
	 * current location with the given z-axis offset.
	 *
	 * @param sprite the sprite to draw
	 * @param zOffset the z-axis offset
	 * @return the sprite drawing location
	 */
	getCanvasSpriteLocation(sprite: SpritePixels, zOffset: number): Point;

	/**
	 * Gets a point on the canvas of where this actors mini-map indicator
	 * should appear.
	 *
	 * @return mini-map location on canvas
	 */
	getMinimapLocation(): Point;

	/**
	 * Gets the logical height of the actors model.
	 * <p>
	 * This z-axis offset is roughly where the health bar of the actor
	 * is drawn.
	 *
	 * @return the logical height
	 */
	getLogicalHeight(): number;

	/**
	 * Gets the convex hull of the actors model.
	 *
	 * @return the convex hull
	 * @see net.runelite.api.model.Jarvis
	 */
	getConvexHull(): Shape;

	/**
	 * Gets the world area that the actor occupies.
	 *
	 * @return the world area
	 */
	getWorldArea(): WorldArea;

	/**
	 * Gets the overhead text that is displayed above the actor
	 *
	 * @return the overhead text
	 */
	getOverheadText(): string;

	/**
	 * Sets the overhead text that is displayed above the actor
	 *
	 * @param overheadText the overhead text
	 */
	setOverheadText(overheadText: string): void;

	/**
	 * Get the number of cycles/client ticks remaining before the overhead text is timed out
	 *
	 * @return
	 */
	getOverheadCycle(): number;

	/**
	 * Set the number of cycles/client ticks before the overhead text is timed out
	 *
	 * @param cycles
	 */
	setOverheadCycle(cycles: number): void;

	/**
	 * Returns true if this actor has died
	 *
	 * @return
	 */
	isDead(): boolean;

	/**
	 * Sets the dead status of this actor
	 *
	 * @param dead
	 * @see #isDead()
	 */
	setDead(dead: boolean): void;
}
