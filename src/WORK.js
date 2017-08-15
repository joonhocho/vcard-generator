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
  company,
  title,
  role,
  department,
}) => [
  (organization || company) &&
    ORG({pref, type, text: organization || company}),
  title &&
    TITLE({pref, type, text: title}),
  (role || department) &&
    ROLE({pref, type, text: role || department}),
].filter(isSet).join('\n');
