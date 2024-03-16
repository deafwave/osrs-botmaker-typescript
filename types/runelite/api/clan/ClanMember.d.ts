/**
 * Represents the 'ClanMember' interface from Java in TypeScript.
 * This TypeScript interface replicates the structure and methods of the Java interface.
 */
interface ClanMember {
	/**
	 * The clan member's name
	 * @returns {string} The name of the clan member.
	 */
	getName(): string;

	/**
	 * The clan member's rank
	 * @returns {ClanRank} The rank of the clan member.
	 */
	getRank(): ClanRank;
}
