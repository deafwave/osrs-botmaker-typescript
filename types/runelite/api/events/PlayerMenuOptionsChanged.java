Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import lombok.Data;

@Data
public class PlayerMenuOptionsChanged
{
	/**
	 * Index in playerOptions which changed.
	 */
	private int index;
}
