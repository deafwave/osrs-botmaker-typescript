Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:



package net.runelite.api.events;

import lombok.Data;
import net.runelite.api.annotations.Varbit;
import net.runelite.api.annotations.Varp;

/**
 * An event when a varbit or varplayer has changed.
 *
 * If the client preemptively changes a varp and the server agrees
 * the next tick, VarbitChanged will only be posted when the client
 * changes the value, not the server. This can cause unintended effects
 * if the VarPlayer has special engine behavior assigned to it.
 */
@Data
public class VarbitChanged
{
	/**
	 * The id of the varp that was changed.
	 * For a varplayer, this is the varplayer id.
	 */
	@Varp
	private int varpId = -1;

	/**
	 * The id of the varbit that was changed.
	 * For a varplayer, this is -1.
	 */
	@Varbit
	private int varbitId = -1;

	/**
	 * The new value of the varp or varbit
	 */
	private int value;

	@Deprecated
	public int getIndex()
	{
		return varpId;
	}
}