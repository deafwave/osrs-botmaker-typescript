Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import lombok.Value;

/**
 * An event that is fired after the designated script is ran
 */
@Value
public class ScriptPostFired
{
	/**
	 * The script id of the invoked script
	 */
	private final int scriptId;
}
