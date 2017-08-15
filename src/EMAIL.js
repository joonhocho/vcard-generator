/*

Cardinality: 0+ (*)

EMAIL-param = "VALUE=text" / pid-param / pref-param / type-param
           / altid-param / any-param
EMAIL-value = text


EMAIL;TYPE=work:jqpublic@xyz.example.com
EMAIL;PREF=1:jane_doe@example.com

EMAIL;type=INTERNET;type=HOME;type=pref:a@a.com
item1.EMAIL;type=INTERNET:b@b.com
item1.X-ABLabel:CustomEmail

EMAIL;INTERNET;WORK;CHARSET=utf-8:tester@gmail.com

EMAIL;type=INTERNET;type=HOME;type=pref:t@tt.tt
item1.EMAIL;type=INTERNET:x@x.xx
item1.X-ABLabel:My Email

EMAIL;type=INTERNET;type=HOME;type=pref:abc@example.com
EMAIL;type=INTERNET;type=WORK:bcd@test.com

EMAIL:email@address.com
EMAIL;PREF;WORK:a@example.com
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
  label,
  text,
  value,
}) => [
  'EMAIL',
  formatPref(pref),
  formatType(type || label),
  ':',
  encodeText(text || value),
].filter(isSet).join('');
