declare namespace net.runelite.api {
class ChatMessage
{
/**
	 * The underlying MessageNode for the message.
	 */
MessageNode messageNode;
/**
	 * The type of message received.
	 */
ChatMessageType type;
/**
	 * The name of the player that sent the message.
	 */
String name;
/**
	 * The contents of the message.
	 */
String message;
/**
	 * The sender of the message.
	 * <p>
	 * This field is only used for friends chat messages and refers to the
	 * current name of the friends chat the client is in.
	 */
String sender;
/**
	 * Timestamp of the message.
	 */
int timestamp;
}

}