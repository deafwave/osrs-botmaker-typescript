declare namespace net.runelite.api.events {
	/**
	 * Represents an event before the menu is rendered in TypeScript.
	 */
	export class BeforeMenuRender {
		private consumed: boolean;

		consume(): void;
	}
}
