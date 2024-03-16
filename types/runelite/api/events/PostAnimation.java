Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.Animation;

/**
 * An event posted when an {@link Animation} is loaded
 */
@Value
public class PostAnimation
{
	private Animation animation;
}
