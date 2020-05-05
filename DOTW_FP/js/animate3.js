let p = document.getElementById('points');
let img = document.getElementById('bird');
let count = 0;


img.addEventListener('click', up);

function up() {
	count+=1;

	p.innerHTML = count;
}