/// <reference path="../clan/ClanChannel.d.ts" />
/// <reference path="../clan/ClanChannelMember.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * An event when a clan member leaves a channel.
	 */
	export class ClanMemberLeft {
		getClanChannel(): net.runelite.api.clan.ClanChannel;

		getClanMember(): net.runelite.api.clan.ClanChannelMember;
	}
}
