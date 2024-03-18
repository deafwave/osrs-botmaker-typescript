/// <reference path="../Skill.d.ts" />
declare namespace net.runelite.api.events {
	export class FakeXpDrop {
		private readonly skill: Skill;
		private readonly xp: number;
	}
}
