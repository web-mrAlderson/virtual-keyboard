/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */

import {
  hotShift,
  CapsLock,
  hotTab,
  Backspace,
  Key,
} from '../hotKey/index.js';


export const changeLang = {

  keyDown(keyboard,
    en, ru, eventShiftEn,
    eventShiftRu, callback, capsEn,
    capsRu, clearHtmlCallback) {
    const data = {
      keyboard,
      en,
      ru,
      eventShiftEn,
      eventShiftRu,
      callback,
      capsEn,
      capsRu,
      clearHtmlCallback,
    };
    keyboard.addEventListener('mousedown', (event) => {
      const dataKey = event.path[0].dataset.data;
      console.log(event.path[0].innerHTML.length);
      CapsLock.CapsLockDown(dataKey, data);
      hotShift.shiftkeyDown(dataKey, data);
      hotTab.tab(dataKey);
      Backspace.Back(dataKey);
      Key.key(event);
    });
    keyboard.addEventListener('mouseup', (event) => {
      const dataKey = event.path[0].dataset.data;
      hotShift.shiftkeyUp(dataKey, data);
    });
    document.onkeydown = (event) => {
      console.log(event.code);
      CapsLock.CapsLockDown(event.code, data);
      hotShift.shiftkeyDown(event.code, data);
      hotTab.tab(event.code);
      document.querySelector(`.keyboard__key[data-data="${event.code}"]`).classList.add('active');
    };
    document.onkeyup = (event) => {
      hotShift.shiftkeyUp(event.code, data);
      document.querySelector(`.keyboard__key[data-data="${event.code}"]`).classList.remove('active');
    };
  },
};
