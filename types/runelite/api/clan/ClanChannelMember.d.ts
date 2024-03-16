/// <reference path="../ChatPlayer.d.ts" />
/**
 * Represents the 'ClanChannelMember' interface from Java in TypeScript.
 * This TypeScript interface extends 'ChatPlayer' and replicates the structure and methods of the Java interface.
 */
interface ClanChannelMember extends ChatPlayer {
	/**
	 * The member name
	 * @returns {string} The name of the member.
	 */
	getName(): string;

	/**
	 * The member's rank relative to the other members.
	 * To get the member title, refer to ClanSettings.titleForRank.
	 * @returns {ClanRank} The rank of the member.
	 */
	getRank(): ClanRank;

	/**
	 * The world the member is on
	 * @returns {number} The world number.
	 */
	getWorld(): number;
}
