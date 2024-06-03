declare namespace net.runelite.client.ui.overlay.components {
    
    export class TitleComponentBuilder {
        bounds(bounds: Rectangle): TitleComponentBuilder;
        build(): TitleComponent;
        color(color: Color): TitleComponentBuilder;
        preferredLocation(preferredLocation: net.runelite.api.Point): TitleComponentBuilder;
        preferredSize(preferredSize: Dimension): TitleComponentBuilder;
        text(text: string): TitleComponentBuilder;
        toString(): string;
    }
    
    export class TitleComponent {
        builder(): TitleComponentBuilder;
        bounds(bounds: Rectangle): TitleComponentBuilder;
        build(): TitleComponent;
        color(color: Color): TitleComponentBuilder;
        preferredLocation(preferredLocation: net.runelite.api.Point): TitleComponentBuilder;
        preferredSize(preferredSize: Dimension): TitleComponentBuilder;
        text(text: string): TitleComponentBuilder;
    }
}