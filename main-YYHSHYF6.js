import{b as Ae,e as te,f as Te}from"./chunk-57BDS2W4.js";import{a as Le,b as Ne}from"./chunk-EDAVWUYJ.js";import{a as ze}from"./chunk-VIPYE6PM.js";import{b as W}from"./chunk-L5YMG4O2.js";import"./chunk-XMP42F7U.js";import{A as Oe,D as E,H as Re,b as we,c as xe,d as Ee,h as ke,ia as Fe,j as H,ja as S,k as V,l as Se,ma as P,na as Y,x as Pe,z as De}from"./chunk-CWS7CC46.js";import{Ac as U,Ca as j,D as ce,Gb as u,Hb as B,Lb as g,Nb as Me,Oa as w,Ra as d,Sa as m,T as v,Ta as fe,U as me,V as de,Va as _e,Wb as ee,X as ue,Xa as ve,Y as z,Ya as be,Za as ye,_ as pe,_a as D,_b as A,ba as b,bc as Ce,cb as K,da as _,ea as h,fa as L,fc as T,ga as Z,gb as O,ia as he,ib as p,jc as Ie,k as y,ka as ge,kb as J,mb as R,nc as x,o as F,pa as N,qa as Q,rb as r,sb as s,t as se,tb as l,uc as ie,va as q,vc as $,wa as G,wb as f,y as le,yc as k,zc as ne}from"./chunk-OPQ4FWMC.js";var je=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-IXTTPEPI.js").then(n=>n.HomeComponent)},{path:"products/vehicles",loadComponent:()=>import("./chunk-IEAPKDHB.js").then(n=>n.ProductsComponent)},{path:"products/auto-parts",loadComponent:()=>import("./chunk-IEAPKDHB.js").then(n=>n.ProductsComponent)},{path:"cart",loadComponent:()=>import("./chunk-LWYZUIR3.js").then(n=>n.CartComponent)},{path:"detail/:type/:id",loadComponent:()=>import("./chunk-WEBT3EC3.js").then(n=>n.ProductDetailsComponent)},{path:"**",redirectTo:"home"}];var Je="@",et=(()=>{let e=class e{constructor(t,i,o,c,C){this.doc=t,this.delegate=i,this.zone=o,this.animationType=c,this.moduleImpl=C,this._rendererFactoryPromise=null,this.scheduler=b(_e,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-QNK4G52Z.js")).catch(i=>{throw new de(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:o})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let c=new o(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(t,i){let o=this.delegate.createRenderer(t,i);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let c=new oe(o);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(C=>{let I=C.createRenderer(t,i);c.use(I)}).catch(C=>{c.use(o)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){fe()},e.\u0275prov=ue({token:e,factory:e.\u0275fac});let n=e;return n})(),oe=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let a of this.replay)a(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,a){return this.delegate.createElement(e,a)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,a){this.delegate.appendChild(e,a)}insertBefore(e,a,t,i){this.delegate.insertBefore(e,a,t,i)}removeChild(e,a,t){this.delegate.removeChild(e,a,t)}selectRootElement(e,a){return this.delegate.selectRootElement(e,a)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,a,t,i){this.delegate.setAttribute(e,a,t,i)}removeAttribute(e,a,t){this.delegate.removeAttribute(e,a,t)}addClass(e,a){this.delegate.addClass(e,a)}removeClass(e,a){this.delegate.removeClass(e,a)}setStyle(e,a,t,i){this.delegate.setStyle(e,a,t,i)}removeStyle(e,a,t){this.delegate.removeStyle(e,a,t)}setProperty(e,a,t){this.shouldReplay(a)&&this.replay.push(i=>i.setProperty(e,a,t)),this.delegate.setProperty(e,a,t)}setValue(e,a){this.delegate.setValue(e,a)}listen(e,a,t){return this.shouldReplay(a)&&this.replay.push(i=>i.listen(e,a,t)),this.delegate.listen(e,a,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(Je)}};function ae(n="animations"){return ye("NgAsyncAnimations"),he([{provide:ve,useFactory:(e,a,t)=>new et(e,a,t,n),deps:[T,xe,D]},{provide:j,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Be={providers:[Se(je),ae(),ae(),we()]};var $e=(()=>{let e=class e{constructor(t,i){this.apiService=t,this.errorHandlerService=i,this.destroy$=new y,this.information={Whatsapp:"",Email:"",Horario:""}}ngOnInit(){this.getContactInfo()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getContactInfo(){let t=Object.keys(this.information).reduce((i,o)=>(i[o]=this.apiService.getContactInfo(o),i),{});le(t).pipe(v(this.destroy$),ce(i=>(this.errorHandlerService.handleError(i,"Error al obtener informaci\xF3n de contacto"),F({})))).subscribe(i=>{Object.keys(i).forEach(o=>{this.information[o]=i[o][0].Valor||""})})}};e.\u0275fac=function(i){return new(i||e)(m(S),m(P))},e.\u0275cmp=h({type:e,selectors:[["app-footer"]],inputs:{logo:"logo"},standalone:!0,features:[g],decls:38,vars:4,consts:[[1,"footer-container"],["alt","logo",1,"logo-img",3,"src"],[1,"navigate-links"],["routerLink","/","routerLinkActive","active"],["routerLink","/products/vehicles","routerLinkActive","active"],["routerLink","/products/auto-parts","routerLinkActive","active"],[1,"footer-contact"],["src","../../../assets/phone.svg","alt","phone"],["src","../../../assets/email.svg","alt","email"],["src","../../../assets/time.svg","alt","time"],["src","../../../assets/location.svg","alt","location"]],template:function(i,o){i&1&&(r(0,"div",0),l(1,"img",1),r(2,"div",2)(3,"ul")(4,"li")(5,"a",3),u(6,"Inicio"),s()(),r(7,"li")(8,"a",4),u(9,"Veh\xEDculos"),s()(),r(10,"li")(11,"a",5),u(12,"Repuestos"),s()()()(),r(13,"div",6)(14,"h4"),u(15,"Contacto"),s(),r(16,"ul")(17,"li"),l(18,"img",7),r(19,"p"),u(20),s()(),r(21,"li"),l(22,"img",8),r(23,"p"),u(24),s()(),r(25,"li"),l(26,"img",9),r(27,"p"),u(28," Horarios de atenci\xF3n "),l(29,"br"),r(30,"span"),u(31),s()()(),r(32,"li"),l(33,"img",10),r(34,"p"),u(35," 123, Rev Avenida Libertador,"),l(36,"br"),u(37," C\xF3rdoba Argentina "),s()()()()()),i&2&&(d(),p("src",o.logo,w),d(19),B(o.information.Whatsapp),d(4),B(o.information.Email),d(7),B(o.information.Horario))},dependencies:[W,H,V],styles:['@charset "UTF-8";.footer-container[_ngcontent-%COMP%]{width:100%;height:356px;background-color:#d4f3ee;padding:48px 60px;opacity:0px;display:flex;gap:90px}span[_ngcontent-%COMP%]{color:#0009;font-family:Inter;font-size:16px;font-weight:400;line-height:24px;text-align:left}.logo-img[_ngcontent-%COMP%]{width:190px;height:190px}li[_ngcontent-%COMP%]{display:flex;max-width:350px;align-items:center;gap:8px}ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:30px}h4[_ngcontent-%COMP%]{font-family:Inter;font-size:24px;font-weight:500;line-height:32px;letter-spacing:-.02em;text-align:left;padding:10px}@media (max-width: 600px){.footer-container[_ngcontent-%COMP%]{flex-direction:column;height:900px;align-items:center}h4[_ngcontent-%COMP%]{text-align:center}}@media (min-width: 600px) and (max-width: 900px){.footer-container[_ngcontent-%COMP%]{flex-direction:column;height:900px;align-items:center}h4[_ngcontent-%COMP%]{text-align:center}}@media (min-width: 900px){.footer-container[_ngcontent-%COMP%]{height:356px}}']});let n=e;return n})();var Ue={transformMenu:ie("transformMenu",[ne("void",k({opacity:0,transform:"scale(0.8)"})),U("void => enter",$("120ms cubic-bezier(0, 0, 0.2, 1)",k({opacity:1,transform:"scale(1)"}))),U("* => void",$("100ms 25ms linear",k({opacity:0})))]),fadeInItems:ie("fadeInItems",[ne("showing",k({opacity:1})),U("void => *",[k({opacity:0}),$("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},fi=Ue.fadeInItems,_i=Ue.transformMenu;var nt=new pe("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=b(te);return()=>n.scrollStrategies.reposition()}});function ot(n){return()=>n.scrollStrategies.reposition()}var at={provide:nt,deps:[te],useFactory:ot};var Ye=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=L({type:e}),e.\u0275inj=z({providers:[at],imports:[x,Re,E,Te,Ae,E]});let n=e;return n})();var rt=0,We="mat-badge-content",X=new Set,st=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["ng-component"]],standalone:!0,features:[g],decls:0,vars:0,template:function(i,o){},styles:[".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color);color:var(--mat-badge-text-color);font-family:var(--mat-badge-text-font);font-weight:var(--mat-badge-text-weight);border-radius:var(--mat-badge-container-shape)}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color)}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, unset);min-height:var(--mat-badge-small-size-container-size, unset);line-height:var(--mat-badge-legacy-small-size-container-size, var(--mat-badge-small-size-container-size));padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, unset);min-height:var(--mat-badge-container-size, unset);line-height:var(--mat-badge-legacy-container-size, var(--mat-badge-container-size));padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size);margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, unset);min-height:var(--mat-badge-large-size-container-size, unset);line-height:var(--mat-badge-legacy-large-size-container-size, var(--mat-badge-large-size-container-size));padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size);margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"],encapsulation:2,changeDetection:0});let n=e;return n})(),Xe=(()=>{let e=class e{get color(){return this._color}set color(t){this._setColor(t),this._color=t}get content(){return this._content}set content(t){this._updateRenderedContent(t)}get description(){return this._description}set description(t){this._updateDescription(t)}constructor(t,i,o,c,C){this._ngZone=t,this._elementRef=i,this._ariaDescriber=o,this._renderer=c,this._animationMode=C,this._color="primary",this.overlap=!0,this.position="above after",this.size="medium",this._id=rt++,this._isInitialized=!1,this._interactivityChecker=b(De),this._document=b(T);let I=b(ee);if(!X.has(I)){X.add(I);let re=Ce(st,{environmentInjector:b(ge)});I.onDestroy(()=>{X.delete(I),X.size===0&&re.destroy()})}}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),i="mat-badge-active";return t.setAttribute("id",`mat-badge-content-${this._id}`),t.setAttribute("aria-hidden","true"),t.classList.add(We),this._animationMode==="NoopAnimations"&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&this._animationMode!=="NoopAnimations"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(i)})}):t.classList.add(i),t}_updateRenderedContent(t){let i=`${t??""}`.trim();this._isInitialized&&i&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=i),this._content=i}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let i=this._elementRef.nativeElement.classList;i.remove(`mat-badge-${this._color}`),t&&i.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${We}`);for(let i of Array.from(t))i!==this._badgeElement&&i.remove()}};e.\u0275fac=function(i){return new(i||e)(m(D),m(q),m(Pe),m(be),m(j,8))},e.\u0275dir=Z({type:e,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(i,o){i&2&&J("mat-badge-overlap",o.overlap)("mat-badge-above",o.isAbove())("mat-badge-below",!o.isAbove())("mat-badge-before",!o.isAfter())("mat-badge-after",o.isAfter())("mat-badge-small",o.size==="small")("mat-badge-medium",o.size==="medium")("mat-badge-large",o.size==="large")("mat-badge-hidden",o.hidden||!o.content)("mat-badge-disabled",o.disabled)},inputs:{color:[_.None,"matBadgeColor","color"],overlap:[_.HasDecoratorInputTransform,"matBadgeOverlap","overlap",A],disabled:[_.HasDecoratorInputTransform,"matBadgeDisabled","disabled",A],position:[_.None,"matBadgePosition","position"],content:[_.None,"matBadge","content"],description:[_.None,"matBadgeDescription","description"],size:[_.None,"matBadgeSize","size"],hidden:[_.HasDecoratorInputTransform,"matBadgeHidden","hidden",A]},standalone:!0,features:[K]});let n=e;return n})(),Ze=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=L({type:e}),e.\u0275inj=z({imports:[Oe,E,E]});let n=e;return n})();var mt=n=>({"open-menu":n});function dt(n,e){n&1&&l(0,"img",10)}function ut(n,e){n&1&&l(0,"img",14)}var Qe=(()=>{let e=class e{constructor(t){this.cartService=t,this.portraitValue=new G,this.destroy$=new y,this.cart=[],this.menuOpen=!1}ngOnInit(){this.getCart()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}changeCartState(){this.cartService.cartHandler()}changePortrait(t){this.portraitValue.emit(t),this.handleMenu()}getCart(){this.cartService.cart$.pipe(v(this.destroy$)).subscribe(t=>{this.cart=t})}getCartLength(){return this.cart.reduce((t,i)=>t+i.quantity,0)}handleMenu(){this.menuOpen=!this.menuOpen}prueba(){console.log("prueba")}};e.\u0275fac=function(i){return new(i||e)(m(Y))},e.\u0275cmp=h({type:e,selectors:[["app-navigation"]],outputs:{portraitValue:"portraitValue"},standalone:!0,features:[g],decls:36,vars:6,consts:[[1,"full-nav"],["routerLink","/","routerLinkActive","active",3,"click"],["routerLink","products/vehicles","routerLinkActive","active",3,"click"],["routerLink","/products/auto-parts","routerLinkActive","active",3,"click"],[1,"icon"],[3,"click","matBadge"],["width","24","height","25","viewBox","0 0 24 25","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7 22.5C6.45 22.5 5.97917 22.3042 5.5875 21.9125C5.19583 21.5208 5 21.05 5 20.5C5 19.95 5.19583 19.4792 5.5875 19.0875C5.97917 18.6958 6.45 18.5 7 18.5C7.55 18.5 8.02083 18.6958 8.4125 19.0875C8.80417 19.4792 9 19.95 9 20.5C9 21.05 8.80417 21.5208 8.4125 21.9125C8.02083 22.3042 7.55 22.5 7 22.5ZM17 22.5C16.45 22.5 15.9792 22.3042 15.5875 21.9125C15.1958 21.5208 15 21.05 15 20.5C15 19.95 15.1958 19.4792 15.5875 19.0875C15.9792 18.6958 16.45 18.5 17 18.5C17.55 18.5 18.0208 18.6958 18.4125 19.0875C18.8042 19.4792 19 19.95 19 20.5C19 21.05 18.8042 21.5208 18.4125 21.9125C18.0208 22.3042 17.55 22.5 17 22.5ZM6.15 6.5L8.55 11.5H15.55L18.3 6.5H6.15ZM5.2 4.5H19.95C20.3333 4.5 20.625 4.67083 20.825 5.0125C21.025 5.35417 21.0333 5.7 20.85 6.05L17.3 12.45C17.1167 12.7833 16.8708 13.0417 16.5625 13.225C16.2542 13.4083 15.9167 13.5 15.55 13.5H8.1L7 15.5H19V17.5H7C6.25 17.5 5.68333 17.1708 5.3 16.5125C4.91667 15.8542 4.9 15.2 5.25 14.55L6.6 12.1L3 4.5H1V2.5H4.25L5.2 4.5Z","fill","black"],[1,"responsive-nav"],[1,"menu-button",3,"click"],["src","../../../assets/close.svg","alt","menu"],[1,"menu",3,"ngClass"],[1,"menu-content"],[1,"void",3,"click"],["src","../../../assets/menu.svg","alt","menu"]],template:function(i,o){i&1&&(r(0,"nav")(1,"ul",0)(2,"li")(3,"a",1),f("click",function(){return o.changePortrait("home-portrait")}),u(4,"Inicio"),s()(),r(5,"li")(6,"a",2),f("click",function(){return o.changePortrait("vehicles-portrait")}),u(7,"Veh\xEDculos"),s()(),r(8,"li")(9,"a",3),f("click",function(){return o.changePortrait("autopart-portrait")}),u(10,"Repuestos"),s()(),r(11,"li",4)(12,"button",5),f("click",function(){return o.changeCartState()}),N(),r(13,"svg",6),l(14,"path",7),s()()()(),Q(),r(15,"ul",8)(16,"li",4)(17,"button",5),f("click",function(){return o.changeCartState()}),N(),r(18,"svg",6),l(19,"path",7),s()()(),Q(),r(20,"li")(21,"button",9),f("click",function(){return o.handleMenu()}),O(22,dt,1,0,"img",10)(23,ut,1,0),s(),r(24,"div",11)(25,"div",12)(26,"button")(27,"a",1),f("click",function(){return o.changePortrait("home-portrait")}),u(28,"Inicio"),s()(),r(29,"button")(30,"a",2),f("click",function(){return o.changePortrait("vehicles-portrait")}),u(31,"Veh\xEDculos"),s()(),r(32,"button")(33,"a",3),f("click",function(){return o.changePortrait("auto-parts-portrait")}),u(34,"Repuestos"),s()()(),r(35,"div",13),f("click",function(){return o.handleMenu()}),s()()()()()),i&2&&(d(12),p("matBadge",o.cart.length?o.getCartLength():0),d(5),p("matBadge",o.cart.length?o.getCartLength():0),d(5),R(22,o.menuOpen?22:23),d(2),p("ngClass",Me(4,mt,o.menuOpen)))},dependencies:[H,V,ze,Ye,W,Ze,Xe,x,Ie],styles:['nav[_ngcontent-%COMP%]{flex:1;justify-content:flex-end}li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent;padding:0;cursor:pointer}.menu[_ngcontent-%COMP%]{position:absolute;flex-direction:column;z-index:50;top:100px;left:0;width:100%;display:none}img[_ngcontent-%COMP%]{height:24px;width:24px}.menu-button[_ngcontent-%COMP%]{margin-left:19px}.menu-content[_ngcontent-%COMP%]{flex-direction:column;position:absolute;z-index:50;row-gap:8px;display:flex;background-color:#fff;width:100%}.menu-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-bottom:2px solid #e7e7e7;height:52px;text-align:left;padding:16px;margin-left:20px}.menu-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Inter;font-size:14px;font-weight:500;line-height:20px;color:#000}.void[_ngcontent-%COMP%]{height:100vh;width:100%;position:fixed;z-index:40;inset:0;background-color:transparent}.open-menu[_ngcontent-%COMP%]{display:flex}.full-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Inter;font-size:16px;font-weight:500;line-height:24px;text-align:left;position:relative;overflow:hidden;padding-bottom:10px}.full-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:4px;background-color:#5dc1b9;transform:scaleX(0);transform-origin:left;transition:transform .3s ease-in-out}.full-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{transform:scaleX(1)}ul[_ngcontent-%COMP%]{display:flex;gap:2.5rem;align-items:center;justify-content:flex-end}li.icon[_ngcontent-%COMP%]{width:25px}.responsive-nav[_ngcontent-%COMP%]{display:none}@media (max-width: 600px){.full-nav[_ngcontent-%COMP%]{display:none}.responsive-nav[_ngcontent-%COMP%]{align-items:baseline;display:flex}ul[_ngcontent-%COMP%]{gap:0}li.icon[_ngcontent-%COMP%]{width:30px}}']});let n=e;return n})();var qe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["app-header"]],inputs:{logo:"logo"},standalone:!0,features:[g],decls:5,vars:1,consts:[[1,"logo"],["href","/home"],["height","100","width","110","alt","logo",3,"src"]],template:function(i,o){i&1&&(r(0,"header")(1,"div",0)(2,"a",1),l(3,"img",2),s()(),l(4,"app-navigation"),s()),i&2&&(d(3),p("src",o.logo,w))},dependencies:[Qe],styles:['@charset "UTF-8";header[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;height:100px;padding:0 3.875rem;border-bottom:2px solid #e7e7e7;z-index:100}header[_ngcontent-%COMP%]   app-navigation[_ngcontent-%COMP%]{flex:1}@media (max-width: 600px){header[_ngcontent-%COMP%]{gap:50px}}']});let n=e;return n})();var Ge=(()=>{let e=class e{constructor(t,i,o){this.apiService=t,this.errorHandlerService=i,this.utilsService=o,this.destroy$=new y,this.whatsApp=""}ngOnInit(){this.getContact()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getContact(){this.apiService.getContactInfo("Whatsapp").pipe(me({next:t=>{if(t&&t.length>0&&t[0].Valor&&typeof t[0].Valor=="string"){let i=this.utilsService.formatWhatsAppNumber(t[0].Valor);this.whatsApp=`https://wa.me/${i}`}},error:t=>(this.errorHandlerService.handleError(t,"Error al obtener la informaci\xF3n de WhatsApp"),F([]))}),v(this.destroy$)).subscribe()}};e.\u0275fac=function(i){return new(i||e)(m(S),m(P),m(Fe))},e.\u0275cmp=h({type:e,selectors:[["app-whats-app-button"]],standalone:!0,features:[g],decls:4,vars:1,consts:[[1,"whatsapp-button-container"],[1,"whatsapp-button"],["target","_blank","rel","noopener noreferrer",3,"href"],["src","../../../../assets/icon-whatsapp.svg","alt",""]],template:function(i,o){i&1&&(r(0,"div",0)(1,"div",1)(2,"a",2),l(3,"img",3),s()()()),i&2&&(d(2),p("href",o.whatsApp,w))},styles:[".whatsapp-button-container[_ngcontent-%COMP%]{position:fixed;bottom:50px;right:50px;z-index:12}.whatsapp-button[_ngcontent-%COMP%]{border-radius:50%;background-color:#d4f3ee;z-index:5;display:flex;justify-content:center;align-items:center;width:75px;height:75px;box-shadow:0 4px 4px #00000040}.whatsapp-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:4px;width:48px;height:48px}"]});let n=e;return n})();function pt(n,e){n&1&&l(0,"app-cart")}var Ke=(()=>{let e=class e{constructor(t,i,o){this.cartService=t,this.apiService=i,this.errorHandlerService=o,this.destroy$=new y,this.title="autosite"}ngOnInit(){this.cartHandler(),this.getLogo()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}cartHandler(){se([this.cartService.cartState$,this.cartService.checkoutState$]).pipe(v(this.destroy$)).subscribe(([t,i])=>{this.isOpen=t,this.checkIsOpen=i})}getLogo(){this.apiService.getContactInfo("logo_pordefecto").pipe(v(this.destroy$)).subscribe({next:t=>{this.logo=t[0].Valor},error:t=>{this.errorHandlerService.handleError(t,"Error al obtener logo")}})}};e.\u0275fac=function(i){return new(i||e)(m(Y),m(S),m(P))},e.\u0275cmp=h({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:6,vars:3,consts:[[3,"logo"]],template:function(i,o){i&1&&(l(0,"app-header",0)(1,"router-outlet"),O(2,pt,1,0,"app-cart"),l(3,"app-whats-app-button")(4,"app-checkout")(5,"app-footer",0)),i&2&&(p("logo",o.logo),d(2),R(2,o.isOpen?2:-1),d(3),p("logo",o.logo))},dependencies:[x,ke,qe,$e,Ne,Ge,Le]});let n=e;return n})();Ee(Ke,Be).catch(n=>console.error(n));