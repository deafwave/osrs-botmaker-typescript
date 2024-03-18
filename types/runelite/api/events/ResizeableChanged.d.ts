declare namespace net.runelite.api.events {
	export class ResizeableChanged {
		/**
		 * Whether the game is in resizable mode.
		 */
		isResized(): boolean;
		setResized(isResized: boolean): void;
	}
}
