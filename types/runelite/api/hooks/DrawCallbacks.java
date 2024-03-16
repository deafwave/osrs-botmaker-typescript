Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.hooks;

import net.runelite.api.Model;
import net.runelite.api.Renderable;
import net.runelite.api.Scene;
import net.runelite.api.SceneTileModel;
import net.runelite.api.SceneTilePaint;
import net.runelite.api.Texture;

public interface DrawCallbacks
{
	/**
	 * GPU mode on.
	 */
	int GPU = 1;
	/**
	 * GPU hillskew support. Enables the {@link Model#getUnskewedModel()}
	 * API to get the unskewed model.
	 */
	int HILLSKEW = 2;
	/**
	 * Requests normals be computed for models. Enables the {@link Model#getVertexNormalsX()}
	 * {@link Model#getVertexNormalsY()} {@link Model#getVertexNormalsZ()} API.
	 */
	int NORMALS = 4;

	void draw(Renderable renderable, int orientation, int pitchSin, int pitchCos, int yawSin, int yawCos, int x, int y, int z, long hash);

	void drawScenePaint(int orientation, int pitchSin, int pitchCos, int yawSin, int yawCos, int x, int y, int z,
						SceneTilePaint paint, int tileZ, int tileX, int tileY,
						int zoom, int centerX, int centerY);


	void drawSceneModel(int orientation, int pitchSin, int pitchCos, int yawSin, int yawCos, int x, int y, int z,
						SceneTileModel model, int tileZ, int tileX, int tileY,
						int zoom, int centerX, int centerY);

	/**
	 * Called when a frame should be drawn.
	 *
	 * @param overlayColor Color of full-viewport overlays, if any
	 */
	void draw(int overlayColor);

	/**
	 * Called before the scene is drawn
	 */
	default void drawScene(double cameraX, double cameraY, double cameraZ, double cameraPitch, double cameraYaw, int plane)
	{
	}

	/**
	 * Called before the scene is drawn
	 */
	default void drawScene(int cameraX, int cameraY, int cameraZ, int cameraPitch, int cameraYaw, int plane)
	{
	}

	/**
	 * Called after the scene has been drawn
	 */
	void postDrawScene();

	void animate(Texture texture, int diff);

	void loadScene(Scene scene);

	void swapScene(Scene scene);

	default boolean tileInFrustum(Scene scene, int pitchSin, int pitchCos, int yawSin, int yawCos, int cameraX, int cameraY, int cameraZ, int plane, int msx, int msy)
	{
		return true;
	}
}
