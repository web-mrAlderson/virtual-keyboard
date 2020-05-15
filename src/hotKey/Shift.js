/* eslint linebreak-style: ["error", "windows"] */

export default {
  shiftkeyDown(event, data) {
    if (event === 'ShiftLeft' && data.leng === false) {
      if (toogle.capsLock === false) {
        data.clearHtmlCallback();
        data.callback(data.eventShiftEn);
      } else {
        data.clearHtmlCallback();
        data.callback(data.en);
      }
    } else if (event === 'ShiftRight' && data.leng === false) {
      if (capsLock === false) {
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
    if (event === 'ShiftLeft' && capsLock === false) {
      data.clearHtmlCallback();
      data.callback(data.en);
    } else if (event === 'ShiftLeft' && capsLock === true) {
      data.clearHtmlCallback();
      data.callback(data.eventShiftEn);
    }
    if (event === 'ShiftRight' && capsLock === false) {
      data.clearHtmlCallback();
      data.callback(data.en);
    } else if (event === 'ShiftRight' && capsLock === true) {
      data.clearHtmlCallback();
      data.callback(data.eventShiftEn);
    }
  },
};
