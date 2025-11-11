export const normalizeTitle = (title, limit, tail) =>
	title.substring(0, limit - tail.length) + tail;
