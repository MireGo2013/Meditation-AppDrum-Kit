const keys = document.querySelectorAll('.key');

//find key and play suit audio 
function playApp(e) {
	const audio = document.querySelector(`audio[data-key="${e.code}"]`);
	const key = document.querySelector(`.key[data-key="${e.code}"]`);
	if (!audio) return;
	audio.currentTime = 0; //do press key many one
	key.classList.add('active_click'); //add class when press key
	audio.play();
}
// 
function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('active_click');
}

keys.forEach(key => {
	key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keypress', playApp);

//app work with click mouse
function playAppMouse() {
	keys.forEach(item => {
		item.addEventListener('click', function (e) {
			const audio = document.querySelector(`audio[data-key="${e.srcElement.dataset.key}"]`);
			if (!audio) return;
			audio.currentTime = 0;
			item.classList.add('active_click');
			audio.play();
		})
	})
}

window.addEventListener('click', playAppMouse);

