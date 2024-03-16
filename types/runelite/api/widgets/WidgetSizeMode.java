Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.widgets;

public final class WidgetSizeMode
{
	/**
	 * dim = originalDim
	 */
	public static final int ABSOLUTE = 0;

	/**
	 * dim = parentDim - originalDim
	 */
	public static final int MINUS = 1;

	/**
	 * dim = parentDim * (originalDim / 16384)
	 */
	public static final int ABSOLUTE_16384THS = 2;
}
