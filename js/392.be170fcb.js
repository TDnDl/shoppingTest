"use strict";(self["webpackChunkhm_shopping"]=self["webpackChunkhm_shopping"]||[]).push([[392],{5392:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("van-nav-bar",{attrs:{title:"会员登录","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"form"},[e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mobileNum,expression:"mobileNum"}],staticClass:"inp",attrs:{maxlength:"11",placeholder:"请输入手机号",type:"text"},domProps:{value:t.mobileNum},on:{input:function(e){e.target.composing||(t.mobileNum=e.target.value)}}})]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.picCode,expression:"picCode"}],staticClass:"inp",attrs:{maxlength:"5",placeholder:"请输入图形验证码",type:"text"},domProps:{value:t.picCode},on:{input:function(e){e.target.composing||(t.picCode=e.target.value)}}}),t.picUrl?e("img",{attrs:{src:t.picUrl,alt:""},on:{click:t.getPicCode}}):t._e()]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.smsCode,expression:"smsCode"}],staticClass:"inp",attrs:{placeholder:"请输入短信验证码 默认: 246810",type:"text"},domProps:{value:t.smsCode},on:{input:function(e){e.target.composing||(t.smsCode=e.target.value)}}}),e("button",{on:{click:t.GetSmsCode}},[t._v(" "+t._s(null===t.timer?"获取验证码":t.currentSecond+"秒后重新获取")+" ")])])]),e("div",{staticClass:"login-btn",on:{click:t.verifyLogin}},[t._v("登录")])])],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h3",[t._v("手机号登录")]),e("p",[t._v("未注册的手机号登录后自动注册")])])}],o=i(5720);const r=()=>o.A.get("/captcha/image"),n=(t,e,i)=>o.A.post("/captcha/sendSmsCaptcha",{form:{captchaCode:t,captchaKey:e,mobile:i}}),c=(t,e)=>o.A.post("/passport/login",{form:{isParty:!1,mobile:t,partyData:{},smsCode:e}});var l=i(2776),m={name:"LoginIndex",data(){return{picCode:"",picKey:"",picUrl:"",totalSecond:5,currentSecond:5,timer:null,mobileNum:"",smsCode:""}},created(){this.getPicCode()},methods:{async getPicCode(){const{data:{base64:t,key:e}}=await r();this.picUrl=t,this.picKey=e},verifyCode(){const t=/^1[3-9]\d{9}$/,e=/^\w{4}$/;return t.test(this.mobileNum)?!!e.test(this.picCode)||(this.$toast("图形验证码错误"),!1):(this.$toast("请输入正确的手机号"),!1)},async GetSmsCode(){this.verifyCode()&&(this.timer||this.totalSecond!==this.currentSecond||(await n(this.picCode,this.picKey,this.mobileNum),this.timer=setInterval((()=>{this.currentSecond--,this.currentSecond<=0&&(clearInterval(this.timer),this.timer=null,this.currentSecond=this.totalSecond)}),1e3),this.$toast("发送成功")))},async verifyLogin(){if(!this.verifyCode)return;if(!/^\d{6}$/.test(this.smsCode))return void this.$toast("手机验证码错误");const t=await c(this.mobileNum,this.smsCode);this.$store.commit("user/setUserInfo",t.data),await(0,l.E1)("张三",this.mobileNum,[{value:782,label:"上海"},{value:783,label:"上海市"},{value:785,label:"徐汇区"}],"北京路1号楼8888室"),this.$toast("登录成功");const e=this.$route.query.backUrl||"/";this.$router.replace(e)}},destroyed(){clearInterval(this.timer),this.timer=null}},d=m,u=i(1656),p=(0,u.A)(d,s,a,!1,null,"dcd281a6",null),h=p.exports}}]);
//# sourceMappingURL=392.be170fcb.js.map