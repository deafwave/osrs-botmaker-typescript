declare namespace net.runelite.api.events {
	export class VarbitChanged {
		/**
		 * The id of the varp that was changed.
		 * For a varplayer, this is the varplayer id.
		 */

		private varpId: number;

		/**
		 * The id of the varbit that was changed.
		 * For a varplayer, this is -1.
		 */
		private varbitId: number;

		/**
		 * The new value of the varp or varbit
		 */
		private value: number;

		/** @Deprecated */
		private getIndex(): number;
	}
}
