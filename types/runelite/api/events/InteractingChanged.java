Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.Actor;

/**
 * An event called when the actor an actor is interacting with changes
 */
@Value
public class InteractingChanged
{
	private final Actor source;

	/**
	 * Target actor, may be null
	 */
	private final Actor target;
}
