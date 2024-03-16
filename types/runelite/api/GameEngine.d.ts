/// <reference path="../../java/index.d.ts" />
/**
 * Represents the client game engine.
 */
interface GameEngine {
	/**
	 * Gets the canvas that contains everything.
	 *
	 * @return the game canvas
	 */
	getCanvas(): HTMLCanvasElement;

	/**
	 * Gets the client main thread.
	 *
	 * @return the main thread
	 */
	getClientThread(): Thread;

	/**
	 * Checks whether this code is executing on the client main thread.
	 *
	 * @return true if on the main thread, false otherwise
	 */
	isClientThread(): boolean;

	resizeCanvas(): void;
}
