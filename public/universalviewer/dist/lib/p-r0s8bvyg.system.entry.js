var __awaiter=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))(function(i,n){function a(e){try{l(o.next(e))}catch(e){n(e)}}function s(e){try{l(o["throw"](e))}catch(e){n(e)}}function l(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}l((o=o.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,i,n,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(a){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,i&&(n=a[0]&2?i["return"]:a[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;if(i=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(n=r.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){r.label=a[1];break}if(a[0]===6&&r.label<n[1]){r.label=n[1];n=a;break}if(n&&r.label<n[2]){r.label=n[2];r.ops.push(a);break}if(n[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(e){a=[6,e];i=0}finally{o=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-8a4c8ac0.system.js","./p-d09772b4.system.js","./p-6a603f00.system.js","./p-ae1a281c.system.js","./p-307e3eda.system.js","./p-26207f40.system.js","./p-d0637532.system.js"],function(e){"use strict";var t,r,o,i,n,a,s,l,p,c,u,f,v,d,h,m;return{setters:[function(e){t=e.r;r=e.f;o=e.c;i=e.h;n=e.H;a=e.d},function(){},function(e){s=e.g},function(e){l=e.B;p=e.e;c=e.f;u=e.h;f=e.i},function(e){v=e.a;d=e.d},function(e){h=e.c},function(e){m=e.d}],execute:function(){var y=function(e,t){var r="top";var o="left";var i=e.querySelector(".popover-content");var n=i.getBoundingClientRect();var a=n.width;var s=n.height;var l=e.ownerDocument.defaultView.innerWidth;var p=e.ownerDocument.defaultView.innerHeight;var c=t&&t.target&&t.target.getBoundingClientRect();var u=c!=null&&"top"in c?c.top:p/2-s/2;var f=c!=null&&"left"in c?c.left:l/2;var v=c&&c.width||0;var d=c&&c.height||0;var m=e.querySelector(".popover-arrow");var y=m.getBoundingClientRect();var g=y.width;var w=y.height;if(c==null){m.style.display="none"}var D={top:u+d,left:f+v/2-g/2};var E={top:u+d+(w-1),left:f+v/2-a/2};var P=false;var x=false;if(E.left<b+25){P=true;E.left=b}else if(a+b+E.left+25>l){x=true;E.left=l-a-b;o="right"}if(u+d+s>p&&u-s>0){D.top=u-(w+1);E.top=u-s-(w-1);e.className=e.className+" popover-bottom";r="bottom"}else if(u+d+s>p){i.style.bottom=b+"%"}m.style.top=D.top+"px";m.style.left=D.left+"px";i.style.top=E.top+"px";i.style.left=E.left+"px";if(P){i.style.left="calc("+E.left+"px + var(--ion-safe-area-left, 0px))"}if(x){i.style.left="calc("+E.left+"px - var(--ion-safe-area-right, 0px))"}i.style.transformOrigin=r+" "+o;var _=h();var S=h();var k=h();S.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08);k.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);return _.addElement(e).easing("ease").duration(100).addAnimation([S,k])};var b=5;var g=function(e){var t=h();var r=h();var o=h();r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0);o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return t.addElement(e).easing("ease").duration(500).addAnimation([r,o])};var w=function(e,t){var r=12;var o=e.ownerDocument;var i=o.dir==="rtl";var n="top";var a=i?"right":"left";var s=e.querySelector(".popover-content");var l=s.getBoundingClientRect();var p=l.width;var c=l.height;var u=o.defaultView.innerWidth;var f=o.defaultView.innerHeight;var v=t&&t.target&&t.target.getBoundingClientRect();var d=v!=null&&"bottom"in v?v.bottom:f/2-c/2;var m=v!=null&&"left"in v?i?v.left-p+v.width:v.left:u/2-p/2;var y=v&&v.height||0;var b={top:d,left:m};if(b.left<r){b.left=r;a="left"}else if(p+r+b.left>u){b.left=u-p-r;a="right"}if(d+y+c>f&&d-c>0){b.top=d-c-y;e.className=e.className+" popover-bottom";n="bottom"}else if(d+y+c>f){s.style.bottom=r+"px"}var g=h();var w=h();var D=h();var E=h();var P=h();w.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32);D.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);E.addElement(s).beforeStyles({top:b.top+"px",left:b.left+"px","transform-origin":n+" "+a}).fromTo("transform","scale(0.001)","scale(1)");P.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1);return g.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w,D,E,P])};var D=function(e){var t=h();var r=h();var o=h();r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0);o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return t.addElement(e).easing("ease").duration(500).addAnimation([r,o])};var E=e("ion_popover",function(){function e(e){var i=this;t(this,e);this.presented=false;this.mode=r(this);this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.translucent=false;this.animated=true;this.onDismiss=function(e){e.stopPropagation();e.preventDefault();i.dismiss()};this.onBackdropTap=function(){i.dismiss(undefined,l)};this.onLifecycle=function(e){var t=i.usersElement;var r=P[e.type];if(t&&r){var o=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(o)}};p(this.el);this.didPresent=o(this,"ionPopoverDidPresent",7);this.willPresent=o(this,"ionPopoverWillPresent",7);this.willDismiss=o(this,"ionPopoverWillDismiss",7);this.didDismiss=o(this,"ionPopoverDidDismiss",7)}e.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var e,t,r;return __generator(this,function(o){switch(o.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".popover-content");if(!e){throw new Error("container is undefined")}t=Object.assign(Object.assign({},this.componentProps),{popover:this.el});r=this;return[4,v(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:r.usersElement=o.sent();return[4,m(this.usersElement)];case 2:o.sent();return[2,c(this,"popoverEnter",y,w,this.event)]}})})};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,function(){var r;return __generator(this,function(o){switch(o.label){case 0:return[4,u(this,e,t,"popoverLeave",g,D,this.event)];case 1:r=o.sent();if(!r)return[3,3];return[4,d(this.delegate,this.usersElement)];case 2:o.sent();o.label=3;case 3:return[2,r]}})})};e.prototype.onDidDismiss=function(){return f(this.el,"ionPopoverDidDismiss")};e.prototype.onWillDismiss=function(){return f(this.el,"ionPopoverWillDismiss")};e.prototype.render=function(){var e;var t=r(this);var o=this.onLifecycle;return i(n,{"aria-modal":"true","no-router":true,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},s(this.cssClass)),(e={},e[t]=true,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:o,onIonPopoverWillPresent:o,onIonPopoverWillDismiss:o,onIonPopoverDidDismiss:o,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},i("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),i("div",{class:"popover-wrapper"},i("div",{class:"popover-arrow"}),i("div",{class:"popover-content"})))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"},enumerable:true,configurable:true});return e}());var P={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}});