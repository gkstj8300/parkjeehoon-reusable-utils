/**
 * string 데이터를 number 혹은 undefined로 변환하는 함수
 */
export function toNumeric(string: string | undefined) {
	if (!string || Number.isNaN(Number(string))) {
		return undefined;
	}
	return Number(string);
}