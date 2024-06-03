/// <reference path="../../../../api/Point.d.ts" />
/// <reference path="../../../../../java/index.d.ts" />
declare namespace net.runelite.client.ui.overlay.components {
	export class TitleComponentBuilder {
		bounds(bounds: Rectangle): TitleComponentBuilder;
		build(): TitleComponent;
		color(color: Color): TitleComponentBuilder;
		preferredLocation(
			preferredLocation: net.runelite.api.Point,
		): TitleComponentBuilder;
		preferredSize(preferredSize: Dimension): TitleComponentBuilder;
		text(text: string): TitleComponentBuilder;
		toString(): string;
	}

	export class TitleComponent {
		builder(): TitleComponentBuilder;
		getBounds(): Rectangle;
		build(): TitleComponent;
		setColor(color: Color): void;
		setPreferredLocation(
			preferredLocation: net.runelite.api.Point,
		): void;
		setPreferredSize(preferredSize: Dimension): void;
		setText(text: string): void;
	}
}
