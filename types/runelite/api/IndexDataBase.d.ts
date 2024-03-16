/**
 * Represents an index in the cache
 */
interface IndexDataBase {
	/**
	 * Returns true if any cache overlay in this index is outdated due to hash mismatch
	 */
	isOverlayOutdated(): boolean;

	/**
	 * Get the child file ids for a given archive
	 * @param archiveId
	 * @return
	 */
	getFileIds(archiveId: number): number[];

	loadData(archiveID: number, fileID: number): Uint8Array;
}
