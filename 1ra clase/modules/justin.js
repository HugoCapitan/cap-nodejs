
var age = 12;

var state = 'single';

function sing() {
	console.log('lalala');
}

function cry() {
	console.log('booo hoooo hooo');
}

function getArrested() {
	console.log('oh no, Im in jail');
}


module.exports = {
	sing: sing,
	cry: cry,
	getArrested: getArrested,
	state: state
};