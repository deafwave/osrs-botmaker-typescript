/// <reference path="coords/LocalPoint.d.ts" />
/**
 * An ambient sound effect. These are loaded only at scene load and are used to play ambient
 * sound effects that are purely client side and not sent from the server.
 */
interface AmbientSoundEffect {
	/**
	 * The id of the sound effect
	 * @see SoundEffectID
	 * @return
	 */
	getSoundEffectId(): number;

	/**
	 * The background sound effect ids. One sound effect is picked from this at random.
	 * @see SoundEffectID
	 * @return
	 */

	getBackgroundSoundEffectIds(): number[] | null;

	/**
	 * The plane the sound effect is on
	 * @return
	 */
	getPlane(): number;

	/**
	 * The min x/y position of the area this sound effect is at.
	 * @return
	 */
	getMinPosition(): LocalPoint;

	/**
	 * The max x/y position of the area this sound effect is at
	 * @return
	 */
	getMaxPosition(): LocalPoint;
}
