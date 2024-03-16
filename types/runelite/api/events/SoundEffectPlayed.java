Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import javax.annotation.Nullable;
import lombok.Data;
import net.runelite.api.Actor;

@Data
public class SoundEffectPlayed
{
	@Nullable
	private final Actor source;
	private int soundId;
	private int delay;

	private boolean consumed;

	public void consume()
	{
		consumed = true;
	}
}
