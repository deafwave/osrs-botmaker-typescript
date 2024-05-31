/// <reference path="./event/KeyEvent.d.ts" />
declare namespace java.awt {
	export class Canvas {
		dispatchEvent(event: java.awt.event.KeyEvent): void;
	}
}
