let btns = document.querySelectorAll('button');
let currentInput = document.querySelector('.current-input');
let total = document.querySelector('.total');
let clearBtn = document.querySelector('#clear');
let eraseBtn = document.querySelector('#erase');
let calculate = document.querySelector('#calculate');
let inputs = [];

btns.forEach(function(btn) {
	btn.addEventListener('click', () => {
		inputs.push(btn.value);
		currentInput.innerHTML = inputs.join('');
	});
});

function getTotal() {
	return function() {
		total.innerHTML = eval(currentInput.innerHTML);
	};
}

function clear() {
	return function() {
		currentInput.innerHTML = '';
		total.innerHTML = '0';
		inputs = [];
	};
}

eraseBtn.addEventListener('click', function() {
	currentInput.innerHTML = '';
	inputs = [];
});

clearBtn.addEventListener('click', clear());

calculate.addEventListener('click', getTotal());
