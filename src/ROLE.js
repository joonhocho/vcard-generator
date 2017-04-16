/*

Cardinality: 0+ (*)

ROLE-param = "VALUE=text" / language-param / pid-param / pref-param
  / type-param / altid-param / any-param
ROLE-value = text

ROLE:Project Leader

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
}) => [
  'ROLE',
  formatPref(pref),
  formatType(type),
  ':',
  encodeText(text),
].filter(isSet).join('');
