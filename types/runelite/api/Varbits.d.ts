declare namespace net.runelite.api {
	/**
	 * Server controlled "content-developer" integers.
	 *
	 * @see VarPlayer
	 * <p>
	 * These differ from a {@link VarPlayer} in that VarBits can be
	 * less than 32 bits. One or more VarBits can be assigned to a
	 * backing VarPlayer, each with a static range of bits that it is
	 * allowed to access. This allows a more compact representation
	 * of small values, like booleans
	 */
	export class Varbits {
		/*
		 * If chatbox is transparent or not
		 */
		static readonly TRANSPARENT_CHATBOX = 4608;

		/*
		 * If the player has an active stamina potion effect or not
		 */
		static readonly RUN_SLOWED_DEPLETION_ACTIVE = 25;

		/**
		 * Stamina effect timer
		 * Number of game ticks remaining on stamina effect in intervals of 10; for a value X there are 10 * X game ticks remaining.
		 * The stamina effect expires once this reaches 0.
		 */
		static readonly STAMINA_EFFECT = 24;

		/**
		 * Antifire timer
		 * Number of game ticks remaining on antifire in intervals of 30; for a value X there are 30 * X game ticks remaining.
		 * The antifire expires once this reaches 0.
		 */
		static readonly ANTIFIRE = 3981;

		/**
		 * Super Antifire timer
		 * Number of game ticks remaining on super antifire in intervals of 20; for a value X there are 20 * X game ticks remaining.
		 * The super antifire expires once this reaches 0.
		 */
		static readonly SUPER_ANTIFIRE = 6101;

		/**
		 * Magic imbue timer
		 * Number of game ticks remaining on magic imbue effect in intervals of 10; for a value X there are 10 * X game ticks remaining.
		 * The magic imbue effect expires once this reaches 0.
		 */
		static readonly MAGIC_IMBUE = 5438;

		/**
		 * Divine effect timers
		 * Number of game ticks remaining on a divine effect.
		 * A potion that combines multiple effects will set the varbits for the individual effects as well as its own effect.
		 */
		static readonly DIVINE_SUPER_ATTACK = 8429;
		static readonly DIVINE_SUPER_STRENGTH = 8430;
		static readonly DIVINE_SUPER_DEFENCE = 8431;
		static readonly DIVINE_RANGING = 8432;
		static readonly DIVINE_MAGIC = 8433;
		static readonly DIVINE_SUPER_COMBAT = 13663;
		static readonly DIVINE_BASTION = 13664;
		static readonly DIVINE_BATTLEMAGE = 13665;

		/**
		 * Ring of endurance effect timer, stamina duration extended from using the ring of endurance
		 * Number of game ticks remaining on ring of endurance effect in intervals of 10; for a value X there are 10 * X game ticks remaining.
		 * Unequipping the ring of endurance will cause this to change to 0.
		 * When this reaches 0, {@link #STAMINA_EFFECT} will begin counting down.
		 */
		static readonly RING_OF_ENDURANCE_EFFECT = 10385;

		/**
		 * If scrollbar in resizable mode chat is on the left
		 */
		static readonly CHAT_SCROLLBAR_ON_LEFT = 6374;

		/**
		 * Runepouch
		 */
		static readonly RUNE_POUCH_RUNE1 = 29;
		static readonly RUNE_POUCH_RUNE2 = 1622;
		static readonly RUNE_POUCH_RUNE3 = 1623;
		static readonly RUNE_POUCH_RUNE4 = 14285;
		static readonly RUNE_POUCH_RUNE5 = 15373;
		static readonly RUNE_POUCH_RUNE6 = 15374;
		static readonly RUNE_POUCH_AMOUNT1 = 1624;
		static readonly RUNE_POUCH_AMOUNT2 = 1625;
		static readonly RUNE_POUCH_AMOUNT3 = 1626;
		static readonly RUNE_POUCH_AMOUNT4 = 14286;
		static readonly RUNE_POUCH_AMOUNT5 = 15375;
		static readonly RUNE_POUCH_AMOUNT6 = 15376;

		/**
		 * Prayers
		 */
		static readonly QUICK_PRAYER = 4103;
		static readonly PRAYER_THICK_SKIN = 4104;
		static readonly PRAYER_BURST_OF_STRENGTH = 4105;
		static readonly PRAYER_CLARITY_OF_THOUGHT = 4106;
		static readonly PRAYER_SHARP_EYE = 4122;
		static readonly PRAYER_MYSTIC_WILL = 4123;
		static readonly PRAYER_ROCK_SKIN = 4107;
		static readonly PRAYER_SUPERHUMAN_STRENGTH = 4108;
		static readonly PRAYER_IMPROVED_REFLEXES = 4109;
		static readonly PRAYER_RAPID_RESTORE = 4110;
		static readonly PRAYER_RAPID_HEAL = 4111;
		static readonly PRAYER_PROTECT_ITEM = 4112;
		static readonly PRAYER_HAWK_EYE = 4124;
		static readonly PRAYER_MYSTIC_LORE = 4125;
		static readonly PRAYER_STEEL_SKIN = 4113;
		static readonly PRAYER_ULTIMATE_STRENGTH = 4114;
		static readonly PRAYER_INCREDIBLE_REFLEXES = 4115;
		static readonly PRAYER_PROTECT_FROM_MAGIC = 4116;
		static readonly PRAYER_PROTECT_FROM_MISSILES = 4117;
		static readonly PRAYER_PROTECT_FROM_MELEE = 4118;
		static readonly PRAYER_EAGLE_EYE = 4126;
		static readonly PRAYER_MYSTIC_MIGHT = 4127;
		static readonly PRAYER_RETRIBUTION = 4119;
		static readonly PRAYER_REDEMPTION = 4120;
		static readonly PRAYER_SMITE = 4121;
		static readonly PRAYER_CHIVALRY = 4128;
		static readonly PRAYER_PIETY = 4129;
		static readonly PRAYER_PRESERVE = 5466;
		static readonly PRAYER_RIGOUR = 5464;
		static readonly PRAYER_AUGURY = 5465;

		/**
		 * Ruinous Powers
		 */
		static readonly PRAYER_RP_REJUVENATION = 14840;
		static readonly PRAYER_RP_ANCIENT_STRENGTH = 14829;
		static readonly PRAYER_RP_ANCIENT_SIGHT = 14830;
		static readonly PRAYER_RP_ANCIENT_WILL = 14831;
		static readonly PRAYER_RP_PROTECT_ITEM = 14966;
		static readonly PRAYER_RP_RUINOUS_GRACE = 14841;
		static readonly PRAYER_RP_DAMPEN_MAGIC = 14964;
		static readonly PRAYER_RP_DAMPEN_RANGED = 14963;
		static readonly PRAYER_RP_DAMPEN_MELEE = 14962;
		static readonly PRAYER_RP_TRINITAS = 14832;
		static readonly PRAYER_RP_BERSERKER = 14844;
		static readonly PRAYER_RP_PURGE = 14839;
		static readonly PRAYER_RP_METABOLISE = 14843;
		static readonly PRAYER_RP_REBUKE = 14850;
		static readonly PRAYER_RP_VINDICATION = 14851;
		static readonly PRAYER_RP_DECIMATE = 14833;
		static readonly PRAYER_RP_ANNIHILATE = 14834;
		static readonly PRAYER_RP_VAPORISE = 14835;
		static readonly PRAYER_RP_FUMUS_VOW = 14845;
		static readonly PRAYER_RP_UMBRA_VOW = 14847;
		static readonly PRAYER_RP_CRUORS_VOW = 14846;
		static readonly PRAYER_RP_GLACIES_VOW = 14848;
		static readonly PRAYER_RP_WRATH = 14842;
		static readonly PRAYER_RP_INTENSIFY = 14965;

		/**
		 * Diary Entries
		 */
		static readonly DIARY_ARDOUGNE_EASY = 4458;
		static readonly DIARY_ARDOUGNE_MEDIUM = 4459;
		static readonly DIARY_ARDOUGNE_HARD = 4460;
		static readonly DIARY_ARDOUGNE_ELITE = 4461;

		static readonly DIARY_DESERT_EASY = 4483;
		static readonly DIARY_DESERT_MEDIUM = 4484;
		static readonly DIARY_DESERT_HARD = 4485;
		static readonly DIARY_DESERT_ELITE = 4486;

		static readonly DIARY_FALADOR_EASY = 4462;
		static readonly DIARY_FALADOR_MEDIUM = 4463;
		static readonly DIARY_FALADOR_HARD = 4464;
		static readonly DIARY_FALADOR_ELITE = 4465;

		static readonly DIARY_FREMENNIK_EASY = 4491;
		static readonly DIARY_FREMENNIK_MEDIUM = 4492;
		static readonly DIARY_FREMENNIK_HARD = 4493;
		static readonly DIARY_FREMENNIK_ELITE = 4494;

		static readonly DIARY_KANDARIN_EASY = 4475;
		static readonly DIARY_KANDARIN_MEDIUM = 4476;
		static readonly DIARY_KANDARIN_HARD = 4477;
		static readonly DIARY_KANDARIN_ELITE = 4478;

		static readonly DIARY_KARAMJA_EASY = 3578;
		static readonly DIARY_KARAMJA_MEDIUM = 3599;
		static readonly DIARY_KARAMJA_HARD = 3611;
		static readonly DIARY_KARAMJA_ELITE = 4566;

		static readonly DIARY_KOUREND_EASY = 7925;
		static readonly DIARY_KOUREND_MEDIUM = 7926;
		static readonly DIARY_KOUREND_HARD = 7927;
		static readonly DIARY_KOUREND_ELITE = 7928;

		static readonly DIARY_LUMBRIDGE_EASY = 4495;
		static readonly DIARY_LUMBRIDGE_MEDIUM = 4496;
		static readonly DIARY_LUMBRIDGE_HARD = 4497;
		static readonly DIARY_LUMBRIDGE_ELITE = 4498;

		static readonly DIARY_MORYTANIA_EASY = 4487;
		static readonly DIARY_MORYTANIA_MEDIUM = 4488;
		static readonly DIARY_MORYTANIA_HARD = 4489;
		static readonly DIARY_MORYTANIA_ELITE = 4490;

		static readonly DIARY_VARROCK_EASY = 4479;
		static readonly DIARY_VARROCK_MEDIUM = 4480;
		static readonly DIARY_VARROCK_HARD = 4481;
		static readonly DIARY_VARROCK_ELITE = 4482;

		static readonly DIARY_WESTERN_EASY = 4471;
		static readonly DIARY_WESTERN_MEDIUM = 4472;
		static readonly DIARY_WESTERN_HARD = 4473;
		static readonly DIARY_WESTERN_ELITE = 4474;

		static readonly DIARY_WILDERNESS_EASY = 4466;
		static readonly DIARY_WILDERNESS_MEDIUM = 4467;
		static readonly DIARY_WILDERNESS_HARD = 4468;
		static readonly DIARY_WILDERNESS_ELITE = 4469;

		/**
		 * Kourend house favours
		 */
		static readonly KOUREND_FAVOR_ARCEUUS = 4896;
		static readonly KOUREND_FAVOR_HOSIDIUS = 4895;
		static readonly KOUREND_FAVOR_LOVAKENGJ = 4898;
		static readonly KOUREND_FAVOR_PISCARILIUS = 4899;
		static readonly KOUREND_FAVOR_SHAYZIEN = 4894;

		/**
		 * Equipped weapon type
		 */
		static readonly EQUIPPED_WEAPON_TYPE = 357;

		/**
		 * Defensive casting mode
		 */
		static readonly DEFENSIVE_CASTING_MODE = 2668;

		/**
		 * Options
		 */
		static readonly SIDE_PANELS = 4607;

		/**
		 * Herbiboar Trails
		 */
		static readonly HB_TRAIL_31303 = 5737;
		static readonly HB_TRAIL_31306 = 5738;
		static readonly HB_TRAIL_31309 = 5739;
		static readonly HB_TRAIL_31312 = 5740;
		static readonly HB_TRAIL_31315 = 5741;
		static readonly HB_TRAIL_31318 = 5742;
		static readonly HB_TRAIL_31321 = 5743;
		static readonly HB_TRAIL_31324 = 5744;
		static readonly HB_TRAIL_31327 = 5745;
		static readonly HB_TRAIL_31330 = 5746;

		static readonly HB_TRAIL_31333 = 5768;
		static readonly HB_TRAIL_31336 = 5769;
		static readonly HB_TRAIL_31339 = 5770;
		static readonly HB_TRAIL_31342 = 5771;
		static readonly HB_TRAIL_31345 = 5772;
		static readonly HB_TRAIL_31348 = 5773;
		static readonly HB_TRAIL_31351 = 5774;
		static readonly HB_TRAIL_31354 = 5775;
		static readonly HB_TRAIL_31357 = 5776;
		static readonly HB_TRAIL_31360 = 5777;

		static readonly HB_TRAIL_31363 = 5747;
		static readonly HB_TRAIL_31366 = 5748;
		static readonly HB_TRAIL_31369 = 5749;
		static readonly HB_TRAIL_31372 = 5750;

		static readonly HB_FINISH = 5766;

		/**
		 * Started hunting Herbiboar.
		 * <br>
		 * NOTE: This value remains at 0 even after starting a Herbiboar trail up until searching the first object along the
		 * hunting path.
		 */
		static readonly HB_STARTED = 5767;

		/**
		 * Barbarian Assault
		 */
		static readonly IN_GAME_BA = 3923;
		static readonly BA_GC = 4768;

		/**
		 * 0 = Outside wilderness
		 * 1 = In wilderness
		 */
		static readonly IN_WILDERNESS = 5963;

		/**
		 * Fishing Trawler
		 * FISHING_TRAWLER_ACTIVITY Expected values: 0-255
		 */
		static readonly FISHING_TRAWLER_ACTIVITY = 3377;

		/**
		 * Blast Furnace Bar Dispenser
		 * <p>
		 * These are the expected values:
		 * 0 = No bars being processed
		 * 1 = Ores are being processed on the conveyor belt, bar dispenser cannot be checked
		 * 2 = Bars are cooling down
		 * 3 = Bars can be collected
		 */
		static readonly BAR_DISPENSER = 936;

		/**
		 * Motherlode mine sack
		 */
		static readonly SACK_NUMBER = 5558;
		static readonly SACK_UPGRADED = 5556;

		/**
		 * Experience tracker
		 * <p>
		 * EXPERIENCE_TRACKER_POSITION expected values:
		 * 0 = Right
		 * 1 = Middle
		 * 2 = Left
		 */
		static readonly EXPERIENCE_TRACKER_POSITION = 4692;
		static readonly EXPERIENCE_TRACKER_COUNTER = 4697;
		static readonly EXPERIENCE_TRACKER_PROGRESS_BAR = 4698;

		/**
		 * Experience drop color
		 */
		static readonly EXPERIENCE_DROP_COLOR = 4695;

		/**
		 * Tithe Farm
		 */
		static readonly TITHE_FARM_SACK_AMOUNT = 4900;
		static readonly TITHE_FARM_SACK_ICON = 5370;
		static readonly TITHE_FARM_POINTS = 4893;

		/**
		 * Blast Mine
		 */
		static readonly BLAST_MINE_COAL = 4924;
		static readonly BLAST_MINE_GOLD = 4925;
		static readonly BLAST_MINE_MITHRIL = 4926;
		static readonly BLAST_MINE_ADAMANTITE = 4921;
		static readonly BLAST_MINE_RUNITE = 4922;

		/**
		 * Raids
		 */
		static readonly IN_RAID = 5432;
		static readonly TOTAL_POINTS = 5431;
		static readonly PERSONAL_POINTS = 5422;
		static readonly RAID_PARTY_SIZE = 5424;

		// 0 = raid not started, >0 = raid started
		static readonly RAID_STATE = 5425;

		/**
		 * Making Friends with My Arm fire pits
		 * <p>
		 * Expected values:
		 * 0 = Not built
		 * 1 = Built
		 */
		static readonly FIRE_PIT_GIANT_MOLE = 6532;
		static readonly FIRE_PIT_LUMBRIDGE_SWAMP = 6533;
		static readonly FIRE_PIT_MOS_LE_HARMLESS = 6534;

		/**
		 * Theatre of Blood 1=In Party, 2=Inside/Spectator, 3=Dead Spectating
		 */
		static readonly THEATRE_OF_BLOOD = 6440;
		/**
		 * Theatre of Blood orb healths
		 * 0=hide 1-27=% of health - 27 is 100% health and 1 is 0% health, 30=dead
		 */
		static readonly THEATRE_OF_BLOOD_ORB1 = 6442;
		static readonly THEATRE_OF_BLOOD_ORB2 = 6443;
		static readonly THEATRE_OF_BLOOD_ORB3 = 6444;
		static readonly THEATRE_OF_BLOOD_ORB4 = 6445;
		static readonly THEATRE_OF_BLOOD_ORB5 = 6446;

		/**
		 * Nightmare Zone
		 */
		static readonly NMZ_ABSORPTION = 3956;
		static readonly NMZ_POINTS = 3949;

		/**
		 * Blast Furnace
		 */
		static readonly BLAST_FURNACE_COPPER_ORE = 959;
		static readonly BLAST_FURNACE_TIN_ORE = 950;
		static readonly BLAST_FURNACE_IRON_ORE = 951;
		static readonly BLAST_FURNACE_COAL = 949;
		static readonly BLAST_FURNACE_MITHRIL_ORE = 952;
		static readonly BLAST_FURNACE_ADAMANTITE_ORE = 953;
		static readonly BLAST_FURNACE_RUNITE_ORE = 954;
		static readonly BLAST_FURNACE_SILVER_ORE = 956;
		static readonly BLAST_FURNACE_GOLD_ORE = 955;

		static readonly BLAST_FURNACE_BRONZE_BAR = 941;
		static readonly BLAST_FURNACE_IRON_BAR = 942;
		static readonly BLAST_FURNACE_STEEL_BAR = 943;
		static readonly BLAST_FURNACE_MITHRIL_BAR = 944;
		static readonly BLAST_FURNACE_ADAMANTITE_BAR = 945;
		static readonly BLAST_FURNACE_RUNITE_BAR = 946;
		static readonly BLAST_FURNACE_SILVER_BAR = 948;
		static readonly BLAST_FURNACE_GOLD_BAR = 947;

		static readonly BLAST_FURNACE_COFFER = 5357;

		/**
		 * Pyramid plunder
		 */
		static readonly PYRAMID_PLUNDER_ROOM_LOCATION = 2365;
		static readonly PYRAMID_PLUNDER_TIMER = 2375;
		static readonly PYRAMID_PLUNDER_THIEVING_LEVEL = 2376;
		static readonly PYRAMID_PLUNDER_ROOM = 2377;

		/**
		 * Barrows
		 */
		static readonly BARROWS_KILLED_AHRIM = 457;
		static readonly BARROWS_KILLED_DHAROK = 458;
		static readonly BARROWS_KILLED_GUTHAN = 459;
		static readonly BARROWS_KILLED_KARIL = 460;
		static readonly BARROWS_KILLED_TORAG = 461;
		static readonly BARROWS_KILLED_VERAC = 462;
		static readonly BARROWS_REWARD_POTENTIAL = 463;
		static readonly BARROWS_NPCS_SLAIN = 464;

		/**
		 * Spicy stew ingredients
		 */
		static readonly SPICY_STEW_RED_SPICES = 1879;
		static readonly SPICY_STEW_YELLOW_SPICES = 1880;
		static readonly SPICY_STEW_BROWN_SPICES = 1881;
		static readonly SPICY_STEW_ORANGE_SPICES = 1882;

		/**
		 * Multicombat area
		 */
		static readonly MULTICOMBAT_AREA = 4605;

		/**
		 * Kingdom of Miscellania Management
		 * Kingdom Approval is represented as a 7-bit unsigned integer; 127 corresponds to 100% approval
		 */
		static readonly KINGDOM_APPROVAL = 72;
		static readonly KINGDOM_COFFER = 74;

		/**
		 * The Hand in the Sand quest status
		 */
		static readonly QUEST_THE_HAND_IN_THE_SAND = 1527;

		/**
		 * Daily Tasks =Collection availability)
		 */
		static readonly DAILY_HERB_BOXES_COLLECTED = 3961;
		static readonly DAILY_STAVES_COLLECTED = 4539;
		static readonly DAILY_ESSENCE_COLLECTED = 4547;
		static readonly DAILY_RUNES_COLLECTED = 4540;
		static readonly DAILY_SAND_COLLECTED = 4549;
		static readonly DAILY_FLAX_STATE = 4559;
		static readonly DAILY_ARROWS_STATE = 4563;
		/**
		 * This varbit tracks how much bonemeal has been redeemed from Robin
		 * The player gets 13 for each diary completed above and including Medium, for a maxiumum of 39
		 */
		static readonly DAILY_BONEMEAL_STATE = 4543;

		static readonly DAILY_DYNAMITE_COLLECTED = 7939;

		/**
		 * Fairy Ring
		 */
		static readonly FAIR_RING_LAST_DESTINATION = 5374;
		static readonly FAIRY_RING_DIAL_ADCB = 3985; //Left dial
		static readonly FAIRY_RIGH_DIAL_ILJK = 3986; //Middle dial
		static readonly FAIRY_RING_DIAL_PSRQ = 3987; //Right dial

		/**
		 * Transmog controllers for farming
		 */
		static readonly FARMING_4771 = 4771;
		static readonly FARMING_4772 = 4772;
		static readonly FARMING_4773 = 4773;
		static readonly FARMING_4774 = 4774;
		static readonly FARMING_4775 = 4775;
		static readonly FARMING_7904 = 7904;
		static readonly FARMING_7905 = 7905;
		static readonly FARMING_7906 = 7906;
		static readonly FARMING_7907 = 7907;
		static readonly FARMING_7908 = 7908;
		static readonly FARMING_7909 = 7909;
		static readonly FARMING_7910 = 7910;
		static readonly FARMING_7911 = 7911;
		static readonly FARMING_7912 = 7912;

		/**
		 * Transmog controllers for grapes
		 */
		static readonly GRAPES_4953 = 4953;
		static readonly GRAPES_4954 = 4954;
		static readonly GRAPES_4955 = 4955;
		static readonly GRAPES_4956 = 4956;
		static readonly GRAPES_4957 = 4957;
		static readonly GRAPES_4958 = 4958;
		static readonly GRAPES_4959 = 4959;
		static readonly GRAPES_4960 = 4960;
		static readonly GRAPES_4961 = 4961;
		static readonly GRAPES_4962 = 4962;
		static readonly GRAPES_4963 = 4963;
		static readonly GRAPES_4964 = 4964;

		/**
		 * Automatically weed farming patches
		 */
		static readonly AUTOWEED = 5557;

		/**
		 * The player's account type.
		 * <p>
		 * 0 = normal
		 * 1 = ironman
		 * 2 = ultimate ironman
		 * 3 = hardcore ironman
		 * 4 = group ironman
		 * 5 = hardcore group ironman
		 * 6 = unranked group ironman
		 */
		static readonly ACCOUNT_TYPE = 1777;

		/**
		 * The varbit that stores the oxygen percentage for player
		 */
		static readonly OXYGEN_LEVEL = 5811;

		/**
		 * Drift net status
		 * <p>
		 * Expected values
		 * 0 = Unset
		 * 1 = Set up
		 * 2 = Caught some fish
		 * 3 = Full
		 */
		static readonly NORTH_NET_STATUS = 5812;
		static readonly SOUTH_NET_STATUS = 5814;

		/**
		 * Drift net catch count
		 */
		static readonly NORTH_NET_CATCH_COUNT = 5813;
		static readonly SOUTH_NET_CATCH_COUNT = 5815;

		/**
		 * Drift net collect interface
		 * <p>
		 * Expected values:
		 * 0 = Not open
		 * 1 = North interface open
		 * 2 = South interface open
		 */
		static readonly DRIFT_NET_COLLECT = 5933;

		/**
		 * Corp beast damage
		 */
		static readonly CORP_DAMAGE = 999;

		/**
		 * Toggleable slayer unlocks
		 */
		static readonly SUPERIOR_ENABLED = 5362;
		static readonly FOSSIL_ISLAND_WYVERN_DISABLE = 6251;

		static readonly BANK_REARRANGE_MODE = 3959;
		static readonly CURRENT_BANK_TAB = 4150;

		static readonly WORLDHOPPER_FAVROITE_1 = 4597;
		static readonly WORLDHOPPER_FAVROITE_2 = 4598;

		/**
		 * Spell activeness
		 */
		static readonly VENGEANCE_ACTIVE = 2450;
		static readonly DEATH_CHARGE = 12411;
		static readonly RESURRECT_THRALL = 12413;
		static readonly SHADOW_VEIL = 12414;

		/**
		 * Spell cooldowns
		 */
		static readonly HEAL_GROUP_COOLDOWN = 925;
		static readonly VENGEANCE_COOLDOWN = 2451;
		static readonly DEATH_CHARGE_COOLDOWN = 12138;
		static readonly CORRUPTION_COOLDOWN = 12288;
		static readonly RESURRECT_THRALL_COOLDOWN = 12290;
		static readonly SHADOW_VEIL_COOLDOWN = 12291;
		static readonly WARD_OF_ARCEUUS_COOLDOWN = 12293;

		/**
		 * Imbued Heart cooldown
		 * Number of game tick remaining on cooldown in intervals of 10; for a value X there are 10 * X game ticks remaining.
		 * The heart regains its power once this reaches 0.
		 */
		static readonly IMBUED_HEART_COOLDOWN = 5361;

		/**
		 * Dragonfire shield cooldown
		 * <p>
		 * Number of game ticks remaining on cooldown in intervals of 8; for a value X there are 8 * X game ticks remaining.
		 */
		static readonly DRAGONFIRE_SHIELD_COOLDOWN = 6539;

		/**
		 * Amount of items in each bank tab
		 */
		static readonly BANK_TAB_ONE_COUNT = 4171;
		static readonly BANK_TAB_TWO_COUNT = 4172;
		static readonly BANK_TAB_THREE_COUNT = 4173;
		static readonly BANK_TAB_FOUR_COUNT = 4174;
		static readonly BANK_TAB_FIVE_COUNT = 4175;
		static readonly BANK_TAB_SIX_COUNT = 4176;
		static readonly BANK_TAB_SEVEN_COUNT = 4177;
		static readonly BANK_TAB_EIGHT_COUNT = 4178;
		static readonly BANK_TAB_NINE_COUNT = 4179;

		/**
		 * Type of GE offer currently being created
		 * 0 = buy
		 * 1 = sell
		 */
		static readonly GE_OFFER_CREATION_TYPE = 4397;

		/**
		 * The active tab within the quest interface
		 */
		static readonly QUEST_TAB = 8168;

		/**
		 * Explorer ring
		 */
		static readonly EXPLORER_RING_ALCHTYPE = 5398;
		static readonly EXPLORER_RING_TELEPORTS = 4552;
		static readonly EXPLORER_RING_ALCHS = 4554;
		static readonly EXPLORER_RING_RUNENERGY = 4553;

		static readonly WINTERTODT_TIMER = 7980;

		/**
		 * League relics
		 */
		static readonly LEAGUE_RELIC_1 = 10049;
		static readonly LEAGUE_RELIC_2 = 10050;
		static readonly LEAGUE_RELIC_3 = 10051;
		static readonly LEAGUE_RELIC_4 = 10052;
		static readonly LEAGUE_RELIC_5 = 10053;
		static readonly LEAGUE_RELIC_6 = 11696;
		static readonly LEAGUE_RELIC_7 = 17301;
		static readonly LEAGUE_RELIC_8 = 17302;

		/**
		 * Muted volume restore values
		 */
		static readonly MUTED_MUSIC_VOLUME = 9666;
		static readonly MUTED_SOUND_EFFECT_VOLUME = 9674;
		static readonly MUTED_AREA_EFFECT_VOLUME = 9675;

		/**
		 * Parasite infection status during nightmare of ashihama bossfight
		 * <p>
		 * 0 = not infected
		 * 1 = infected
		 */
		static readonly PARASITE = 10151;

		/**
		 * Whether the vanilla wiki entity lookup is displayed under the minimap
		 * <p>
		 * 0 = Enabled
		 * 1 = Disabled
		 */
		static readonly WIKI_ENTITY_LOOKUP = 10113;

		/**
		 * Whether the player is in a PvP area
		 * <p>
		 * 0 = Player is not in PvP area
		 * 1 = Player is in PvP area
		 * <p>
		 * Note: The name of this varbit comes from historical behavior where
		 * the special attack orb would be disabled in PvP, but this was changed
		 * on 2023-03-09 due to Poll 78. Yet, the varbit still updates as before.
		 */
		static readonly PVP_SPEC_ORB = 8121;

		/**
		 * Collection Log notification settings whenever a new item is added
		 * <p>
		 * 0 = no notification
		 * 1 = chat notification only
		 * 2 = popup notification only
		 * 3 = chat and popup
		 */
		static readonly COLLECTION_LOG_NOTIFICATION = 11959;

		/**
		 * Combat Achievements popup settings whenever a new task is completed
		 * <p>
		 * 0 = popup notification enabled
		 * 1 = popup notification disabled
		 */
		static readonly COMBAT_ACHIEVEMENTS_POPUP = 12455;

		/**
		 * Combat Achievement tier completion variables
		 *
		 * 2 = completed
		 */
		static readonly COMBAT_ACHIEVEMENT_TIER_EASY = 12863;
		static readonly COMBAT_ACHIEVEMENT_TIER_MEDIUM = 12864;
		static readonly COMBAT_ACHIEVEMENT_TIER_HARD = 12865;
		static readonly COMBAT_ACHIEVEMENT_TIER_ELITE = 12866;
		static readonly COMBAT_ACHIEVEMENT_TIER_MASTER = 12867;
		static readonly COMBAT_ACHIEVEMENT_TIER_GRANDMASTER = 12868;

		/**
		 * Show boss health overlay setting
		 * 0 = on
		 * 1 = off
		 */
		static readonly BOSS_HEALTH_OVERLAY = 12389;

		/**
		 * Boss health bar info
		 */
		static readonly BOSS_HEALTH_CURRENT = 6099;
		static readonly BOSS_HEALTH_MAXIMUM = 6100;

		/**
		 * Whether the PVP kill-death stats widget should be drawn while in the wilderness or in PVP worlds.
		 * <p>
		 * 0 = Disabled
		 * 1 = Enabled
		 */
		static readonly SHOW_PVP_KDR_STATS = 4143;

		/**
		 * State of Teleblock spell effects on the player
		 * <p>
		 * 0 = Teleblock inactive, no immunity
		 * 1 &lt;= X &lt;= 100 = Teleblock inactive, remaining ticks of immunity from reapplication of spell effect
		 * 101 &lt;= Teleblock active, remaining ticks of blocking effect
		 */
		static readonly TELEBLOCK = 4163;

		/**
		 * Cooldown timer remaining before eligible to restore at a god wars dungeon altar.
		 * Number of game ticks remaining is in intervals of 100; for a value X there are 100 * X game ticks remaining.
		 * A player can pray at a god wars altar once this reaches 0.
		 */
		static readonly GOD_WARS_ALTAR_COOLDOWN = 4099;

		/**
		 * Farmer's Affinity effect timer
		 * Number of game ticks remaining on Farmer's Affinity effect in intervals of 20; for a value X there are 20 * X game ticks remaining.
		 * The Farmer's Affinity expires once this reaches 0.
		 */
		static readonly FARMERS_AFFINITY = 11765;

		/**
		 * If the player has Menaphite remedy effect active.
		 * This will go down by 1 every 25 ticks (15 seconds) and the player's combat stats will be restored by 6 + 16%.
		 * Set to 20 upon consuming potion.
		 */
		static readonly MENAPHITE_REMEDY = 14448;

		/**
		 * How many salt stat boost refreshes the player has remaining.
		 * This will go down by 1 every 25 ticks (15 seconds) and the player's stats will be restored.
		 * Set to 32 upon crushing salts.
		 */
		static readonly BUFF_STAT_BOOST = 14344;

		/**
		 * If the player has liquid adrenaline buff active
		 * <p>
		 * 0 = inactive
		 * 1 = active
		 */
		static readonly LIQUID_ADERNALINE_ACTIVE = 14361;

		static readonly TOA_RAID_LEVEL = 14380;
		static readonly TOA_RAID_DAMAGE = 14325;

		/**
		 * Tombs of Amascut orb healths
		 * 0=hide 1-27=% of health - 27 is 100% health and 1 is 0% health, 30=dead
		 */
		static readonly TOA_MEMBER_0_HEALTH = 14346;
		static readonly TOA_MEMBER_1_HEALTH = 14347;
		static readonly TOA_MEMBER_2_HEALTH = 14348;
		static readonly TOA_MEMBER_3_HEALTH = 14349;
		static readonly TOA_MEMBER_4_HEALTH = 14350;
		static readonly TOA_MEMBER_5_HEALTH = 14351;
		static readonly TOA_MEMBER_6_HEALTH = 14352;
		static readonly TOA_MEMBER_7_HEALTH = 14353;

		/**
		 * How many NMZ overload refreshes the player has remaining.
		 * <p>
		 * This will go down by 1 every 25 ticks (15 seconds) and the player's stats will be restored.
		 * Set to 20 upon drinking an overload.
		 */
		static readonly NMZ_OVERLOAD_REFRESHES_REMAINING = 3955;

		/**
		 * How many Chambers of Xeric overload refreshes the player has remaining.
		 * <p>
		 * This will go down by 1 every 25 ticks (15 seconds) and the player's stats will be restored.
		 * Set to 20 upon drinking an overload.
		 */
		static readonly COX_OVERLOAD_REFRESHES_REMAINING = 5418;

		static readonly SLAYER_POINTS = 4068;
		static readonly SLAYER_TASK_STREAK = 4069;

		/**
		 * The assigned boss for boss slayer.
		 */
		static readonly SLAYER_TASK_BOSS = 4723;

		/**
		 * Whether the level up interface is disabled
		 */
		static readonly DISABLE_LEVEL_UP_INTERFACE = 9452;

		static readonly PRAYERBOOK = 14826;

		/**
		 * During and after Curse of the Empty Lord, Viggora can be located in one of three locations,
		 * which is uniquely and permanently set for each player.
		 * This varbit determines which location he will appear in, which is useful for a master clue step.
		 */
		static readonly VIGGORA_LOCATION = 815;

		/**
		 * If the player has a spellbook swap active
		 * <p>
		 * 0 = inactive
		 * 1 = active
		 */
		static readonly SPELLBOOK_SWAP = 3617;
	}
}
