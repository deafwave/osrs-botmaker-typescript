/**
 * Represents an event before the menu is rendered in TypeScript.
 */
declare class BeforeMenuRender {
	private consumed: boolean;

	constructor();

	consume(): void;
}
