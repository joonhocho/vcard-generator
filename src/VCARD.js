import N from './N';
import FN from './FN';
import NICKNAME from './NICKNAME';
import XNAME from './X-NAME';
import WORK from './WORK';
import EMAIL from './EMAIL';
import TEL from './TEL';
import ADR from './ADR';
import SOCIALPROFILE from './SOCIALPROFILE';
import URL from './URL';
import PHOTO from './PHOTO';
import BDAY from './BDAY';
import GENDER from './GENDER';
import NOTE from './NOTE';
import {isSet} from './util';

const listWithPref = (list, fn) => {
  if (!list || !list.length) return null;
  if (list.length === 1) return fn(list[0]);
  return list.map((item, i) => fn({pref: i + 1, ...item})).join('\n');
};

export default ({
  version = '4.0',

  name,
  formattedNames,
  nicknames,
  extraName,

  works,
  emails,
  phones,
  addresses,
  socialProfiles,
  urls,

  photos,

  birthday,
  gender,
  notes,
}) => [
  'BEGIN:VCARD',
  `VERSION:${version}`,

  N(name),
  listWithPref(formattedNames, FN),
  listWithPref(nicknames, NICKNAME),
  extraName && XNAME(extraName),

  listWithPref(works, WORK),
  listWithPref(emails, EMAIL),
  listWithPref(phones, TEL),
  listWithPref(addresses, ADR),
  listWithPref(socialProfiles, SOCIALPROFILE),
  listWithPref(urls, URL),
  listWithPref(photos, PHOTO),

  birthday && BDAY(birthday),
  gender && GENDER(gender),
  listWithPref(notes, NOTE),

  'END:VCARD',
].filter(isSet).join('\n');
