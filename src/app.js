/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint linebreak-style: ["error", "windows"] */
import { Keyboard, changeLang } from './components/index.js';

Keyboard.init();
Keyboard.createKeys(Keyboard.elements.en);
changeLang.keyDown(Keyboard.elements.keyboardContainer,
  Keyboard.elements.en,
  Keyboard.elements.ru,
  Keyboard.elements.eventShiftEn,
  Keyboard.elements.eventShiftRu,
  Keyboard.createKeys,
  Keyboard.elements.capsEn,
  Keyboard.elements.capsRu,
  Keyboard.clearHtml);

const textAria = document.getElementById('Eria');
textAria.onblur = () => {
  textAria.focus();
};
// collector.init();
