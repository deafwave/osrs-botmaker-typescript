Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.worldmap;

import net.runelite.api.SpritePixels;

/**
 * Represents configuration for a map element
 */
public interface MapElementConfig
{
	/**
	 * Gets the sprite icon to display on the world map.
	 *
	 * @param unused unused value
	 * @return the sprite icon to display on the world map
	 */
	SpritePixels getMapIcon(boolean unused);

	/**
	 * Get the category of this icon type.
	 *
	 * @return
	 */
	int getCategory();
}
