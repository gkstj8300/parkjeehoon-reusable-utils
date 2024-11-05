export type Country = {
	format: {
		date: string;
		dateTime: string;
		monthYear: string;
		apiDate: string;
		localStorageDateTime: string;
		number: {
			decimalSeparator: string;
			decimalPoint: string;
		};
	};
	/** タイムゾーン */
	timezone: string;
};

export const kr: Country = {
	format: {
		date: 'YYYY/MM/DD',
		dateTime: 'YYYY/MM/DD HH:mm:ss',
		monthYear: 'YYYY년MM월',
		apiDate: 'YYYY-MM-DD',
		localStorageDateTime: 'YYYY/MM/DD HH:mm',
		number: {
			decimalSeparator: ',',
			decimalPoint: '.',
		},
	},
	timezone: `Asia/Seoul`,
};