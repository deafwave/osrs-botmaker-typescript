Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.Nameable;

/**
 * An event where a {@link Nameable} has had their name changed.
 */
@Value
public class NameableNameChanged
{
	/**
	 * The nameable that changed names.
	 */
	private final Nameable nameable;
}
