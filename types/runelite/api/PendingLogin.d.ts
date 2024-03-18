declare namespace net.runelite.api {
	/**
	 * A pending friend login/out. This is used to suppress world hop notifications
	 * by buffering the pending logins to try to match a pending logout with a pending
	 * login and cancel both.
	 */
	export interface PendingLogin {
		/**
		 * The name of the player
		 * @return
		 */
		getName(): string;

		/**
		 * The world the player logged into, or 0 if a logout.
		 * @return
		 */
		getWorld(): number;
	}
}
