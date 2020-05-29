/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */

import keyLayout from '../layouts/base.js';
import create from './create.js';

export const Keyboard = {
  elements: {
    wrapper: null,
    keyboardContainer: null,
    keysConteiner: null,
    textEria: null,
    information: null,
    ru: 'ru',
    en: 'en',
    eventShiftRu: 'eventShiftRu',
    eventShiftEn: 'eventShiftEn',
    capsEn: 'capsLockEn',
    capsRu: 'capsLockRu',
  },


  init() {
    this.elements.wrapper = document.createElement('div');
    this.elements.keyboardContainer = document.createElement('div');
    this.elements.textEria = document.createElement('textarea');
    this.elements.keysConteiner = document.createElement('bottom');
    this.elements.information = document.createElement('p');


    this.elements.wrapper.classList.add('wrapper');
    this.elements.textEria.classList.add('input');
    this.elements.textEria.id = 'Eria';
    this.elements.keyboardContainer.classList.add('keyboard');
    this.elements.keyboardContainer.id = 'keyboard';
    this.elements.keysConteiner.classList.add('keyboard__key');
    this.elements.information.textContent = 'Правый Ctrl меняет язык ввода';


    this.elements.wrapper.appendChild(this.elements.textEria);
    this.elements.wrapper.appendChild(this.elements.keyboardContainer);
    this.elements.wrapper.appendChild(this.elements.information);

    document.body.prepend(this.elements.wrapper);
    this.elements.textEria.focus();
  },

  createKeys(event) {
    const classKey = 'keyboard__key';
    const out = [];
    for (let i = 0; i < keyLayout.length; i += 1) {
      switch (keyLayout[i].code) {
        case 'Backspace':
          out[i] = create.createEl('div', `${classKey} keyboard__key--hot--key`,
            keyLayout[i][event],
            null,
            ['data', `${keyLayout[i].code}`]);
          break;
        case 'Delete':
          out[i] = create.createEl('div', `${classKey} keyboard__key--hot--key`,
            keyLayout[i][event],
            null,
            ['data', `${keyLayout[i].code}`]);
          break;
        case 'CapsLock':
          out[i] = create.createEl('div', `${classKey} keyboard__key--hot--key`,
            keyLayout[i][event],
            null,
            ['id', keyLayout[i].code], ['data', keyLayout[i].code]);
          break;
        case 'Enter':
          out[i] = create.createEl('div', classKey,
            keyLayout[i][event],
            null,
            ['data', `${keyLayout[i].code}`]);
          break;
        case 'ShiftLeft':
          out[i] = create.createEl('div', `${classKey} keyboard__key--shift`,
            keyLayout[i][event],
            null,
            ['data', `${keyLayout[i].code}`]);
          break;
        case 'ShiftRight':
          out[i] = create.createEl('div', classKey,
            keyLayout[i][event],
            null,
            ['data', `${keyLayout[i].code}`]);
          break;
        case 'Space':
          out[i] = create.createEl('div', `${classKey} keyboard__key--hot--key--space`,
            keyLayout[i][event],
            null,
            ['data', `${keyLayout[i].code}`]);
          break;
        case 'ArrowUp':
          out[i] = create.createEl('div', classKey,
            `<span class='keyboard__key--up--arrow' >${keyLayout[i][event]}`,
            null,
            ['data', `${keyLayout[i].code}`]);
          break;
        case 'ArrowLeft':
          out[i] = create.createEl('div', classKey,
            `<span class="keyboard__key--left--arrow">${keyLayout[i][event]}</span>`,
            null,
            ['data', `${keyLayout[i].code}`]);
          break;
        case 'ArrowDown':
          out[i] = create.createEl('div', classKey,
            `<span  class="keyboard__key--arrow--to--down">${keyLayout[i][event]} </span>`,
            null,
            ['data', `${keyLayout[i].code}`]);
          break;
        default:
          out[i] = create.createEl('div', classKey, keyLayout[i][event],
            null,
            ['data', keyLayout[i].code]);
      }
    }
    out.forEach((element) => {
      document.querySelector('.keyboard').appendChild(element);
    });
    return out;
  },
  clearHtml() {
    this.keyboard.innerHTML = '';
  },
};
