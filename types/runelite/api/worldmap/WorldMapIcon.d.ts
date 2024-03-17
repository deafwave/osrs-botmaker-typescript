/// <reference path="../coords/WorldPoint.d.ts" />
interface WorldMapIcon {
	/**
	 * Get the mapelement config id of this icon
	 * @return
	 */
	getType(): number;

	/**
	 * Get the coordinate of the map icon
	 * @return
	 */
	getCoordinate(): WorldPoint;
}
