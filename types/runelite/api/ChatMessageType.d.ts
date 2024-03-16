// Reference: ClanSettings.d.ts (Assuming ClanSettings are used somewhere in the context not shown in the provided code)

/**
 * Enumeration of message types that can be received in the chat.
 */
declare enum ChatMessageType {
	/**
	 * A normal game message.
	 */
	GAMEMESSAGE = 0,
	/**
	 * A message in the public chat from a moderator.
	 */
	MODCHAT = 1,
	/**
	 * A message in the public chat.
	 */
	PUBLICCHAT = 2,
	/**
	 * A private message from another player.
	 */
	PRIVATECHAT = 3,
	/**
	 * A message that the game engine sends.
	 */
	ENGINE = 4,
	/**
	 * A message received when a friend logs in or out.
	 */
	LOGINLOGOUTNOTIFICATION = 5,
	/**
	 * A private message sent to another player.
	 */
	PRIVATECHATOUT = 6,
	/**
	 * A private message received from a moderator.
	 */
	MODPRIVATECHAT = 7,
	/**
	 * A message received in friends chat.
	 */
	FRIENDSCHAT = 9,
	/**
	 * A message received with information about the current friends chat.
	 */
	FRIENDSCHATNOTIFICATION = 11,
	/**
	 * A trade request being sent.
	 */
	TRADE_SENT = 12,
	/**
	 * A game broadcast.
	 */
	BROADCAST = 14,
	/**
	 * An abuse report submitted.
	 */
	SNAPSHOTFEEDBACK = 26,
	/**
	 * Examine item description.
	 */
	ITEM_EXAMINE = 27,
	/**
	 * Examine NPC description.
	 */
	NPC_EXAMINE = 28,
	/**
	 * Examine object description.
	 */
	OBJECT_EXAMINE = 29,
	/**
	 * Adding player to friend list.
	 */
	FRIENDNOTIFICATION = 30,
	/**
	 * Adding player to ignore list.
	 */
	IGNORENOTIFICATION = 31,
	/**
	 * A chat message in a clan chat.
	 */
	CLAN_CHAT = 41,
	/**
	 * A system message in a clan chat.
	 */
	CLAN_MESSAGE = 43,
	/**
	 * A chat message in the guest clan chat.
	 */
	CLAN_GUEST_CHAT = 44,
	/**
	 * A system message in the guest clan chat.
	 */
	CLAN_GUEST_MESSAGE = 46,
	/**
	 * An autotyper message from a player.
	 */
	AUTOTYPER = 90,
	/**
	 * An autotyper message from a mod.
	 */
	MODAUTOTYPER = 91,
	/**
	 * A game message. (i.e., when a setting is changed)
	 */
	CONSOLE = 99,
	/**
	 * A message received when somebody sends a trade offer.
	 */
	TRADEREQ = 101,
	/**
	 * A message received when completing a trade or a duel.
	 */
	TRADE = 102,
	/**
	 * A message received when somebody sends a duel offer.
	 */
	CHALREQ_TRADE = 103,
	/**
	 * A message received when someone sends a friends chat challenge offer.
	 */
	CHALREQ_FRIENDSCHAT = 104,
	/**
	 * A message that was filtered.
	 */
	SPAM = 105,
	/**
	 * A message that is relating to the player.
	 */
	PLAYERRELATED = 106,
	/**
	 * A message that times out after 10 seconds.
	 */
	TENSECTIMEOUT = 107,
	/**
	 * The "Welcome to RuneScape" message.
	 */
	WELCOME = 108,
	/**
	 * Clan creation invitation.
	 */
	CLAN_CREATION_INVITATION = 109,
	/**
	 * Challenge offer for the clan tab.
	 */
	CHALREQ_CLANCHAT = 110,

	CLAN_GIM_FORM_GROUP = 111,
	CLAN_GIM_GROUP_WITH = 112,
	CLAN_GIM_CHAT = -1,
	CLAN_GIM_MESSAGE = -1,
	/**
	 * Chat type for NPC and player dialog.
	 */
	DIALOG = 114,
	/**
	 * Chat type for dialog with a graphic/object.
	 */
	MESBOX = 115,
	/**
	 * An unknown message type.
	 */
	UNKNOWN = -1,
}
