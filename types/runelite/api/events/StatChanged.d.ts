/// <reference path="../Skill.d.ts" />
declare namespace net.runelite.api.events {
	export class StatChanged {
		private readonly skill: Skill;
		private readonly xp: number;
		private readonly level: number;
		private readonly boostedLevel: number;
	}
}
