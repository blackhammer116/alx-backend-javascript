import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());
console.log(typeof(getListStudents()));

const val = getListStudents();
console.log(val.map((x) => x.id));
