# parsa

`parsa` is an all purpose parser which can parse or validate the following:

- String formatted (with format) dates into a Date Object
- Validates IP (true/false)
- Parses a URL query string into an Object
- Validates Email address (true/false)
- Extracts numbers and decimals from string
- Extracts words from string

## Installation

#### Browser

``` html
<script type="text/javascript" src="dist/parsa.min.js" charset="utf-8"></script>
<script>
    console.log('parseDate: 20121125 = ', parsa.parseDate('20121125', 'YYYYMMDD'));
</script>
```

##### CDN
``` html
<script type="text/javascript" src="https://cdn.rawgit.com/mrvautin/parsa/dist/parsa.min.js" charset="utf-8"></script>
```

#### Node

``` javascript
const parsa = require('parsa');
parsa.parseDate('20121125', 'YYYYMMDD');
```

## parseDate

The `parseDate` function takes a date string and format string parameters and returns a Javascript `Date()` Object.

#### Usage

``` javascript
parsa.parseDate('20121125', 'YYYYMMDD')
```

**Returns:**

`Sun Nov 25 2012 01:00:00 GMT+0100 (CET)`

#### Supported formats

- `YYYYMMDD`
- `YYYYDDMM`
- `DDMMYYYY`
- `MMDDYYYY`
- `MMDDYY`
- `DDMMYY`
- `MM/DD/YYYY`
- `DD/MM/YYYY`
- `YYYY/DD/MM`
- `DD-MM-YYYY`
- `MM-DD-YYYY`
- `YYYY-DD-MM`
- `YYYY-MM-DD`
- `DD MM YYYY`
- `MM DD YYYY`
- `YYYY MM DD`
- `YYYYMMDD HH:MM`
- `YYYYDDMM HH:MM`
- `YYYYMMDD HH:MM:SS`
- `YYYYDDMM HH:MM:SS`
- `YYYY-DD-MM HH:MM`
- `YYYY-MM-DD HH:MM`
- `YYYY/MM/DD HH:MM`
- `YYYY/DD/MM HH:MM`
- `Do MMMM YYYY`
- `Do, MMMM, YYYY`
- `MM MMMM YYYY`


## validateIp

The `validateIp` function takes an IP address string and returns a `boolean` value whether it is valid or invalid.

#### Usage

``` javascript
parsa.validateIp('115.42.150.37')
```

**Returns:**

`true`

## parseQuery

The `parseQuery` function takes a URL and returns an `Object` of the Query string parameters.

#### Usage

``` javascript
parsa.parseQuery('http://example.com/product.php?category=4&product_id=2140&query=lcd+tv')
```

**Returns:**
``` json
{
    "category": "4",
    "product_id": "2140",
    "query": "lcd+tv"
}
```

## validateEmail

The `validateEmail` function takes a email address string and returns a `boolean` value whether it is valid or invalid.

#### Usage

``` javascript
parsa.validateEmail('hi@gmail.com')
```

**Returns:**

`true`

## extractNum

The `extractNum` function takes a string and returns an `array` of numbers/decimals found in that string.

#### Usage

``` javascript
parsa.extractNum('This is a10 string with3.14decimals6 and numbers.')
```

**Returns:**

``` javascript
[
    '10',
    '3.14',
    '6'
]
```

## extractWords

The `extractWords` function takes a string and an `array` of words and returns an `array` of matched words in the string.

#### Usage

``` javascript
var words = ['this', 'some', 'words'];
parsa.extractWords('thisadkfdlfkdisdsstringdfjdkwithdkfdfkldsomefdfdfkdflkwordsjfgjkfg', words)
```

**Returns:**

``` javascript
[
    'this',
    'some',
    'words'
]
```

