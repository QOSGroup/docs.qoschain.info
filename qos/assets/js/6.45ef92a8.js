(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{167:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[s._m(0),s._v(" "),n("p",[n("router-link",{attrs:{to:"./../spec/txs/qcp.html"}},[s._v("QCP")]),s._v("工具包含以下命令:")],1),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),n("blockquote",[n("p",[s._v("初始化QCP需要申请"),n("router-link",{attrs:{to:"./../spec/ca.html"}},[s._v("CA")])],1)]),s._v(" "),s._m(3),n("p",[s._v("主要参数：")]),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._m(7),s._v(" "),s._m(8)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"qcp命令行工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qcp命令行工具","aria-hidden":"true"}},[this._v("#")]),this._v(" QCP命令行工具")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[t("code",[this._v("qoscli tx init-qcp")]),this._v(": 创建联盟链")]),this._v(" "),t("li",[t("code",[this._v("qoscli query qcp")]),this._v(": 查询qcp信息")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init","aria-hidden":"true"}},[this._v("#")]),this._v(" init")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ qoscli tx init-qcp --help\ninit qcp\n\nUsage:\n  qoscli tx init-qcp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("flags"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nFlags:\n      --async                 broadcast transactions asynchronously\n      --chain-id string       Chain ID of tendermint node\n      --creator string        address or name of creator\n  -h, --help                  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("help")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" init-qcp\n      --indent                add indent to json response\n      --max-gas int           gas limit to "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" per tx\n      --node string           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("host"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" to tendermint rpc interface "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this chain "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp://localhost:26657"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --nonce int             account nonce to sign the tx\n      --nonce-node string     tcp://"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("host"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" to tendermint rpc interface "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" some chain to query account nonce\n      --qcp                   "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),s._v(" qcp mode. send qcp tx\n      --qcp-blockheight int   qcp mode flag. original tx blockheight, blockheight must greater than 0\n      --qcp-extends string    qcp mode flag. qcp tx extends info\n      --qcp-from string       qcp mode flag. qcp tx "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("source")]),s._v(" chainID\n      --qcp-seq int           qcp mode flag.  qcp "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" sequence\n      --qcp-signer string     qcp mode flag. qcp tx signer key name\n      --qcp-txindex int       qcp mode flag. original tx index\n      --qcp.crt string        path of CA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("QCP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --trust-node            Trust connected full node "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("don't verify proofs "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" responses"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nGlobal Flags:\n  -e, --encoding string   Binary encoding "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hex"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("b64"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("btc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hex"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --home string       directory "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" config and data "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/imuge/.qoscli"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -o, --output string     Output "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --trace             print out full stack trace on errors\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("creator       创建账号")]),this._v(" "),t("li",[this._v("qcp.crt       证书位置")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("可以通过"),t("code",[this._v("qoscli keys import")]),this._v("导入"),t("em",[this._v("creator")]),this._v("账户")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ qoscli tx init-qcp --creator qosInitAcc --qcp.crt qcp.crt\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query","aria-hidden":"true"}},[this._v("#")]),this._v(" query")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ qoscli query qcp --help\nqcp subcommands\n\nUsage:\n  qoscli query qcp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nAvailable Commands:\n  list        List all crossQcp chain's sequence info\n  out         Get max sequence to outChain\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("          Get max sequence received from inChain\n  tx          Query qcp out tx\n\nFlags:\n  -h, --help   "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("help")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" qcp\n\nGlobal Flags:\n  -e, --encoding string   Binary encoding "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hex"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("b64"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("btc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hex"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --home string       directory "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" config and data "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/imuge/.qoscli"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -o, --output string     Output "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --trace             print out full stack trace on errors\n\nUse "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qoscli query qcp [command] --help"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information about a command.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])])}],!1,null,null,null);e.options.__file="qcp.md";t.default=e.exports}}]);