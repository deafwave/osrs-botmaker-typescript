/**
 * VarCInts are stored entirely in memory, or locally on a user's
 * machine in the preferences2.dat file depending on how Jagex
 * configured the variable.
 */
interface VarClientInt {
	/**
	 * Timeout for tooltips.
	 */
	readonly TOOLTIP_TIMEOUT: number;

	/**
	 * Tooltip visibility status.
	 * 0 = no tooltip displayed
	 * 1 = tooltip displaying
	 */
	readonly TOOLTIP_VISIBLE: number;

	/**
	 * Current message layer mode.
	 * @see net.runelite.api.vars.InputType
	 */
	readonly INPUT_TYPE: number;

	/**
	 * The game sets this to the same value as CAMERA_ZOOM_RESIZABLE_VIEWPORT.
	 */
	readonly CAMERA_ZOOM_FIXED_VIEWPORT: number;

	/**
	 * The game sets this to the same value as CAMERA_ZOOM_FIXED_VIEWPORT.
	 */
	readonly CAMERA_ZOOM_RESIZABLE_VIEWPORT: number;

	/**
	 * Membership status.
	 */
	readonly MEMBERSHIP_STATUS: number;

	/**
	 * Inventory tab.
	 */
	readonly INVENTORY_TAB: number;

	/**
	 * Time to block keypresses until.
	 */
	readonly BLOCK_KEYPRESS: number;

	/**
	 * World map search focused status.
	 */
	readonly WORLD_MAP_SEARCH_FOCUSED: number;
}
