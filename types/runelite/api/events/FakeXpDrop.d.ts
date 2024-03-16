/**
 * Represents an event in TypeScript where a fake experience drop occurs.
 */
declare class FakeXpDrop {
	private readonly skill: Skill;
	private readonly xp: number;

	constructor(skill: Skill, xp: number);
}
