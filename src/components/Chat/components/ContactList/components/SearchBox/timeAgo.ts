export const timeAgo = (createAt: Date) => {
	const time = new Date(createAt);
	const now = new Date();
	const diff = (now.getTime() - time.getTime()) / 1000;
	if (diff < 60) {
		return "just now";
	}
	if (diff < 3600) {
		return `${Math.round(diff / 60)} min`;
	}
	if (diff < 86400) {
		return `${Math.round(diff / 3600)} hours`;
	}
	if (diff < 604800) {
		return `${Math.round(diff / 86400)} days`;
	}
	if (diff < 2592000) {
		return `${Math.round(diff / 604800)} weeks`;
	}
	if (diff < 31536000) {
		return `${Math.round(diff / 2592000)} months`;
	}
	if (diff < 315360000) {
		return `${Math.round(diff / 31536000)} years`;
	}
	return time.toDateString();
};
