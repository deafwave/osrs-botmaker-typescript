declare namespace net.runelite.api.events {
	/**
	 * Represents an event before the menu is rendered in TypeScript.
	 */
	export class BeforeMenuRender {
		isConsumed(): boolean;

		consume(): void;
	}
}
