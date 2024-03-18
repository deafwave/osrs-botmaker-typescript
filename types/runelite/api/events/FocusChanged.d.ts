declare namespace net.runelite.api.events {
	export class FocusChanged {
		/**
		 * The new focus state.
		 */
		isFocused(): boolean;
		setFocused(focused: boolean): void;
	}
}
