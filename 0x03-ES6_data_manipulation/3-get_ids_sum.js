module.exports = function getStudentIdsSum(list) {
  return list.map((x) => x.id).reduce((accumulator, currentValue) => accumulator + currentValue);
};
