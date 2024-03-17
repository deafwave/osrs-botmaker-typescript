/// <reference path="RuneliteNode.d.ts" />
interface Texture extends RuneliteNode
{
	getPixels(): number[];

	getAnimationDirection(): number;

	getAnimationSpeed(): number;

	isLoaded(): boolean;

	getU(): number;
	setU(u: number): void;

	getV(): number;
	setV(v: number): void;
}