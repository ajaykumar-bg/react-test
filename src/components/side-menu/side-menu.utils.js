export const generateAvatar = (name) => {
	const nameParts = name.split(' ');
	const firstInitial = nameParts[0].charAt(0).toUpperCase();
	const lastInitial =
		nameParts.length > 1
			? nameParts[1].charAt(0).toUpperCase()
			: nameParts[0].charAt(1).toUpperCase();
	return firstInitial + lastInitial;
};
