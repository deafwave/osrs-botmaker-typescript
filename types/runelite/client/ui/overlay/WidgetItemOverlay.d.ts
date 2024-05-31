/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../api/widgets/WidgetItem.d.ts" />

declare namespace net.runelite.client.ui.overlay {
    export class WidgetItemOverlay {
        /**
         * Renders the overlay on the provided Graphics2D object.
         * @param graphics The Graphics2D object to render on.
         * @returns The dimension of the rendered overlay.
         */
        render(graphics: Graphics2D): Dimension;

        /**
         * Abstract method to render item overlays.
         * @param graphics The Graphics2D object to render on.
         * @param itemId The ID of the item.
         * @param widgetItem The widget item to render.
         */
        renderItemOverlay(graphics: Graphics2D, itemId: number, widgetItem: net.runelite.api.widgets.WidgetItem): void;

        /**
         * Sets the layer of the overlay.
         * @param layer The layer to set.
         */
        setLayer(layer: OverlayLayer): void;

        /**
         * Sets the position of the overlay.
         * @param position The position to set.
         */
        setPosition(position: OverlayPosition): void;

        /**
         * Sets the priority of the overlay.
         * @param priority The priority to set.
         */
        setPriority(priority: number | OverlayPriority): void;

        /**
         * Shows the overlay on the bank interface.
         */
        protected showOnBank(): void;

        /**
         * Shows the overlay on the equipment interface.
         */
        protected showOnEquipment(): void;

        /**
         * Shows the overlay on the specified interfaces.
         * @param ids The IDs of the interfaces to show the overlay on.
         */
        protected showOnInterfaces(...ids: number[]): void;

        /**
         * Shows the overlay on the inventory interface.
         */
        protected showOnInventory(): void;
    }
}

