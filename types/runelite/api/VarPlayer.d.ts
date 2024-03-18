declare namespace net.runelite.api {
	/**
	 * Server controlled "content-developer" integers.
	 *
	 * VarPlayers are stored per RuneScape player save, and synchronized
	 * from the server to the client. The client can change them preemptively
	 * if it thinks they will change the next tick as a lag-hiding measure.
	 * The client CANNOT directly make the server change a varp.
	 */
	export class VarPlayer {
		static readonly CANNON_AMMO = 3;
		static readonly ATTACK_STYLE = 43;
		static readonly QUEST_POINTS = 101;
		/**
		 * Seems to start at 50(10 splash) and goes down by 1 every 30 seconds
		 */
		static readonly DISEASE_VALUE = 456;

		static readonly BANK_TAB = 115;

		static readonly MEMBERSHIP_DAYS = 1780;

		static readonly SPECIAL_ATTACK_PERCENT = 300;
		static readonly SPECIAL_ATTACK_ENABLED = 301;

		/**
		 * The ID of the party. This Var is only set in the raid bank area and the raid lobby
		 *
		 * This gets set to -1 when the raid starts. This is first set when the first player of the friends chat forms a party
		 * on the recruiting board and it changes again when the first person actually enters the raid.
		 *
		 * -1 : Not in a party or in the middle of an ongoing raid
		 * Anything else : This means that your friends chat has a raid party being formed and has not started yet
		 */
		static readonly IN_RAID_PARTY = 1427;

		static readonly NMZ_REWARD_POINTS = 1060;

		/**
		 * The poisoned status of the player, with negative values indicating the duration of poison or venom protection and
		 * positive values representing the amount of poison or venom damage the player will be taking.
		 *
		 * <ul>
		 *     <li>
		 *         (-inf, -38): Venom immune for a duration of {@code (abs(val) - 38) * 30} game ticks (18 seconds per
		 *         poison tick), after which point the value will have increased to {@code -38} and be representing poison
		 *         immunity rather than venom immunity
		 *     </li>
		 *     <li>
		 *         [-38, 0): Poison immune for a duration of {@code abs(val) * 30} game ticks (18 seconds per poison tick)
		 *     </li>
		 *     <li>0: Not poisoned or immune to poison</li>
		 *     <li>[1, 100]: Poisoned for an amount of {@code ceil(val / 5.0f)}</li>
		 *     <li>
		 *         [1000000, inf): Venomed for an amount of {@code min(20, (val - 999997) * 2)}, that is, an amount starting
		 *         at 6 damage, increasing by 2 each time the value increases by one, and capped at 20
		 *     </li>
		 * </ul>
		 */
		static readonly POISON = 102;

		/**
		 * 0 : not started
		 * greater than 0 : in progress
		 * greater than 99 : completed
		 */
		static readonly THRONE_OF_MISCELLANIA = 359;

		/**
		 * Item currently active in the creation of a buy or sell offer
		 */
		static readonly CURRENT_GE_ITEM = 1151;

		/**
		 * Experience tracker goal start.
		 */
		static readonly ATTACK_GOAL_START = 1229;
		static readonly STRENGTH_GOAL_START = 1230;
		static readonly RANGED_GOAL_START = 1231;
		static readonly MAGIC_GOAL_START = 1232;
		static readonly DEFENCE_GOAL_START = 1233;
		static readonly HITPOINTS_GOAL_START = 1234;
		static readonly PRAYER_GOAL_START = 1235;
		static readonly AGILITY_GOAL_START = 1236;
		static readonly HERBLORE_GOAL_START = 1237;
		static readonly THIEVING_GOAL_START = 1238;
		static readonly CRAFTING_GOAL_START = 1239;
		static readonly RUNECRAFT_GOAL_START = 1240;
		static readonly MINING_GOAL_START = 1241;
		static readonly SMITHING_GOAL_START = 1242;
		static readonly FISHING_GOAL_START = 1243;
		static readonly COOKING_GOAL_START = 1244;
		static readonly FIREMAKING_GOAL_START = 1245;
		static readonly WOODCUTTING_GOAL_START = 1246;
		static readonly FLETCHING_GOAL_START = 1247;
		static readonly SLAYER_GOAL_START = 1248;
		static readonly FARMING_GOAL_START = 1249;
		static readonly CONSTRUCTION_GOAL_START = 1250;
		static readonly HUNTER_GOAL_START = 1251;

		/**
		 * Experience tracker goal end.
		 */
		static readonly ATTACK_GOAL_END = 1253;
		static readonly STRENGTH_GOAL_END = 1254;
		static readonly RANGED_GOAL_END = 1255;
		static readonly MAGIC_GOAL_END = 1256;
		static readonly DEFENCE_GOAL_END = 1257;
		static readonly HITPOINTS_GOAL_END = 1258;
		static readonly PRAYER_GOAL_END = 1259;
		static readonly AGILITY_GOAL_END = 1260;
		static readonly HERBLORE_GOAL_END = 1261;
		static readonly THIEVING_GOAL_END = 1262;
		static readonly CRAFTING_GOAL_END = 1263;
		static readonly RUNECRAFT_GOAL_END = 1264;
		static readonly MINING_GOAL_END = 1265;
		static readonly SMITHING_GOAL_END = 1266;
		static readonly FISHING_GOAL_END = 1267;
		static readonly COOKING_GOAL_END = 1268;
		static readonly FIREMAKING_GOAL_END = 1269;
		static readonly WOODCUTTING_GOAL_END = 1270;
		static readonly FLETCHING_GOAL_END = 1271;
		static readonly SLAYER_GOAL_END = 1272;
		static readonly FARMING_GOAL_END = 1273;
		static readonly CONSTRUCTION_GOAL_END = 1274;
		static readonly HUNTER_GOAL_END = 1275;

		/**
		 * Bird house states
		 */
		static readonly BIRD_HOUSE_MEADOW_NORTH = 1626;
		static readonly BIRD_HOUSE_MEADOW_SOUTH = 1627;
		static readonly BIRD_HOUSE_VALLEY_NORTH = 1628;
		static readonly BIRD_HOUSE_VALLEY_SOUTH = 1629;

		/**
		 * Slayer unlock bitfields
		 */
		static readonly SLAYER_UNLOCK_1 = 1076;
		static readonly SLAYER_UNLOCK_2 = 1344;

		static readonly MUSIC_VOLUME = 168;
		static readonly SOUND_EFFECT_VOLUME = 169;
		static readonly AREA_EFFECT_VOLUME = 872;

		/**
		 * 0 = 2 buttons, 1 = 1 button
		 */
		static readonly MOUSE_BUTTONS = 170;

		/**
		 * {@link NpcID} for the HP HUD
		 */
		static readonly HP_HUD_NPC_ID = 1683;

		/**
		 * Colors for chat messages
		 */
		static readonly SETTINGS_OPAQUE_CHAT_PUBLIC = 2992;
		static readonly SETTINGS_OPAQUE_CHAT_PRIVATE = 2993;
		static readonly SETTINGS_OPAQUE_CHAT_AUTO = 2994;
		static readonly SETTINGS_OPAQUE_CHAT_BROADCAST = 2995;
		static readonly SETTINGS_OPAQUE_CHAT_FRIEND = 2996;
		static readonly SETTINGS_OPAQUE_CHAT_CLAN = 2997;
		static readonly SETTINGS_OPAQUE_CHAT_GUEST_CLAN = 3060;
		static readonly SETTINGS_OPAQUE_CHAT_CLAN_BROADCAST = 3192;
		static readonly SETTINGS_OPAQUE_CHAT_IRON_GROUP_CHAT = 3191;
		static readonly SETTINGS_OPAQUE_CHAT_IRON_GROUP_BROADCAST = 3193;
		static readonly SETTINGS_OPAQUE_CHAT_TRADE_REQUEST = 2998;
		static readonly SETTINGS_OPAQUE_CHAT_CHALLENGE_REQUEST = 2999;

		static readonly SETTINGS_TRANSPARENT_CHAT_PUBLIC = 3000;
		static readonly SETTINGS_TRANSPARENT_CHAT_PRIVATE = 3001;
		static readonly SETTINGS_TRANSPARENT_CHAT_AUTO = 3002;
		static readonly SETTINGS_TRANSPARENT_CHAT_BROADCAST = 3003;
		static readonly SETTINGS_TRANSPARENT_CHAT_FRIEND = 3004;
		static readonly SETTINGS_TRANSPARENT_CHAT_CLAN = 3005;
		static readonly SETTINGS_TRANSPARENT_CHAT_GUEST_CLAN = 3061;
		static readonly SETTINGS_TRANSPARENT_CHAT_CLAN_BROADCAST = 3195;
		static readonly SETTINGS_TRANSPARENT_CHAT_IRON_GROUP_CHAT = 3194;
		static readonly SETTINGS_TRANSPARENT_CHAT_IRON_GROUP_BROADCAST = 3196;
		static readonly SETTINGS_TRANSPARENT_CHAT_TRADE_REQUEST = 3006;
		static readonly SETTINGS_TRANSPARENT_CHAT_CHALLENGE_REQUEST = 3007;

		/**
		 * The difference, measured in minutes, between the time home teleport spell was last used and midnight, January 1, 1970 UTC.
		 */
		static readonly LAST_HOME_TELEPORT = 892;

		/**
		 * Charge spell duration
		 * Value * 2 = Remaining game ticks on buff
		 * E.g. value of 50 means buff will expire in 100 ticks.
		 */
		static readonly CHARGE_GOD_SPELL = 272;

		/**
		 * The difference, measured in minutes, between the time minigame teleport was last used and midnight, January 1, 1970 UTC.
		 */
		static readonly LAST_MINIGAME_TELEPORT = 888;

		/**
		 * Number of slayer creatures remaining on the assigned task
		 */
		static readonly SLAYER_TASK_SIZE = 394;

		/**
		 * Currently assigned slayer task if SLAYER_TASK_SIZE is greater than 0.
		 * Mapping of value to name can be found in {@link EnumID#SLAYER_TASK_CREATURE}.
		 */
		static readonly SLAYER_TASK_CREATURE = 395;

		/**
		 * Assigned slayer task location. The mapping of value to name can be found in {@link EnumID#SLAYER_TASK_LOCATION}
		 */
		static readonly SLAYER_TASK_LOCATION = 2096;
	}
}
