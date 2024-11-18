/**
 * 배열에서 중복된 값을 제거합니다.
 *
 * @template T - 배열 요소의 타입.
 * @param {T[]} values - 중복을 제거할 배열.
 * @param {(element: T) => string | number} [keySelector] - 중복을 제거할 기준이 되는 키 선택 함수(선택적).
 * @returns {T[]} - 중복이 제거된 배열.
 */
export function uniq<T>(
	values: T[],
	keySelector?: (element: T) => string | number
) {
	return Array.from(
		new Map(
			values.map(value => [keySelector ? keySelector(value) : value, value])
		).values()
	);
}