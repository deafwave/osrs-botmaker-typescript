/**
 * Represents a texture provider.
 */
interface TextureProvider {
	getBrightness(): number;

	/**
	 * Set the brightness for textures, clearing the texture cache.
	 *
	 * .9 is the darkest value available in the standard options
	 * .6 is the brightest value
	 */
	setBrightness(brightness: number): void;

	/**
	 * Get all textures
	 */
	getTextures(): Texture[];

	/**
	 * Get the pixels for a texture
	 */
	load(textureId: number): number[];

	/**
	 * Get the HSL color used when the texture isn't loaded yet
	 */
	getDefaultColor(textureID: number): number;
}
