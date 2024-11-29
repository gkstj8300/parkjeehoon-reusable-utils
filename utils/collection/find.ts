/**
 * 배열에서 특정 키와 값이 일치하는 요소를 찾습니다.
 *
 * @template T - 배열 요소의 타입.
 * @param {T[]} arr - 탐색할 배열.
 * @param {keyof T} key - 탐색 기준이 되는 키.
 * @param {T[keyof T]} value - 탐색 기준이 되는 값.
 * @returns {T | undefined} - 일치하는 요소가 있으면 반환, 없으면 `undefined`.
 */
export function find<T>(arr: T[], key: keyof T, value: T[keyof T]) {
	return arr.find(item => item[key] === value);
}