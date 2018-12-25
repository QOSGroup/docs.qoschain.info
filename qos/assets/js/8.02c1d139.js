(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{189:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[s._m(0),s._v(" "),n("p",[n("router-link",{attrs:{to:"./../spec/txs/qsc.html"}},[s._v("QSC")]),s._v("工具包含以下命令:")],1),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),n("blockquote",[n("p",[s._v("创建QSC需要申请"),n("router-link",{attrs:{to:"./../spec/ca.html"}},[s._v("CA")])],1)]),s._v(" "),s._m(3),s._v(" "),s._m(4),n("p",[s._v("主要参数：")]),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._m(8),s._v(" "),s._m(9),s._m(10),s._v(" "),s._m(11),n("p",[s._v("主要参数：")]),s._v(" "),s._m(12),s._v(" "),s._m(13),s._m(14),s._v(" "),s._m(15),n("p",[s._v("主要参数：")]),s._v(" "),s._m(16),s._v(" "),s._m(17),s._v(" "),n("p",[s._v("导入QSCBanker密钥")]),s._v(" "),s._m(18),n("p",[s._v("发放联盟币")]),s._v(" "),s._m(19),n("p",[s._v("查询账户信息:")]),s._v(" "),s._m(20)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"qsc命令行工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qsc命令行工具","aria-hidden":"true"}},[this._v("#")]),this._v(" QSC命令行工具")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ul",[n("li",[n("code",[s._v("qoscli tx create-qsc")]),s._v(": 创建联盟币，发放联盟币。")]),s._v(" "),n("li",[n("code",[s._v("qoscli tx issue-qsc")]),s._v(": 发行联盟币")]),s._v(" "),n("li",[n("code",[s._v("qoscli query qsc")]),s._v(": 查询qsc信息")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create","aria-hidden":"true"}},[this._v("#")]),this._v(" create")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",[t("li",[this._v("创建QSC")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ qoscli tx create-qsc --help\ncreate qsc\n\nUsage:\n  qoscli tx create-qsc "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("flags"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nFlags:\n      --async                 broadcast transactions asynchronously\n      --chain-id string       Chain ID of tendermint node\n      --creator string        name or address of creator\n      --desc string           description\n      --extrate string        extrate: qos:qscxxx "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1:280.0000"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -h, --help                  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("help")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" create-qsc\n      --indent                add indent to json response\n      --max-gas int           gas limit to "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" per tx\n      --node string           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("host"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" to tendermint rpc interface "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this chain "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp://localhost:26657"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --nonce int             account nonce to sign the tx\n      --nonce-node string     tcp://"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("host"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" to tendermint rpc interface "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" some chain to query account nonce\n      --qcp                   "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),s._v(" qcp mode. send qcp tx\n      --qcp-blockheight int   qcp mode flag. original tx blockheight, blockheight must greater than 0\n      --qcp-extends string    qcp mode flag. qcp tx extends info\n      --qcp-from string       qcp mode flag. qcp tx "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("source")]),s._v(" chainID\n      --qcp-seq int           qcp mode flag.  qcp "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" sequence\n      --qcp-signer string     qcp mode flag. qcp tx signer key name\n      --qcp-txindex int       qcp mode flag. original tx index\n      --qsc.crt string        path of CA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("qsc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --trust-node            Trust connected full node "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("don't verify proofs "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" responses"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nGlobal Flags:\n  -e, --encoding string   Binary encoding "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hex"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("b64"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("btc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hex"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --home string       directory "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" config and data "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/imuge/.qoscli"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -o, --output string     Output "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --trace             print out full stack trace on errors\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("creator       创建账号")]),this._v(" "),t("li",[this._v("qsc.crt       证书位置")]),this._v(" "),t("li",[this._v("accounts      初始发放地址币值集合，[addr1],[amount];[addr2],[amount2],...，eg：address1vkl6nc6eedkxwjr5rsy2s5jr7qfqm487wu95w7,100;address1vkl6nc6eedkxwjr5rsy2s5jr7qfqm487wu95w7,100。\n该参数可为空，即只创建联盟币")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("可以通过"),t("code",[this._v("qoscli keys import")]),this._v("导入"),t("em",[this._v("creator")]),this._v("账户")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ qoscli tx create-qsc --creator qosInitAcc --qsc.crt qsc.crt\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("查询QOS绑定的QSCs")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ qoscli query store --path /store/qsc/subspace --data qsc\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query","aria-hidden":"true"}},[this._v("#")]),this._v(" query")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ qoscli query qsc --help\nquery qsc info by name\n\nUsage:\n  qoscli query qsc "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("qsc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("flags"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nFlags:\n      --chain-id string   Chain ID of tendermint node\n      --height int        block height to query, omit to get "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("most")]),s._v(" recent provable block\n  -h, --help              "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("help")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" qsc\n      --indent            add indent to json response\n      --node string       "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("host"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" to tendermint rpc interface "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this chain "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp://localhost:26657"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --trust-node        Trust connected full node "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("don't verify proofs "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" responses"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nGlobal Flags:\n  -e, --encoding string   Binary encoding "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hex"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("b64"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("btc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hex"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --home string       directory "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" config and data "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/imuge/.qoscli"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -o, --output string     Output "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --trace             print out full stack trace on errors\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("qsc")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ qoscli query qsc "),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("qsc_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"issue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#issue","aria-hidden":"true"}},[this._v("#")]),this._v(" issue")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ qoscli tx issue-qsc --help\nissue qsc\n\nUsage:\n  qoscli tx issue-qsc "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("flags"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nFlags:\n      --amount int            coin amount send to banker "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default 100000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --async                 broadcast transactions asynchronously\n      --banker string         address or name of banker\n      --chain-id string       Chain ID of tendermint node\n  -h, --help                  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("help")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" issue-qsc\n      --indent                add indent to json response\n      --max-gas int           gas limit to "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" per tx\n      --node string           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("host"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" to tendermint rpc interface "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this chain "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp://localhost:26657"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --nonce int             account nonce to sign the tx\n      --nonce-node string     tcp://"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("host"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" to tendermint rpc interface "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" some chain to query account nonce\n      --qcp                   "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),s._v(" qcp mode. send qcp tx\n      --qcp-blockheight int   qcp mode flag. original tx blockheight, blockheight must greater than 0\n      --qcp-extends string    qcp mode flag. qcp tx extends info\n      --qcp-from string       qcp mode flag. qcp tx "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("source")]),s._v(" chainID\n      --qcp-seq int           qcp mode flag.  qcp "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" sequence\n      --qcp-signer string     qcp mode flag. qcp tx signer key name\n      --qcp-txindex int       qcp mode flag. original tx index\n      --qsc-name string       qsc name\n      --trust-node            Trust connected full node "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("don't verify proofs "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" responses"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nGlobal Flags:\n  -e, --encoding string   Binary encoding "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hex"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("b64"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("btc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hex"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --home string       directory "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" config and data "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/imuge/.qoscli"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  -o, --output string     Output "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      --trace             print out full stack trace on errors\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("qsc-name  qsc名")]),this._v(" "),t("li",[this._v("banker    banker账户名")]),this._v(" "),t("li",[this._v("amount    qsc币值")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("可以通过"),t("code",[this._v("qoscli keys import QSCBanker --file ~/banker.pri")]),this._v(" 使用banker的私钥文件导入"),t("em",[this._v("QSCBanker")]),this._v("账户")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ qoscli keys "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" QSCBanker --file ~/banker.pri\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Enter a passphrase "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your key:\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Repeat the passphrase:\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ qoscli tx issue-qsc --qsc-name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("qsc_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --banker "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("keystore_name_of_banker or address_of_banker_account"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --amount "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("qsc_amount"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ qoscli query account "),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("keystore_name_of_banker or address_of_banker_account"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])}],!1,null,null,null);e.options.__file="qsc.md";t.default=e.exports}}]);