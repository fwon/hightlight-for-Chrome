var preEle = document.getElementsByTagName('pre')[0];
var codeEle = document.createElement('code');
var meta = document.createElement('meta');

var url = location.href;

if (url.indexOf(".js") > -1) {
  codeEle.classList.add('language-javascript');
} else if (url.indexOf(".css") > -1) {
  codeEle.classList.add('language-css');
}
codeEle.innerHTML = preEle.innerHTML;
preEle.innerHTML = '';
preEle.appendChild(codeEle);


