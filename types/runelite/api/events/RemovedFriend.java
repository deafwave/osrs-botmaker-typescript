Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.Nameable;

/**
 * An event trigger when a player is removed from the friend or ignore list.
 */
@Value
public class RemovedFriend
{
	/**
	 * The removed friend or ignore entry
	 */
	private final Nameable nameable;
}
