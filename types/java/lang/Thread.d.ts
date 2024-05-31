/// <reference path="./Runnable.d.ts" />
declare namespace java.lang {
	export class Thread {
		constructor(runnable: Runnable);
		start(): void;
		static sleep(millis: number): void;
	}
}
