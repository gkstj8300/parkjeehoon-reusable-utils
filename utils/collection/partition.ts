/**
 * 배열을 조건 함수의 결과에 따라 두 그룹으로 나눕니다. (lodash의 partition과 유사)
 *
 * @template T - 배열 요소의 타입.
 * @param {T[]} array - 그룹화할 배열.
 * @param {(item: T) => boolean} predicate - 조건을 확인할 함수.
 * @returns {[T[], T[]]} - 첫 번째 그룹(조건을 만족하는 요소)과 두 번째 그룹(조건을 만족하지 않는 요소)으로 이루어진 배열 쌍.
 */
export function partition<T>(
	array: T[],
	predicate: (item: T) => boolean
): [T[], T[]] {
	const firstGroup: T[] = [];
	const secondGroup: T[] = [];
    
	array.forEach(item => {
		if (predicate(item)) {
			firstGroup.push(item);
		} else {
			secondGroup.push(item);
		}
	});
	return [firstGroup, secondGroup];
}