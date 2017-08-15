/*

Cardinality: 0-1 (*1)

X-MAIDENNAME:Maid Name

X-PHONETIC-FIRST-NAME:Phonetic First
X-PHONETIC-MIDDLE-NAME:Pho Middle
X-PHONETIC-LAST-NAME:Pho Last

X-PRONUNCIATION-FIRST-NAME:Pro First
X-PRONUNCIATION-MIDDLE-NAME:Pro First
X-PRONUNCIATION-LAST-NAME:Pro Last

*/
import {
  encodeText,
  isSet,
} from './util';


export default ({
  maidenName,

  phoneticGivenName,
  phoneticFirstName,
  phoneticMiddleName,
  phoneticFamilyName,
  phoneticLastName,

  pronunciationGivenName,
  pronunciationFirstName,
  pronunciationMiddleName,
  pronunciationFamilyName,
  pronunciationLastName,
}) => [
  maidenName && `X-MAIDENNAME:${encodeText(maidenName)}`,

  (phoneticGivenName || phoneticFirstName) &&
    `X-PHONETIC-FIRST-NAME:${encodeText(phoneticGivenName || phoneticFirstName)}`,
  phoneticMiddleName && `X-PHONETIC-MIDDLE-NAME:${encodeText(phoneticMiddleName)}`,
  (phoneticFamilyName || phoneticLastName) &&
    `X-PHONETIC-LAST-NAME:${encodeText(phoneticFamilyName || phoneticLastName)}`,

  (pronunciationGivenName || pronunciationFirstName) &&
    `X-PRONUNCIATION-FIRST-NAME:${encodeText(pronunciationGivenName || pronunciationFirstName)}`,
  pronunciationMiddleName && `X-PRONUNCIATION-MIDDLE-NAME:${encodeText(pronunciationMiddleName)}`,
  (pronunciationFamilyName || pronunciationLastName) &&
    `X-PRONUNCIATION-LAST-NAME:${encodeText(pronunciationFamilyName || pronunciationLastName)}`,
].filter(isSet).join('\n');
