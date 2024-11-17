import url from 'url';

const myUrl = new URL('https://hello.org:9000');
myUrl.pathname = '/something/something';
myUrl.search = '?p=3';


console.log(myUrl);