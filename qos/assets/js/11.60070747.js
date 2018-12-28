(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{186:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v(":::")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("文中涉及参数（以$开头）的具体设置，可能与本文举例中的具体数字不同，测试网执行的参数可详见"),r("a",{attrs:{href:"https://github.com/QOSGroup/qos-testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试网的genesis.json文件配置"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v(":::")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("要成为QOS验证人，必须首先成为一个全节点，保证持续稳定的在线运行来进行区块内交易的校验签名及广播，并为此采取必要的安全策略。在测试网中，我们推荐验证人节点的硬件达到以下要求：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("请参照"),r("a",{attrs:{href:"http://docs.qoschain.info/qos/install/testnet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("加入测试网络"),r("OutboundLink")],1)]),t._v(" "),t._m(10),t._v(" "),r("p",[t._v("QOS网络中将以验证人绑定QOS总数即权重从大到小排序，总数不超过$max_validator_cnt")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),r("p",[t._v("保持不间断地验证区块交易，以私钥签名并广播的状态。\n普通全节点，通过发出"),r("a",{attrs:{href:"https://github.com/QOSGroup/qos/tree/master/docs/client/validators/all_about_validators.md#create-validator",target:"_blank",rel:"noopener noreferrer"}},[t._v("create-validator"),r("OutboundLink")],1),t._v("交易，或者一个非活跃状态的验证人，通过"),r("a",{attrs:{href:"https://github.com/QOSGroup/qos/tree/master/docs/client/validators/all_about_validators.md#active-validator",target:"_blank",rel:"noopener noreferrer"}},[t._v("active-validator"),r("OutboundLink")],1),t._v("交易，可能转为活跃状态。")]),t._v(" "),r("p",[t._v("但并非任意全节点都可以通过以上方式成为活跃验证人，由于网络限制了总验证人数量，在一个特定时间，QOS网络以过去的$voting_status_len个块中，验证过并有签名的块数至少要达到$voting_status_least，来明确一个验证人节点是否活跃。我们称$voting_status_len为验证人保活窗口。")]),t._v(" "),r("p",[t._v("例如，测试网中的保活窗口宽度$voting_status_len=10000，最小保活块数$voting_status_least=5000")]),t._v(" "),r("p",[t._v("如果验证人未能达到这个要求，将被强制切换到非活跃状态。")]),t._v(" "),r("p",[t._v("一个新创建或者重新激活的验证人，如果经历的总块数尚不足窗口宽度，但漏签块数已达$voting_status_least，也将被切换到非活跃状态")]),t._v(" "),r("p",[t._v("活跃状态的验证人，可以进行区块验证，可以提交区块，获得挖矿收益，可以通过达成代理合约获得收益，也可以获得交易费用。")]),t._v(" "),t._m(15),t._v(" "),r("p",[t._v("由于未达到活跃窗口要求，或者通过发出"),r("a",{attrs:{href:"https://github.com/QOSGroup/qos/tree/master/docs/client/validators/all_about_validators.md#revoke-validator",target:"_blank",rel:"noopener noreferrer"}},[t._v("revoke-validator"),r("OutboundLink")],1),t._v("交易主动要求，验证人将转为非活跃状态。非活跃状态是验证人从活跃状态到退出状态之间所必须经历的中间态。")]),t._v(" "),r("p",[t._v("非活跃状态最久能够维持观察期即$survival_secs秒，非活跃的验证人如果什么都不做，经过$survival_secs后将自动退出，失去其验证人身份。")]),t._v(" "),r("p",[t._v("非活跃状态的验证人，不能进行区块验证，不能提交区块，不能获得挖矿收益和交易费用，不能达成代理合约，需要渡过观察期退出后，通过代理合约绑定的QOS才能回到投资者账户上。")]),t._v(" "),t._m(16),t._v(" "),r("p",[t._v("退出状态的验证人将其上绑定的QOS自动返还给各投资者，自绑定的部分也会回到验证节点的所有者（owner）账户上。")]),t._v(" "),r("p",[t._v("退出后的验证人的权益与普通节点无异。")]),t._v(" "),t._m(17),t._v(" "),r("p",[t._v("作为一个DPOS区块链网络，QOS网络中的验证人节点需要绑定一定量的QOS来构成其权益。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),r("p",[t._v("每出一个新块时，验证人的权重决定了其分配挖矿收益的比例，如下：")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),r("p",[t._v("全节点通过发出create-validator交易来成为验证人，该交易需要提供以下参数：")]),t._v(" "),t._m(25),t._v(" "),r("p",[t._v("命令格式：")]),t._v(" "),t._m(26),t._m(27),t._v(" "),r("p",[t._v("活跃的验证人放弃验证人身份，转为非活跃状态，该交易需要提供参数：")]),t._v(" "),t._m(28),t._v(" "),r("p",[t._v("命令格式:")]),t._v(" "),t._m(29),t._m(30),t._v(" "),r("p",[t._v("非活跃状态的验证人恢复活跃状态，该交易需要提供参数：")]),t._v(" "),t._m(31),t._v(" "),t._m(32),r("blockquote",[r("p",[t._v("更多验证人操作详见"),r("router-link",{attrs:{to:"./../validator.html"}},[t._v("Validator命令行工具")])],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"qos验证人节点详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qos验证人节点详解","aria-hidden":"true"}},[this._v("#")]),this._v(" QOS验证人节点详解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("随着QOS版本迭代，本文档亦在更新中")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"qos验证人的权利"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qos验证人的权利","aria-hidden":"true"}},[this._v("#")]),this._v(" QOS验证人的权利")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("对交易进行验证")]),t._v(" "),r("li",[t._v("获得挖矿收益")]),t._v(" "),r("li",[t._v("通过制定代理合约受益（"),r("em",[t._v("待实现功能")]),t._v("）")]),t._v(" "),r("li",[t._v("获得交易费用（"),r("em",[t._v("待实现功能")]),t._v("）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"qos验证人的义务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qos验证人的义务","aria-hidden":"true"}},[this._v("#")]),this._v(" QOS验证人的义务")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("保证稳定在线")]),t._v(" "),r("li",[t._v("对交易进行验证")]),t._v(" "),r("li",[t._v("保证自己的私钥安全")]),t._v(" "),r("li",[t._v("参与社区治理（"),r("em",[t._v("待实现功能")]),t._v("）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"如何成为qos验证人"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何成为qos验证人","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何成为QOS验证人")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"硬件要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#硬件要求","aria-hidden":"true"}},[this._v("#")]),this._v(" 硬件要求")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("可以使用云服务器或独立机房，可持续不间断运行")]),this._v(" "),e("li",[this._v("带宽4M及以上，低延时公共网络")]),this._v(" "),e("li",[this._v("1核CPU，2G内存，50G硬盘存储空间")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"安装及配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装及配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装及配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"验证人的数量限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证人的数量限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 验证人的数量限制")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("在测试网中，$max_validator_cnt=10000，相当于无限制")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"验证人节点的几种状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证人节点的几种状态","aria-hidden":"true"}},[this._v("#")]),this._v(" 验证人节点的几种状态")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://github.com/QOSGroup/static/blob/master/validator_status.png?raw=true",alt:"验证人状态转换"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("活跃状态")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("非活跃状态")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("退出状态")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"验证人节点的权重（voting-power）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证人节点的权重（voting-power）","aria-hidden":"true"}},[this._v("#")]),this._v(" 验证人节点的权重（voting power）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("QOS目前规定验证人必须有一定的自绑定QOS来初始化运行验证人节点。创建后，其绑定的QOS可以来自于验证人所有者（owner）自己的账户，在createValidatorTX初始化时绑定，或者后期再绑定给自己（"),e("em",[this._v("后续版本")]),this._v("）；也可以通过发布和签订代理合约（delegation contract），来吸纳不具备代理人资格的节点的投资（"),e("em",[this._v("后续版本")]),this._v("）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("参与挖矿收益的分配")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://github.com/QOSGroup/static/blob/master/voting_power.png?raw=true",alt:"挖矿分配"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("社区自治的话语权")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("进行社区自治投票时，验证人的权重决定其决定的话语权比例。但普通节点也有社区自治的投票权，当验证人绑定的QOS来自普通节点的委托协议时，投资者的意志将覆盖验证人这部分权重("),e("em",[this._v("待实现功能")]),this._v(")。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"验证人交易类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证人交易类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 验证人交易类型")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"create-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-validator","aria-hidden":"true"}},[this._v("#")]),this._v(" create-validator")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("p",[t._v("name 验证人的名字，必须提供")])]),t._v(" "),r("li",[r("p",[t._v("owner 验证人节点所有者，对应keybase中的用户名")])]),t._v(" "),r("li",[r("p",[t._v("pubkey 验证人节点公钥(ed25519)，位于priv_validator.json文件中")])]),t._v(" "),r("li",[r("p",[t._v("tokens 初始化自绑定的Token数量")])]),t._v(" "),r("li",[r("p",[t._v("description 描述信息，可选")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("qoscli tx create-validator --name validatorName --owner ownerName --pubkey "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"VOn2rPx+t7Njdgi+eLb+jBuF175T1b7LAcHElsmIuXA="')]),this._v(" --tokens 100\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"revoke-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#revoke-validator","aria-hidden":"true"}},[this._v("#")]),this._v(" revoke-validator")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v('owner 验证人节点所有者，对应keybase中的用户名或者地址（以"address"开头）')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("qoscli tx revoke-validator --owner ownerName\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"active-validator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#active-validator","aria-hidden":"true"}},[this._v("#")]),this._v(" active-validator")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v('owner 验证人节点所有者，对应keybase中的用户名或者地址（以"address"开头）')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("qoscli tx revoke-validator --owner ownerName\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])}],!1,null,null,null);s.options.__file="all_about_validators.md";e.default=s.exports}}]);