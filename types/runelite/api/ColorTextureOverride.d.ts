/**
 * Represents overridden color/texture replacements for an item. These overrides are used instead
 * of the normal ones configured in the item composition.
 */
interface ColorTextureOverride
{
	getColorToReplaceWith(): number[];

	getTextureToReplaceWith(): number[];
}