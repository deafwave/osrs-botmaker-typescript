Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Data;
import net.runelite.api.Tile;
import net.runelite.api.WallObject;

/**
 * An event where a {@link WallObject} is added to a {@link Tile}.
 */
@Data
public class WallObjectSpawned
{
	/**
	 * The affected tile.
	 */
	private Tile tile;
	/**
	 * The newly spawned wall object.
	 */
	private WallObject wallObject;
}
