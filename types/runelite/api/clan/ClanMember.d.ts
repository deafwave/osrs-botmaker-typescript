/// <reference path="ClanRank.d.ts" />
declare namespace net.runelite.api.clan {
	/**
	 * A member of a clan.
	 */
	export interface ClanMember {
		/**
		 * The clan member's name
		 */
		getName(): string;

		/**
		 * The clan member's rank
		 */
		getRank(): ClanRank;
	}
}
