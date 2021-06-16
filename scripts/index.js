const GREETINGS = {
    ENGLISH:     "Hello",
    GERMAN:      "Hallo",
    FRENCH:      "Bonjour",
    SPANISH:     "Hola",
    ITALIAN:     "Salve",
    CHINESE:     "您好",
    INDIAN:      "नमस्कार",
    RUSSIAN:     "Здравствуйте",
    TURKISH:     "Merhaba",
    ARABIC:      "مرحبا",
    JAPANESE:    "こんにちは",
    KOREAN:      "안녕하세요",
    SWEDISH:     "Hej",
    IRISH:       "Dia dhuit",
    CZECH:       "Ahoj",
    POLISH:      "Cześć",
    GREEK:       "Χαίρετε",
    AZERBAIJANI: "Salam",
    ARMENIAN:    "Բարեւ",
    PERSIAN:     "سلام",
    FINNISH:     "Hei",
    JEWISH:      "שלום",
    GEORGIAN:    "გამარჯობა",
    KAZAKH:      "Сәлеметсіз бе",
    QIRGIZ:      "Салам",
    LATVIAN:     "Sveiki",
    ROMANIAN:    "Buna ziua",
    ALBANIAN:    "Përshëndetje",
    HUNGARIAN:   "Szia",
    MONGOLIAN:   "Сайн уу",
    PORTUGUESE:  "Olá",
    VIETNAMESE:  "Xin chào",
    KHMER:       "សួស្តី",
    UYGHUR:      "ياخشىمۇسىز",
    IGBO:        "Nnọọ",
    KANNADA:     "ಹಲೋ",
    SINHALA:     "ආයුබෝවන්",
    TELUGU:      "హలో",
    ZULU:        "Sawubona",
    YORUBA:      "Pẹlẹ o"
};

function animation() {
    /* Animation resets */
    if (animation.lang == undefined) {
        animation.lang = 0;
        animation.char = 0;
        animation.lr   = true;
    }

    /* Print the current animation */
    document.getElementById("greetings").innerText = '\xa0' + Object.values(GREETINGS)[animation.lang].substr(0, animation.lr ? animation.char++ : animation.char--) + '\xa0';

    /* Full greeting is printed, wait longer and then start erasing */
    if (animation.char == Object.values(GREETINGS)[animation.lang].length + 1) {
        animation.lr = false;
        setTimeout(() => animation(), 700);
        return;
    }

    /* Animation completes and switches to the next language */
    if (animation.char == -1) {
        animation.lang = (animation.lang + 1) % Object.values(GREETINGS).length;
        animation.lr   = true;
    }

    setTimeout(() => animation(), 50);
}