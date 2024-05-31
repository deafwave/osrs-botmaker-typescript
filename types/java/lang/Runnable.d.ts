declare namespace java.lang {
	export class Runnable {
		constructor(runnable: { run: () => void });
	}
}
