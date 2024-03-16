Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.TileItem;
import net.runelite.api.Tile;

/**
 * Called when the quantity of an item pile changes.
 */
@Value
public class ItemQuantityChanged
{
	private final TileItem item;
	private final Tile tile;
	private final int oldQuantity;
	private final int newQuantity;
}
