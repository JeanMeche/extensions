"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58],{33086:(E,_,l)=>{l.d(_,{Q:()=>m});var t=l(5e3),p=l(69808),d=l(63874);let C=(()=>{class c{constructor(h){this.platformLocation=h,this._text=""}ngOnInit(){this._text=this.example.toLowerCase().split(" ").filter(h=>"&"!==h).join("-")}getFragmentUrl(){return`${this.platformLocation.pathname}#${this._text}`}}return c.\u0275fac=function(h){return new(h||c)(t.Y36(p.lw))},c.\u0275cmp=t.Xpm({type:c,selectors:[["header-link"]],inputs:{example:"example"},decls:3,vars:2,consts:[["aria-label","Link to this heading",1,"docs-markdown-a","header-link",3,"href"]],template:function(h,x){1&h&&(t.TgZ(0,"a",0),t.TgZ(1,"mat-icon"),t._uU(2,"link"),t.qZA(),t.qZA()),2&h&&(t.Q6J("href",x.getFragmentUrl(),t.LSH),t.uIk("aria-describedby",x.example))},directives:[d.Hw],styles:["h1 .header-link,h2 .header-link,h3 .header-link,h4 .header-link,h5 .header-link,h6 .header-link{display:inline-flex;padding:2px 0;margin-left:-30px;color:#6e6e6e;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;visibility:hidden;vertical-align:middle}h1:hover .header-link,h2:hover .header-link,h3:hover .header-link,h4:hover .header-link,h5:hover .header-link,h6:hover .header-link{visibility:visible}h1 span,h2 span,h3 span,h4 span,h5 span,h6 span{vertical-align:middle}\n"],encapsulation:2}),c})(),m=(()=>{class c{constructor(){this.text="",this.id=""}ngOnInit(){this.id=this.text.toLowerCase().split(" ").filter(h=>"&"!==h).join("-")}}return c.\u0275fac=function(h){return new(h||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["doc-heading"]],inputs:{text:"text"},decls:4,vars:3,consts:[[3,"id"],[3,"example"]],template:function(h,x){1&h&&(t.TgZ(0,"h3",0),t._UZ(1,"header-link",1),t.TgZ(2,"span"),t._uU(3),t.qZA(),t.qZA()),2&h&&(t.Q6J("id",x.id),t.xp6(1),t.Q6J("example",x.text),t.xp6(2),t.hij(" ",x.text,""))},directives:[C],encapsulation:2}),c})()},29241:(E,_,l)=>{l.d(_,{z:()=>p});var t=l(5e3);let p=(()=>{class d{constructor(){this.textContent=""}ngOnDestroy(){}}return d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(m,c){1&m&&t._UZ(0,"div",0),2&m&&t.Q6J("innerHTML",c.textContent,t.oJD)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px;border-bottom:1px solid rgba(0,0,0,.12)}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0;box-shadow:0 2px 2px #0000003d,0 0 2px #0000001f}.docs-markdown th{max-width:100px;padding:13px 16px;background:rgba(0,0,0,.025);font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;border:1px solid rgba(0,0,0,.03);font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;padding:20px;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}\n"],encapsulation:2}),d})()},22281:(E,_,l)=>{l.d(_,{B:()=>V});var t=l(5e3),p=l(57261),d=l(27163),C=l(47423),m=l(87238),c=l(63874),b=l(69808),h=l(53251);const x=["demo"];function F(f,g){if(1&f){const u=t.EpF();t.TgZ(0,"mat-tab",10),t.TgZ(1,"div",11),t.TgZ(2,"div",12),t.TgZ(3,"button",13),t.NdJ("click",function(){t.CHM(u);const L=t.MAs(8);return t.oxw(2).copySource(L)}),t.TgZ(4,"mat-icon"),t._uU(5,"content_copy"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",14),t._UZ(7,"pre",15,16),t.qZA(),t.qZA(),t.qZA()}if(2&f){const u=g.$implicit;t.Q6J("label",u.file),t.xp6(3),t.Q6J("matTooltip","Copy example source"),t.xp6(4),t.Q6J("innerHtml",u.content,t.oJD)}}function M(f,g){if(1&f&&(t.TgZ(0,"div",8),t.TgZ(1,"mat-tab-group"),t.YNc(2,F,9,3,"mat-tab",9),t.qZA(),t.qZA()),2&f){const u=t.oxw();t.xp6(2),t.Q6J("ngForOf",u.exampleData.files)}}function P(f,g){if(1&f&&t._UZ(0,"div",17),2&f){const u=t.oxw();t.Q6J("innerHtml",u.exampleData.description,t.oJD)}}function O(f,g){}let V=(()=>{class f{constructor(u,v,L){this.snackbar=u,this.copier=v,this.componentFactoryResolver=L,this.showSource=!1}ngOnInit(){const u=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(u)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(u){this.copier.copyText(u.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}return f.\u0275fac=function(u){return new(u||f)(t.Y36(p.ux),t.Y36(d.u),t.Y36(t._Vd))},f.\u0275cmp=t.Xpm({type:f,selectors:[["example-viewer"]],viewQuery:function(u,v){if(1&u&&t.Gf(x,7,t.s_b),2&u){let L;t.iGM(L=t.CRH())&&(v.demoRef=L.first)}},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(u,v){1&u&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"span"),t._uU(3),t.qZA(),t._UZ(4,"div",2),t.TgZ(5,"button",3),t.NdJ("click",function(){return v.toggleSourceView()}),t.TgZ(6,"mat-icon"),t._uU(7,"code"),t.qZA(),t.qZA(),t.qZA(),t.YNc(8,M,3,1,"div",4),t.TgZ(9,"div",5),t.YNc(10,P,1,1,"div",6),t.YNc(11,O,0,0,"ng-template",null,7,t.W1O),t.qZA(),t.qZA()),2&u&&(t.xp6(3),t.Oqu(v.exampleData.title),t.xp6(2),t.Q6J("matTooltip","View source"),t.xp6(3),t.Q6J("ngIf",v.showSource),t.xp6(2),t.Q6J("ngIf",v.exampleData.description))},directives:[C.lW,m.gM,c.Hw,b.O5,h.SP,b.sg,h.uX],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),f})()},84218:(E,_,l)=>{l.d(_,{Zw:()=>g,aw:()=>G,sK:()=>K});var t=l(5e3),p=l(39646),d=l(45191),C=l(4128),m=l(97272),c=l(49770),b=l(77579),h=l(26063);class x extends b.x{constructor(i=1/0,e=1/0,n=h.l){super(),this._bufferSize=i,this._windowTime=e,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,e)}next(i){const{isStopped:e,_buffer:n,_infiniteTimeWindow:s,_timestampProvider:r,_windowTime:o}=this;e||(n.push(i),!s&&n.push(r.now()+o)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(i),{_infiniteTimeWindow:n,_buffer:s}=this,r=s.slice();for(let o=0;o<r.length&&!i.closed;o+=n?1:2)i.next(r[o]);return this._checkFinalizedStatuses(i),e}_trimBuffer(){const{_bufferSize:i,_timestampProvider:e,_buffer:n,_infiniteTimeWindow:s}=this,r=(s?1:2)*i;if(i<1/0&&r<n.length&&n.splice(0,n.length-r),!s){const o=e.now();let y=0;for(let T=1;T<n.length&&n[T]<=o;T+=2)y=T;y&&n.splice(0,y+1)}}}var F=l(13099);function M(a,i,e){var n,s;let r,o=!1;return a&&"object"==typeof a?(r=null!==(n=a.bufferSize)&&void 0!==n?n:1/0,i=null!==(s=a.windowTime)&&void 0!==s?s:1/0,o=!!a.refCount,e=a.scheduler):r=null!=a?a:1/0,(0,F.B)({connector:()=>new x(r,i,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:o})}var P=l(95698),O=l(54004),V=l(24351),f=l(63900);class g{}let u=(()=>{class a extends g{getTranslation(e){return(0,p.of)({})}}return a.\u0275fac=function(){let i;return function(n){return(i||(i=t.n5z(a)))(n||a)}}(),a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})();class v{}let L=(()=>{class a{handle(e){return e.key}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})();function D(a){return null!=a}function R(a){return a&&"object"==typeof a&&!Array.isArray(a)}function N(a,i){let e=Object.assign({},a);return R(a)&&R(i)&&Object.keys(i).forEach(n=>{R(i[n])?n in a?e[n]=N(a[n],i[n]):Object.assign(e,{[n]:i[n]}):Object.assign(e,{[n]:i[n]})}),e}class A{}let q=(()=>{class a extends A{constructor(){super(...arguments),this.templateMatcher=/{{\s?([^{}\s]*)\s?}}/g}interpolate(e,n){let s;return s="string"==typeof e?this.interpolateString(e,n):"function"==typeof e?this.interpolateFunction(e,n):e,s}getValue(e,n){let s="string"==typeof n?n.split("."):[n];n="";do{n+=s.shift(),!D(e)||!D(e[n])||"object"!=typeof e[n]&&s.length?s.length?n+=".":e=void 0:(e=e[n],n="")}while(s.length);return e}interpolateFunction(e,n){return e(n)}interpolateString(e,n){return n?e.replace(this.templateMatcher,(s,r)=>{let o=this.getValue(n,r);return D(o)?o:s}):e}}return a.\u0275fac=function(){let i;return function(n){return(i||(i=t.n5z(a)))(n||a)}}(),a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})();class S{}let J=(()=>{class a extends S{compile(e,n){return e}compileTranslations(e,n){return e}}return a.\u0275fac=function(){let i;return function(n){return(i||(i=t.n5z(a)))(n||a)}}(),a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})();class z{constructor(){this.currentLang=this.defaultLang,this.translations={},this.langs=[],this.onTranslationChange=new t.vpe,this.onLangChange=new t.vpe,this.onDefaultLangChange=new t.vpe}}const U=new t.OlP("USE_STORE"),j=new t.OlP("USE_DEFAULT_LANG"),I=new t.OlP("DEFAULT_LANGUAGE"),H=new t.OlP("USE_EXTEND");let K=(()=>{class a{constructor(e,n,s,r,o,y=!0,T=!1,w=!1,k){this.store=e,this.currentLoader=n,this.compiler=s,this.parser=r,this.missingTranslationHandler=o,this.useDefaultLang=y,this.isolate=T,this.extend=w,this.pending=!1,this._onTranslationChange=new t.vpe,this._onLangChange=new t.vpe,this._onDefaultLangChange=new t.vpe,this._langs=[],this._translations={},this._translationRequests={},k&&this.setDefaultLang(k)}get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(e){this.isolate?this._defaultLang=e:this.store.defaultLang=e}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(e){this.isolate?this._currentLang=e:this.store.currentLang=e}get langs(){return this.isolate?this._langs:this.store.langs}set langs(e){this.isolate?this._langs=e:this.store.langs=e}get translations(){return this.isolate?this._translations:this.store.translations}set translations(e){this.isolate?this._translations=e:this.store.translations=e}setDefaultLang(e){if(e===this.defaultLang)return;let n=this.retrieveTranslations(e);void 0!==n?(null==this.defaultLang&&(this.defaultLang=e),n.pipe((0,P.q)(1)).subscribe(s=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(e===this.currentLang)return(0,p.of)(this.translations[e]);let n=this.retrieveTranslations(e);return void 0!==n?(this.currentLang||(this.currentLang=e),n.pipe((0,P.q)(1)).subscribe(s=>{this.changeLang(e)}),n):(this.changeLang(e),(0,p.of)(this.translations[e]))}retrieveTranslations(e){let n;return(void 0===this.translations[e]||this.extend)&&(this._translationRequests[e]=this._translationRequests[e]||this.getTranslation(e),n=this._translationRequests[e]),n}getTranslation(e){this.pending=!0;const n=this.currentLoader.getTranslation(e).pipe(M(1),(0,P.q)(1));return this.loadingTranslations=n.pipe((0,O.U)(s=>this.compiler.compileTranslations(s,e)),M(1),(0,P.q)(1)),this.loadingTranslations.subscribe({next:s=>{this.translations[e]=this.extend&&this.translations[e]?Object.assign(Object.assign({},s),this.translations[e]):s,this.updateLangs(),this.pending=!1},error:s=>{this.pending=!1}}),n}setTranslation(e,n,s=!1){n=this.compiler.compileTranslations(n,e),this.translations[e]=(s||this.extend)&&this.translations[e]?N(this.translations[e],n):n,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){e.forEach(n=>{-1===this.langs.indexOf(n)&&this.langs.push(n)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(e,n,s){let r;if(n instanceof Array){let o={},y=!1;for(let T of n)o[T]=this.getParsedResult(e,T,s),(0,d.b)(o[T])&&(y=!0);if(y){const T=n.map(w=>(0,d.b)(o[w])?o[w]:(0,p.of)(o[w]));return(0,C.D)(T).pipe((0,O.U)(w=>{let k={};return w.forEach((W,Q)=>{k[n[Q]]=W}),k}))}return o}if(e&&(r=this.parser.interpolate(this.parser.getValue(e,n),s)),void 0===r&&null!=this.defaultLang&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(r=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],n),s)),void 0===r){let o={key:n,translateService:this};void 0!==s&&(o.interpolateParams=s),r=this.missingTranslationHandler.handle(o)}return void 0!==r?r:n}get(e,n){if(!D(e)||!e.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe((0,V.b)(s=>(s=this.getParsedResult(s,e,n),(0,d.b)(s)?s:(0,p.of)(s))));{let s=this.getParsedResult(this.translations[this.currentLang],e,n);return(0,d.b)(s)?s:(0,p.of)(s)}}getStreamOnTranslationChange(e,n){if(!D(e)||!e.length)throw new Error('Parameter "key" required');return(0,m.z)((0,c.P)(()=>this.get(e,n)),this.onTranslationChange.pipe((0,f.w)(s=>{const r=this.getParsedResult(s.translations,e,n);return"function"==typeof r.subscribe?r:(0,p.of)(r)})))}stream(e,n){if(!D(e)||!e.length)throw new Error('Parameter "key" required');return(0,m.z)((0,c.P)(()=>this.get(e,n)),this.onLangChange.pipe((0,f.w)(s=>{const r=this.getParsedResult(s.translations,e,n);return(0,d.b)(r)?r:(0,p.of)(r)})))}instant(e,n){if(!D(e)||!e.length)throw new Error('Parameter "key" required');let s=this.getParsedResult(this.translations[this.currentLang],e,n);if((0,d.b)(s)){if(e instanceof Array){let r={};return e.forEach((o,y)=>{r[e[y]]=e[y]}),r}return e}return s}set(e,n,s=this.currentLang){this.translations[s][e]=this.compiler.compile(n,s),this.updateLangs(),this.onTranslationChange.emit({lang:s,translations:this.translations[s]})}changeLang(e){this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),null==this.defaultLang&&this.changeDefaultLang(e)}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.getTranslation(e)}resetLang(e){this._translationRequests[e]=void 0,this.translations[e]=void 0}getBrowserLang(){if("undefined"==typeof window||void 0===window.navigator)return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,void 0!==e?(-1!==e.indexOf("-")&&(e=e.split("-")[0]),-1!==e.indexOf("_")&&(e=e.split("_")[0]),e):void 0}getBrowserCultureLang(){if("undefined"==typeof window||void 0===window.navigator)return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,e}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(z),t.LFG(g),t.LFG(S),t.LFG(A),t.LFG(v),t.LFG(j),t.LFG(U),t.LFG(H),t.LFG(I))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac}),a})(),G=(()=>{class a{static forRoot(e={}){return{ngModule:a,providers:[e.loader||{provide:g,useClass:u},e.compiler||{provide:S,useClass:J},e.parser||{provide:A,useClass:q},e.missingTranslationHandler||{provide:v,useClass:L},z,{provide:U,useValue:e.isolate},{provide:j,useValue:e.useDefaultLang},{provide:H,useValue:e.extend},{provide:I,useValue:e.defaultLanguage},K]}}static forChild(e={}){return{ngModule:a,providers:[e.loader||{provide:g,useClass:u},e.compiler||{provide:S,useClass:J},e.parser||{provide:A,useClass:q},e.missingTranslationHandler||{provide:v,useClass:L},{provide:U,useValue:e.isolate},{provide:j,useValue:e.useDefaultLang},{provide:H,useValue:e.extend},{provide:I,useValue:e.defaultLanguage},K]}}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({}),a})()},80040:(E,_,l)=>{l.d(_,{w:()=>t});class t{constructor(d,C="/assets/i18n/",m=".json"){this.http=d,this.prefix=C,this.suffix=m}getTranslation(d){return this.http.get(`${this.prefix}${d}${this.suffix}`)}}}}]);