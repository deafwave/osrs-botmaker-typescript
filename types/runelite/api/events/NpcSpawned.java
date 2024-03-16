Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.Actor;
import net.runelite.api.NPC;

/**
 * An event where an {@link NPC} has spawned.
 */
@Value
public class NpcSpawned
{
	/**
	 * The spawned NPC.
	 */
	private final NPC npc;

	public Actor getActor()
	{
		return npc;
	}
}
