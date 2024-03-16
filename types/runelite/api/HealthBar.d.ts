/**
 * Represents a health bar.
 */
interface HealthBar {
	/**
	 * Gets the front sprite of the health bar.
	 */
	getHealthBarFrontSprite(): SpritePixels;

	/**
	 * Gets the back sprite of the health bar.
	 */
	getHealthBarBackSprite(): SpritePixels;

	/**
	 * Gets the ID of the front sprite of the health bar.
	 */
	getHealthBarFrontSpriteId(): number;

	/**
	 * Sets the padding of the health bar.
	 * @param padding The padding value to set.
	 */
	setPadding(padding: number): void;
}
