/*

Cardinality: 0-1 (*1)

GENDER-param = "VALUE=text" / any-param
GENDER-value = sex [";" text]

sex = "" / "M" / "F" / "O" / "N" / "U"
// male / female / other / none / unknown

GENDER:M
GENDER:F
GENDER:M;Fellow
GENDER:F;grrrl
GENDER:O;intersex
GENDER:;it's complicated

*/
import {
  encodeText,
  formatGender,
  isSet,
} from './util';


export default ({
  sex,
  text,
  value,
}) => [
  'GENDER',
  ':',
  formatGender(sex),
  (text || value) && `;${encodeText(text || value)}`,
].filter(isSet).join('');
