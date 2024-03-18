/**
 * Client side only, content-developer strings
 *
 * VarCInts are stored entirely in memory, or locally on a user's
 * machine in the preferences2.dat file depending on how Jagex
 * configured the variable
 */
declare namespace net.runelite.api {
	class VarClientStr {
		static readonly CHATBOX_TYPED_TEXT = 335;
		static readonly INPUT_TEXT = 359;
		static readonly PRIVATE_MESSAGE_TARGET = 360;
		static readonly RECENT_FRIENDS_CHAT = 362;
		static readonly NOTIFICATION_TOP_TEXT = 387;
		static readonly NOTIFICATION_BOTTOM_TEXT = 388;
	}
}
