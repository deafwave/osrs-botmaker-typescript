Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import javax.annotation.Nullable;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import net.runelite.api.MenuAction;
import net.runelite.api.MenuEntry;
import net.runelite.api.widgets.Widget;

/**
 * An event where a menu option has been clicked.
 * <p>
 * This event does not only trigger when clicking an option in a
 * right-clicked menu. The event will trigger for any left click
 * action performed (ie. clicking an item, walking to a tile, etc) as
 * well as any right-click menu option.
 * <p>
 * By default, when there is no action performed when left-clicking,
 * it seems that this event still triggers with the "Cancel" action.
 */
@RequiredArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(onlyExplicitlyIncluded = true)
public class MenuOptionClicked
{
	/**
	 * The clicked menu entry
	 */
	@Getter
	private final MenuEntry menuEntry;

	/**
	 * Whether or not the event has been consumed by a subscriber.
	 */
	@Getter
	private boolean consumed;

	/**
	 * Action parameter 0. Its value depends on the menuAction.
	 */
	@EqualsAndHashCode.Include
	@ToString.Include
	public int getParam0()
	{
		return menuEntry.getParam0();
	}

	/**
	 * Action parameter 1. Its value depends on the menuAction.
	 */
	@EqualsAndHashCode.Include
	@ToString.Include
	public int getParam1()
	{
		return menuEntry.getParam1();
	}

	/**
	 * The option text added to the menu.
	 */
	@EqualsAndHashCode.Include
	@ToString.Include
	public String getMenuOption()
	{
		return menuEntry.getOption();
	}

	/**
	 * The target of the action.
	 */
	@EqualsAndHashCode.Include
	@ToString.Include
	public String getMenuTarget()
	{
		return menuEntry.getTarget();
	}

	/**
	 * The action performed.
	 */
	@EqualsAndHashCode.Include
	@ToString.Include
	public MenuAction getMenuAction()
	{
		return menuEntry.getType();
	}

	/**
	 * The ID of the object, actor, or item that the interaction targets.
	 */
	@EqualsAndHashCode.Include
	@ToString.Include
	public int getId()
	{
		return menuEntry.getIdentifier();
	}

	/**
	 * Test if this menu entry is an item op. "Use" and "Examine" are not considered item ops.
	 * @return
	 */
	public boolean isItemOp()
	{
		return menuEntry.isItemOp();
	}

	/**
	 * If this menu entry is an item op, get the item op id
	 * @return 1-5
	 */
	public int getItemOp()
	{
		return menuEntry.getItemOp();
	}

	/**
	 * If this menu entry is an item op, get the item id
	 * @return
	 * @see net.runelite.api.ItemID
	 * @see net.runelite.api.NullItemID
	 */
	public int getItemId()
	{
		return menuEntry.getItemId();
	}

	/**
	 * Get the widget this menu entry is on, if this is a menu entry
	 * with an associated widget. Such as eg, CC_OP.
	 * @return
	 */
	@Nullable
	public Widget getWidget()
	{
		return menuEntry.getWidget();
	}

	/**
	 * Marks the event as having been consumed.
	 * <p>
	 * Setting this state indicates that a plugin has processed the menu
	 * option being clicked and that the event will not be passed on
	 * for handling by vanilla client code.
	 */
	public void consume()
	{
		this.consumed = true;
	}

	@Deprecated
	public int getActionParam()
	{
		return menuEntry.getParam0();
	}

	@Deprecated
	public int getWidgetId()
	{
		return menuEntry.getParam1();
	}
}
