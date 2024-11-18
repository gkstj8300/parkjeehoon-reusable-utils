/**
 * 배열에서 두 번 나타나는 요소를 제거합니다. (lodash의 xor과 유사)
 *
 * @template T - 배열 요소의 타입.
 * @param {T[]} array1 - 첫 번째 배열.
 * @param {T[]} array2 - 두 번째 배열.
 * @returns {T[]} - 두 배열에서 중복되지 않는 고유 요소들만 포함된 배열.
 */
export function xor<T>(array1: T[], array2: T[]): T[] {
	const array = [...array1, ...array2];
	return array.filter((item, index) => {
		array.splice(index, 1);
		const unique = !array.includes(item);
		array.splice(index, 0, item);
		return unique;
	});
}