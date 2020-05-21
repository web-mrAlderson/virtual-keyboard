/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint linebreak-style: ["error", "windows"] */
export const Key = {
  key(event) {
    const textAria = document.getElementById('Eria');
    if (event.path[0].innerHTML.length < 5) { textAria.value += event.path[0].innerHTML; }
  },
};
