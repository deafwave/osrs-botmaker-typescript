
declare namespace net.runelite.client.ui.overlay.components {
    export class TextComponent {
        render(graphics: Graphics2D): Dimension;
        setFont(font: any): void; //Java.awt.Font
        setColor(color: Color): void;
        setOutline (outline: boolean): void;
        setPosition(position: net.runelite.api.Point): void;
        setText(text: string): void;
    }
}