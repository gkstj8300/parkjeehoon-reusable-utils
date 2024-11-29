import type { SnakeToCamel } from "./snakeToCamel";

/**
 * Convert the property of any object from snake case to camel case.
 * @template IF - any object
 * @example
 * type Foo = ToCamelProps<{ foo_bar: string, bar_baz: number }>; // { fooBar: string, barBaz: number }
 */
export type SnakePropsToCamel<IF extends object> = {
	[K in keyof IF as K extends string ? SnakeToCamel<K> : K]: IF[K];
};