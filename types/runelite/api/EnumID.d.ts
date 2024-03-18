declare namespace net.runelite.api {
	/**
	 * Utility class used for mapping enum IDs.
	 * <p>
	 * Note: This class is not complete and may be missing mapped IDs.
	 */
	export class EnumID {
		/**
		 * key: int
		 * val: string creature name
		 */
		static readonly SLAYER_TASK_CREATURE = 693;

		/**
		 * key: int 1-n+1
		 * val: namedobj
		 */
		static readonly RUNEPOUCH_RUNE = 982;
		static readonly XPDROP_COLORS = 1169;

		static readonly FRIENDS_CHAT_RANK_ICONS = 1543;
		/**
		 * key: int 0-n
		 * val: namedobj
		 */
		static readonly PETS = 2158;
		static readonly POH_COSTUME_MEMBERS = 3077;
		static readonly POH_COSTUME_CLUE_BEGINNER = 3293;
		static readonly POH_COSTUME_CLUE_EASY = 3294;
		static readonly POH_COSTUME_CLUE_MEDIUM = 3295;
		static readonly POH_COSTUME_CLUE_HARD = 3296;
		static readonly POH_COSTUME_CLUE_ELITE = 3297;
		static readonly POH_COSTUME_CLUE_MASTER = 3298;
		static readonly POH_COSTUME_ALTERNATE = 3303;
		static readonly POH_COSTUME_ALTERNATES = 3304;
		static readonly CLAN_RANK_NAME = 3797;
		static readonly CLAN_RANK_GRAPHIC = 3798;

		/**
		 * key: int
		 * val: string location name
		 */
		static readonly SLAYER_TASK_LOCATION = 4064;

		static readonly PRAYERS_NORMAL = 4956;
		static readonly PRAYERS_RUINOUS = 4959;

		static readonly WORLD_LOCATIONS = 4992;

		/**
		 * key: int
		 * val: struct slayer task
		 */
		static readonly SLAYER_TASK = 5008;
	}
}
