import{r as t,h as s,d as i,H as r,c as e,e as o}from"./p-d5219e04.js";import"./p-1074393c.js";import{a as h,b as n,c as a}from"./p-4e92c885.js";class c{constructor(s){t(this,s)}onClick(t){t.preventDefault(),t.stopImmediatePropagation()}render(){return s(r,{class:i(this)},s("slot",null,s("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"})))}static get style(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:34px;opacity:.4}"}}class d{constructor(s){t(this,s),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=e(this,"ionItemReorder",7)}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled)}async componentDidLoad(){const t=this.el.closest("ion-content");t&&(this.scrollEl=await t.getScrollElement()),this.gesture=(await __sc_import_ionic("./p-23c8a402.js")).createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:t=>this.canStart(t),onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:()=>this.onEnd()}),this.disabledChanged()}componentDidUnload(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeSync(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const s=t.event.target.closest("ion-reorder");if(!s)return!1;const i=u(s,this.el);return!!i&&(t.data=i,!0)}onStart(t){t.event.preventDefault();const s=this.selectedItemEl=t.data,i=this.cachedHeights;i.length=0;const r=this.el,e=r.children;if(!e||0===e.length)return;let o=0;for(let t=0;t<e.length;t++){const s=e[t];i.push(o+=s.offsetHeight),s.$ionIndex=t}const n=r.getBoundingClientRect();if(this.containerTop=n.top,this.containerBottom=n.bottom,this.scrollEl){const t=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=t.top+p,this.scrollElBottom=t.bottom-p}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=l(s),this.selectedItemHeight=s.offsetHeight,this.state=1,s.classList.add(f),h()}onMove(t){const s=this.selectedItemEl;if(!s)return;const i=this.autoscroll(t.currentY),r=this.containerTop-i,e=Math.max(r,Math.min(t.currentY,this.containerBottom-i)),o=i+e-t.startY,h=this.itemIndexForTop(e-r);if(h!==this.lastToIndex){const t=l(s);this.lastToIndex=h,n(),this.reorderMove(t,h)}s.style.transform=`translateY(${o}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const s=this.lastToIndex,i=l(t);s===i?(t.style.transition="transform 200ms ease-in-out",t.style.transform="",t.classList.remove(f),setTimeout(()=>this.completeSync(),200)):this.ionItemReorder.emit({from:i,to:s,complete:this.completeSync.bind(this)}),a()}completeSync(t){const s=this.selectedItemEl;if(s&&2===this.state){const i=this.el.children,r=i.length,e=this.lastToIndex,o=l(s);e===o||t&&!0!==t||this.el.insertBefore(s,o<e?i[e+1]:i[e]),Array.isArray(t)&&(t=_(t,o,e));for(let t=0;t<r;t++)i[t].style.transform="";s.style.transition="",s.classList.remove(f),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const s=this.cachedHeights;let i=0;for(i=0;i<s.length&&!(s[i]>t);i++);return i}reorderMove(t,s){const i=this.selectedItemHeight,r=this.el.children;for(let e=0;e<r.length;e++){let o="";e>t&&e<=s?o=`translateY(${-i}px)`:e<t&&e>=s&&(o=`translateY(${i}px)`),r[e].style.transform=o}}autoscroll(t){if(!this.scrollEl)return 0;let s=0;return t<this.scrollElTop?s=-m:t>this.scrollElBottom&&(s=m),0!==s&&this.scrollEl.scrollBy(0,s),this.scrollEl.scrollTop-this.scrollElInitial}render(){const t=i(this);return s(r,{class:{[t]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return o(this)}static get watchers(){return{disabled:["disabledChanged"]}}static get style(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"}}const l=t=>t.$ionIndex,u=(t,s)=>{let i;for(;t;){if((i=t.parentElement)===s)return t;t=i}},p=60,m=10,f="reorder-selected",_=(t,s,i)=>{const r=t[s];return t.splice(s,1),t.splice(i,0,r),t.slice()};export{c as ion_reorder,d as ion_reorder_group};