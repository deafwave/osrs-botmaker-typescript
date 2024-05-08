/// <reference path="../../runelite/api/GraphicsObject.d.ts" />
/// <reference path="../../runelite/api/NPC.d.ts" />
/// <reference path="../../runelite/api/Projectile.d.ts" />
/// <reference path="../../runelite/api/ObjectComposition.d.ts" />
/// <reference path="../../runelite/api/TileObject.d.ts" />
/// <reference path="../../runelite/api/Prayer.d.ts" />

interface SoxApi {
	/** @deprecated see {@link printGameMessage}*/
	PrintDebugMessage: (message: string) => void;

	attackPlayer: (names: string[]) => void;
	clearGameChat: () => void;
	depositAllToBankWithId: (id: number) => void;
	depositAllToBankWithName: (name: string) => void;
	depositToBankWithId: (id: number) => void;
	depositToBankWithName: (name: string) => void;
	followPlayer: (names: string[]) => void;
	getBooleanVariable: (variableName: string) => boolean;
	getCounter: (name: string) => number;
	getGraphicsObjectsWithIds: (
		ids: number[],
	) => net.runelite.api.GraphicsObject[];
	getIntArrayVariable: (variableName: string) => number[];
	getIntVariable: (variableName: string) => number;
	getNpcAttackSpeed: (npcId: number) => number;
	getNpcsWithIds: (ids: number[]) => net.runelite.api.NPC[];
	getNpcsWithNames: (names: string[]) => net.runelite.api.NPC[];
	getProjectilesWithIds: (ids: number[]) => net.runelite.api.Projectile[];
	getStringArrayVariable: (variableName: string) => string[];
	getStringVariable: (variableName: string) => string;
	getTileObjectComposition: (
		objectId: number,
	) => net.runelite.api.ObjectComposition;
	getTileObjectsWithIds: (ids: number[]) => net.runelite.api.TileObject[];
	getTileObjectsWithNames: (names: string[]) => net.runelite.api.TileObject[];
	interactInventoryItemOnNpcWithIds(
		id: number,
		npc: net.runelite.api.NPC,
	): void;
	interactInventoryItemOnObjectWithIds(
		id: number,
		object: net.runelite.api.TileObject,
	): void;
	interactInventoryWithIds: (itemIds: number[], options: string[]) => void;
	interactInventoryWithNames: (
		itemNames: string[],
		options: string[],
	) => void;
	interactNpc: (npcName: string, action: string) => void;
	interactObject: (objectName: string, action: string) => void;
	interactObjects: (objectName: string[], action: string[]) => void;
	interactSpecifiedWidget(
		pid: number,
		id: number,
		opcode: number,
		param0: string,
		param1?: string,
	): void;
	interactSuppliedNpc: (target: net.runelite.api.NPC, action: string) => void;
	interactSuppliedObject: (
		target: net.runelite.api.TileObject,
		action: string,
	) => void;
	interactWidgetText(text: string): void;
	isBankOpen: () => boolean;
	isNearPlayer: (radius: number, names: string[]) => boolean;
	isWebWalking: () => boolean;
	localPlayerIdle: () => boolean;
	localPlayerMoving: () => boolean;
	lootItemsWithIds: (lootIds: number[], maxDistance: number) => void;
	lootItemsWithNames: (lootNames: string[], maxDistance: number) => void;
	printGameMessage: (message: string) => void;
	setCounter: (name: string, value: number) => void;
	setVariable: (
		variableName: string,
		value: string | number | boolean | string[] | number[],
	) => void;
	togglePrayer: (
		prayer: net.runelite.api.Prayer,
		bypassMouseClicks: boolean,
	) => void;
	tradePlayer: (names: string[]) => void;
	walkToTrueWorldPoint: (x: number, y: number) => void;
	walkToWorldPoint: (x: number, y: number) => void;
	webWalkCancel: () => void;
	webWalkStart: (point: net.runelite.api.coords.WorldPoint) => void;
	withdrawAllFromBankWithId: (id: number) => void;
	withdrawAllFromBankWithName: (name: string) => void;
	withdrawFromBankWithId: (id: number) => void;
	withdrawFromBankWithName: (name: string) => void;
}
