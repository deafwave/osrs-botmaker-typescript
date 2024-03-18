/// <reference path="../Skill.d.ts" />
declare namespace net.runelite.api.events {
	export class FakeXpDrop {
		getSkill(): Skill;
		getXp(): number;
	}
}
