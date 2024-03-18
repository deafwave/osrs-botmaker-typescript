/// <reference path="../Projectile.d.ts" />
/// <reference path="../coords/LocalPoint.d.ts" />

declare namespace net.runelite.api.events {
	export class ProjectileMoved {
		/**
		 * The projectile being moved.
		 */
		private projectile: Projectile;
		/**
		 * The target location of the projectile.
		 */
		private position: net.runelite.api.coords.LocalPoint;
		/**
		 * The z-axis target location of the projectile.
		 */
		private z: number;
	}
}
