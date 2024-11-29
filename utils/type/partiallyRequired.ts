export type PartiallyRequired<T, K extends keyof T> = K extends keyof T
	? Required<Pick<T, K>> & Omit<T, K>
	: never;