/*

Cardinality: 0+ (*)

ORG-param = "VALUE=text" / sort-as-param / language-param
  / pid-param / pref-param / altid-param / type-param
  / any-param
ORG-value = component *(";" component)

Example: A property value consisting of an organizational name,
organizational unit #1 name, and organizational unit #2 name.

ORG:ABC\, Inc.;North American Division;Marketing


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
}) => [
  'ORG',
  formatPref(pref),
  formatType(type),
  ':',
  encodeTextList(text, ';'),
].filter(isSet).join('');
