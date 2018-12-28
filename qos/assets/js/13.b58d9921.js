(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{168:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("p",[s._v("在启动完整节点前，请确保已按照安装"),a("router-link",{attrs:{to:"./installation.html"}},[s._v("安装引导")]),s._v("正确安装QOS。")],1),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),a("p",[s._v("不同QOS运行网络对应不同的配置，可访问"),a("a",{attrs:{href:"https://github.com/QOSGroup/qos-testnets",target:"_blank",rel:"noopener noreferrer"}},[s._v("testnets repo"),a("OutboundLink")],1),s._v("了解不同网络的运行配置。\n下面操作以测试网"),a("code",[s._v("capricorn-1000")]),s._v("为例。")]),s._v(" "),s._m(7),s._v(" "),a("p",[s._v("下载"),a("code",[s._v("capricorn-1000")]),s._v("对应"),a("a",{attrs:{href:"https://raw.githubusercontent.com/QOSGroup/qos-testnets/master/capricorn-1000/genesis.json",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("genesis.json")]),s._v("文件"),a("OutboundLink")],1),s._v("替换本地文件。\n若没有更改默认存储位置，也可通过下面的命令执行替换操作：")]),s._v(" "),s._m(8),s._m(9),s._v(" "),a("p",[s._v("如果没有更改默认存储路径，可执行下面指令修改config.toml文件，添加seed节点。")]),s._v(" "),s._m(10),s._m(11),s._m(12),s._v(" "),a("p",[s._v("运行启动命令：")]),s._v(" "),s._m(13),s._m(14),s._v(" "),s._m(15),a("p",[s._v("可运行下面命令检查节点运行状态：")]),s._v(" "),s._m(16),a("p",[s._v("如果看到"),a("code",[s._v("catching_up")]),s._v("为"),a("code",[s._v("false")]),s._v("，说明节点已经同步完成，否则还在同步区块。\n同步完成后，可参照"),a("router-link",{attrs:{to:"./validator.html"}},[s._v("成为验证节点")]),s._v("引导成为对应网络验证节点。")],1)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"启动完整节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动完整节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动完整节点")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("适用"),t("code",[this._v("qosd init")]),this._v("命令初始化节点、创建必要的配置文件。\n默认的配置和数据存储目录为 "),t("code",[this._v("$HOME/.qosd")]),this._v("，您可以添加"),t("code",[this._v("--home")]),this._v("修改存储位置。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ qosd init --name "),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("your_custom_moniker"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),t("p",[t("code",[this._v("name")]),this._v("仅支持ASCII字符，使用Unicode字符将使您的节点无法访问")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("执行完"),a("code",[s._v("qosd init")]),s._v("会在"),a("code",[s._v("$HOME/.qosd/config")]),s._v("下生成"),a("code",[s._v("genesis.json")]),s._v("、"),a("code",[s._v("config.toml")]),s._v("等配置文件。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"配置运行网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置运行网络","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置运行网络")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"替换genesis-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#替换genesis-json","aria-hidden":"true"}},[this._v("#")]),this._v(" 替换"),t("code",[this._v("genesis.json")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://raw.githubusercontent.com/QOSGroup/qos-testnets/master/capricorn-1000/genesis.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")]),s._v("/.qosd/config/genesis.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"编辑config-toml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑config-toml","aria-hidden":"true"}},[this._v("#")]),this._v(" 编辑"),t("code",[this._v("config.toml")]),this._v(":")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("vi")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$HOME")]),this._v("/.qosd/config.toml\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('# Comma separated list of seed nodes to connect to\nseeds = "5d9fcba29ce9a066cdd6e4c45001567a4bd1dbf4@47.100.231.9:26656"\n')])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ qosd start --with-tendermint\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("控制台开始打印启动日志，提示"),t("code",[this._v("This node is not a validator")]),this._v("说明节点不是验证节点，节点开始同步QOS网络区块信息。\nYou can see the node is running, your node is not a validator, and your node is synchronizing blocks from the QOS testnet.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Starting ABCI with Tendermint                module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("main \nStarting multiAppConn                        module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("proxy impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multiAppConn\nStarting localClient                         module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("abci-client connection"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("query impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localClient\nStarting localClient                         module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("abci-client connection"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mempool impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localClient\nStarting localClient                         module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("abci-client connection"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("consensus impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localClient\nABCI Handshake                               module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("consensus appHeight"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 appHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\nABCI Replay Blocks                           module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("consensus appHeight"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 storeHeight"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 stateHeight"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0\nupdate Validators                            module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("main len"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("4\nCompleted ABCI Handshake - Tendermint and App are synced module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("consensus appHeight"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 appHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\nThis node is not a validator                 module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("consensus addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("666A495A6B05C975B241880785665417B5CEA2A6 pubKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PubKeyEd25519"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("36BA673E7CC36F09C353720441C439A96E81B54689BAC219F0D24C52C3D23E65"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nStarting Node                                module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("node impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Node\nStarting EventBus                            module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("events impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("EventBus\nLocal listener                               module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0.0.0.0 port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("26656\nStarting DefaultListener                     module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Listener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("@172.31.230.212:26656"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nP2P Node ID                                  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("node ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("db49a8d5a902910e0f8aee19e1b4889d6a235a91 file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/.qosd/config/node_key.json\nAdd our address to book                      module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p book"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/.qosd/config/addrbook.json addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("db49a8d5a902910e0f8aee19e1b4889d6a235a91@172.31.230.212:26656\nStarting RPC HTTP server on tcp://0.0.0.0:26657 module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rpc-server \nStarting P2P Switch                          module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"P2P Switch"')]),s._v("\nStarting EvidenceReactor                     module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("evidence impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("EvidenceReactor\nStarting PEXReactor                          module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PEXReactor\nStarting AddrBook                            module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p book"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/.qosd/config/addrbook.json impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("AddrBook\nStarting MempoolReactor                      module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mempool impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MempoolReactor\nStarting BlockchainReactor                   module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("blockchain impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("BlockchainReactor\nStarting BlockPool                           module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("blockchain impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("BlockPool\nStarting ConsensusReactor                    module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("consensus impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ConsensusReactor\nConsensusReactor                             module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("consensus fastSync"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\nSaving AddrBook to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("                      module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p book"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/.qosd/config/addrbook.json size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\nStarting IndexerService                      module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("txindex impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("IndexerService\nEnsure peers                                 module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p numOutPeers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 numInPeers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 numDialing"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 numToDial"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("10\nWill dial address                            module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("5d9fcba29ce9a066cdd6e4c45001567a4bd1dbf4@47.100.231.9:26656\nDialing peer                                 module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("5d9fcba29ce9a066cdd6e4c45001567a4bd1dbf4@47.100.231.9:26656\nSuccessful handshake with peer               module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p peer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("47.100.231.9:26656 peerNodeInfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NodeInfo{id: 5d9fcba29ce9a066cdd6e4c45001567a4bd1dbf4, moniker: qos0, network: capricorn-1000 [listen 172.19.222.64:26656], version: 0.23.1 ([amino_version=0.12.0 p2p_version=0.5.0 consensus_version=v1/0.2.2 rpc_version=0.7.0/3 tx_index=on rpc_addr=tcp://0.0.0.0:26657])}"')]),s._v("\nStarting Peer                                module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p peer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("47.100.231.9:26656 impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Peer{MConn{47.100.231.9:26656} 5d9fcba29ce9a066cdd6e4c45001567a4bd1dbf4 out}"')]),s._v("\nStarting MConnection                         module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p peer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("47.100.231.9:26656 impl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MConn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("47.100.231.9:26656"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nAdded peer                                   module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p peer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Peer{MConn{47.100.231.9:26656} 5d9fcba29ce9a066cdd6e4c45001567a4bd1dbf4 out}"')]),s._v("\nDialing peer                                 module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2p address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("5d9fcba29ce9a066cdd6e4c45001567a4bd1dbf4@47.100.231.9:26656\nupdate Validators                            module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("main len"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0\nExecuted block                               module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("state height"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1 validTxs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 invalidTxs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0\nCommitted state                              module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("state height"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1 txs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 appHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("E5C9EABCC5C3ACB7EA6D8ED4D17B997BFCDD6F4F\nRecheck txs                                  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mempool numtxs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 height"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\nIndexed block                                module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("txindex height"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1\nmint reward                                  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("main predict"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("8085999 actual"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("8085999\nvalidatorVoteInfo                            module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("main height"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2 address1nfsgxj0l4gtgje0ydmjg6harsfvmduxtq8fdwa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not vote"')]),s._v("\nupdate Validators                            module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("main len"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0\nExecuted block                               module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("state height"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2 validTxs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 invalidTxs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0\nCommitted state                              module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("state height"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2 txs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 appHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("F70CB6559B9DA8015A63547696DC011032B7161F\nRecheck txs                                  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mempool numtxs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0 height"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2\nIndexed block                                module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("txindex height"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2\nmint reward                                  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("main predict"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("8085999 actual"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("8085999\nvalidatorVoteInfo                            module"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("main height"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("3 address1nfsgxj0l4gtgje0ydmjg6harsfvmduxtq8fdwa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not vote"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ qoscli tendermint status\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])}],!1,null,null,null);r.options.__file="fullnode.md";t.default=r.exports}}]);