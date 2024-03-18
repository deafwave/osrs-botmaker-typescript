declare namespace net.runelite.api {
	/**
	 * Client side only, content-developer integers
	 *
	 * VarCInts are stored entirely in memory, or locally on a user's
	 * machine in the preferences2.dat file depending on how Jagex
	 * configured the variable
	 */
	export class VarClientInt {
		static readonly TOOLTIP_TIMEOUT = 1;

		/**
		 * 0 = no tooltip displayed
		 * 1 = tooltip displaying
		 */
		static readonly TOOLTIP_VISIBLE = 2;

		/**
		 * Current message layer mode
		 * @see net.runelite.api.vars.InputType
		 */
		static readonly INPUT_TYPE = 5;

		/**
		 * The game sets this to the same value as {@link #CAMERA_ZOOM_RESIZABLE_VIEWPORT}
		 */
		static readonly CAMERA_ZOOM_FIXED_VIEWPORT = 73;
		static readonly CAMERA_ZOOM_RESIZABLE_VIEWPORT = 74;

		static readonly MEMBERSHIP_STATUS = 103;

		static readonly INVENTORY_TAB = 171;

		/**
		 * time to block keypresses til
		 */
		static readonly BLOCK_KEYPRESS = 187;

		static readonly WORLD_MAP_SEARCH_FOCUSED = 190;
	}
}
