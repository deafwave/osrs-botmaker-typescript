/// <reference path="Node.d.ts" />

interface Script extends RuneliteNode {
	/**
	 * Gets integer operands of the script.
	 * @returns An array of integers representing the operands.
	 */
	getIntOperands(): number[];

	/**
	 * Gets instructions of the script.
	 * @returns An array of integers representing the instructions.
	 */
	getInstructions(): number[];
}
