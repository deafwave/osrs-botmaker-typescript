/// <reference path="RuneliteNode.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/**
 * Represents a message in the chatbox.
 */
interface MessageNode extends RuneliteNode {
	/**
	 * Get the id for this message node
	 *
	 * @return
	 */
	getId(): number;

	/**
	 * Gets the type of message.
	 *
	 * @return the message type
	 */
	getType(): ChatMessageType;

	/**
	 * Gets the name of the player that sent the message.
	 *
	 * @return the player name
	 */
	getName(): string;

	/**
	 * Sets the name of the player that sent the message.
	 *
	 * @param name the new player name
	 */
	setName(name: string): void;

	/**
	 * Gets the sender of the message. (ie. friends chat name)
	 *
	 * @return the message sender
	 */
	getSender(): string;

	/**
	 * Sets the sender of the message.
	 *
	 * @param sender the new message sender
	 */
	setSender(sender: string): void;

	/**
	 * Gets the message contents.
	 *
	 * @return the message contents
	 */
	getValue(): string;

	/**
	 * Sets the message contents.
	 *
	 * @param value the new message contents
	 */
	setValue(value: string): void;

	/**
	 * Gets the overriden message format.
	 *
	 * @return the message format
	 */
	getRuneLiteFormatMessage(): string;

	/**
	 * Sets the overriden message format.
	 * <p>
	 * If this value is not null, the message contents as returned by
	 * {@link #getValue()} will be replaced with the format set here
	 * when a message is processed.
	 *
	 * @param runeLiteFormatMessage the new message format
	 */
	setRuneLiteFormatMessage(runeLiteFormatMessage: string): void;

	/**
	 * Get the timestamp for the message, in seconds from the unix epoch.
	 *
	 * @return
	 */
	getTimestamp(): number;

	/**
	 * Set the timestamp of the message
	 *
	 * @param timestamp
	 */
	setTimestamp(timestamp: number): void;
}
