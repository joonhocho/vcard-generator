/*

Cardinality: 0-1 (*1)

BDAY-param = BDAY-param-date / BDAY-param-text
BDAY-value = date-and-or-time / text
 ; Value and parameter MUST match.

BDAY-param-date = "VALUE=date-and-or-time"
BDAY-param-text = "VALUE=text" / language-param

BDAY-param =/ altid-param / calscale-param / any-param
 ; calscale-param can only be present when BDAY-value is
 ; date-and-or-time and actually contains a date or date-time.

BDAY:19960415
BDAY:--0415
BDAY;19531015T231000Z
BDAY;VALUE=text:circa 1800

BDAY:1999-01-02

BDAY;X-APPLE-OMIT-YEAR=1604:1604-04-14
X-ALTBDAY;CALSCALE=chinese:007800310318


*/

import {
  formatDate,
  isSet,
} from './util';


export default ({
  text,
  value,
  year,
  month,
  day,
}) => [
  'BDAY',
  (text || value) && ';VALUE=text',
  ':',
  (text || value) || formatDate(year, month, day),
].filter(isSet).join('');
