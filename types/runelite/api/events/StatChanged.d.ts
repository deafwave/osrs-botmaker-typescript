/// <reference path="../Skill.d.ts" />
declare namespace net.runelite.api.events {
	/**
	 * An event where the experience, level, or boosted level of a {@link Skill} has been modified.
	 */
	export class StatChanged {
		getSkill(): Skill;
		getXp(): number;
		getLevel(): number;
		getBoostedLevel(): number;
	}
}
