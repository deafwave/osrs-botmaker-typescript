/// <reference path="../../runelite/api/index.d.ts" />

// FIXME: Need to update this since the javadoc for sox's apis are outdated
interface SoxApi {
	clearGameChat: () => void;
	getBooleanVariable: (variableName: string) => boolean;
	getCounter: (name: string) => number;
	getGraphicsObjectsWithIds: (ids: number[]) => GraphicsObject[];
	getIntArrayVariable: (variableName: string) => number[];
	getIntVariable: (variableName: string) => number;
	getNpcAttackSpeed: (npcId: number) => number;
	getNpcsWithIds: (ids: number[]) => NPC[];
	getNpcsWithNames: (names: string[]) => NPC[];
	getProjectilesWithIds: (ids: number[]) => Projectile[];
	getStringArrayVariable: (variableName: string) => string[];
	getStringVariable: (variableName: string) => string;
	getTileObjectComposition: (objectId: number) => ObjectComposition;
	getTileObjectsWithIds: (ids: number[]) => TileObject[];
	getTileObjectsWithNames: (names: string[]) => TileObject[];
	interactInventoryWithIds: (itemIds: number[], options: string[]) => void;
	interactInventoryWithNames: (
		itemNames: string[],
		options: string[],
	) => void;
	interactNpc: (npcName: string, action: string) => void;
	interactObject: (objectName: string, action: string) => void;
	interactObjects: (objectName: string[], action: string[]) => void;
	interactSuppliedNpc: (target: NPC, action: string) => void;
	interactSuppliedObject: (target: TileObject, action: string) => void;
	isBankOpen: () => boolean;
	localPlayerIdle: () => boolean;
	localPlayerMoving: () => boolean;
	lootItemsWithIds: (lootIds: number[], maxDistance: number) => void;
	lootItemsWithNames: (lootNames: string[], maxDistance: number) => void;
	printDebugMessage: (message: string) => void; // Deprecated
	printGameMessage: (message: string) => void;
	setCounter: (name: string, value: number) => void;
	setVariable: (variableName: string, value: string) => void;
	togglePrayer: (prayer: Prayer, bypassMouseClicks: boolean) => void;
	walkToTrueWorldPoint: (x: number, y: number) => void;
	walkToWorldPoint: (x: number, y: number) => void;

	// Not on the JavaDocs
	isWebWalking: () => boolean;
	interactSpecifiedWidget(
		pid: number,
		id: number,
		op: number,
		param: string,
	): void;
	interactWidgetText(text: string): void;
	webWalkStart(point: WorldPoint): void;
}
