Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.TileItem;
import net.runelite.api.Tile;

/**
 * Called when an item pile spawns on the ground. When the client loads a new scene,
 * all item piles are implicitly reset and a new spawn event will be sent.
 */
@Value
public class ItemSpawned
{
	private final Tile tile;
	private final TileItem item;
}
