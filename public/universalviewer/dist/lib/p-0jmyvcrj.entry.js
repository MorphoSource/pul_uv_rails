import{r as t,c as s,f as e,h as i,H as r,d as o}from"./p-109d28fd.js";import{c as a}from"./p-955ba954.js";const l=class{constructor(e){t(this,e),this.ionStyle=s(this,"ionStyle",7)}sizeChanged(){this.emitStyle()}connectedCallback(){this.emitStyle()}emitStyle(){const t=this.getSize();this.ionStyle.emit({[`title-${t}`]:!0})}getSize(){return void 0!==this.size?this.size:"default"}getMode(){const t=e(this),s=this.el.closest("ion-toolbar");return s&&s.mode||t}render(){const t=this.getMode(),s=this.getSize();return i(r,{class:Object.assign({[t]:!0,[`title-${t}`]:!0,[`title-${s}`]:!0},a(this.color))},i("div",{class:"toolbar-title"},i("slot",null)))}get el(){return o(this)}static get watchers(){return{size:["sizeChanged"]}}static get style(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.title-ios.title-default),:host(.title-ios.title-large){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios.title-default,:host-context([dir=rtl]).title-ios.title-large,:host-context([dir=rtl]):host(.title-ios.title-default),:host-context([dir=rtl]):host(.title-ios.title-large){left:unset;right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-default),:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host(.title-ios.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;width:100%;height:100%;font-size:13px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-md.title-small){width:100%;height:100%;font-size:15px;font-weight:400}:host(.title-ios.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}"}};export{l as ion_title};