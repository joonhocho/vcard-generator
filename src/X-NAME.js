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

  phoneticFirstName,
  phoneticMiddleName,
  phoneticLastName,

  pronunciationFirstName,
  pronunciationMiddleName,
  pronunciationLastName,
}) => [
  maidenName && `X-MAIDENNAME:${encodeText(maidenName)}`,

  phoneticFirstName && `X-PHONETIC-FIRST-NAME:${encodeText(phoneticFirstName)}`,
  phoneticMiddleName && `X-PHONETIC-MIDDLE-NAME:${encodeText(phoneticMiddleName)}`,
  phoneticLastName && `X-PHONETIC-LAST-NAME:${encodeText(phoneticLastName)}`,

  pronunciationFirstName && `X-PRONUNCIATION-FIRST-NAME:${encodeText(pronunciationFirstName)}`,
  pronunciationMiddleName && `X-PRONUNCIATION-MIDDLE-NAME:${encodeText(pronunciationMiddleName)}`,
  pronunciationLastName && `X-PRONUNCIATION-LAST-NAME:${encodeText(pronunciationLastName)}`,
].filter(isSet).join('\n');
