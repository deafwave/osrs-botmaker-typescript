Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Data;
import net.runelite.api.Script;

/**
 * A callback from a runelite_callback opcode in a cs2
 */
@Data
public class ScriptCallbackEvent
{
	/**
	 * The script that is currently being executed
	 */
	private Script script;

	/**
	 * The name passed to runelite_callback
	 */
	private String eventName;
}
