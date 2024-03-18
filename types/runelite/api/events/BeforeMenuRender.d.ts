/**
 * Represents an event before the menu is rendered in TypeScript.
 */
declare namespace net.runelite.api {
	class BeforeMenuRender {
		private consumed: boolean;

		constructor();

		consume(): void;
	}
}
