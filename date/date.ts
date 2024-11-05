import dayjs from 'dayjs';

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
	const dateFormat = specifiedFormat;
	return localDateTime.format(dateFormat);
};