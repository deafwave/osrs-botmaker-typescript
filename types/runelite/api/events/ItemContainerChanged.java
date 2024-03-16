Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.ItemContainer;

/**
 * An event called whenever the stack size of an {@link net.runelite.api.Item}
 * in an {@link ItemContainer} is modified.
 * <p>
 * Examples of when this event may trigger include:
 * <ul>
 *     <li>Withdrawing an item from bank (triggers for both bank and player inv)
 *     <li>Picking up an item</li>
 *     <li>Dropping an item</li>
 * </ul>
 */
@Value
public class ItemContainerChanged
{
	/**
	 * The modified container's ID.
	 */
	private final int containerId;

	/**
	 * The modified item container.
	 */
	private final ItemContainer itemContainer;
}
