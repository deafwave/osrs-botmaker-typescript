/// <reference path="RuneliteNode.d.ts" />
declare namespace net.runelite.api {
	export interface Script extends RuneliteNode {
		getIntOperands(): number[];

		getInstructions(): number[];
	}
}
