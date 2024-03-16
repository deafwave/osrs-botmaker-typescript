/**
 * Represents an event in TypeScript where the focus state of the client changes.
 */
declare class FocusChanged {
	private readonly focused: boolean;

	constructor(focused: boolean);
}
