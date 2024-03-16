Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:



package net.runelite.api.events;

import lombok.Data;

/**
 * An event where the game has changed from fixed to resizable mode or vice versa.
 */
@Data
public class ResizeableChanged
{
	/**
	 * Whether the game is in resizable mode.
	 */
	private boolean isResized;
}
