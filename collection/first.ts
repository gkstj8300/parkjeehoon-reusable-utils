/**
 * 배열의 첫 번째 요소를 반환합니다.
 *
 * @template T - 배열 요소의 타입.
 * @param {T[] | undefined} array - 첫 번째 요소를 찾을 배열.
 * @returns {T | undefined} - 첫 번째 요소 또는 배열이 비어 있으면 `undefined`.
 */
export function first<T>(array: T[] | undefined): T | undefined {
	return array?.[0];
}