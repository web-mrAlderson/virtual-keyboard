const Keyboard = {
    elements: {
        wrapper: null,
        keyboardContainer: null,
        keysConteiner: null,
        textEria: null,
        leng: false,
        capsLock: false
    },

    keyLayout: [{
        code: "Backquote",
        en: "`",
        ru: "ё",
        eventShiftRu: "Ё",
        eventShiftEn: "~",
        typeEnd: false,
        keyCode: 192
    }, {
        code: "Digit1",
        en: "1",
        ru: "1",
        eventShiftRu: "!",
        eventShiftEn: "!",
        typeEnd: false,
        keyCode: 49
    }, {
        code: "Digit2",
        en: "2",
        ru: "2",
        eventShiftRu: '"',
        eventShiftEn: "@",
        typeEnd: false,
        keyCode: 50
    }, {
        code: "Digit3",
        en: "3",
        ru: "3",
        eventShiftRu: "№",
        eventShiftEn: '#',
        typeEnd: false,
        keyCode: 51
    }, {
        code: "Digit4",
        en: "4",
        ru: "4",
        eventShiftRu: ";",
        eventShiftEn: '$',
        typeEnd: false,
        keyCode: 52
    }, {
        code: "Digit5",
        en: "5",
        ru: "5",
        eventShiftRu: "%",
        eventShiftEn: '%',
        typeEnd: false,
        keyCode: 53
    }, {
        code: "Digit6",
        en: "6",
        ru: "6",
        eventShiftRu: ":",
        eventShiftEn: "^",
        typeEnd: false,
        keyCode: 54
    }, {
        code: "Digit7",
        en: "7",
        ru: "7",
        eventShiftRu: "?",
        eventShiftEn: "&",
        typeEnd: false,
        keyCode: 55
    }, {
        code: "Digit8",
        en: "8",
        ru: "8",
        eventShiftRu: "*",
        eventShiftEn: "*",
        typeEnd: false,
        keyCode: 56
    }, {
        code: "Digit9",
        en: "9",
        ru: "9",
        eventShiftRu: "(",
        eventShiftEn: "(",
        typeEnd: false,
        keyCode: 57
    }, {
        code: "Digit0",
        en: "0",
        ru: "0",
        eventShiftRu: ")",
        eventShiftEn: ")",
        typeEnd: false,
        keyCode: 48
    }, {
        code: "Minus",
        en: "-",
        ru: "-",
        eventShiftRu: "_",
        eventShiftEn: "_",
        typeEnd: false,
        keyCode: 189
    }, {
        code: "Equal",
        en: "=",
        ru: "=",
        eventShiftRu: "+",
        eventShiftEn: "+",
        typeEnd: false,
        keyCode: 187
    }, {
        code: "Backspace",
        en: "Backspace",
        ru: "Backspace",
        eventShiftRu: "Backspace",
        eventShiftEn: "Backspace",
        typeEnd: true,
        keyCode: 8
    }, {
        code: "Tab",
        en: "Tab",
        ru: "Tab",
        eventShiftRu: "Tab",
        eventShiftEn: "Tab",
        typeEnd: false,
        keyCode: 9
    }, {
        code: "KeyQ",
        en: "q",
        ru: "й",
        eventShiftRu: "Й",
        eventShiftEn: "Q",
        typeEnd: false,
        keyCode: 81
    }, {
        code: "KeyW",
        en: "w",
        ru: "ц",
        eventShiftRu: "Ц",
        eventShiftEn: "W",
        typeEnd: false,
        keyCode: 87
    }, {
        code: "KeyE",
        en: "e",
        ru: "у",
        eventShiftRu: "У",
        eventShiftEn: "E",
        typeEnd: false,
        keyCode: 69
    }, {
        code: "KeyR",
        en: "r",
        ru: "к",
        eventShiftRu: "К",
        eventShiftEn: "R",
        typeEnd: false,
        keyCode: 82
    }, {
        code: "KeyT",
        en: "t",
        ru: "е",
        eventShiftRu: "Е",
        eventShiftEn: "T",
        typeEnd: false,
        keyCode: 84
    }, {
        code: "KeyY",
        en: "y",
        ru: "н",
        eventShiftRu: "Н",
        eventShiftEn: "Y",
        typeEnd: false,
        keyCode: 89
    }, {
        code: "KeyU",
        en: "u",
        ru: "г",
        eventShiftRu: "Г",
        eventShiftEn: "U",
        typeEnd: false,
        keyCode: 85
    }, {
        code: "KeyI",
        en: "i",
        ru: "ш",
        eventShiftRu: "Ш",
        eventShiftEn: "I",
        typeEnd: false,
        keyCode: 73
    }, {
        code: "KeyO",
        en: "o",
        ru: "щ",
        eventShiftRu: "Щ",
        eventShiftEn: "O",
        typeEnd: false,
        keyCode: 79
    }, {
        code: "KeyP",
        en: "p",
        ru: "з",
        eventShiftRu: "З",
        eventShiftEn: "P",
        typeEnd: false,
        keyCode: 80
    }, {
        code: "BracketLeft",
        en: "[",
        ru: "х",
        eventShiftRu: "Х",
        eventShiftEn: "[",
        typeEnd: false,
        keyCode: 219
    }, {
        code: "BracketRight",
        en: "]",
        ru: "ъ",
        eventShiftRu: "Ъ",
        eventShiftEn: "}",
        typeEnd: false,
        keyCode: 221
    }, {
        code: "Delete",
        en: "Delite",
        ru: "Delite",
        eventShiftRu: "Delite",
        eventShiftEn: "Delite",
        typeEnd: true,
        keyCode: 46
    }, {
        code: "CapsLock",
        en: "CapsLock",
        ru: "CapsLock",
        eventShiftRu: "CapsLock",
        eventShiftEn: "CapsLock",
        typeEnd: false,
        keyCode: 20
    }, {
        code: "KeyA",
        en: "a",
        ru: "ф",
        eventShiftRu: "Ф",
        eventShiftEn: "A",
        typeEnd: false,
        keyCode: 65
    }, {
        code: "KeyS",
        en: "s",
        ru: "ы",
        eventShiftRu: "Ы",
        eventShiftEn: "S",
        typeEnd: false,
        keyCode: 83
    }, {
        code: "KeyD",
        en: "d",
        ru: "в",
        eventShiftRu: "В",
        eventShiftEn: "D",
        typeEnd: false,
        keyCode: 68
    }, {
        code: "KeyF",
        en: "f",
        ru: "а",
        eventShiftRu: "А",
        eventShiftEn: "F",
        typeEnd: false,
        keyCode: 70
    }, {
        code: "KeyG",
        en: "g",
        ru: "п",
        eventShiftRu: "П",
        eventShiftEn: "G",
        typeEnd: false,
        keyCode: 71
    }, {
        code: "KeyH",
        en: "h",
        ru: "р",
        eventShiftRu: "Р",
        eventShiftEn: "H",
        typeEnd: false,
        keyCode: 72
    }, {
        code: "KeyJ",
        en: "j",
        ru: "о",
        eventShiftRu: "О",
        eventShiftEn: "J",
        typeEnd: false,
        keyCode: 74
    }, {
        code: "KeyK",
        en: "k",
        ru: "л",
        eventShiftRu: "Л",
        eventShiftEn: "K",
        typeEnd: false,
        keyCode: 75
    }, {
        code: "KeyL",
        en: "l",
        ru: "д",
        eventShiftRu: "Д",
        eventShiftEn: "L",
        typeEnd: false,
        keyCode: 76
    }, {
        code: "Semicolon",
        en: ";",
        ru: "ж",
        eventShiftRu: "Ж",
        eventShiftEn: ":",
        typeEnd: false,
        keyCode: 186
    }, {
        code: "Quote",
        en: "'",
        ru: "э",
        eventShiftRu: "Э",
        eventShiftEn: '"',
        typeEnd: false,
        keyCode: 222
    }, {
        code: "Backslash",
        en: "\\",
        ru: "\\",
        eventShiftRu: "/",
        eventShiftEn: "|",
        typeEnd: false,
        keyCode: 220
    }, {
        code: "Enter",
        en: "Enter",
        ru: "Enter",
        eventShiftRu: "Enter",
        eventShiftEn: "Enter",
        typeEnd: false,
        keyCode: 13
    }, {
        code: "ShiftLeft",
        en: "Shift",
        ru: "Shift",
        eventShiftRu: "Shift",
        eventShiftEn: "Shift",
        typeEnd: false,
        keyCode: 16
    }, {
        code: "KeyZ",
        en: "z",
        ru: "я",
        eventShiftRu: "Я",
        eventShiftEn: "Z",
        typeEnd: false,
        keyCode: 90
    }, {
        code: "KeyX",
        en: "x",
        ru: "ч",
        eventShiftRu: "Ч",
        eventShiftEn: "X",
        typeEnd: false,
        keyCode: 88
    }, {
        code: "KeyC",
        en: "c",
        ru: "с",
        eventShiftRu: "С",
        eventShiftEn: "C",
        typeEnd: false,
        keyCode: 67
    }, {
        code: "KeyV",
        en: "v",
        ru: "м",
        eventShiftRu: "М",
        eventShiftEn: "V",
        typeEnd: false,
        keyCode: 86
    }, {
        code: "KeyB",
        en: "b",
        ru: "и",
        eventShiftRu: "И",
        eventShiftEn: "B",
        typeEnd: false,
        keyCode: 66
    }, {
        code: "KeyN",
        en: "n",
        ru: "т",
        eventShiftRu: "Т",
        eventShiftEn: "N",
        typeEnd: false,
        keyCode: 78
    }, {
        code: "KeyM",
        en: "m",
        ru: "ь",
        eventShiftRu: "Ь",
        eventShiftEn: "M",
        typeEnd: false,
        keyCode: 77
    }, {
        code: "Comma",
        en: ",",
        ru: "б",
        eventShiftRu: "Б",
        eventShiftEn: "<",
        typeEnd: false,
        keyCode: 188
    }, {
        code: "Period",
        en: ".",
        ru: "ю",
        eventShiftRu: "Ю",
        eventShiftEn: ">",
        typeEnd: false,
        keyCode: 190
    }, {
        code: "Slash",
        en: "/",
        ru: ".",
        eventShiftRu: ",",
        eventShiftEn: "?",
        typeEnd: false,
        keyCode: 191
    }, {
        code: "ArrowUp",
        en: "&#10148;",
        ru: "&#10148;",
        eventShiftRu: "&#10148;",
        eventShiftEn: "&#10148;",
        typeEnd: true,
        keyCode: 38
    }, {
        code: "ShiftRight",
        en: "Shift",
        ru: "Shift",
        eventShiftRu: "Shift",
        eventShiftEn: "Shift",
        typeEnd: true,
        keyCode: 16
    }, {
        code: "ControlLeft",
        en: "Control",
        ru: "Control",
        eventShiftRu: "Control",
        eventShiftEn: "Control",
        typeEnd: false,
        keyCode: 17
    }, {
        code: "MetaLeft",
        en: "Win",
        ru: "Win",
        eventShiftRu: "Win",
        eventShiftEn: "Win",
        typeEnd: false,
        keyCode: 91
    }, {
        code: "AltLeft",
        en: "Alt",
        ru: "Alt",
        eventShiftRu: "Alt",
        eventShiftEn: "Alt",
        typeEnd: false,
        keyCode: 18
    }, {
        code: "Space",
        en: " ",
        ru: " ",
        eventShiftRu: " ",
        eventShiftEn: " ",
        typeEnd: false,
        keyCode: 32
    }, {
        code: "AltRight",
        en: "Alt",
        ru: "Alt",
        eventShiftRu: "Alt",
        eventShiftEn: "Alt",
        typeEnd: false,
        keyCode: 18
    }, {
        code: "ControlRight",
        en: "Control",
        ru: "Control",
        eventShiftRu: "Control",
        eventShiftEn: "Control",
        typeEnd: false,
        keyCode: 17
    }, {
        code: "ArrowLeft",
        en: "&#10148;",
        ru: "&#10148;",
        eventShiftRu: "&#10148;",
        eventShiftEn: "&#10148;",
        typeEnd: false,
        keyCode: 37
    }, {
        code: "ArrowDown",
        en: "&#10148;",
        ru: "&#10148;",
        eventShiftRu: "&#10148;",
        eventShiftEn: "&#10148;",
        typeEnd: false,
        keyCode: 40
    }, {
        code: "ArrowRight",
        en: "&#10148;",
        ru: "&#10148;",
        eventShiftRu: "&#10148;",
        eventShiftEn: "&#10148;",
        typeEnd: false,
        keyCode: 39
    }, ],

    init() {

        
        this.elements.wrapper = document.createElement("div");
        this.elements.keyboardContainer = document.createElement("div");
        this.elements.textEria = document.createElement("textarea");
        this.elements.keysConteiner = document.createElement("bottom");


        
        this.elements.wrapper.classList.add("wrapper");
        this.elements.textEria.classList.add("input");
        this.elements.keyboardContainer.classList.add("keyboard");
        this.elements.keysConteiner.classList.add("keyboard__key");


        
        let p = '<p>Лувый Ctrl меняет язык ввода</p>'
        this.elements.wrapper.appendChild(this.elements.textEria);
        this.elements.wrapper.appendChild(this.elements.keyboardContainer);


        document.body.appendChild(this.elements.wrapper);
        this.elements.textEria.focus();

    },

    createKeys(event) {
        let out = '';
        for (let i = 0; i < this.keyLayout.length; i++) {
            if (this.keyLayout[i].code == "Backspace" || this.keyLayout[i].code == "Delete") {
                out += '<div class="keyboard__key keyboard__key--hot--key" data="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>' + '</br>';
            } else if (this.keyLayout[i].code == "CapsLock") {
                out += '<div class="keyboard__key keyboard__key--hot--key" id="CapsLock" data="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>';
            } else if (this.keyLayout[i].code == "Enter") {
                out += '<div class="keyboard__key" data="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>' + '</br>';
            } else if (this.keyLayout[i].code == "ShiftLeft" && this.keyLayout[i].typeEnd == false) {
                out += '<div class="keyboard__key keyboard__key--shift" data="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>';
            } else if (this.keyLayout[i].code == "ShiftRight" && this.keyLayout[i].typeEnd == true) {
                out += '<div class="keyboard__key" data="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>' + '</br>';
            } else if (this.keyLayout[i].code == "Space") {
                out += '<div class="keyboard__key keyboard__key--hot--key--space" data="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>';
            } else if (this.keyLayout[i].code == "ArrowUp") {
                out += '<div class="keyboard__key" data="' + this.keyLayout[i].code + '">' + '<span class="keyboard__key--up--arrow">' + this.keyLayout[i][event] + '</span>' + '</div>';
            } else if (this.keyLayout[i].code == "ArrowLeft") {
                out += '<div class="keyboard__key" data="' + this.keyLayout[i].code + '">' + '<span class="keyboard__key--left--arrow">' + this.keyLayout[i][event] + '</span>' + '</div>';
            } else if (this.keyLayout[i].code == "ArrowDown") {
                out += '<div class="keyboard__key" data="' + this.keyLayout[i].code + '">' + '<span class="keyboard__key--arrow--to--down">' + this.keyLayout[i][event] + '</span>' + '</div>';
            } else {
                out += '<div class="keyboard__key" data="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>';
            }
        }
        return document.querySelector('.keyboard').innerHTML = out;

    },
}

const ru            = "ru"
const en            = "en"
const eventShiftRu  = "eventShiftRu"
const eventShiftEn  = "eventShiftEn"

Keyboard.init();
Keyboard.createKeys(en);
document.onkeydown = function (event) {
    document.querySelector('.keyboard__key[data="' + event.code + '"]').classList.add('active');
    if (event.code == "CapsLock" && Keyboard.elements.capsLock == false && Keyboard.elements.leng == true) {
        Keyboard.elements.capsLock == true
        Keyboard.createKeys(eventShiftRu);
        
    } else if (event.code == "CapsLock" && Keyboard.elements.capsLock == true && Keyboard.elements.leng == true) {
        Keyboard.elements.capsLock == false
        Keyboard.createKeys(ru);
        
    };
    if (event.code == "ShiftLeft" && Keyboard.elements.leng == false || event.code == "ShiftRight" && Keyboard.elements.leng == false) {
        Keyboard.createKeys(eventShiftEn);
        console.log(event.code);
    } else if (event.code == "ShiftLeft" && Keyboard.elements.leng == true || event.code == "ShiftRight" && Keyboard.elements.leng == true) {
        Keyboard.createKeys(eventShiftRu);
    };
    if (event.code == "ControlRight" && Keyboard.elements.leng == false) {
        document.querySelector('.keyboard__key[data="' + event.code + '"]').classList.add('active');
        Keyboard.elements.leng = true;
        Keyboard.createKeys(ru);
    } else if (event.code == "ControlRight" && Keyboard.elements.leng == true) {
        Keyboard.elements.leng = false;
        Keyboard.createKeys(en);
    }
};


document.onkeyup = function (event) {
    document.querySelector('.keyboard__key[data="' + event.code + '"]').classList.remove('active');
    if (event.code == "ShiftLeft" || event.code == "ShiftRight") {
        Keyboard.createKeys(en);
    };
};

// const capss = document.getElementById("CapsLock");

// capss.addEventListener("click", capsRun);

// capsRun = () => {
//     if (Keyboard.keyLayout[16].typeEnd == false && Keyboard.elements.leng == false) {
//         Keyboard.keyLayout[16].typeEnd = true;
//         Keyboard.createKeys(eventShiftEn);
//         capss.removeEventListener("click", caps);
//     }
// };