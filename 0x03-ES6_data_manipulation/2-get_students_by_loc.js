module.exports = function getStudentsByLocation(list, city) {
  return list.filter((list) => list.location === city);
};
