(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{607:function(s,a,t){s.exports=t.p+"assets/img/image-20210405123709832.adb9bc75.png"},608:function(s,a,t){s.exports=t.p+"assets/img/image-20210405124325282.78bb1731.png"},609:function(s,a,t){s.exports=t.p+"assets/img/image-20210405130932112.a6e92d16.png"},610:function(s,a,t){s.exports=t.p+"assets/img/image-20210405131336983.78efa15f.png"},611:function(s,a,t){s.exports=t.p+"assets/img/image-20210405133509463.53a495b9.png"},612:function(s,a,t){s.exports=t.p+"assets/img/image-20210405134337260.371a7b42.png"},613:function(s,a,t){s.exports=t.p+"assets/img/image-20210405140050432.d647a3c8.png"},744:function(s,a,t){"use strict";t.r(a);var n=t(13),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"dns-域名解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dns-域名解析"}},[s._v("#")]),s._v(" DNS 域名解析")]),s._v(" "),n("p",[n("img",{attrs:{src:t(607),alt:"image-20210405123709832"}})]),s._v(" "),n("p",[s._v("这里简单说使用域名绑定 IP，那么可以通过访问域名，DNS 拿到 IP 后访问到我们的服务，IP 有可能会变动，那么更改 IP 后，DNS 也会解析到最新的 IP，这就很方便了")]),s._v(" "),n("p",[s._v("这个在 HTTP 协议中有介绍，访问之前会先通过 DNS 拿到对应的 IP 地址，再通过 TCP/IP 协议与目标 IP 地址建立连接")]),s._v(" "),n("p",[s._v("对于我们的服务集群，来看看示意图")]),s._v(" "),n("p",[n("img",{attrs:{src:t(608),alt:"image-20210405124325282"}})]),s._v(" "),n("p",[s._v("域名绑定的是一个公网 IP，代理服务器与目标服务器是在同一个局域网内，通过内网 IP 通信")]),s._v(" "),n("h2",{attrs:{id:"使用-switchhosts-模拟域名解析访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-switchhosts-模拟域名解析访问"}},[s._v("#")]),s._v(" 使用 SwitchHosts 模拟域名解析访问")]),s._v(" "),n("p",[s._v("可以通过 hosts 文件进行域名和 IP 的映射，像笔者这里是 mac 系统，前面章节为了解决跨域的问题，自己配置了几个域名，还有操作系统自己默认的 localhost 域名映射等信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("127.0.0.1       localhost\n255.255.255.255 broadcasthost\n::1             localhost\n127.0.0.1 kubernetes.docker.internal\n\n192.168.56.105 shop.shop.cn\n192.168.56.107 api.shop.cn\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("上面修改文件的反射是手动的，还有一种更好的方式来达到效果，就是使用一些工具来做这件事情")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://oldj.github.io/SwitchHosts/#cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("SwitchHosts"),n("OutboundLink")],1),s._v(" 是一个管理 hosts 文件的应用，安装后就可以进行添加，然后按需开启")]),s._v(" "),n("p",[n("img",{attrs:{src:t(609),alt:"image-20210405130932112"}})]),s._v(" "),n("p",[s._v("系统默认的会一直开启，不能关闭，其他新建的可以按需开启或关闭")]),s._v(" "),n("h2",{attrs:{id:"使用-nginx-解决跨域问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-nginx-解决跨域问题"}},[s._v("#")]),s._v(" 使用 Nginx 解决跨域问题")]),s._v(" "),n("p",[s._v("既然涉及到域名了，就会出现跨域问题，如下图所示")]),s._v(" "),n("p",[n("img",{attrs:{src:t(610),alt:"image-20210405131336983"}})]),s._v(" "),n("p",[s._v("域名不同，使用 ajax 访问则会出现跨域错误")]),s._v(" "),n("h3",{attrs:{id:"cors-跨域资源共享"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cors-跨域资源共享"}},[s._v("#")]),s._v(" CORS 跨域资源共享")]),s._v(" "),n("p",[s._v("全称是 Cross-Origin Resource Sharing，允许浏览器向跨 Origin 的服务器发起 js 请求获取响应")]),s._v(" "),n("p",[s._v("可以使用：如下几种方式解决：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Jsonp：这种方式需要前服务端做特殊的处理")])]),s._v(" "),n("li",[n("p",[s._v("SpringBoot Cors")]),s._v(" "),n("p",[s._v("前面章节已经配置过，但是由于当时笔者对 boot jar 包部署方式改成 war 包部署方式，使用起来不方便，后来想到用 hosts 模拟域名方式也没有测试通过跨域是可以的，正常情况下是可以解决的")])]),s._v(" "),n("li",[n("p",[s._v("Nginx：反向代理")])])]),s._v(" "),n("h3",{attrs:{id:"模拟跨域环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模拟跨域环境搭建"}},[s._v("#")]),s._v(" 模拟跨域环境搭建")]),s._v(" "),n("div",{staticClass:"language-lua line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-lua"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" 前面配置过的，访问图片\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("server")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("92")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("images")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       root   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foodie"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("shop"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" 这里使用一个测试页面，去访问 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("92")]),s._v(" 端口的图片地址\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("server")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("93")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("demo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("html")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       root   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("software"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("demo.html 如下")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token doctype"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<!")]),n("span",{pre:!0,attrs:{class:"token doctype-tag"}},[s._v("DOCTYPE")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token name"}},[s._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("html")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("en"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("meta")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("charset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("UTF-8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Title"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//步骤一:创建异步对象")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" ajax "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("XMLHttpRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端")]),s._v("\n  ajax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'get'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://shop.cn:92/images/header-bg1.jpg'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//步骤三:发送请求")]),s._v("\n  ajax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//步骤四:注册事件 onreadystatechange 状态改变就会调用")]),s._v("\n  ajax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onreadystatechange")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ajax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("readyState "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ajax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的　　　　")]),s._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ajax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("responseText"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输入相应的内容")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("p",[s._v("让后访问 "),n("code",[s._v("http://shop.cn:93/demo.html")]),s._v(" 会发现跨域错误")]),s._v(" "),n("p",[n("img",{attrs:{src:t(611),alt:"image-20210405133509463"}})]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("demo.html 也可以不用单独放到 nginx 上，直接在本地文件打开也是一样的效果，因为 localhost 与 sho.cn 不是同一个源")]),s._v(" "),n("p",[s._v("笔者这里放到同一个 nginx 上，但是设置了不同的端口，他们也是不同源的")])]),s._v(" "),n("h3",{attrs:{id:"nginx-配置-cors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置-cors"}},[s._v("#")]),s._v(" Nginx 配置 CORS")]),s._v(" "),n("p",[s._v("我们只要在需要访问的图片虚拟机上添加配置即可")]),s._v(" "),n("div",{staticClass:"language-lua line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-lua"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("server")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("92")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" 允许跨域请求的域， "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" 代表所有\n   add_header "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Origin'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" 允许带上 cookie 请求\n   add_header "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Credentials'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" 允许请求的方法，如 GET"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("POST\n   add_header "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Methods'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v(" 允许请求的 header\n   add_header "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Access-Control-Allow-Headers'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   \n   location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("images")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       root   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foodie"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("shop"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("上述配置和 SpringBoot 中配置的 Cors 类似，只要给该资源添加上这些头，浏览器就会允许读取资源")]),s._v(" "),n("p",[n("img",{attrs:{src:t(612),alt:"image-20210405134337260"}})]),s._v(" "),n("h2",{attrs:{id:"nginx-配置静态资源防盗链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置静态资源防盗链"}},[s._v("#")]),s._v(" Nginx 配置静态资源防盗链")]),s._v(" "),n("p",[s._v("通过 ajax 有跨域的限制，但是图片等资源，跨域通过标签直接引用，就不存在跨域问题了，比如在 demo.html 中增加 img 标签")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://shop.cn:92/images/header-bg1.jpg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在你本地打开也是能看到该图片的，设置防盗链")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n   listen       92;\n   server_name  localhost;\n\n   # 允许跨域请求的域， * 代表所有\n   add_header 'Access-Control-Allow-Origin' *;\n   # 允许带上 cookie 请求\n   add_header 'Access-Control-Allow-Credentials' 'true';\n   # 允许请求的方法，如 GET/POST\n   add_header 'Access-Control-Allow-Methods' *;\n   # 允许请求的 header\n   add_header 'Access-Control-Allow-Headers' *;\n\n   # =========  静态资源防盗链配置\n   # 对源站点验证\n   valid_referers    *.shop.cn;\n   # 非法引入会进入下方判断，响应 404\n   # 该变量是 nginx 的内置变量\n   if ($invalid_referer) {\n   \treturn 404;\n   }\n   \n   location ^~ /images {\n       root   /home/foodie-shop/;\n   }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("这样配置之后，通过 ajax 和 img 标签访问都不能访问了，通过 img 标签访问的会响应 404 状态码，通过 ajax 访问的会显示跨域")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("因为防盗链校验的是这个地址")]),s._v(" "),n("p",[n("img",{attrs:{src:t(613),alt:"image-20210405140050432"}})]),s._v(" "),n("p",[s._v("因此如果在 "),n("code",[s._v("http://shop.cn:93/demo.html")]),s._v(" 上测试的话，因为至少端口不一样，但是域名是一样的，按道理来说是可以访问的，但是这里的配置是 "),n("code",[s._v("valid_referers *.shop.cn;")])]),s._v(" "),n("p",[s._v("域名对应不上，这里要改成 "),n("code",[s._v("valid_referers shop.cn;")]),s._v(" 就可以访问到了")])])])}),[],!1,null,null,null);a.default=e.exports}}]);