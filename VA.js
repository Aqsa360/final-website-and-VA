let btn = document.querySelector("#btn");
let speechText = document.querySelector("#speechText");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "eng-GB";
    window.speechSynthesis.speak(text_speak);
}

 function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    speechText.innerText = transcript;
    takeCommand(transcript);
};

if ('SpeechRecognition' in window) {
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.start();
} else {
    speechText.innerText = "Your browser is not supported";
}

btn.addEventListener("click", () => {
    recognition.start();
  
});

function takeCommand(message) {
    message = message.toLowerCase(); // Convert the message to lower case to improve command matching
    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello sir, how can I help you?");
    } else if (message.includes("who are you")) {
        speak("I am Estella, your virtual assistant, created by Aqsa and Iman");
    }   else if (message.includes("open website")) {
            speak("Opening website created by aqsa and iman");
            window.open("http://127.0.0.1:5500/index.html");
        }
    else if (message.includes("open youtube")) {
        speak("Opening Youtube");
        window.open("https://www.youtube.com/");
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook");
        window.open("https://www.facebook.com/");
    }
    else if (message.includes("open instagram")) {
        speak("Opening instagram");
        window.open("https://www.instagram.com/");
    }
    else if (message.includes("open github account")) {
        speak("Opening aqsa github account");
        window.open("https://github.com/Aqsa360?tab=repositories");
    }
    else if (message.includes("open google")) {
        speak("Opening google");
        window.open("https://www.google.com/");
    }
    else{
    
        speak(`this is what i found on internet regarding ${message}`);
        window.open(`https://www.google.com/search?q=${message}`);
    }
}
