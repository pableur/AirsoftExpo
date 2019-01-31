if (self.CavalryLogger) { CavalryLogger.start_js(["HwHxm"]); }

__d("FBModalHideOnWrapperClick",["csx","CSS","DOM","Event","requestAnimationFrame"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a){"use strict";this._layer=a,this._subscriptions=null,this._onBlur=null}a.prototype.enable=function(){"use strict";this._subscriptions=[this._layer.subscribe("show",this._attach.bind(this)),this._layer.subscribe("hide",this._detach.bind(this))],this._layer.isShown()&&this._attach()};a.prototype.disable=function(){"use strict";this._detach();while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null};a.prototype._detach=function(){"use strict";this._onClick&&this._onClick.remove(),this._onClick=null};a.prototype._attach=function(){"use strict";var a=b("DOM").scry(this._layer.getContentRoot(),"._4ra7")[0];a&&(this._onClick=b("Event").listen(a,"click",function(a){return b("requestAnimationFrame")(function(){if(b("CSS").matchesSelector(a.target,"._4ra7")){this._layer.hide();return!1}}.bind(this))}.bind(this)))};e.exports=a}),null);
__d("FBModal.react",["cx","Arbiter","Event","EventListener","FBModalHideOnWrapperClick","JSXDOM","Layer","LayerAutoFocus","LayerFadeOnShow","LayerFormHooks","LayerHideOnEscape","LayerHideOnTransition","LayerRefocusOnHide","LayerTabIsolation","LayerTogglerContext","ModalLayer","React","ReactDOM","ReactLayer","Run"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i;a=b("React").PropTypes;h=babelHelpers.inherits(j,b("Layer"));i=h&&h.prototype;j.prototype._configure=function(a,b){i._configure.call(this,a,b);return this};j.prototype._getDefaultBehaviors=function(){return i._getDefaultBehaviors.call(this).concat([k,b("ModalLayer"),b("LayerAutoFocus"),b("LayerFadeOnShow"),b("FBModalHideOnWrapperClick"),b("LayerFormHooks"),b("LayerHideOnEscape"),b("LayerHideOnTransition"),b("LayerRefocusOnHide"),b("LayerTabIsolation"),b("LayerTogglerContext")])};j.prototype._buildWrapper=function(a,c){this._innerContent=b("JSXDOM").div({className:"_4ra7"},c);b("EventListener").listen(this._innerContent,"scroll",function(){return window.dispatchEvent(new(b("Event"))("scroll"))});this._root=b("JSXDOM").div({className:"_5aat _4-hy",role:"dialog","aria-labelledby":a.titleID||null},this._innerContent);return this._root};j.prototype.getContentRoot=function(){return this._root};j.prototype.getInnerContent=function(){return this._innerContent};function j(){h.apply(this,arguments)}function k(a){this._layer=a,this._subscription=null}k.prototype.enable=function(){this._subscription=this._layer.subscribe(["show","hide"],function(a){a==="show"?b("Arbiter").inform("layer_shown",{type:"GenericOverlay"}):b("Arbiter").inform("layer_hidden",{type:"GenericOverlay"})}.bind(this))};k.prototype.disable=function(){this._subscription&&this._subscription.unsubscribe(),this._subscription=null};c=b("ReactLayer").createClass({displayName:"FBModal",propTypes:{behaviors:a.object,causalElement:a.object,causalElementRef:a.func,className:a.string,onHide:a.func,onShow:a.func,shown:a.bool,titleID:a.string},createLayer:function(a){var b=this.props.className;b={classNames:b?b.split(" "):null,titleID:this.props.titleID};b=new j(b,a);b.conditionShow(this.props.shown);return b},receiveProps:function(a,b){this.updateBehaviors(b.behaviors,a.behaviors),this.layer&&(this.layer.setCausalElement(this._getCausalElement()),this.layer.conditionShow(a.shown),a.shown&&this.layer.updatePosition())},_getCausalElement:function(){var a;this.props.causalElementRef?a=b("ReactDOM").findDOMNode(this.props.causalElementRef()):a=this.props.causalElement;return a},componentDidMount:function(a){this.layerSubscribe("hide",this._onHide),this.layerSubscribe("show",this._onShow),b("Run").onLeave(function(){return a&&a.hide()})},_onHide:function(){this.props.onHide&&this.props.onHide()},_onShow:function(){this.props.onShow&&this.props.onShow()}});e.exports=c}),null);
__d("FBStorySavedState",[],(function(a,b,c,d,e,f){"use strict";var g={ARCHIVED:"ARCHIVED",NOT_SAVABLE:"NOT_SAVABLE",NOT_SAVED:"NOT_SAVED",SAVED:"SAVED",isMutableState:function(a){return a===g.ARCHIVED||a===g.SAVED||a===g.NOT_SAVED}};e.exports=g}),null);
__d("FlexLayoutItem.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(i,b("React").Component);h&&h.prototype;i.prototype.render=function(){var a=this.props,c=a.align,d=a.basis,e=a.children,f=a.className,g=a.grow,h=a.order,j=a.shrink;a=a.style;c=i.flexLayoutItem({align:c,basis:d,grow:g,order:h,shrink:j,className:f,style:a});return b("React").createElement("div",c,e)};i.flexLayoutItem=function(a){a=a!==void 0?a:{};var c=a.className,d=a.order,e=a.grow,f=a.shrink,g=a.basis,h=a.align;a=a.style;d===void 0&&(d=i.defaultProps.order);e===void 0&&(e=i.defaultProps.grow);f===void 0&&(f=i.defaultProps.shrink);g===void 0&&(g=i.defaultProps.basis);h===void 0&&(h=i.defaultProps.align);return{className:b("joinClasses")((h==="auto"?"_6g3g":"")+(h==="start"?" _6g3m":"")+(h==="center"?" _6g3n":"")+(h==="end"?" _6g3v":"")+(h==="stretch"?" _6g3w":""),c),style:babelHelpers["extends"]({},a,{flexBasis:g,flexGrow:e,flexShrink:f,order:d})}};function i(){h.apply(this,arguments)}i.defaultProps={align:"auto",basis:"auto",grow:0,order:0,shrink:1};e.exports=i}),null);
__d("FBPaymentsCountdownTimer.react",["DateConsts","React","formatDate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("DateConsts").MS_PER_SEC;c="i:s";var i=h;d=babelHelpers.inherits(a,b("React").PureComponent);g=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={remainingTimeInMs:this.getRemainingTimeInMs()},this.updateRemainingTimeInMs=function(){var a=this.getRemainingTimeInMs();this.setState({remainingTimeInMs:a});a<=0&&(this.$1&&clearInterval(this.$1),this.props.onTimerCompleted&&this.props.onTimerCompleted())}.bind(this),b}a.prototype.componentDidMount=function(){this.updateRemainingTimeInMs(),this.$1=setInterval(this.updateRemainingTimeInMs,i)};a.prototype.componentWillUnmount=function(){this.$1&&clearInterval(this.$1)};a.prototype.getRemainingTimeInMs=function(){return Math.max(this.props.endTime-Date.now(),0)};a.prototype.formatTime=function(a,c){a=a/h;return b("formatDate")(a,c,{skipPatternLocalization:!0,utc:!0})};a.prototype.render=function(){return b("React").createElement("span",null,this.formatTime(this.state.remainingTimeInMs,this.props.dateTimeFormat))};a.defaultProps={dateTimeFormat:c};e.exports=a}),null);
__d("SharerType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ALL_MODES:"all_modes",EVENT_ONLY:"event_only",FRIEND_TIMELINE_ONLY:"friend_timeline_only",MESSAGE_ONLY:"message_only",OWN_ONLY:"own_only",PAGE_ONLY:"page_only",PAGE_VIEWER:"page_viewer",SILENT_DISCO:"silent_disco",ALL_MODES_EXCEPT_MESSENGER:"all_modes_except_messenger"})}),null);
__d("StyleSheet",["mapObject"],(function(a,b,c,d,e,f){"use strict";a={create:function(a){return b("mapObject")(a,function(a,c){return b("mapObject")(a,function(a,b){return b==="lineHeight"&&typeof a==="number"?a+"px":a})})},hairlineWidth:1};e.exports=a}),null);
__d("XEventEditDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/dialog/edit/page/",{event_id:{type:"Int",required:!0},acontext:{type:"String",required:!0},active_tab:{type:"Enum",enumType:1},focus_field:{type:"Enum",enumType:1},extra_data:{type:"String"},dialog_entry_point:{type:"Enum",defaultValue:"others",enumType:1},viewer_status:{type:"Enum",defaultValue:"admin",enumType:1},__asyncDialog:{type:"Int"}})}),null);
__d("XShareDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/share/dialog/",{app_id:{type:"Int"},caret_id:{type:"String"},collection_id:{type:"Int"},default_audience:{type:"Enum",enumType:1},default_page_target_id:{type:"Int"},default_group_target_id:{type:"Int"},default_fundraiser_target_id:{type:"FBID"},ft:{type:"HackType"},id:{type:"String"},internalextra:{type:"StringToStringMap"},internal_preview_image_id:{type:"Int"},is_throwback_post:{type:"Bool",defaultValue:!1},lock_mt:{type:"Bool",defaultValue:!1},mt:{type:"StringVector"},mtgs:{type:"StringVector"},object_id:{type:"Int"},prefill_text:{type:"String"},placeholder_text:{type:"String"},profile_id:{type:"String"},prompt_id:{type:"Int"},shared_ad_id:{type:"Int"},share_params:{type:"String"},st:{type:"String"},og_action_id:{type:"Int"},og_object_id:{type:"Int"},story_container_id:{type:"String"},civic_product_source:{type:"String"},type:{type:"Int"},url:{type:"String"},triggered_from:{type:"Enum",defaultValue:"others",enumType:1},holiday_card_source:{type:"Enum",enumType:1},parent_fbid:{type:"Int"},instant_game_entry_point_data:{type:"String"},instant_games_source:{type:"Enum",enumType:1},is_unpersisted_generic_share:{type:"Bool",defaultValue:!1}})}),null);