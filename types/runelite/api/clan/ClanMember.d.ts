/// <reference path="ClanRank.d.ts" />
/**
 * A member of a clan.
 */
interface ClanMember
{
	/**
	 * The clan member's name
	 */
	getName(): string;

	/**
	 * The clan member's rank
	 */
	getRank(): ClanRank;
}