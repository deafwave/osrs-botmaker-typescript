declare namespace net.runelite.client.ui.overlay.components {

    export class SplitComponentBuilder {
        bounds(bounds: Rectangle): SplitComponentBuilder;
        build(): SplitComponent;
        first(first: LayoutableRenderableEntity): SplitComponentBuilder;
        gap(gap: net.runelite.api.Point): SplitComponentBuilder;
        orientation(orientation: ComponentOrientation): SplitComponentBuilder;
        preferredLocation(preferredLocation: net.runelite.api.Point): SplitComponentBuilder;
        preferredSize(preferredSize: Dimension): SplitComponentBuilder;
        second(second: LayoutableRenderableEntity): SplitComponentBuilder;
        toString(): string;
    }


    export class SplitComponent {

        static builder(): SplitComponentBuilder;
        
        builder(): SplitComponentBuilder;
        setFirst(first: LayoutableRenderableEntity): void;
        setGap(gap: net.runelite.api.Point): void;
        setOrientation(orientation: ComponentOrientation): void;
        setPreferredLocation(preferredLocation: net.runelite.api.Point): void;
        setPreferredSize(preferredSize: Dimension): void;
        setSecond(second: LayoutableRenderableEntity): void;
    }
}
