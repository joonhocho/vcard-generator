/*

Cardinality: 0+ (*)

NICKNAME-param = "VALUE=text" / type-param / language-param
              / altid-param / pid-param / pref-param / any-param
NICKNAME-value = text-list

NICKNAME:Robbie
NICKNAME:Jim,Jimmie
NICKNAME;TYPE=work:Boss

*/
import {
  encodeTextList,
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
  'NICKNAME',
  formatPref(pref),
  formatType(type),
  ':',
  encodeTextList(text || value),
].filter(isSet).join('');
