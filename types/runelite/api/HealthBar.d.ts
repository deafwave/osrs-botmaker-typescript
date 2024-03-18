/// <reference path="SpritePixels.d.ts" />
declare namespace net.runelite.api {
	export interface HealthBar {
		getHealthBarFrontSprite(): SpritePixels;

		getHealthBarBackSprite(): SpritePixels;

		getHealthBarFrontSpriteId(): number;

		setPadding(padding: number): void;
	}
}
