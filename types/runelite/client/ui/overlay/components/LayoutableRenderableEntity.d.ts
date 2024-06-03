declare namespace net.runelite.client.ui.overlay.components {

    export class LayoutableRenderableEntity {
        getBounds(): Rectangle;
        setPreferredLocation(position: net.runelite.api.Point): void;
        setPreferredSize(dimension: Dimension): void;
    }
}