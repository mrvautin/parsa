/*global describe it */

const parsa = require('../parsa.js');
var assert = require('assert');

describe('Parsa Tests', function(){
    describe('parseDate', function(){
        const Do = '16th';
        const MMMM = 'November';
        const s = 22;
        const mi = 15;
        const h = 11;
        const d = 16;
        const m = 11;
        const y = 12;
        const Y = 2012;

        it('Success - Format: YYYYMMDD', function(){
            const date = parsa.parseDate(`${Y}${m}${d}`, 'YYYYMMDD');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: YYYYDDMM', function(){
            const date = parsa.parseDate(`${Y}${d}${m}`, 'YYYYDDMM');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: DD/MM/YYYY', function(){
            const date = parsa.parseDate(`${d}/${m}/${Y}`, 'DD/MM/YYYY');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: MM/DD/YYYY', function(){
            const date = parsa.parseDate(`${m}/${d}/${Y}`, 'MM/DD/YYYY');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: YYYY/DD/MM', function(){
            const date = parsa.parseDate(`${Y}/${d}/${m}`, 'YYYY/DD/MM');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: DD-MM-YYYY', function(){
            const date = parsa.parseDate(`${d}-${m}-${Y}`, 'DD-MM-YYYY');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: MM-DD-YYYY', function(){
            const date = parsa.parseDate(`${m}-${d}-${Y}`, 'MM-DD-YYYY');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: YYYY-DD-MM', function(){
            const date = parsa.parseDate(`${Y}-${d}-${m}`, 'YYYY-DD-MM');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: YYYY-MM-DD', function(){
            const date = parsa.parseDate(`${Y}-${m}-${d}`, 'YYYY-MM-DD');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: DDMMYYYY', function(){
            const date = parsa.parseDate(`${d}${m}${Y}`, 'DDMMYYYY');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: DDMMYY', function(){
            const date = parsa.parseDate(`${d}${m}${y}`, 'DDMMYY');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(y, date.getFullYear().toString().substr(-2));
        });

        it('Success - Format: MMDDYY', function(){
            const date = parsa.parseDate(`${m}${d}${y}`, 'MMDDYY');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(y, date.getFullYear().toString().substr(-2));
        });

        it('Success - Format: MMDDYYYY', function(){
            const date = parsa.parseDate(`${m}${d}${Y}`, 'MMDDYYYY');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: DD MM YYYY', function(){
            const date = parsa.parseDate(`${d} ${m} ${Y}`, 'DD MM YYYY');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: MM DD YYYY', function(){
            const date = parsa.parseDate(`${m} ${d} ${Y}`, 'MM DD YYYY');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: YYYY MM DD', function(){
            const date = parsa.parseDate(`${Y} ${m} ${d}`, 'YYYY MM DD');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: YYYYMMDD HH:MM', function(){
            const date = parsa.parseDate(`${Y}${m}${d} ${h}:${mi}`, 'YYYYMMDD HH:MM');
            assert.equal(h, date.getHours());
            assert.equal(mi, date.getMinutes());
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: YYYYDDMM HH:MM', function(){
            const date = parsa.parseDate(`${Y}${d}${m} ${h}:${mi}`, 'YYYYDDMM HH:MM');
            assert.equal(h, date.getHours());
            assert.equal(mi, date.getMinutes());
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: YYYYDDMM HH:MM:SS', function(){
            const date = parsa.parseDate(`${Y}${d}${m} ${h}:${mi}:${s}`, 'YYYYDDMM HH:MM:SS');
            assert.equal(h, date.getHours());
            assert.equal(mi, date.getMinutes());
            assert.equal(s, date.getSeconds());
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: YYYY-DD-MM HH:MM', function(){
            const date = parsa.parseDate(`${Y}-${d}-${m} ${h}:${mi}`, 'YYYY-DD-MM HH:MM');
            assert.equal(h, date.getHours());
            assert.equal(mi, date.getMinutes());
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: YYYY-MM-DD HH:MM', function(){
            const date = parsa.parseDate(`${Y}-${m}-${d} ${h}:${mi}`, 'YYYY-MM-DD HH:MM');
            assert.equal(h, date.getHours());
            assert.equal(mi, date.getMinutes());
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: YYYY/MM/DD HH:MM', function(){
            const date = parsa.parseDate(`${Y}/${m}/${d} ${h}:${mi}`, 'YYYY/MM/DD HH:MM');
            assert.equal(h, date.getHours());
            assert.equal(mi, date.getMinutes());
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: YYYY/DD/MM HH:MM', function(){
            const date = parsa.parseDate(`${Y}/${d}/${m} ${h}:${mi}`, 'YYYY/DD/MM HH:MM');
            assert.equal(h, date.getHours());
            assert.equal(mi, date.getMinutes());
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: Do MMMM YYYY', function(){
            const date = parsa.parseDate(`${Do} ${MMMM} ${Y}`, 'Do MMMM YYYY');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: Do, MMMM, YYYY', function(){
            const date = parsa.parseDate(`${Do}, ${MMMM}, ${Y}`, 'Do, MMMM, YYYY');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: MM MMMM YYYY', function(){
            const date = parsa.parseDate(`${d} ${MMMM} ${Y}`, 'MM MMMM YYYY');
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Error - Format is not a string', function(){
            assert.throws(() => parsa.parseDate(`${Y}/${m}/${d}`, 12345), /Date format needs to be a string./);
        });

        it('Error - Format: ss/tt/qqqq', function(){
            assert.throws(() => parsa.parseDate(`${Y}/${m}/${d}`, 'ss/tt/qqqq'), /Date format is unsupported. Check supported formats./);
        });
    });

    describe('validateIp', function(){
        it('Success - IP: 115.42.150.37', function(){
            assert.equal(true, parsa.validateIp('115.42.150.37'));
        });

        it('Success - IP: 127.0.0.1', function(){
            assert.equal(true, parsa.validateIp('127.0.0.1'));
        });

        it('Error - IP: 127.0.0', function(){
            assert.equal(false, parsa.validateIp('127.0.0'));
        });

        it('Error - IP: 666.10.10.20', function(){
            assert.equal(false, parsa.validateIp('666.10.10.20'));
        });

        it('Error - IP: x.x.x.x', function(){
            assert.equal(false, parsa.validateIp('x.x.x.x'));
        });

        it('Error - IP: 255', function(){
            assert.equal(false, parsa.validateIp('255'));
        });

        it('Error - IP: 127.0.0.x', function(){
            assert.equal(false, parsa.validateIp('127.0.0.x'));
        });
    });

    describe('parseQuery', function(){
        it('Success - URL: http://example.com/product.php?category=4&product_id=2140&query=lcd+tv', function(){
            const queryObject = {
                category: '4',
                product_id: '2140',
                query: 'lcd+tv'
            };
            assert.deepEqual(queryObject, parsa.parseQuery('http://example.com/product.php?category=4&product_id=2140&query=lcd+tv'));
        });

        it('Success - URL: http://example.com/product.php?category=', function(){
            const queryObject = {};
            assert.deepEqual(queryObject, parsa.parseQuery('http://example.com/product.php?category='));
        });

        it('Success - URL: http://example.com/product.php?category=1', function(){
            const queryObject = {
                category: '4'
            };
            assert.deepEqual(queryObject, parsa.parseQuery('http://example.com/product.php?category=4'));
        });
    });

    describe('validateEmail', function(){
        it('Success - Email: hi@gmail.com', function(){
            assert.equal(true, parsa.validateEmail('hi@gmail.com'));
        });

        it('Error - Email: hi@gmail.', function(){
            assert.equal(false, parsa.validateEmail('hi@gmail.'));
        });

        it('Error - Email: higmail.com', function(){
            assert.equal(false, parsa.validateEmail('higmail.com'));
        });

        it('Error - Email: hi@gmail', function(){
            assert.equal(false, parsa.validateEmail('hi@gmail'));
        });

        it('Error - Email: @gmail.com', function(){
            assert.equal(false, parsa.validateEmail('@gmail.com'));
        });

        it('Error - Email: hi @gmail.com', function(){
            assert.equal(false, parsa.validateEmail('hi @gmail.com'));
        });
    });

    describe('extractNum', function(){
        it('Success - String: This is a10 string with3.14decimals6 and numbers.', function(){
            assert.deepEqual([ '10', '3.14', '6' ], parsa.extractNum('This is a10 string with3.14decimals6 and numbers.'));
        });

        it('Error - String: null', function(){
            assert.throws(() => parsa.extractNum(), /String not supplied./);
        });
    });

    describe('extractWords', function(){
        it('Success - String: Thisadkfdlfkdisdsstringdfjdkwithdkfdfkldsomefdfdfkdflkwordsjfgjkfg', function(){
            var words = ['this', 'some', 'words'];
            assert.deepEqual(words, parsa.extractWords('thisadkfdlfkdisdsstringdfjdkwithdkfdfkldsomefdfdfkdflkwordsjfgjkfg', words));
        });

        it('Error - String: null', function(){
            var words = ['this', 'some', 'words'];
            assert.throws(() => parsa.extractWords(words), /String not supplied./);
        });

        it('Error - Array: String', function(){
            var words = 'word';
            assert.throws(() => parsa.extractWords('Thisadkfdlfkdisdsstringdfjdkwithdkfdfkldsomefdfdfkdflkwordsjfgjkfg', words), /Words array not supplied./);
        });
    });

    describe('parseUrl', function(){
        it('Success - URL: https://www.google.com:80/dir/1/2/search.html?arg=0-a&arg1=1-b&arg3-c#hash', function(){
            var url = {
                url: 'https://www.google.com:80/dir/1/2/search.html?arg=0-a&arg1=1-b&arg3-c#hash',
                protocol: 'https',
                host: 'www.google.com',
                port: ':80',
                path: '/dir/1/2/',
                file: 'search.html',
                query: '?arg=0-a&arg1=1-b&arg3-c',
                hash: '#hash'
            };
            assert.deepEqual(url, parsa.parseUrl('https://www.google.com:80/dir/1/2/search.html?arg=0-a&arg1=1-b&arg3-c#hash'));
        });

        it('Error - String: null', function(){
            assert.throws(() => parsa.extractNum(), /String not supplied./);
        });
    });

    describe('securePassword', function(){
        it('Success - Password: Testing193!', function(){
            assert.equal(true, parsa.securePassword('Testing193!'));
        });

        it('Error - Password: shitpassword', function(){
            assert.equal(false, parsa.securePassword('shitpassword'));
        });

        it('Success - Password: tooshort', function(){
            assert.equal(false, parsa.securePassword('tooshort'));
        });

        it('Error - Password: null', function(){
            assert.throws(() => parsa.securePassword(), /Password not supplied./);
        });
    });

    describe.only('validateUrl', function(){
        it('Error - URL: www.google.com', function(){
            assert.equal(false, parsa.validateUrl('www.google.com'));
        });
        it('Success - URL: https://www.google.net', function(){
            assert.equal(true, parsa.validateUrl('https://www.google.net'));
        });
        it('Success - URL: https://www.google.comma', function(){
            assert.equal(true, parsa.validateUrl('https://www.google.comma'));
        });
        it('Error - URL: https://www.google .com', function(){
            assert.equal(false, parsa.validateUrl('https://www.google. com'));
        });
        it('Success - URL: http://userid@example.com:8080', function(){
            assert.equal(true, parsa.validateUrl('http://userid@example.com:8080'));
        });
        it('Success - URL: http://foo.com/blah_blah_(wikipedia)', function(){
            assert.equal(true, parsa.validateUrl('http://foo.com/blah_blah_(wikipedia)'));
        });
        it('Success - URL: http://142.42.1.1/', function(){
            assert.equal(true, parsa.validateUrl('http://142.42.1.1/'));
        });
        it('Error - URL: http://../', function(){
            assert.equal(false, parsa.validateUrl('http://../'));
        });
    });
});
