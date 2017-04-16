/*

Cardinality: 0+ (*)

*/
import {
  isSet,
} from './util';
import ORG from './ORG';
import TITLE from './TITLE';
import ROLE from './ROLE';


export default ({
  pref,
  type,
  organization,
  title,
  role,
}) => [
  organization && ORG({pref, type, text: organization}),
  title && TITLE({pref, type, text: title}),
  role && ROLE({pref, type, text: role}),
].filter(isSet).join('\n');
