/// <reference path="../Nameable.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * An event trigger when a player is removed from the friend or ignore list.
	 */
	export class RemovedFriend {
		/**
		 * The removed friend or ignore entry
		 */
		getNameable(): Nameable;
	}
}
