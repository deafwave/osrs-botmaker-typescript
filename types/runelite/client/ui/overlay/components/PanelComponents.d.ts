/// <reference path="../../../../api/Point.d.ts" />
/// <reference path="./ComponentOrientation.d.ts" />
/// <reference path="./LayoutableRenderableEntity.d.ts" />
/// <reference path="../../../../../java/index.d.ts" />
declare namespace net.runelite.client.ui.overlay.components {
	export class PanelComponent {
		getBackgroundColor(): Color;
		getBounds(): Rectangle;
		getChildren(): List<net.runelite.client.ui.overlay.components.LayoutableRenderableEntity>;
		getPreferredSize(): Dimension;
		render(graphics: Graphics2D): Dimension;
		setBackgroundColor(backgroundColor: Color): void;
		setBorder(border: Rectangle): void;
		setGap(gap: net.runelite.api.Point): void;
		setOrientation(
			orientation: net.runelite.client.ui.overlay.components.ComponentOrientation,
		): void;
		setPreferredLocation(preferredLocation: net.runelite.api.Point): void;
		setPreferredSize(preferredSize: Dimension): void;
		setWrap(wrap: boolean): void;
	}
}
