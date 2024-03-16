Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Data;
import lombok.Getter;
import net.runelite.api.annotations.Interface;

/**
 * An event where a {@link net.runelite.api.widgets.Widget} has been loaded.
 */
@Data
public class WidgetLoaded
{
	/**
	 * The group ID of the loaded widget.
	 */
	@Interface
	@Getter(onMethod_ = @Interface)
	private int groupId;
}
