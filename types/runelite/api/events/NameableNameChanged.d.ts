/// <reference path="../Nameable.d.ts" />
declare namespace net.runelite.api.events {
	export class NameableNameChanged {
		/**
		 * The nameable that changed names.
		 */
		getNameable(): Nameable;
	}
}
