/// <reference path="../FriendsChatMember.d.ts" />
declare namespace net.runelite.api.events {
	export class FriendsChatMemberJoined {
		/**
		 * The member that joined
		 */
		getMember(): FriendsChatMember;
	}
}
