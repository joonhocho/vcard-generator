/*

Cardinality: 0+ (*)

TITLE-param = "VALUE=text" / language-param / pid-param
  / pref-param / altid-param / type-param / any-param
TITLE-value = text

TITLE:Research Scientist

*/
import {
  encodeText,
  formatPref,
  formatType,
  isSet,
} from './util';


export default ({
  pref,
  type,
  text,
  value,
}) => [
  'TITLE',
  formatPref(pref),
  formatType(type),
  ':',
  encodeText(text || value),
].filter(isSet).join('');
