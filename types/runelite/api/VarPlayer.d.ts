/**
 * Server controlled "content-developer" integers.
 *
 * VarPlayers are stored per RuneScape player save, and synchronized
 * from the server to the client. The client can change them preemptively
 * if it thinks they will change the next tick as a lag-hiding measure.
 * The client CANNOT directly make the server change a varp.
 */
interface VarPlayer {
	/** Cannon ammo count */
	CANNON_AMMO: number;
	/** Attack style */
	ATTACK_STYLE: number;
	/** Quest points */
	QUEST_POINTS: number;
	/**
	 * Disease value.
	 * Starts at 50(10 splash) and goes down by 1 every 30 seconds.
	 */
	DISEASE_VALUE: number;
	/** Bank tab */
	BANK_TAB: number;
	/** Membership days */
	MEMBERSHIP_DAYS: number;
	/** Special attack percent */
	SPECIAL_ATTACK_PERCENT: number;
	/** Special attack enabled */
	SPECIAL_ATTACK_ENABLED: number;
	/**
	 * The ID of the party.
	 * -1: Not in a party or in the middle of an ongoing raid.
	 * Anything else: Indicates a raid party being formed and has not started yet.
	 */
	IN_RAID_PARTY: number;
	/** NMZ reward points */
	NMZ_REWARD_POINTS: number;
	/**
	 * The poisoned status of the player.
	 * Negative values indicate the duration of poison or venom protection.
	 * Positive values represent the amount of poison or venom damage the player will be taking.
	 */
	POISON: number;
	/** Throne of Miscellania progress */
	THRONE_OF_MISCELLANIA: number;
	/** Item currently active in the creation of a buy or sell offer */
	CURRENT_GE_ITEM: number;
	/** Experience tracker goal start for various skills */
	ATTACK_GOAL_START: number;
	STRENGTH_GOAL_START: number;
	RANGED_GOAL_START: number;
	MAGIC_GOAL_START: number;
	DEFENCE_GOAL_START: number;
	HITPOINTS_GOAL_START: number;
	PRAYER_GOAL_START: number;
	AGILITY_GOAL_START: number;
	HERBLORE_GOAL_START: number;
	THIEVING_GOAL_START: number;
	CRAFTING_GOAL_START: number;
	RUNECRAFT_GOAL_START: number;
	MINING_GOAL_START: number;
	SMITHING_GOAL_START: number;
	FISHING_GOAL_START: number;
	COOKING_GOAL_START: number;
	FIREMAKING_GOAL_START: number;
	WOODCUTTING_GOAL_START: number;
	FLETCHING_GOAL_START: number;
	SLAYER_GOAL_START: number;
	FARMING_GOAL_START: number;
	CONSTRUCTION_GOAL_START: number;
	HUNTER_GOAL_START: number;
	/** Experience tracker goal end for various skills */
	ATTACK_GOAL_END: number;
	STRENGTH_GOAL_END: number;
	RANGED_GOAL_END: number;
	MAGIC_GOAL_END: number;
	DEFENCE_GOAL_END: number;
	HITPOINTS_GOAL_END: number;
	PRAYER_GOAL_END: number;
	AGILITY_GOAL_END: number;
	HERBLORE_GOAL_END: number;
	THIEVING_GOAL_END: number;
	CRAFTING_GOAL_END: number;
	RUNECRAFT_GOAL_END: number;
	MINING_GOAL_END: number;
	SMITHING_GOAL_END: number;
	FISHING_GOAL_END: number;
	COOKING_GOAL_END: number;
	FIREMAKING_GOAL_END: number;
	WOODCUTTING_GOAL_END: number;
	FLETCHING_GOAL_END: number;
	SLAYER_GOAL_END: number;
	FARMING_GOAL_END: number;
	CONSTRUCTION_GOAL_END: number;
	HUNTER_GOAL_END: number;
	/** Bird house states */
	BIRD_HOUSE_MEADOW_NORTH: number;
	BIRD_HOUSE_MEADOW_SOUTH: number;
	BIRD_HOUSE_VALLEY_NORTH: number;
	BIRD_HOUSE_VALLEY_SOUTH: number;
	/** Slayer unlock bitfields */
	SLAYER_UNLOCK_1: number;
	SLAYER_UNLOCK_2: number;
	/** Music volume */
	MUSIC_VOLUME: number;
	/** Sound effect volume */
	SOUND_EFFECT_VOLUME: number;
	/** Area effect volume */
	AREA_EFFECT_VOLUME: number;
	/** Mouse buttons setting */
	MOUSE_BUTTONS: number;
	/** NpcID for the HP HUD */
	HP_HUD_NPC_ID: number;
	/** Settings for opaque chat messages */
	SETTINGS_OPAQUE_CHAT_PUBLIC: number;
	SETTINGS_OPAQUE_CHAT_PRIVATE: number;
	SETTINGS_OPAQUE_CHAT_AUTO: number;
	SETTINGS_OPAQUE_CHAT_BROADCAST: number;
	SETTINGS_OPAQUE_CHAT_FRIEND: number;
	SETTINGS_OPAQUE_CHAT_CLAN: number;
	SETTINGS_OPAQUE_CHAT_GUEST_CLAN: number;
	SETTINGS_OPAQUE_CHAT_CLAN_BROADCAST: number;
	SETTINGS_OPAQUE_CHAT_IRON_GROUP_CHAT: number;
	SETTINGS_OPAQUE_CHAT_IRON_GROUP_BROADCAST: number;
	SETTINGS_OPAQUE_CHAT_TRADE_REQUEST: number;
	SETTINGS_OPAQUE_CHAT_CHALLENGE_REQUEST: number;
	/** Settings for transparent chat messages */
	SETTINGS_TRANSPARENT_CHAT_PUBLIC: number;
	SETTINGS_TRANSPARENT_CHAT_PRIVATE: number;
	SETTINGS_TRANSPARENT_CHAT_AUTO: number;
	SETTINGS_TRANSPARENT_CHAT_BROADCAST: number;
	SETTINGS_TRANSPARENT_CHAT_FRIEND: number;
	SETTINGS_TRANSPARENT_CHAT_CLAN: number;
	SETTINGS_TRANSPARENT_CHAT_GUEST_CLAN: number;
	SETTINGS_TRANSPARENT_CHAT_CLAN_BROADCAST: number;
	SETTINGS_TRANSPARENT_CHAT_IRON_GROUP_CHAT: number;
	SETTINGS_TRANSPARENT_CHAT_IRON_GROUP_BROADCAST: number;
	SETTINGS_TRANSPARENT_CHAT_TRADE_REQUEST: number;
	SETTINGS_TRANSPARENT_CHAT_CHALLENGE_REQUEST: number;
	/** Last home teleport timestamp */
	LAST_HOME_TELEPORT: number;
	/** Charge spell duration */
	CHARGE_GOD_SPELL: number;
	/** Last minigame teleport timestamp */
	LAST_MINIGAME_TELEPORT: number;
	/** Number of slayer creatures remaining on the assigned task */
	SLAYER_TASK_SIZE: number;
	/** Currently assigned slayer task creature ID */
	SLAYER_TASK_CREATURE: number;
	/** Assigned slayer task location */
	SLAYER_TASK_LOCATION: number;
}
