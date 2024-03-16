/// <reference path="ClanChannel.d.ts" />
/// <reference path="ClanChannelMember.d.ts" />

/**
 * Represents an event when a clan member leaves a clan channel in TypeScript.
 */
declare class ClanMemberLeft {
	private readonly clanChannel: ClanChannel;
	private readonly clanMember: ClanChannelMember;

	constructor(clanChannel: ClanChannel, clanMember: ClanChannelMember);
}
