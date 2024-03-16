Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.Actor;
import net.runelite.api.Player;

/**
 * An event where a {@link Player} has despawned.
 * <p>
 * Note: This event does not get called for the local player.
 */
@Value
public class PlayerDespawned
{
	/**
	 * The despawned player.
	 */
	private final Player player;

	public Actor getActor()
	{
		return player;
	}
}
