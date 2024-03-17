/// <reference path="RuneliteNode.d.ts" />
interface Script extends RuneliteNode
{
	getIntOperands(): number[];

	getInstructions(): number[];
}