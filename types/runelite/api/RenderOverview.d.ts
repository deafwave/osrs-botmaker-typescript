/// <reference path="worldmap/WorldMap.d.ts" />
/// <reference path="worldmap/WorldMapData.d.ts" />
declare namespace net.runelite.api {
	export interface RenderOverview extends net.runelite.api.worldmap.WorldMap {
		getWorldMapData(): net.runelite.api.worldmap.WorldMapData;
	}
}
