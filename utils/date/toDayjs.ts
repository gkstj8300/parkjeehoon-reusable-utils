import dayjs, { Dayjs } from "dayjs";
import { kr } from "./domain/kr";

/**
 * 지정된 날짜를 dayjs로 변환.
 * @param date 날짜
 * @param format 포멧
 * @returns {Dayjs}
 */
export function toDayjs(date?: string, format?: string): Dayjs {
	if (!date) {
		return dayjs(date, format).tz(kr.timezone);
	}
	return dayjs(date, format);
}