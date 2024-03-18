/// <reference path="NameableContainer.d.ts" />
/// <reference path="Deque.d.ts" />
/// <reference path="PendingLogin.d.ts" />
/// <reference path="Friend.d.ts" />
declare namespace net.runelite.api {
	/**
	 * A nameable container of friends
	 */
	export interface FriendContainer extends NameableContainer<Friend> {
		/**
		 * Get the recent logins/logouts of friends from the last few seconds
		 * @return
		 */
		getPendingLogins(): Deque<PendingLogin>;
	}
}
