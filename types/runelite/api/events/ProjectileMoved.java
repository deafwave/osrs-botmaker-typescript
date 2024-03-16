Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Data;
import net.runelite.api.Projectile;
import net.runelite.api.coords.LocalPoint;

/**
 * An event called whenever a {@link Projectile} has moved towards a point.
 * <p>
 * For projectiles that target the ground, this event is only triggered
 * once (ie. AoE from Lizardman Shaman).
 */
@Data
public class ProjectileMoved
{
	/**
	 * The projectile being moved.
	 */
	private Projectile projectile;
	/**
	 * The target location of the projectile.
	 */
	private LocalPoint position;
	/**
	 * The z-axis target location of the projectile.
	 */
	private int z;
}
