Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.widgets;

/**
 * Utility class mapping Widget ItemQuantityMode values
 */
public final class ItemQuantityMode
{
	/**
	 * Never show item quantity number
	 */
	public static final int NEVER = 0;

	/**
	 * Always show item quantity number
	 */
	public static final int ALWAYS = 1;

	/**
	 * Only show item quantity number if it's greater than 1
	 */
	public static final int STACKABLE = 2;
}
