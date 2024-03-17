/// <reference path="Tile.d.ts" />
interface TileFunction
{
	drawTile(tile: Tile, tileX: number, tileY: number, px0: number, py0: number, px1: number, py1: number): void;
}