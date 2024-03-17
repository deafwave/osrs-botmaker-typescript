/// <reference path="Nameable.d.ts" />
/**
 * Represents a player in the chat.
 */
interface ChatPlayer extends Nameable
{
	getWorld(): number;
}