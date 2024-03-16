Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.widgets;

import java.awt.Rectangle;
import javax.annotation.Nullable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import net.runelite.api.Point;

/**
 * An item that is being represented in a {@link Widget}.
 */
@AllArgsConstructor
@ToString
@Getter
public class WidgetItem
{
	/**
	 * The ID of the item represented.
	 *
	 * @see net.runelite.api.ItemID
	 */
	private final int id;
	/**
	 * The quantity of the represented item.
	 */
	private final int quantity;
	/**
	 * The area where the widget is drawn on the canvas.
	 */
	private final Rectangle canvasBounds;
	/**
	 * The widget which contains this item.
	 */
	private final Widget widget;
	/**
	 * The canvas bounds for the widget, if it is being dragged.
	 */
	@Nullable
	private final Rectangle draggingCanvasBounds;

	/**
	 * Get the area where the widget item is drawn on the canvas, accounting for drag
	 * @return
	 */
	public Rectangle getCanvasBounds()
	{
		return draggingCanvasBounds == null ? canvasBounds : draggingCanvasBounds;
	}

	/**
	 * Get the area where the widget item is drawn on the canvas
	 * @param dragging whether the returned area should account for widget drag
	 * @return
	 */
	public Rectangle getCanvasBounds(boolean dragging)
	{
		return dragging ? draggingCanvasBounds : canvasBounds;
	}

	/**
	 * Gets the upper-left coordinate of where the widget is being drawn
	 * on the canvas, accounting for drag.
	 *
	 * @return the upper-left coordinate of where this widget is drawn
	 */
	public Point getCanvasLocation()
	{
		Rectangle bounds = getCanvasBounds();
		return new Point((int) bounds.getX(), (int) bounds.getY());
	}

}
