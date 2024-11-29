import { toDayjs } from "./toDayjs";

/**
 * 현재시간과 지정시간을 비교하여 초과하였는지 판단
 * @param time 
 * @returns boolean
 */
export function isPastSpecifiedTime(time: string): boolean {
	// 현재 시간
	const currentDate = toDayjs();
	const [hour, minute] = time.match(/.{2}/g) ?? [];

	if (Number.isNaN(Number(hour)) || Number.isNaN(Number(minute))) {
		throw Error;
	}

	// 지정 시간
	const specifiedDateTime = toDayjs().hour(Number(hour)).minute(Number(minute));

	return currentDate.isAfter(specifiedDateTime, `minute`);
}