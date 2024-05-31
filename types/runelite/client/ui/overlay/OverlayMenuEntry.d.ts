/// <reference path="../../../api/MenuAction.d.ts"/>

declare namespace net.runelite.client.ui.overlay {
    export class OverlayMenuEntry {
        /**
             * Checks if the provided object can be considered equal to this instance.
             * @param other The object to compare with.
             * @returns True if the objects can be considered equal, otherwise false.
             */
        protected canEqual(other: any): boolean;

        /**
         * Compares this instance with the specified object for equality.
         * @param o The object to compare with.
         * @returns True if the objects are equal, otherwise false.
         */
        equals(o: any): boolean;

        /**
         * Gets the menu action associated with this entry.
         * @returns The menu action.
         */
        getMenuAction(): net.runelite.api.MenuAction;

        /**
         * Gets the option string for this menu entry.
         * @returns The option string.
         */
        getOption(): string;

        /**
         * Gets the target string for this menu entry.
         * @returns The target string.
         */
        getTarget(): string;

        /**
         * Returns the hash code value for this instance.
         * @returns The hash code value.
         */
        hashCode(): number;

        /**
         * Returns a string representation of this instance.
         * @returns A string representation of this instance.
         */
        toString(): string;
    }
}