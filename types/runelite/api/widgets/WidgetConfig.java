Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.widgets;

import org.intellij.lang.annotations.MagicConstant;

/**
 * Utility class used for defining options to be used on the click mask
 * of a {@link Widget}.
 *
 * @see Widget#getClickMask()
 */
public final class WidgetConfig
{
	/**
	 * Enables displaying a ninth option on a menu.
	 */
	public static final int SHOW_MENU_OPTION_NINE = 1 << 9;

	/**
	 * Can this widget be used on a item on the floor
	 */
	public static final int USE_GROUND_ITEM = 1 << 11;

	/**
	 * Can this widget be used on a NPC
	 */
	public static final int USE_NPC = 2 << 11;

	/**
	 * Can this widget be used on a game object
	 */
	public static final int USE_OBJECT = 4 << 11;

	/**
	 * Can this widget be used on a player
	 */
	public static final int USE_PLAYER = 8 << 11;

	/**
	 * Can this widget be used on a item in your inventory
	 */
	@Deprecated
	public static final int USE_ITEM = 16 << 11;

	/**
	 * Can this widget be used on a widget with the WIDGET_USE_TARGET flag
	 */
	public static final int USE_WIDGET = 32 << 11;

	/**
	 * Controls whether this widget can be dragged around.
	 */
	public static final int DRAG = 1 << 17;

	/**
	 * Controls whether this widget can have other widgets dragged onto it.
	 */
	public static final int DRAG_ON = 1 << 20;

	/**
	 * Can widgets with USE_WIDGET be used on this widget
	 */
	public static final int WIDGET_USE_TARGET = 1 << 21;

	/**
	 * Does the action (zero bosed) get transmitted to the server
	 * when clicked
	 */
	@SuppressWarnings("MagicConstant")
	@MagicConstant(flagsFromClass = WidgetConfig.class)
	public static int transmitAction(int action)
	{
		return 1 << (action + 1);
	}
}
