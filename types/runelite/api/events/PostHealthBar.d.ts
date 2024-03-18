/// <reference path="../HealthBar.d.ts" />
declare namespace net.runelite.api.events {
	export class PostHealthBar {
		getHealthBar(): HealthBar;
		setHealthBar(healthbar: HealthBar): void;
	}
}
