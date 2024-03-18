declare namespace net.runelite.api {
	export class JagexColor {
		public static readonly HUE_MAX = 63;
		public static readonly SATURATION_MAX = 7;
		public static readonly LUMINANCE_MAX = 127;

		public static packHSL(
			hue: number,
			saturation: number,
			luminance: number,
		): number;

		public static unpackHue(hsl: number): number;

		public static unpackSaturation(hsl: number): number;

		public static unpackLuminance(hsl: number): number;

		public static formatHSL(hsl: number): string;

		public static rgbToHSL(rgb: number, brightness: number): number;
	}
}
