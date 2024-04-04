declare namespace java.lang {
	class Thread {
		constructor(runnable: Runnable);
		start(): void;
		static sleep(millis: number): void;
	}
}
