document.getElementsByTagName("span")[0].innerHTML = "ten.sistim@reKsotsirhC";
document.getElementsByTagName("html")[0].className = "js";
function iLikeCats(s) {
	location.href = decryptString(s, -1);
}
function decryptCharcode(n, start, end, offset) {
	n = n + offset;
	if (offset > 0 && n > end) {
		n = start + (n - end - 1);
	} else if (offset < 0 && n < start) {
		n = end - (start - n - 1);
	}
	return String.fromCharCode(n);
}
function decryptString(enc, offset) {
	let dec = "";
	let len = enc.length;
	for (let i = 0; i < len; i++) {
		let n = enc.charCodeAt(i);
		if (n >= 0x2b && n <= 0x3a) {
			dec += decryptCharcode(n, 0x2b, 0x3a, offset);
		} else if (n >= 0x40 && n <= 0x5a) {
			dec += decryptCharcode(n, 0x40, 0x5a, offset);
		} else if (n >= 0x61 && n <= 0x7a) {
			dec += decryptCharcode(n, 0x61, 0x7a, offset);
		} else {
			dec += enc.charAt(i);
		}
	}
	return dec;
}


console.log('%c Konami Code ... ', 'background: #222; color: lime; font-weight: bold; font-size: 20px;');
let allowedKeys = {37: 'left', 38: 'up', 39: 'right', 40: 'down', 65: 'a', 66: 'b'};
let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
let audio = new Audio('audio/achievment_02.mp3');
let konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
	let key = allowedKeys[e.keyCode];
	let requiredKey = konamiCode[konamiCodePosition];

	if (key == requiredKey) {
		konamiCodePosition++;
		if (konamiCodePosition === konamiCode.length) {
			activateCheats();
			konamiCodePosition = 0;
		}
	} else {
		konamiCodePosition = 0;
	}
});


function activateCheats() {
	let audio = new Audio('audio/achievment_02.mp3');
	audio.play();
	body.classList.add('speed');
	console.log('%c Konami Code ACTIVE ', 'background: #222; color: lime; font-weight: bold; font-size: 20px;');
}