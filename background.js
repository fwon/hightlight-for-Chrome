/**
 * hightlight code in frontend
 * https://github.com/fwon
 */

(function(factory){
  //AMD
  if (typeof define === 'function' && define.amd) {
    define(factory);
  //Node
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  //global
  } else {
    window.hljs = factory();
  }

}(function() {
  var hljs = function() {};
  var KEYWORD_RE = /\b(break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|this|throw|try|typeof|var|void|while|with|define)\b/g;
  var COMMENT_MULTI_RE = /(\/\*[\S\s]*?\*\/)/g;
  var COMMENT_RE = /[^:"](\/\/.*)/g;

  var toString = Object.prototype.toString;
  var hasOwn = Object.prototype.hasOwnProperty;

  function _type(obj) {
    var type;
    if (obj === null) {
        type = String(obj);
    } else {
        type = toString.call(obj).toLowerCase();
        type = type.substring(8, type.length - 1);
    }
    return type;
  }

  function _each(obj, iterator, context) {
    var i, l, type;
    if (typeof obj !== 'object') return;

    type = _type(obj);
    context = context || obj;
    if (type === 'array' || type === 'arguments' || type === 'nodelist') {
        for (i=0, l=obj.length; i<l; i++) {
            if (iterator.call(context, obj[i], i, obj) === false) return;
        }
    } else {
        for (i in obj) {
            if (hasOwn.call(obj, i)) {
                if (iterator.call(context, obj[i], i, obj) === false) return;
            }
        }
    }
  }

  hljs.highlightBlock = function (block) {
    var resultHTML = block.innerHTML;
    block.classList.add('hljs');
    block.innerHTML = '';
    resultHTML = resultHTML.replace(KEYWORD_RE, '<span class="hljs-keyword">$1</span>')
      .replace(COMMENT_RE, '<span class="hljs-comment">$1</span>')
      .replace(COMMENT_MULTI_RE, '<span class="hljs-comment">$1</span>');

    block.innerHTML = resultHTML;

    replaceSubDOMColor(block);
  };

  //替换评论子元素的颜色
  function replaceSubDOMColor(block) {
    var comments = block.getElementsByClassName('hljs-comment');

    _each(comments, function (item) {
      // var subs = item.children;
      // console.log(subs);
      // _each(subs, function (s) {
      //   s.classList = '';
      // });
      item.innerHTML = item.innerText;
    });
  }

  return hljs;
}));