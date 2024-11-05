import dayjs from 'dayjs';
import { kr } from './domain/kr';

export const date = (
	value: string | undefined,
	specifiedFormat?: string
): string | undefined => {
	if (!value) {
		return undefined;
	}

	const localDateTime = dayjs(value);
    
	if (!localDateTime.isValid()) {
		return undefined;
	}
	const dateFormat = specifiedFormat || kr.format.date;
	return localDateTime.format(dateFormat);
};