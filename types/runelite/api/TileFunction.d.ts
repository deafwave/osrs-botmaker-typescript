/**
 * Represents a function applied to a tile.
 */
interface TileFunction {
	drawTile(
		tile: Tile,
		tileX: number,
		tileY: number,
		px0: number,
		py0: number,
		px1: number,
		py1: number,
	): void;
}
