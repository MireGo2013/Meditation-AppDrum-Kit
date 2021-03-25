const placeKeys = document.querySelector('.wrapper_keys')

function playApp(e) {
	const audio = document.querySelector(`audio[data-key="${e.code}"]`);
	const key = document.querySelector(`.key[data-key="${e.code}"]`);
	if (!audio) return;
	playBtn(key, audio)
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('active_click');
}

function playAppMouse(e) {
	const button = e.target.closest('button');
	if (button) {
		const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
		if (!audio) return;
		playBtn(button, audio)
	}
}

function playBtn(key, audio) {
	audio.currentTime = 0
	key.classList.add('active_click');
	audio.play();
}

placeKeys.addEventListener('click', playAppMouse);
document.body.addEventListener('transitionend', removeTransition);
window.addEventListener('keypress', playApp);


