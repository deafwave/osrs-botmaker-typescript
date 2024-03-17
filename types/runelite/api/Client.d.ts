/// <reference path="../../jagex/OAuthApi.d.ts" />
/// <reference path="GameEngine.d.ts" />
/// <reference path="ChatLineBuffer.d.ts" />
/// <reference path="hooks/Callbacks.d.ts" />
/// <reference path="hooks/DrawCallbacks.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="ChatMessageType.d.ts" />
/// <reference path="MessageNode.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="vars/AccountType.d.ts" />
/// <reference path="../../java/index.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="Scene.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="SpritePixels.d.ts" />
/// <reference path="NodeCache.d.ts" />
/// <reference path="IndexDataBase.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetInfo.d.ts" />
/// <reference path="World.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="VarbitComposition.d.ts" />
/// <reference path="WidgetNode.d.ts" />
/// <reference path="HashTable.d.ts" />
/// <reference path="IntegerNode.d.ts" />
/// <reference path="GrandExchangeOffer.d.ts" />
/// <reference path="Prayer.d.ts" />
/// <reference path="IterableHashTable.d.ts" />
/// <reference path="ObjectComposition.d.ts" />
/// <reference path="NPCComposition.d.ts" />
/// <reference path="StructComposition.d.ts" />
/// <reference path="dbtable/DBRowConfig.d.ts" />
/// <reference path="worldmap/MapElementConfig.d.ts" />
/// <reference path="IndexedSprite.d.ts" />
/// <reference path="coords/LocalPoint.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="Projectile.d.ts" />
/// <reference path="Deque.d.ts" />
/// <reference path="GraphicsObject.d.ts" />
/// <reference path="RuneLiteObject.d.ts" />
/// <reference path="ModelData.d.ts" />
/// <reference path="Model.d.ts" />
/// <reference path="Animation.d.ts" />
/// <reference path="BufferProvider.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="FriendsChatManager.d.ts" />
/// <reference path="FriendContainer.d.ts" />
/// <reference path="NameableContainer.d.ts" />
/// <reference path="Ignore.d.ts" />
/// <reference path="Preferences.d.ts" />
/// <reference path="RenderOverview.d.ts" />
/// <reference path="worldmap/WorldMap.d.ts" />
/// <reference path="ScriptEvent.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="CollisionData.d.ts" />
/// <reference path="WorldType.d.ts" />
/// <reference path="TextureProvider.d.ts" />
/// <reference path="EnumComposition.d.ts" />
/// <reference path="clan/ClanChannel.d.ts" />
/// <reference path="clan/ClanSettings.d.ts" />
/// <reference path="AmbientSoundEffect.d.ts" />
/// <reference path="TileFunction.d.ts" />
/// <reference path="Rasterizer.d.ts" />
/**
 * Represents the RuneScape client.
 */
interface Client extends OAuthApi, GameEngine {
	/**
	 * The injected client invokes these callbacks to send events to us
	 */
	getCallbacks(): Callbacks;

	/**
	 * The injected client invokes these callbacks for scene drawing, which is
	 * used by the gpu plugin to override the client's normal scene drawing code
	 */
	getDrawCallbacks(): DrawCallbacks;

	setDrawCallbacks(drawCallbacks: DrawCallbacks): void;

	getBuildID(): string;

	/**
	 * Gets a list of all valid players from the player cache.
	 *
	 * @return a list of all players
	 */
	getPlayers(): List<Player>;

	/**
	 * Gets a list of all valid NPCs from the NPC cache.
	 *
	 * @return a list of all NPCs
	 */
	getNpcs(): List<NPC>;

	/**
	 * Gets an array of all cached NPCs.
	 *
	 * @return cached NPCs
	 */
	getCachedNPCs(): NPC[];

	/**
	 * Gets an array of all cached players.
	 *
	 * @return cached players
	 */
	getCachedPlayers(): Player[];

	/**
	 * Gets the current modified level of a skill.
	 *
	 * @param skill the skill
	 * @return the modified skill level
	 */
	getBoostedSkillLevel(skill: Skill): number;

	/**
	 * Gets the real level of a skill.
	 *
	 * @param skill the skill
	 * @return the skill level
	 */
	getRealSkillLevel(skill: Skill): number;

	/**
	 * Calculates the total level from real skill levels.
	 *
	 * @return the total level
	 */
	getTotalLevel(): number;

	/**
	 * Adds a new chat message to the chatbox.
	 *
	 * @param type the type of message
	 * @param name the name of the player that sent the message
	 * @param message the message contents
	 * @param sender the sender/channel name
	 * @return the message node for the message
	 */
	addChatMessage(
		type: ChatMessageType,
		name: string,
		message: string,
		sender: string,
	): MessageNode;

	/**
	 * Adds a new chat message to the chatbox.
	 *
	 * @param type the type of message
	 * @param name the name of the player that sent the message
	 * @param message the message contents
	 * @param sender the sender/channel name
	 * @param postEvent whether to post the chat message event
	 * @return the message node for the message
	 */
	addChatMessage(
		type: ChatMessageType,
		name: string,
		message: string,
		sender: string,
		postEvent: boolean,
	): MessageNode;

	/**
	 * Gets the current game state.
	 *
	 * @return the game state
	 */
	getGameState(): GameState;

	/**
	 * Sets the current game state
	 *
	 * @param gameState
	 */
	setGameState(gameState: GameState): void;

	/**
	 * Causes the client to shutdown. It is faster than
	 * {@link java.applet.Applet#stop()} because it doesn't wait for 4000ms.
	 * This will call {@link System#exit} when it is done
	 */
	stopNow(): void;

	/**
	 * DEPRECATED. See getAccountHash instead.
	 * Gets the current logged in username.
	 *
	 * @return the logged in username
	 * @see OAuthApi#getAccountHash()
	 */

	getUsername(): string;

	/**
	 * Sets the current logged in username.
	 *
	 * @param name the logged in username
	 */
	setUsername(name: string): void;

	/**
	 * Sets the password on login screen.
	 *
	 * @param password the login screen password
	 */
	setPassword(password: string): void;

	/**
	 * Sets the 6 digit pin used for authenticator on login screen.
	 *
	 * @param otp one time password
	 */
	setOtp(otp: string): void;

	/**
	 * Gets currently selected login field. 0 is username, and 1 is password.
	 *
	 * @return currently selected login field
	 */
	getCurrentLoginField(): number;

	/**
	 * Gets index of current login state. 2 is username/password form, 4 is authenticator form
	 *
	 * @return current login state index
	 */
	getLoginIndex(): number;

	/**
	 * Gets the account type of the logged in player.
	 *
	 * @return the account type
	 * @deprecated see Varbits#ACCOUNT_TYPE
	 */

	getAccountType(): AccountType;

	getCanvas(): Canvas;

	/**
	 * Gets the current FPS (frames per second).
	 *
	 * @return the FPS
	 */
	getFPS(): number;

	/**
	 * Gets the x-axis coordinate of the camera.
	 * <p>
	 * This value is a local coordinate value similar to
	 * {@link #getLocalDestinationLocation()}.
	 *
	 * @return the camera x coordinate
	 */
	getCameraX(): number;

	/**
	 * Floating point camera position, x-axis
	 * @see #getCameraX()
	 * @return
	 */
	getCameraFpX(): number;

	/**
	 * Gets the y-axis coordinate of the camera.
	 * <p>
	 * This value is a local coordinate value similar to
	 * {@link #getLocalDestinationLocation()}.
	 *
	 * @return the camera y coordinate
	 */
	getCameraY(): number;

	/**
	 * Floating point camera position, y-axis
	 * @see #getCameraY()
	 * @return
	 */
	getCameraFpY(): number;

	/**
	 * Gets the z-axis coordinate of the camera.
	 * <p>
	 * This value is a local coordinate value similar to
	 * {@link #getLocalDestinationLocation()}.
	 *
	 * @return the camera z coordinate
	 */
	getCameraZ(): number;

	/**
	 * Floating point camera position, z-axis
	 * @see #getCameraZ()
	 * @return
	 */
	getCameraFpZ(): number;

	/**
	 * Gets the pitch of the camera.
	 * <p>
	 * The value returned by this method is measured in JAU, or Jagex
	 * Angle Unit, which is 1/1024 of a revolution.
	 *
	 * @return the camera pitch
	 */
	getCameraPitch(): number;

	/**
	 * Floating point camera pitch.
	 * @see #getCameraPitch()
	 * @return
	 */
	getCameraFpPitch(): number;

	/**
	 * Gets the yaw of the camera.
	 *
	 * @return the camera yaw
	 */
	getCameraYaw(): number;

	/**
	 * Floating point camera yaw
	 * @see #getCameraYaw()
	 * @return
	 */
	getCameraFpYaw(): number;

	/**
	 * Gets the current world number of the logged in player.
	 *
	 * @return the logged in world number
	 */
	getWorld(): number;

	/**
	 * Gets the canvas height
	 * @return
	 */
	getCanvasHeight(): number;

	/**
	 * Gets the canvas width
	 * @return
	 */
	getCanvasWidth(): number;

	/**
	 * Gets the height of the viewport.
	 *
	 * @return the viewport height
	 */
	getViewportHeight(): number;

	/**
	 * Gets the width of the viewport.
	 *
	 * @return the viewport width
	 */
	getViewportWidth(): number;

	/**
	 * Gets the x-axis offset of the viewport.
	 *
	 * @return the x-axis offset
	 */
	getViewportXOffset(): number;

	/**
	 * Gets the y-axis offset of the viewport.
	 *
	 * @return the y-axis offset
	 */
	getViewportYOffset(): number;

	/**
	 * Gets the scale of the world (zoom value).
	 *
	 * @return the world scale
	 */
	getScale(): number;

	/**
	 * Gets the current position of the mouse on the canvas.
	 *
	 * @return the mouse canvas position
	 */
	getMouseCanvasPosition(): Point;

	/**
	 * Gets a 3D array containing the heights of tiles in the
	 * current scene.
	 *
	 * @return the tile heights
	 */
	getTileHeights(): number[][][];

	/**
	 * Gets a 3D array containing the settings of tiles in the
	 * current scene.
	 *
	 * @return the tile settings
	 */
	getTileSettings(): number[][][];

	/**
	 * Gets the current plane the player is on.
	 * <p>
	 * This value indicates the current map level above ground level, where
	 * ground level is 0. For example, going up a ladder in Lumbridge castle
	 * will put the player on plane 1.
	 * <p>
	 * Note: This value will never be below 0. Basements and caves below ground
	 * level use a tile offset and are still considered plane 0 by the game.
	 *
	 * @return the plane
	 */
	getPlane(): number;

	/**
	 * Get the max plane being rendered on the scene. This is usually the max plane, 3, unless roofs are hidden,
	 * where it will be the current plane.
	 * @return
	 */
	getSceneMaxPlane(): number;

	/**
	 * Gets the current scene
	 */
	getScene(): Scene;

	/**
	 * Gets the logged in player instance.
	 *
	 * @return the logged in player
	 */
	getLocalPlayer(): Player;

	/**
	 * Get the local player's follower, such as a pet
	 * @return
	 */

	getFollower(): NPC | null;

	/**
	 * Gets the item composition corresponding to an items ID.
	 *
	 * @param id the item ID
	 * @return the corresponding item composition
	 * @see ItemID
	 */

	getItemDefinition(id: number): ItemComposition;

	/**
	 * Creates an item icon sprite with passed variables.
	 *
	 * @param itemId the item ID
	 * @param quantity the item quantity
	 * @param border whether to draw a border
	 * @param shadowColor the shadow color
	 * @param stackable whether the item is stackable
	 * @param noted whether the item is noted
	 * @param scale the scale of the sprite
	 * @return the created sprite
	 */

	createItemSprite(
		itemId: number,
		quantity: number,
		border: number,
		shadowColor: number,
		stackable: number,
		noted: boolean,
		scale: number,
	): SpritePixels | null;

	/**
	 * Get the item model cache. These models are used for drawing widgets of type {@link net.runelite.api.widgets.WidgetType#MODEL}
	 * and inventory item icons
	 * @return
	 */
	getItemModelCache(): NodeCache;

	/**
	 * Get the item sprite cache. These are 2d SpritePixels which are used to raster item images on the inventory and
	 * on widgets of type {@link net.runelite.api.widgets.WidgetType#GRAPHIC}
	 * @return
	 */
	getItemSpriteCache(): NodeCache;

	/**
	 * Loads and creates the sprite images of the passed archive and file IDs.
	 *
	 * @param source the sprite index
	 * @param archiveId the sprites archive ID
	 * @param fileId the sprites file ID
	 * @return the sprite image of the file
	 */

	getSprites(
		source: IndexDataBase,
		archiveId: number,
		fileId: number,
	): SpritePixels[] | null;

	/**
	 * Gets the sprite index.
	 */
	getIndexSprites(): IndexDataBase;

	/**
	 * Gets the script index.
	 */
	getIndexScripts(): IndexDataBase;

	/**
	 * Gets the config index.
	 */
	getIndexConfig(): IndexDataBase;

	/**
	 * Gets an index by id
	 */
	getIndex(id: number): IndexDataBase;

	/**
	 * Returns the x-axis base coordinate.
	 * <p>
	 * This value is the x-axis world coordinate of tile (0, 0) in
	 * the current scene (ie. the bottom-left most coordinates in the scene).
	 *
	 * @return the base x-axis coordinate
	 */
	getBaseX(): number;

	/**
	 * Returns the y-axis base coordinate.
	 * <p>
	 * This value is the y-axis world coordinate of tile (0, 0) in
	 * the current scene (ie. the bottom-left most coordinates in the scene).
	 *
	 * @return the base y-axis coordinate
	 */
	getBaseY(): number;

	/**
	 * Gets the current mouse button that is pressed.
	 *
	 * @return the pressed mouse button
	 */
	getMouseCurrentButton(): number;

	/**
	 * Gets the currently selected tile. (ie. last right clicked tile)
	 *
	 * @return the selected tile
	 */

	getSelectedSceneTile(): Tile | null;

	/**
	 * Checks whether a widget is currently being dragged.
	 *
	 * @return true if dragging a widget, false otherwise
	 */
	isDraggingWidget(): boolean;

	/**
	 * Gets the widget currently being dragged.
	 *
	 * @return the dragged widget, null if not dragging any widget
	 */

	getDraggedWidget(): Widget | null;

	/**
	 * Gets the widget that is being dragged on.
	 * <p>
	 * The widget being dragged has the {@link net.runelite.api.widgets.WidgetConfig#DRAG}
	 * flag set, and is the widget currently under the dragged widget.
	 *
	 * @return the dragged on widget, null if not dragging any widget
	 */

	getDraggedOnWidget(): Widget | null;

	/**
	 * Sets the widget that is being dragged on.
	 *
	 * @param widget the new dragged on widget
	 */
	setDraggedOnWidget(widget: Widget): void;

	/**
	 * Get the number of client cycles the current dragged widget
	 * has been dragged for.
	 *
	 * @return
	 */
	getDragTime(): number;

	/**
	 * Gets Interface ID of the root widget
	 */

	getTopLevelInterfaceId(): number;

	/**
	 * Gets the root widgets.
	 *
	 * @return the root widgets
	 */
	getWidgetRoots(): Widget[];

	/**
	 * Gets a widget corresponding to the passed widget info.
	 *
	 * @param widget the widget info
	 * @return the widget
	 */

	getWidget(widget: WidgetInfo): Widget | null;

	/**
	 * Gets a widget by its raw group ID and child ID.
	 *
	 * @param groupId the group ID
	 * @param childId the child widget ID
	 * @return the widget corresponding to the group and child pair
	 */

	getWidget(groupId: number, childId: number): Widget | null;

	/**
	 * Gets a widget by its component id.
	 *
	 * @param componentId the component id
	 */

	getWidget(componentId: number): Widget | null;

	/**
	 * Gets an array containing the x-axis canvas positions
	 * of all widgets.
	 *
	 * @return array of x-axis widget coordinates
	 */
	getWidgetPositionsX(): number[];

	/**
	 * Gets an array containing the y-axis canvas positions
	 * of all widgets.
	 *
	 * @return array of y-axis widget coordinates
	 */
	getWidgetPositionsY(): number[];

	/**
	 * Gets the current run energy of the logged in player.
	 *
	 * @return the run energy in units of 1/100th of an percentage
	 */
	getEnergy(): number;

	/**
	 * Gets the current weight of the logged in player.
	 *
	 * @return the weight
	 */
	getWeight(): number;

	/**
	 * Gets an array of options that can currently be used on other players.
	 * <p>
	 * For example, if the player is in a PVP area the "Attack" option
	 * will become available in the array. Otherwise, it won't be there.
	 *
	 * @return an array of options
	 */
	getPlayerOptions(): string[];

	/**
	 * Gets an array of whether an option is enabled or not.
	 *
	 * @return the option priorities
	 */
	getPlayerOptionsPriorities(): boolean[];

	/**
	 * Gets an array of player menu types.
	 *
	 * @return the player menu types
	 */
	getPlayerMenuTypes(): number[];

	/**
	 * Gets a list of all RuneScape worlds.
	 *
	 * @return world list
	 */
	getWorldList(): World[];

	/**
	 * Create a new menu entry
	 * @param idx the index to create the menu entry at. Accepts negative indexes eg. -1 inserts at the end.
	 * @return the newly created menu entry
	 */
	createMenuEntry(idx: number): MenuEntry;

	/**
	 * Gets an array of currently open right-click menu entries that can be
	 * clicked and activated.
	 *
	 * @return array of open menu entries
	 */
	getMenuEntries(): MenuEntry[];

	/**
	 * Sets the array of open menu entries.
	 * <p>
	 * This method should typically be used in the context of the {@link net.runelite.api.events.MenuOpened}
	 * event, since setting the menu entries will be overwritten the next frame
	 *
	 * @param entries new array of open menu entries
	 */
	setMenuEntries(entries: MenuEntry[]): void;

	/**
	 * Checks whether a right-click menu is currently open.
	 *
	 * @return true if a menu is open, false otherwise
	 */
	isMenuOpen(): boolean;

	/**
	 * Returns whether the currently open menu is scrollable.
	 * @return
	 */
	isMenuScrollable(): boolean;

	/**
	 * Get the number of entries the currently open menu has been scrolled down.
	 * @return
	 */
	getMenuScroll(): number;

	/**
	 * Set the number of entries the currently open menu has been scrolled down.
	 * @param scroll
	 */
	setMenuScroll(scroll: number): void;

	/**
	 * Get the menu x location. Only valid if the menu is open.
	 *
	 * @return the menu x location
	 */
	getMenuX(): number;

	/**
	 * Get the menu y location. Only valid if the menu is open.
	 *
	 * @return the menu y location
	 */
	getMenuY(): number;

	/**
	 * Get the menu height. Only valid if the menu is open.
	 *
	 * @return the menu height
	 */
	getMenuHeight(): number;

	/**
	 * Get the menu width. Only valid if the menu is open.
	 *
	 * @return the menu width
	 */
	getMenuWidth(): number;

	/**
	 * Gets the angle of the map, or target camera yaw.
	 *
	 * @return the map angle
	 * @see #getCameraYawTarget()
	 */

	getMapAngle(): number;

	/**
	 * Checks whether the client window is currently resized.
	 *
	 * @return true if resized, false otherwise
	 */
	isResized(): boolean;

	/**
	 * Gets the client revision number.
	 *
	 * @return the revision
	 */
	getRevision(): number;

	/**
	 * Gets an array of map region IDs that are currently loaded.
	 *
	 * @return the map regions
	 */
	getMapRegions(): number[];

	/**
	 * Contains a 3D array of template chunks for instanced areas.
	 * <p>
	 * The array returned is of format [z][x][y], where z is the
	 * plane, x and y the x-axis and y-axis coordinates of a tile
	 * divided by the size of a chunk.
	 * <p>
	 * The bits of the int value held by the coordinates are -1 if there is no data,
	 * structured in the following format:
	 * <pre>{@code
	 *  0                   1                   2                   3
	 *  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
	 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
	 * | |rot|     y chunk coord     |    x chunk coord    |pln|       |
	 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
	 * }</pre>
	 * @return the array of instance template chunks
	 * @see Constants#CHUNK_SIZE
	 * @see InstanceTemplates
	 */
	getInstanceTemplateChunks(): number[][][];

	/**
	 * Returns a 2D array containing XTEA encryption keys used to decrypt
	 * map region files.
	 * <p>
	 * The array maps the region keys at index {@code n} to the region
	 * ID held in {@link #getMapRegions()} at {@code n}.
	 * <p>
	 * The array of keys for the region make up a 128-bit encryption key
	 * spread across 4 integers.
	 *
	 * @return the XTEA encryption keys
	 */
	getXteaKeys(): number[][];

	/**
	 * Gets an array of all client varplayers.
	 *
	 * @return local player variables
	 */

	getVarps(): number[];

	/**
	 * Get an array of all server varplayers. These vars are only
	 * modified by the server, and so represent the server's idea of
	 * the varp values.
	 * @return the server varps
	 */

	getServerVarps(): number[];

	/**
	 * Gets an array of all client variables.
	 */

	getVarcMap(): Map<number, Object>;

	/**
	 * Gets a value corresponding to the passed varbit.
	 *
	 * @param varbit the varbit id
	 * @return the value
	 * @see Client#getVarbitValue(int)
	 */

	getVar(varbit: number): number;

	/**
	 * Gets the value of the given varbit.
	 *
	 * @param varbit the varbit id
	 * @return the value
	 */
	getVarbitValue(varbit: number): number;

	/**
	 * Gets the value of the given varbit.
	 * This returns the server's idea of the value, not the client's. This is
	 * specifically the last value set by the server regardless of changes to
	 * the var by the client.
	 * @param varbit the varbit id
	 * @return the value
	 */
	getServerVarbitValue(varbit: number): number;

	/**
	 * Gets the value of a given VarPlayer.
	 *
	 * @param varpId the VarPlayer id
	 * @return the value
	 */
	getVarpValue(varpId: number): number;

	/**
	 * Gets the value of a given VarPlayer.
	 * This returns the server's idea of the value, not the client's. This is
	 * specifically the last value set by the server regardless of changes to
	 * the var by the client.
	 *
	 * @param varpId the VarPlayer id
	 * @return the value
	 */
	getServerVarpValue(varpId: number): number;

	/**
	 * Gets the value of a given VarClientInt
	 *
	 * @param var the {@link VarClientInt}
	 * @return the value
	 */
	getVarcIntValue(varc: number): number;

	/**
	 * Gets the value of a given VarClientStr
	 *
	 * @param var the {@link VarClientStr}
	 * @return the value
	 */
	getVarcStrValue(varc: number): string;

	/**
	 * Sets a VarClientString to the passed value
	 *
	 * @param var the {@link VarClientStr}
	 * @param value the new value
	 */
	setVarcStrValue(varc: number, value: string): void;

	/**
	 * Sets a VarClientInt to the passed value
	 *
	 * @param var the {@link VarClientInt}
	 * @param value the new value
	 */
	setVarcIntValue(varc: number, value: number): void;

	/**
	 * Sets the value of a varbit
	 *
	 * @param varbit the varbit id
	 * @param value the new value
	 */
	setVarbit(varbit: number, value: number): void;

	/**
	 * Gets the varbit composition for a given varbit id
	 *
	 * @param id
	 * @return
	 */

	getVarbit(id: number): VarbitComposition | null;

	/**
	 * Gets the value of a given variable.
	 *
	 * @param varps passed varbits
	 * @param varbitId the variable ID
	 * @return the value
	 * @see Varbits
	 */

	getVarbitValue(varps: number[], varbitId: number): number;

	/**
	 * Sets the value of a given variable.
	 *
	 * @param varps passed varbits
	 * @param varbit the variable
	 * @param value the value
	 * @see Varbits
	 */

	setVarbitValue(varps: number[], varbit: number, value: number): void;

	/**
	 * Mark the given varp as changed, causing var listeners to be
	 * triggered next tick
	 * @param varp
	 */
	queueChangedVarp(varp: number): void;

	/**
	 * Open an interface.
	 * @param componentId component id to open the interface at
	 * @param interfaceId the interface to open
	 * @param modalMode see {@link WidgetModalMode}
	 * @throws IllegalStateException if the component does not exist or it not a layer, or the interface is already
	 * open on a different component
	 * @return the {@link WidgetNode} for the interface. This should be closed later by calling
	 * {{@link #closeInterface(WidgetNode, boolean)}.
	 */
	openInterface(
		componentId: number,
		interfaceId: number,
		modalMode: number,
	): WidgetNode;

	/**
	 * Close an interface
	 * @param interfaceNode the {@link WidgetNode} linking the interface into the component tree
	 * @param unload whether to null the client's widget table
	 * @throws IllegalArgumentException if the interfaceNode is not linked into the component tree
	 */
	closeInterface(interfaceNode: WidgetNode, unload: boolean): void;

	/**
	 * Gets the widget flags table.
	 *
	 * @return the widget flags table
	 */
	getWidgetFlags(): HashTable<IntegerNode>;

	/**
	 * Gets the widget node component table.
	 *
	 * @return the widget node component table
	 * @see WidgetNode
	 */
	getComponentTable(): HashTable<WidgetNode>;

	/**
	 * Gets an array of current grand exchange offers.
	 *
	 * @return all grand exchange offers
	 */
	getGrandExchangeOffers(): GrandExchangeOffer[];

	/**
	 * Checks whether or not a prayer is currently active.
	 *
	 * @param prayer the prayer
	 * @return true if the prayer is active, false otherwise
	 */
	isPrayerActive(prayer: Prayer): boolean;

	/**
	 * Gets the current experience towards a skill.
	 *
	 * @param skill the skill
	 * @return the experience
	 */
	getSkillExperience(skill: Skill): number;

	/**
	 * Get the total experience of the player
	 *
	 * @return
	 */
	getOverallExperience(): number;

	/**
	 * Refreshes the chat.
	 */
	refreshChat(): void;

	/**
	 * Gets the map of chat buffers.
	 *
	 * @return the chat buffers
	 */
	getChatLineMap(): Map<Number, ChatLineBuffer>;

	/**
	 * Map of message node id to message node
	 *
	 * @return the map
	 */
	getMessages(): IterableHashTable<MessageNode>;

	/**
	 * Gets the object composition corresponding to an objects ID.
	 *
	 * @param objectId the object ID
	 * @return the corresponding object composition
	 * @see ObjectID
	 */
	getObjectDefinition(objectId: number): ObjectComposition;

	/**
	 * Gets the NPC composition corresponding to an NPCs ID.
	 *
	 * @param npcId the npc ID
	 * @return the corresponding NPC composition
	 * @see NpcID
	 */
	getNpcDefinition(npcId: number): NPCComposition;

	/**
	 * Gets the {@link StructComposition} for a given struct ID
	 *
	 * @see StructID
	 */
	getStructComposition(structID: number): StructComposition;

	/**
	 * Gets the client's cache of in memory struct compositions
	 */
	getStructCompositionCache(): NodeCache;

	/**
	 * Gets a entry out of a DBTable Row
	 */
	getDBTableField(
		rowID: number,
		column: number,
		tupleIndex: number,
	): Object[];

	getDBRowConfig(rowID: number): DBRowConfig;

	/**
	 * Uses an index to find rows containing a certain value in a column.
	 * An index must exist for this column.
	 */
	getDBRowsByValue(
		table: number,
		column: number,
		tupleIndex: number,
		value: Object,
	): List<number>;

	/**
	 * Get a map element config by id
	 *
	 * @param id the id
	 */
	getMapElementConfig(id: number): MapElementConfig;

	/**
	 * Gets a sprite of the map scene
	 *
	 * @return the sprite
	 */
	getMapScene(): IndexedSprite[];

	/**
	 * Gets an array of currently drawn mini-map dots.
	 *
	 * @return all mini-map dots
	 */
	getMapDots(): SpritePixels[];

	/**
	 * Gets the local clients game cycle.
	 * <p>
	 * Note: This value is incremented every 20ms.
	 *
	 * @return the game cycle
	 */
	getGameCycle(): number;

	/**
	 * Gets an array of current map icon sprites.
	 *
	 * @return the map icons
	 */
	getMapIcons(): SpritePixels[];

	/**
	 * Gets an array of mod icon sprites.
	 *
	 * @return the mod icons
	 */
	getModIcons(): IndexedSprite[];

	/**
	 * Replaces the current mod icons with a new array.
	 *
	 * @param modIcons the new mod icons
	 */
	setModIcons(modIcons: IndexedSprite[]): void;

	/**
	 * Creates an empty indexed sprite.
	 *
	 * @return the sprite
	 */
	createIndexedSprite(): IndexedSprite;

	/**
	 * Creates a sprite image with given width and height containing the
	 * pixels.
	 *
	 * @param pixels the pixels
	 * @param width the width
	 * @param height the height
	 * @return the sprite image
	 */
	createSpritePixels(
		pixels: number[],
		width: number,
		height: number,
	): SpritePixels;

	/**
	 * Gets the location of the local player.
	 *
	 * @return the local player location
	 */

	getLocalDestinationLocation(): LocalPoint | null;

	/**
	 * Create a projectile.
	 * @param id projectile/spotanim id
	 * @param plane plane the projectile is on
	 * @param startX local x coordinate the projectile starts at
	 * @param startY local y coordinate the projectile starts at
	 * @param startZ local z coordinate the projectile starts at - includes tile height
	 * @param startCycle cycle the project starts
	 * @param endCycle cycle the projectile ends
	 * @param slope
	 * @param startHeight start height of projectile - excludes tile height
	 * @param endHeight end height of projectile - excludes tile height
	 * @param target optional actor target
	 * @param targetX target x - if an actor target is supplied should be the target x
	 * @param targetY target y - if an actor target is supplied should be the target y
	 * @return the new projectile
	 */

	createProjectile(
		id: number,
		plane: number,
		startX: number,
		startY: number,
		startZ: number,
		startCycle: number,
		endCycle: number,
		slope: number,
		startHeight: number,
		endHeight: number,
		target: Actor,
		targetX: number,
		targetY: number,
	): Projectile;

	/**
	 * Gets a list of all projectiles currently spawned.
	 *
	 * @return all projectiles
	 */
	getProjectiles(): Deque<Projectile>;

	/**
	 * Gets a list of all graphics objects currently drawn.
	 *
	 * @return all graphics objects
	 */
	getGraphicsObjects(): Deque<GraphicsObject>;

	/**
	 * Creates a RuneLiteObject, which is a modified {@link GraphicsObject}
	 */
	createRuneLiteObject(): RuneLiteObject;

	/**
	 * Loads an unlit model from the cache. The returned model shares
	 * data such as faces, face colors, face transparencies, and vertex points with
	 * other models. If you want to mutate these you MUST call the relevant {@code cloneX}
	 * method.
	 *
	 * @see ModelData#cloneColors()
	 *
	 * @param id the ID of the model
	 * @return the model or null if it is loading or nonexistent
	 */

	loadModelData(id: number): ModelData | null;

	mergeModels(models: ModelData[], length: number): ModelData;
	mergeModels(...models: any[]): ModelData; // FIXME: Uncertain why this is broken

	/**
	 * Loads and lights a model from the cache
	 *
	 * This is equivalent to {@code loadModelData(id).light()}
	 *
	 * @param id the ID of the model
	 * @return the model or null if it is loading or nonexistent
	 */

	loadModel(id: number): Model | null;

	/**
	 * Loads a model from the cache and also recolors it
	 *
	 * @param id the ID of the model
	 * @param colorToFind array of hsl color values to find in the model to replace
	 * @param colorToReplace array of hsl color values to replace in the model
	 * @return the model or null if it is loading or nonexistent
	 */

	loadModel(
		id: number,
		colorToFind: number[],
		colorToReplace: number[],
	): Model | null;

	/**
	 * Loads an animation from the cache
	 *
	 * @param id the ID of the animation. Any int is allowed, but implementations in the client
	 * should be defined in {@link AnimationID}
	 */
	loadAnimation(id: number): Animation;

	/**
	 * Gets the music volume
	 * @return volume 0-255 inclusive
	 */
	getMusicVolume(): number;

	/**
	 * Sets the music volume
	 * @param volume 0-255 inclusive
	 */
	setMusicVolume(volume: number): void;

	/**
	 * Play a sound effect at the player's current location. This is how UI,
	 * and player-generated (e.g. mining, woodcutting) sound effects are
	 * normally played.
	 *
	 * @param id the ID of the sound to play. Any int is allowed, but see
	 * {@link SoundEffectID} for some common ones
	 */
	playSoundEffect(id: number): void;

	/**
	 * Play a sound effect from some point in the world.
	 *
	 * @param id the ID of the sound to play. Any int is allowed, but see
	 * {@link SoundEffectID} for some common ones
	 * @param x the ground coordinate on the x axis
	 * @param y the ground coordinate on the y axis
	 * @param range the number of tiles away that the sound can be heard
	 * from
	 */
	playSoundEffect(id: number, x: number, y: number, range: number): void;

	/**
	 * Play a sound effect from some point in the world.
	 *
	 * @param id the ID of the sound to play. Any int is allowed, but see
	 * {@link SoundEffectID} for some common ones
	 * @param x the ground coordinate on the x axis
	 * @param y the ground coordinate on the y axis
	 * @param range the number of tiles away that the sound can be heard
	 * from
	 * @param delay the amount of frames before the sound starts playing
	 */
	playSoundEffect(
		id: number,
		x: number,
		y: number,
		range: number,
		delay: number,
	): void;

	/**
	 * Plays a sound effect, even if the player's sound effect volume is muted.
	 *
	 * @param id     the ID of the sound effect - {@link SoundEffectID}
	 * @param volume the volume to play the sound effect at, see {@link SoundEffectVolume} for values used
	 *               in the settings interface. if the sound effect volume is not muted, uses the set volume
	 */
	playSoundEffect(id: number, volume: number): void;

	/**
	 * Gets the clients graphic buffer provider.
	 *
	 * @return the buffer provider
	 */
	getBufferProvider(): BufferProvider;

	/**
	 * Gets the amount of client ticks since the last mouse movement occurred.
	 *
	 * @return amount of idle mouse ticks
	 * @see Constants#CLIENT_TICK_LENGTH
	 */
	getMouseIdleTicks(): number;

	/**
	 * Gets the time at which the last mouse press occurred in milliseconds since
	 * the UNIX epoch.
	 */
	getMouseLastPressedMillis(): number;

	/**
	 * Gets the amount of client ticks since the last keyboard press occurred.
	 *
	 * @return amount of idle keyboard ticks
	 * @see Constants#CLIENT_TICK_LENGTH
	 */
	getKeyboardIdleTicks(): number;

	/**
	 * Changes how game behaves based on memory mode. Low memory mode skips
	 * drawing of all floors and renders ground textures in low quality.
	 *
	 * @param lowMemory if we are running in low memory mode or not
	 */
	changeMemoryMode(lowMemory: boolean): void;

	/**
	 * Get the item container for an inventory.
	 *
	 * @param inventory the inventory type
	 * @return the item container
	 * @see InventoryID
	 */

	getItemContainer(inventory: InventoryID): ItemContainer | null;

	/**
	 * Get an item container by id
	 *
	 * @param id the inventory id
	 * @return the item container
	 * @see InventoryID
	 */

	getItemContainer(id: number): ItemContainer | null;

	/**
	 * Get all item containers
	 * @return
	 */
	getItemContainers(): HashTable<ItemContainer>;

	/**
	 * Gets the length of the cs2 vm's int stack
	 */
	getIntStackSize(): number;

	/**
	 * Sets the length of the cs2 vm's int stack
	 */
	setIntStackSize(stackSize: number): void;

	/**
	 * Gets the cs2 vm's int stack
	 */
	getIntStack(): number[];

	/**
	 * Gets the length of the cs2 vm's string stack
	 */
	getStringStackSize(): number;

	/**
	 * Sets the length of the cs2 vm's string stack
	 */
	setStringStackSize(stackSize: number): void;

	/**
	 * Gets the cs2 vm's string stack
	 */
	getStringStack(): string[];

	/**
	 * Gets the cs2 vm's active widget
	 *
	 * This is used for all {@code cc_*} operations with a {@code 0} operand
	 */
	getScriptActiveWidget(): Widget;

	/**
	 * Gets the cs2 vm's "dot" widget
	 *
	 * This is used for all {@code .cc_*} operations with a {@code 1} operand
	 */
	getScriptDotWidget(): Widget;

	/**
	 * Checks whether a player is on the friends list.
	 *
	 * @param name the name of the player
	 * @param mustBeLoggedIn if they player is online
	 * @return true if the player is friends
	 */
	isFriended(name: string, mustBeLoggedIn: boolean): boolean;

	/**
	 * Retrieve the friends chat manager
	 *
	 * @return
	 */

	getFriendsChatManager(): FriendsChatManager | null;

	/**
	 * Retrieve the nameable container containing friends
	 *
	 * @return
	 */
	getFriendContainer(): FriendContainer;

	/**
	 * Retrieve the nameable container containing ignores
	 *
	 * @return
	 */
	getIgnoreContainer(): NameableContainer<Ignore>;

	/**
	 * Gets the clients saved preferences.
	 *
	 * @return the client preferences
	 */
	getPreferences(): Preferences;

	/**
	 * Get the target camera yaw.
	 * The target yaw is the yaw the camera should use based on player input.
	 * The actual camera yaw, from {@link #getCameraYaw()}, is what the camera
	 * is actually using, which can be overridden by eg. cutscenes.
	 *
	 * @return the target camera yaw
	 */
	getCameraYawTarget(): number;

	/**
	 * Get the target camera pitch
	 * The target pitch is the pitch the camera should use based on player input.
	 * The actual camera pitch, from {@link #getCameraPitch()} ()}, is what the camera
	 * is actually using, which can be overridden by eg. cutscenes.
	 *
	 * @return the target camera pitch
	 */
	getCameraPitchTarget(): number;

	/**
	 * Set the target camera yaw
	 *
	 * @param cameraYawTarget target camera yaw
	 */
	setCameraYawTarget(cameraYawTarget: number): void;

	/**
	 * Set the target camera pitch
	 *
	 * @param cameraPitchTarget target camera pitch
	 */
	setCameraPitchTarget(cameraPitchTarget: number): void;

	/**
	 * Sets the camera speed
	 * @param speed
	 */
	setCameraSpeed(speed: number): void;

	/**
	 * Sets the mask for which mouse buttons control the camera.
	 * Use 0 for the default behavior of mouse button 4 if "middle mouse moves camera" is on.
	 * @param mask
	 */
	setCameraMouseButtonMask(mask: number): void;

	/**
	 * Sets whether the camera pitch can exceed the normal limits set
	 * by the RuneScape client.
	 *
	 * @param enabled new camera pitch relaxer value
	 */
	setCameraPitchRelaxerEnabled(enabled: boolean): void;

	/**
	 * Sets if the moving the camera horizontally should be backwards
	 */
	setInvertYaw(invertYaw: boolean): void;

	/**
	 * Sets if the moving the camera vertically should be backwards
	 */
	setInvertPitch(invertPitch: boolean): void;

	/**
	 * Gets the world map overview.
	 *
	 * @return the world map overview
	 * @see #getWorldMap()
	 */

	getRenderOverview(): RenderOverview;

	/**
	 * Get the world map
	 */
	getWorldMap(): WorldMap;

	/**
	 * Checks whether the client is in stretched mode.
	 *
	 * @return true if the client is in stretched mode, false otherwise
	 */
	isStretchedEnabled(): boolean;

	/**
	 * Sets the client stretched mode state.
	 *
	 * @param state new stretched mode state
	 */
	setStretchedEnabled(state: boolean): void;

	/**
	 * Checks whether the client is using fast
	 * rendering techniques when stretching the canvas.
	 *
	 * @return true if stretching is fast rendering, false otherwise
	 */
	isStretchedFast(): boolean;

	/**
	 * Sets whether to use fast rendering techniques
	 * when stretching the canvas.
	 *
	 * @param state new fast rendering state
	 */
	setStretchedFast(state: boolean): void;

	/**
	 * Sets whether to force integer scale factor by rounding scale
	 * factors towards {@code zero} when stretching.
	 *
	 * @param state new integer scaling state
	 */
	setStretchedIntegerScaling(state: boolean): void;

	/**
	 * Sets whether to keep aspect ratio when stretching.
	 *
	 * @param state new keep aspect ratio state
	 */
	setStretchedKeepAspectRatio(state: boolean): void;

	/**
	 * Sets the scaling factor when scaling resizable mode.
	 *
	 * @param factor new scaling factor
	 */
	setScalingFactor(factor: number): void;

	/**
	 * Invalidates cached dimensions that are
	 * used for stretching and scaling.
	 *
	 * @param resize true to tell the game to
	 *               resize the canvas on the next frame,
	 *               false otherwise.
	 */
	invalidateStretching(resize: boolean): void;

	/**
	 * Gets the current stretched dimensions of the client.
	 *
	 * @return the stretched dimensions
	 */
	getStretchedDimensions(): Dimension;

	/**
	 * Gets the real dimensions of the client before being stretched.
	 *
	 * @return the real dimensions
	 */
	getRealDimensions(): Dimension;

	/**
	 * Changes the selected world to log in to.
	 * <p>
	 * Note: this method will have no effect unless {@link GameState}
	 * is {@link GameState#LOGIN_SCREEN}.
	 *
	 * @param world the world to switch to
	 */
	changeWorld(world: World): void;

	/**
	 * Creates a new instance of a world.
	 */
	createWorld(): World;

	/**
	 * Draws an instance map for the current viewed plane.
	 *
	 * @param z the plane
	 * @return the map sprite
	 */
	drawInstanceMap(z: number): SpritePixels;

	/**
	 * Executes a client script from the cache
	 *
	 * This method must be ran on the client thread and is not reentrant
	 *
	 * This method is shorthand for {@code client.createScriptEvent(args).run()}
	 *
	 * @param args the script id, then any additional arguments to execute the script with
	 * @see ScriptID
	 */
	runScript(...args: any[]): void;

	/**
	 * Creates a blank ScriptEvent for executing a ClientScript2 script
	 *
	 * @param args the script id, then any additional arguments to execute the script with
	 * @see ScriptID
	 */
	createScriptEvent(...args: any[]): ScriptEvent;

	/**
	 * Checks whether or not there is any active hint arrow.
	 *
	 * @return true if there is a hint arrow, false otherwise
	 */
	hasHintArrow(): boolean;

	/**
	 * Gets the type of hint arrow currently displayed.
	 *
	 * @return the hint arrow type
	 */

	/**
	 * Clears the current hint arrow.
	 */
	clearHintArrow(): void;

	/**
	 * Sets a hint arrow to point to the passed location.
	 *
	 * @param point the location
	 */
	setHintArrow(point: WorldPoint): void;

	/**
	 * Sets the hint arrow to the passsed point
	 *
	 * @param point
	 */
	setHintArrow(point: LocalPoint): void;

	/**
	 * Sets a hint arrow to point to the passed player.
	 *
	 * @param player the player
	 */
	setHintArrow(player: Player): void;

	/**
	 * Sets a hint arrow to point to the passed NPC.
	 *
	 * @param npc the NPC
	 */
	setHintArrow(npc: NPC): void;

	/**
	 * Gets the world point that the hint arrow is directed at.
	 *
	 * @return hint arrow target
	 */
	getHintArrowPoint(): WorldPoint;

	/**
	 * Gets the player that the hint arrow is directed at.
	 *
	 * @return hint arrow target
	 */
	getHintArrowPlayer(): Player;

	/**
	 * Gets the NPC that the hint arrow is directed at.
	 *
	 * @return hint arrow target
	 */
	getHintArrowNpc(): NPC;

	/**
	 * Checks whether animation smoothing is enabled for players.
	 *
	 * @return true if player animation smoothing is enabled, false otherwise
	 */
	isInterpolatePlayerAnimations(): boolean;

	/**
	 * Sets the animation smoothing state for players.
	 *
	 * @param interpolate the new smoothing state
	 */
	setInterpolatePlayerAnimations(interpolate: boolean): void;

	/**
	 * Checks whether animation smoothing is enabled for NPC.
	 *
	 * @return true if NPC animation smoothing is enabled, false otherwise
	 */
	isInterpolateNpcAnimations(): boolean;

	/**
	 * Sets the animation smoothing state for NPCs.
	 *
	 * @param interpolate the new smoothing state
	 */
	setInterpolateNpcAnimations(interpolate: boolean): void;

	/**
	 * Checks whether animation smoothing is enabled for objects.
	 *
	 * @return true if object animation smoothing is enabled, false otherwise
	 */
	isInterpolateObjectAnimations(): boolean;

	/**
	 * Sets the animation smoothing state for objects.
	 *
	 * @param interpolate the new smoothing state
	 */
	setInterpolateObjectAnimations(interpolate: boolean): void;

	/**
	 * Checks whether the logged in player is in an instanced region.
	 *
	 * @return true if the player is in instanced region, false otherwise
	 */
	isInInstancedRegion(): boolean;

	/**
	 * Gets an array of tile collision data.
	 * <p>
	 * The index into the array is the plane/z-axis coordinate.
	 *
	 * @return the collision data
	 */

	getCollisionMaps(): CollisionData[] | null;

	getBoostedSkillLevels(): number[];

	getRealSkillLevels(): number[];

	getSkillExperiences(): number[];

	queueChangedSkill(skill: Skill): void;

	/**
	 * Gets a mapping of sprites to override.
	 * <p>
	 * The key value in the map corresponds to the ID of the sprite,
	 * and the value the sprite to replace it with.
	 */
	getSpriteOverrides(): Map<Number, SpritePixels>;

	/**
	 * Gets a mapping of widget sprites to override.
	 * <p>
	 * The key value in the map corresponds to the packed widget ID,
	 * and the value the sprite to replace the widgets sprite with.
	 */
	getWidgetSpriteOverrides(): Map<Number, SpritePixels>;

	/**
	 * Sets the compass sprite.
	 *
	 * @param spritePixels the new sprite
	 */
	setCompass(spritePixels: SpritePixels): void;

	/**
	 * Returns widget sprite cache, to be used with {@link Client#getSpriteOverrides()}
	 *
	 * @return the cache
	 */
	getWidgetSpriteCache(): NodeCache;

	/**
	 * Gets the current server tick count.
	 *
	 * @return the tick count
	 */
	getTickCount(): number;

	/**
	 * Sets the current server tick count.
	 *
	 * @param tickCount the new tick count
	 */
	setTickCount(tickCount: number): void;

	/**
	 * Sets the inventory drag delay in client game cycles (20ms).
	 *
	 * @param delay the number of game cycles to delay dragging
	 */

	setInventoryDragDelay(delay: number): void;

	/**
	 * Gets a set of current world types that apply to the logged in world.
	 *
	 * @return the types for current world
	 */
	getWorldType(): EnumSet<WorldType>;

	/**
	 * Gets the enabled state for the Oculus orb mode
	 */
	getOculusOrbState(): number;

	/**
	 * Sets the enabled state for the Oculus orb state
	 *
	 * @param state boolean enabled value
	 */
	setOculusOrbState(state: number): void;

	/**
	 * Sets the normal moving speed when using oculus orb (default value is 12)
	 */
	setOculusOrbNormalSpeed(speed: number): void;

	/**
	 * Gets local X coord where the camera is pointing when the Oculus orb is active
	 */
	getOculusOrbFocalPointX(): number;

	/**
	 * Gets local Y coord where the camera is pointing when the Oculus orb is active
	 */
	getOculusOrbFocalPointY(): number;

	/**
	 * Opens in-game world hopper interface
	 */
	openWorldHopper(): void;

	/**
	 * Hops using in-game world hopper widget to another world
	 * @param world target world to hop to
	 */
	hopToWorld(world: World): void;

	/**
	 * Sets the RGB color of the skybox
	 */
	setSkyboxColor(skyboxColor: number): void;

	/**
	 * Gets the RGB color of the skybox
	 */
	getSkyboxColor(): number;

	isGpu(): boolean;
	setGpuFlags(gpuflags: number): void;

	setExpandedMapLoading(chunks: number): void;
	getExpandedMapLoading(): number;

	get3dZoom(): number;
	getCenterX(): number;
	getCenterY(): number;

	getCameraX2(): number;
	getCameraY2(): number;
	getCameraZ2(): number;

	getTextureProvider(): TextureProvider;

	getRasterizer3D_clipMidX2(): number;
	getRasterizer3D_clipNegativeMidX(): number;
	getRasterizer3D_clipNegativeMidY(): number;
	getRasterizer3D_clipMidY2(): number;

	checkClickbox(
		model: Model,
		orientation: number,
		pitchSin: number,
		pitchCos: number,
		yawSin: number,
		yawCos: number,
		x: number,
		y: number,
		z: number,
		hash: number,
	): void;

	/**
	 * Is a widget is in target mode?
	 */
	isWidgetSelected(): boolean;

	/**
	 * Sets if a widget is in target mode
	 */
	setWidgetSelected(selected: boolean): void;

	/**
	 * Get the selected widget, such as a selected spell or selected item (eg. "Use")
	 * @return the selected widget
	 */

	getSelectedWidget(): Widget | null;

	/**
	 * Returns client item composition cache
	 */
	getItemCompositionCache(): NodeCache;

	/**
	 * Returns client object composition cache
	 * @return
	 */
	getObjectCompositionCache(): NodeCache;

	/**
	 * Returns the client {@link Animation} cache
	 */
	getAnimationCache(): NodeCache;

	/**
	 * Returns the array of cross sprites that appear and animate when left-clicking
	 */
	getCrossSprites(): SpritePixels[];

	getEnum(id: number): EnumComposition;

	/**
	 * Draws a menu in the 2010 interface style.
	 *
	 * @param alpha background transparency of the menu
	 */
	draw2010Menu(alpha: number): void;

	/**
	 * Draws a menu in the OSRS interface style.
	 *
	 * @param alpha background transparency of the menu
	 */
	drawOriginalMenu(alpha: number): void;

	resetHealthBarCaches(): void;

	/**
	 * Returns the max item index + 1 from cache
	 */
	getItemCount(): number;

	/**
	 * Makes all widgets behave as if they are {@link WidgetConfig#WIDGET_USE_TARGET}
	 */
	setAllWidgetsAreOpTargetable(value: boolean): void;

	/**
	 * Sets the result count for GE search
	 */
	setGeSearchResultCount(count: number): void;

	/**
	 * Sets the array of item ids for GE search
	 */
	setGeSearchResultIds(ids: number[]): void;

	/**
	 * Sets the starting index in the item id array for GE search
	 */
	setGeSearchResultIndex(index: number): void;

	/**
	 * Sets the image to be used for the login screen, provided as SpritePixels
	 * If the image is larger than half the width of fixed mode,
	 * it won't get mirrored to the other side of the screen
	 */
	setLoginScreen(pixels: SpritePixels): void;

	/**
	 * Sets whether the flames on the login screen should be rendered
	 */
	setShouldRenderLoginScreenFire(val: boolean): void;

	/**
	 * Test if a key is pressed
	 * @param keycode the keycode
	 * @return
	 * @see KeyCode
	 */
	isKeyPressed(keycode: number): boolean;

	/**
	 * Get the list of message ids for the recently received cross-world messages. The upper 32 bits of the
	 * id is the world id, the lower is a sequence number per-world.
	 *
	 * @return
	 */
	getCrossWorldMessageIds(): number[];

	/**
	 * Get the index of the next message to be inserted in the cross world message id list
	 *
	 * @return
	 */
	getCrossWorldMessageIdsIndex(): number;

	/**
	 * Get the primary clan channel the player is in.
	 * @return
	 */

	getClanChannel(): ClanChannel | null;

	/**
	 * Get the guest clan channel the player is in.
	 * @return
	 */

	getGuestClanChannel(): ClanChannel | null;

	/**
	 * Get clan settings for the clan the user is in.
	 * @return
	 */

	getClanSettings(): ClanSettings | null;

	/**
	 * Get the guest clan's settings.
	 * @return
	 */

	getGuestClanSettings(): ClanSettings | null;

	/**
	 * Get clan channel by id.
	 * @param clanId the clan id
	 * @return
	 * @see net.runelite.api.clan.ClanID
	 */

	getClanChannel(clanId: number): ClanChannel | null;

	/**
	 * Get clan settings by id
	 * @param clanId the clan id
	 * @return
	 * @see net.runelite.api.clan.ClanID
	 */

	getClanSettings(clanId: number): ClanSettings | null;

	setUnlockedFps(unlock: boolean): void;
	setUnlockedFpsTarget(fps: number): void;

	/**
	 * Gets the ambient sound effects
	 * @return
	 */
	getAmbientSoundEffects(): Deque<AmbientSoundEffect>;

	/**
	 * Set the amount of time until the client automatically logs out due to idle input.
	 * @param ticks client ticks
	 */
	setIdleTimeout(ticks: number): void;

	/**
	 * Get the amount of time until the client automatically logs out due to idle input.
	 * @return client ticks
	 */
	getIdleTimeout(): number;

	/**
	 * Get whether minimap zoom is enabled
	 * @return
	 */
	isMinimapZoom(): boolean;

	/**
	 * Set whether minimap zoom is enabled
	 * @param minimapZoom
	 */
	setMinimapZoom(minimapZoom: boolean): void;

	/**
	 * Gets the number of pixels per tile on the minimap. The default is 4.
	 * @return
	 */
	getMinimapZoom(): number;

	/**
	 * Set the number of pixels per tile on the minimap. The default is 4.
	 * @param zoom
	 */
	setMinimapZoom(zoom: number): void;

	/**
	 * Sets a callback to override the drawing of tiles on the minimap.
	 * Will be called per tile per frame.
	 */
	setMinimapTileDrawer(drawTile: TileFunction): void;

	getRasterizer(): Rasterizer;
}
