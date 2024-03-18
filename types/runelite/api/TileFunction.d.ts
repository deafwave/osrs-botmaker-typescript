/// <reference path="Tile.d.ts" />
declare namespace net.runelite.api {
	export interface TileFunction {
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
}
