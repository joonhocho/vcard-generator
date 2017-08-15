/*

Cardinality: 1+ (1*)

FN-param = "VALUE=text" / type-param / language-param / altid-param
        / pid-param / pref-param / any-param
FN-value = text

FN:Mr. John Q. Public\, Esq.

// iOS
FN:PrefixName FirstName MiddleName LastName SuffixName
// Android
FN:PrefixName FirstName MiddleName LastName, SuffixName
FN;CHARSET=utf-8:Tesla Burn Carma
FN:First Name Last Name

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
  'FN',
  formatPref(pref),
  formatType(type),
  ':',
  encodeText(text || value),
].filter(isSet).join('');
