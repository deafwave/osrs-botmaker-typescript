interface EnumSet<T> {
	add(e: T): boolean;
	addAll(collection: EnumSet<T>): boolean;
	clear(): void;
	clone(): EnumSet<T>;
	contains(e: T): boolean;
	containsAll(collection: EnumSet<T>): boolean;
	isEmpty(): boolean;
	remove(e: T): boolean;
	removeAll(collection: EnumSet<T>): boolean;
	retainAll(collection: EnumSet<T>): boolean;
	size(): number;
	toArray(): T[];
}
