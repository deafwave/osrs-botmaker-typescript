/// <reference path="../../java/index.d.ts" />
/// <reference path="Actor.d.ts" />
/// <reference path="AmbientSoundEffect.d.ts" />
/// <reference path="Animation.d.ts" />
/// <reference path="BufferProvider.d.ts" />
/// <reference path="ChatLineBuffer.d.ts" />
/// <reference path="clan/ClanChannel.d.ts" />
/// <reference path="clan/ClanChannel.d.ts" />
/// <reference path="clan/ClanSettings.d.ts" />
/// <reference path="CollisionData.d.ts" />
/// <reference path="coords/WorldPoint.d.ts" />
/// <reference path="dbtable/DBRowConfig.d.ts" />
/// <reference path="Deque.d.ts" />
/// <reference path="EnumComposition.d.ts" />
/// <reference path="FriendContainer.d.ts" />
/// <reference path="FriendsChatManager.d.ts" />
/// <reference path="GameState.d.ts" />
/// <reference path="GrandExchangeOffer.d.ts" />
/// <reference path="GraphicsObject.d.ts" />
/// <reference path="HashTable.d.ts" />
/// <reference path="hooks/Callbacks.d.ts" />
/// <reference path="hooks/DrawCallbacks.d.ts" />
/// <reference path="Ignore.d.ts" />
/// <reference path="IndexDataBase.d.ts" />
/// <reference path="IndexedSprite.d.ts" />
/// <reference path="IntegerNode.d.ts" />
/// <reference path="InventoryID.d.ts" />
/// <reference path="ItemComposition.d.ts" />
/// <reference path="ItemContainer.d.ts" />
/// <reference path="MenuEntry.d.ts" />
/// <reference path="ModelData.d.ts" />
/// <reference path="NameableContainer.d.ts" />
/// <reference path="NodeCache.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="NPCComposition.d.ts" />
/// <reference path="ObjectComposition.d.ts" />
/// <reference path="Player.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="Prayer.d.ts" />
/// <reference path="Preferences.d.ts" />
/// <reference path="Projectile.d.ts" />
/// <reference path="Rasterizer.d.ts" />
/// <reference path="RenderOverview.d.ts" />
/// <reference path="RuneLiteObject.d.ts" />
/// <reference path="Scene.d.ts" />
/// <reference path="ScriptEvent.d.ts" />
/// <reference path="Skill.d.ts" />
/// <reference path="StructComposition.d.ts" />
/// <reference path="TextureProvider.d.ts" />
/// <reference path="Tile.d.ts" />
/// <reference path="TileFunction.d.ts" />
/// <reference path="VarbitComposition.d.ts" />
/// <reference path="vars/AccountType.d.ts" />
/// <reference path="WidgetNode.d.ts" />
/// <reference path="widgets/Widget.d.ts" />
/// <reference path="widgets/WidgetInfo.d.ts" />
/// <reference path="World.d.ts" />
/// <reference path="worldmap/MapElementConfig.d.ts" />
/// <reference path="worldmap/WorldMap.d.ts" />

interface Client {
	addChatMessage(
		type: ChatMessageType,
		name: string,
		message: string,
		sender: string,
		postEvent?: boolean,
	): MessageNode | undefined;
	changeMemoryMode(lowMemory: boolean): void | undefined;
	changeWorld(world: World): void | undefined;
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
	): void | undefined;
	clearHintArrow(): void | undefined;
	closeInterface(
		interfaceNode: WidgetNode,
		unload: boolean,
	): void | undefined;
	createIndexedSprite(): IndexedSprite | undefined;
	createItemSprite(
		itemId: number,
		quantity: number,
		border: number,
		shadowColor: number,
		stackable: boolean,
		noted: boolean,
		scale: number,
	): SpritePixels | undefined;
	createMenuEntry(idx: number): MenuEntry | undefined;
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
	): Projectile | undefined;
	createRuneLiteObject(): RuneLiteObject | undefined;
	createScriptEvent(...args: any[]): ScriptEvent | undefined;
	createSpritePixels(
		pixels: number[],
		width: number,
		height: number,
	): SpritePixels | undefined;
	createWorld(): World | undefined;
	draw2010Menu(alpha: number): void | undefined;
	drawInstanceMap(z: number): SpritePixels | undefined;
	drawOriginalMenu(alpha: number): void | undefined;
	get3dZoom(): number | undefined;
	getAccountType(): AccountType | undefined;
	getAmbientSoundEffects(): Deque<AmbientSoundEffect> | undefined;
	getAnimationCache(): NodeCache | undefined;
	getBaseX(): number | undefined;
	getBaseY(): number | undefined;
	getBoostedSkillLevel(skill: Skill): number | undefined;
	getBoostedSkillLevels(): number[] | undefined;
	getBufferProvider(): BufferProvider | undefined;
	getBuildID(): string | undefined;
	getCachedNPCs(): NPC[] | undefined;
	getCachedPlayers(): Player[] | undefined;
	getCallbacks(): Callbacks | undefined;
	getCameraFpPitch(): number | undefined;
	getCameraFpX(): number | undefined;
	getCameraFpY(): number | undefined;
	getCameraFpYaw(): number | undefined;
	getCameraFpZ(): number | undefined;
	getCameraPitch(): number | undefined;
	getCameraPitchTarget(): number | undefined;
	getCameraX(): number | undefined;
	getCameraX2(): number | undefined;
	getCameraY(): number | undefined;
	getCameraY2(): number | undefined;
	getCameraYaw(): number | undefined;
	getCameraYawTarget(): number | undefined;
	getCameraZ(): number | undefined;
	getCameraZ2(): number | undefined;
	getCanvas(): Canvas | undefined;
	getCanvasHeight(): number | undefined;
	getCanvasWidth(): number | undefined;
	getCenterX(): number | undefined;
	getCenterY(): number | undefined;
	getChatLineMap(): Map<number, ChatLineBuffer> | undefined;
	getClanChannel(): ClanChannel | undefined;
	getClanChannel(clanId: number): ClanChannel | undefined;
	getClanSettings(): ClanSettings | undefined;
	getClanSettings(clanId: number): ClanSettings | undefined;
	getCollisionMaps(): CollisionData[] | undefined;
	getComponentTable(): HashTable<WidgetNode> | undefined;
	getCrossSprites(): SpritePixels[] | undefined;
	getCrossWorldMessageIds(): number[] | undefined;
	getCrossWorldMessageIdsIndex(): number | undefined;
	getCurrentLoginField(): number | undefined;
	getDBRowConfig(rowID: number): DBRowConfig | undefined;
	getDBRowsByValue(
		table: number,
		column: number,
		tupleIndex: number,
		value: any,
	): number[] | undefined;
	getDBTableField(
		rowID: number,
		column: number,
		tupleIndex: number,
	): any[] | undefined;
	getDraggedOnWidget(): Widget | undefined;
	getDraggedWidget(): Widget | undefined;
	getDragTime(): number | undefined;
	getDrawCallbacks(): DrawCallbacks | undefined;
	getEnergy(): number | undefined;
	getEnum(id: number): EnumComposition | undefined;
	getExpandedMapLoading(): number | undefined;
	getFollower(): NPC | undefined;
	getFPS(): number | undefined;
	getFriendContainer(): FriendContainer | undefined;
	getFriendsChatManager(): FriendsChatManager | undefined;
	getGameCycle(): number | undefined;
	getGameState(): GameState | undefined;
	getGrandExchangeOffers(): GrandExchangeOffer[] | undefined;
	getGraphicsObjects(): Deque<GraphicsObject> | undefined;
	getGuestClanChannel(): ClanChannel | undefined;
	getGuestClanSettings(): ClanSettings | undefined;
	getHintArrowNpc(): NPC | undefined;
	getHintArrowPlayer(): Player | undefined;
	getHintArrowPoint(): WorldPoint | undefined;
	getHintArrowType(): number | undefined;
	getIdleTimeout(): number | undefined;
	getIgnoreContainer(): NameableContainer<Ignore> | undefined;
	getIndex(id: number): IndexDataBase | undefined;
	getIndexConfig(): IndexDataBase | undefined;
	getIndexScripts(): IndexDataBase | undefined;
	getIndexSprites(): IndexDataBase | undefined;
	getInstanceTemplateChunks(): number[][][] | undefined;
	getIntStack(): number[] | undefined;
	getIntStackSize(): number | undefined;
	getItemCompositionCache(): NodeCache | undefined;
	getItemContainer(id: number): ItemContainer | undefined;
	getItemContainer(inventory: InventoryID): ItemContainer | undefined;
	getItemContainers(): HashTable<ItemContainer> | undefined;
	getItemCount(): number | undefined;
	getItemDefinition(id: number): ItemComposition | undefined;
	getItemModelCache(): NodeCache | undefined;
	getItemSpriteCache(): NodeCache | undefined;
	getKeyboardIdleTicks(): number | undefined;
	getLocalDestinationLocation(): LocalPoint | undefined;
	getLocalPlayer(): Player | undefined;
	getLoginIndex(): number | undefined;
	getMapAngle(): number | undefined;
	getMapDots(): SpritePixels[] | undefined;
	getMapElementConfig(id: number): MapElementConfig | undefined;
	getMapIcons(): SpritePixels[] | undefined;
	getMapRegions(): number[] | undefined;
	getMapScene(): IndexedSprite[] | undefined;
	getMenuEntries(): MenuEntry[] | undefined;
	getMenuHeight(): number | undefined;
	getMenuScroll(): number | undefined;
	getMenuWidth(): number | undefined;
	getMenuX(): number | undefined;
	getMenuY(): number | undefined;
	getMessages(): IterableHashTable<MessageNode> | undefined;
	getMinimapZoom(): number | undefined;
	getModIcons(): IndexedSprite[] | undefined;
	getMouseCanvasPosition(): Point | undefined;
	getMouseCurrentButton(): number | undefined;
	getMouseIdleTicks(): number | undefined;
	getMouseLastPressedMillis(): number | undefined;
	getMusicVolume(): number | undefined;
	getNpcDefinition(npcId: number): NPCComposition | undefined;
	getNpcs(): NPC[] | undefined;
	getObjectCompositionCache(): NodeCache | undefined;
	getObjectDefinition(objectId: number): ObjectComposition | undefined;
	getOculusOrbFocalPointX(): number | undefined;
	getOculusOrbFocalPointY(): number | undefined;
	getOculusOrbState(): number | undefined;
	getOverallExperience(): number | undefined;
	getPlane(): number | undefined;
	getPlayerMenuTypes(): number[] | undefined;
	getPlayerOptions(): string[] | undefined;
	getPlayerOptionsPriorities(): boolean[] | undefined;
	getPlayers(): Player[] | undefined;
	getPreferences(): Preferences | undefined;
	getProjectiles(): Deque<Projectile> | undefined;
	getRasterizer(): Rasterizer | undefined;
	getRasterizer3D_clipMidX2(): number | undefined;
	getRasterizer3D_clipMidY2(): number | undefined;
	getRasterizer3D_clipNegativeMidX(): number | undefined;
	getRasterizer3D_clipNegativeMidY(): number | undefined;
	getRealDimensions(): Dimension | undefined;
	getRealSkillLevel(skill: Skill): number | undefined;
	getRealSkillLevels(): number[] | undefined;
	getRenderOverview(): RenderOverview | undefined;
	getRevision(): number | undefined;
	getScale(): number | undefined;
	getScene(): Scene | undefined;
	getSceneMaxPlane(): number | undefined;
	getScriptActiveWidget(): Widget | undefined;
	getScriptDotWidget(): Widget | undefined;
	getSelectedSceneTile(): Tile | undefined;
	getSelectedWidget(): Widget | undefined;
	getServerVarbitValue(varbit: number): number | undefined;
	getServerVarps(): number[] | undefined;
	getServerVarpValue(varpId: number): number | undefined;
	getSkillExperience(skill: Skill): number | undefined;
	getSkillExperiences(): number[] | undefined;
	getSkyboxColor(): number | undefined;
	getSpriteOverrides(): Map<number, SpritePixels> | undefined;
	getSprites(
		source: IndexDataBase,
		archiveId: number,
		fileId: number,
	): SpritePixels[] | undefined;
	getStretchedDimensions(): Dimension | undefined;
	getStringStack(): string[] | undefined;
	getStringStackSize(): number | undefined;
	getStructComposition(structID: number): StructComposition | undefined;
	getStructCompositionCache(): NodeCache | undefined;
	getTextureProvider(): TextureProvider | undefined;
	getTickCount(): number | undefined;
	getTileHeights(): number[][][] | undefined;
	getTileSettings(): number[][][] | undefined;
	getTopLevelInterfaceId(): number | undefined;
	getTotalLevel(): number | undefined;
	getUsername(): string | undefined;
	getVar(varbit: number): number | undefined;
	getVarbit(id: number): VarbitComposition | undefined;
	getVarbitValue(varbit: number): number | undefined;
	getVarbitValue(varps: number[], varbitId: number): number | undefined;
	getVarcIntValue(varc: number): number | undefined;
	getVarcMap(): Map<number, any> | undefined;
	getVarcStrValue(varc: number): string | undefined;
	getVarps(): number[] | undefined;
	getVarpValue(varpId: number): number | undefined;
	getViewportHeight(): number | undefined;
	getViewportWidth(): number | undefined;
	getViewportXOffset(): number | undefined;
	getViewportYOffset(): number | undefined;
	getWeight(): number | undefined;
	getWidget(componentId: number): Widget | undefined;
	getWidget(groupId: number, childId: number): Widget | undefined;
	getWidget(widget: WidgetInfo): Widget | undefined;
	getWidgetFlags(): HashTable<IntegerNode> | undefined;
	getWidgetPositionsX(): number[] | undefined;
	getWidgetPositionsY(): number[] | undefined;
	getWidgetRoots(): Widget[] | undefined;
	getWidgetSpriteCache(): NodeCache | undefined;
	getWidgetSpriteOverrides(): Map<number, SpritePixels> | undefined;
	getWorld(): number | undefined;
	getWorldList(): World[] | undefined;
	getWorldMap(): WorldMap | undefined;
	getWorldType(): WorldType | undefined; // EnumSet<WorldType>
	getXteaKeys(): number[][] | undefined;
	hasHintArrow(): boolean | undefined;
	hopToWorld(world: World): void | undefined;
	invalidateStretching(resize: boolean): void | undefined;
	isDraggingWidget(): boolean | undefined;
	isFriended(name: string, mustBeLoggedIn: boolean): boolean | undefined;
	isGpu(): boolean | undefined;
	isInInstancedRegion(): boolean | undefined;
	isInterpolateNpcAnimations(): boolean | undefined;
	isInterpolateObjectAnimations(): boolean | undefined;
	isInterpolatePlayerAnimations(): boolean | undefined;
	isKeyPressed(keycode: number): boolean | undefined;
	isMenuOpen(): boolean | undefined;
	isMenuScrollable(): boolean | undefined;
	isMinimapZoom(): boolean | undefined;
	isPrayerActive(prayer: Prayer): boolean | undefined;
	isResized(): boolean | undefined;
	isStretchedEnabled(): boolean | undefined;
	isStretchedFast(): boolean | undefined;
	isWidgetSelected(): boolean | undefined;
	loadAnimation(id: number): Animation | undefined;
	loadModel(id: number): Model | undefined;
	loadModel(
		id: number,
		colorToFind: number[],
		colorToReplace: number[],
	): Model | undefined;
	loadModelData(id: number): ModelData | undefined;
	mergeModels(...models: ModelData[]): ModelData | undefined;
	mergeModels(models: ModelData[], length: number): ModelData | undefined;
	openInterface(
		componentId: number,
		interfaceId: number,
		modalMode: number,
	): WidgetNode | undefined;
	openWorldHopper(): void | undefined;
	playSoundEffect(id: number): void | undefined;
	playSoundEffect(id: number, volume: number): void | undefined;
	playSoundEffect(
		id: number,
		x: number,
		y: number,
		range: number,
	): void | undefined;
	playSoundEffect(
		id: number,
		x: number,
		y: number,
		range: number,
		delay: number,
	): void | undefined;
	queueChangedSkill(skill: Skill): void | undefined;
	queueChangedVarp(varp: number): void | undefined;
	refreshChat(): void | undefined;
	resetHealthBarCaches(): void | undefined;
	runScript(...args: any[]): void | undefined;
	setAllWidgetsAreOpTargetable(value: boolean): void | undefined;
	setCameraMouseButtonMask(mask: number): void | undefined;
	setCameraPitchRelaxerEnabled(enabled: boolean): void | undefined;
	setCameraPitchTarget(cameraPitchTarget: number): void | undefined;
	setCameraSpeed(speed: number): void | undefined;
	setCameraYawTarget(cameraYawTarget: number): void | undefined;
	setCompass(spritePixels: SpritePixels): void | undefined;
	setDraggedOnWidget(widget: Widget): void | undefined;
	setDrawCallbacks(drawCallbacks: DrawCallbacks): void | undefined;
	setExpandedMapLoading(chunks: number): void | undefined;
	setGameState(gameState: GameState): void | undefined;
	setGeSearchResultCount(count: number): void | undefined;
	setGeSearchResultIds(ids: number[]): void | undefined;
	setGeSearchResultIndex(index: number): void | undefined;
	setGpuFlags(gpuflags: number): void | undefined;
	setHintArrow(point: LocalPoint | WorldPoint): void | undefined;
	setHintArrow(npc: NPC): void | undefined;
	setHintArrow(player: Player): void | undefined;
	setIdleTimeout(ticks: number): void | undefined;
	setInterpolateNpcAnimations(interpolate: boolean): void | undefined;
	setInterpolateObjectAnimations(interpolate: boolean): void | undefined;
	setInterpolatePlayerAnimations(interpolate: boolean): void | undefined;
	setIntStackSize(stackSize: number): void | undefined;
	setInventoryDragDelay(delay: number): void | undefined;
	setInvertPitch(invertPitch: boolean): void | undefined;
	setInvertYaw(invertYaw: boolean): void | undefined;
	setLoginScreen(pixels: SpritePixels): void | undefined;
	setMenuEntries(entries: MenuEntry[]): void | undefined;
	setMenuScroll(scroll: number): void | undefined;
	setMinimapTileDrawer(drawTile: TileFunction): void | undefined;
	setMinimapZoom(minimapZoom: boolean | number): void | undefined;
	setModIcons(modIcons: IndexedSprite[]): void | undefined;
	setMusicVolume(volume: number): void | undefined;
	setOculusOrbNormalSpeed(speed: number): void | undefined;
	setOculusOrbState(state: number): void | undefined;
	setOtp(otp: string): void | undefined;
	setPassword(password: string): void | undefined;
	setScalingFactor(factor: number): void | undefined;
	setShouldRenderLoginScreenFire(val: boolean): void | undefined;
	setSkyboxColor(skyboxColor: number): void | undefined;
	setStretchedEnabled(state: boolean): void | undefined;
	setStretchedFast(state: boolean): void | undefined;
	setStretchedIntegerScaling(state: boolean): void | undefined;
	setStretchedKeepAspectRatio(state: boolean): void | undefined;
	setStringStackSize(stackSize: number): void | undefined;
	setTickCount(tickCount: number): void | undefined;
	setUnlockedFps(unlock: boolean): void | undefined;
	setUnlockedFpsTarget(fps: number): void | undefined;
	setUsername(name: string): void | undefined;
	setVarbit(varbit: number, value: number): void | undefined;
	setVarbitValue(
		varps: number[],
		varbit: number,
		value: number,
	): void | undefined;
	setVarcIntValue(varc: number, value: number): void | undefined;
	setVarcStrValue(varc: number, value: string): void | undefined;
	setWidgetSelected(selected: boolean): void | undefined;
	stopNow(): void | undefined;
}
