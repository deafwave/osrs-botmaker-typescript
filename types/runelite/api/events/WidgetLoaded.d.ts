declare namespace net.runelite.api.events {
	export class WidgetLoaded {
		/**
		 * The group ID of the loaded widget.
		 */

		getGroupId(): number;
		setGroupId(groupId: number): void;
	}
}
