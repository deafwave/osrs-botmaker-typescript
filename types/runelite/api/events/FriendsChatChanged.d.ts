/**
 * Represents an event in TypeScript where the client has joined or left a friends chat.
 */
declare class FriendsChatChanged {
	private readonly joined: boolean;

	constructor(joined: boolean);
}
