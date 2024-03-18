/// <reference path="../clan/ClanChannel.d.ts" />
/// <reference path="../clan/ClanChannelMember.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * An event when a clan member joins a clan channel.
	 */
	export class ClanMemberJoined {
		getClanChannel(): net.runelite.api.clan.ClanChannel;

		getClanMember(): net.runelite.api.clan.ClanChannelMember;
	}
}
