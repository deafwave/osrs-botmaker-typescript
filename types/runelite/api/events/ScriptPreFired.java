Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import lombok.Data;
import net.runelite.api.ScriptEvent;

/**
 * An event that is fired before the designated script is ran
 */
@Data
public class ScriptPreFired
{
	/**
	 * The script id of the invoked script
	 */
	private final int scriptId;

	/**
	 * The input of the script invoke, this will be null unless it is the root script
	 */
	private ScriptEvent scriptEvent;
}
