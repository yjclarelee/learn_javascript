function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

function isEmptyUsingKeys(obj) {
	return !Object.keys(obj).length;
}

let person = {
	name: "Clare",
};
console.log(isEmptyUsingKeys(person));
