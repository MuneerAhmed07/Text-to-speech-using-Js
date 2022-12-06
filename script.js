let speakBtn = document.querySelector('.speak-btn');

speakBtn.addEventListener('click', () => {
    let text = document.querySelector('.enter-text').value;
    
    let speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';
    speech.text = text; 
    speech.rate = 1; // From 0.1 to 10
    speech.volume = 1; // From 0 to 1
    speech.pitch = 1; // From 0 to 2

    speechSynthesis.speak(speech);
});