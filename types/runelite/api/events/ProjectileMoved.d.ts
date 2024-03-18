/// <reference path="../Projectile.d.ts" />
/// <reference path="../coords/LocalPoint.d.ts" />

declare namespace net.runelite.api.events {
	export class ProjectileMoved {
		/**
		 * The projectile being moved.
		 */
		getProjectile(): Projectile;
		setProjectile(projectile: Projectile): void;

		/**
		 * The target location of the projectile.
		 */
		getPosition(): net.runelite.api.coords.LocalPoint;
		setPosition(position: net.runelite.api.coords.LocalPoint): void;

		/**
		 * The z-axis target location of the projectile.
		 */
		getZ(): number;
		setZ(z: number): void;
	}
}
