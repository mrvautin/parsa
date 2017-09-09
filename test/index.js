const parsa = require('../parsa.js');
var assert = require('assert');

describe('Parsa Tests', function() {
    describe('parseDate', function() {
        const s = 22;
        const mi = 15;
        const h = 11;
        const d = 16;
        const m = 11;
        const y = 12;
        const Y = 2012;

        it('Success - Format: YYYYMMDD', function() {
            const date = parsa.parseDate(`${Y}${m}${d}`, 'YYYYMMDD')
            assert.equal(d, date.getDate())
            assert.equal(m, date.getMonth() + 1)
            assert.equal(Y, date.getFullYear())
        });

        it('Success - Format: YYYYDDMM', function() {
            const date = parsa.parseDate(`${Y}${d}${m}`, 'YYYYDDMM')
            assert.equal(d, date.getDate())
            assert.equal(m, date.getMonth() + 1)
            assert.equal(Y, date.getFullYear())
        });

        it('Success - Format: DD/MM/YYYY', function() {
            const date = parsa.parseDate(`${d}/${m}/${Y}`, 'DD/MM/YYYY')
            assert.equal(d, date.getDate())
            assert.equal(m, date.getMonth() + 1)
            assert.equal(Y, date.getFullYear())
        });

        it('Success - Format: MM/DD/YYYY', function() {
            const date = parsa.parseDate(`${m}/${d}/${Y}`, 'MM/DD/YYYY')
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: YYYY/DD/MM', function() {
            const date = parsa.parseDate(`${Y}/${d}/${m}`, 'YYYY/DD/MM')
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: DDMMYYYY', function() {
            const date = parsa.parseDate(`${d}${m}${Y}`, 'DDMMYYYY')
            assert.equal(d, date.getDate());
            assert.equal(m, date.getMonth() + 1);
            assert.equal(Y, date.getFullYear());
        });

        it('Success - Format: DDMMYY', function() {
            const date = parsa.parseDate(`${d}${m}${y}`, 'DDMMYY')
            assert.equal(d, date.getDate())
            assert.equal(m, date.getMonth() + 1)
            assert.equal(y, date.getFullYear().toString().substr(-2))
        });

        it('Success - Format: MMDDYY', function() {
            const date = parsa.parseDate(`${m}${d}${y}`, 'MMDDYY')
            assert.equal(d, date.getDate())
            assert.equal(m, date.getMonth() + 1)
            assert.equal(y, date.getFullYear().toString().substr(-2))
        });

        it('Success - Format: MMDDYYYY', function() {
            const date = parsa.parseDate(`${m}${d}${Y}`, 'MMDDYYYY')
            assert.equal(d, date.getDate())
            assert.equal(m, date.getMonth() + 1)
            assert.equal(Y, date.getFullYear())
        });

        it('Success - Format: DD MM YYYY', function() {
            const date = parsa.parseDate(`${d} ${m} ${Y}`, 'DD MM YYYY')
            assert.equal(d, date.getDate())
            assert.equal(m, date.getMonth() + 1)
            assert.equal(Y, date.getFullYear())
        });

        it('Success - Format: MM DD YYYY', function() {
            const date = parsa.parseDate(`${m} ${d} ${Y}`, 'MM DD YYYY')
            assert.equal(d, date.getDate())
            assert.equal(m, date.getMonth() + 1)
            assert.equal(Y, date.getFullYear())
        });

        it('Success - Format: YYYY MM DD', function() {
            const date = parsa.parseDate(`${Y} ${m} ${d}`, 'YYYY MM DD')
            assert.equal(d, date.getDate())
            assert.equal(m, date.getMonth() + 1)
            assert.equal(Y, date.getFullYear())
        });

        it('Error - Format is not a string', function() {
            assert.throws(() => parsa.parseDate(`${Y}/${m}/${d}`, 12345), /Date format needs to be a string./);
        });

        it('Error - Format: ss/tt/qqqq', function() {
            assert.throws(() => parsa.parseDate(`${Y}/${m}/${d}`, 'ss/tt/qqqq'), /Date format is unsupported. Check supported formats./);
        });
    });

    describe('validateIp', function() {
        it('Success - IP: 115.42.150.37', function() {
            assert.equal(true, parsa.validateIp('115.42.150.37'))
        });

        it('Success - IP: 127.0.0.1', function() {
            assert.equal(true, parsa.validateIp('127.0.0.1'))
        });

        it('Error - IP: 127.0.0', function() {
            assert.equal(false, parsa.validateIp('127.0.0'))
        });

        it('Error - IP: 666.10.10.20', function() {
            assert.equal(false, parsa.validateIp('666.10.10.20'))
        });

        it('Error - IP: x.x.x.x', function() {
            assert.equal(false, parsa.validateIp('x.x.x.x'))
        });

        it('Error - IP: 255', function() {
            assert.equal(false, parsa.validateIp('255'))
        });

        it('Error - IP: 127.0.0.x', function() {
            assert.equal(false, parsa.validateIp('127.0.0.x'))
        });
    });

    describe('parseQuery', function() {
        it('Success - URL: http://example.com/product.php?category=4&product_id=2140&query=lcd+tv', function() {
            const queryObject = {
                category: '4',
                product_id: '2140',
                query: 'lcd+tv'
            }
            assert.deepEqual(queryObject, parsa.parseQuery('http://example.com/product.php?category=4&product_id=2140&query=lcd+tv'))
        });

        it('Success - URL: http://example.com/product.php?category=', function() {
            const queryObject = {}
            assert.deepEqual(queryObject, parsa.parseQuery('http://example.com/product.php?category='))
        });

        it('Success - URL: http://example.com/product.php?category=1', function() {
            const queryObject = {
                category: '4'
            }
            assert.deepEqual(queryObject, parsa.parseQuery('http://example.com/product.php?category=4'))
        });
    });

    describe('validateEmail', function() {
        it('Success - Email: hi@gmail.com', function() {
            assert.equal(true, parsa.validateEmail('hi@gmail.com'))
        });

        it('Error - Email: hi@gmail.', function() {
            assert.equal(false, parsa.validateEmail('hi@gmail.'))
        });

        it('Error - Email: higmail.com', function() {
            assert.equal(false, parsa.validateEmail('higmail.com'))
        });

        it('Error - Email: hi@gmail', function() {
            assert.equal(false, parsa.validateEmail('hi@gmail'))
        });

        it('Error - Email: @gmail.com', function() {
            assert.equal(false, parsa.validateEmail('@gmail.com'))
        });

        it('Error - Email: hi @gmail.com', function() {
            assert.equal(false, parsa.validateEmail('hi @gmail.com'))
        });
    });

    describe('extractNum', function() {
        it('Success - String: This is a10 string with3.14decimals6 and numbers.', function() {
            assert.deepEqual([ '10', '3.14', '6' ], parsa.extractNum('This is a10 string with3.14decimals6 and numbers.'))
        });

        it('Error - String: null', function() {
            assert.throws(() => parsa.extractNum(), /String not supplied./);
        });
    });

    describe('extractWords', function() {
        it('Success - String: Thisadkfdlfkdisdsstringdfjdkwithdkfdfkldsomefdfdfkdflkwordsjfgjkfg', function() {
            var words = ['this', 'some', 'words'];
            assert.deepEqual(words, parsa.extractWords('thisadkfdlfkdisdsstringdfjdkwithdkfdfkldsomefdfdfkdflkwordsjfgjkfg', words))
        });

        it('Error - String: null', function() {
            var words = ['this', 'some', 'words'];
            assert.throws(() => parsa.extractWords(words), /String not supplied./);
        });

        it('Error - Array: String', function() {
            var words = 'word';
            assert.throws(() => parsa.extractWords('Thisadkfdlfkdisdsstringdfjdkwithdkfdfkldsomefdfdfkdflkwordsjfgjkfg', words), /Words array not supplied./);
        });
    });
});
