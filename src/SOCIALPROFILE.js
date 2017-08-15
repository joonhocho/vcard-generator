/*

Cardinality: 0+ (*)

X-SOCIALPROFILE;type=facebook:http://www.facebook.com/faceit
X-SOCIALPROFILE;type=facebook:http://www.facebook.com/nsnsnsndjej
X-SOCIALPROFILE;type=facebook:http://facebook.com/mark
X-FACEBOOK:mark

X-SOCIALPROFILE;type=twitter:http://twitter.com/twitit
X-SOCIALPROFILE;type=twitter:http://twitter.com/ueueen
X-SOCIALPROFILE;type=twitter:http://twitter.com/marker
X-SOCIALPROFILE;type=twitter:http://twitter.com/ueueen
X-TWITTER:marker

X-SOCIALPROFILE;type=linkedin:http://www.linkedin.com/in/haha
X-LINKEDIN:haha

X-SOCIALPROFILE;type=Dropcard;x-user=dropit:x-apple:dropit
X-SOCIALPROFILE;type=mynet;x-user=jdjdnrnrn:x-apple:jdjdnrnrn
X-SOCIALPROFILE;type=twitter:http://twitter.com/ueueen
X-SOCIALPROFILE;type=facebook:http://www.facebook.com/nsnsnsndjej
X-SOCIALPROFILE;type=mynet;x-user=jdjdnrnrn:x-apple:jdjdnrnrn
X-SOCIALPROFILE;type=Skype;x-user=skper:x-apple:skper
X-SOCIALPROFILE;type=WhatsApp;x-user=supp:x-apple:supp
X-SOCIALPROFILE;type=linkedin:http://www.linkedin.com/in/linker
X-SOCIALPROFILE;type=flickr:http://www.flickr.com/photos/flicker
X-SOCIALPROFILE;type=myspace:http://www.myspace.com/mysp
X-SOCIALPROFILE;type=sinaweibo:http://weibo.com/n/weibor

item5.X-AIM;type=pref:aimer
item5.X-ABLabel:AIM
item6.X-JABBER;type=pref:jabberis
item6.X-ABLabel:Jabber
item7.X-MSN;type=pref:msner
item7.X-ABLabel:MSN
item8.X-YAHOO;type=pref:yahor
item8.X-ABLabel:Yahoo
item9.X-ICQ;type=pref:icqer
item9.X-ABLabel:ICQ
item10.IMPP;X-SERVICE-TYPE=Skype;type=pref:skype:skiper
item10.X-ABLabel:Skype
item11.IMPP;X-SERVICE-TYPE=Facebook:xmpp:fber
item11.X-ABLabel:Facebook
item12.IMPP;X-SERVICE-TYPE=myim:x-apple:imer
item12.X-ABLabel:myim
item13.IMPP;X-SERVICE-TYPE=MSN:msnim:msner
item13.X-ABLabel:MSN
item14.IMPP;X-SERVICE-TYPE=GoogleTalk:xmpp:gtalker
item14.X-ABLabel:GoogleTalk
item15.IMPP;X-SERVICE-TYPE=AIM:aim:aimer
item15.X-ABLabel:AIM
item16.IMPP;X-SERVICE-TYPE=Yahoo:ymsgr:yahor
item16.X-ABLabel:Yahoo
item17.IMPP;X-SERVICE-TYPE=ICQ:aim:icqer
item17.X-ABLabel:ICQ
item18.IMPP;X-SERVICE-TYPE=Jabber:xmpp:jabberis
item18.X-ABLabel:Jabber
item19.IMPP;X-SERVICE-TYPE=QQ:x-apple:qqer
item19.X-ABLabel:QQ
item20.IMPP;X-SERVICE-TYPE=GaduGadu:x-apple:gaduer
item20.X-ABLabel:GaduGadu
item21.IMPP;X-SERVICE-TYPE=MyImpp:x-apple:impper
item21.X-ABLabel:MyImpp


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
  service,
  user,
  username,
  userId,
  uri,
  url,
}) => {
  const userArg = user || username || userId;
  return [
    'X-SOCIALPROFILE',
    formatPref(pref),
    formatType(type || label || service),
    userArg && `;x-user=${encodeText(userArg)}`,
    ':',
    encodeText(uri || url) || userArg && `x-apple:${encodeText(userArg)}`,
  ].filter(isSet).join('');
};
