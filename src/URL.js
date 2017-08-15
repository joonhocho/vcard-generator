/*

Cardinality: 0+ (*)

URL-param = "VALUE=uri" / pid-param / pref-param / type-param
  / mediatype-param / altid-param / any-param
URL-value = URI

URL:http://example.org/restaurant.french/~chezchic.html

URL:www.google.com
URL:joonhocho.com

URL;WORK;CHARSET=utf-8:https://www.website.com/hellokitty

item4.URL;type=pref:www.example 		.com
item4.X-ABLabel:_$!<HomePage>!$_
item5.URL:test.com
item5.X-ABLabel:My Web

item1.URL;type=INTERNET,type=HOME:http://homepage.com
item1.X-ABLabel:home page
item2.URL;type=INTERNET:blog.com
item2.X-ABLabel:blog
item3.URL;type=INTERNET;type=WORK:google.com
item3.X-ABLabel:website


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
}) => [
  'URL',
  formatPref(pref),
  formatType(type || label),
  ':',
  encodeText(uri || url || value),
].filter(isSet).join('');
