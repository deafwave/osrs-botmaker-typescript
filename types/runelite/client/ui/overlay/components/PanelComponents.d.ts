declare namespace net.runelite.client.ui.overlay.components {
    export class PanelComponent {
        getBackgroundColor(): Color;
        getBounds(): Rectangle;
        getChildren(): LayoutableRenderableEntity[];
        getPreferredSize(): Dimension;
        render(graphics: Graphics2D): Dimension;
        setBackgroundColor(backgroundColor: Color): void;
        setBorder(border: Rectangle): void;
        setGap(gap: net.runelite.api.Point): void;
        setOrientation(orientation: ComponentOrientation): void;
        setPreferredLocation(preferredLocation: net.runelite.api.Point): void;
        setPreferredSize(preferredSize: Dimension): void;
        setWrap(wrap: boolean): void;
    }
}