import { SnakeToCamel } from "../type/snakeToCamel";

/**
 * 스네이크케이스 => 카멜케이스 변환 함수
 * @param from - snake case string
 * @returns camel case string
 * @template T
 */
export function snakeToCamel<T extends string>(from: string): SnakeToCamel<T> {
	return from
		.split('_')
		.map((token, index) =>
			index > 0 ? token.charAt(0).toUpperCase() + token.slice(1) : token
		)
		.join('') as SnakeToCamel<T>;
}
