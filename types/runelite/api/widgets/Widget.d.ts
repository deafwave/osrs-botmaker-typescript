/// <reference path="../Point.d.ts" />
/// <reference path="../../../java/index.d.ts" />
/// <reference path="../FontTypeFace.d.ts" />
declare namespace net.runelite.api.widgets {
	/**
	 * Represents an on-screen UI element that is drawn on the canvas.
	 * <p>
	 * It should be noted that most RuneLite-added elements are not Widgets, but are
	 * an Overlay. Notable exceptions include bank tag tabs and chatbox inputs
	 * <p>
	 * Examples of Widgets include:
	 * <ul>
	 * <li>The fairy ring configuration selector</li>
	 * <li>The mini-map</li>
	 * <li>The bank inventory</li>
	 * </ul>
	 * <p>
	 * For a more complete idea of what is classified as a widget, see {@link WidgetID}.
	 */
	export interface Widget {
		/**
		 * Gets the widgets ID.
		 *
		 * @see WidgetID
		 */

		getId(): number;

		/**
		 * Gets the type of the widget.
		 *
		 * @see WidgetType
		 */

		getType(): number;

		/**
		 * Sets the type of the widget.
		 *
		 * @see WidgetType
		 */
		setType(type: number): void;

		/**
		 * Gets the type of content displayed by the widget.
		 */
		getContentType(): number;

		/**
		 * Sets the type of content displayed by the widget.
		 */
		setContentType(contentType: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the current click configuration of the widget.
		 * @see WidgetConfig
		 */

		getClickMask(): number;

		/**
		 * Sets the click configuration of the widget.
		 *
		 * @see WidgetConfig
		 */
		setClickMask(mask: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the parent widget, if this widget is a child.
		 *
		 * @return the parent widget, or null
		 */
		getParent(): net.runelite.api.widgets.Widget;

		/**
		 * Gets the ID of the parent widget.
		 *
		 * @return the parent ID, or -1 if this widget is not a child
		 */
		getParentId(): number;

		/**
		 * Gets a dynamic child by index
		 */

		getChild(index: number): net.runelite.api.widgets.Widget | null;

		/**
		 * Gets the dynamic children of this widget in a sparse array
		 */

		getChildren(): net.runelite.api.widgets.Widget[] | null;

		/**
		 * Sets the dynamic children sparse array
		 */
		setChildren(children: net.runelite.api.widgets.Widget[]): void;

		/**
		 * Gets all dynamic children.
		 *
		 * @return the dynamic children
		 */
		getDynamicChildren(): net.runelite.api.widgets.Widget[];

		/**
		 * Gets all static children.
		 *
		 * @return the static children
		 */
		getStaticChildren(): net.runelite.api.widgets.Widget[];

		/**
		 * Gets all nested children.
		 *
		 * @return the nested children
		 */
		getNestedChildren(): net.runelite.api.widgets.Widget[];

		/**
		 * Gets the relative x-axis coordinate to the widgets parent.
		 *
		 * @return the relative x-axis coordinate
		 */
		getRelativeX(): number;

		/**
		 * Sets the relative x-axis coordinate to the widgets parent.
		 *
		 * You do not want to use this. Use {@link #setOriginalX(int)}, {@link #setXPositionMode(int)}
		 * and {@link #revalidate()}. Almost any interaction with this widget from a clientscript will
		 * recalculate this value.
		 */

		setRelativeX(x: number): void;

		/**
		 * Gets the relative y-axis coordinate to the widgets parent.
		 *
		 * @return the relative coordinate
		 */
		getRelativeY(): number;

		/**
		 * Sets the relative y-axis coordinate to the widgets parent.
		 *
		 * You do not want to use this. Use {@link #setOriginalY(int)}, {@link #setYPositionMode(int)}
		 * and {@link #revalidate()}. Almost any interaction with this widget from a clientscript will
		 * recalculate this value.
		 */

		setRelativeY(y: number): void;

		/**
		 * Set a forced position for the widget. This position overrides the relative x/y for the
		 * widget, even if the widget is revalidated. To clear the forced position pass -1 for x/y.
		 * @param x x pos relative to the parent
		 * @param y y pos relative to the parent
		 */
		setForcedPosition(x: number, y: number): void;

		/**
		 * Gets the text displayed on this widget.
		 *
		 * @return the displayed text
		 */
		getText(): string;

		/**
		 * Sets the text displayed on this widget.
		 *
		 * @param text the text to display
		 */
		setText(text: string): net.runelite.api.widgets.Widget;

		/**
		 * Gets the color as an RGB value.
		 *
		 * @return RGB24 color
		 * @see java.awt.Color#getRGB()
		 */
		getTextColor(): number;

		/**
		 * Sets the RGB color of the displayed text or rectangle.
		 *
		 * @param textColor RGB24 color
		 * @see java.awt.Color#getRGB()
		 */
		setTextColor(textColor: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the transparency of the rectangle
		 *
		 * @return 0 = fully opaque, 255 = fully transparent
		 */
		getOpacity(): number;

		/**
		 * Sets the transparency of the rectangle
		 *
		 * @param transparency 0 = fully opaque, 255 = fully transparent
		 */
		setOpacity(transparency: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the name "op base" of the widget.
		 * <p>
		 * The name of the widget is used in the tooltip when an action is
		 * available. For example, the widget that activates quick prayers
		 * has the name "Quick-prayers" so when hovering there is a tooltip
		 * that says "Activate Quick-prayers".
		 *
		 * @return the name
		 */
		getName(): string;

		/**
		 * Sets the name of the widget.
		 *
		 * @param name the new name
		 */
		setName(name: string): net.runelite.api.widgets.Widget;

		/**
		 * Gets the Model/NPC/Item ID displayed in the widget.
		 *
		 * @see #getModelType()
		 */
		getModelId(): number;

		/**
		 * Sets the Model/NPC/Item ID displayed in the widget.
		 *
		 * @see WidgetModelType
		 */
		setModelId(id: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the model type of the widget.
		 *
		 * @see WidgetModelType
		 */

		getModelType(): number;

		/**
		 * Sets the model type of the widget.
		 *
		 * @param type the new model type
		 * @see WidgetModelType
		 */
		setModelType(type: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the sequence ID used to animate the model in the widget
		 *
		 * @see net.runelite.api.AnimationID
		 */
		getAnimationId(): number;

		/**
		 * Sets the sequence ID used to animate the model in the widget
		 *
		 * @see net.runelite.api.AnimationID
		 */
		setAnimationId(animationId: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the x rotation of the model displayed in the widget.
		 * 0 = no rotation, 2047 = full rotation
		 */

		getRotationX(): number;

		/**
		 * Sets the x rotation of the model displayed in the widget.
		 * <br>
		 * Note: Setting this value outside of the input range defined by {@link Widget#getRotationX()} will cause a client
		 *       crash.
		 *
		 * @param modelX the new model x rotation value
		 */
		setRotationX(modelX: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the y rotation of the model displayed in the widget.
		 * 0 = no rotation, 2047 = full rotation
		 */

		getRotationY(): number;

		/**
		 * Sets the y rotation of the model displayed in the widget.
		 * <br>
		 * Note: Setting this value outside of the input range defined by {@link Widget#getRotationY()} will cause a client
		 *       crash.
		 *
		 * @param modelY the new model y rotation value
		 */
		setRotationY(modelY: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the z rotation of the model displayed in the widget.
		 * 0 = no rotation, 2047 = full rotation
		 */

		getRotationZ(): number;

		/**
		 * Sets the z rotation of the model displayed in the widget.
		 * <br>
		 * Note: Setting this value outside of the input range defined by {@link Widget#getRotationZ()} will cause a client
		 *       crash.
		 *
		 * @param modelZ the new model z rotation value
		 */
		setRotationZ(modelZ: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the amount zoomed in on the model displayed in the widget.
		 */
		getModelZoom(): number;

		/**
		 * Sets the amount zoomed in on the model displayed in the widget.
		 *
		 * @param modelZoom the new model zoom value
		 */
		setModelZoom(modelZoom: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the sprite ID displayed in the widget.
		 *
		 * @return the sprite ID
		 * @see net.runelite.api.SpriteID
		 */
		getSpriteId(): number;

		/**
		 * Gets if sprites are repeated or stretched
		 */
		getSpriteTiling(): boolean;

		/**
		 * Sets if sprites are repeated or stretched
		 */
		setSpriteTiling(tiling: boolean): net.runelite.api.widgets.Widget;

		/**
		 * Sets the sprite ID displayed in the widget.
		 *
		 * @param spriteId the sprite ID
		 * @see net.runelite.api.SpriteID
		 */
		setSpriteId(spriteId: number): net.runelite.api.widgets.Widget;

		/**
		 * Checks whether this widget or any of its parents are hidden.
		 *
		 * This must be ran on the client thread
		 *
		 * @return true if this widget or any parent is hidden, false otherwise
		 */
		isHidden(): boolean;

		/**
		 * Checks whether this widget is hidden, not taking into account
		 * any parent hidden states.
		 *
		 * @return true if this widget is hidden, false otherwise
		 */
		isSelfHidden(): boolean;

		/**
		 * Sets the self-hidden state of this widget.
		 *
		 * @param hidden new hidden state
		 */
		setHidden(hidden: boolean): net.runelite.api.widgets.Widget;

		/**
		 * The index of this widget in it's parent's children array
		 */
		getIndex(): number;

		/**
		 * Gets the location the widget is being drawn on the canvas.
		 * <p>
		 * This method accounts for the relative coordinates and bounds
		 * of any parent widgets.
		 *
		 * @return the upper-left coordinate of where this widget is drawn
		 */
		getCanvasLocation(): Point;

		/**
		 * Gets the width of the widget.
		 * <p>
		 * If this widget is storing any {@link WidgetItem}s, this value is
		 * used to store the number of item slot columns.
		 *
		 * @return the width
		 */
		getWidth(): number;

		/**
		 * Sets the width of the widget.
		 *
		 * You do not want to use this. Use {@link #setOriginalWidth(int)}, {@link #setWidthMode(int)}
		 * and {@link #revalidate()}. Almost any interaction with this widget from a clientscript will
		 * recalculate this value.
		 */

		setWidth(width: number): void;

		/**
		 * Gets the height of the widget.
		 *
		 * @return the height
		 */
		getHeight(): number;

		/**
		 * Sets the height of the widget.
		 *
		 * You do not want to use this. Use {@link #setOriginalHeight(int)}, {@link #setHeightMode(int)}
		 * and {@link #revalidate()}. Almost any interaction with this widget from a clientscript will
		 * recalculate this value.
		 */

		setHeight(height: number): void;

		/**
		 * Gets the area where the widget is drawn on the canvas.
		 *
		 * @return the occupied area of the widget
		 */
		getBounds(): Rectangle;

		/**
		 * Gets the item ID displayed by the widget.
		 *
		 * @return the item ID
		 */
		getItemId(): number;

		/**
		 * Sets the item ID displayed by the widget.
		 *
		 * @param itemId the item ID
		 */
		setItemId(itemId: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the quantity of the item displayed by the widget.
		 *
		 * @return the item quantity
		 */
		getItemQuantity(): number;

		/**
		 * Sets the item quantity displayed by the widget.
		 *
		 * @param quantity the quantity of the item
		 */
		setItemQuantity(quantity: number): net.runelite.api.widgets.Widget;

		/**
		 * Checks if the passed canvas points is inside of this widget's
		 * {@link #getBounds() bounds}
		 *
		 * @param point the canvas point
		 * @return true if this widget contains the point, false otherwise
		 */
		contains(point: Point): boolean;

		/**
		 * Gets the amount of pixels the widget is scrolled in the X axis
		 */
		getScrollX(): number;

		/**
		 * Sets the amount of pixels the widget is scrolled in the X axis
		 */
		setScrollX(scrollX: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the amount of pixels the widget is scrolled in the Y axis
		 */
		getScrollY(): number;

		/**
		 * sets the amount of pixels the widget is scrolled in the Y axis
		 */
		setScrollY(scrollY: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the size of the widget's viewport in the X axis
		 */
		getScrollWidth(): number;

		/**
		 * Sets the size of the widget's viewport in the X axis
		 */
		setScrollWidth(width: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the size of the widget's viewport in the Y axis
		 */
		getScrollHeight(): number;

		/**
		 * Sets the size of the widget's viewport in the Y axis
		 */
		setScrollHeight(height: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the X coordinate of this widget before being adjusted by
		 * {@link #getXPositionMode()}}.
		 */
		getOriginalX(): number;

		/**
		 * Sets the X input to the {@link WidgetPositionMode}. {@link #revalidate()} must be
		 * called for the new values to take effect.
		 *
		 * @see #setXPositionMode(int)
		 */
		setOriginalX(originalX: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the Y coordinate of this widget before being adjusted by
		 * {@link #getYPositionMode()}}
		 */
		getOriginalY(): number;

		/**
		 * Sets the Y input to the {@link WidgetPositionMode}. {@link #revalidate()} must be
		 * called for the new values to take effect.
		 *
		 * @see #setYPositionMode(int)
		 */
		setOriginalY(originalY: number): net.runelite.api.widgets.Widget;

		/**
		 * Sets the X/Y coordinates
		 */
		setPos(x: number, y: number): net.runelite.api.widgets.Widget;
		setPos(
			x: number,
			y: number,
			xMode: number,
			yMode: number,
		): net.runelite.api.widgets.Widget;

		/**
		 * Gets the height coordinate of this widget before being adjusted by
		 * {@link #getHeightMode()}
		 */
		getOriginalHeight(): number;

		/**
		 * Sets the height input to the {@link WidgetSizeMode}. {@link #revalidate()} must be
		 * called for the new values to take effect.
		 *
		 * @see #setHeightMode(int)
		 */
		setOriginalHeight(
			originalHeight: number,
		): net.runelite.api.widgets.Widget;

		/**
		 * Gets the width coordinate of this widget before being adjusted by
		 * {@link #getWidthMode()}
		 */
		getOriginalWidth(): number;

		/**
		 * Sets the width input to the {@link WidgetSizeMode}. {@link #revalidate()} must be
		 * called for the new values to take effect.
		 *
		 * @see #setWidthMode(int)
		 */
		setOriginalWidth(
			originalWidth: number,
		): net.runelite.api.widgets.Widget;

		setSize(width: number, height: number): net.runelite.api.widgets.Widget;
		setSize(
			width: number,
			height: number,
			widthMode: number,
			heightMode: number,
		): net.runelite.api.widgets.Widget;

		/**
		 * Gets the menu options available on the widget as a sparse array.
		 */
		getActions(): string[] | null;

		/**
		 * Creates a dynamic widget child
		 *
		 * @param index the index of the new widget in the children list or -1 to append to the back
		 * @param type  the {@link WidgetType} of the widget
		 */
		createChild(
			index: number,
			type: number,
		): net.runelite.api.widgets.Widget;

		/**
		 * Creates a dynamic widget child at the end of the children list
		 *
		 * @param type  the {@link WidgetType} of the widget
		 */
		createChild(type: number): net.runelite.api.widgets.Widget;

		/**
		 * Removes all of this widget's dynamic children
		 */
		deleteAllChildren(): void;

		/**
		 * Creates a menu option on the widget
		 *
		 * @param index  The index of the menu
		 * @param action The verb to be displayed next to the widget's name in the context menu
		 */
		setAction(index: number, action: string): void;

		/**
		 * Sets a script to be ran when the a menu action is clicked.
		 * hasListener must be true for this to take effect
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnOpListener(...args: any[]): void;

		/**
		 * Sets a script to be ran when the dialog is canceled
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnDialogAbortListener(...args: any[]): void;

		/**
		 * Sets a script to be ran on key input
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnKeyListener(...args: any[]): void;

		/**
		 * Sets a script to be ran when the mouse enters the widget bounds
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnMouseOverListener(...args: any[]): void;

		/**
		 * Sets a script to be ran every client tick when the mouse is in the widget bounds
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnMouseRepeatListener(...args: any[]): void;

		/**
		 * Sets a script to be ran when the mouse leaves the widget bounds
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnMouseLeaveListener(...args: any[]): void;

		/**
		 * Sets a script to be ran every client tick
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnTimerListener(...args: any[]): void;

		/**
		 * Sets a script to be ran when the target mode has been activated for this widget
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnTargetEnterListener(...args: any[]): void;

		/**
		 * Sets a script to be ran when the target mode has been deactivated for this widget
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnTargetLeaveListener(...args: any[]): void;

		/**
		 * If this widget has any listeners on it
		 */
		hasListener(): boolean;

		/**
		 * Sets if the widget has any listeners. This should be called whenever a setXListener function is called
		 */
		setHasListener(hasListener: boolean): net.runelite.api.widgets.Widget;

		/**
		 * This is true if the widget is from an if3 interface, or is dynamically created
		 */
		isIf3(): boolean;

		/**
		 * Recomputes this widget's x/y/w/h, excluding scroll
		 */
		revalidate(): void;

		/**
		 * Recomputes this widget's group's x/y/w/h including scroll
		 */
		revalidateScroll(): void;

		/**
		 * Gets the script and arguments to be ran when a menu action is clicked.
		 *
		 * @return
		 */
		getOnOpListener(): Object[];

		/**
		 * Gets the script and arguments to be ran when a key is pressed.
		 *
		 * @return
		 */
		getOnKeyListener(): Object[];

		/**
		 * Gets the script and arguments to be ran when a interface is loaded.
		 *
		 * @return
		 */
		getOnLoadListener(): Object[];

		/**
		 * Gets the script and arguments to be ran when one of the listened for inventories changes.
		 *
		 * @return
		 */
		getOnInvTransmitListener(): Object[];

		/**
		 * Returns the archive id of the font used
		 *
		 * @see net.runelite.api.FontID
		 */
		getFontId(): number;

		/**
		 * Sets the archive id of the font
		 *
		 * @see net.runelite.api.FontID
		 */
		setFontId(id: number): net.runelite.api.widgets.Widget;

		/**
		 * Returns the border type of item/sprite on the widget
		 * 0 - No border
		 * 1 - 1px black border
		 * 2 - 1px black under 1px white border (selected item)
		 */
		getBorderType(): number;

		/**
		 * @see #getBorderType
		 */
		setBorderType(thickness: number): void;

		/**
		 * Returns if text is shadowed
		 */
		getTextShadowed(): boolean;

		/**
		 * Sets if text should be shadowed
		 */
		setTextShadowed(shadowed: boolean): net.runelite.api.widgets.Widget;

		/**
		 * Returns the widget drag dead zone
		 */
		getDragDeadZone(): number;

		/**
		 * Sets the widget drag dead zone
		 */
		setDragDeadZone(deadZone: number): void;

		/**
		 * Returns the widget drag dead time
		 */
		getDragDeadTime(): number;

		/**
		 * Sets the widget drag dead time
		 */
		setDragDeadTime(deadTime: number): void;

		/**
		 * Returns widget {@link net.runelite.api.widgets.ItemQuantityMode}.
		 */

		getItemQuantityMode(): number;

		/**
		 * Sets the widget {@link net.runelite.api.widgets.ItemQuantityMode}
		 */

		setItemQuantityMode(
			itemQuantityMode: number,
		): net.runelite.api.widgets.Widget;

		/**
		 * Gets the mode that the X position is calculated from the original X position
		 *
		 * @see WidgetPositionMode
		 */

		getXPositionMode(): number;

		/**
		 * Sets the mode that the X position is calculated from the original X position.
		 * {@link #revalidate()} must be called for new values to take effect.
		 *
		 * @see WidgetPositionMode
		 */
		setXPositionMode(xpm: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the mode that the Y position is calculated from the original Y position
		 *
		 * @see WidgetPositionMode
		 */

		getYPositionMode(): number;

		/**
		 * Sets the mode that the Y position is calculated from the original Y position.
		 * {@link #revalidate()} must be called for new values to take effect.
		 *
		 * @see WidgetPositionMode
		 */
		setYPositionMode(ypm: number): net.runelite.api.widgets.Widget;

		/**
		 * Get the line height for this widget.
		 *
		 * @return
		 */
		getLineHeight(): number;

		/**
		 * Set the line height for this widget. If set to 0, the line height is taken from the font instead.
		 *
		 * @param lineHeight
		 */
		setLineHeight(lineHeight: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the X axis text position mode
		 *
		 * @see WidgetTextAlignment
		 */

		getXTextAlignment(): number;

		/**
		 * Sets the X axis text position mode
		 *
		 * @see WidgetTextAlignment
		 */
		setXTextAlignment(xta: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the Y axis text position mode
		 *
		 * @see WidgetTextAlignment
		 */

		getYTextAlignment(): number;

		/**
		 * Sets the Y axis text position mode
		 *
		 * @see WidgetTextAlignment
		 */
		setYTextAlignment(yta: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the mode controlling widget width
		 *
		 * @see WidgetSizeMode
		 */

		getWidthMode(): number;

		/**
		 * Sets the mode controlling widget width.
		 * {@link #revalidate()} must be called for new values to take effect.
		 *
		 * @see WidgetSizeMode
		 */
		setWidthMode(widthMode: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the mode controlling widget width
		 *
		 * @see WidgetSizeMode
		 */

		getHeightMode(): number;

		/**
		 * Sets the mode controlling widget width.
		 * {@link #revalidate()} must be called for new values to take effect.
		 *
		 * @see WidgetSizeMode
		 */
		setHeightMode(heightMode: number): net.runelite.api.widgets.Widget;

		/**
		 * Gets the font that this widget uses
		 */
		getFont(): FontTypeFace;

		/**
		 * Gets if the rectangle is filled or just stroked
		 */
		isFilled(): boolean;

		/**
		 * Sets if the rectangle is filled or just stroked
		 */
		setFilled(filled: boolean): net.runelite.api.widgets.Widget;

		/**
		 * Verb for spell targets
		 */
		getTargetVerb(): string;

		/**
		 * Verb for spell targets
		 */
		setTargetVerb(targetVerb: string): void;

		/**
		 * Can widgets under this widgets be clicked in this widgets bounding box
		 */
		getNoClickThrough(): boolean;

		/**
		 * Can widgets under this widgets be clicked in this widgets bounding box
		 */
		setNoClickThrough(noClickThrough: boolean): void;

		/**
		 * Can widgets under this widgets be scrolled in this widgets bounding box
		 */
		getNoScrollThrough(): boolean;

		/**
		 * Can widgets under this widgets be scrolled in this widgets bounding box
		 */
		setNoScrollThrough(noScrollThrough: boolean): void;

		/**
		 * {@link net.runelite.api.VarPlayer}s that triggers this widgets varTransmitListener
		 */
		setVarTransmitTrigger(...trigger: number[]): void;

		/**
		 * Sets a script to be ran the first client tick the mouse is held ontop of this widget
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnClickListener(...args: any[]): void;

		/**
		 * Sets a script to be ran the every client tick the mouse is held ontop of this widget,
		 * except the first client tick.
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnHoldListener(...args: any[]): void;

		/**
		 * Sets a script to be ran the first client tick the mouse is not held ontop of this widget
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnReleaseListener(...args: any[]): void;

		/**
		 * Sets a script to be ran when a drag operation is finished on this widget
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnDragCompleteListener(...args: any[]): void;

		/**
		 * Sets a script to be ran when this widget moves due to a drag
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnDragListener(...args: any[]): void;

		/**
		 * Sets a script to be ran when the mouse is scrolled when on the widget
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnScrollWheelListener(...args: any[]): void;

		/**
		 * Container this can be dragged in
		 */
		getDragParent(): net.runelite.api.widgets.Widget;

		/**
		 * Container this can be dragged in
		 */
		setDragParent(
			dragParent: net.runelite.api.widgets.Widget,
		): net.runelite.api.widgets.Widget;

		/**
		 * Gets the script and arguments to be ran when one of the listened for vars changes.
		 *
		 * @return
		 */
		getOnVarTransmitListener(): Object[];

		/**
		 * Sets a script to be ran when a varplayer changes
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnVarTransmitListener(...args: any[]): void;
	}
}
