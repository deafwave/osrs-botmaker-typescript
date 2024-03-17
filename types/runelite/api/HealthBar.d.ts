/// <reference path="SpritePixels.d.ts" />
interface HealthBar
{
	getHealthBarFrontSprite(): SpritePixels;

	getHealthBarBackSprite(): SpritePixels;

	getHealthBarFrontSpriteId(): number;

	setPadding(padding: number): void;
}