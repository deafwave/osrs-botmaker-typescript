interface Rectangle {
	// Properties
	x: number;
	y: number;
	width: number;
	height: number;

	// Methods
	contains(x: number, y: number): boolean;
	contains(x: number, y: number, width: number, height: number): boolean;
	intersects(rect: Rectangle): boolean;
	union(rect: Rectangle): Rectangle;
}
