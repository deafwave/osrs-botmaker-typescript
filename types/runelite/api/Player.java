Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:



import java.awt.Polygon;
import javax.annotation.Nullable;

/**
 * Represents a player entity in the game.
 */
public interface Player extends Actor
{
	/**
	 * Get the ID of the player
	 *
	 * @return
	 */
	int getId();

	@Override
	int getCombatLevel();

	/**
	 * Gets the composition of this player.
	 *
	 * @return the composition
	 */
	PlayerComposition getPlayerComposition();

	/**
	 * Gets the polygons that make up the players model.
	 *
	 * @return the model polygons
	 */
	Polygon[] getPolygons();

	/**
	 * Gets the current team cape team number the player is on.
	 *
	 * @return team number, or 0 if not on any team
	 */
	int getTeam();

	/**
	 * Checks whether this player is a member of the same friends chat
	 * the local player.
	 *
	 * @return true if the player is a friends chat member, false otherwise
	 */
	boolean isFriendsChatMember();

	/**
	 * Checks whether this player is a friend of the local player.
	 *
	 * @return true if the player is a friend, false otherwise
	 */
	boolean isFriend();

	/**
	 * Checks whether the player is a member of the same clan as the local player.
	 *
	 * @return
	 */
	boolean isClanMember();

	/**
	 * Gets the displayed overhead icon of the player.
	 *
	 * @return the overhead icon
	 */
	HeadIcon getOverheadIcon();

	/**
	 * Gets the displayed skull icon of the player.
	 * Only works on the local player.
	 *
	 * @return the skull icon
	 */
	@Nullable
	SkullIcon getSkullIcon();
}
