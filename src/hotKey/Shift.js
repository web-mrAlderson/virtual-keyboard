/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint linebreak-style: ["error", "windows"] */
import { toogle } from '../components/trigger.js';

export const hotShift = {
  shiftkeyDown(event, data) {
    if (event === 'ShiftLeft' && toogle.leng === false) {
      if (toogle.capsLock === false) {
        data.clearHtmlCallback();
        data.callback(data.eventShiftEn);
      } else {
        data.clearHtmlCallback();
        data.callback(data.en);
      }
    } else if (event === 'ShiftRight' && toogle.leng === false) {
      if (toogle.capsLock === false) {
        data.clearHtmlCallback();
        data.callback(data.eventShiftEn);
      } else {
        data.clearHtmlCallback();
        data.callback(data.en);
      }
    } else if (event === 'ShiftLeft' && toogle.leng === true) {
      data.clearHtmlCallback();
      data.callback(data.eventShiftRu);
    } else if (event === 'ShiftRight' && toogle.leng === true) {
      data.clearHtmlCallback();
      data.callback(data.eventShiftRu);
    }
  },
  shiftkeyUp(event, data) {
    if (event === 'ShiftLeft' && toogle.capsLock === false) {
      data.clearHtmlCallback();
      data.callback(data.en);
    } else if (event === 'ShiftLeft' && toogle.capsLock === true) {
      data.clearHtmlCallback();
      data.callback(data.capsEn);
    }
    if (event === 'ShiftRight' && toogle.capsLock === false) {
      data.clearHtmlCallback();
      data.callback(data.en);
    } else if (event === 'ShiftRight' && toogle.capsLock === true) {
      data.clearHtmlCallback();
      data.callback(data.capsEn);
    }
  },
};
