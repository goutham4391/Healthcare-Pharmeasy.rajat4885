/*! For license information please see 161.9a375f1a.js.LICENSE.txt */
(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[161],{"+qwt":function(e,t,i){(function(e,r){var n;(function(){"use strict";var a={function:!0,object:!0},o=a[typeof window]&&window||this,l=a[typeof t]&&t,s=a[typeof e]&&e&&!e.nodeType&&e,b=l&&s&&"object"==typeof r&&r;!b||b.global!==b&&b.window!==b&&b.self!==b||(o=b);var p=Math.pow(2,53)-1,c=/\bOpera/,u=Object.prototype,d=u.hasOwnProperty,S=u.toString;function f(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function x(e){return e=y(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:f(e)}function h(e,t){for(var i in e)d.call(e,i)&&t(e[i],i,e)}function m(e){return null==e?f(e):S.call(e).slice(8,-1)}function g(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function O(e,t){var i=null;return function(e,t){var i=-1,r=e?e.length:0;if("number"==typeof r&&r>-1&&r<=p)for(;++i<r;)t(e[i],i,e);else h(e,t)}(e,(function(r,n){i=t(i,r,n,e)})),i}function y(e){return String(e).replace(/^ +| +$/g,"")}var w=function e(t){var i=o,r=t&&"object"==typeof t&&"String"!=m(t);r&&(i=t,t=null);var n=i.navigator||{},a=n.userAgent||"";t||(t=a);var l,s,b,p,u,d=r?!!n.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(S.toString()),f="Object",w=r?f:"ScriptBridgingProxyObject",E=r?f:"Environment",M=r&&i.java?"JavaPackage":m(i.java),v=r?f:"RuntimeObject",P=/\bJava/.test(M)&&i.java,C=P&&m(i.environment)==E,B=P?"a":"\u03b1",A=P?"b":"\u03b2",W=i.document||{},k=i.operamini||i.opera,R=c.test(R=r&&k?k["[[Class]]"]:m(k))?R:k=null,I=t,F=[],T=null,G=t==a,$=G&&k&&"function"==typeof k.version&&k.version(),_=O([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],(function(e,i){return e||RegExp("\\b"+(i.pattern||g(i))+"\\b","i").exec(t)&&(i.label||i)})),K=function(e){return O(e,(function(e,i){return e||RegExp("\\b"+(i.pattern||g(i))+"\\b","i").exec(t)&&(i.label||i)}))}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),N=L([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),X=function(e){return O(e,(function(e,i,r){return e||(i[N]||i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(N)]||RegExp("\\b"+g(r)+"(?:\\b|\\w*\\d)","i").exec(t))&&r}))}({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),j=function(e){return O(e,(function(e,i){var r=i.pattern||g(i);return!e&&(e=RegExp("\\b"+r+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=function(e,t,i){var r={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&i&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(r=r[/[\d.]+$/.exec(e)])&&(e="Windows "+r),e=String(e),t&&i&&(e=e.replace(RegExp(t,"i"),i)),x(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,r,i.label||i)),e}))}(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function L(e){return O(e,(function(e,i){var r=i.pattern||g(i);return!e&&(e=RegExp("\\b"+r+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+r+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+r+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((e=String(i.label&&!RegExp(r,"i").test(i.label)?i.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),i=i.label||i,e=x(e[0].replace(RegExp(r,"i"),i).replace(RegExp("; *(?:"+i+"[_-])?","i")," ").replace(RegExp("("+i+")[-_.]?(\\w)","i"),"$1 $2"))),e}))}function D(e){return O(e,(function(e,i){return e||(RegExp(i+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null}))}if(_&&(_=[_]),/\bAndroid\b/.test(j)&&!N&&(l=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t))&&(N=y(l[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),X&&!N?N=L([X]):X&&N&&(N=N.replace(RegExp("^("+g(X)+")[-_.\\s]","i"),X+" ").replace(RegExp("^("+g(X)+")[-_.]?(\\w)","i"),X+" $2")),(l=/\bGoogle TV\b/.exec(N))&&(N=l[0]),/\bSimulator\b/i.test(t)&&(N=(N?N+" ":"")+"Simulator"),"Opera Mini"==K&&/\bOPiOS\b/.test(t)&&F.push("running in Turbo/Uncompressed mode"),"IE"==K&&/\blike iPhone OS\b/.test(t)?(X=(l=e(t.replace(/like iPhone OS/,""))).manufacturer,N=l.product):/^iP/.test(N)?(K||(K="Safari"),j="iOS"+((l=/ OS ([\d_]+)/i.exec(t))?" "+l[1].replace(/_/g,"."):"")):"Konqueror"==K&&/^Linux\b/i.test(j)?j="Kubuntu":X&&"Google"!=X&&(/Chrome/.test(K)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(N))||/\bAndroid\b/.test(j)&&/^Chrome/.test(K)&&/\bVersion\//i.test(t)?(K="Android Browser",j=/\bAndroid\b/.test(j)?j:"Android"):"Silk"==K?(/\bMobi/i.test(t)||(j="Android",F.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&F.unshift("accelerated")):"UC Browser"==K&&/\bUCWEB\b/.test(t)?F.push("speed mode"):"PaleMoon"==K&&(l=/\bFirefox\/([\d.]+)\b/.exec(t))?F.push("identifying as Firefox "+l[1]):"Firefox"==K&&(l=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(j||(j="Firefox OS"),N||(N=l[1])):!K||(l=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(K))?(K&&!N&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(l+"/")+8))&&(K=null),(l=N||X||j)&&(N||X||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(j))&&(K=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(j)?j:l)+" Browser")):"Electron"==K&&(l=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&F.push("Chromium "+l),$||($=D(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",g(K),"(?:Firefox|Minefield|NetFront)"])),(l=("iCab"==_&&parseFloat($)>3?"WebKit":/\bOpera\b/.test(K)&&(/\bOPR\b/.test(t)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(_)&&"WebKit"||!_&&/\bMSIE\b/i.test(t)&&("Mac OS"==j?"Tasman":"Trident")||"WebKit"==_&&/\bPlayStation\b(?! Vita\b)/i.test(K)&&"NetFront")&&(_=[l]),"IE"==K&&(l=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(K+=" Mobile",j="Windows Phone "+(/\+$/.test(l)?l:l+".x"),F.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(K="IE Mobile",j="Windows Phone 8.x",F.unshift("desktop mode"),$||($=(/\brv:([\d.]+)/.exec(t)||0)[1])):"IE"!=K&&"Trident"==_&&(l=/\brv:([\d.]+)/.exec(t))&&(K&&F.push("identifying as "+K+($?" "+$:"")),K="IE",$=l[1]),G){if(p="global",u=null!=(b=i)?typeof b[p]:"number",/^(?:boolean|number|string|undefined)$/.test(u)||"object"==u&&!b[p])m(l=i.runtime)==w?(K="Adobe AIR",j=l.flash.system.Capabilities.os):m(l=i.phantom)==v?(K="PhantomJS",$=(l=l.version||null)&&l.major+"."+l.minor+"."+l.patch):"number"==typeof W.documentMode&&(l=/\bTrident\/(\d+)/i.exec(t))?($=[$,W.documentMode],(l=+l[1]+4)!=$[1]&&(F.push("IE "+$[1]+" mode"),_&&(_[1]=""),$[1]=l),$="IE"==K?String($[1].toFixed(1)):$[0]):"number"==typeof W.documentMode&&/^(?:Chrome|Firefox)\b/.test(K)&&(F.push("masking as "+K+" "+$),K="IE",$="11.0",_=["Trident"],j="Windows");else if(P&&(I=(l=P.lang.System).getProperty("os.arch"),j=j||l.getProperty("os.name")+" "+l.getProperty("os.version")),C){try{$=i.require("ringo/engine").version.join("."),K="RingoJS"}catch(e){(l=i.system)&&l.global.system==i.system&&(K="Narwhal",j||(j=l[0].os||null))}K||(K="Rhino")}else"object"==typeof i.process&&!i.process.browser&&(l=i.process)&&("object"==typeof l.versions&&("string"==typeof l.versions.electron?(F.push("Node "+l.versions.node),K="Electron",$=l.versions.electron):"string"==typeof l.versions.nw&&(F.push("Chromium "+$,"Node "+l.versions.node),K="NW.js",$=l.versions.nw)),K||(K="Node.js",I=l.arch,j=l.platform,$=($=/[\d.]+/.exec(l.version))?$[0]:null));j=j&&x(j)}if($&&(l=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec($)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(G&&n.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(T=/b/i.test(l)?"beta":"alpha",$=$.replace(RegExp(l+"\\+?$"),"")+("beta"==T?A:B)+(/\d+\+?/.exec(l)||"")),"Fennec"==K||"Firefox"==K&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(j))K="Firefox Mobile";else if("Maxthon"==K&&$)$=$.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(N))"Xbox 360"==N&&(j=null),"Xbox 360"==N&&/\bIEMobile\b/.test(t)&&F.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(K)&&(!K||N||/Browser|Mobi/.test(K))||"Windows CE"!=j&&!/Mobi/i.test(t))if("IE"==K&&G)try{null===i.external&&F.unshift("platform preview")}catch(e){F.unshift("embedded")}else(/\bBlackBerry\b/.test(N)||/\bBB10\b/.test(t))&&(l=(RegExp(N.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||$)?(j=((l=[l,/BB10/.test(t)])[1]?(N=null,X="BlackBerry"):"Device Software")+" "+l[0],$=null):this!=h&&"Wii"!=N&&(G&&k||/Opera/.test(K)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==K&&/\bOS X (?:\d+\.){2,}/.test(j)||"IE"==K&&(j&&!/^Win/.test(j)&&$>5.5||/\bWindows XP\b/.test(j)&&$>8||8==$&&!/\bTrident\b/.test(t)))&&!c.test(l=e.call(h,t.replace(c,"")+";"))&&l.name&&(l="ing as "+l.name+((l=l.version)?" "+l:""),c.test(K)?(/\bIE\b/.test(l)&&"Mac OS"==j&&(j=null),l="identify"+l):(l="mask"+l,K=R?x(R.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(l)&&(j=null),G||($=null)),_=["Presto"],F.push(l));else K+=" Mobile";(l=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(l=[parseFloat(l.replace(/\.(\d)$/,".0$1")),l],"Safari"==K&&"+"==l[1].slice(-1)?(K="WebKit Nightly",T="alpha",$=l[1].slice(0,-1)):$!=l[1]&&$!=(l[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||($=null),l[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t)||0)[1],537.36==l[0]&&537.36==l[2]&&parseFloat(l[1])>=28&&"WebKit"==_&&(_=["Blink"]),G&&(d||l[1])?(_&&(_[1]="like Chrome"),l=l[1]||((l=l[0])<530?1:l<532?2:l<532.05?3:l<533?4:l<534.03?5:l<534.07?6:l<534.1?7:l<534.13?8:l<534.16?9:l<534.24?10:l<534.3?11:l<535.01?12:l<535.02?"13+":l<535.07?15:l<535.11?16:l<535.19?17:l<536.05?18:l<536.1?19:l<537.01?20:l<537.11?"21+":l<537.13?23:l<537.18?24:l<537.24?25:l<537.36?26:"Blink"!=_?"27":"28")):(_&&(_[1]="like Safari"),l=(l=l[0])<400?1:l<500?2:l<526?3:l<533?4:l<534?"4+":l<535?5:l<537?6:l<538?7:l<601?8:l<602?9:l<604?10:l<606?11:l<608?12:"12"),_&&(_[1]+=" "+(l+="number"==typeof l?".x":/[.+]/.test(l)?"":"+")),"Safari"==K&&(!$||parseInt($)>45)?$=l:"Chrome"==K&&/\bHeadlessChrome/i.test(t)&&F.unshift("headless")),"Opera"==K&&(l=/\bzbov|zvav$/.exec(j))?(K+=" ",F.unshift("desktop mode"),"zvav"==l?(K+="Mini",$=null):K+="Mobile",j=j.replace(RegExp(" *"+l+"$"),"")):"Safari"==K&&/\bChrome\b/.exec(_&&_[1])?(F.unshift("desktop mode"),K="Chrome Mobile",$=null,/\bOS X\b/.test(j)?(X="Apple",j="iOS 4.3+"):j=null):/\bSRWare Iron\b/.test(K)&&!$&&($=D("Chrome")),$&&0==$.indexOf(l=/[\d.]+$/.exec(j))&&t.indexOf("/"+l+"-")>-1&&(j=y(j.replace(l,""))),j&&-1!=j.indexOf(K)&&!RegExp(K+" OS").test(j)&&(j=j.replace(RegExp(" *"+g(K)+" *"),"")),_&&!/\b(?:Avant|Nook)\b/.test(K)&&(/Browser|Lunascape|Maxthon/.test(K)||"Safari"!=K&&/^iOS/.test(j)&&/\bSafari\b/.test(_[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(K)&&_[1])&&(l=_[_.length-1])&&F.push(l),F.length&&(F=["("+F.join("; ")+")"]),X&&N&&N.indexOf(X)<0&&F.push("on "+X),N&&F.push((/^on /.test(F[F.length-1])?"":"on ")+N),j&&(l=/ ([\d.+]+)$/.exec(j),s=l&&"/"==j.charAt(j.length-l[0].length-1),j={architecture:32,family:l&&!s?j.replace(l[0],""):j,version:l?l[1]:null,toString:function(){var e=this.version;return this.family+(e&&!s?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(l=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(I))&&!/\bi686\b/i.test(I)?(j&&(j.architecture=64,j.family=j.family.replace(RegExp(" *"+l),"")),K&&(/\bWOW64\b/i.test(t)||G&&/\w(?:86|32)$/.test(n.cpuClass||n.platform)&&!/\bWin64; x64\b/i.test(t))&&F.unshift("32-bit")):j&&/^OS X/.test(j.family)&&"Chrome"==K&&parseFloat($)>=39&&(j.architecture=64),t||(t=null);var H={};return H.description=t,H.layout=_&&_[0],H.manufacturer=X,H.name=K,H.prerelease=T,H.product=N,H.ua=t,H.version=K&&$,H.os=j||{architecture:null,family:null,version:null,toString:function(){return"null"}},H.parse=e,H.toString=function(){return this.description||""},H.version&&F.unshift($),H.name&&F.unshift(K),j&&K&&(j!=String(j).split(" ")[0]||j!=K.split(" ")[0]&&!N)&&F.push(N?"("+j+")":"on "+j),F.length&&(H.description=F.join(" ")),H}();o.platform=w,void 0===(n=function(){return w}.call(t,i,t,e))||(e.exports=n)}).call(this)}).call(this,i("YuTi")(e),i("yLpj"))}}]);