/*

Cardinality: 0+ (*)

TEL-param = TEL-text-param / TEL-uri-param
TEL-value = TEL-text-value / TEL-uri-value
 ; Value and parameter MUST match.

TEL-text-param = "VALUE=text"
TEL-text-value = text

TEL-uri-param = "VALUE=uri" / mediatype-param
TEL-uri-value = URI

TEL-param =/ type-param / pid-param / pref-param / altid-param
          / any-param

type-param-tel = "text" / "voice" / "fax" / "cell" / "video"
              / "pager" / "textphone" / iana-token / x-name
 ; type-param-tel MUST NOT be used with a property other than TEL.


TEL;VALUE=uri;PREF=1;TYPE="voice,home":tel:+1-555-555-5555;ext=5555
TEL;VALUE=uri;TYPE=home:tel:+33-01-23-45-67

TEL;WORK:4121233231
TEL;CELL:1231231234
TEL;WORK;FAX:+821090314331

TEL;type=WORK;type=VOICE;type=pref:1 (234) 567-8901
TEL;type=CELL;type=VOICE:2345678901
item2.TEL:+821012345678
item2.X-ABLabel:CustomPhone


TEL;type=HOME;type=VOICE;type=pref:1 (234) 567-8901
item2.TEL:(456) 789-1234
item2.X-ABLabel:My Phone


TEL;type=HOME;type=VOICE;type=pref:1 (234) 567-8901
TEL;type=WORK;type=VOICE:(345) 678-9012
item1.TEL:+82 10-1234-5678
item1.X-ABLabel:Custom Label

TEL;:1-234-567-89
TEL;PREF:010-910-94494


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
  uri,
  text,
}) => [
  'TEL',
  uri && ';VALUE=uri',
  formatPref(pref),
  formatType(type),
  ':',
  encodeText(uri || text),
].filter(isSet).join('');
