/// <reference path="../coords/WorldPoint.d.ts" />
declare namespace net.runelite.api.worldmap {
	export interface WorldMapIcon {
		/**
		 * Get the mapelement config id of this icon
		 * @return
		 */
		getType(): number;

		/**
		 * Get the coordinate of the map icon
		 * @return
		 */
		getCoordinate(): net.runelite.api.coords.WorldPoint;
	}
}
