// The code snippet you want to highlight, as a string
var code = "var data = 1;";

// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

var result = `/*
 * 面试官你好，我是 jewel
 * 我将以动画的形式来介绍我自己
 * 只用文字演示太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
*/
* { transition: all 1s;}
html {
  background-color: rgb(222,222,222);
  font-size: 16px;
}
`

var n = 0
var id = setInterval(function() {
  n += 1
  console.log('666')
  code.innerHTML = result.substring(0, n)
  styleTag.innerHTML = result.substring(0, n)
  if (n > result.length) {
    clearInterval(id)
  }
}, 10)