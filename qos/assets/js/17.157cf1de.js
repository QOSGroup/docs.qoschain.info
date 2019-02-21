(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{167:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._m(3),s._v(" "),s._m(4),a("p",[s._v("处理逻辑：")]),s._v(" "),a("p",[s._v("在qos app 创建时编写相应代码逻辑可将该部分信息保存到创世块中")]),s._v(" "),s._m(5),s._m(6),s._v(" "),a("p",[a("router-link",{attrs:{to:"./ca.html"}},[s._v("QOS CA")]),s._v("根证书公钥，用于联盟币、联盟链相关业务逻辑签名认证。")],1),s._v(" "),a("blockquote",[a("p",[s._v("可通过"),a("code",[s._v("qosd config-root-ca <path of root.pub>")]),s._v("配置，"),a("code",[s._v("root.pub")]),s._v("为"),a("a",{attrs:{href:"https://github.com/tendermint/go-amino",target:"_blank",rel:"noopener noreferrer"}},[s._v("go-amino"),a("OutboundLink")],1),s._v("JSON 序列化ed25519编码的公钥信息。")])]),s._v(" "),a("p",[s._v("执行")]),s._v(" "),s._m(7),s._m(8),s._v(" "),s._m(9),s._m(10),s._v(" "),a("p",[s._v("初始账户")]),s._v(" "),s._m(11),s._v(" "),a("p",[s._v("执行")]),s._v(" "),s._m(12),s._m(13),s._v(" "),s._m(14),s._m(15),s._v(" "),a("p",[s._v("QOS使用app_state中包含的validators作为验证节点，启动前务必正确配置validators。")]),s._v(" "),s._m(16),s._v(" "),s._m(17),a("p",[s._v("显示validator公钥：")]),s._v(" "),s._m(18),s._m(19),s._v(" "),a("p",[s._v("执行：")]),s._v(" "),s._m(20),s._m(21),s._v(" "),s._m(22)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"genesis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#genesis","aria-hidden":"true"}},[this._v("#")]),this._v(" Genesis")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("执行"),t("code",[this._v("qosd init")]),this._v("之后，默认会在"),t("code",[this._v("$HOME/.qosd/config/")]),this._v("目录下生成"),t("code",[this._v("genesis.json")]),this._v("文件")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" genesis.json\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app_state"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        // 添加GenesisState结构对应数据内容\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",[this._v("app_state")]),this._v("对应数据结构"),t("code",[this._v("GenesisState")]),this._v("：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" GenesisState "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tCAPubKey   crypto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PubKey         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"ca_pub_key"`')]),s._v("\n\tAccounts   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("QOSAccount "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"accounts"`')]),s._v("\n\tValidators "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Validator     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"validators"`')]),s._v("\n\n\tSPOConfig   types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SPOConfig   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"spo_config"`')]),s._v("\n\tStakeConfig types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("StakeConfig "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"stake_config"`')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置 InitChainer")]),s._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetInitChainer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("initChainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("QOSApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initChainer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ctx context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" req abci"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RequestInitChain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" abci"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ResponseInitChain "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//初始化app_state内容")]),s._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" abci"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ResponseInitChain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"ca-pub-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ca-pub-key","aria-hidden":"true"}},[this._v("#")]),this._v(" ca_pub_key")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ qosd config-root-ca root.pub\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("会在"),t("code",[this._v("genesis.json")]),this._v("中添加如下部分：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ca_pub_key"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tendermint/PubKeyEd25519"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0SDDvhiMsqX9XLuscqovU8l24txbV7Mg4ecs+R6Swzk="')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"accounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accounts","aria-hidden":"true"}},[this._v("#")]),this._v(" accounts")])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("初始账户可以通过"),t("code",[this._v("qosd add-genesis-accounts")]),this._v("命令添加")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ qosd add-genesis-accounts address1ctmavdk57x0q7c9t98v7u79607222ars4qczcy,100000000QOS,100000000AOE\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("会在"),t("code",[this._v("genesis.json")]),this._v("中"),t("code",[this._v("accounts")]),this._v("部分添加对应账户信息：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"accounts"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"base_account"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"account_address"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address1ctmavdk57x0q7c9t98v7u79607222ars4qczcy"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100000000"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qscs"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"coin_name"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AOE"')]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"amount"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100000000"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"validators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validators","aria-hidden":"true"}},[this._v("#")]),this._v(" validators")])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("验证节点可通过"),t("code",[this._v("qosd add-genesis-validator")]),this._v("命令添加，可先通过"),t("code",[this._v("qosd tendermint show-validator")]),this._v("查看将要配置的validator公钥信息。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ qosd tendermint show-validator\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tendermint/PubKeyEd25519"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"agD9zt3RhmAq6YnF7UKn0Kw53wQvZsiPmRYdG+dyaDk="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("记住"),t("code",[this._v("value")]),this._v("部分，我们将在下面使用到。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ qosd add-genesis-validator --name "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v('"Arya\'s node"')]),this._v(" --owner address1ctmavdk57x0q7c9t98v7u79607222ars4qczcy --pubkey agD9zt3RhmAq6YnF7UKn0Kw53wQvZsiPmRYdG+dyaDk"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v(" --tokens 100\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("会在"),t("code",[this._v("genesis.json")]),this._v("中"),t("code",[this._v("validators")]),this._v("部分添加对应validator信息：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"validators"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("                                                           \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("                                                                       \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Arya\'s node"')]),s._v(",                                                      \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"owner"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address1ctmavdk57x0q7c9t98v7u79607222ars4qczcy"')]),s._v(",            \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"validatorPubkey"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("                                                  \n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tendermint/PubKeyEd25519"')]),s._v(",                                 \n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"agD9zt3RhmAq6YnF7UKn0Kw53wQvZsiPmRYdG+dyaDk="')]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"             \n    },                                                                    \n    "')]),s._v("bondTokens"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('": "')]),s._v("100"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('",                                                  \n    "')]),s._v("description"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('": "')]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('",                                                    \n    "')]),s._v("status"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('": 0,                                                          \n    "')]),s._v("inActiveCode"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('": 0,                                                    \n    "')]),s._v("inActiveTime"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('": "')]),s._v("0001-01-01T00:00:00Z"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('",                               \n    "')]),s._v("inActiveHeight"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('": "')]),s._v("0"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('",                                                \n    "')]),s._v("bondHeight"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('": "')]),s._v('1"                                                     \n  '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("                                                                       \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                                                                        \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])}],!1,null,null,null);e.options.__file="genesis.md";t.default=e.exports}}]);