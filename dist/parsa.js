(function (main) {
    'use strict';

    /**
     * Parse strings
     * @class parsa
     */
    var parsa = {};

    // should return yyyy-mm-dd
    parsa.dateFormats = {
        'YYYYMMDD': {
            'regex': /([0-9]{4})([0-9]{2})([0-9]{2})/,
            'format': '$1-$2-$3'
        },
        'YYYYDDMM': {
            'regex': /([0-9]{4})([0-9]{2})([0-9]{2})/,
            'format': '$1-$3-$2'
        },
        'DDMMYYYY': {
            'regex': /([0-9]{2})([0-9]{2})([0-9]{4})/,
            'format': '$3-$2-$1'
        },
        'MMDDYYYY': {
            'regex': /([0-9]{2})([0-9]{2})([0-9]{4})/,
            'format': '$3-$1-$2'
        },
        'MMDDYY': {
            'regex': /([0-9]{2})([0-9]{2})([0-9]{2})/,
            'format': '20$3-$1-$2'
        },
        'DDMMYY': {
            'regex': /([0-9]{2})([0-9]{2})([0-9]{2})/,
            'format': '20$3-$2-$1'
        },
        'MM/DD/YYYY': {
            'regex': /([0-9]{2})\/([0-9]{2})\/([0-9]{4})/,
            'format': '$3-$1-$2'
        },
        'DD/MM/YYYY': {
            'regex': /([0-9]{2})\/([0-9]{2})\/([0-9]{4})/,
            'format': '$3-$2-$1'
        },
        'YYYY/DD/MM': {
            'regex': /([0-9]{4})\/([0-9]{2})\/([0-9]{2})/,
            'format': '$1-$3-$2'
        },
        'DD MM YYYY': {
            'regex': /([0-9]{2})\s([0-9]{2})\s([0-9]{4})/,
            'format': '$3-$2-$1'
        },
        'MM DD YYYY': {
            'regex': /([0-9]{2})\s([0-9]{2})\s([0-9]{4})/,
            'format': '$3-$1-$2'
        },
        'YYYY MM DD': {
            'regex': /([0-9]{2})\s([0-9]{2})\s([0-9]{4})/,
            'format': '$1-$2-$3'
        }
    }

    parsa.parseDate = function (dateString, format) {
        // validation checks
        if (typeof format !== 'string') {
            throw new Error('Date format needs to be a string.');
        }

        // set date format
        format = parsa.dateFormats[format.toUpperCase() ];

        // Check unsupported
        if (typeof format === 'undefined') {
            throw new Error('Date format is unsupported. Needs to be ISO 8601 format');
        }

        // Parse date
        const formattedDate = dateString.replace(format.regex, format.format);
        const dateObject = Date.parse(formattedDate)

        // Throw error if parsing fails
        if(isNaN(dateObject)){
            console.log('[ERROR] Date: ' + formattedDate)
            throw new Error('Could not parse date.');
        }

        // return Date object
        return new Date(formattedDate)
    }

    parsa.validateIp = function (ipAddress) {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {
            return (true)
        }
        return (false)
    }

    parsa.parseQuery = function (url) {
        const queryStringObject = {};
        url.replace(
            new RegExp("([^?=&]+)(=([^&]*))?", "g"),
            function($0, $1, $2, $3) { if($3){queryStringObject[$1] = $3;} }
        );

        return queryStringObject;
    }

    parsa.validateEmail = function (email){
        var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return re.test(email);
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = parsa;
    } else if (typeof define === 'function' && define.amd) {
        define(function () {
            return parsa;
        });
    } else {
        main.parsa = parsa;
    }
})(this);