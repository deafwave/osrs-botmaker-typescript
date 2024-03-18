declare namespace net.runelite.api.events {
	export class VarbitChanged {
		/**
		 * The id of the varp that was changed.
		 * For a varplayer, this is the varplayer id.
		 */

		getVarpId(): number;
		setVarpId(varpId: number): void;

		/**
		 * The id of the varbit that was changed.
		 * For a varplayer, this is -1.
		 */
		getVarbitId(): number;
		setVarbitId(varbitId: number): void;

		/**
		 * The new value of the varp or varbit
		 */
		getValue(): number;
		setValue(value: number): void;

		/** @Deprecated */
		getIndex(): number;
	}
}
