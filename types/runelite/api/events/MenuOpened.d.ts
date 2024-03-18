/// <reference path="../MenuEntry.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * An event where a menu has been opened.
	 */
	export class MenuOpened {
		/**
		 * The menu entries in the newly opened menu.
		 * The entries in this menu are reversed, the last entry in the
		 * array will appear first (at the top) in the opened menu.
		 */
		getMenuEntries(): MenuEntry[];
		setMenuEntries(menuEntries: MenuEntry[]): void;

		/**
		 * Gets the entry that will be displayed first in the menu.
		 *
		 * @returns the first entry or null if no entries
		 */
		getFirstEntry(): MenuEntry | null;
	}
}
