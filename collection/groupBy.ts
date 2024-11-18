/**
 * 배열 요소를 키로 그룹화합니다.
 *
 * @template T - 배열 요소의 타입.
 * @param {T[]} arr - 그룹화할 배열.
 * @param {keyof T} key - 그룹화 기준이 되는 속성.
 * @returns {Record<string, T[]>} - 키별 그룹화된 배열 객체.
 */
export function groupBy<T extends object>(
	arr: T[],
	key: keyof T
): Record<string, T[]> {
	const result: Record<string, T[]> = {};
	for (const item of arr) {
		if (!result[`${item[key]}`]) {
			result[`${item[key]}`] = [];
		}
		result[`${item[key]}`]?.push(item);
	}
	return result;
}