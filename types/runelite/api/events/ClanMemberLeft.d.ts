/// <reference path="../clan/ClanChannel.d.ts" />
/// <reference path="../clan/ClanChannelMember.d.ts" />
declare namespace net.runelite.api.events {
	export class ClanMemberLeft {
		private clanChannel: net.runelite.api.clan.ClanChannel;
		private clanMember: net.runelite.api.clan.ClanChannelMember;
	}
}
