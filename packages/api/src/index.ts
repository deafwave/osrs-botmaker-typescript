function onStart() {
	let myLoc = client.getLocalPlayer().getWorldLocation();
	let otherLoc = new net.runelite.api.coords.WorldPoint(
		1234,
		5678,
		client.getPlane(),
	);
	if (myLoc.distanceTo(otherLoc) > 0) {
		api.walkToWorldPoint(otherLoc.getX(), otherLoc.getY());
	}
}
