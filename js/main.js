const placeKeys = document.querySelector('.wrapper_keys')

//find key and play suit audio 
function playApp(e) {
	const audio = document.querySelector(`audio[data-key="${e.code}"]`);
	const key = document.querySelector(`.key[data-key="${e.code}"]`);
	if (!audio) return;
	audio.currentTime = 0; //do press key many one
	key.classList.add('active_click'); //add class when press key
	audio.play();
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('active_click');
}

function playAppMouse(e) {
	if (e.target.closest('button')) {
		const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
		if (!audio) return;
		audio.currentTime = 0;
		e.target.classList.add('active_click');
		audio.play();
		test(e)
	}
}

placeKeys.addEventListener('click', playAppMouse);
document.body.addEventListener('transitionend', removeTransition);
window.addEventListener('keypress', playApp);


