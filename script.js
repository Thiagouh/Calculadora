function insert(num) {
	const numberInRes = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = numberInRes + num;
}

function clean() {
	document.getElementById('res').innerHTML = "";
}

function back() {
	const result = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = result.substring(0, result.length -1);
}

function calculate() {
	const result = document.getElementById('res').innerHTML;
	if (result) {
		document.getElementById('res').innerHTML = eval(result);
	} else {
		alert('Insert something');
	}
}