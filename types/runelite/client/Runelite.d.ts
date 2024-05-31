interface Clazz<T> extends Function {
	new (...args: any[]): T;
}

declare namespace net.runelite.client {
	export class RuneLite {
		static getInjector(): {
			getInstance<T>(javaClass: Clazz<T> | null): T;
		};
	}
}
