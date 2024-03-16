interface Predicate<T> {
	/**
	 * Evaluates this predicate on the given argument.
	 *
	 * @param t the input argument
	 * @returns true if the input argument matches the predicate, otherwise false
	 */
	test(t: T): boolean;

	/**
	 * Combines this predicate with another one using logical and.
	 *
	 * @param other a predicate that will be logically-ANDed with this predicate
	 * @returns a composed predicate that represents the short-circuiting logical AND of this predicate and the other
	 */
	and(other: Predicate<T>): Predicate<T>;

	/**
	 * Combines this predicate with another one using logical or.
	 *
	 * @param other a predicate that will be logically-ORed with this predicate
	 * @returns a composed predicate that represents the short-circuiting logical OR of this predicate and the other
	 */
	or(other: Predicate<T>): Predicate<T>;

	/**
	 * Returns a predicate that represents the logical negation of this predicate.
	 *
	 * @returns a predicate that represents the logical negation of this predicate
	 */
	negate(): Predicate<T>;
}
