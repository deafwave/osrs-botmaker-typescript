Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.Skill;

/**
 * An event where the experience, level, or boosted level of a {@link Skill} has been modified.
 */
@Value
public class StatChanged
{
	private final Skill skill;
	private final int xp;
	private final int level;
	private final int boostedLevel;
}
