Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:



import java.util.List;
import net.runelite.api.coords.LocalPoint;
import net.runelite.api.coords.WorldPoint;

/**
 * Represents a tile in the game.
 */
public interface Tile
{
	/**
	 * Gets the decoration on the tile.
	 *
	 * @return the tile decoration
	 */
	DecorativeObject getDecorativeObject();

	/**
	 * Gets all game objects on the tile.
	 *
	 * @return the game objects
	 */
	GameObject[] getGameObjects();

	/**
	 * Gets the items held on this tile.
	 *
	 * @return the item
	 */
	ItemLayer getItemLayer();

	/**
	 * Gets the object on the ground layer of the tile.
	 *
	 * @return the ground object
	 */
	GroundObject getGroundObject();

	/**
	 * Sets the object on the ground layer of the tile.
	 *
	 * @param groundObject the ground object
	 */
	void setGroundObject(GroundObject groundObject);

	/**
	 * Gets the wall of the tile.
	 *
	 * @return the wall object
	 */
	WallObject getWallObject();

	/**
	 * Gets the scene paint of the tile.
	 *
	 * @return the paint
	 */
	SceneTilePaint getSceneTilePaint();

	/**
	 * Gets the model of the tile in the scene.
	 *
	 * @return the tile model
	 */
	SceneTileModel getSceneTileModel();

	/**
	 * Gets the location coordinate of the tile in the world.
	 *
	 * @return the world location
	 */
	WorldPoint getWorldLocation();

	/**
	 * Gets the location coordinate of the tile in scene coords
	 *
	 * @return the scene location
	 */
	Point getSceneLocation();

	/**
	 * Gets the local coordinate of the tile.
	 *
	 * @return the local location
	 */
	LocalPoint getLocalLocation();

	/**
	 * Gets the plane that this tile is on.
	 *
	 * @return the plane
	 */
	int getPlane();

	/**
	 * Get the plane this tile is rendered on, which is where the tile heights are from.
	 *
	 * @return
	 */
	int getRenderLevel();

	/**
	 * Get all the ground items for this tile
	 *
	 * @return the ground items
	 */
	List<TileItem> getGroundItems();

	/**
	 * Return the tile under this one, if this tile is a bridge
	 *
	 * @return
	 */
	Tile getBridge();
}
