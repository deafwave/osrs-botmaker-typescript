Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:



import java.awt.Graphics2D;
import java.awt.Polygon;
import java.awt.Shape;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import net.runelite.api.coords.LocalPoint;
import net.runelite.api.coords.WorldPoint;

/**
 * Represents an object on a Tile
 */
public interface TileObject
{
	/**
	 * A bitfield containing various flags:
	 * <pre>{@code
	 * (RL) plane = bits >> 49 & 3
	 * id = bits >> 17 & 0xffffffff
	 * wall = bits >> 16 & 1
	 * type = bits >> 14 & 3
	 * scene y = bits >> 7 & 127
	 * scene x = bits >> 0 & 127
	 * }</pre>
	 * Type 0 = player, 1 = npc, 2 = game object, 3 = item
	 */
	long getHash();

	/**
	 * Gets the x-axis coordinate of the object in local context.
	 *
	 * @see LocalPoint
	 */
	int getX();

	/**
	 * Gets the y-axis coordinate of the object in local context.
	 *
	 * @see LocalPoint
	 */
	int getY();

	/**
	 * Gets the vertical coordinate of this object
	 */
	int getZ();

	/**
	 * Gets the plane of the tile that the object is on.
	 */
	int getPlane();

	/**
	 * Gets the ID of the object.
	 *
	 * @see ObjectID
	 * @see NullObjectID
	 */
	int getId();

	/**
	 * Get the world location for this object. For objects which are larger than 1 tile, this is the
	 * center most tile, rounded to the south-west.
	 * @return
	 */
	@Nonnull
	WorldPoint getWorldLocation();

	/**
	 * Get the local location for this object. This point is the center point of the object.
	 * @return
	 */
	@Nonnull
	LocalPoint getLocalLocation();

	/**
	 * Calculates the position of the center of this tile on the canvas
	 */
	@Nullable
	Point getCanvasLocation();

	/**
	 * Calculates the position of the center of this tile on the canvas
	 *
	 * @param zOffset Vertical offset to apply before projection
	 */
	@Nullable
	Point getCanvasLocation(int zOffset);

	/**
	 * Creates a polygon outlining the tile this object is on
	 */
	@Nullable
	Polygon getCanvasTilePoly();

	/**
	 * Calculates the canvas point to center {@code text} above the tile this object is on.
	 *
	 * @param graphics the graphics to use for font size calculation
	 * @param zOffset Vertical offset to apply before projection
	 * @return the canvas point to draw the text at
	 */
	@Nullable
	Point getCanvasTextLocation(Graphics2D graphics, String text, int zOffset);

	/**
	 * Gets a point on the canvas of where this objects mini-map indicator
	 * should appear.
	 *
	 * @return mini-map location on canvas
	 */
	@Nullable
	Point getMinimapLocation();

	/**
	 * Calculate the on-screen clickable area of the object.
	 */
	@Nullable
	Shape getClickbox();
}
