webpackJsonp([2,0],[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(65),s=o(r),i=n(50),a=o(i),u=n(64),d=o(u),c=n(19),f=o(c);s.default.use(d.default);var l=new d.default(f.default);new s.default({el:"#app",template:"<App/>",components:{App:a.default},router:l})},,,,,,,,,,function(e,t,n){var o,r;o=n(13);var s=n(62);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t,n){var o,r;o=n(15);var s=n(60);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(52),s=o(r);t.default={name:"app",data:function(){return{memos:[{id:1,text:"テスト",date:"16-10-28",tags:["タグ1","タグ2"]},{id:2,text:"テスト2",date:"16-11-28",tags:["タグ2","タグ3"]}]}},computed:{nextId:function(){return this.memos.reduce(function(e,t){return e<t.id?t.id:e},0)+1}},methods:{add:function(e){e.id=this.nextId,this.memos.push(e)},remove:function(e){var t=this;this.memos.forEach(function(n,o){n.id===e&&t.memos.splice(o,1)})}},components:{NavLink:s.default}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(20),s=o(r);t.default={data:function(){return{input:{text:"",date:"",tags:""}}},computed:{tagsArr:function(){return""!==this.input.tags.trim()?this.input.tags.trim().split(/\s+/):[]}},methods:{save:function(){var e=(0,s.default)({},this.input,{tags:this.tagsArr});this.$emit("add",e)}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{memo:Object},methods:{remove:function(e){this.$parent.$emit("remove",e)}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(51),s=o(r);t.default={props:{memos:Array,sort:String,count:Number},computed:{hasMemo:function(){return this.filteredMemos&&0!==this.filteredMemos.length},filteredMemos:function(){var e=this.memos.concat();if(this.sort)switch(this.sort){case"latest":e.reverse()}return this.count&&(e=e.splice(0,this.count)),e}},methods:{remove:function(e){this.$emit("remove",e)}},components:{"list-item":s.default}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),s=o(r);t.default={methods:{add:function(e){this.$emit("add",e),this.$router.push({name:"items"})}},components:{EditorView:s.default}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),s=o(r);t.default={props:{memos:Array},methods:{remove:function(e){this.$emit("remove",e)}},components:{ListView:s.default}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),s=o(r);t.default={data:function(){return{count:3,sort:"latest"}},props:{memos:Array},methods:{remove:function(e){this.$emit("remove",e)}},components:{ListView:s.default}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(55),s=o(r),i=n(53),a=o(i),u=n(54),d=o(u),c=n(10),f=o(c);t.default={mode:"history",routes:[{path:"/",component:s.default,name:"root"},{path:"/add",component:a.default,name:"add"},{path:"/items",component:d.default,name:"items",children:[{path:":id",component:f.default,name:"edit"}]}]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t,n){var o,r;n(48),o=n(12);var s=n(57);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t,n){var o,r;o=n(14);var s=n(59);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t,n){var o,r;n(49);var s=n(63);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-f463a12a",e.exports=o},function(e,t,n){var o,r;o=n(16);var s=n(58);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t,n){var o,r;o=n(17);var s=n(61);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t,n){var o,r;o=n(18);var s=n(56);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("list-view",{attrs:{memos:e.memos,count:e.count,sort:e.sort},on:{remove:e.remove}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav-link"),e._v(" "),n("router-view",{staticClass:"contents",attrs:{memos:e.memos},on:{add:e.add,remove:e.remove}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("editor-view",{on:{add:e.add}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-item"},[n("div",[n("span",[e._v("ID")]),e._v(" "),n("span",[e._v(e._s(e.memo.id))])]),e._v(" "),n("div",[n("span",[e._v("text")]),e._v("：\n    "),n("span",[e._v(e._s(e.memo.text))])]),e._v(" "),n("div",[n("span",[e._v("date")]),e._v("：\n    "),n("span",[e._v(e._s(e.memo.date))])]),e._v(" "),n("div",[n("span",[e._v("tags")]),e._v("：\n    "),n("span",e._l(e.memo.tags,function(t){return n("span",[e._v(e._s(t))])}))]),e._v(" "),n("div",[n("button",{on:{click:function(t){e.remove(e.memo.id)}}},[e._v("削除")])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-view"},[e.hasMemo?n("div",e._l(e.filteredMemos,function(t){return n("list-item",{attrs:{memo:t},on:{remove:e.remove}})})):n("div",[e._v("\n    メモがありません。\n  ")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("list-view",{attrs:{memos:e.memos},on:{remove:e.remove}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor-view"},[n("div",[n("label",[e._v("内容：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.text,expression:"input.text"}],attrs:{placeholder:"メモのタイトル"},domProps:{value:e._s(e.input.text)},on:{input:function(t){t.target.composing||(e.input.text=t.target.value)}}})]),e._v(" "),n("div",[n("label",[e._v("日付：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.date,expression:"input.date"}],attrs:{type:"date"},domProps:{value:e._s(e.input.date)},on:{input:function(t){t.target.composing||(e.input.date=t.target.value)}}})]),e._v(" "),n("div",[n("label",[e._v("タグ：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.tags,expression:"input.tags"}],attrs:{placeholder:"空白区切りで指定"},domProps:{value:e._s(e.input.tags)},on:{input:function(t){t.target.composing||(e.input.tags=t.target.value)}}})]),e._v(" "),n("div",[n("button",{on:{click:e.save}},[e._v("保存")])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"menu"},[n("router-link",{attrs:{to:{name:"root"},exact:""}},[e._v("最新")]),e._v(" "),n("router-link",{attrs:{to:{name:"items"}}},[e._v("一覧")]),e._v(" "),n("router-link",{attrs:{to:{name:"add"}}},[e._v("追加")])],1)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.fa2288b11e7b5dd28efb.js.map