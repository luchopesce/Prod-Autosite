import{a as Ze,b as et,c as tt,d as it,e as V,f as nt}from"./chunk-57BDS2W4.js";import{a as yt}from"./chunk-3D3BQK4K.js";import{a as Ot,b as bt,c as Ct,d as xt}from"./chunk-FW5JSVDR.js";import{c as fe}from"./chunk-HZBFKT2H.js";import"./chunk-VIPYE6PM.js";import{B as qe,D as he,I as $e,J as Qe,K as Ge,L as $,M as Xe,N as Je,O as me,P as st,Q as lt,S as ct,T as pt,U as ut,V as dt,W as ht,Y as mt,ea as gt,fa as ft,ga as _t,i as E,ia as vt,ja as I,m as Ue,ma as G,o as Ke,q as Y,v as de,w as q,y as Ye}from"./chunk-CWS7CC46.js";import{$a as Ie,A as T,Ac as ge,B as N,Bb as re,Cb as se,Db as D,Eb as R,Fb as je,Gb as h,H as k,Hb as le,Ib as ce,J as be,Kb as pe,Lb as y,Oa as A,Pb as ze,Qb as Ne,R as H,Ra as u,S as W,Sa as s,T as F,U as B,Ua as Ae,W as Ce,Y as xe,Yb as ue,_ as ie,_a as Ee,_b as w,a as Z,b as ee,ba as we,cb as oe,da as m,ea as _,f as te,fa as Se,fc as He,ga as Me,gb as U,hb as ae,ib as d,k as S,kb as Te,kc as We,lb as ke,ma as Pe,mc as Be,na as O,nb as Fe,nc as K,o as j,oa as b,pb as De,qb as Re,rb as l,s as M,sb as c,tb as g,ub as C,uc as ot,va as ne,vc as Q,wa as P,wb as v,wc as at,x as ye,xb as x,y as Oe,yb as Ve,yc as L,z,zb as Le,zc as rt}from"./chunk-OPQ4FWMC.js";var Ut=["panel"],Kt=["*"];function Yt(o,n){if(o&1){let p=C();l(0,"div",1,0),v("@panelAnimation.done",function(t){O(p);let i=x();return b(i._animationDone.next(t))}),Le(2),c()}if(o&2){let p=n.id,e=x();ke(e._classList),Te("mat-mdc-autocomplete-visible",e.showPanel)("mat-mdc-autocomplete-hidden",!e.showPanel)("mat-primary",e._color==="primary")("mat-accent",e._color==="accent")("mat-warn",e._color==="warn"),d("id",e.id)("@panelAnimation",e.isOpen?"visible":"hidden"),ae("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby(p))}}var qt=ot("panelAnimation",[rt("void, hidden",L({opacity:0,transform:"scaleY(0.8)"})),ge(":enter, hidden => visible",[at([Q("0.03s linear",L({opacity:1})),Q("0.12s cubic-bezier(0, 0, 0.2, 1)",L({transform:"scaleY(1)"}))])]),ge(":leave, visible => hidden",[Q("0.075s linear",L({opacity:0}))])]),$t=0,_e=class{constructor(n,p){this.source=n,this.option=p}},Mt=new ie("mat-autocomplete-default-options",{providedIn:"root",factory:Qt});function Qt(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1}}var Pt=(()=>{let n=class n{get isOpen(){return this._isOpen&&this.showPanel}_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}constructor(e,t,i,a){this._changeDetectorRef=e,this._elementRef=t,this._defaults=i,this._activeOptionChanges=te.EMPTY,this._animationDone=new P,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new P,this.opened=new P,this.closed=new P,this.optionActivated=new P,this.id=`mat-autocomplete-${$t++}`,this.inertGroups=a?.SAFARI||!1,this.autoActiveFirstOption=!!i.autoActiveFirstOption,this.autoSelectActiveOption=!!i.autoSelectActiveOption,this.requireSelection=!!i.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Ye(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe(),this._animationDone.complete()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new _e(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}};n.\u0275fac=function(t){return new(t||n)(s(ue),s(ne),s(Mt),s(Ue))},n.\u0275cmp=_({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(t,i,a){if(t&1&&(re(a,$,5),re(a,Qe,5)),t&2){let r;D(r=R())&&(i.options=r),D(r=R())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&(se(Ae,7),se(Ut,5)),t&2){let a;D(a=R())&&(i.template=a.first),D(a=R())&&(i.panel=a.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[m.None,"aria-label","ariaLabel"],ariaLabelledby:[m.None,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[m.HasDecoratorInputTransform,"autoActiveFirstOption","autoActiveFirstOption",w],autoSelectActiveOption:[m.HasDecoratorInputTransform,"autoSelectActiveOption","autoSelectActiveOption",w],requireSelection:[m.HasDecoratorInputTransform,"requireSelection","requireSelection",w],panelWidth:"panelWidth",disableRipple:[m.HasDecoratorInputTransform,"disableRipple","disableRipple",w],classList:[m.None,"class","classList"],hideSingleSelectionIndicator:[m.HasDecoratorInputTransform,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",w]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],standalone:!0,features:[pe([{provide:$e,useExisting:n}]),oe,y],ngContentSelectors:Kt,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,i){t&1&&(Ve(),U(0,Yt,3,16,"ng-template"))},styles:["div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:static;border-radius:var(--mat-autocomplete-container-shape);box-shadow:var(--mat-autocomplete-container-elevation-shadow);background-color:var(--mat-autocomplete-background-color)}.cdk-high-contrast-active div.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[qt]},changeDetection:0});let o=n;return o})();var Gt={provide:st,useExisting:Ce(()=>ve),multi:!0};var At=new ie("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let o=we(V);return()=>o.scrollStrategies.reposition()}});function Xt(o){return()=>o.scrollStrategies.reposition()}var Jt={provide:At,deps:[V],useFactory:Xt},ve=(()=>{let n=class n{constructor(e,t,i,a,r,J,Rt,Vt,Lt,jt,zt){this._element=e,this._overlay=t,this._viewContainerRef=i,this._zone=a,this._changeDetectorRef=r,this._dir=Rt,this._formField=Vt,this._document=Lt,this._viewportRuler=jt,this._defaults=zt,this._componentDestroyed=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=te.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new S,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._aboveClass="mat-mdc-autocomplete-panel-above",this._overlayAttached=!1,this.optionSelections=ye(()=>{let f=this.autocomplete?this.autocomplete.options:null;return f?f.changes.pipe(H(f),W(()=>T(...f.map(Nt=>Nt.onSelectionChange)))):this._zone.onStable.pipe(k(1),W(()=>this.optionSelections))}),this._handlePanelKeydown=f=>{(f.keyCode===27&&!Y(f)||f.keyCode===38&&Y(f,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),f.stopPropagation(),f.preventDefault())},this._trackedModal=null,this._scrollStrategy=J}ngAfterViewInit(){let e=this._getWindow();typeof e<"u"&&this._zone.runOutsideAngular(()=>e.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){let e=this._getWindow();typeof e<"u"&&e.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&q(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return T(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(N(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(N(()=>this._overlayAttached)):j()).pipe(M(e=>e instanceof Ge?e:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return T(z(this._document,"click"),z(this._document,"auxclick"),z(this._document,"touchend")).pipe(N(e=>{let t=Ke(e),i=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,a=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&t!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!i||!i.contains(t))&&(!a||!a.contains(t))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(t)}))}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e.keyCode,i=Y(e);if(t===27&&!i&&e.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&t===13&&this.panelOpen&&!i)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,r=t===38||t===40;t===9||r&&!i&&this.panelOpen?this.autocomplete._keyManager.onKeydown(e):r&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(r||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,i=t.value;if(t.type==="number"&&(i=i==""?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(r=>r.selected);if(a){let r=this._getDisplayValue(a.value);i!==r&&a.deselect(!1)}}if(this._canOpen()&&this._document.activeElement===e.target){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=this._zone.onStable.pipe(k(1)),t=this.autocomplete.options.changes.pipe(B(()=>this._positionStrategy.reapplyLastPosition()),be(0));return T(e,t).pipe(W(()=>(this._zone.run(()=>{let i=this.panelOpen;this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),i!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit())}),this.panelClosingActions)),k(1)).subscribe(i=>this._setValueAndClose(i))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,i=e?e.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),t._emitSelectEvent(i),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),t._animationDone?t._animationDone.pipe(k(1)).subscribe(()=>this._onChange(null)):this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(i=>{i!==e&&i.selected&&i.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;de(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){this.autocomplete;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new tt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened()}_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=null}_getOverlayConfig(){return new it({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){let e=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,a=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}],r;this.position==="above"?r=a:this.position==="below"?r=t:r=[...t,...a],e.withPositions(r)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let i=0;i<e.options.length;i++)if(!e.options.get(i).disabled){t=i;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_getWindow(){return this._document?.defaultView||window}_scrollToOption(e){let t=this.autocomplete,i=Xe(e,t.options,t.optionGroups);if(e===0&&i===1)t._setScrollTop(0);else if(t.panel){let a=t.options.toArray()[e];if(a){let r=a._getHostElement(),J=Je(r.offsetTop,r.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(J)}}}_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=this.autocomplete.id;this._trackedModal&&q(this._trackedModal,"aria-owns",t),de(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;q(this._trackedModal,"aria-owns",e),this._trackedModal=null}}};n.\u0275fac=function(t){return new(t||n)(s(ne),s(V),s(Ie),s(Ee),s(ue),s(At),s(qe,8),s(_t,9),s(He,8),s(Ze),s(Mt,8))},n.\u0275dir=Me({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,i){t&1&&v("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(r){return i._handleInput(r)})("keydown",function(r){return i._handleKeydown(r)})("click",function(){return i._handleClick()}),t&2&&ae("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-controls",i.autocompleteDisabled||!i.panelOpen||i.autocomplete==null?null:i.autocomplete.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[m.None,"matAutocomplete","autocomplete"],position:[m.None,"matAutocompletePosition","position"],connectedTo:[m.None,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[m.None,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[m.HasDecoratorInputTransform,"matAutocompleteDisabled","autocompleteDisabled",w]},exportAs:["matAutocompleteTrigger"],standalone:!0,features:[pe([Gt]),oe,Pe]});let o=n;return o})(),Et=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=Se({type:n}),n.\u0275inj=xe({providers:[Jt],imports:[nt,me,he,K,et,me,he]});let o=n;return o})();function ei(o,n){if(o&1){let p=C();l(0,"mat-option",5)(1,"div",7),v("click",function(){let t=O(p).$implicit,i=x();return b(i.goToDetail(t))}),g(2,"img",8),l(3,"span"),h(4),c(),h(5," | "),l(6,"small"),h(7),c()()()}if(o&2){let p=n.$implicit;d("value",p.marca),u(2),d("src",p.img,A),u(2),ce("Marca: ",p.marca,""),u(3),ce("Kilometros: ",p.kilometraje,"")}}var kt=(()=>{let n=class n{constructor(e,t,i){this.router=e,this.apiService=t,this.urlBuilderService=i,this.products=[],this.control=new dt("")}ngOnInit(){this.filteredProducts=this.control.valueChanges.pipe(H(""),M(e=>this._filter(e||"")))}search(){this.urlBuilderService.buildUrlWithQueryParams("products/vehicles",{search:this.control.value})}goToDetail(e){this.apiService.selectProduct(e),this.router.navigate([`/detail/vehicle/${e.id}`])}_filter(e){let t=this._normalizeValue(e);return this.products.filter(i=>this._normalizeValue(i.marca).includes(t))}_normalizeValue(e){return e.toLowerCase().replace(/\s/g,"")}};n.\u0275fac=function(t){return new(t||n)(s(E),s(I),s(yt))},n.\u0275cmp=_({type:n,selectors:[["app-search-bar"]],inputs:{products:"products"},standalone:!0,features:[y],decls:11,vars:4,consts:[["auto","matAutocomplete"],["action","",1,"search-bar-container-button"],[1,"input-container-button"],["type","text","placeholder","Escrib\xED la marca, modelo del veh\xEDculo",1,"input-with-svg-button",3,"formControl","matAutocomplete"],["src","../../../../assets/lupa.svg","alt","",1,"input-svg"],[3,"value"],[1,"search-button",3,"click"],[3,"click"],["alt","","height","25",1,"example-option-img",3,"src"]],template:function(t,i){if(t&1){let a=C();l(0,"form",1)(1,"div",2),g(2,"input",3)(3,"img",4),c(),l(4,"mat-autocomplete",null,0),De(6,ei,8,4,"mat-option",5,Fe),ze(8,"async"),c(),l(9,"button",6),v("click",function(){return O(a),b(i.search())}),h(10,"Buscar"),c()()}if(t&2){let a=je(5);u(2),d("formControl",i.control)("matAutocomplete",a),u(4),Re(Ne(8,2,i.filteredProducts))}},dependencies:[gt,ht,lt,ct,pt,ut,Et,Pt,$,ve,ft,mt,Be],styles:['@charset "UTF-8";.search-bar-container-button[_ngcontent-%COMP%]{width:100%;display:flex;gap:10px}.example-option-img[_ngcontent-%COMP%]{vertical-align:middle;margin-right:8px}[dir=rtl][_ngcontent-%COMP%]   .example-option-img[_ngcontent-%COMP%]{margin-right:0;margin-left:8px}.input-container-button[_ngcontent-%COMP%]{position:relative;display:inline-block;width:100%}.input-with-svg-button[_ngcontent-%COMP%]{padding-left:42px;width:556px;height:48px;border-radius:8px}.search-bar-container[_ngcontent-%COMP%]{width:100%;display:flex;gap:10px}.input-container[_ngcontent-%COMP%]{position:relative;display:inline-block;width:100%}.input-with-svg[_ngcontent-%COMP%]{padding-left:30px;width:556px;height:48px;border-radius:8px}.input-svg[_ngcontent-%COMP%]{position:absolute;left:12px;top:50%;transform:translateY(-50%)}.filter-svg[_ngcontent-%COMP%]{position:absolute;right:10px;top:35%;transform:translate(-50%);display:none}input[_ngcontent-%COMP%]:focus{outline:none}input[_ngcontent-%COMP%]{width:100%;padding:14px 12px;border-radius:4px;border:1px solid #d9d9d9;opacity:0px}@media (max-width: 600px){.input-with-svg[_ngcontent-%COMP%]{width:300px}.input-with-svg-button[_ngcontent-%COMP%]{width:280px}.filter-svg[_ngcontent-%COMP%]{display:flex}}@media (min-width: 600px) and (max-width: 900px){.input-with-svg[_ngcontent-%COMP%]{width:100%}.input-with-svg-button[_ngcontent-%COMP%]{width:420px}.filter-svg[_ngcontent-%COMP%]{display:flex}}@media (min-width: 900px){.input-with-svg[_ngcontent-%COMP%]{width:100%}}']});let o=n;return o})();var Ft=(()=>{let n=class n{constructor(e,t,i){this.apiService=e,this.errorHandlerService=t,this.utilsService=i,this.destroy$=new S,this.whatsApp=""}ngOnInit(){this.getContact()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getContact(){this.apiService.getContactInfo("Whatsapp").pipe(B({next:e=>{if(e&&e.length>0&&e[0].Valor&&typeof e[0].Valor=="string"){let t=this.utilsService.formatWhatsAppNumber(e[0].Valor);this.whatsApp=`https://wa.me/${t}`}},error:e=>(this.errorHandlerService.handleError(e,"Error al obtener la informaci\xF3n de WhatsApp"),j([]))}),F(this.destroy$)).subscribe()}};n.\u0275fac=function(t){return new(t||n)(s(I),s(G),s(vt))},n.\u0275cmp=_({type:n,selectors:[["app-banner"]],standalone:!0,features:[y],decls:10,vars:1,consts:[[1,"banner-container"],[1,"banner-image"],[1,"banner-text"],["target","_blank","rel","noopener noreferrer",3,"href"],[1,"button-text"],["src","../../../../assets/icon-whatsapp.svg","alt","WhatsApp",1,"image-shadow"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"p"),h(4,"Hacemos la diferencia"),c(),l(5,"button")(6,"a",3)(7,"span",4),h(8,"Contactanos por WhatsApp "),g(9,"img",5),c()()()()()()),t&2&&(u(6),d("href",i.whatsApp,A))},styles:['.banner-container[_ngcontent-%COMP%]{width:100%}.banner-image[_ngcontent-%COMP%]{width:100%;height:20.2rem;background-image:linear-gradient(to bottom right,rgb(5,5,5),transparent),url("./media/nik-shuliahin-pGwXiFyB7JE-unsplash 1-C5LPIFCT.png");background-size:cover;filter:drop-shadow(0px 10px 20px rgba(0,0,0,.1))}.banner-text[_ngcontent-%COMP%]{color:#fff;width:100%;height:100%;display:flex;flex-direction:column;align-items:start;justify-content:center;padding:3.875rem;font-size:52px;font-weight:500;line-height:56px;letter-spacing:-.02em;text-align:left}button[_ngcontent-%COMP%]{margin-top:16px}.button-text[_ngcontent-%COMP%]{font-weight:500;display:flex;gap:9px;align-items:center}@media (max-width: 600px){.banner-text[_ngcontent-%COMP%]{font-size:25px}button[_ngcontent-%COMP%]{margin-top:0}.button-text[_ngcontent-%COMP%]{font-size:12px}}']});let o=n;return o})();function ii(o,n){if(o&1){let p=C();l(0,"div",4)(1,"div",5),g(2,"img",6),l(3,"div",7)(4,"h3"),h(5),c(),l(6,"p"),h(7),c(),l(8,"button",8),v("click",function(){O(p);let t=x();return b(t.goToExplore())}),h(9,"Comenzar a explorar"),c()()()()}if(o&2){let p=n.$implicit;u(2),d("src",p.img,A),u(3),le(p.tittle),u(2),le(p.text)}}var Dt=(()=>{let n=class n{constructor(e){this.router=e,this.slides=[{img:"../../../assets/portrait.png",tittle:"Tu pr\xF3ximo auto, cada vez m\xE1s cerca",text:"En AutoSite te sub\xEDs a tu pr\xF3ximo usado, como si fuese un cero. Estamos en cada detalle, para que compres tu auto con el respaldo y la seguridad que busc\xE1s."},{img:"../../../assets/slide-1.jpg",tittle:"Conoc\xE9 los mejores planes para llegar a tu 0km",text:"En AutoSite tenemos distintas opciones para cada usuario. Entr\xE1, busc\xE1 el auto que prefieras y contactate de manera directa con nosotros."},{img:"../../../assets/slide-2.png",tittle:"Animate a sumarle kil\xF3metros",text:"\xA1Te aseguramos la mejor experiencia!"}],this.slideConfig={slidesToShow:1,slideToScroll:3,autoplay:!0,autoPlaySpeed:5e3,infinite:!0,arrows:!1}}goToExplore(){this.router.navigate(["/products/vehicles"])}};n.\u0275fac=function(t){return new(t||n)(s(E))},n.\u0275cmp=_({type:n,selectors:[["app-carousel-home"]],standalone:!0,features:[y],decls:4,vars:2,consts:[["slickModal","slick-carousel"],[1,"carousel-container"],[1,"carousel",3,"config"],["ngxSlickItem","","class","slide",4,"ngFor","ngForOf"],["ngxSlickItem","",1,"slide"],[1,"carrousel-container"],["alt","image","width","100%",3,"src"],[1,"carrousel-text"],[3,"click"]],template:function(t,i){t&1&&(l(0,"div",1)(1,"ngx-slick-carousel",2,0),U(3,ii,10,3,"div",3),c()()),t&2&&(u(),d("config",i.slideConfig),u(2),d("ngForOf",i.slides))},dependencies:[Ct,Ot,bt,K,We],styles:[".carousel-container[_ngcontent-%COMP%]{height:645px}.slick-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:645px;object-fit:cover}.carrousel-container[_ngcontent-%COMP%]{position:relative}.carrousel-text[_ngcontent-%COMP%]{position:absolute;padding:75px 60px;top:0;left:0;width:100%;text-align:center;color:#fff;z-index:10;font-family:inter}.carrousel-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:left;width:818px;padding:0 0 12px 20px;font-weight:500;font-size:3.5rem;line-height:56px;letter-spacing:-2%}.carrousel-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 0 12px 20px;width:751px;font-size:16px;font-weight:500;line-height:24px;text-align:left}.carrousel-text[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;display:flex;font-family:inter;background-color:#5dc1b9;border-radius:4px;padding:12px,0px,12px,0px;width:251px;height:48px;justify-content:center;align-items:center;margin-left:18px;font-size:16px;font-weight:500;line-height:24px;text-align:left}@media screen and (min-width: 800px){.carrousel-text[_ngcontent-%COMP%]{font-family:inter}.carrousel-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:52px;font-weight:500}.carrousel-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;font-weight:600}}@media screen and (max-width: 800px){.slick-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .carousel-container[_ngcontent-%COMP%]{height:468px}.carrousel-text[_ngcontent-%COMP%]{padding:0;margin-top:40px;font-family:inter;font-weight:500}.carrousel-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:400px;font-size:24px;line-height:32px}.carrousel-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:350px;font-size:16px;line-height:24px}}"]});let o=n;return o})();var tn=(()=>{let n=class n{constructor(e,t,i){this.apiService=e,this.router=t,this.errorHandlerService=i,this.destroy$=new S,this.cars=[],this.newCars=[]}ngOnInit(){window.scrollTo(0,0),this.getVehicles(),this.getNewVehicles()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}exploreCatalog(){this.router.navigate(["/products/vehicles"])}getVehicles(){Oe({OKM:this.apiService.getOKMVehicles(),used:this.apiService.getUsedVehicles()}).pipe(F(this.destroy$),M(({OKM:e,used:t})=>{let i=e.data.map(r=>ee(Z({},r),{condicion:"0KM"})),a=t.data.map(r=>ee(Z({},r),{condicion:"Usado"}));return fe([...i,...a])})).subscribe({next:e=>{this.cars=e},error:e=>this.errorHandlerService.handleError(e,"Error al obtener vehiculossss")})}getNewVehicles(){this.apiService.getNewVehicles().pipe(F(this.destroy$)).subscribe({next:e=>this.newCars=fe(e.data),error:e=>this.errorHandlerService.handleError(e,"Error al obtener vehiculos")})}};n.\u0275fac=function(t){return new(t||n)(s(I),s(E),s(G))},n.\u0275cmp=_({type:n,selectors:[["app-home"]],standalone:!0,features:[y],decls:14,vars:3,consts:[[1,"home-container"],[1,"portrait-content"],[1,"search-bar-container"],[1,"text-search-bar"],[3,"products"],[3,"slides"],[1,"more-button",3,"click"],[1,"text-carousel"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1),g(2,"app-carousel-home"),c(),l(3,"div",2)(4,"h3",3),h(5,"Encontr\xE1 el veh\xEDculo que est\xE1s buscando"),c(),g(6,"app-search-bar",4),c(),g(7,"app-carousel",5),l(8,"button",6),v("click",function(){return i.exploreCatalog()}),h(9," Explorar cat\xE1logo "),c(),g(10,"app-banner"),l(11,"h3",7),h(12,"Veh\xEDculos pr\xF3ximos a ingresar"),c(),g(13,"app-carousel",5),c()),t&2&&(u(6),d("products",i.cars),u(),d("slides",i.cars),u(6),d("slides",i.newCars))},dependencies:[kt,Ft,xt,Dt],styles:['@charset "UTF-8";.home-container[_ngcontent-%COMP%]{background-color:#fff;width:100%;display:flex;flex-direction:column;justify-content:space-evenly}.search-bar-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center;row-gap:20px;justify-items:center}.text-search-bar[_ngcontent-%COMP%]{font-size:32px;font-weight:500;line-height:40px;letter-spacing:-.02em;text-align:left;margin-top:40px;font-family:Inter}.text-carousel[_ngcontent-%COMP%]{font-size:32px;font-weight:500;line-height:40px;letter-spacing:-.02em;align-self:center;margin-top:40px;font-family:Inter}button[_ngcontent-%COMP%]{cursor:pointer;align-self:center;width:309px;height:48px;padding:12px 12px 12px 24px;gap:9px;margin-bottom:40px;border-radius:4px;opacity:0px;font-family:inter;font-size:16px;font-weight:500;line-height:24px}.portrait-content[_ngcontent-%COMP%]{height:645px}@media (max-width: 600px){.portrait-content[_ngcontent-%COMP%]{height:468px}.text-carousel[_ngcontent-%COMP%]{font-size:24px}.text-search-bar[_ngcontent-%COMP%]{font-size:24px;text-align:center;margin-left:0}.home-portrait[_ngcontent-%COMP%]{height:468px}.home-portrait[_ngcontent-%COMP%]   .portrait-content[_ngcontent-%COMP%]{width:100%;height:100%}.home-portrait[_ngcontent-%COMP%]   .portrait-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:inter;font-size:24px;line-height:30px;font-weight:500}.home-portrait[_ngcontent-%COMP%]   .portrait-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-weight:500}}@media (min-width: 600px) and (max-width: 900px){.portrait-content[_ngcontent-%COMP%]{height:468px}h3.text-carousel[_ngcontent-%COMP%]{font-size:29px}.home-portrait[_ngcontent-%COMP%]{flex-direction:column;height:900px;align-items:center}.text-search-bar[_ngcontent-%COMP%]{font-size:24px;text-align:center;margin-left:0}}']});let o=n;return o})();export{tn as HomeComponent};
