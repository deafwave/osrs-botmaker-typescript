Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import net.runelite.api.MenuEntry;

/**
 * An event when a new entry is added to a right-click menu.
 */
@RequiredArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(onlyExplicitlyIncluded = true)
public class MenuEntryAdded
{
	@Getter
	private final MenuEntry menuEntry;

	/**
	 * The option text added to the menu. (ie. "Walk here", "Use")
	 */
	@EqualsAndHashCode.Include
	@ToString.Include
	public String getOption()
	{
		return menuEntry.getOption();
	}

	/**
	 * The target of the action. (ie. Item or Actor name)
	 * <p>
	 * If the option does not apply to any target, this field
	 * will be set to empty string.
	 */
	@EqualsAndHashCode.Include
	@ToString.Include
	public String getTarget()
	{
		return menuEntry.getTarget();
	}

	/**
	 * The action type that will be triggered.
	 */
	@EqualsAndHashCode.Include
	@ToString.Include
	public int getType()
	{
		return menuEntry.getType().getId();
	}

	/**
	 * An identifier value for the target of the action
	 */
	@EqualsAndHashCode.Include
	@ToString.Include
	public int getIdentifier()
	{
		return menuEntry.getIdentifier();
	}

	/**
	 * An additional parameter for the action.
	 */
	@EqualsAndHashCode.Include
	@ToString.Include
	public int getActionParam0()
	{
		return menuEntry.getParam0();
	}

	/**
	 * A second additional parameter for the action.
	 */
	@EqualsAndHashCode.Include
	@ToString.Include
	public int getActionParam1()
	{
		return menuEntry.getParam1();
	}
}
