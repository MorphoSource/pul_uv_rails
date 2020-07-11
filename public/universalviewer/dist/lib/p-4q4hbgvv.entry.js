import{r as s,f as i,c as t,i as o,h as a,H as n,d as e}from"./p-109d28fd.js";import"./p-1644482e.js";import{g as r}from"./p-955ba954.js";import{B as c,c as p,d,e as l,f as h}from"./p-b4d93491.js";import{c as f}from"./p-d551500b.js";import{s as m}from"./p-fbd2c40b.js";const g=s=>{const i=f(),t=f(),o=f();return t.addElement(s.querySelector("ion-backdrop")).fromTo("opacity",.01,.3),o.addElement(s.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),i.addElement(s).easing("ease-in-out").duration(200).addAnimation([t,o])},u=s=>{const i=f(),t=f(),o=f();return t.addElement(s.querySelector("ion-backdrop")).fromTo("opacity",.3,0),o.addElement(s.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),i.addElement(s).easing("ease-in-out").duration(200).addAnimation([t,o])},y=s=>{const i=f(),t=f(),o=f();return t.addElement(s.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),o.addElement(s.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),i.addElement(s).easing("ease-in-out").duration(200).addAnimation([t,o])},b=s=>{const i=f(),t=f(),o=f();return t.addElement(s.querySelector("ion-backdrop")).fromTo("opacity",.32,0),o.addElement(s.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),i.addElement(s).easing("ease-in-out").duration(200).addAnimation([t,o])},L=class{constructor(o){s(this,o),this.presented=!1,this.mode=i(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,c)},p(this.el),this.didPresent=t(this,"ionLoadingDidPresent",7),this.willPresent=t(this,"ionLoadingWillPresent",7),this.willDismiss=t(this,"ionLoadingWillDismiss",7),this.didDismiss=t(this,"ionLoadingDidDismiss",7)}componentWillLoad(){if(void 0===this.spinner){const s=i(this);this.spinner=o.get("loadingSpinner",o.get("spinner","ios"===s?"lines":"crescent"))}}async present(){await d(this,"loadingEnter",g,y,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10))}dismiss(s,i){return this.durationTimeout&&clearTimeout(this.durationTimeout),l(this,s,i,"loadingLeave",u,b)}onDidDismiss(){return h(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return h(this.el,"ionLoadingWillDismiss")}render(){const{message:s,spinner:t}=this,o=i(this);return a(n,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:`${4e4+this.overlayIndex}`},class:Object.assign(Object.assign({},r(this.cssClass)),{[o]:!0,"loading-translucent":this.translucent})},a("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),a("div",{class:"loading-wrapper",role:"dialog"},t&&a("div",{class:"loading-spinner"},a("ion-spinner",{name:t})),s&&a("div",{class:"loading-content",innerHTML:m(s)})))}get el(){return e(this)}static get style(){return".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}};export{L as ion_loading};