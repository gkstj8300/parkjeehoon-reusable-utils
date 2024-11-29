/**
 * 주어진 배열을 지정한 크기만큼의 청크로 나눕니다.
 *
 * @template T - 배열의 요소 타입.
 * @param {T[]} arr - 청크로 나눌 입력 배열.
 * @param {number} chunkSize - 각 청크의 크기.
 * @returns {T[][]} - 각 청크가 최대 `chunkSize` 길이를 가지는 2차원 배열.
 *
 * @example
 * // 예제 1: 배열을 크기 2로 나누기
 * const data = [1, 2, 3, 4, 5];
 * const result = chunk(data, 2);
 * // result: [[1, 2], [3, 4], [5]]
 *
 * @example
 * // 예제 2: 빈 배열 입력 처리
 * const data = [];
 * const result = chunk(data, 3);
 * // result: []
 */
export function chunk<T>(arr: T[], chunkSize: number): T[][] {
	const result: T[][] = [];

	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk = arr.slice(i, i + chunkSize);
		result.push(chunk);
	}

	return result;
}