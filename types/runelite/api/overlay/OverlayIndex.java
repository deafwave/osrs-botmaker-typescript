Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.overlay;

import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashSet;
import java.util.Set;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class OverlayIndex
{
	private static final Set<Integer> overlays = new HashSet<>();

	static
	{
		try (InputStream indexStream = OverlayIndex.class.getResourceAsStream("/runelite/index");
			DataInputStream in = new DataInputStream(indexStream))
		{
			int id;
			while ((id = in.readInt()) != -1)
			{
				overlays.add(id);
			}
		}
		catch (IOException ex)
		{
			log.warn("unable to load overlay index", ex);
		}
	}

	public static boolean hasOverlay(int indexId, int archiveId)
	{
		return overlays.contains(indexId << 16 | archiveId);
	}
}
