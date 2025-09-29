const URL = require('url');

const myURL = new URL.URL('https://example.com:8000/path/name?color=red#hash');

console.log('Href:', myURL);

console.log(myURL.searchParams.get('color')); // 'red'   
console.log(myURL.searchParams.append('category', 'sports'));
console.log(myURL.searchParams.get('category')); // 'sports'
console.log(myURL.searchParams.toString()); // 'color=red&category=sports'
console.log(myURL.searchParams.has('category')); // true
console.log(myURL.searchParams.delete('category'));
console.log(myURL.searchParams.toString()); // 'color=red'
console.log(myURL.searchParams.has('category')); // false

// Legacy URL API
const legacyUrl = URL.parse('https://example.com:8000/path/name?color=red#hash', true);

console.log('Legacy URL:', legacyUrl);
console.log(legacyUrl.query.color); // 'red'    