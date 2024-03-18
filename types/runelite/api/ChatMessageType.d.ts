declare namespace net.runelite.api {
	export interface ChatMessageType {
		/**
		 * A normal game message.
		 */
		GAMEMESSAGE: 'GAMEMESSAGE';
		/**
		 * A message in the public chat from a moderator
		 */
		MODCHAT: 'MODCHAT';
		/**
		 * A message in the public chat.
		 */
		PUBLICCHAT: 'PUBLICCHAT';
		/**
		 * A private message from another player.
		 */
		PRIVATECHAT: 'PRIVATECHAT';
		/**
		 * A message that the game engine sends.
		 */
		ENGINE: 'ENGINE';
		/**
		 * A message received when a friend logs in or out.
		 */
		LOGINLOGOUTNOTIFICATION: 'LOGINLOGOUTNOTIFICATION';
		/**
		 * A private message sent to another player.
		 */
		PRIVATECHATOUT: 'PRIVATECHATOUT';
		/**
		 * A private message received from a moderator.
		 */
		MODPRIVATECHAT: 'MODPRIVATECHAT';
		/**
		 * A message received in friends chat.
		 */
		FRIENDSCHAT: 'FRIENDSCHAT';
		/**
		 * A message received with information about the current friends chat.
		 */
		FRIENDSCHATNOTIFICATION: 'FRIENDSCHATNOTIFICATION';
		/**
		 * A trade request being sent.
		 */
		TRADE_SENT: 'TRADE_SENT';
		/**
		 * A game broadcast.
		 */
		BROADCAST: 'BROADCAST';
		/**
		 * An abuse report submitted.
		 */
		SNAPSHOTFEEDBACK: 'SNAPSHOTFEEDBACK';
		/**
		 * Examine item description.
		 */
		ITEM_EXAMINE: 'ITEM_EXAMINE';
		/**
		 * Examine NPC description.
		 */
		NPC_EXAMINE: 'NPC_EXAMINE';
		/**
		 * Examine object description.
		 */
		OBJECT_EXAMINE: 'OBJECT_EXAMINE';
		/**
		 * Adding player to friend list.
		 */
		FRIENDNOTIFICATION: 'FRIENDNOTIFICATION';
		/**
		 * Adding player to ignore list.
		 */
		IGNORENOTIFICATION: 'IGNORENOTIFICATION';
		/**
		 * A chat message in a clan chat.
		 */
		CLAN_CHAT: 'CLAN_CHAT';
		/**
		 * A system message in a clan chat.
		 */
		CLAN_MESSAGE: 'CLAN_MESSAGE';
		/**
		 * A chat message in the guest clan chat.
		 */
		CLAN_GUEST_CHAT: 'CLAN_GUEST_CHAT';
		/**
		 * A system message in the guest clan chat.
		 */
		CLAN_GUEST_MESSAGE: 'CLAN_GUEST_MESSAGE';
		/**
		 * An autotyper message from a player.
		 */
		AUTOTYPER: 'AUTOTYPER';
		/**
		 * An autotyper message from a mod.
		 */
		MODAUTOTYPER: 'MODAUTOTYPER';
		/**
		 * A game message. (ie. when a setting is changed)
		 */
		CONSOLE: 'CONSOLE';
		/**
		 * A message received when somebody sends a trade offer.
		 */
		TRADEREQ: 'TRADEREQ';
		/**
		 * A message received when completing a trade or a duel
		 */
		TRADE: 'TRADE';
		/**
		 * A message received when somebody sends a duel offer.
		 */
		CHALREQ_TRADE: 'CHALREQ_TRADE';
		/**
		 * A message received when someone sends a friends chat challenge offer.
		 */
		CHALREQ_FRIENDSCHAT: 'CHALREQ_FRIENDSCHAT';
		/**
		 * A message that was filtered.
		 */
		SPAM: 'SPAM';
		/**
		 * A message that is relating to the player.
		 */
		PLAYERRELATED: 'PLAYERRELATED';
		/**
		 * A message that times out after 10 seconds.
		 */
		TENSECTIMEOUT: 'TENSECTIMEOUT';
		/**
		 * The "Welcome to RuneScape" message
		 */
		WELCOME: 'WELCOME';
		/**
		 * Clan creation invitation.
		 */
		CLAN_CREATION_INVITATION: 'CLAN_CREATION_INVITATION';
		/**
		 * Challenge offer for the clan tab
		 */
		CHALREQ_CLANCHAT: 'CHALREQ_CLANCHAT';
		CLAN_GIM_FORM_GROUP: 'CLAN_GIM_FORM_GROUP';
		CLAN_GIM_GROUP_WITH: 'CLAN_GIM_GROUP_WITH';
		CLAN_GIM_CHAT: 'CLAN_GIM_CHAT';
		CLAN_GIM_MESSAGE: 'CLAN_GIM_MESSAGE';
		/**
		 * Chat type for npc and player dialog
		 */
		DIALOG: 'DIALOG';
		/**
		 * Chat type for dialog with a graphic/object
		 */
		MESBOX: 'MESBOX';
		/**
		 * An unknown message type.
		 */
		UNKNOWN: 'UNKNOWN';
	}
}
