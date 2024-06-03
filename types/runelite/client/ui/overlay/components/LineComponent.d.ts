declare namespace net.runelite.client.ui.overlay.components {

    export class LineComponentBuilder {
        bounds(bounds: Rectangle): LineComponentBuilder;
        build(): LineComponent;
        left(left: string): LineComponentBuilder;
        leftColor(leftColor: Color): LineComponentBuilder;
        leftFont(leftFont: any): LineComponentBuilder;
        preferredLocation(preferredLocation: net.runelite.api.Point): LineComponentBuilder;
        preferredSize(preferredSize: Dimension): LineComponentBuilder;
        right(right: string): LineComponentBuilder;
        rightColor(rightColor: Color): LineComponentBuilder;
        rightFont(rightFont: any): LineComponentBuilder;
        toString(): string;
    }


    export class LineComponent {

        static builder(): LineComponentBuilder;
        
        // Methods
        getBounds(): Rectangle;
        render(graphics: Graphics2D): Dimension;
        setLeft(left: string): void;
        setLeftColor(leftColor: Color): void;
        setLeftFont(leftFont: any): void;
        setPreferredLocation(preferredLocation: net.runelite.api.Point): void;
        setPreferredSize(preferredSize: Dimension): void;
        setRight(right: string): void;
        setRightColor(rightColor: Color): void;
        setRightFont(rightFont: any): void;
    }
}
