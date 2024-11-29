/**
 * Converts snake case characters to camel case.
 * @template S - snake characters
 * @example
 */
export type SnakeToCamel<S extends string> =
	S extends `${infer FIRST}_${infer REST}`
		? `${FIRST}${Capitalize<SnakeToCamel<REST>>}`
		: S;
