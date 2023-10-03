module.exports = function getListStudents() {

	const obj = new Set();

	obj.add({id: 1, firstname: "Guillaume", location: "San Francisco"});
	obj.add({id: 2, firstname: "James", location: "Columbia"});
	obj.add({id: 5, firstname: "Serena", location: "San Francisco"});

	const arr = [];
	const obj2 = obj.values();
	
	arr.push(obj2.next().value);
	arr.push(obj2.next().value);
	arr.push(obj2.next().value);

	return arr;
}
