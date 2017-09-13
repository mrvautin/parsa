/*global define */
(function (main){
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
        'DD-MM-YYYY': {
            'regex': /([0-9]{2})\-([0-9]{2})\-([0-9]{4})/,
            'format': '$3-$2-$1'
        },
        'MM-DD-YYYY': {
            'regex': /([0-9]{2})\-([0-9]{2})\-([0-9]{4})/,
            'format': '$3-$1-$2'
        },
        'YYYY-DD-MM': {
            'regex': /([0-9]{4})\-([0-9]{2})\-([0-9]{2})/,
            'format': '$3-$2-$1'
        },
        'YYYY-MM-DD': {
            'regex': /([0-9]{4})\-([0-9]{2})\-([0-9]{2})/,
            'format': '$1-$2-$3'
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
            'regex': /([0-9]{4})\s([0-9]{2})\s([0-9]{2})/,
            'format': '$1-$2-$3'
        },
        'YYYYMMDD HH:MM': {
            'regex': /([0-9]{4})([0-9]{2})([0-9]{2})\s([0-9]{2}):([0-9]{2})/,
            'format': '$1-$2-$3 $4:$5'
        },
        'YYYYDDMM HH:MM': {
            'regex': /([0-9]{4})([0-9]{2})([0-9]{2})\s([0-9]{2}):([0-9]{2})/,
            'format': '$1-$3-$2 $4:$5'
        },
        'YYYYMMDD HH:MM:SS': {
            'regex': /([0-9]{4})([0-9]{2})([0-9]{2})\s([0-9]{2}):([0-9]{2}):([0-9]{2})/,
            'format': '$1-$2-$3 $4:$5:$6'
        },
        'YYYYDDMM HH:MM:SS': {
            'regex': /([0-9]{4})([0-9]{2})([0-9]{2})\s([0-9]{2}):([0-9]{2}):([0-9]{2})/,
            'format': '$1-$3-$2 $4:$5:$6'
        },
        'YYYY-DD-MM HH:MM': {
            'regex': /([0-9]{4})\-([0-9]{2})\-([0-9]{2})\s([0-9]{2}):([0-9]{2})/,
            'format': '$1-$3-$2 $4:$5'
        },
        'YYYY-MM-DD HH:MM': {
            'regex': /([0-9]{4})\-([0-9]{2})\-([0-9]{2})\s([0-9]{2}):([0-9]{2})/,
            'format': '$1-$2-$3 $4:$5'
        },
        'YYYY/MM/DD HH:MM': {
            'regex': /([0-9]{4})\/([0-9]{2})\/([0-9]{2})\s([0-9]{2}):([0-9]{2})/,
            'format': '$1-$2-$3 $4:$5'
        },
        'YYYY/DD/MM HH:MM': {
            'regex': /([0-9]{4})\/([0-9]{2})\/([0-9]{2})\s([0-9]{2}):([0-9]{2})/,
            'format': '$1-$3-$2 $4:$5'
        },
        'Do MMMM YYYY': {
            'regex': /([^\s]+)\s([^\s]+)\s([^\s{4}][0-9]+)/,
            'format': replacer
        },
        'Do, MMMM, YYYY': {
            'regex': /([^\s]+),\s([^\s]+),\s([^\s{4}][0-9]+)/,
            'format': replacer
        },
        'MM MMMM YYYY': {
            'regex': /([^\s]+)\s([^\s]+)\s([^\s{4}][0-9]+)/,
            'format': replacer
        }
    };

    // Replaces special formats (full month, 1st, 2nd Day etc)
    function replacer(match, p1, p2, p3){
        if(parsa.format === 'Do MMMM YYYY'){
            return`${p3}-${parsa.longMonth[p2].num}-${p1.replace(/[A-Za-z]/g, '')}`;
        }

        if(parsa.format === 'Do, MMMM, YYYY'){
            return`${p3}-${parsa.longMonth[p2].num}-${p1.replace(/[A-Za-z]/g, '')}`;
        }

        if(parsa.format === 'MM MMMM YYYY'){
            return`${p3}-${parsa.longMonth[p2].num}-${p1}`;
        }

        console.log(`[ERROR] Date format: ${formattedDate}`); // eslint-disable-line
        throw new Error('Could not parse date.');
    }

    parsa.longMonth = {
        'January': {
            'num': '01'
        },
        'February': {
            'num': '03'
        },
        'March': {
            'num': '03'
        },
        'April': {
            'num': '04'
        },
        'May': {
            'num': '05'
        },
        'June': {
            'num': '06'
        },
        'July': {
            'num': '07'
        },
        'August': {
            'num': '08'
        },
        'September': {
            'num': '09'
        },
        'October': {
            'num': '10'
        },
        'November': {
            'num': '11'
        },
        'December': {
            'num': '12'
        }
    };

    parsa.parseDate = function (dateString, format){
        // validation checks
        if(typeof format !== 'string'){
            throw new Error('Date format needs to be a string.');
        }

        // set date format
        let formatMatch = parsa.dateFormats[format];

        // Check unsupported
        if(typeof formatMatch === 'undefined'){
            throw new Error('Date format is unsupported. Check supported formats.');
        }

        // Set the format
        parsa.format = format;

        // Parse date
        const formattedDate = dateString.replace(formatMatch.regex, formatMatch.format);
        const dateObject = Date.parse(formattedDate);

        // Throw error if parsing fails
        if(isNaN(dateObject)){
            console.log(`[ERROR] Date format: ${formattedDate}`); // eslint-disable-line
            throw new Error('Could not parse date.');
        }

        // return Date object
        return new Date(formattedDate);
    };

    parsa.validateIp = function (ipAddress){
        if(typeof ipAddress !== 'string'){
            throw new Error('IP address not supplied.');
        }
        let re = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return re.test(ipAddress);
    };

    parsa.validateIpv6 = function (ipAddress){
        if(typeof ipAddress !== 'string'){
            throw new Error('IP address not supplied.');
        }
        let re = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
        return re.test(ipAddress);
    };

    parsa.parseQuery = function (url){
        if(typeof url !== 'string'){
            throw new Error('URL not supplied.');
        }
        let queryStringObject = {};
        url.replace(
            new RegExp("([^?=&]+)(=([^&]*))?", "g"),
            function($0, $1, $2, $3){ if($3){queryStringObject[$1] = $3;} }
        );

        return queryStringObject;
    };

    parsa.parseUrl = function (url){
        if(typeof url !== 'string'){
            throw new Error('URL not supplied.');
        }
        let urlObject = {};
        url.replace(
            new RegExp(/^(?:(http[s]?|ftp[s]):\/\/)?([^:\/\s]+)(:[0-9]+)?((?:\/\w+)*\/)([\w\-\.]+[^#?\s]+)([^#\s]*)?(#[\w\-]+)?$/, "g"),
            function($0, $1, $2, $3, $4, $5, $6, $7){
                urlObject = {
                    url: url,
                    protocol: $1,
                    host: $2,
                    port: $3,
                    path: $4,
                    file: $5,
                    query: $6,
                    hash: $7
                };
            }
        );
        return urlObject;
    };

    parsa.validateUrl = function(url){
        if(typeof url !== 'string'){
            throw new Error('URL not supplied.');
        }
        var re = /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/;
        return re.test(url);
    };

    parsa.validateEmail = function (email){
        if(typeof email !== 'string'){
            throw new Error('Email not supplied.');
        }
        var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return re.test(email);
    };

    parsa.extractNum = function (string){
        if(typeof string !== 'string'){
            throw new Error('String not supplied.');
        }
        const numbersAndDecimals = [];
        string.replace(
            new RegExp(/(?:\d*\.)?\d+/, "g"),
            function($0){
                numbersAndDecimals.push($0);
            }
        );
        return numbersAndDecimals;
    };

    parsa.extractWords = function (string, words){
        if(typeof string !== 'string'){
            throw new Error('String not supplied.');
        }
        if(!Array.isArray(words)){
            throw new Error('Words array not supplied.');
        }
        let splitWords = words.join("|");
        var reString = `(${splitWords})`;
        var re = new RegExp(reString,"gi");
        return string.match(re);
    };

    parsa.securePassword = function (password){
        if(typeof password !== 'string'){
            throw new Error('Password not supplied.');
        }
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        return re.test(password);
    };

    parsa.removeAlpha = function (string){
        if(typeof string !== 'string' || string === ''){
            throw new Error('String not supplied.');
        }
        return string.replace(/\D/g, "");
    };

    parsa.removeNumeric = function (string){
        if(typeof string !== 'string' || string === ''){
            throw new Error('String not supplied.');
        }
        return string.replace(/\d+/g, "");
    };

    parsa.firstUppercase = function (string){
        if(typeof string !== 'string' || string === ''){
            throw new Error('String not supplied.');
        }
        let returnedString = '';
        string.replace(
            new RegExp(/(\w+)/, "g"),
            function($0){
                let word = $0;
                if(word && word.length > 0){
                    word = word.toUpperCase().substring(0,1) + word.substring(1, word.length) + ' ';
                }
                returnedString += word;
            }
        );
        return returnedString.trim();
    };

    parsa.extractPhone = function (string){
        if(typeof string !== 'string'){
            throw new Error('String not supplied.');
        }
        const phoneNumbers = [];
        string.replace(
            new RegExp(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "g"),
            function($0){
                phoneNumbers.push($0);
            }
        );
        return phoneNumbers;
    };



    if(typeof module !== 'undefined' && module.exports){
        module.exports = parsa;
    }else if(typeof define === 'function' && define.amd){
        define(function (){
            return parsa;
        });
    }else{
        main.parsa = parsa;
    }
})(this);