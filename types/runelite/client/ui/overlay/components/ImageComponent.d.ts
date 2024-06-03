declare namespace net.runelite.client.ui.overlay.components {
    export class ImageComponent {

        constructor();
        constructor(image: BufferedImage);

        getBounds(): Rectangle;
        render(graphics: Graphics2D): Dimension;
        setPreferredLocation(preferredLocation: net.runelite.api.Point): void;
        setPreferredSize(dimension: Dimension): void;
    }
}