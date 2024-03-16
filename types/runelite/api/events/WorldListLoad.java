Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.World;

/**
 * Event when the world list is loaded for the world switcher
 */
@Value
public class WorldListLoad
{
	private final World[] worlds;
}
