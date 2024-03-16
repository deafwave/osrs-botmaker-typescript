Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.annotations.Interface;
import net.runelite.api.widgets.WidgetModalMode;
import org.intellij.lang.annotations.MagicConstant;

/**
 * Posted when an interface is about to be closed
 */
@Value
public class WidgetClosed
{
	/**
	 * The ID of the interface that is closed
	 */
	@Interface
	private final int groupId;

	/**
	 * @see net.runelite.api.widgets.WidgetModalMode
	 */
	@MagicConstant(valuesFromClass = WidgetModalMode.class)
	private final int modalMode;

	/**
	 * If the interface will be unloaded or if it will be immediately reloaded
	 */
	private final boolean unload;
}
