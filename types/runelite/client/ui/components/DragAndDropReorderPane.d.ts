/// <reference path="../../../../java/index.d.ts" />
/// <reference path="../../../../jagex/index.d.ts" />
/// <reference path="JLayeredPane.d.ts" />
/// <reference path="LayoutManager.d.ts" />
/// <reference path="DragListener.d.ts" />
/// <reference path="Point.d.ts" />
/// <reference path="Component.d.ts" />
/// <reference path="Rectangle.d.ts" />
/// <reference path="BoxLayout.d.ts" />
/// <reference path="MouseAdapter.d.ts" />
/*
 * Copyright (c) 2020, Shingyx <https://github.com/Shingyx>
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
declare namespace net.runelite.client.ui.components {
/**
 * Pane which allows reordering its components via drag and drop.
 */
export class DragAndDropReorderPane extends JLayeredPane
{
Point dragStartPoint;
Component draggingComponent;
DragAndDropReorderPane() 
	setLayout(layoutManager: LayoutManager): void;
	addDragListener(dragListener: DragListener): void;
	removeDragListener(dragListener: DragListener): void;
	private startDragging(point: Point): void;
	private drag(point: Point): void;
		// reorder components
			// require the edge of the dragged component to be past the midpoint of the target
	private finishDragging(): void;
	private moveDraggingComponent(point: Point): void;
		// shift the dragging component to match it's earlier y offset with the mouse
		// clamp the height to stay within the pane
	private getDefaultLayerComponentAt(point: Point): Component;
	private getIntersectingComponent(bounds: Rectangle): Component;
export interface DragListener
		/**
		 * Called after a component has been dragged
		 * @param component the component
		 */
export class DragAndDropReorderLayoutManager extends BoxLayout
				// temporarily move the dragging component to the default layer for correct layout calculation
				// Without revalidating before this temporary layout, Swing will cause draggingComponent to take on the
				// size of whatever component is present at dragIndex.
export class DragAndDropReorderMouseAdapter extends MouseAdapter
}
}