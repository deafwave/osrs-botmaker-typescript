/**
 * Represents a utility class for manipulating colors in Jagex's format.
 */
interface JagexColor {
	HUE_MAX: 63;
	SATURATION_MAX: 7;
	LUMINANCE_MAX: 127;

	/**
	 * Packs hue, saturation, and luminance into a single short value.
	 *
	 * @param hue The hue component (0-63).
	 * @param saturation The saturation component (0-7).
	 * @param luminance The luminance component (0-127).
	 * @returns A packed HSL value.
	 */
	packHSL(hue: number, saturation: number, luminance: number): number;

	/**
	 * Unpacks the hue component from a packed HSL value.
	 *
	 * @param hsl The packed HSL value.
	 * @returns The hue component.
	 */
	unpackHue(hsl: number): number;

	/**
	 * Unpacks the saturation component from a packed HSL value.
	 *
	 * @param hsl The packed HSL value.
	 * @returns The saturation component.
	 */
	unpackSaturation(hsl: number): number;

	/**
	 * Unpacks the luminance component from a packed HSL value.
	 *
	 * @param hsl The packed HSL value.
	 * @returns The luminance component.
	 */
	unpackLuminance(hsl: number): number;

	/**
	 * Formats a packed HSL value into a string.
	 *
	 * @param hsl The packed HSL value.
	 * @returns A string representation of the HSL value.
	 */
	formatHSL(hsl: number): string;

	/**
	 * Converts an RGB value and brightness into a packed HSL value.
	 *
	 * @param rgb The RGB value.
	 * @param brightness The brightness multiplier.
	 * @returns A packed HSL value.
	 */
	rgbToHSL(rgb: number, brightness: number): number;
}
