import dayjs from "dayjs";
import { kr } from "./domain/kr";

/**
* 기준일에서 n일을 미룬 날짜를 가져옵니다.
* @param [days] {number} - 기준일에서 벗어나는 일수(음수인 경우는 기준일에서 과거)
* @param [baseDate] {string} - 기준일(기본 당일)
* @param format {string} - 날짜 포맷
* @returns {string} 기준일로부터 n일후
*/
export function nDaysLater(
	days?: number,
	baseDate?: string,
	format: string = kr.format.date
): string {
	return dayjs(baseDate)
		.add(days ?? 0, 'day')
		.format(format);
}