
/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */


const toogle = {
  leng: false,
  capsLock: false,
};
export default {

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
    } else if (event === 'ShiftLeft' && data.leng === true) {
      data.clearHtmlCallback();
      data.callback(data.eventShiftRu);
    } else if (event === 'ShiftRight' && data.leng === true) {
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
      data.callback(data.eventShiftEn);
    }
    if (event === 'ShiftRight' && toogle.capsLock === false) {
      data.clearHtmlCallback();
      data.callback(data.en);
    } else if (event === 'ShiftRight' && toogle.capsLock === true) {
      data.clearHtmlCallback();
      data.callback(data.eventShiftEn);
    }
  },

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
      if (dataKey === 'CapsLock' && toogle.capsLock === false && leng === false) {
        clearHtmlCallback();
        callback(capsEn);
        this.capsLock = true;
      } else if (dataKey === 'CapsLock' && toogle.capsLock === true && toogle.leng === false) {
        clearHtmlCallback();
        this.capsLock = false;
        callback(en);
      }
      if (dataKey === 'CapsLock' && toogle.capsLock === false && toogle.leng === true) {
        toogle.capsLock = true;
        clearHtmlCallback();
        callback(capsRu);
      } else if (dataKey === 'CapsLock' && toogle.capsLock === true && toogle.leng === true) {
        toogle.capsLock = false;
        clearHtmlCallback();
        callback(ru);
      }
      this.shiftkeyDown(dataKey, data);
      if (dataKey === 'ControlRight' && toogle.leng === false) {
        clearHtmlCallback();
        toogle.leng = true;
        callback(ru);
      } else if (dataKey === 'ControlRight' && toogle.leng === true) {
        clearHtmlCallback();
        toogle.leng = false;
        callback(en);
      }
    });
    keyboard.addEventListener('mouseup', (event) => {
      const dataKey = event.path[0].dataset.data;
      this.shiftkeyUp(dataKey, data);
    });
  },
};
