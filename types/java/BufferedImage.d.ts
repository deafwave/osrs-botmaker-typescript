// BufferedImage.d.ts
interface BufferedImage {
	// Basic properties
	width: number;
	height: number;
	imageType: number; // You may use specific enum/constants for different image types

	// Methods to get and set pixel data
	getRGB(x: number, y: number): number;
	setRGB(x: number, y: number, rgb: number): void;
	getRGB(
		startX: number,
		startY: number,
		w: number,
		h: number,
		rgbArray: number[],
		offset: number,
		scansize: number,
	): void;
	setRGB(
		startX: number,
		startY: number,
		w: number,
		h: number,
		rgbArray: number[],
		offset: number,
		scansize: number,
	): void;

	// Methods to manipulate graphics
	createGraphics(): Graphics2D; // Assuming a Graphics2D interface is defined

	// Additional methods can be added as per requirement
}
