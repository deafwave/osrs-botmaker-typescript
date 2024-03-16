Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import lombok.Data;
import net.runelite.api.MenuEntry;

/**
 * An event where a menu has been opened.
 */
@Data
public class MenuOpened
{
	/**
	 * The menu entries in the newly opened menu.
	 * <p>
	 * The entries in this menu are reversed, the last entry in the
	 * array will appear first (at the top) in the opened menu.
	 */
	private MenuEntry[] menuEntries;

	/**
	 * Gets the entry that will be displayed first in the menu.
	 *
	 * @return the first entry
	 */
	public MenuEntry getFirstEntry()
	{
		if (menuEntries.length > 0)
		{
			return menuEntries[menuEntries.length - 1];
		}

		return null;
	}
}
