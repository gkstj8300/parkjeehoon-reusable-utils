import dayjs from 'dayjs';
import { kr } from './domain/kr';

/**
 * 
 * @param value 날짜
 * @param format 포멧
 * @returns 
 */
export const date = (
	value: string | undefined,
	format?: string
): string | undefined => {
	if (!value) {
		return undefined;
	}

	const localDateTime = dayjs(value);
    
	if (!localDateTime.isValid()) {
		return undefined;
	}
	const dateFormat = format || kr.format.date;
	return localDateTime.format(dateFormat);
};