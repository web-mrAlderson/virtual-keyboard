/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint linebreak-style: ["error", "windows"] */

export const Backspace = {
  Back(event) {
    const textAria = document.getElementById('Eria');
    try {
      if (event === 'Backspace') {
        let val = textAria.value;
        val = val.split('');
        val[val.length - 1] = '';
        textAria.value = val.join('');
      }
    } catch (error) {
      // console.error(error);
    }
  },
};
