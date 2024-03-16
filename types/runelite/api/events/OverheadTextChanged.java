Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.Actor;

/**
 * Event fired when an actors overhead text is changed.
 */
@Value
public class OverheadTextChanged
{
	private final Actor actor;

	private final String overheadText;
}