/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint linebreak-style: ["error", "windows"] */

export const hotTab = {
  tab(event) {
    try {
      const textAria = document.getElementById('Eria');
      if (event === 'Tab') {
        textAria.focus();
        textAria.value += '   ';
      }
    } catch (error) {
      console.error(error);
    }
  },
};
