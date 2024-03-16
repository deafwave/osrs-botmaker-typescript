Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Data;

/**
 * Event called when the client is checking if the menu should be
 * opened on left click.
 */
@Data
public class MenuShouldLeftClick
{
	/**
	 * If set to true, the menu will open on left click.
	 */
	private boolean forceRightClick;
}
