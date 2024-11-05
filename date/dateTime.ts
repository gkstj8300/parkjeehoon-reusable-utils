import dayjs from "dayjs";
import { kr } from "./domain/kr";

export const dateTime = (
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
	const dateFormat = format || kr.format.dateTime;
	return localDateTime.format(dateFormat);
};