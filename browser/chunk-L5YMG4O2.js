import{D as w,a as G,e as J}from"./chunk-CWS7CC46.js";import{D as N,H as T,K as b,Lb as Y,Na as d,P as L,Sa as m,U as v,X as M,Y as O,_ as E,_b as q,aa as g,ba as x,cb as z,da as D,ea as P,f as y,fa as U,fc as F,hb as k,kb as W,lb as $,o as f,p as R,s as u,sa as H,ua as I,va as j,y as A,yb as B,zb as V}from"./chunk-OPQ4FWMC.js";var nt=["*"],S;function it(){if(S===void 0&&(S=null,typeof window<"u")){let r=window;r.trustedTypes!==void 0&&(S=r.trustedTypes.createPolicy("angular#components",{createHTML:s=>s}))}return S}function _(r){return it()?.createHTML(r)||r}function K(r){return Error(`Unable to find icon with the name "${r}"`)}function ot(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function Q(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function X(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}var a=class{constructor(s,et,t){this.url=s,this.svgText=et,this.options=t}},rt=(()=>{let s=class s{constructor(t,e,n,i){this._httpClient=t,this._sanitizer=e,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,i){return this._addSvgIconConfig(t,e,new a(n,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,i){let o=this._sanitizer.sanitize(d.HTML,n);if(!o)throw X(n);let c=_(o);return this._addSvgIconConfig(t,e,new a("",c,i))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new a(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let i=this._sanitizer.sanitize(d.HTML,e);if(!i)throw X(e);let o=_(i);return this._addSvgIconSetConfig(t,new a("",o,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(d.RESOURCE_URL,t);if(!e)throw Q(t);let n=this._cachedIconsByUrl.get(e);return n?f(C(n)):this._loadSvgIconFromConfig(new a(t,null)).pipe(v(i=>this._cachedIconsByUrl.set(e,i)),u(i=>C(i)))}getNamedSvgIcon(t,e=""){let n=Z(e,t),i=this._svgIconConfigs.get(n);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(e,t),i)return this._svgIconConfigs.set(n,i),this._getSvgFromConfig(i);let o=this._iconSetConfigs.get(e);return o?this._getSvgFromIconSetConfigs(t,o):R(K(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?f(C(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(u(e=>C(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return f(n);let i=e.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(N(c=>{let h=`Loading icon set URL: ${this._sanitizer.sanitize(d.RESOURCE_URL,o.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(h)),f(null)})));return A(i).pipe(u(()=>{let o=this._extractIconWithNameFromAnySet(t,e);if(!o)throw K(t);return o}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){let o=this._svgElementFromConfig(i),c=this._extractSvgIconFromSet(o,t,i.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(v(e=>t.svgText=e),u(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?f(null):this._fetchIcon(t).pipe(v(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let i=t.querySelector(`[id="${e}"]`);if(!i)return null;let o=i.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,n);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),n);let c=this._svgElementFromString(_("<svg></svg>"));return c.appendChild(o),this._setSvgAttributes(c,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(_("<svg></svg>")),n=t.attributes;for(let i=0;i<n.length;i++){let{name:o,value:c}=n[i];o!=="id"&&e.setAttribute(o,c)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[i].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,i=n?.withCredentials??!1;if(!this._httpClient)throw ot();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let o=this._sanitizer.sanitize(d.RESOURCE_URL,e);if(!o)throw Q(e);let c=this._inProgressUrlFetches.get(o);if(c)return c;let l=this._httpClient.get(o,{responseType:"text",withCredentials:i}).pipe(u(h=>_(h)),b(()=>this._inProgressUrlFetches.delete(o)),L());return this._inProgressUrlFetches.set(o,l),l}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(Z(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let i=this._resolvers[n](e,t);if(i)return st(i)?new a(i.url,null,i.options):new a(i,null)}}};s.\u0275fac=function(e){return new(e||s)(g(G,8),g(J),g(F,8),g(I))},s.\u0275prov=M({token:s,factory:s.\u0275fac,providedIn:"root"});let r=s;return r})();function C(r){return r.cloneNode(!0)}function Z(r,s){return r+":"+s}function st(r){return!!(r.url&&r.options)}var ct=new E("MAT_ICON_DEFAULT_OPTIONS"),at=new E("mat-icon-location",{providedIn:"root",factory:lt});function lt(){let r=x(F),s=r?r.location:null;return{getPathname:()=>s?s.pathname+s.search:""}}var tt=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ht=tt.map(r=>`[${r}]`).join(", "),ft=/^url\(['"]?#(.*?)['"]?\)$/,bt=(()=>{let s=class s{get color(){return this._color||this._defaultColor}set color(t){this._color=t}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}constructor(t,e,n,i,o,c){this._elementRef=t,this._iconRegistry=e,this._location=i,this._errorHandler=o,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=y.EMPTY,c&&(c.color&&(this.color=this._defaultColor=c.color),c.fontSet&&(this.fontSet=c.fontSet)),n||t.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,i)=>{n.forEach(o=>{i.setAttribute(o.name,`url('${t}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(ht),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<e.length;i++)tt.forEach(o=>{let c=e[i],l=c.getAttribute(o),h=l?l.match(ft):null;if(h){let p=n.get(c);p||(p=[],n.set(c,p)),p.push({name:o,value:h[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(T(1)).subscribe(i=>this._setSvgElement(i),i=>{let o=`Error retrieving icon ${e}:${n}! ${i.message}`;this._errorHandler.handleError(new Error(o))})}}};s.\u0275fac=function(e){return new(e||s)(m(j),m(rt),H("aria-hidden"),m(at),m(I),m(ct,8))},s.\u0275cmp=P({type:s,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&(k("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),$(n.color?"mat-"+n.color:""),W("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[D.HasDecoratorInputTransform,"inline","inline",q],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[z,Y],ngContentSelectors:nt,decls:1,vars:0,template:function(e,n){e&1&&(B(),V(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});let r=s;return r})(),Lt=(()=>{let s=class s{};s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=U({type:s}),s.\u0275inj=O({imports:[w,w]});let r=s;return r})();export{bt as a,Lt as b};
