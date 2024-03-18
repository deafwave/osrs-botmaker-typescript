/// <reference path="../MessageNode.d.ts" />
/// <reference path="../ChatMessageType.d.ts" />

declare namespace net.runelite.api.events {
	export class ChatMessage {
		/**
		 * The underlying MessageNode for the message.
		 */
		getMessageNode(): MessageNode;
		setMessageNode(messageNode: MessageNode): void;

		/**
		 * The type of message received.
		 */
		getType(): ChatMessageType;
		setType(type: ChatMessageType): void;

		/**
		 * The name of the player that sent the message.
		 */
		getName(): string;
		setName(name: string): void;

		/**
		 * The contents of the message.
		 */
		getMessage(): string;
		setMessage(message: string): void;

		/**
		 * The sender of the message.
		 * <p>
		 * This field is only used for friends chat messages and refers to the
		 * current name of the friends chat the client is in.
		 */
		getSender(): string;
		setSender(sender: string): void;

		/**
		 * Timestamp of the message.
		 */
		getTimestamp(): number;
		setTimestamp(timestamp: number): void;
	}
}
