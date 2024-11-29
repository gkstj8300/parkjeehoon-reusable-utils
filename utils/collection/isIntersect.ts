/**
 * 두 배열이 교집합(공통 요소)을 가지는지 확인합니다.
 *
 * @template T - 배열 요소의 타입.
 * @param {T[]} arr - 첫 번째 배열.
 * @param {T[]} anotherArr - 두 번째 배열.
 * @returns {boolean} - 교집합이 존재하면 `true`, 아니면 `false`.
 */
export function isIntersect<T>(arr: T[], anotherArr: T[]) {
	const arrSet = new Set(arr);
	for (const item of anotherArr) {
		if (arrSet.has(item)) {
			return true;
		}
	}
	return false;
}