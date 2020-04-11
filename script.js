const Keyboard = {
    elements: {
        wrapper: null,
        keyboardContainer: null,
        keysConteiner: null,
        textEria: null,
        information: null,
        leng: false,
        capsLock: false,
        ru: "ru",
        en: "en",
        eventShiftRu: "eventShiftRu",
        eventShiftEn: "eventShiftEn",
        capsEn: "capsLockEn",
        capsRu: "capsLockRu",
    },

    keyLayout: [{
        code: "Backquote",
        en: "`",
        ru: "ё",
        capsLockEn: "`",
        capsLockRu: "Ё",
        eventShiftRu: "Ё",
        eventShiftEn: "~",
        typeEnd: false,
        keyCode: 192
    }, {
        code: "Digit1",
        en: "1",
        ru: "1",
        capsLockEn: "1",
        capsLockRu: "1",
        eventShiftRu: "!",
        eventShiftEn: "!",
        typeEnd: false,
        keyCode: 49
    }, {
        code: "Digit2",
        en: "2",
        ru: "2",
        capsLockEn: "2",
        capsLockRu: "2",
        eventShiftRu: '"',
        eventShiftEn: "@",
        typeEnd: false,
        keyCode: 50
    }, {
        code: "Digit3",
        en: "3",
        ru: "3",
        capsLockEn: "3",
        capsLockRu: "3",
        eventShiftRu: "№",
        eventShiftEn: '#',
        typeEnd: false,
        keyCode: 51
    }, {
        code: "Digit4",
        en: "4",
        ru: "4",
        capsLockEn: "4",
        capsLockRu: "4",
        eventShiftRu: ";",
        eventShiftEn: '$',
        typeEnd: false,
        keyCode: 52
    }, {
        code: "Digit5",
        en: "5",
        ru: "5",
        capsLockEn: "5",
        capsLockRu: "5",
        eventShiftRu: "%",
        eventShiftEn: '%',
        typeEnd: false,
        keyCode: 53
    }, {
        code: "Digit6",
        en: "6",
        ru: "6",
        capsLockEn: "6",
        capsLockRu: "6",
        eventShiftRu: ":",
        eventShiftEn: "^",
        typeEnd: false,
        keyCode: 54
    }, {
        code: "Digit7",
        en: "7",
        ru: "7",
        capsLockEn: "7",
        capsLockRu: "7",
        eventShiftRu: "?",
        eventShiftEn: "&",
        typeEnd: false,
        keyCode: 55
    }, {
        code: "Digit8",
        en: "8",
        ru: "8",
        capsLockEn: "8",
        capsLockRu: "8",
        eventShiftRu: "*",
        eventShiftEn: "*",
        typeEnd: false,
        keyCode: 56
    }, {
        code: "Digit9",
        en: "9",
        ru: "9",
        capsLockEn: "9",
        capsLockRu: "9",
        eventShiftRu: "(",
        eventShiftEn: "(",
        typeEnd: false,
        keyCode: 57
    }, {
        code: "Digit0",
        en: "0",
        ru: "0",
        capsLockEn: "0",
        capsLockRu: "0",
        eventShiftRu: ")",
        eventShiftEn: ")",
        typeEnd: false,
        keyCode: 48
    }, {
        code: "Minus",
        en: "-",
        ru: "-",
        capsLockEn: "-",
        capsLockRu: "-",
        eventShiftRu: "_",
        eventShiftEn: "_",
        typeEnd: false,
        keyCode: 189
    }, {
        code: "Equal",
        en: "=",
        ru: "=",
        capsLockEn: "=",
        capsLockRu: "=",
        eventShiftRu: "+",
        eventShiftEn: "+",
        typeEnd: false,
        keyCode: 187
    }, {
        code: "Backspace",
        en: "Backspace",
        ru: "Backspace",
        capsLockEn: "Backspace",
        capsLockRu: "Backspace",
        eventShiftRu: "Backspace",
        eventShiftEn: "Backspace",
        typeEnd: true,
        keyCode: 8
    }, {
        code: "Tab",
        en: "Tab",
        ru: "Tab",
        capsLockEn: "Tab",
        capsLockRu: "Tab",
        eventShiftRu: "Tab",
        eventShiftEn: "Tab",
        typeEnd: false,
        keyCode: 9
    }, {
        code: "KeyQ",
        en: "q",
        ru: "й",
        capsLockEn: "Q",
        capsLockRu: "Й",
        eventShiftRu: "Й",
        eventShiftEn: "Q",
        typeEnd: false,
        keyCode: 81
    }, {
        code: "KeyW",
        en: "w",
        ru: "ц",
        capsLockEn: "W",
        capsLockRu: "Ц",
        eventShiftRu: "Ц",
        eventShiftEn: "W",
        typeEnd: false,
        keyCode: 87
    }, {
        code: "KeyE",
        en: "e",
        ru: "у",
        capsLockEn: "E",
        capsLockRu: "У",
        eventShiftRu: "У",
        eventShiftEn: "E",
        typeEnd: false,
        keyCode: 69
    }, {
        code: "KeyR",
        en: "r",
        ru: "к",
        capsLockEn: "R",
        capsLockRu: "К",
        eventShiftRu: "К",
        eventShiftEn: "R",
        typeEnd: false,
        keyCode: 82
    }, {
        code: "KeyT",
        en: "t",
        ru: "е",
        capsLockEn: "T",
        capsLockRu: "Е",
        eventShiftRu: "Е",
        eventShiftEn: "T",
        typeEnd: false,
        keyCode: 84
    }, {
        code: "KeyY",
        en: "y",
        ru: "н",
        capsLockEn: "Y",
        capsLockRu: "Н",
        eventShiftRu: "Н",
        eventShiftEn: "Y",
        typeEnd: false,
        keyCode: 89
    }, {
        code: "KeyU",
        en: "u",
        ru: "г",
        capsLockEn: "U",
        capsLockRu: "Г",
        eventShiftRu: "Г",
        eventShiftEn: "U",
        typeEnd: false,
        keyCode: 85
    }, {
        code: "KeyI",
        en: "i",
        ru: "ш",
        capsLockEn: "I",
        capsLockRu: "Ш",
        eventShiftRu: "Ш",
        eventShiftEn: "I",
        typeEnd: false,
        keyCode: 73
    }, {
        code: "KeyO",
        en: "o",
        ru: "щ",
        capsLockEn: "O",
        capsLockRu: "Щ",
        eventShiftRu: "Щ",
        eventShiftEn: "O",
        typeEnd: false,
        keyCode: 79
    }, {
        code: "KeyP",
        en: "p",
        ru: "з",
        capsLockEn: "P",
        capsLockRu: "З",
        eventShiftRu: "З",
        eventShiftEn: "P",
        typeEnd: false,
        keyCode: 80
    }, {
        code: "BracketLeft",
        en: "[",
        ru: "х",
        capsLockEn: "[",
        capsLockRu: "Х",
        eventShiftRu: "Х",
        eventShiftEn: "[",
        typeEnd: false,
        keyCode: 219
    }, {
        code: "BracketRight",
        en: "]",
        ru: "ъ",
        capsLockEn: "]",
        capsLockRu: "Ъ",
        eventShiftRu: "Ъ",
        eventShiftEn: "}",
        typeEnd: false,
        keyCode: 221
    }, {
        code: "Delete",
        en: "Delete",
        ru: "Delete",
        capsLockEn: "Delete",
        capsLockRu: "Delete",
        eventShiftRu: "Delete",
        eventShiftEn: "Delete",
        typeEnd: true,
        keyCode: 46
    }, {
        code: "CapsLock",
        en: "CapsLock",
        ru: "CapsLock",
        capsLockEn: "CapsLock",
        capsLockRu: "CapsLock",
        eventShiftRu: "CapsLock",
        eventShiftEn: "CapsLock",
        typeEnd: false,
        keyCode: 20
    }, {
        code: "KeyA",
        en: "a",
        ru: "ф",
        capsLockEn: "A",
        capsLockRu: "Ф",
        eventShiftRu: "Ф",
        eventShiftEn: "A",
        typeEnd: false,
        keyCode: 65
    }, {
        code: "KeyS",
        en: "s",
        ru: "ы",
        capsLockEn: "S",
        capsLockRu: "Ы",
        eventShiftRu: "Ы",
        eventShiftEn: "S",
        typeEnd: false,
        keyCode: 83
    }, {
        code: "KeyD",
        en: "d",
        ru: "в",
        capsLockEn: "D",
        capsLockRu: "В",
        eventShiftRu: "В",
        eventShiftEn: "D",
        typeEnd: false,
        keyCode: 68
    }, {
        code: "KeyF",
        en: "f",
        ru: "а",
        capsLockEn: "F",
        capsLockRu: "А",
        eventShiftRu: "А",
        eventShiftEn: "F",
        typeEnd: false,
        keyCode: 70
    }, {
        code: "KeyG",
        en: "g",
        ru: "п",
        capsLockEn: "G",
        capsLockRu: "П",
        eventShiftRu: "П",
        eventShiftEn: "G",
        typeEnd: false,
        keyCode: 71
    }, {
        code: "KeyH",
        en: "h",
        ru: "р",
        capsLockEn: "H",
        capsLockRu: "Р",
        eventShiftRu: "Р",
        eventShiftEn: "H",
        typeEnd: false,
        keyCode: 72
    }, {
        code: "KeyJ",
        en: "j",
        ru: "о",
        capsLockEn: "J",
        capsLockRu: "О",
        eventShiftRu: "О",
        eventShiftEn: "J",
        typeEnd: false,
        keyCode: 74
    }, {
        code: "KeyK",
        en: "k",
        ru: "л",
        capsLockEn: "K",
        capsLockRu: "Л",
        eventShiftRu: "Л",
        eventShiftEn: "K",
        typeEnd: false,
        keyCode: 75
    }, {
        code: "KeyL",
        en: "l",
        ru: "д",
        capsLockEn: "L",
        capsLockRu: "Д",
        eventShiftRu: "Д",
        eventShiftEn: "L",
        typeEnd: false,
        keyCode: 76
    }, {
        code: "Semicolon",
        en: ";",
        ru: "ж",
        capsLockEn: ";",
        capsLockRu: "Ж",
        eventShiftRu: "Ж",
        eventShiftEn: ":",
        typeEnd: false,
        keyCode: 186
    }, {
        code: "Quote",
        en: "'",
        ru: "э",
        capsLockEn: "'",
        capsLockRu: "Э",
        eventShiftRu: "Э",
        eventShiftEn: '"',
        typeEnd: false,
        keyCode: 222
    }, {
        code: "Backslash",
        en: "\\",
        ru: "\\",
        capsLockEn: "\\",
        capsLockRu: "\\",
        eventShiftRu: "/",
        eventShiftEn: "|",
        typeEnd: false,
        keyCode: 220
    }, {
        code: "Enter",
        en: "Enter",
        ru: "Enter",
        capsLockEn: "Enter",
        capsLockRu: "Enter",
        eventShiftRu: "Enter",
        eventShiftEn: "Enter",
        typeEnd: false,
        keyCode: 13
    }, {
        code: "ShiftLeft",
        en: "Shift",
        ru: "Shift",
        capsLockEn: "Shift",
        capsLockRu: "Shift",
        eventShiftRu: "Shift",
        eventShiftEn: "Shift",
        typeEnd: false,
        keyCode: 16
    }, {
        code: "KeyZ",
        en: "z",
        ru: "я",
        capsLockEn: "Z",
        capsLockRu: "Я",
        eventShiftRu: "Я",
        eventShiftEn: "Z",
        typeEnd: false,
        keyCode: 90
    }, {
        code: "KeyX",
        en: "x",
        ru: "ч",
        capsLockEn: "X",
        capsLockRu: "Ч",
        eventShiftRu: "Ч",
        eventShiftEn: "X",
        typeEnd: false,
        keyCode: 88
    }, {
        code: "KeyC",
        en: "c",
        ru: "с",
        capsLockEn: "C",
        capsLockRu: "С",
        eventShiftRu: "С",
        eventShiftEn: "C",
        typeEnd: false,
        keyCode: 67
    }, {
        code: "KeyV",
        en: "v",
        ru: "м",
        capsLockEn: "V",
        capsLockRu: "М",
        eventShiftRu: "М",
        eventShiftEn: "V",
        typeEnd: false,
        keyCode: 86
    }, {
        code: "KeyB",
        en: "b",
        ru: "и",
        capsLockEn: "B",
        capsLockRu: "И",
        eventShiftRu: "И",
        eventShiftEn: "B",
        typeEnd: false,
        keyCode: 66
    }, {
        code: "KeyN",
        en: "n",
        ru: "т",
        capsLockEn: "N",
        capsLockRu: "Т",
        eventShiftRu: "Т",
        eventShiftEn: "N",
        typeEnd: false,
        keyCode: 78
    }, {
        code: "KeyM",
        en: "m",
        ru: "ь",
        capsLockEn: "M",
        capsLockRu: "Ь",
        eventShiftRu: "Ь",
        eventShiftEn: "M",
        typeEnd: false,
        keyCode: 77
    }, {
        code: "Comma",
        en: ",",
        ru: "б",
        capsLockEn: ",",
        capsLockRu: "Б",
        eventShiftRu: "Б",
        eventShiftEn: "<",
        typeEnd: false,
        keyCode: 188
    }, {
        code: "Period",
        en: ".",
        ru: "ю",
        capsLockEn: ".",
        capsLockRu: "Ю",
        eventShiftRu: "Ю",
        eventShiftEn: ">",
        typeEnd: false,
        keyCode: 190
    }, {
        code: "Slash",
        en: "/",
        ru: ".",
        capsLockEn: "/",
        capsLockRu: ".",
        eventShiftRu: ",",
        eventShiftEn: "?",
        typeEnd: false,
        keyCode: 191
    }, {
        code: "ArrowUp",
        en: "&#10148;",
        ru: "&#10148;",
        capsLockEn: "&#10148;",
        capsLockRu: "&#10148",
        eventShiftRu: "&#10148;",
        eventShiftEn: "&#10148;",
        typeEnd: true,
        keyCode: 38
    }, {
        code: "ShiftRight",
        en: "Shift",
        ru: "Shift",
        capsLockEn: "Shift",
        capsLockRu: "Shift",
        eventShiftRu: "Shift",
        eventShiftEn: "Shift",
        typeEnd: true,
        keyCode: 16
    }, {
        code: "ControlLeft",
        en: "Control",
        ru: "Control",
        capsLockEn: "Control",
        capsLockRu: "Control",
        eventShiftRu: "Control",
        eventShiftEn: "Control",
        typeEnd: false,
        keyCode: 17
    }, {
        code: "MetaLeft",
        en: "Win",
        ru: "Win",
        capsLockEn: "Win",
        capsLockRu: "Win",
        eventShiftRu: "Win",
        eventShiftEn: "Win",
        typeEnd: false,
        keyCode: 91
    }, {
        code: "AltLeft",
        en: "Alt",
        ru: "Alt",
        capsLockEn: "Alt",
        capsLockRu: "Alt",
        eventShiftRu: "Alt",
        eventShiftEn: "Alt",
        typeEnd: false,
        keyCode: 18
    }, {
        code: "Space",
        en: " ",
        ru: " ",
        capsLockEn: " ",
        capsLockRu: " ",
        eventShiftRu: " ",
        eventShiftEn: " ",
        typeEnd: false,
        keyCode: 32
    }, {
        code: "AltRight",
        en: "Alt",
        ru: "Alt",
        capsLockEn: "Alt",
        capsLockRu: "Alt",
        eventShiftRu: "Alt",
        eventShiftEn: "Alt",
        typeEnd: false,
        keyCode: 18
    }, {
        code: "ControlRight",
        en: "Control",
        ru: "Control",
        capsLockEn: "Control",
        capsLockRu: "Contro",
        eventShiftRu: "Control",
        eventShiftEn: "Control",
        typeEnd: false,
        keyCode: 17
    }, {
        code: "ArrowLeft",
        en: "&#10148;",
        ru: "&#10148;",
        capsLockEn: "&#10148;",
        capsLockRu: "&#10148;",
        eventShiftRu: "&#10148;",
        eventShiftEn: "&#10148;",
        typeEnd: false,
        keyCode: 37
    }, {
        code: "ArrowDown",
        en: "&#10148;",
        ru: "&#10148;",
        capsLockEn: "&#10148;",
        capsLockRu: "&#10148;",
        eventShiftRu: "&#10148;",
        eventShiftEn: "&#10148;",
        typeEnd: false,
        keyCode: 40
    }, {
        code: "ArrowRight",
        en: "&#10148;",
        ru: "&#10148;",
        capsLockEn: "&#10148;",
        capsLockRu: "&#10148;",
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
        this.elements.information = document.createElement("p");



        this.elements.wrapper.classList.add("wrapper");
        this.elements.textEria.classList.add("input");
        this.elements.keyboardContainer.classList.add("keyboard");
        this.elements.keysConteiner.classList.add("keyboard__key");
        this.elements.information.textContent = "Правый Ctrl меняет язык ввода";


        this.elements.wrapper.appendChild(this.elements.textEria);
        this.elements.wrapper.appendChild(this.elements.keyboardContainer);
        this.elements.wrapper.appendChild(this.elements.information);

        document.body.appendChild(this.elements.wrapper);
        this.elements.textEria.focus();

    },

    createKeys(event) {
        let out = '';
        for (let i = 0; i < this.keyLayout.length; i++) {
            out += '<div class="keyboard__key';
            switch (this.keyLayout[i].code){
             case "Backspace":
                out += ' keyboard__key--hot--key" data-code="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>' + '</br>';
                break;
             case "Delete":
                out += ' keyboard__key--hot--key" data-code="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>' + '</br>';
                break;
            case "CapsLock":
                out += ' keyboard__key--hot--key" id="CapsLock" data-code="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>';
                break;
            case "Enter":
                out += '" data-code="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>' + '</br>';
                break;
            case "ShiftLeft":
                out += ' keyboard__key--shift" data-code="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>';
                break;
            case "ShiftRight":
                out += '" data-code="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>' + '</br>';
                break;
            case "Space":
                out += ' keyboard__key--hot--key--space" data-code="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>';
                break;
            case "ArrowUp":
                out += '" data-code="' + this.keyLayout[i].code + '">' + '<span class="keyboard__key--up--arrow">' + this.keyLayout[i][event] + '</span>' + '</div>';
                break;
            case "ArrowLeft":
                out += '" data-code="' + this.keyLayout[i].code + '">' + '<span class="keyboard__key--left--arrow">' + this.keyLayout[i][event] + '</span>' + '</div>';
                break;
            case "ArrowDown":
                out += '" data-code="' + this.keyLayout[i].code + '">' + '<span class="keyboard__key--arrow--to--down">' + this.keyLayout[i][event] + '</span>' + '</div>';
                break;
            default:
                out += '" data-code="' + this.keyLayout[i].code + '">' + this.keyLayout[i][event] + '</div>';
            }
        }
        return document.querySelector('.keyboard').innerHTML = out;

    },
}

Keyboard.init();
Keyboard.createKeys(Keyboard.elements.en);
document.onkeydown = function (event) {
    document.querySelector('.keyboard__key[data-code="' + event.code + '"]').classList.add('active');
    if (event.code == "CapsLock" && Keyboard.elements.capsLock == false && Keyboard.elements.leng == false) {
        Keyboard.elements.capsLock = true;
        Keyboard.createKeys(Keyboard.elements.capsEn);

    } else if (event.code == "CapsLock" && Keyboard.elements.capsLock == true && Keyboard.elements.leng == false) {
        Keyboard.elements.capsLock = false;
        Keyboard.createKeys(Keyboard.elements.en);
    };
    if (event.code == "CapsLock" && Keyboard.elements.capsLock == false && Keyboard.elements.leng == true) {
        Keyboard.elements.capsLock = true;
        Keyboard.createKeys(Keyboard.elements.capsRu);

    }else if (event.code == "CapsLock" && Keyboard.elements.capsLock == true && Keyboard.elements.leng == true) {
        Keyboard.elements.capsLock = false;
        Keyboard.createKeys(Keyboard.elements.ru);
    };
    if (event.code == "ShiftLeft" && Keyboard.elements.leng == false || event.code == "ShiftRight" && Keyboard.elements.leng == false) {
        Keyboard.createKeys(Keyboard.elements.eventShiftEn);
        console.log(event.code);
    } else if (event.code == "ShiftLeft" && Keyboard.elements.leng == true || event.code == "ShiftRight" && Keyboard.elements.leng == true) {
        Keyboard.createKeys(Keyboard.elements.eventShiftRu);
    };
    if (event.code == "ControlRight" && Keyboard.elements.leng == false) {
        document.querySelector('.keyboard__key[data-code="' + event.code + '"]').classList.add('active');
        Keyboard.elements.leng = true;
        Keyboard.createKeys(Keyboard.elements.ru);
    } else if (event.code == "ControlRight" && Keyboard.elements.leng == true) {
        Keyboard.elements.leng = false;
        Keyboard.createKeys(Keyboard.elements.en);
    }
};


document.onkeyup = function (event) {
    document.querySelector('.keyboard__key[data-code="' + event.code + '"]').classList.remove('active');
    if (event.code == "ShiftLeft" || event.code == "ShiftRight") {
        Keyboard.createKeys(Keyboard.elements.en);
    };
};