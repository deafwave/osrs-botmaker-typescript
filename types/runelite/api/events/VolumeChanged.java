Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import lombok.Value;

@Value
public class VolumeChanged
{
	public enum Type
	{
		MUSIC,
		EFFECTS,
		AREA
	}

	private final Type type;
}
