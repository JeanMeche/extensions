(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[817],{70817:(d,c,e)=>{"use strict";e.r(c),e.d(c,{Text3dApiComponent:()=>i,Text3dModule:()=>u,Text3dOverviewComponent:()=>o});var s=e(4521),T=e(63903),t=e(5e3),_=e(67322),C=e(77531),f=e(93075),j=e(78029),h=e(69808);const Z=function(n,p){return{"z-index":n,transform:p}};function v(n,p){if(1&n&&(t.TgZ(0,"span",1),t._uU(1),t.GkF(2,2),t.qZA()),2&n){const a=p.$implicit,l=t.oxw();t.Q6J("ngStyle",t.WLB(3,Z,-a,"translate3d(0, 0,"+-a+"px)")),t.xp6(1),t.hij(" ",l.text," "),t.xp6(1),t.Q6J("ngTemplateOutlet",l.template)}}let M=(()=>{class n{constructor(){this.text="",this.depth=20,this.rotateX=60,this.rotateY=0,this.rotateZ=0}get transform(){return`rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`}get depthArr(){const a=[];for(let l=1;l<=this.depth;l++)a.push(l);return a}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["mtx-text3d"]],contentQueries:function(a,l,x){if(1&a&&t.Suo(x,t.Rgc,5),2&a){let m;t.iGM(m=t.CRH())&&(l.template=m.first)}},hostAttrs:[1,"mtx-text3d"],hostVars:2,hostBindings:function(a,l){2&a&&t.Udp("transform",l.transform)},inputs:{text:"text",depth:"depth",rotateX:"rotateX",rotateY:"rotateY",rotateZ:"rotateZ"},exportAs:["mtxText3d"],decls:1,vars:1,consts:[["class","mtx-text3d-layer",3,"ngStyle",4,"ngFor","ngForOf"],[1,"mtx-text3d-layer",3,"ngStyle"],[3,"ngTemplateOutlet"]],template:function(a,l){1&a&&t.YNc(0,v,3,6,"span",0),2&a&&t.Q6J("ngForOf",l.depthArr)},directives:[h.sg,h.PC,h.tP],styles:[".mtx-text3d{display:block;transform-style:preserve-3d;-webkit-animation:rotate 5s ease infinite;animation:rotate 5s ease infinite;font-weight:700}.mtx-text3d .mtx-text3d-layer{display:block;text-align:center;font-size:10rem}.mtx-text3d .mtx-text3d-layer:not(:first-child){position:absolute;top:0;left:0%;right:0%;margin:auto;transform-style:preserve-3d}\n"],encapsulation:2,changeDetection:0}),n})();const A={title:"Configurable 3D text",component:(()=>{class n{constructor(){this.text="3D Text",this.depth=20,this.rotateX=60,this.rotateY=0,this.rotateZ=0}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["text-3d-example"]],decls:22,vars:10,consts:[["matInput","","placeholder","Text",3,"ngModel","ngModelChange"],["min","1","max","50","thumbLabel","",3,"ngModel","ngModelChange"],["min","0","max","360","thumbLabel","",3,"ngModel","ngModelChange"],[3,"text","depth","rotateX","rotateY","rotateZ"]],template:function(a,l){1&a&&(t.TgZ(0,"h2"),t._uU(1,"3D Text configuration"),t.qZA(),t.TgZ(2,"section"),t.TgZ(3,"mat-form-field"),t.TgZ(4,"input",0),t.NdJ("ngModelChange",function(m){return l.text=m}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"section"),t.TgZ(6,"label"),t._uU(7,"Depth:"),t.qZA(),t.TgZ(8,"mat-slider",1),t.NdJ("ngModelChange",function(m){return l.depth=m}),t.qZA(),t.qZA(),t.TgZ(9,"section"),t.TgZ(10,"label"),t._uU(11,"RotateX:"),t.qZA(),t.TgZ(12,"mat-slider",2),t.NdJ("ngModelChange",function(m){return l.rotateX=m}),t.qZA(),t.TgZ(13,"label"),t._uU(14,"RotateY:"),t.qZA(),t.TgZ(15,"mat-slider",2),t.NdJ("ngModelChange",function(m){return l.rotateY=m}),t.qZA(),t.TgZ(16,"label"),t._uU(17,"RotateZ:"),t.qZA(),t.TgZ(18,"mat-slider",2),t.NdJ("ngModelChange",function(m){return l.rotateZ=m}),t.qZA(),t.qZA(),t.TgZ(19,"h2"),t._uU(20,"Result"),t.qZA(),t._UZ(21,"mtx-text3d",3)),2&a&&(t.xp6(4),t.Q6J("ngModel",l.text),t.xp6(4),t.Q6J("ngModel",l.depth),t.xp6(4),t.Q6J("ngModel",l.rotateX),t.xp6(3),t.Q6J("ngModel",l.rotateY),t.xp6(3),t.Q6J("ngModel",l.rotateZ),t.xp6(3),t.Q6J("text",l.text)("depth",l.depth)("rotateX",l.rotateX)("rotateY",l.rotateY)("rotateZ",l.rotateZ))},directives:[_.KE,C.Nt,f.Fj,f.JJ,f.On,j.pH,M],styles:[""]}),n})(),files:[{file:"app.component.html",content:e(97587),filecontent:e(1841)},{file:"app.component.ts",content:e(90321),filecontent:e(78693)},{file:"app.component.scss",content:e(55381),filecontent:e(75018)}]};var b=e(22281);function r(n,p){if(1&n&&(t.ynx(0),t._UZ(1,"example-viewer",2),t.BQk()),2&n){const a=p.$implicit;t.xp6(1),t.Q6J("exampleData",a)}}function g(n,p){if(1&n&&(t.ynx(0),t.YNc(1,r,2,1,"ng-container",1),t.BQk()),2&n){const a=p.ngIf;t.xp6(1),t.Q6J("ngForOf",a.examples)}}let o=(()=>{class n{constructor(a){this.route=a}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(s.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-text3d-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(a,l){1&a&&(t.YNc(0,g,2,1,"ng-container",0),t.ALo(1,"async")),2&a&&t.Q6J("ngIf",t.lcZ(1,1,l.route.data))},directives:[h.O5,h.sg,b.B],pipes:[h.Ov],encapsulation:2}),n})(),i=(()=>{class n{constructor(a){this.route=a}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(s.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-text3d-api"]],decls:1,vars:0,template:function(a,l){1&a&&t._uU(0,"Coming soon\n")},encapsulation:2}),n})(),u=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[T.m8,s.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:o,pathMatch:"full",data:{examples:[A]}},{path:"api",component:i,pathMatch:"full"},{path:"**",redirectTo:"overview"}])]]}),n})()},22281:(d,c,e)=>{"use strict";e.d(c,{B:()=>b});var s=e(5e3),T=e(57261),t=e(27163),_=e(47423),C=e(87238),f=e(63874),j=e(69808),h=e(53251);const Z=["demo"];function v(r,g){if(1&r){const o=s.EpF();s.TgZ(0,"mat-tab",10),s.TgZ(1,"div",11),s.TgZ(2,"div",12),s.TgZ(3,"button",13),s.NdJ("click",function(){s.CHM(o);const u=s.MAs(8);return s.oxw(2).copySource(u)}),s.TgZ(4,"mat-icon"),s._uU(5,"content_copy"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(6,"div",14),s._UZ(7,"pre",15,16),s.qZA(),s.qZA(),s.qZA()}if(2&r){const o=g.$implicit;s.Q6J("label",o.file),s.xp6(3),s.Q6J("matTooltip","Copy example source"),s.xp6(4),s.Q6J("innerHtml",o.content,s.oJD)}}function M(r,g){if(1&r&&(s.TgZ(0,"div",8),s.TgZ(1,"mat-tab-group"),s.YNc(2,v,9,3,"mat-tab",9),s.qZA(),s.qZA()),2&r){const o=s.oxw();s.xp6(2),s.Q6J("ngForOf",o.exampleData.files)}}function y(r,g){if(1&r&&s._UZ(0,"div",17),2&r){const o=s.oxw();s.Q6J("innerHtml",o.exampleData.description,s.oJD)}}function A(r,g){}let b=(()=>{class r{constructor(o,i,u){this.snackbar=o,this.copier=i,this.componentFactoryResolver=u,this.showSource=!1}ngOnInit(){const o=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(o)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(o){this.copier.copyText(o.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}return r.\u0275fac=function(o){return new(o||r)(s.Y36(T.ux),s.Y36(t.u),s.Y36(s._Vd))},r.\u0275cmp=s.Xpm({type:r,selectors:[["example-viewer"]],viewQuery:function(o,i){if(1&o&&s.Gf(Z,7,s.s_b),2&o){let u;s.iGM(u=s.CRH())&&(i.demoRef=u.first)}},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(o,i){1&o&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"span"),s._uU(3),s.qZA(),s._UZ(4,"div",2),s.TgZ(5,"button",3),s.NdJ("click",function(){return i.toggleSourceView()}),s.TgZ(6,"mat-icon"),s._uU(7,"code"),s.qZA(),s.qZA(),s.qZA(),s.YNc(8,M,3,1,"div",4),s.TgZ(9,"div",5),s.YNc(10,y,1,1,"div",6),s.YNc(11,A,0,0,"ng-template",null,7,s.W1O),s.qZA(),s.qZA()),2&o&&(s.xp6(3),s.Oqu(i.exampleData.title),s.xp6(2),s.Q6J("matTooltip","View source"),s.xp6(3),s.Q6J("ngIf",i.showSource),s.xp6(2),s.Q6J("ngIf",i.exampleData.description))},directives:[_.lW,C.gM,f.Hw,j.O5,h.SP,j.sg,h.uX],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),r})()},97587:d=>{d.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>3D Text configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-form-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Text&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-form-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Depth:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;depth&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>RotateX:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;360&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;rotateX&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>RotateY:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;360&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;rotateY&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>RotateZ:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;360&quot;</span> <span class="hljs-attr">thumbLabel</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;rotateZ&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-text3d</span> [<span class="hljs-attr">text</span>]=<span class="hljs-string">&quot;text&quot;</span> [<span class="hljs-attr">depth</span>]=<span class="hljs-string">&quot;depth&quot;</span>\n            [<span class="hljs-attr">rotateX</span>]=<span class="hljs-string">&quot;rotateX&quot;</span> [<span class="hljs-attr">rotateY</span>]=<span class="hljs-string">&quot;rotateY&quot;</span> [<span class="hljs-attr">rotateZ</span>]=<span class="hljs-string">&quot;rotateZ&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mtx-text3d</span>&gt;</span>\n'},55381:d=>{d.exports='<span class="hljs-comment">/** No CSS for this example */</span>\n'},90321:d=>{d.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;text-3d-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  text = <span class="hljs-string">&#x27;3D Text&#x27;</span>;\n  depth = <span class="hljs-number">20</span>;\n  rotateX = <span class="hljs-number">60</span>;\n  rotateY = <span class="hljs-number">0</span>;\n  rotateZ = <span class="hljs-number">0</span>;\n}\n'},1841:(d,c,e)=>{"use strict";e.r(c),e.d(c,{default:()=>s});const s='<h2>3D Text configuration</h2>\n\n<section>\n  <mat-form-field>\n    <input matInput [(ngModel)]="text" placeholder="Text">\n  </mat-form-field>\n</section>\n\n<section>\n  <label>Depth:</label>\n  <mat-slider min="1" max="50" thumbLabel [(ngModel)]="depth"></mat-slider>\n</section>\n\n<section>\n  <label>RotateX:</label>\n  <mat-slider min="0" max="360" thumbLabel [(ngModel)]="rotateX"></mat-slider>\n\n  <label>RotateY:</label>\n  <mat-slider min="0" max="360" thumbLabel [(ngModel)]="rotateY"></mat-slider>\n\n  <label>RotateZ:</label>\n  <mat-slider min="0" max="360" thumbLabel [(ngModel)]="rotateZ"></mat-slider>\n</section>\n\n<h2>Result</h2>\n\n<mtx-text3d [text]="text" [depth]="depth"\n            [rotateX]="rotateX" [rotateY]="rotateY" [rotateZ]="rotateZ"></mtx-text3d>\n'},75018:(d,c,e)=>{"use strict";e.r(c),e.d(c,{default:()=>s});const s="/** No CSS for this example */\n"},78693:(d,c,e)=>{"use strict";e.r(c),e.d(c,{default:()=>s});const s="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'text-3d-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  text = '3D Text';\n  depth = 20;\n  rotateX = 60;\n  rotateY = 0;\n  rotateZ = 0;\n}\n"}}]);