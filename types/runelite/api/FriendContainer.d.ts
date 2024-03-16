/// <reference path="Friend.d.ts" />
/// <reference path="NameableContainer.d.ts" />
/// <reference path="Deque.d.ts" />
/// <reference path="PendingLogin.d.ts" />
/**
 * A nameable container of friends
 */
interface FriendContainer extends NameableContainer<Friend> {
	/**
	 * Get the recent logins/logouts of friends from the last few seconds
	 * @return
	 */
	getPendingLogins(): Deque<PendingLogin>;
}
