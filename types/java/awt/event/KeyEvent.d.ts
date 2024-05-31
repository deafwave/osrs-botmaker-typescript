declare namespace java.awt.event {
	export class KeyEvent {
		constructor(
			source: any, // java.awt.Component
			id: number,
			when: number,
			modifiers: number,
			keyCode: number,
			keyChar: string | number, // char type?
		);

		static VK_UNDEFINED: number;
		static VK_ENTER: number;
	}
}
