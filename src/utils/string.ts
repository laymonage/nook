export const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

const locale = 'en-US';

const dateFormat: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'short',
	day: 'numeric',
};

const timeFormat: Intl.DateTimeFormatOptions = {
	hour12: false,
	hour: 'numeric',
	minute: 'numeric',
};

const dateTimeFormat: Intl.DateTimeFormatOptions = {
	...dateFormat,
	...timeFormat,
	weekday: 'long',
};

const toLocale = (d: Date, options?: Intl.DateTimeFormatOptions): string =>
	d.toLocaleDateString(locale, options);

export const formatDate = (d: Date): string => toLocale(d, dateFormat);
export const formatTime = (d: Date): string => toLocale(d, timeFormat);
export const formatDateTime = (d: Date): string => toLocale(d, dateTimeFormat);
