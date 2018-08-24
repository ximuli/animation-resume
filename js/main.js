// 把 code 写到 #code 和 myStyle 里
function writeCode(prefix, code, fn) {
  let domCode = document.querySelector('#code')
  domCode.innerHTML = code || ''
  let n = 0
  let id = setInterval(function() {
    n += 1
    domCode.innerHTML =  Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
    styleTag.innerHTML = prefix + code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      clearInterval(id)
      fn.call()
    }
  }, 10)
}

function writeMarkdown(md) {
  let domCode = document.querySelector('#paper > .content')
  let n = 0
  let id = setInterval(function() {
    n += 1
    domCode.innerHTML =  Prism.highlight(md.substring(0, n), Prism.languages.markdown)
    domCode.scrollTop = domCode.scrollHeight
    if (n >= md.length) {
      clearInterval(id)
      fn.call()
    }
  }, 10)
}

var result = `/*
 * 面试官你好，我叫栗靖伟
 * 我将以动画的形式来介绍我自己
 * 只用文字演示太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
*/

* { transition: all 1s;}

html {
  background-color: rgb(222,222,222);
  font-size: 14px;
}


#code {
  border: 1px solid red;
  padding: 16px;
}

/*  我需要一点代码高亮  */

.token.selector {
  color: #690;
}
.token.property {
  color: #905;
}
.token.function {
  color: #DD4A68;
}

/*  加点 3D 效果吧  */

#code {
  transform: rotate(360deg);
}

/*  不玩了，我来介绍一下自己  */

/*  我需要一块小黑板  */

`

var result2 = `
#code {
  position: fixed;
  left: 0;
  width: 50%;
  height: 100%;

}

#paper {
  position: fixed;
  right: 0;
  width: 50%;
  height: 100%;

}

.content {
  height: 100%;
  padding: 0 16px;
  background-color: #333;
  color: #fff;
  font-size: 14px;
  line-height: 30px;
  overflow: auto;
}
`

var md = `
# 自我介绍

我叫 XXX
1994 年 2 月出生
河南工业大学毕业
两年网页重构经验
业余时间自学前端
希望应聘前端开发岗位

# 技能介绍

熟悉 HTML5 CSS3 JavaScript
了解 ES6 HTTP Vue

# 项目介绍

1. XXX 轮播
2. XXX 简历
3. XXX 画板

# 联系方式

QQ xxxxxxxxxx
Email xxxxxxxxxx
手机 xxxxxxxxxx
`


writeCode('', result, () => {
  createPaper( ()=> {
    writeCode(result, result2, () => {
      writeMarkdown(md)
    })
  } )
})

function createPaper(fn) {
  var paper = document.createElement('div')
  var content = document.createElement('pre')
  paper.id = 'paper'
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}
