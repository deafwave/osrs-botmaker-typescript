/// <reference path="RuneliteNode.d.ts" />
interface ActorSpotAnim extends RuneliteNode {
	/**
	 * Get the spotanim id
	 * @see GraphicID
	 * @return
	 */
	getId(): number;

	/**
	 * Set the spotanim id
	 * @see GraphicID
	 * @param id
	 */
	setId(id: number): void;

	/**
	 * Get the spotanim height
	 * @return
	 */
	getHeight(): number;

	/**
	 * Set the spotanim height
	 * @param height
	 */
	setHeight(height: number): void;

	/**
	 * Get the spotanim frame
	 * @return
	 */
	getFrame(): number;

	/**
	 * Set the spotanim frame
	 * @param frame
	 */
	setFrame(frame: number): void;

	/**
	 * Get the frame cycle. The number of ticks the client has been on this frame.
	 * @return
	 */
	getCycle(): number;

	/**
	 * Set the frame cycle.
	 * @param cycle
	 */
	setCycle(cycle: number): void;
}
