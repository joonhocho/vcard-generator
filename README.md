# vcard-generator
[![Build Status](https://travis-ci.org/joonhocho/vcard-generator.svg?branch=master)](https://travis-ci.org/joonhocho/vcard-generator)
[![Coverage Status](https://coveralls.io/repos/github/joonhocho/vcard-generator/badge.svg?branch=master)](https://coveralls.io/github/joonhocho/vcard-generator?branch=master)
[![npm version](https://badge.fury.io/js/vcard-generator.svg)](https://badge.fury.io/js/vcard-generator)
[![Dependency Status](https://david-dm.org/joonhocho/vcard-generator.svg)](https://david-dm.org/joonhocho/vcard-generator)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)


VCard v4.0 rfc6350 compliant generator from JSON.


### Install
```
npm install --save vcard-generator
```


### Usage
```javascript
import vcard from 'vcard-generator';

const vcardContent = vcard.generate({
  name: {
    familyName: 'Doe',
    givenName: 'John',
    middleName: 'Philip',
    prefix: 'Dr.',
    suffix: 'Jr.',
  },
  formattedNames: [{
    text: 'Mr. Johny',
  }],
  nicknames: [{
    text: 'Phil',
  }],
  extraName: {
    maidenName: 'MaidenName',
    phoneticFirstName: 'PhoneticFirstName',
    phoneticMiddleName: 'PhoneticMiddleName',
    phoneticLastName: 'PhoneticLastName',

    pronunciationFirstName: 'PronunciationFirstName',
    pronunciationMiddleName: 'PronunciationMiddleName',
    pronunciationLastName: 'PronunciationLastName',
  },

  works: [{
    organization: 'My Company, Inc.',
    title: 'CEO',
    role: 'Executive',
  }],
  emails: [{
    type: 'work',
    text: 'john@mycompany.com',
  }, {
    type: 'home',
    text: 'johndoe@example.com',
  }],
  phones: [{
    type: 'work',
    text: '1 (234) 567-8901',
  }, {
    text: '(123) 123-1234',
  }, {
    uri: 'tel:1234567890',
  }],
  addresses: [{
    type: 'work',
    street: '123 Forbes Ave, Apt 1',
    locality: 'San Francisco',
    region: 'CA',
    code: '12345',
    country: 'USA',
  }, {
    type: 'home',
    street: '456 Home St',
    locality: 'Homeland',
    region: 'CA',
    code: '23456',
    country: 'USA',
  }],
  socialProfiles: [{
    type: 'facebook',
    uri: 'http://www.facebook.com/johndoe',
  }, {
    type: 'twitter',
    user: 'johnie',
  }],
  urls: [{
    type: 'internet',
    uri: 'http://www.mycompany.com',
  }, {
    type: 'personal',
    uri: 'http://www.johndoe.com',
  }],

  photos: [{
    type: 'work',
    uri: 'https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg',
  }, {
    type: 'home',
    dataUri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
  }],

  birthday: {
    year: 2000,
    month: 1,
    day: 31,
  },
  gender: {
    sex: 'male',
  },
  notes: [{
    text: 'John Doe has a long and varied history, being documented on more police files that anyone else.\nReports of his death are alas numerous.',
  }, {
    text: 'Another note.',
  }],
});

// returns
BEGIN:VCARD
VERSION:4.0
N:Doe;John;Philip;Dr.;Jr.
FN:Mr. Johny
NICKNAME:Phil
X-MAIDENNAME:MaidenName
X-PHONETIC-FIRST-NAME:PhoneticFirstName
X-PHONETIC-MIDDLE-NAME:PhoneticMiddleName
X-PHONETIC-LAST-NAME:PhoneticLastName
X-PRONUNCIATION-FIRST-NAME:PronunciationFirstName
X-PRONUNCIATION-MIDDLE-NAME:PronunciationMiddleName
X-PRONUNCIATION-LAST-NAME:PronunciationLastName
ORG:My Company\, Inc.
TITLE:CEO
ROLE:Executive
EMAIL;PREF=1;TYPE=work:john@mycompany.com
EMAIL;PREF=2;TYPE=home:johndoe@example.com
TEL;PREF=1;TYPE=work:1 (234) 567-8901
TEL;PREF=2:(123) 123-1234
TEL;VALUE=uri;PREF=3:tel:1234567890
ADR;PREF=1;TYPE=work:;;123 Forbes Ave\, Apt 1;San Francisco;CA;12345;USA
ADR;PREF=2;TYPE=home:;;456 Home St;Homeland;CA;23456;USA
X-SOCIALPROFILE;PREF=1;TYPE=facebook:http://www.facebook.com/johndoe
X-SOCIALPROFILE;PREF=2;TYPE=twitter;x-user=johnie:x-apple:johnie
URL;PREF=1;TYPE=internet:http://www.mycompany.com
URL;PREF=2;TYPE=personal:http://www.johndoe.com
PHOTO;PREF=1;TYPE=work:https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg
PHOTO;PREF=2;TYPE=home:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC
BDAY:20000131
GENDER:M
NOTE;PREF=1:John Doe has a long and varied history\, being documented on more police files that anyone else.\nReports of his death are alas numerous.
NOTE;PREF=2:Another note.
END:VCARD
```
