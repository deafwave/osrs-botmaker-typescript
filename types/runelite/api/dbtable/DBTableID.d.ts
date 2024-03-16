/**
 * Interface representing DBTableID with nested Quest interface in TypeScript.
 */
interface DBTableID {
	Quest: QuestInterface;
}

interface QuestInterface {
	readonly TABLE: 0;
	readonly NAME: 2;
	readonly MAP_ELEMENT: 16;
	readonly MAIN_QUEST: 21;
}
