webpackJsonp([4],{OBjC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("pXfq");var i={name:"tinymce",props:{id:"",value:""},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id||"vue-tinymce-"+ +new Date}},watch:{value:function(e){var t=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(t.tinymceId).setContent(e)})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},methods:{initTinymce:function(){var e=this,t=this;window.tinymce.init({selector:"#"+this.tinymceId,height:300,language:"zh_CN",body_class:"panel-body ",object_resizing:!1,plugins:"print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools  contextmenu colorpicker textpattern help",toolbar1:"formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat",link_title:!1,init_instance_callback:function(n){t.value&&(console.log(t.value),n.setContent(t.value)),t.hasInit=!0,n.on("NodeChange Change KeyUp",function(){console.log(n.getContent({format:"raw"})),e.hasChange=!0,e.$emit("input",n.getContent({format:"raw"}))})}})},destroyTinymce:function(){window.tinymce.get(this.tinymceId)&&window.tinymce.get(this.tinymceId).destroy()},setContent:function(e){window.tinymce.get(this.tinymceId).setContent(e)},getContent:function(){window.tinymce.get(this.tinymceId).getContent(),console.log(window.tinymce.get(this.tinymceId).getContent())}},destroyed:function(){this.destroyTinymce()}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tinymce-container editor-container"},[t("textarea",{staticClass:"tinymce-textarea",attrs:{id:this.tinymceId}}),this._v(" "),t("div",{staticClass:"editor-custom-btn-container"})])},staticRenderFns:[]};var r={name:"editor-demo",data:function(){return{content:"\n        <img style=\"float:right\" src='https://www.tinymce.com/images/glyph-tinymce@2x.png' alt=\"TinyMCE\" height='150px'/><h2>The world’s first rich text editor in the cloud</h2><p>\n        Have you heard about Tiny Cloud? \n        It’s the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise. \n        50,000 developers already agree. \n        They get free access to our global CDN, image proxy services and auto updates to the TinyMCE editor. \n        They’re also ready for some exciting updates coming soon.\n        </p>\n      ",editorSetting:{height:400}}},components:{Tinymce:n("VU/8")(i,o,!1,function(e){n("xANZ")},"data-v-69136b6f",null).exports}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-container"},[this._m(0),this._v(" "),t("div",[t("tinymce",{staticClass:"editor",attrs:{value:this.content,setting:this.editorSetting},on:{input:function(e){return e}}})],1),this._v(" "),t("div",{staticClass:"editor-content",domProps:{innerHTML:this._s(this.content)}})])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("code",[this._v("\n  富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见\n    "),t("a",{staticClass:"link-type",attrs:{target:"_blank",href:"https://panjiachen.github.io/vue-element-admin-site/#/rich-editor"}},[this._v(" 文档")])])}]};var s=n("VU/8")(r,a,!1,function(e){n("alAk")},"data-v-143d085c",null);t.default=s.exports},VpVo:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n.tinymce-container[data-v-69136b6f] {\r\n  position: relative\n}\n.tinymce-textarea[data-v-69136b6f] {\r\n  visibility: hidden;\r\n  z-index: -1;\n}\n.editor-custom-btn-container[data-v-69136b6f] {\r\n  position: absolute;\r\n  right: 15px;\r\n  /*z-index: 2005;*/\r\n  top: 18px;\n}\n.editor-upload-btn[data-v-69136b6f] {\r\n  display: inline-block;\n}\r\n",""])},alAk:function(e,t,n){var i=n("iYtY");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("777c46b6",i,!0)},iYtY:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\ncode[data-v-143d085c] {\n  background: #eef1f6;\n  padding: 15px 16px;\n  margin-bottom: 20px;\n  display: block;\n  line-height: 36px;\n  font-size: 15px;\n  font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;\n}\n.editor-content[data-v-143d085c] {\n  margin-top: 20px;\n}\n",""])},pXfq:function(e,t){tinymce.addI18n("zh_CN",{Cut:"剪切","Heading 5":"标题5","Header 2":"标题2","Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.":"你的浏览器不支持对剪贴板的访问，请使用Ctrl+X/C/V键进行复制粘贴。","Heading 4":"标题4",Div:"Div区块","Heading 2":"标题2",Paste:"粘贴",Close:"关闭","Font Family":"字体",Pre:"预格式文本","Align right":"右对齐","New document":"新文档",Blockquote:"引用","Numbered list":"编号列表","Heading 1":"标题1",Headings:"标题","Increase indent":"增加缩进",Formats:"格式",Headers:"标题","Select all":"全选","Header 3":"标题3",Blocks:"区块",Undo:"撤消",Strikethrough:"删除线","Bullet list":"项目符号","Header 1":"标题1",Superscript:"上标","Clear formatting":"清除格式","Font Sizes":"字号",Subscript:"下标","Header 6":"标题6",Redo:"重复",Paragraph:"段落",Ok:"确定",Bold:"粗体",Code:"代码",Italic:"斜体","Align center":"居中","Header 5":"标题5","Heading 6":"标题6","Heading 3":"标题3","Decrease indent":"减少缩进","Header 4":"标题4","Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.":"当前为纯文本粘贴模式，再次点击可以回到普通粘贴模式。",Underline:"下划线",Cancel:"取消",Justify:"两端对齐",Inline:"文本",Copy:"复制","Align left":"左对齐","Visual aids":"网格线","Lower Greek":"小写希腊字母",Square:"方块",Default:"默认","Lower Alpha":"小写英文字母",Circle:"空心圆",Disc:"实心圆","Upper Alpha":"大写英文字母","Upper Roman":"大写罗马字母","Lower Roman":"小写罗马字母","Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.":"标识符应该以字母开头，后跟字母、数字、破折号、点、冒号或下划线。",Name:"名称",Anchor:"锚点",Id:"标识符","You have unsaved changes are you sure you want to navigate away?":"你还有文档尚未保存，确定要离开？","Restore last draft":"恢复上次的草稿","Special character":"特殊符号","Source code":"源代码",Language:"语言","Insert/Edit code sample":"插入/编辑代码示例",B:"B",R:"R",G:"G",Color:"颜色","Right to left":"从右到左","Left to right":"从左到右",Emoticons:"表情",Robots:"机器人","Document properties":"文档属性",Title:"标题",Keywords:"关键词",Encoding:"编码",Description:"描述",Author:"作者",Fullscreen:"全屏","Horizontal line":"水平分割线","Horizontal space":"水平边距","Insert/edit image":"插入/编辑图片",General:"普通",Advanced:"高级",Source:"地址",Border:"边框","Constrain proportions":"保持纵横比","Vertical space":"垂直边距","Image description":"图片描述",Style:"样式",Dimensions:"大小","Insert image":"插入图片",Image:"图片","Zoom in":"放大",Contrast:"对比度",Back:"后退",Gamma:"伽马值","Flip horizontally":"水平翻转",Resize:"调整大小",Sharpen:"锐化","Zoom out":"缩小","Image options":"图片选项",Apply:"应用",Brightness:"亮度","Rotate clockwise":"顺时针旋转","Rotate counterclockwise":"逆时针旋转","Edit image":"编辑图片","Color levels":"颜色层次",Crop:"裁剪",Orientation:"方向","Flip vertically":"垂直翻转",Invert:"反转","Date/time":"日期/时间","Insert date/time":"插入日期/时间","Remove link":"删除链接",Url:"地址","Text to display":"显示文字",Anchors:"锚点","Insert link":"插入链接",Link:"链接","New window":"在新窗口打开",None:"无","The URL you entered seems to be an external link. Do you want to add the required http:// prefix?":"你所填写的URL地址属于外部链接，需要加上http://:前缀吗？","Paste or type a link":"粘贴或输入链接",Target:"打开方式","The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?":"你所填写的URL地址为邮件地址，需要加上mailto:前缀吗？","Insert/edit link":"插入/编辑链接","Insert/edit video":"插入/编辑视频",Media:"媒体","Alternative source":"镜像","Paste your embed code below:":"将内嵌代码粘贴在下面:","Insert video":"插入视频",Poster:"封面","Insert/edit media":"插入/编辑媒体",Embed:"内嵌","Nonbreaking space":"不间断空格","Page break":"分页符","Paste as text":"粘贴为文本",Preview:"预览",Print:"打印",Save:"保存","Could not find the specified string.":"未找到搜索内容.",Replace:"替换",Next:"下一个","Whole words":"全字匹配","Find and replace":"查找和替换","Replace with":"替换为",Find:"查找","Replace all":"全部替换","Match case":"区分大小写",Prev:"上一个",Spellcheck:"拼写检查",Finish:"完成","Ignore all":"全部忽略",Ignore:"忽略","Add to Dictionary":"添加到字典","Insert row before":"在上方插入",Rows:"行",Height:"高","Paste row after":"粘贴到下方",Alignment:"对齐方式","Border color":"边框颜色","Column group":"列组",Row:"行","Insert column before":"在左侧插入","Split cell":"拆分单元格","Cell padding":"单元格内边距","Cell spacing":"单元格外间距","Row type":"行类型","Insert table":"插入表格",Body:"表体",Caption:"标题",Footer:"表尾","Delete row":"删除行","Paste row before":"粘贴到上方",Scope:"范围","Delete table":"删除表格","H Align":"水平对齐",Top:"顶部对齐","Header cell":"表头单元格",Column:"列","Row group":"行组",Cell:"单元格",Middle:"垂直居中","Cell type":"单元格类型","Copy row":"复制行","Row properties":"行属性","Table properties":"表格属性",Bottom:"底部对齐","V Align":"垂直对齐",Header:"表头",Right:"右对齐","Insert column after":"在右侧插入",Cols:"列","Insert row after":"在下方插入",Width:"宽","Cell properties":"单元格属性",Left:"左对齐","Cut row":"剪切行","Delete column":"删除列",Center:"居中","Merge cells":"合并单元格","Insert template":"插入模板",Templates:"模板","Background color":"背景色","Custom...":"自定义...","Custom color":"自定义颜色","No color":"无","Text color":"文字颜色","Table of Contents":"内容列表","Show blocks":"显示区块边框","Show invisible characters":"显示不可见字符","Words: {0}":"字数：{0}",Insert:"插入",File:"文件",Edit:"编辑","Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help":"在编辑区按ALT-F9打开菜单，按ALT-F10打开工具栏，按ALT-0查看帮助",Tools:"工具",View:"视图",Table:"表格",Format:"格式"})},xANZ:function(e,t,n){var i=n("VpVo");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("7c6bf672",i,!0)}});