const synthesis = window.speechSynthesis;

const getVoice = () => synthesis.getVoices().filter((voice) => voice.lang === 'en')[2];

export const createUtterance = (text) => {
    const utterance = new SpeechSynthesisUtterance();

    utterance.text = text;
    utterance.voice = getVoice();
    // utterance.pitch = this.pitch;
    utterance.rate = 1.2;
    // utterance.volume = this.volume;
    // utterance.text = this.phrase;

    return utterance;
};

export const speakUtterance = (utterance) => {
    synthesis.speak(utterance);
};
