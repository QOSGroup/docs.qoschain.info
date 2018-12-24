(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{185:function(s,e,n){"use strict";n.r(e);var a=n(0),t=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"networks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#networks","aria-hidden":"true"}},[s._v("#")]),s._v(" Networks")]),s._v(" "),n("h2",{attrs:{id:"single-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#single-node","aria-hidden":"true"}},[s._v("#")]),s._v(" Single-node")]),s._v(" "),n("ul",[n("li",[s._v("init")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('qosd init --chain-id=qos-test\n{\n  "chain_id": "qos-test",\n  "node_id": "1c3100c28a44f1facf45aa83e9aa3d8ff8ac6b1f",\n  "app_message": "null"\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("注意init 可添加--home flag指定配置文件地址，默认在$HOME/.qosd\n"),n("code",[s._v("init")]),s._v("操作后,通过执行"),n("code",[s._v("qosd add-genesis-validator")]),s._v("添加validator")]),s._v(" "),n("ul",[n("li",[s._v("add-genesis-accounts")])]),s._v(" "),n("p",[s._v("使用"),n("code",[s._v("qosd add-genesis-accounts")]),s._v("初始化account账户到配置文件中.")]),s._v(" "),n("blockquote",[n("p",[s._v("使用"),n("code",[s._v("qoscli keys add")]),s._v("创建account账户")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n$ qoscli keys add qosInitAcc\nEnter a passphrase for your key:\nRepeat the passphrase:\n\n$ qoscli keys list\n\nNAME:   TYPE:   ADDRESS:                                                PUBKEY:\nqosInitAcc      local   address1lly0audg7yem8jt77x2jc6wtrh7v96hgve8fh8  4MFA7MtUl1+Ak3WBtyKxGKvpcu4e5ky5TfAC26cN+mQ=\n\n# 初始化账户\n$ qosd add-genesis-accounts address1lly0audg7yem8jt77x2jc6wtrh7v96hgve8fh8,1000000qos\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("ul",[n("li",[s._v("config-root-ca")])]),s._v(" "),n("p",[s._v("使用"),n("code",[s._v("qosd config-root-ca")]),s._v("初始化root CA公钥到配置文件.")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Config root CA\n\nUsage:\n  qosd config-root-ca [root.pub] [flags]\n\nFlags:\n  -h, --help   help for config-root-ca\n\nGlobal Flags:\n      --home string        directory for config and data (default "/home/imuge/.qosd")\n      --log_level string   Log level (default "main:info,state:info,*:error")\n      --trace              print out full stack trace on errors\n      \n# 设置roort CA\n$ qosd config-root-ca root.pub\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("查看genesis.json内容，确认配置成功。")]),s._v(" "),n("ul",[n("li",[s._v("add-genesis-validator")])]),s._v(" "),n("p",[s._v("使用"),n("code",[s._v("qosd add-genesis-validator")]),s._v("初始化validator到配置文件中.")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n$ qosd add-genesis-validator -h\n\nAdd genesis validator to genesis.json\n\nUsage:\n  qosd add-genesis-validator [flags]\n\nFlags:\n      --consPubkey string   validator's ed25519 consPubkey\n  -h, --help                help for add-genesis-validator\n      --operator string     operator address\n      --power int           validator's voting power. default is 10 (default 10)\n\n# 使用上面的初始化账户地址作为operator\n$ qosd add-genesis-validator --operator address1lly0audg7yem8jt77x2jc6wtrh7v96hgve8fh8\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("ul",[n("li",[s._v("start")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ qosd start --with-tendermint\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果一切正常，会看到控制台输出打块信息")]),s._v(" "),n("h2",{attrs:{id:"cluster"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cluster","aria-hidden":"true"}},[s._v("#")]),s._v(" Cluster")]),s._v(" "),n("p",[s._v("四个Validator节点为例")]),s._v(" "),n("h3",{attrs:{id:"单台机器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单台机器","aria-hidden":"true"}},[s._v("#")]),s._v(" 单台机器")]),s._v(" "),n("ul",[n("li",[s._v("init")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ cd && mkdir node{1..4}\n$ for i in {1..4}; do qosd init --chain-id=qos-test --name=node${i} --home=$HOME/node${i}; done\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("添加创世账户")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ qoscli keys add qosgenesisacc\nEnter a passphrase for your key:\nRepeat the passphrase:\n\n$ qoscli keys  list\nNAME:\tTYPE:\tADDRESS:\t\t\t\t\t\tPUBKEY:\nqosgenesisacc\tlocal\taddress1rh47fd6ykkj0kpkukkt9pskgppfl30lpv9n9pu\tEnChknIClMgiwcqCKjIraYZdK4+wTaATAfp4GUNUIAo=\n\n\n$ for i in {1..4}; do qosd add-genesis-account --addr $(qoscli keys  list | grep qosgenesisacc | awk '{print $3}')  --coins 100000qos,1000000qstar --home=$HOME/node${i}; done\n\n//查看genesis.json配置\n$ cat $HOME/node1/config/genesis.json\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("ul",[n("li",[s._v("配置validators")])]),s._v(" "),n("p",[s._v("查看每个节点的validator 配置文件:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("//node1\n$ cat $HOME/node1/config/priv_validator.json\n\n//node2\n$ cat $HOME/node2/config/priv_validator.json\n\n//node3\n$ cat $HOME/node3/config/priv_validator.json\n\n//node4\n$ cat $HOME/node4/config/priv_validator.json\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("使用"),n("code",[s._v("qosd add-genesis-validator")]),s._v("命令将每个节点的"),n("code",[s._v("validator")]),s._v("添加至"),n("code",[s._v("genesis.json")]),s._v("配置文件中")]),s._v(" "),n("p",[n("strong",[s._v("添加"),n("code",[s._v("validator")]),s._v("需要指定操作者"),n("code",[s._v("operator")]),s._v(",可以通过"),n("code",[s._v("qoscli keys add")]),s._v("分别添加操作者"),n("code",[s._v("operator")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ qoscli keys add node1oper\n$ qoscli keys add node2oper\n$ qoscli keys add node3oper\n$ qoscli keys add node4oper\n$ qoscli keys list\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("以下示例中使用创世账户"),n("code",[s._v("qosgenesisacc")]),s._v("作为4个节点"),n("code",[s._v("validator")]),s._v("的"),n("code",[s._v("operator")]),s._v(",也可以为节点指定不同的"),n("code",[s._v("operator")]),s._v(":")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ export node1pk=$(sed -n '/PubKey/,/value/p' $HOME/node1/config/priv_validator.json|sed 1d|awk -F\\\" '{print $4}')\n\n$ export node2pk=$(sed -n '/PubKey/,/value/p' $HOME/node2/config/priv_validator.json|sed 1d|awk -F\\\" '{print $4}')\n\n$ export node3pk=$(sed -n '/PubKey/,/value/p' $HOME/node3/config/priv_validator.json|sed 1d|awk -F\\\" '{print $4}')\n\n$ export node4pk=$(sed -n '/PubKey/,/value/p' $HOME/node4/config/priv_validator.json|sed 1d|awk -F\\\" '{print $4}')\n\n$ export operator=$(qoscli keys  list | grep qosgenesisacc | awk '{print $3}')\n\n$ export node1id=$(qosd tendermint show-node-id --home=$HOME/node1)\n\n#node1执行\n\n$ for i in {1..4}; do qosd add-genesis-validator --home=$HOME/node1 --consPubkey $(eval echo '$'\"node\"${i}pk) --operator $operator --power 10;done\n\n#将node1/config/genesis.json分别拷贝至其他节点config目录下\n$ cp $HOME/node1/config/genesis.json $HOME/node2/config\n$ cp $HOME/node1/config/genesis.json $HOME/node3/config\n$ cp $HOME/node1/config/genesis.json $HOME/node4/config\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("ul",[n("li",[s._v("查看node1 node id")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ qosd tendermint show-node-id --home=$HOME/node1\n51bc172321ff3ea3e82f133d5116f0c11ac905d8\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("修改节点端口配置文件")])]),s._v(" "),n("p",[n("code",[s._v("config/config.toml")]),s._v("定义了节点启动时不同的监听端口. 如果节点在不同的机器上运行,则只需修改"),n("code",[s._v("persistent_peers")]),s._v("选项即可:")]),s._v(" "),n("p",[s._v("主要修改端口配置选项如下")]),s._v(" "),n("ul",[n("li",[s._v('moniker = ""')]),s._v(" "),n("li",[s._v('proxy_app = "tcp://127.0.0.1:26658"')]),s._v(" "),n("li",[s._v('prof_laddr = "localhost:6060"')]),s._v(" "),n("li",[s._v('[rpc] laddr = "tcp://0.0.0.0:26657"')]),s._v(" "),n("li",[s._v('[p2p] laddr = "tcp://0.0.0.0:26656"')]),s._v(" "),n("li",[s._v('[p2p] persistent_peers = ""')]),s._v(" "),n("li",[s._v('prometheus_listen_addr = ":26660"')])]),s._v(" "),n("p",[s._v("node1配置如下:")]),s._v(" "),n("ul",[n("li",[s._v('moniker = "node1"')]),s._v(" "),n("li",[s._v('proxy_app = "tcp://127.0.0.1:16658"')]),s._v(" "),n("li",[s._v('prof_laddr = "localhost:6061"')]),s._v(" "),n("li",[s._v('[rpc] laddr = "tcp://0.0.0.0:16657"')]),s._v(" "),n("li",[s._v('[p2p] laddr = "tcp://0.0.0.0:16656"')]),s._v(" "),n("li",[s._v('[p2p] persistent_peers = ""')]),s._v(" "),n("li",[s._v('prometheus_listen_addr = ":16660"')])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sed -i -e s#' *moniker.*'#'moniker = \"node1\"'#g   \\\n         -e s#' *proxy_app.*'#'proxy_app = \"tcp://127.0.0.1:16658\"'#g \\\n         -e s#' *prof_laddr.*'#'prof_laddr = \"localhost:6061\"'#g  \\\n         -e '/rpc/,/p2p/s#^ *laddr = .*$#laddr = \"tcp://0.0.0.0:16657\"#g'  \\\n         -e '/p2p/,/laddr/s#^ *laddr = .*$#laddr = \"tcp://0.0.0.0:16656\"#g' \\\n         -e s#' *prometheus_listen_addr.*'#'prometheus_listen_addr = \":16660\"'#g \\\n         $HOME/node1/config/config.toml\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("node2配置如下:")]),s._v(" "),n("ul",[n("li",[s._v('moniker = "node2"')]),s._v(" "),n("li",[s._v('proxy_app = "tcp://127.0.0.1:26658"')]),s._v(" "),n("li",[s._v('prof_laddr = "localhost:6062"')]),s._v(" "),n("li",[s._v('[rpc] laddr = "tcp://0.0.0.0:26657"')]),s._v(" "),n("li",[s._v('[p2p] laddr = "tcp://0.0.0.0:26656"')]),s._v(" "),n("li",[s._v('[p2p] persistent_peers = ""')]),s._v(" "),n("li",[s._v('prometheus_listen_addr = ":26660"')])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n\n$ sed -i -e s#' *moniker.*'#'moniker = \"node2\"'#g   \\\n         -e s#' *proxy_app.*'#'proxy_app = \"tcp://127.0.0.1:26658\"'#g \\\n         -e s#' *prof_laddr.*'#'prof_laddr = \"localhost:6062\"'#g  \\\n         -e '/rpc/,/p2p/s#^ *laddr = .*$#laddr = \"tcp://0.0.0.0:26657\"#g'  \\\n         -e '/p2p/,/laddr/s#^ *laddr = .*$#laddr = \"tcp://0.0.0.0:26656\"#g' \\\n         -e /p2p/,/upnp/s#' *persistent_peers = .*'#\"persistent_peers = \\\"${node1id}@127.0.0.1:16656\\\"\"#g \\\n         -e s#' *prometheus_listen_addr.*'#'prometheus_listen_addr = \":26660\"'#g \\\n         $HOME/node2/config/config.toml\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("node3配置如下:")]),s._v(" "),n("ul",[n("li",[s._v('moniker = "node3"')]),s._v(" "),n("li",[s._v('proxy_app = "tcp://127.0.0.1:36658"')]),s._v(" "),n("li",[s._v('prof_laddr = "localhost:6063"')]),s._v(" "),n("li",[s._v('[rpc] laddr = "tcp://0.0.0.0:36657"')]),s._v(" "),n("li",[s._v('[p2p] laddr = "tcp://0.0.0.0:36656"')]),s._v(" "),n("li",[s._v('[p2p] persistent_peers = ""')]),s._v(" "),n("li",[s._v('prometheus_listen_addr = ":36660"')])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sed -i -e s#' *moniker.*'#'moniker = \"node3\"'#g   \\\n         -e s#' *proxy_app.*'#'proxy_app = \"tcp://127.0.0.1:36658\"'#g \\\n         -e s#' *prof_laddr.*'#'prof_laddr = \"localhost:6063\"'#g  \\\n         -e '/rpc/,/p2p/s#^ *laddr = .*$#laddr = \"tcp://0.0.0.0:36657\"#g'  \\\n         -e '/p2p/,/laddr/s#^ *laddr = .*$#laddr = \"tcp://0.0.0.0:36656\"#g' \\\n         -e /p2p/,/upnp/s#' *persistent_peers = .*'#\"persistent_peers = \\\"${node1id}@127.0.0.1:16656\\\"\"#g \\\n         -e s#' *prometheus_listen_addr.*'#'prometheus_listen_addr = \":36660\"'#g \\\n         $HOME/node3/config/config.toml\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("node4配置如下:")]),s._v(" "),n("ul",[n("li",[s._v('moniker = "node4"')]),s._v(" "),n("li",[s._v('proxy_app = "tcp://127.0.0.1:46658"')]),s._v(" "),n("li",[s._v('prof_laddr = "localhost:6064"')]),s._v(" "),n("li",[s._v('[rpc] laddr = "tcp://0.0.0.0:46657"')]),s._v(" "),n("li",[s._v('[p2p] laddr = "tcp://0.0.0.0:46656"')]),s._v(" "),n("li",[s._v('[p2p] persistent_peers = ""')]),s._v(" "),n("li",[s._v('prometheus_listen_addr = ":46660"')])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ sed -i -e s#' *moniker.*'#'moniker = \"node4\"'#g   \\\n         -e s#' *proxy_app.*'#'proxy_app = \"tcp://127.0.0.1:46658\"'#g \\\n         -e s#' *prof_laddr.*'#'prof_laddr = \"localhost:6064\"'#g  \\\n         -e '/rpc/,/p2p/s#^ *laddr = .*$#laddr = \"tcp://0.0.0.0:46657\"#g'  \\\n         -e '/p2p/,/laddr/s#^ *laddr = .*$#laddr = \"tcp://0.0.0.0:46656\"#g' \\\n         -e /p2p/,/upnp/s#' *persistent_peers = .*'#\"persistent_peers = \\\"${node1id}@127.0.0.1:16656\\\"\"#g \\\n         -e s#' *prometheus_listen_addr.*'#'prometheus_listen_addr = \":46660\"'#g \\\n         $HOME/node4/config/config.toml\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("start")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ qosd start --with-tendermint --home=$HOME/node1\n$ qosd start --with-tendermint --home=$HOME/node2\n$ qosd start --with-tendermint --home=$HOME/node3\n$ qosd start --with-tendermint --home=$HOME/node4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"四台机器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四台机器","aria-hidden":"true"}},[s._v("#")]),s._v(" 四台机器")]),s._v(" "),n("p",[s._v("第一台node1 IP为ip1")]),s._v(" "),n("ul",[n("li",[s._v("init")])]),s._v(" "),n("p",[s._v("四台机器分别执行 init 命令,chain-id保持一致, name不同")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ qosd init --chain-id=qos-test --name=node1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在node1上执行:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ qoscli keys add genAcc\n\n$ qoscli keys list\nNAME:\tTYPE:\tADDRESS:\t\t\t\t\t\tPUBKEY:\ngenAcc\tlocal\taddress17k688l8afk4t42dr4z5ay0cpke39we7kxm9pzk\tc5UuUZ/REvHExIY/eDcQvdjxiapE+aVSd37DulaxwBU=\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("在node1配置文件"),n("code",[s._v("genesis.json")]),s._v("中添加初始账户:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ qosd add-genesis-account --addr $(qoscli keys  list | grep genAcc | awk '{print $3}')  --coins 100000qos,1000000qstar\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在node1配置文件"),n("code",[s._v("genesis.json")]),s._v("中添加node1节点为validator:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ qosd add-genesis-validator --operator $(qoscli keys  list | grep genAcc | awk '{print $3}')\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在node1配置文件"),n("code",[s._v("genesis.json")]),s._v("中分别添加其他节点为validator:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ qosd add-genesis-validator --consPubkey $NODES_VALIDATOR_PUBKEY --operator $(qoscli keys  list | grep genAcc | awk '{print $3}')\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("将node1中"),n("code",[s._v("genesis.json")]),s._v("文件拷贝至其他节点的$HOME/.qosd/config目录下")])]),s._v(" "),n("li",[n("p",[s._v("查看node1 node id"),n("br"),s._v("\n在node1上运行：")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ qosd tendermint show-node-id\nb70c6ce13a11e14ee14bc793cbef835aa1b4b6bb\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("修改node2配置")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('$ cd $HOME/.qosd/config\n$ vi config.toml\n\n# Comma separated list of nodes to keep persistent connections to\npersistent_peers = "b70c6ce13a11e14ee14bc793cbef835aa1b4b6bb@ip1:26656"\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[s._v("修改node3配置")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('$ cd $HOME/.qosd/config\n$ vi config.toml\n\n# Comma separated list of nodes to keep persistent connections to\npersistent_peers = "b70c6ce13a11e14ee14bc793cbef835aa1b4b6bb@ip1:26656"\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[s._v("修改node4配置")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('$ cd $HOME/.qosd/config\n$ vi config.toml\n\n# Comma separated list of nodes to keep persistent connections to\npersistent_peers = "b70c6ce13a11e14ee14bc793cbef835aa1b4b6bb@ip1:26656"\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[s._v("start"),n("br"),s._v("\n四台机器上分别执行")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ qosd start --with-tendermint\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"testnet-cmd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#testnet-cmd","aria-hidden":"true"}},[s._v("#")]),s._v(" testnet cmd")]),s._v(" "),n("p",[s._v("qosd testnet命令行工具，可批量生成集群配置文件，相关命令参考：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('$ qosd testnet --help\ntestnet will create "v" + "n" number of directories and populate each with\nnecessary files (private validator, genesis, config, etc.).\n\nNote, strict routability for addresses is turned off in the config file.\n\nOptionally, it will fill in persistent_peers list in config file using either hostnames or IPs.\n\nExample:\n\n\tqosd testnet --chain-id=qostest --v=4 --o=./output --starting-ip-address=192.168.1.2 --genesis-accounts=address16lwp3kykkjdc2gdknpjy6u9uhfpa9q4vj78ytd,1000000qos,1000000qstars\n\nUsage:\n  qosd testnet [flags]\n\nFlags:\n      --chain-id string              Chain ID\n      --genesis-accounts string      Add genesis accounts to genesis.json, eg: address16lwp3kykkjdc2gdknpjy6u9uhfpa9q4vj78ytd,1000000qos,1000000qstars. Multiple accounts separated by \';\'\n  -h, --help                         help for testnet\n      --hostname-prefix string       Hostname prefix (node results in persistent peers list ID0@node0:26656, ID1@node1:26656, ...) (default "node")\n      --moniker string               Moniker\n      --n int                        Number of non-validators to initialize the testnet with\n      --node-dir-prefix string       Prefix the directory name for each node with (node results in node0, node1, ...) (default "node")\n      --o string                     Directory to store initialization data for the testnet (default "./mytestnet")\n      --p2p-port int                 P2P Port (default 26656)\n      --populate-persistent-peers    Update config of each node with the list of persistent peers build using either hostname-prefix or starting-ip-address (default true)\n      --root-ca string               Config root CA\n      --starting-ip-address string   Starting IP address (192.168.0.1 results in persistent peers list ID0@192.168.0.1:26656, ID1@192.168.0.2:26656, ...)\n      --v int                        Number of validators to initialize the testnet with (default 4)\n\nGlobal Flags:\n      --home string        directory for config and data (default "/home/imuge/.qosd")\n      --log_level string   Log level (default "main:info,state:info,*:error")\n      --trace              print out full stack trace on errors\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("p",[s._v("app_state下validators列表中的operator与其cons_pubkey对应")])])}],!1,null,null,null);t.options.__file="networks.md";e.default=t.exports}}]);