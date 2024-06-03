declare namespace net.runelite.client.ui.overlay.components {
    
    export class ProgressBarComponent {

        static LabelDisplayMode: {
            BOTH: string;
            FULL: string;
            PERCENTAGE: string;
            TEXT_ONLY: string;
        }

        getBounds(): Rectangle;
        render(graphics: Graphics2D): Dimension;
        setBackgroundColor(backgroundColor: Color): void;
        setCenterLabel(centerLabel: string): void;
        setFontColor(fontColor: Color): void;
        setForegroundColor(foregroundColor: Color): void;
        setLabelDisplayMode(labelDisplayMode: typeof ProgressBarComponent.LabelDisplayMode): void;
        setLeftLabel(leftLabel: string): void;
        setMaximum(maximum: number): void;
        setMinimum(minimum: number): void;
        setPreferredLocation(preferredLocation: net.runelite.api.Point): void;
        setPreferredSize(preferredSize: Dimension): void;
        setRightLabel(rightLabel: string): void;
        setValue(value: number): void;
    }

}