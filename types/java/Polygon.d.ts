/// <reference path="Rectangle.d.ts" />

interface Polygon {
	// Properties
	xpoints: number[];
	ypoints: number[];
	npoints: number;

	// Methods
	addPoint(x: number, y: number): void;
	contains(x: number, y: number): boolean;
	getBounds(): Rectangle; // Assuming a Rectangle interface is also defined
}
