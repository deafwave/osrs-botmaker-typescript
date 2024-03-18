declare namespace net.runelite.api.events {
	type VolumeChangedType = 'MUSIC' | 'EFFECTS' | 'AREA';
	class VolumeChanged {
		getType(): VolumeChangedType;
	}
}
