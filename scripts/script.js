const startBtn = document.getElementById('start')
const pulse = document.getElementById('pulse')
const result = document.getElementById('result')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

// options
recognition.continuous = true;
recognition.output = result.output
recognition.lang = "pt-BR";
recognition.interimResults = false;

startBtn.addEventListener('click', () => {
	recognition.start()

	// styles
	pulse.style.animation = 'pulse 1.5s linear infinite'
	startBtn.style.backgroundColor = 'rgb(144, 255, 162)'
})

recognition.onresult = (event) => {
	const textIndex = event.resultIndex
	const transcript = event.results[textIndex][0].transcript
	
	result.value += transcript
}

recognition.onaudioend = () => {
	// style
	pulse.style.animation = ''
	startBtn.style.backgroundColor = ''
}