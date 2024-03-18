declare namespace net.runelite.api.dbtable {
	export class DBTableID {
		static readonly Quest: DBTableID.Quest;
	}

	namespace DBTableID {
		interface Quest {
			readonly TABLE: number;
			readonly NAME: number;
			readonly MAP_ELEMENT: number;
			readonly MAIN_QUEST: number;
		}
	}
}
