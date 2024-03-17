/// <reference path="RuneliteNode.d.ts" />
/**
 * Represents a widget as an iterable node.
 */
interface WidgetNode extends RuneliteNode {
	/**
	 * The ID of the widget.
	 *
	 * @return the ID of the widget
	 * @see net.runelite.api.widgets.Widget
	 */
	getId(): number;

	/**
	 * @see net.runelite.api.widgets.WidgetModalMode
	 */

	getModalMode(): number;
}
