/*

Cardinality: 0-1 (*1)

N-param = "VALUE=text" / sort-as-param / language-param
       / altid-param / any-param
N-value = list-component 4(";" list-component)

N:Public;John;Quinlan;Mr.;Esq.
N:Stevenson;John;Philip,Paul;Dr.;Jr.,M.D.,A.C.P.
N:LastName;FirstName;MiddleName;PrefixName;SuffixName
N:Last Name;First Name;Middle Name;Prefix Name;Suffix Name
N:Last Name;First Name;;;

*/
import {
  encodeText,
  encodeTextList,
  isSet,
} from './util';


export default ({
  givenName,
  firstName,
  middleName,
  familyName,
  lastName,
  prefix,
  suffix,
}) => [
  'N',
  ':',
  encodeText(familyName || lastName),
  `;${encodeText(givenName || firstName)}`,
  `;${encodeText(middleName)}`,
  `;${encodeTextList(prefix)}`,
  `;${encodeTextList(suffix)}`,
].filter(isSet).join('');
