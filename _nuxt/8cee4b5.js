(window.webpackJsonp=window.webpackJsonp||[]).push([[48,9,17],{373:function(e,t,n){var content=n(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("0573e392",content,!0,{sourceMap:!1})},374:function(e,t,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("01ab0d9a",content,!0,{sourceMap:!1})},375:function(e,t,n){"use strict";n(373)},376:function(e,t,n){var o=n(17)((function(i){return i[1]}));o.push([e.i,"h1[data-v-fb2b20a4]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-fb2b20a4]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-fb2b20a4]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-fb2b20a4], p[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-fb2b20a4]{font-size:.625rem}ul[data-v-fb2b20a4]{margin-bottom:1.5rem}ul.list-disc[data-v-fb2b20a4]{padding-left:3rem}li[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:0.25rem}",""]),o.locals={},e.exports=o},377:function(e,t,n){"use strict";n(374)},378:function(e,t,n){var o=n(17)((function(i){return i[1]}));o.push([e.i,"h1[data-v-0172f94a]{color:#f3cc39}",""]),o.locals={},e.exports=o},379:function(e,t,n){"use strict";n.r(t);var o={name:"CoreH1",props:{title:{type:String,required:!0}},computed:{langSpacing:function(){return"en-us"===this.$i18n.locale?"tracking-wider":"tracking-widest"}}},r=(n(377),n(5)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex justify-center font-serif"},[n("h1",{class:"py-2 font-semibold leading-loose text-lg mb-3 "+e.langSpacing+" md:text-2xl lg:text-2xl md:mb-9 lg:mb-9"},[e._v("\n        "+e._s(e.title)+"\n    ")])])}),[],!1,null,"0172f94a",null);t.default=component.exports},380:function(e,t,n){"use strict";n.r(t);var o={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1}},computed:{classObject:function(){return{"w-full":!0,"px-8":!this.customX,"py-24":!this.customY,"sm:px-20":!this.customX,"md:px-32":!this.customX,"lg:px-32":!this.customX}}}},r=(n(375),n(5)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.classObject},[e._t("default")],2)}),[],!1,null,"fb2b20a4",null);t.default=component.exports},631:function(e,t,n){"use strict";n.r(t);var o=n(380),r=n(379),l=n(63),c={i18n:Object(l.a)({"en-us":{title:"Staff",contents:[{key:"chairperson",organization:"Chairperson"},{key:"program",organization:"Program"},{key:"development_web",organization:"Development (web)"},{key:"development_data",organization:"Development (data)"},{key:"development_infra",organization:"Development (infra)"},{key:"venue",organization:"Venue"},{key:"marketing",organization:"Marketing"},{key:"registration",organization:"Registration"},{key:"recruitment",organization:"Recruitment"},{key:"design",organization:"Design"},{key:"finance",organization:"Finance"},{key:"photography",organization:"Photography"}],og:{title:"Staff",description:"Staff of PyConTW 2021"}},"zh-hant":{title:"工作人員",contents:[{key:"chairperson",organization:"主席"},{key:"program",organization:"議程"},{key:"development_web",organization:"開發（網站）"},{key:"development_data",organization:"開發（資料）"},{key:"development_infra",organization:"開發（基礎設施）"},{key:"venue",organization:"場務"},{key:"marketing",organization:"行銷"},{key:"registration",organization:"註冊"},{key:"recruitment",organization:"招募"},{key:"design",organization:"設計"},{key:"finance",organization:"財務"},{key:"photography",organization:"攝影"}],og:{title:"工作人員",description:"PyConTW 2021 工作人員"}}}),name:"PageStaff",components:{I18nPageWrapper:o.default,CoreH1:r.default},data:function(){return{member_list:{chairperson:["Wei Lee"],program:["Winnie","Pochun","Petertc","JunWei Song","Annie Bu","Jordan Su","Gina","Kyle","Yider","Tony","黃坤賢","TingYi","Winfred","Shihchi","Huei Lin","Benson","Jason","Kir","Leonard","Lance","Shirley"],development_web:["Matt Wang","Kaka Lin","Ethan Lin","Max","Set Mao","Maliao","Flynn","Alice Chang","SHY","Phil","Benson"],development_data:["泰瑋","Hane","Jacky","Grimmer","Howard","Juihsiang"],development_infra:["Josix","SHY","Mozix","Cloudy","GaryPai","Jacky"],venue:["David Lu","地瓜","Yider","Matthew","真瑜","Ray","Jason","Juihsiang","Kevin","Ben","Macs","阿嘉","Allen","Ching","J魚","Julie","Derek","Luke","陳彥愷","Tim","liyu"],marketing:["Tumi","Gobby Chen","四貓","9ukei","Derek","品淳","寬寬","小玖","Allen","Tony","Ken","Mary","Cynthia Lu","Rain","Tai","yuhow5566","坤賢"],registration:["育承","Tumi","GTB","岱瑾","twtrubiks"],recruitment:["Rex","Josix","四貓","Tai","Leila"],design:["Ben","小玖","王禹翔","安安","Sandy","Carol Cho","Cailin"],finance:["Rock","Leila"],photography:["Andy Chuang"]}}},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("og.title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("og.description")},{hid:"description",name:"description",content:this.$i18n.t("og.description")}]}}},m=n(5),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i18n-page-wrapper",[n("core-h1",{attrs:{title:e.$t("title")}}),e._v(" "),n("div",{staticClass:"flex flex-col items-center"},e._l(e.$t("contents"),(function(content,i){return n("div",{key:"staff_content_"+i},[n("h2",{staticClass:"flex flex-col items-center"},[e._v("\n                "+e._s(content.organization)+"\n            ")]),e._v(" "),e._l(e.member_list[content.key],(function(t,o){return n("p",{key:"staff_members_"+o,staticClass:"flex flex-col items-center"},[e._v("\n                "+e._s(t)+"\n            ")])}))],2)})),0)],1)}),[],!1,null,"1bc4ef8c",null);t.default=component.exports}}]);