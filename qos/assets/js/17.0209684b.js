(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{168:function(s,e,a){"use strict";a.r(e);var r=a(0),t=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"预授权设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预授权设计","aria-hidden":"true"}},[s._v("#")]),s._v(" 预授权设计")]),s._v(" "),a("p",[s._v("授权、使用授权、增加授权、减少授权、取消授权，暂未涉及Gas逻辑")]),s._v(" "),a("h2",{attrs:{id:"struct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#struct","aria-hidden":"true"}},[s._v("#")]),s._v(" Struct")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 授权、增加授权、减少授权、使用授权\ntype Approve struct {\n    From    btypes.Address `json:"from"` // 授权账号，不能为空\n    To      btypes.Address `json:"to"`   // 被授权账号，不能为空\n    Qos     btypes.BigInt  `json:"qos"`  // qos\n    QscList []*QSC         `json:"qsc"`  // qscs，币种不能重复，不能为"qos"（大小写敏感）\n}\n\n// 取消授权 Tx\ntype TxCancelApprove struct {\n\tFrom btypes.Address `json:"from"` // 授权账号\n\tTo   btypes.Address `json:"to"`   // 被授权账号\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store","aria-hidden":"true"}},[s._v("#")]),s._v(" Store")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('approveStoreKey = "approve"             // store\napproveKey      = "from:[%s]/to:[%s]"   // key\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("读写使用ApproveMapper")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("type ApproveMapper struct {\n\t*mapper.BaseMapper      // qbase BaseMapper封装 \n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("提供获取授权（GetApprove）、保存授权（SaveApprove）、删除授权（DeleteApprove）方法")]),s._v(" "),a("h2",{attrs:{id:"create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create","aria-hidden":"true"}},[s._v("#")]),s._v(" Create")]),s._v(" "),a("p",[s._v("From账户向To账户预授权一定量的QOS和QSCs，预授权创建成功并非转账成功，仅仅是记录，不改变账户状态。所以From/To账户在链上均可不存在，From拥有资产总量可以小于授权资产总量。假设From仅有1QOS，可授权To2QOS。")]),s._v(" "),a("ul",[a("li",[s._v("valid")])]),s._v(" "),a("ol",[a("li",[s._v("QOS、QSCs中币种不能重复、币值必须为正")]),s._v(" "),a("li",[s._v("创建前链上不存在From对To的预授权，若存在请执行approve的其他操作。")])]),s._v(" "),a("ul",[a("li",[s._v("signer")])]),s._v(" "),a("p",[s._v("From账户")]),s._v(" "),a("h2",{attrs:{id:"increase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#increase","aria-hidden":"true"}},[s._v("#")]),s._v(" Increase")]),s._v(" "),a("p",[s._v("From账户向To账户增加授权一定量的QOS和QSCs，在已存在预授权基础上增加预授权资产。假设From已对To授权1QOS，增加授权1QOS，完成后From对To的预授权为2QOS。")]),s._v(" "),a("ul",[a("li",[s._v("valid")])]),s._v(" "),a("ol",[a("li",[s._v("QOS、QSCs中币种不能重复、币值必须为正")]),s._v(" "),a("li",[s._v("链上存在From对To的预授权，若不存在请执行create操作。")])]),s._v(" "),a("ul",[a("li",[s._v("signer")])]),s._v(" "),a("p",[s._v("From账户")]),s._v(" "),a("h2",{attrs:{id:"decrease"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decrease","aria-hidden":"true"}},[s._v("#")]),s._v(" Decrease")]),s._v(" "),a("p",[s._v("From账户向To账户减少授权一定量的QOS和QSCs，在已存在预授权基础上减少预授权资产。假设From已对To授权2QOS，减少授权1QOS，完成后From对To的预授权为1QOS。")]),s._v(" "),a("ul",[a("li",[s._v("valid")])]),s._v(" "),a("ol",[a("li",[s._v("QOS、QSCs中币种不能重复、币值必须为正")]),s._v(" "),a("li",[s._v("链上存在From对To的预授权，若不存在请执行create操作。")]),s._v(" "),a("li",[s._v("QOS、QSCs总量不能大于已授权币值总量")])]),s._v(" "),a("ul",[a("li",[s._v("signer")])]),s._v(" "),a("p",[s._v("From账户")]),s._v(" "),a("h2",{attrs:{id:"use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[s._v("#")]),s._v(" Use")]),s._v(" "),a("p",[s._v("To账户使用From账户预授权的QOS和QSCs。假设From已授权To 2QOS，执行use 1QOS后，From向To授权变成 1QOS，From账户向To账户转账1QOS。")]),s._v(" "),a("ul",[a("li",[s._v("valid")])]),s._v(" "),a("ol",[a("li",[s._v("QOS，QSCs中币种不能重复、币值必须为正")]),s._v(" "),a("li",[s._v("链上不存在From对To的预授权，若存在请执行approve的其他操作。")]),s._v(" "),a("li",[s._v("QOS、QSCs总量不能大于已授权币值总量")]),s._v(" "),a("li",[s._v("From账户必须存在")]),s._v(" "),a("li",[s._v("QOS、QSCs总量不能大于From账户币值总量")])]),s._v(" "),a("ul",[a("li",[s._v("signer")])]),s._v(" "),a("p",[s._v("To账户")]),s._v(" "),a("h2",{attrs:{id:"cancel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancel","aria-hidden":"true"}},[s._v("#")]),s._v(" Cancel")]),s._v(" "),a("p",[s._v("From账户取消对To账户的预授权信息。假设From已授权To 2QOS，执行cancel后，将删除From对To的预授权信息，已使用的授权币种、币值不变。")]),s._v(" "),a("ul",[a("li",[s._v("valid")])]),s._v(" "),a("ol",[a("li",[s._v("链上不存在From对To的预授权。")])]),s._v(" "),a("ul",[a("li",[s._v("signer")])]),s._v(" "),a("p",[s._v("From账户")])])}],!1,null,null,null);t.options.__file="approve.md";e.default=t.exports}}]);