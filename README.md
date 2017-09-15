# parsa

`parsa` is an all purpose parser which can parse or validate the following:

- String formatted (with format) dates into a Date Object
- Validates IPv4 and IPv6 (true/false)
- Parses a URL query string into an Object
- Parses a URL into an Object with Host, Path, Hash, Protocol etc
- Validates whether a string URL is valid
- Validates Email address (true/false)
- Extracts numbers and decimals from string
- Extracts words from string
- Extracts phone numbers from string
- Removes Alpha characters from string
- Removes numeric characters from string
- Changes first character of each word to uppercase
- Checks for a secure password (8 Characters, uppercase, lowercase, number & special characters)
- Many many more...

#### Jump to section

- [parseDate](#parseDate)
- [validateIp](#validateIp)
- [validateIpv6](#validateIpv6)
- [parseQuery](#parseQuery)
- [parseUrl](#parseUrl)
- [validateUrl](#validateUrl)
- [validateEmail](#validateEmail)
- [extractNum](#extractNum)
- [extractWords](#extractWords)
- [extractPhone](#extractPhone)
- [securePassword](#securePassword)
- [removeAlpha](#removeAlpha)
- [removeNumeric](#removeNumeric)
- [firstUppercase](#firstUppercase)
- [validateObject](#validateObject)
- [isAlpha](#isAlpha)
- [isNumeric](#isNumeric)
- [isObject](#isObject)
- [isArray](#isArray)
- [isString](#isString)
- [isFunction](#isFunction)
- [minLength](#minLength)
- [maxLength](#maxLength)
- [isBetweenLength](#isBetweenLength)

`parsa` is only 8KB compare to `Moment.js` which is ~51KB. This is handy if using in the browser.

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

## Tests

``` shell
npm test
```

## Build

``` shell
gulp deploy
```

## parseDate [#](#parseDate)


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



## validateIpv6

The `validateIpv6` function takes an IP address string and returns a `boolean` value whether it is valid or invalid.

#### Usage

``` javascript
parsa.validateIpv6('2001:db8:3:4::')
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



## parseUrl

The `parseUrl` function takes a URL and returns an `Object` of the URL section.

#### Usage

``` javascript
parsa.parseQuery('https://www.google.com:80/dir/1/2/search.html?arg=0-a&arg1=1-b&arg3-c#hash')
```

**Returns:**
``` json
{
    "url": "https://www.google.com:80/dir/1/2/search.html?arg=0-a&arg1=1-b&arg3-c#hash",
    "protocol": "https",
    "host": "www.google.com",
    "port": ":80",
    "path": "/dir/1/2/",
    "file": "search.html",
    "query": "?arg=0-a&arg1=1-b&arg3-c",
    "hash": "#hash"
}
```



## validateUrl

The `validateUrl` function takes a URL and returns a `boolean` result.

#### Usage

``` javascript
parsa.validateUrl('https://www.google.com')
```

**Returns:**
`true`



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



## extractPhone

The `extractPhone` function takes a string and returns an `array` of matched phone numbers.

#### Usage

``` javascript
parsa.extractPhone('thisadkfdlfkdisdsstringdfjdkwithdkfdfkldsomefdfdfkdflkwordsjfgjkfg', words)
```

**Returns:**

``` javascript
[
    'this',
    'some',
    'words'
]
```



## securePassword

The `securePassword` function takes a password string returns a `boolean` whether it's a secure password.

#### Usage

``` javascript
parsa.securePassword('Testing193!')
```

Password requirements are set to standard defaults:

- at least 8 characters
- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
- Can contain special characters

**Returns:**

`true`



## removeAlpha

The `removeAlpha` function takes a string and removes all non number characters.

#### Usage

``` javascript
parsa.removeAlpha('some1number')
```

**Returns:**

`1`



## removeNumeric

The `removeNumeric` function takes a string and removes all numbers.

#### Usage

``` javascript
parsa.removeNumeric('some1number')
```

**Returns:**

`somenumber`



## firstUppercase

The `firstUppercase` function takes a string and makes the first character of each word uppercase.

#### Usage

``` javascript
parsa.firstUppercase('this is a test string')
```

**Returns:**

`This Is A Test String`



## validateObject

The `validateObject` function takes an Object and a Schema and returns a validation result with any errors.

Each schema validation requires a `name` and a `rules` array. The `name` property refers to the key in the `Object` being supplied.

#### Supported schema rules

- `isAlpha`
- `isNumeric`
- `isString`
- `minLength`
- `maxLength`
- `isBetweenLength`
- `isObject`
- `isArray`
- `isRequired`
- `securePassword`


#### Usage

``` javascript
let object = {
    "test_number": 1234,
    "test_string": 'abcdefg',
    "test_array": [1, 2, 3],
    "test_required": '',
    "test_length": 'I am a long string'
};

let schema = [
    {
        "name": "test_number",
        "rules": [
            'isNumeric'
        ]
    },
    {
        "name": "test_string",
        "rules": [
            'isString',
        ]
    },
    {
        "name": "test_array",
        "rules": [
            'isArray'
        ]
    },
    {
        "name": "test_required",
        "rules": [
            'isRequired'
        ]
    },
    {
        "name": "test_length",
        "rules": [
            'minLength|5',
            'maxLength|25'
        ]
    }
];
```

``` javascript
parsa.validateObject(schema, object)
```

**Returns:**

With errors
``` javascript
{
    errors: [
        {
            property: 'test_string',
            message: 'Value is greater than the maximum length'
        },
        {
            property: 'test_required',
            message: 'Value is required'
        }
    ],
    result: false
}
```

Without errors
``` javascript
{
    errors: [],
    result: true
}
```



## isAlpha

The `isAlpha` function takes a value and returns a `boolean` whether it contains only alpha characters.

#### Usage

``` javascript
parsa.isAlpha('this is a test string')
```

**Returns:**

`true`



## isNumeric

The `isNumeric` function takes value and returns a `boolean` whether it contains only alpha numbers.

#### Usage

``` javascript
parsa.isNumeric(1234)
```

**Returns:**

`true`



## isObject

The `isObject` function takes value and returns a `boolean` whether it is a `Object`.

#### Usage

``` javascript
parsa.isObject({"test": "Object"})
```

**Returns:**

`true`



## isArray

The `isArray` function takes value and returns a `boolean` whether it is a `Array`.

#### Usage

``` javascript
parsa.isArray(['abcd', '1234'])
```

**Returns:**

`true`



## isString

The `isString` function takes value and returns a `boolean` whether it is a `String`.

#### Usage

``` javascript
parsa.isString('fkdlfkdl3233')
```

**Returns:**

`true`



## isDefined

The `isDefined` function takes value and returns a `boolean` whether the value is null or undefined.

#### Usage

``` javascript
parsa.isDefined('')
```

**Returns:**

`false`



## isFunction

The `isFunction` function takes value and returns a `boolean` whether it is a `Function`.

#### Usage

``` javascript
parsa.isFunction(function test(){})
```

**Returns:**

`true`

## minLength

The `minLength` function takes value and a desired length and returns a `boolean` whether it's is greater than supplied value.

#### Usage

``` javascript
parsa.minLength('23434fdfdfd', 5)
```

**Returns:**

`true`

## maxLength

The `maxLength` function takes value and a desired length and returns a `boolean` whether it's is less than supplied value.

#### Usage

``` javascript
parsa.maxLength('23434fdfdfd', 5)
```

**Returns:**

`false`

## isBetweenLength

The `isBetweenLength` function takes value, a min length and a max length and returns a `boolean` whether the value is between the range.

#### Usage

``` javascript
parsa.maxLength('23434fdf', 5, 10)
```

**Returns:**

`true`

