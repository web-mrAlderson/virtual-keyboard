/* eslint linebreak-style: ["error", "windows"] */
import triger from '../script.js';

export default {
  shiftkeyDown(event, data) {
    if (event === 'ShiftLeft' && data.leng === false) {
      if (triger.capsLock === false) {
        data.clearHtmlCallback();
        data.callback(data.eventShiftEn);
      } else {
        data.clearHtmlCallback();
        data.callback(data.en);
      }
    } else if (event === 'ShiftRight' && data.leng === false) {
      if (triger.capsLock === false) {
        data.clearHtmlCallback();
        data.callback(data.eventShiftEn);
      } else {
        data.clearHtmlCallback();
        data.callback(data.en);
      }
    } else if (event === 'ShiftLeft' && data.leng === true) {
      data.clearHtmlCallback();
      data.callback(data.eventShiftRu);
    } else if (event === 'ShiftRight' && data.leng === true) {
      data.clearHtmlCallback();
      data.callback(data.eventShiftRu);
    }
  },
  shiftkeyUp(event, data) {
    if (event === 'ShiftLeft' && triger.capsLock === false) {
      data.clearHtmlCallback();
      data.callback(data.en);
    } else if (event === 'ShiftLeft' && triger.capsLock === true) {
      data.clearHtmlCallback();
      data.callback(data.eventShiftEn);
    }
    if (event === 'ShiftRight' && triger.capsLock === false) {
      data.clearHtmlCallback();
      data.callback(data.en);
    } else if (event === 'ShiftRight' && triger.capsLock === true) {
      data.clearHtmlCallback();
      data.callback(data.eventShiftEn);
    }
  },
};
