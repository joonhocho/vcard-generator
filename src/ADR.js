/*

Cardinality: 0+ (*)

ADR-value =
  ADR-component-pobox ";"
  ADR-component-ext ";"
  ADR-component-street ";"
  ADR-component-locality ";"
  ADR-component-region ";"
  ADR-component-code ";"
  ADR-component-country

ADR;GEO="geo:12.3457,78.910";LABEL="Mr. John Q. Public, Esq.\nMail Drop: TNE QB\n123 Main Street\nAny Town, CA  91921-1234\nU.S.A.":;;123 Main Street;Any Town;CA;91921-1234;U.S.A.

ADR;WORK;CHARSET=utf-8:;;738 tuhbenaran Ave, Apt 123;Mountain View;California;94040;United States of America

ADR;type=HOME;type=pref:;;124 st\n234;City;Ca;98765;United States

item2.ADR;type=HOME;type=pref:;;733 Catamaran St\nApt 4;Foster City;CA;94404;United States
item2.X-ABADR:us

item3.ADR;type=WORK:;;이매동 이매촌 아름마을 태영아파트\n123동 102호;성남시;경기도;123-456;South Korea
item3.X-ABADR:kr

ADR:;;Physical Address;;;;

ADR;HOME:;;700 Catamaran St;;;;

*/
import {
  encodeText,
  encodeQuotedText,
  formatPref,
  formatType,
  isSet,
} from './util';


export default ({
  geo,
  label,
  type,
  pref,
  pobox, // recommended to be empty
  ext, // recommended to be empty
  street,
  locality,
  region,
  code,
  country,
}) => [
  'ADR',
  geo && `;GEO="geo:${encodeQuotedText(geo)}"`,
  label && `;LABEL="${encodeQuotedText(label)}"`,
  formatPref(pref),
  formatType(type),
  ':',
  `${encodeText(pobox)};`,
  `${encodeText(ext)};`,
  `${encodeText(street)};`,
  `${encodeText(locality)};`,
  `${encodeText(region)};`,
  `${encodeText(code)};`,
  encodeText(country),
].filter(isSet).join('');
