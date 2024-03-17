interface List<T> {
	size(): number;
	isEmpty(): boolean;
	contains(o: T): boolean;
	iterator(): Iterator<T>;
	toArray(): T[];
	add(e: T): boolean;
	remove(o: T): boolean;
	containsAll(c: Collection<T>): boolean;
	addAll(c: Collection<T>): boolean;
	removeAll(c: Collection<T>): boolean;
	retainAll(c: Collection<T>): boolean;
	clear(): void;
	get(index: number): T;
	set(index: number, element: T): T;
	add(index: number, element: T): void;
	remove(index: number): T;
	indexOf(o: T): number;
	lastIndexOf(o: T): number;
	// listIterator(): ListIterator<T>;
	subList(fromIndex: number, toIndex: number): List<T>;
}

interface Iterator<T> {
	hasNext(): boolean;
	next(): T;
	remove(): void;
}

// interface ListIterator<T> extends Iterator<T> {
// 	hasNext(): boolean;
// 	next(): T;
// 	hasPrevious(): boolean;
// 	previous(): T;
// 	nextIndex(): number;
// 	previousIndex(): number;
// 	remove(): void;
// 	set(e: T): void;
// 	add(e: T): void;
// }

interface Collection<T> extends Iterable<T> {
	size(): number;
	isEmpty(): boolean;
	contains(o: T): boolean;
	iterator(): Iterator<T>;
	toArray(): T[];
	add(e: T): boolean;
	remove(o: T): boolean;
	containsAll(c: Collection<T>): boolean;
	addAll(c: Collection<T>): boolean;
	removeAll(c: Collection<T>): boolean;
	retainAll(c: Collection<T>): boolean;
	clear(): void;
}
