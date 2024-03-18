declare namespace net.runelite.api.events {
	export class PlayerMenuOptionsChanged {
		/**
		 * Index in playerOptions which changed.
		 */
		getIndex(): number;
		setIndex(index: number): void;
	}
}
