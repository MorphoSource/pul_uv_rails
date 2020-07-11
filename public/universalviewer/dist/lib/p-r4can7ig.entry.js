import{r as s,f as i,c as t,h as o,H as a,d as r}from"./p-109d28fd.js";import"./p-1644482e.js";import{g as e}from"./p-955ba954.js";import{B as n,c as l,d,e as p,f as h}from"./p-b4d93491.js";import{a as c,d as m}from"./p-8aba239f.js";import{c as f}from"./p-d551500b.js";import{d as b}from"./p-978bde94.js";const u=s=>{const i=f(),t=f(),o=f();return t.addElement(s.querySelector("ion-backdrop")).fromTo("opacity",.01,.4),o.addElement(s.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(100%)","translateY(0%)"),i.addElement(s).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").addAnimation([t,o])},D=s=>{const i=f(),t=f(),o=f(),a=s.querySelector(".modal-wrapper"),r=a.getBoundingClientRect();return t.addElement(s.querySelector("ion-backdrop")).fromTo("opacity",.4,0),o.addElement(a).beforeStyles({opacity:1}).fromTo("transform","translateY(0%)",`translateY(${s.ownerDocument.defaultView.innerHeight-r.top}px)`),i.addElement(s).easing("ease-out").duration(250).addAnimation([t,o])},w=s=>{const i=f(),t=f(),o=f();return t.addElement(s.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),o.addElement(s.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),i.addElement(s).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").addAnimation([t,o])},y=s=>{const i=f(),t=f(),o=f(),a=s.querySelector(".modal-wrapper");return t.addElement(s.querySelector("ion-backdrop")).fromTo("opacity",.32,0),o.addElement(a).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),i.addElement(s).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([t,o])},M=class{constructor(o){s(this,o),this.presented=!1,this.mode=i(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,n)},this.onDismiss=s=>{s.stopPropagation(),s.preventDefault(),this.dismiss()},this.onLifecycle=s=>{const i=this.usersElement,t=j[s.type];if(i&&t){const o=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:s.detail});i.dispatchEvent(o)}},l(this.el),this.didPresent=t(this,"ionModalDidPresent",7),this.willPresent=t(this,"ionModalWillPresent",7),this.willDismiss=t(this,"ionModalWillDismiss",7),this.didDismiss=t(this,"ionModalDidDismiss",7)}async present(){if(this.presented)return;const s=this.el.querySelector(".modal-wrapper");if(!s)throw new Error("container is undefined");const i=Object.assign(Object.assign({},this.componentProps),{modal:this.el});return this.usersElement=await c(this.delegate,s,this.component,["ion-page"],i),await b(this.usersElement),d(this,"modalEnter",u,w)}async dismiss(s,i){const t=await p(this,s,i,"modalLeave",D,y);return t&&await m(this.delegate,this.usersElement),t}onDidDismiss(){return h(this.el,"ionModalDidDismiss")}onWillDismiss(){return h(this.el,"ionModalWillDismiss")}render(){const s=i(this);return o(a,{"no-router":!0,"aria-modal":"true",class:Object.assign({[s]:!0},e(this.cssClass)),style:{zIndex:`${2e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},o("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),o("div",{role:"dialog",class:{"modal-wrapper":!0,[s]:!0}}))}get el(){return r(this)}static get style(){return".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}"}},j={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};export{M as ion_modal};