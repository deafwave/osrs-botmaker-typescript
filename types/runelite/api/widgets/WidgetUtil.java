Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.widgets;

import net.runelite.api.annotations.Component;
import net.runelite.api.annotations.Interface;

public class WidgetUtil
{
	/**
	 * Utility method that converts a component id to the interface it
	 * belongs to.
	 *
	 * @param c component id
	 * @return the interface id
	 */
	@Interface
	public static int componentToInterface(@Component int c)
	{
		return c >>> 16;
	}

	/**
	 * Utility method that converts a component id to the id it is within
	 * its interface.
	 *
	 * @param c component id
	 */
	public static int componentToId(@Component int c)
	{
		return c & 0xFFFF;
	}

	/**
	 * Utility method that packs a component id from an interface id and child id.
	 * @param interfaceId interface id
	 * @param childId id within the interface
	 * @return the component id
	 */
	@Component
	public static int packComponentId(@Interface int interfaceId, int childId)
	{
		return (interfaceId << 16) | childId;
	}
}
