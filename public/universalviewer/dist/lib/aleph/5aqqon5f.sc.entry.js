const e=window.aleph.h;class t{render(){if(this.node){const[t,n]=this.node;return e("form",{onSubmit:e=>e.preventDefault()},e("ion-item",null,e("ion-input",{value:n.title,placeholder:"title",required:!0,onIonChange:e=>n.title=e.detail.value})),e("ion-item",null,e("ion-textarea",{value:n.description,placeholder:"description",rows:"10",onIonChange:e=>n.description=e.detail.value})),e("ion-button",{size:"small",onClick:()=>{this.delete.emit(t),this.node=null}},e("ion-icon",{name:"remove"})),e("ion-button",{size:"small",type:"submit",onClick:()=>{n.title&&this.save.emit([t,n])}},e("ion-icon",{name:"checkmark"})))}return null}static get is(){return"al-node-editor"}static get encapsulation(){return"shadow"}static get properties(){return{node:{type:"Any",attr:"node",mutable:!0}}}static get events(){return[{name:"delete",method:"delete",bubbles:!0,cancelable:!0,composed:!0},{name:"save",method:"save",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return""}}export{t as AlNodeEditor};