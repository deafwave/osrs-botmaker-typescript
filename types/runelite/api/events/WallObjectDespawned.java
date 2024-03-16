Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Data;
import net.runelite.api.Tile;
import net.runelite.api.WallObject;

/**
 * An event where a {@link WallObject} on a {@link Tile} has been removed.
 */
@Data
public class WallObjectDespawned
{
	/**
	 * The affected tile.
	 */
	private Tile tile;
	/**
	 * The removed wall object.
	 */
	private WallObject wallObject;
}
