/// <reference path="../Skill.d.ts" />
declare namespace net.runelite.api.events {
	export class StatChanged {
		getSkill(): Skill;
		getXp(): number;
		getLevel(): number;
		getBoostedLevel(): number;
	}
}
