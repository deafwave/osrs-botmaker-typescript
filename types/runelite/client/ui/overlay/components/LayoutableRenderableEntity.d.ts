/// <reference path="../../../../api/Point.d.ts" />
/// <reference path="../../../../../java/index.d.ts" />
declare namespace net.runelite.client.ui.overlay.components {
	export class LayoutableRenderableEntity {
		getBounds(): Rectangle;
		setPreferredLocation(position: net.runelite.api.Point): void;
		setPreferredSize(dimension: Dimension): void;
	}
}
