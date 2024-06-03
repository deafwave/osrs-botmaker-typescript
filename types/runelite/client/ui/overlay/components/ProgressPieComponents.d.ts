/// <reference path="../../../../api/Point.d.ts" />
/// <reference path="../../../../../java/index.d.ts" />
declare namespace net.runelite.client.ui.overlay.components {
	export class ProgressPieComponent {
		setBorder(border: Color, size: number): void;
		setBorderColor(borderColor: Color): void;
		setDiameter(diameter: number): void;
		setFill(fill: Color): void;
		setPosition(position: net.runelite.api.Point): void;
		setProgress(progress: number): void;
		setStroke(stroke: Stroke): void;
	}
}
