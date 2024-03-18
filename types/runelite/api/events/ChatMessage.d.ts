/// <reference path="../MessageNode.d.ts" />
/// <reference path="../ChatMessageType.d.ts" />

declare namespace net.runelite.api.events {
	export class ChatMessage {
		/**
		 * The underlying MessageNode for the message.
		 */
		private messageNode: MessageNode;
		/**
		 * The type of message received.
		 */
		private type: ChatMessageType;
		/**
		 * The name of the player that sent the message.
		 */
		private name: string;
		/**
		 * The contents of the message.
		 */
		private message: string;
		/**
		 * The sender of the message.
		 * <p>
		 * This field is only used for friends chat messages and refers to the
		 * current name of the friends chat the client is in.
		 */
		private sender: string;
		/**
		 * Timestamp of the message.
		 */
		private timestamp: number;
	}
}
