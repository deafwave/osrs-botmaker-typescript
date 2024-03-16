Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import lombok.Data;
import net.runelite.api.Actor;
import net.runelite.api.Hitsplat;

/**
 * An event called when a {@link Hitsplat} is processed on an {@link Actor}.
 * <p>
 * This event is called regardless of whether or not the hitsplat was
 * rendered. An example of this occuring would be if the actor has 4
 * visible hitsplats.
 */
@Data
public class HitsplatApplied
{
	/**
	 * The actor the hitsplat was applied to.
	 */
	private Actor actor;
	/**
	 * The applied hitsplat.
	 */
	private Hitsplat hitsplat;
}