/// <reference path="MessageNode.d.ts" />
/// <reference path="ChatMessageType.d.ts" />

/**
 * Represents an event where a new chat message is received in TypeScript.
 * See ChatMessageType for different message types that can be received.
 * Note: This event will not trigger for NPC dialogues.
 */
declare class ChatMessage {
	private messageNode: MessageNode;
	private type: ChatMessageType;
	private name: string;
	private message: string;
	private sender: string;
	private timestamp: number;

	constructor(
		messageNode: MessageNode,
		type: ChatMessageType,
		name: string,
		message: string,
		sender: string,
		timestamp: number,
	);
}
