declare namespace net.runelite.api {
	class ScriptID {
		/**
		 * Updates the scrollbar handle and container to the new height of the content container
		 * <ul>
		 * <li> int (WidgetID) Scrollbar's widget ID </li>
		 * <li> int (WidgetID) Container widget ID </li>
		 * <li> int how far down to scroll </li>
		 * </ul>
		 */

		static readonly UPDATE_SCROLLBAR = 72;

		/**
		 * Sends a chat message
		 * <ul>
		 * <li> String Message to send </li>
		 * <li> int modes </li>
		 * <li> int (clan type) </li>
		 * <li> int (boolean) use target</li>
		 * <li> int set target </li>
		 * </ul>
		 */

		static readonly CHAT_SEND = 5517;

		/**
		 * Rebuilds the chatbox and the pmbox
		 */

		static readonly SPLITPM_CHANGED = 83;

		/**
		 * Rebuilds the chatbox
		 */

		static readonly BUILD_CHATBOX = 216;

		/**
		 * Opens the Private Message chat interface
		 *
		 * Jagex refers to this script as {@code meslayer_mode6}
		 * <ul>
		 * <li> String Player to send private message to</li>
		 * </ul>
		 */
		static readonly OPEN_PRIVATE_MESSAGE_INTERFACE = 107;

		/**
		 * Rebuilds the text input widget inside the chat interface
		 * <ul>
		 * <li> String Message Prefix. Only used inside the GE search interfaces
		 * </ul>
		 */
		static readonly CHAT_TEXT_INPUT_REBUILD = 222;

		/**
		 * Closes the chatbox input
		 * <ul>
		 * <li> int (boolean) Clear the current text </li>
		 * <li> int (boolean) Restore to chat view </li>
		 * <li> int (boolean) Submit close to server </li>
		 * </ul>
		 */
		static readonly MESSAGE_LAYER_CLOSE = 299;

		/**
		 * Readies the chatbox panel for things like the chatbox input
		 * Inverse of MESSAGE_LAYER_CLOSE
		 * <ul>
		 * <li> int (InputType) message layer type we are changing to </li>
		 * </ul>
		 */
		static readonly MESSAGE_LAYER_OPEN = 677;

		/**
		 * Builds the chatbox input widget
		 */
		static readonly CHAT_PROMPT_INIT = 223;

		/**
		 * Checks the state of the given stash unit.
		 * <ul>
		 * <li>int (loc) The stash unit object id</li>
		 * <li>int Bitpacked stash unit states</li>
		 * <li>int Bitpacked stash unit states 2</li>
		 * <li>int Bitpacked stash unit states 3</li>
		 * </ul>
		 *
		 * Returns a pair of booleans indicating if the stash unit is built and if it is filled
		 */
		static readonly WATSON_STASH_UNIT_CHECK = 1479;

		/**
		 * Queries the completion state of a quest by its struct id
		 * <ul>
		 * <li> int (struct) The id of the quest
		 * </ul>
		 * Returns
		 * <ul>
		 * <li> int (QuestState) the normalized state of the quest
		 * </ul>
		 */
		static readonly QUEST_STATUS_GET = 4029;

		/**
		 * Updates the Quest interface's scrollbar
		 * <ul>
		 * <li> int (boolean) Reset scroll position </li>
		 * <li> int Number of lines </li>
		 * </ul>
		 */
		static readonly QUEST_UPDATE_LINECOUNT = 2523;

		/**
		 * Updates the Diary interface's scrollbar
		 * <ul>
		 * <li> int (boolean) Reset scroll position </li>
		 * <li> int Number of lines </li>
		 * </ul>
		 */
		static readonly DIARY_UPDATE_LINECOUNT = 6845;

		/**
		 * Handles zoom input
		 *
		 * Updates the VarClientInts (73, 74) to this same value
		 * <ul>
		 * <li> int  Reset zoom position for fixed viewport mode</li>
		 * <li> int  Reset zoom position for resizable viewport mode</li>
		 * </ul>
		 */
		static readonly CAMERA_DO_ZOOM = 42;

		/**
		 * Does nothing
		 *
		 * This is used to eat events when you want a menu action attached to it
		 * because you need an op listener attached to it for it to work
		 * @deprecated
		 */
		static readonly NULL = 10003;

		/**
		 * Send a private message.
		 */
		static readonly PRIVMSG = 10004;

		/**
		 * Creates a disabled experience drop
		 *
		 * <ul>
		 * <li>int (Skill ordinal) Sets what icon to use</li>
		 * <li>int Amount of exp to drop</li>
		 * </ul>
		 */
		static readonly XPDROP_DISABLED = 2091;

		/**
		 * Attempts to kick the specified player from the friends chat
		 * <ul>
		 * <li>String Players in-game name</li>
		 * </ul>
		 */
		static readonly FRIENDS_CHAT_SEND_KICK = 3764;

		/**
		 * Builds the widget that holds all of the players inside a friends chat
		 */
		static readonly FRIENDS_CHAT_CHANNEL_REBUILD = 1658;

		/**
		 * Builds the widget that holds all of the players inside a clan chat
		 */
		static readonly CLAN_SIDEPANEL_DRAW = 4396;

		/**
		 * Builds the widget for making an offer in Grand Exchange
		 */
		static readonly GE_OFFERS_SETUP_BUILD = 779;

		/**
		 * Builds the grand exchange item search widget
		 */
		static readonly GE_ITEM_SEARCH = 752;

		/**
		 * On load listener for building the quest list interface
		 */
		static readonly QUESTLIST_INIT = 1350;

		/**
		 * Called when the friends list is updated
		 * <ul>
		 * <li> int (WidgetID) Friends list "full container" </li>
		 * <li> int (WidgetID) Friends list sort by name button </li>
		 * <li> int (WidgetID) Friends list sort by last world change button </li>
		 * <li> int (WidgetID) Friends list sort by world button </li>
		 * <li> int (WidgetID) Friends list legacy sort button </li>
		 * <li> int (WidgetID) Friends list names container </li>
		 * <li> int (WidgetID) Friends list scroll bar </li>
		 * <li> int (WidgetID) Friends list "loading please wait" text </li>
		 * <li> int (WidgetID) Friends list player previous name holder </li>
		 * </ul>
		 */
		static readonly FRIENDS_UPDATE = 631;

		/**
		 * Called when the ignore list is updated
		 * <ul>
		 * <li> int (WidgetID) Ignore list "full container" </li>
		 * <li> int (WidgetID) Ignore list sort by name button </li>
		 * <li> int (WidgetID) Ignore list legacy sort button </li>
		 * <li> int (WidgetID) Ignore list names container </li>
		 * <li> int (WidgetID) Ignore list scroll bar </li>
		 * <li> int (WidgetID) Ignore list "loading please wait" text </li>
		 * <li> int (WidgetID) Ignore list player previous name holder </li>
		 * </ul>
		 */
		static readonly IGNORE_UPDATE = 630;

		/**
		 * Called in an onTimer, determines whether to layout the bank during a search
		 * <ul>
		 * <li> int (WidgetID) * 16, various widgets making up the bank interface </li>
		 * </ul>
		 */
		static readonly BANKMAIN_SEARCH_REFRESH = 283;

		/**
		 * Called to update the PVP widget (wilderness level/protection)
		 */
		static readonly PVP_WIDGET_BUILDER = 388;

		/**
		 * Called to build the combat interface
		 */
		static readonly COMBAT_INTERFACE_SETUP = 420;

		/**
		 * Called to build the toplevel interface
		 */
		static readonly TOPLEVEL_REDRAW = 907;

		/**
		 * Called to set position of an xpdrop text and sprite(s)
		 * <ul>
		 * <li> XP drop parent component </li>
		 * </ul>
		 */
		static readonly XPDROPS_SETDROPSIZE = 996;

		static readonly BANKMAIN_INIT = 274;

		/**
		 * Main layout script for the bank
		 * <ul>
		 * <li>int (WidgetID) * 17, various widgets making up the bank interface</li>
		 * </ul>
		 */
		static readonly BANKMAIN_BUILD = 277;

		static readonly BANKMAIN_FINISHBUILDING = 505;

		static readonly BANKMAIN_SEARCHING = 514;

		/**
		 * Toggles the bank search
		 *
		 * <ul>
		 * <li>int 1 (must be 1 or script immediately returns)</li>
		 * </ul>
		 *
		 * Also takes 17 widget IDs corresponding to various bank widgets.
		 * These can be retrieved from the onInvTransmitListener of BANK_ITEM_CONTAINER. Note that this array also
		 * contains the script ID for the bank layout script in the first index
		 */
		static readonly BANKMAIN_SEARCH_TOGGLE = 281;

		static readonly BANKMAIN_SIZE_CHECK = 840;

		/**
		 * Chooses the click handler for a {@link ParamID#SETTING_SLIDER_CUSTOM_ONOP} = 1 settings slider
		 *
		 * The active widget is set to the track created by {@link ParamID#SETTING_FOREGROUND_CLICKZONE}
		 * <ul>
		 * <li>int {@link ParamID#SETTING_ID}</li>
		 * <li>int (WidgetID) Slider handle ID</li>
		 * <li>int (widget index) Slider handle index</li>
		 * <li>int track width</li>
		 * <li>int y offset</li>
		 * <li>int x offset</li>
		 * <li>int (WidgetID) drag parent</li>
		 * </ul>
		 */
		static readonly SETTINGS_SLIDER_CHOOSE_ONOP = 3885;

		/**
		 * Position and size the wiki button, as well as hide/unhide it
		 */
		static readonly WIKI_ICON_UPDATE = 3306;

		/**
		 * Drag callback for the camera zoom slider in the options side panel.
		 */
		static readonly ZOOM_SLIDER_ONDRAG = 833;

		/**
		 * Drag callback for the camera zoom slider in the settings.
		 */
		static readonly SETTINGS_ZOOM_SLIDER_ONDRAG = 3896;

		static readonly COLLECTION_DRAW_LIST = 2730;

		/**
		 * Draws the active notification in increasing sizes (increasing horizontally first, then vertically) to show a
		 * starting animation.
		 */
		static readonly NOTIFICATION_START = 3346;

		/**
		 * Draws the active notification in full size for a specified number of client ticks. In essence, delayed between
		 * the open and close animations.
		 */
		static readonly NOTIFICATION_DELAY = 3347;

		static readonly GROUP_IRONMAN_STORAGE_BUILD = 5269;

		static readonly INVENTORY_DRAWITEM = 6011;

		/**
		 * Initializes the trade interface
		 */
		static readonly TRADE_MAIN_INIT = 755;

		/**
		 * Transitions the tob hud into the white flash that happens when sotetseg teleports the players to the maze.
		 */
		static readonly TOB_HUD_SOTETSEG_FADE = 2308;

		static readonly RAIDS_STORAGE_PRIVATE_ITEMS = 1607;

		static readonly HP_HUD_UPDATE = 2103;

		static readonly ORBS_UPDATE_RUNENERGY = 447;

		static readonly WORLDMAP_LOADMAP = 1712;

		static readonly PRAYER_UPDATEBUTTON = 463;

		static readonly PRAYER_REDRAW = 547;

		static readonly QUICKPRAYER_INIT = 466;

		/**
		 * Called to add a loc overlay timer
		 * <ul>
		 * <li> loc coord </li>
		 * <li> loc id </li>
		 * <li> loc type </li>
		 * <li> overlay type </li>
		 * <li> overlay ticks </li>
		 * </ul>
		 */
		static readonly ADD_OVERLAYTIMER_LOC = 5474;

		static readonly ACCOUNT_SUMMARY_TEXT_FORMAT = 3948;

		static readonly ACCOUNT_SUMMARY_SECTION_FORMAT = 3950;
		static readonly CHATBOX_KEYINPUT_MATCHED = 2153;

		static readonly EQUIPMENT_SET_STAT_BONUS_SETUP = 3517;
	}
}
