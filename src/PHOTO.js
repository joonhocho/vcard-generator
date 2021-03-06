/*

Cardinality: 0+ (*)

PHOTO-param = "VALUE=uri" / altid-param / type-param
  / mediatype-param / pref-param / pid-param / any-param
PHOTO-value = URI

PHOTO:http://www.example.com/pub/photos/jqpublic.gif

PHOTO:data:image/jpeg;base64,MIICajCCAdOgAwIBAgICBEUwDQYJKoZIhv
AQEEBQAwdzELMAkGA1UEBhMCVVMxLDAqBgNVBAoTI05ldHNjYXBlIENvbW11bm
ljYXRpb25zIENvcnBvcmF0aW9uMRwwGgYDVQQLExNJbmZvcm1hdGlvbiBTeXN0
<...remainder of base64-encoded data...>

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
  uri,
  url,
  value,
  dataUri,
}) => [
  'PHOTO',
  formatPref(pref),
  formatType(type || label),
  ':',
  dataUri || (uri || url || value) && encodeText(uri || url || value),
].filter(isSet).join('');
