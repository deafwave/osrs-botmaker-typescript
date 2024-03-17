/// <reference path="worldmap/WorldMap.d.ts" />
/// <reference path="WorldMapData.d.ts" />
interface RenderOverview extends WorldMap {
	getWorldMapData(): WorldMapData;
}
