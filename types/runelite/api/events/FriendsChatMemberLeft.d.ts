/// <reference path="../FriendsChatMember.d.ts" />
declare namespace net.runelite.api.events {
	export class FriendsChatMemberLeft {
		/**
		 * The member that left
		 */
		getMember(): FriendsChatMember;
	}
}
