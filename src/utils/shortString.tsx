const shortString = (string: string, lengthCut: number): string => {
	return string.length > lengthCut
		? string.slice(0, lengthCut) + '...'
		: string;
};

export default shortString;
