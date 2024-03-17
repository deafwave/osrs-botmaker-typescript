/**
 * A bitmap Font in Jagex's format
 */
interface FontTypeFace
{
	getTextWidth(text: string): number;

	getBaseline(): number;






	drawWidgetText(text: string, x: number, y: number, width: number, height: number, rgb: number, shadowRGB: number, alpha: number, lineHeight: number): void;
}