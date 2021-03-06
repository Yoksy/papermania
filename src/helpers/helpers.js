/**
 * Helpers functions
 */
import strftime from 'strftime';

export function hyphenate(str) {
  return str.replace(/ /g,"-");
}

export function unhyphenate(str) {
  return str.replace(/-/g," ");
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getCurrentStrftime() {
  return strftime('%F %T', new Date());
}
