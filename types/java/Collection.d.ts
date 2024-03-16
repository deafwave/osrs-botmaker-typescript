// Collection.d.ts
interface Collection<T> {
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
	equals(o: object): boolean;
	hashCode(): number;
}

interface Iterator<T> {
	hasNext(): boolean;
	next(): T;
	remove(): void;
}
