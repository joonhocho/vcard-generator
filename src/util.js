export const backslashRegex = /\\/g;
export const newlineRegex = /\r?\n/g;
export const commaRegex = /,/g;
export const semicolonRegex = /;/g;
export const doublequoteRegex = /"/g;


export const encodeText = (text) => (
  text ?
  text
    .replace(backslashRegex, '\\\\')
    .replace(newlineRegex, '\\n')
    .replace(commaRegex, '\\,')
    .replace(semicolonRegex, '\\;') :
  ''
);


export const encodeTextList = (text, delimiter = ',') => {
  if (!text || !text.length) {
    return '';
  }
  if (typeof text === 'string') {
    return encodeText(text);
  }
  // array
  return text.map(encodeText).join(delimiter);
};


export const encodeQuotedText = (text) =>
  text
    .replace(newlineRegex, '\\n')
    .replace(doublequoteRegex, '\\"');


export const formatPref = (pref) => (pref > 0 ? `;PREF=${pref}` : '');


export const formatTypeValue = (type) => {
  if (!type || !type.length) {
    return '';
  }
  if (typeof type === 'string') {
    return encodeText(type);
  }
  // array
  return `"${type.map(encodeText).join(',')}"`;
};


export const formatType = (type) => {
  const value = formatTypeValue(type);
  return value && `;TYPE=${value}`;
};


const padZero = (n) => `${n < 10 ? '0' : ''}${n}`;


export const formatDate = (year, month, day) => {
  // 19850412
  // 1985-04
  // 1985
  // --0412
  // ---12
  if (year) {
    if (month) {
      if (day) {
        return `${year}${padZero(month)}${padZero(day)}`;
      } else {
        return `${year}-${padZero(month)}`;
      }
    } else {
      if (day) {
        // invalid
        return '';
      } else {
        return `${year}`;
      }
    }
  } else {
    if (month) {
      if (day) {
        return `--${padZero(month)}${padZero(day)}`;
      } else {
        // invalid
        return '';
      }
    } else {
      if (day) {
        return `---${padZero(day)}`;
      } else {
        // invalid
        return '';
      }
    }
  }
};


export const formatGender = (gender) => {
  switch (gender.toUpperCase()) {
  case 'M':
  case 'MALE':
    return 'M';
  case 'F':
  case 'FEMALE':
    return 'F';
  case 'O':
  case 'OTHER':
    return 'O';
  case 'N':
  case 'NONE':
    return 'N';
  case 'U':
  case 'UNKNOWN':
    return 'U';
  default:
    return `O;${encodeText(gender)}`;
  }
};


export const isSet = (x) => x;
