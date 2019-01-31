if (self.CavalryLogger) { CavalryLogger.start_js(["lH\/Q+"]); }

__d("AYMTGroupsMallCardFluxStore",["AYMTClientCreativeSpecField","AYMTClientCreativeSpecParamField","AYMTClientSideChannelNames","AYMTClientSpecField","AYMTGroupsDispatcher","AYMTTipActionTypes","AYMTTipsLoader","FluxReduceStore","immutable"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i=b("immutable").List,j=b("immutable").Map;c={tips:i([])};g=babelHelpers.inherits(k,b("immutable").Record(c));g&&g.prototype;function k(){"use strict";g.apply(this,arguments)}h=babelHelpers.inherits(a,b("FluxReduceStore"));h&&h.prototype;a.prototype.getInitialState=function(){"use strict";return new k()};a.prototype.$AYMTGroupsMallCardFluxStore1=function(){"use strict";return b("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_CARD_CHANNEL};a.prototype.reduce=function(a,c){"use strict";__p&&__p();switch(c.type){case b("AYMTTipActionTypes").TIPS_REQUESTED:c.channelName===this.$AYMTGroupsMallCardFluxStore1()&&b("AYMTTipsLoader").loadTips(c.data,c.channelName,b("AYMTGroupsDispatcher"));return a;case b("AYMTTipActionTypes").TIPS_LOADED:if(c.data.channelName===this.$AYMTGroupsMallCardFluxStore1()){c=c.data.tips;var d=new k();return d.merge({tips:i(c.map(function(a){__p&&__p();var c=a.client_side_rendering_spec.client_side_rendering_params,d={};d[b("AYMTClientCreativeSpecField").RENDERING_CLASS]=a.client_side_rendering_spec.client_side_rendering_class;d[b("AYMTClientSpecField").AYMT_DATA]=a.aymt_data;d[b("AYMTClientCreativeSpecParamField").ACTIONS]=c.actions;d[b("AYMTClientCreativeSpecParamField").BODY]=c.tip_body;d[b("AYMTClientCreativeSpecParamField").BUTTON_ACTION_TEXT]=c.tip_action_label;d[b("AYMTClientCreativeSpecParamField").TITLE]=c.tip_title;d[b("AYMTClientCreativeSpecParamField").IMAGE_URI]=c.tip_image_uri;d[b("AYMTClientCreativeSpecParamField").IMAGE]=c.tip_image;return j(d)}))})}return a;default:return a}};function a(){"use strict";h.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("AYMTGroupsDispatcher"))}),null);
__d("GroupsMallCardAYMTContainer.react",["AYMTActionKey","AYMTClientCreativeSpecField","AYMTClientCreativeSpecParamField","AYMTClientSideChannelNames","AYMTClientSideParam","AYMTClientSpecField","AYMTGroupsDispatcher","AYMTGroupsMallCardFluxStore","AYMTTipActionTypes","FluxContainer","immutable","React"],(function(a,b,c,d,e,f){__p&&__p();var g;b("immutable").List;b("immutable").Map;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.getStores=function(){"use strict";return[b("AYMTGroupsMallCardFluxStore")]};a.calculateState=function(){"use strict";var a=b("AYMTGroupsMallCardFluxStore").getState();a=a.tips;return{tips:a}};a.prototype.componentDidMount=function(){"use strict";var a={};a[b("AYMTClientSideParam").GROUP_ID]=this.props.groupID;b("AYMTGroupsDispatcher").dispatch({data:a,type:b("AYMTTipActionTypes").TIPS_REQUESTED,channelName:this.$1()})};a.prototype.$1=function(){"use strict";return b("AYMTClientSideChannelNames").AYMT_WWW_GROUPS_MALL_CARD_CHANNEL};a.prototype.render=function(){"use strict";__p&&__p();var a=this.state.tips;if(!a||a.count()==0)return null;a=a.get(0);var c=a.get(b("AYMTClientCreativeSpecField").RENDERING_CLASS);if(!c)return null;var d=a.get(b("AYMTClientCreativeSpecParamField").ACTIONS)[b("AYMTActionKey").PRIMARY],e=a.get(b("AYMTClientCreativeSpecParamField").ACTIONS)[b("AYMTActionKey").SECONDARY];return b("React").createElement(c,{aymtData:a.get(b("AYMTClientSpecField").AYMT_DATA),title:a.get(b("AYMTClientCreativeSpecParamField").TITLE),body:a.get(b("AYMTClientCreativeSpecParamField").BODY),image:a.get(b("AYMTClientCreativeSpecParamField").IMAGE_URI),imageElement:a.get(b("AYMTClientCreativeSpecParamField").IMAGE),primaryActionLink:d[b("AYMTClientCreativeSpecParamField").BUTTON_ACTION_LINK],primaryActionLabel:d[b("AYMTClientCreativeSpecParamField").BUTTON_ACTION_TEXT],primaryJSAction:d[b("AYMTClientCreativeSpecParamField").BUTTON_JS_ACTION],isPrimaryActionAsync:d[b("AYMTClientCreativeSpecParamField").IS_ASYNC_BUTTON_LINK],secondaryActionLink:e[b("AYMTClientCreativeSpecParamField").BUTTON_ACTION_LINK],secondaryActionLabel:e[b("AYMTClientCreativeSpecParamField").BUTTON_ACTION_TEXT],secondaryJSAction:e[b("AYMTClientCreativeSpecParamField").BUTTON_JS_ACTION],isSecondaryActionAsync:e[b("AYMTClientCreativeSpecParamField").IS_ASYNC_BUTTON_LINK]})};function a(){"use strict";g.apply(this,arguments)}e.exports=b("FluxContainer").create(a)}),null);
__d("GroupsMallCardAYMTTopLevelContainer.react",["GroupsMallCardAYMTContainer.react","React"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("GroupsMallCardAYMTContainer.react"),this.props)};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);