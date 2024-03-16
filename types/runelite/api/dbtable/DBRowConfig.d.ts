/**
 * Interface representing DBRowConfig in TypeScript.
 */
interface DBRowConfig {
	/**
	 * DBTable ID this row belongs to
	 * @returns {number} The ID of the table.
	 */
	getTableID(): number;
}
