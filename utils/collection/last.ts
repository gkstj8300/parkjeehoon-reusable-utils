/**
 * 배열의 마지막 요소를 반환합니다.
 *
 * @template T - 배열 요소의 타입.
 * @param {T[]} array - 마지막 요소를 찾을 배열.
 * @returns {T | undefined} - 마지막 요소 또는 배열이 비어 있으면 `undefined`.
 */
export function last<T>(array: T[]): T | undefined {
	return array[array.length - 1];
}