/**
 * 입력 배열에서 키로 생성된 객체를 만듭니다.
 * 각 키의 값은 해당 키를 생성한 마지막 요소가 됩니다.
 *
 * @template T - 배열 요소의 타입.
 * @param {T[]} arr - 키로 변환할 입력 배열.
 * @param {keyof T | ((item: T) => string)} key - 키를 생성할 기준이 되는 속성 또는 함수.
 * @returns {Record<string, T>} - 키-값 쌍으로 이루어진 객체.
 */
export function keyBy<T extends object>(
	arr: T[],
	key: keyof T | ((item: T) => string)
): Record<string, T> {
	const result: Record<string, T> = {};
	for (const item of arr) {
		if (typeof key === 'function') {
			result[key(item)] = item;
		} else {
			result[`${item[key]}`] = item;
		}
	}
	return result;
}