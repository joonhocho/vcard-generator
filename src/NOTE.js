/*

Cardinality: 0+ (*)

NOTE-param = "VALUE=text" / language-param / pid-param / pref-param
          / type-param / altid-param / any-param
NOTE-value = text

NOTE:This fax number is operational 0800 to 1715 EST\, Mon-Fri.
NOTE;CHARSET=utf-8;ENCODING=QUOTED-PRINTABLE:Hahahahah this is my vcard.=0ASuck it up hard!!!
NOTE:This is Notes

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
  'NOTE',
  formatPref(pref),
  formatType(type),
  ':',
  encodeText(text || value),
].filter(isSet).join('');
