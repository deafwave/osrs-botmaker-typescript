/// <reference path="../../../../../../java/index.d.ts" />
/// <reference path="../../../../../../jagex/index.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="IDAStar.d.ts" />
/// <reference path="PuzzleState.d.ts" />
/// <reference path="PuzzleSwapPattern.d.ts" />
/*
 * Copyright (c) 2018, Steffen Hauge <steffen.oerum.hauge@hotmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.plugins.puzzlesolver.solver.pathfinding {
export class IDAStarMM extends IDAStar
{
PuzzleState currentState;
IDAStarMM(Heuristic heuristic) 
		//Add valid numbers for rows and columns
	computePath(root: PuzzleState): Array<PuzzleState>;
		//Reduce to 4x5
		//Reduce to 4x4
		//Reduce to 3x4
		//Remove last state
		//Pathfinder for 4x4
	private solveRow(row: number): void;
	private solveColumn(): void;
	private moveTowardsVal(valTarget: number, x: number, y: number, rowMode: boolean): void;
		//Not in place
			//Find piece location
				//Swap towards locTarget
					//Same column
						//Next to
						//More than 2 away, move towards on Y-axis
					//Same row
						//Next to
						//More than 2 away, move towards on X-axis
					//Different row and column
						//Check if already correct above
							//Move forward
						//Move downwards or upwards
						//Check if already correct to the left
							//Move down
						//Move right or left
	private alignTargetX(valTarget: number, x: number, y: number): void;
		//Check if same column
		//1 = right, -1 = left
			//Check if aligned
					//Below
					//Above
					//Right
						//Check space
							//No space below, use upper rotate
							//Space below, use lower rotate
					//Left
						//Check space
							//No space below, use upper rotate
							//Space below, use lower rotate
	//Swaps up until inserted into the correct place
	private swapUpRow(valTarget: number, x: number, y: number): void;
		//Check if already placed correct
		//Check if simple swap is enough
		//Move up
			//Check if already placed correct
					//Below
					//Last piece
					//Above
					//Right
					//Left
					//Don't remove correct pieces from row
						//Swap blank to below and continue
	private alignTargetY(valTarget: number, x: number, y: number): void;
		//Check if same row
		//1 = down, -1 = up
			//Check if aligned
					//Right
					//Left
					//Below
						//Check space
							//No space to the right, use left rotate
							//Space to the right, use right rotate
					//Above
						//Check space
							//No space to the right, use left rotate
							//Space to the right, use right rotate
	//Swaps left until inserted into the correct place
	private swapLeftColumn(valTarget: number, x: number, y: number): void;
		//Check if already placed correct
		//Check if simple swap is enough
		//Move left
			//Check if already placed correct
					//Below
					//Above
					//Don't remove correct pices from row
						//Swap blank to right and continue
					//Right
					//Last piece
					//Left
	private swap(p1: Point, p2: Point): void;
	private findPiece(val: number): Point;
		// This should never happen
	/**
	 * Assumes locBlank is first point for swap and locVal is last point for swap
	 *
	 * swap(locBlank, loc1);
	 * swap(loc1, loc2);
	 * swap(loc2, locVal);
	 */
	private performSwapPattern(locBlank: Point, locVal: Point, pattern: PuzzleSwapPattern): void;
			// This should never happen
		// Add locVal as last point
}
}