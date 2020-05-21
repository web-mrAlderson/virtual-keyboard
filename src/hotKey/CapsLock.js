/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint linebreak-style: ["error", "windows"] */
import { toogle } from '../components/trigger.js';


export const CapsLock = {


  CapsLockDown(event, data) {
    if (event === 'CapsLock' && toogle.capsLock === false && toogle.leng === false) {
      data.clearHtmlCallback();
      data.callback(data.capsEn);
      toogle.capsLock = true;
    } else if (event === 'CapsLock' && toogle.capsLock === true && toogle.leng === false) {
      data.clearHtmlCallback();
      toogle.capsLock = false;
      data.callback(data.en);
    }
    if (event === 'CapsLock' && toogle.capsLock === false && toogle.leng === true) {
      toogle.capsLock = true;
      data.clearHtmlCallback();
      data.callback(data.capsRu);
    } else if (event === 'CapsLock' && toogle.capsLock === true && toogle.leng === true) {
      toogle.capsLock = false;
      data.clearHtmlCallback();
      data.callback(data.ru);
    }
    if (event === 'ControlRight' && toogle.leng === false) {
      data.clearHtmlCallback();
      toogle.leng = true;
      data.callback(data.ru);
    } else if (event === 'ControlRight' && toogle.leng === true) {
      data.clearHtmlCallback();
      toogle.leng = false;
      data.callback(data.en);
    }
  },
};
