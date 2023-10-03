module.exports = function getListStudentIds(abebe) {
	if (!Array.isArray(abebe)) {
		return [];
	}
	return abebe.map((x) => x.id);
};
