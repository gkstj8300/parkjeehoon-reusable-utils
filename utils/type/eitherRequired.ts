/**
 * @param T - any object type
 * @param {keyof T} K - one of the required properties
 * @template T, K
 */
export type EitherRequired<T, K extends keyof T> = K extends keyof T
	? Required<Pick<T, K>> & Partial<Omit<T, K>>
	: never;