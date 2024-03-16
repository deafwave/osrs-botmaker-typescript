/// <reference path="../../java/index.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="Player.d.ts" />

/**
 * A menu entry in a right-click menu.
 */
interface MenuEntry {
	/**
	 * The option text added to the menu. (ie. "Walk here", "Use")
	 */
	getOption(): string;
	setOption(option: string): MenuEntry;

	/**
	 * The target of the action. (ie. Item or Actor name)
	 * <p>
	 * If the option does not apply to any target, this field
	 * will be set to empty string.
	 */
	getTarget(): string;
	setTarget(target: string): MenuEntry;

	/**
	 * An identifier value for the target of the action.
	 */
	getIdentifier(): number;
	setIdentifier(identifier: number): MenuEntry;

	/**
	 * The action the entry will trigger.
	 */
	getType(): MenuAction;
	setType(type: MenuAction): MenuEntry;

	/**
	 * An additional parameter for the action.
	 */
	getParam0(): number;
	setParam0(param0: number): MenuEntry;

	/**
	 * A second additional parameter for the action.
	 */
	getParam1(): number;
	setParam1(param1: number): MenuEntry;

	/**
	 * If this is true and you have single mouse button on and this entry is
	 * the top entry the right click menu will not be opened when you left click
	 *
	 * This is used for shift click
	 */
	isForceLeftClick(): boolean;
	setForceLeftClick(forceLeftClick: boolean): MenuEntry;

	/**
	 * Deprioritized menus are sorted in the menu to be below the other menu entries.
	 * @return
	 */
	isDeprioritized(): boolean;
	setDeprioritized(deprioritized: boolean): MenuEntry;

	/**
	 * Set a callback to be called when this menu option is clicked
	 * @param callback
	 * @return
	 */
	onClick(callback: (entry: MenuEntry) => void): MenuEntry;

	/**
	 * Set the parent for the menu entry. This makes this menu entry part of the sub-menu off of the parent.
	 * @param parent
	 * @return
	 */
	setParent(parent: MenuEntry): MenuEntry;

	/**
	 * Get the parent for the menu entry.
	 * @return
	 */
	getParent(): MenuEntry | null;

	/**
	 * Test if this menu entry is an item op. "Use" and "Examine" are not considered item ops.
	 * @return
	 */
	isItemOp(): boolean;

	/**
	 * If this menu entry is an item op, get the item op id
	 * @return 1-5
	 */
	getItemOp(): number;

	/**
	 * Get the item id
	 * @return
	 * @see ItemID
	 * @see NullItemID
	 */
	getItemId(): number;

	/**
	 * Get the widget this menu entry is on, if this is a menu entry
	 * with an associated widget. Such as eg, CC_OP.
	 * @return
	 */
	getWidget(): Widget | null;

	/**
	 * Get the {@link NPC} this menu entry is targeting, if any.
	 * @return
	 */
	getNpc(): NPC | null;

	/**
	 * Get the {@link Player} this menu entry is targeting, if any.
	 * @return
	 */
	getPlayer(): Player | null;

	/**
	 * Get the {@link Actor} this menu entry is targeting, if any.
	 * @return
	 */
	getActor(): Actor | null;
}
