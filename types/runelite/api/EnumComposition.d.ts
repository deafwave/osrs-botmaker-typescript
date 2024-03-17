interface EnumComposition
{
	size(): number;

	getKeys(): number[];

	getIntVals(): number[];

	getStringVals(): string[];

	getIntValue(key: number): number;

	getStringValue(key: number): string;
}