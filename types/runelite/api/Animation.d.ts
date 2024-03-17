/**
 * Represents an animation of a renderable
 */
interface Animation
{
	/**
	 * Get the id for this animation
	 * @see AnimationID
	 * @return
	 */
	getId(): number;

	/**
	 * Get how many distinct frames this animation has.
	 *
	 * For animaya animations, this is the duration in client ticks. For classic
	 * animations, this is how many keyframes it has, not it's duration in ticks.
	 */
	getNumFrames(): number;

	/**
	 * How this animation behaves when its restarted during playback
	 */
	getRestartMode(): number;

	/**
	 * @see #getRestartMode()
	 */
	setRestartMode(restartMode: number): void;
}