export const sanitizeObject = (obj: object | Array<object>, filterKeys: string[]) => {
	const result = Array.isArray(obj) ? [] : {};

	for (const key of Object.keys(obj)) {
		if (!filterKeys.includes(key)) {
			if (typeof obj[key] != "object") {
				result[key] = obj[key];
			} else {
				const buff = sanitizeObject(obj[key], filterKeys);
				if (Object.keys(buff).length > 0) result[key] = buff;
			}
		}
	}
	return result;
};
