Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Data;
import net.runelite.api.GroundObject;
import net.runelite.api.Tile;

/**
 * An event where a {@link GroundObject} is added to a {@link Tile}.
 */
@Data
public class GroundObjectSpawned
{
	/**
	 * The affected tile.
	 */
	private Tile tile;
	/**
	 * The newly spawned ground object.
	 */
	private GroundObject groundObject;
}
