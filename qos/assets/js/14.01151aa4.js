(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{182:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("参照"),e("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1),t._v("安装最新Go(1.11+)，设置$GOPATH, $GOBIN, and $PATH")]),t._v(" "),t._m(2),t._m(3),t._v(" "),e("p",[t._v("包依赖管理采用go modules")]),t._v(" "),e("p",[t._v("设置环境变量：")]),t._v(" "),t._m(4),e("p",[t._v("或在相应ide开启go modules支持")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),e("p",[t._v("会安装qosd,qoscli到GOBIN目录下")]),t._v(" "),t._m(8),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/QOSGroup/qos/blob/master/DOWNLOAD.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("运行以下指令：")]),t._v(" "),t._m(9),e("p",[t._v("确保一切正常。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"install-go"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-go","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Go")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('mkdir -p $HOME/go/bin\necho "export GOPATH=$HOME/go" >> ~/.bash_profile\necho "export GOBIN=$GOPATH/bin" >> ~/.bash_profile\necho "export PATH=$PATH:$GOBIN" >> ~/.bash_profile\n')])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"go-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go-modules","aria-hidden":"true"}},[this._v("#")]),this._v(" Go modules")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('echo "export GO111MODULE=on" >> ~/.bash_profile\n')])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"install-qos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-qos","aria-hidden":"true"}},[this._v("#")]),this._v(" Install QOS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"build-from-source-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-from-source-code","aria-hidden":"true"}},[this._v("#")]),this._v(" Build from source code")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("mkdir -p $GOPATH/src/github.com/QOSGroup\ncd $GOPATH/src/github.com/QOSGroup\ngit clone https://github.com/QOSGroup/qos\nmake install\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"download-runnable-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-runnable-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Download runnable files")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("qosd version\nqoscli version\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])}],!1,null,null,null);r.options.__file="installation.md";s.default=r.exports}}]);