/// <reference path="../SpritePixels.d.ts" />
/**
 * Represents configuration for a map element
 */
interface MapElementConfig {
	/**
	 * Gets the sprite icon to display on the world map.
	 *
	 * @param unused unused value
	 * @return the sprite icon to display on the world map
	 */
	getMapIcon(unused: boolean): SpritePixels;

	/**
	 * Get the category of this icon type.
	 *
	 * @return
	 */
	getCategory(): number;
}
