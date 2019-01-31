if (self.CavalryLogger) { CavalryLogger.start_js(["dtHE5"]); }

__d("SignalsAppPlatformEnum",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({ANDROID:null,IOS:null});e.exports=a}),null);
__d("SignalsAppSDKSetupUIState",["fbt","SignalsAppPlatformEnum","immutable"],(function(a,b,c,d,e,f,g){"use strict";b("immutable").List;a=b("immutable").Map;c=b("immutable").Set;d={appCategory:null,currentStep:0,preSelectedAppID:null,skipAppSelection:!1,selectedPlatforms:c([b("SignalsAppPlatformEnum").ANDROID,b("SignalsAppPlatformEnum").IOS]),selectedEventNames:c(),selectedParamsMap:a(),shouldShowPartnerIntegrationAppEventsDialog:!1,showAppEventsSetupTypeSelectorDialog:!1,showDialog:!1,showNux:!1,userFlowID:-1,setupMethod:null,showPreviewDialog:!1,selectedAdAccounts:null,extraInfo:g._("J\u2019aimerais commencer un suivi des app events dans notre application. Veuillez utiliser les instructions pas \u00e0 pas ci-dessous pour ajouter le code. N\u2019h\u00e9sitez pas \u00e0 me contacter si vous avez des questions."),onlyShowCodeless:!1};e.exports={InitState:d}}),null);
__d("SignalsAppSDKSetupUIStateStore",["SignalsAppSDKSetupUIState","SignalsUIStateStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("SignalsAppSDKSetupUIState").InitState;g=babelHelpers.inherits(a,b("SignalsUIStateStore"));g&&g.prototype;a.prototype.getInitialState=function(){return h};a.prototype.__getName=function(){return e.id};function a(){g.apply(this,arguments)}e.exports=new a()}),null);
__d("SignalsSDKSetupEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLICK:"click",ENTER_SURFACE:"enter_surface"})}),null);
__d("SignalsSDKSetupTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:SignalsSDKSetupLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:SignalsSDKSetupLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:SignalsSDKSetupLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAdAccountID=function(a){this.$1.ad_account_id=a;return this};a.prototype.setAppCategory=function(a){this.$1.app_category=a;return this};a.prototype.setAppID=function(a){this.$1.app_id=a;return this};a.prototype.setBizAccountID=function(a){this.$1.biz_account_id=a;return this};a.prototype.setComponent=function(a){this.$1.component=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setInstallMethod=function(a){this.$1.install_method=a;return this};a.prototype.setIsDefaultSelectionChanged=function(a){this.$1.is_default_selection_changed=a;return this};a.prototype.setSelectedAdAccountIds=function(a){this.$1.selected_ad_account_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setSelectedEventNames=function(a){this.$1.selected_event_names=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setSelectedPlatforms=function(a){this.$1.selected_platforms=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setUserFlowID=function(a){this.$1.user_flow_id=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={ad_account_id:!0,app_category:!0,app_id:!0,biz_account_id:!0,component:!0,event:!0,install_method:!0,is_default_selection_changed:!0,selected_ad_account_ids:!0,selected_event_names:!0,selected_platforms:!0,time:!0,user_flow_id:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("SignalsSDKSetupLogger",["SignalsAppSDKSetupUIStateStore","SignalsSDKSetupEvent","SignalsSDKSetupTypedLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){this.businessID=a,this.adAccountID=b}a.prototype.logEnterSurface=function(a){var c=b("SignalsAppSDKSetupUIStateStore").getState(),d=c.preSelectedAppID;c=c.userFlowID;new(b("SignalsSDKSetupTypedLogger"))().setAppID(d).setBizAccountID(this.businessID).setAdAccountID(this.adAccountID).setEvent(b("SignalsSDKSetupEvent").ENTER_SURFACE).setComponent(a).setUserFlowID(c).log()};a.prototype.logClick=function(a,c){var d=b("SignalsAppSDKSetupUIStateStore").getState(),e=d.preSelectedAppID;d=d.userFlowID;e=new(b("SignalsSDKSetupTypedLogger"))().setAppID(e).setBizAccountID(this.businessID).setAdAccountID(this.adAccountID).setEvent(b("SignalsSDKSetupEvent").CLICK).setUserFlowID(d).setComponent(a);c&&e.updateData(c);e.log()};e.exports=a}),null);
__d("SignalsAppSDKSetupUIStateStoreUtil",["SignalsAppSDKSetupUIStateStore","SignalsHomeAppEventsUtils","SignalsSDKSetupLogger","SimpleNUXMessage","SimpleNUXMessageTypes","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("SignalsHomeAppEventsUtils").LEARN_MORE_LINK;a.prototype.showSDKSetupDialog=function(a,c,d,e,f,h,i){if(b("gkx")("678131")){var j=Math.floor(Math.random()*1e3+1);new(b("SignalsSDKSetupLogger"))(d,c).logClick(h,{user_flow_id:j});d=e;b("SimpleNUXMessage").hasUserSeenMessage(b("SimpleNUXMessageTypes").APP_SDK_SETUP_NUX)&&(d=!1);b("SimpleNUXMessage").markMessageSeenByUser(b("SimpleNUXMessageTypes").APP_SDK_SETUP_WIZARD_OPEN);b("SignalsAppSDKSetupUIStateStore").updateStateLater({preSelectedAppID:a,showAppEventsSetupTypeSelectorDialog:!d,showNux:d,skipAppSelection:f,onlyShowCodeless:i||!1,userFlowID:j})}else window.open(g)};function a(){}e.exports=new a()}),null);
__d("CandelaSankeyFunnelNodeLinks.react",["CandelaConstants","CandelaGlobalThemeRegistry","CandelaInteractiveRect.react","CandelaPureRenderMixin","CandelaTheme","React","ReactART"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a=b("CandelaConstants").PseudoClass;var h=b("CandelaConstants").ShapeType;c=b("CandelaConstants").Style;var i=b("ReactART").Group,j=b("ReactART").Shape;d=b("React").PropTypes;f=b("React").PureComponent;b("CandelaGlobalThemeRegistry").register({type:h.SANKEY_NODE,pseudoClasses:[a.HOVER],styles:[c.FILL,c.MARGIN_BOTTOM,c.MARGIN_TOP,c.OPACITY,c.STROKE,c.STROKE_DASHARRAY,c.STROKE_WIDTH,c.WIDTH]});b("CandelaGlobalThemeRegistry").register({type:h.SANKEY_LINK,pseudoClasses:[a.HOVER],styles:[c.FILL,c.OPACITY,c.STROKE,c.STROKE_DASHARRAY,c.STROKE_WIDTH]});a=b("React").createClass({displayName:"CandelaSankeyFunnelNodeLinks",mixins:[b("CandelaPureRenderMixin")],contextTypes:{theme:d.instanceOf(b("CandelaTheme"))},propTypes:{hoverLinkKey:d.string,linkOnClick:d.func,linkOnMouseMove:d.func.isRequired,linkOnMouseOut:d.func.isRequired,linksRenderInfo:d.array.isRequired,nodesRenderInfo:d.array.isRequired},render:function(){__p&&__p();var a=this.context.theme,c=this.props,d=c.hoverLinkKey,e=c.linkOnClick,f=c.linkOnMouseMove,g=c.linkOnMouseOut,j=c.linksRenderInfo;c=c.nodesRenderInfo;var m=h.SANKEY_NODE,n=a.getStyle(m),o=a.getHoverStyle(m);m=c.map(function(a){return b("React").createElement(l,{hoverStyle:o,key:a.key,nodeRenderInfo:a,style:n})});c=j.map(function(c){var i=c.key,j=h.SANKEY_LINK+('[series="'+i+'"]');j=i===d?a.getHoverStyle(j):a.getStyle(j);return b("React").createElement(k,{key:i,linkRenderInfo:c,onClick:e,onMouseMove:f,onMouseOut:g,style:j})});return b("React").createElement(i,null,m,c)}});g=babelHelpers.inherits(k,f);g&&g.prototype;k.prototype.$1=function(a){a=this.props;var b=a.linkRenderInfo;a=a.onClick;a!=null&&a(b.key)};k.prototype.$2=function(a){var b=this.props,c=b.linkRenderInfo;b=b.onMouseMove;b(c.key,a)};k.prototype.render=function(){var a=this.props,c=a.linkRenderInfo,d=a.onMouseOut;a=a.style;var e=c.key;c=c.path;var f=a.fill,g=a.opacity,h=a.stroke,i=a.strokeDasharray;a=a.strokeWidth;return b("React").createElement(j,{d:c,fill:f,key:e,onClick:this.$1.bind(this),onMouseMove:this.$2.bind(this),onMouseOut:d,opacity:g,stroke:h,strokeDash:i,strokeWidth:a})};function k(){g.apply(this,arguments)}function l(a){var c=a.hoverStyle,d=a.nodeRenderInfo;a=a.style;var e=d.key;d=d.rect;return!d.height||!d.width?null:b("React").createElement(b("CandelaInteractiveRect.react"),babelHelpers["extends"]({},d,{hoverStyle:c,key:e,regionID:e,style:a}))}e.exports=a}),null);
__d("InsightsSankeyFunnelChart.react",["cx","CandelaChartSurface.react","CandelaConstants","CandelaGroupScaleBuilder","CandelaSankeyFunnelNodeLinks.react","CandelaTheme","immutable","Locale","React","ReactART","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("Locale").isRTL,j=b("CandelaConstants").ShapeType,k=b("CandelaGroupScaleBuilder").group,l=b("immutable").Map;c=b("immutable").OrderedSet;var m=b("immutable").Set;d=b("React").PropTypes;f=b("React").PureComponent;var n=b("ReactART").Path,o=20;g=babelHelpers.inherits(a,f);h=g&&g.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.state={mouseHoverInfo:null},b}a.prototype.$1=function(a){var b=this.props.data.find(function(b){return b.key===a});b!=null&&b.onClick!=null&&b.onClick()};a.prototype.$2=function(){this.setState({mouseHoverInfo:null})};a.prototype.$3=function(a,b){var c=b.clientX;b=b.clientY;if(c===null||c===void 0||b===null||b===void 0)return;this.setState({mouseHoverInfo:{key:a,x:c,y:b}})};a.prototype.render=function(){__p&&__p();var a=this.props,c=a.anchorRect,d=a.centerSingleNode,e=a.data,f=a.equalTotalVerticalSpacing,g=a.expandableHeight,h=a.height,n=a.minLinkHeight,o=a.nodeLabelConfigs,q=a.nodeOrderBySection,r=a.theme;a=a.width;var s=this.state.mouseHoverInfo;r.getStyle(j.CHART).padding=0;var u={section:{type:"category"}},v=k("section"),w=t(o,q.first()),x=t(o,q.last()),y=a-w-x;q=p(q,e,o,r,h,y,n,w,f,d);o=q.linksRenderInfo;n=q.nodesRenderInfo;f=q.labelsRenderInfo;d=q.expandedChartHeight;q=f.map(function(a){return b("React").createElement(C,{key:a.key,label:a})});f=s?b("React").createElement(D,{data:e,mouseHoverInfo:s}):null;x=i()?{marginRight:x}:{marginLeft:w};return b("React").createElement("div",{className:"_3b93",style:{width:a}},b("React").createElement("div",{style:x},b("React").createElement(b("CandelaChartSurface.react"),{anchorRect:c,data:e,height:g?d:h,interactive:!0,scales:m([v]),schema:l(u),theme:r,width:y},b("React").createElement(b("CandelaSankeyFunnelNodeLinks.react"),{hoverLinkKey:s?s.key:void 0,linkOnClick:this.$1.bind(this),linkOnMouseMove:this.$3.bind(this),linkOnMouseOut:this.$2.bind(this),linksRenderInfo:o,nodesRenderInfo:n}))),q,f)};a.defaultProps={expandableHeight:!1,minLinkHeight:3};a.propTypes={data:d.instanceOf(c).isRequired,equalTotalVerticalSpacing:d.bool,expandableHeight:d.bool.isRequired,height:d.number.isRequired,nodeLabelConfigs:d.array,nodeOrderBySection:d.instanceOf(c).isRequired,theme:d.instanceOf(b("CandelaTheme")).isRequired,width:d.number.isRequired};function p(a,c,d,e,f,g,h,i,k,l){__p&&__p();var m=e.getStyle(j.SANKEY_LINK);h+=m.strokeWidth;var n=new Map();a.forEach(function(a){var b=new Map();a.nodes.toIndexedSeq().forEach(function(a){b.set(a,{leftY:0,rect:{x:0,y:0,width:0,height:0},rightY:0,scaledHeightIn:0,scaledHeightOut:0,value:0,valueIn:0,valueOut:0})});n.set(a.section,{nodeCount:a.nodes.size,nodeDataMap:b,totalValue:0})});m=e.getStyle(j.SANKEY_NODE);var o=m.marginTop+m.marginBottom,p=["start","end"];c.toIndexedSeq().forEach(function(a,c){p.forEach(function(c){var d=a[c],e=b("nullthrows")(n.get(d.section)),f=b("nullthrows")(e.nodeDataMap.get(d.node));c==="start"?f.valueOut+=d.value:f.valueIn+=d.value;d=Math.max(f.valueOut,f.valueIn)-f.value;d>0&&(f.value+=d,e.totalValue+=d);e=c==="start"?"left":"right";d=f.labelOrientation;d&&d!==e&&(e="none");f.labelOrientation=e})});var s=Math.min.apply(Math,Array.from(n.values()).map(function(a){return(f-o*a.nodeCount)/a.totalValue}));c.toIndexedSeq().forEach(function(a,b){b=a.end;a=a.start;var c=w(n,a),d=w(n,b);c.scaledHeightOut+=x(a,s,h);d.scaledHeightIn+=x(b,s,h)});var t=Math.max.apply(Math,Array.from(n.values()).map(function(a){return(a.nodeCount-1)*o})),v=m.width+(g-m.width*a.size)/(a.size-1),y=[],z=[],A=f;a.toIndexedSeq().forEach(function(a,c){__p&&__p();a=a.section;var f=b("nullthrows")(n.get(a));if(f.nodeDataMap.size===1&&l)return;f=q(f,a,c,v,t,i,h,e,d,k);a=f.nodesRenderInfoForSection;c=f.labelsRenderInfoForSection;f=f.chartHeightForSection;y=y.concat(a);z=z.concat(c);A=Math.max(A,f)});l&&a.toIndexedSeq().forEach(function(a,c){__p&&__p();a=a.section;var f=b("nullthrows")(n.get(a));if(f.nodeDataMap.size!==1)return;var g=b("nullthrows")(f.nodeDataMap.values().next().value);g=Math.max(g.scaledHeightIn,g.scaledHeightOut,h);g=Math.max((A-o-g)/2,0);f=q(f,a,c,v,t,i,h,e,d,k,g);a=f.nodesRenderInfoForSection;c=f.labelsRenderInfoForSection;y=y.concat(a);z=z.concat(c)});var B=[];c.toIndexedSeq().forEach(function(a,b){__p&&__p();b=a.end;var c=a.endLinkLabel,d=a.key,e=a.start;a=a.startLinkLabel;var f=w(n,e),g=w(n,b),j={x:f.rect.x+f.rect.width,y:f.rightY},k={x:g.rect.x,y:g.leftY};e=x(e,s,h);b=x(b,s,h);var l=u(j,k,e,b);B.push({key:d,path:l});z=z.concat(r(j,k,e,b,d,i,a,c));f.rightY+=e;g.leftY+=b});return{linksRenderInfo:B,nodesRenderInfo:y,labelsRenderInfo:z,expandedChartHeight:A}}function q(a,b,c,d,e,f,g,h,i,k,l){__p&&__p();var m=l||0,n=l||0,o=[],p=[],q=h.getStyle(j.SANKEY_NODE),r=a.nodeCount>1?e/(a.nodeCount-1):0,t=c*d,u=0,v=a.nodeDataMap.size;a.nodeDataMap.forEach(function(a,c){__p&&__p();var d=u===0,e=u===v-1;m+=k&&!d?r/2:q.marginTop;d=Math.max(a.scaledHeightIn,a.scaledHeightOut,g);var h=q.width,j=m,l=s(i,c,b);if(l){if(l.content!=null){var w=l.height,x=l.width,y=m+d/2,z=n+w/2;y=Math.max(y,z);z=y-w/2;j=y-d/2;y=a.labelOrientation;if(y&&y!=="none"){var C=t+f;y==="right"?C+=h:C-=x;p.push({key:A(l),labelConfig:babelHelpers["extends"]({},l),labelOrientation:y,x:C,y:z})}n=z+w}l.insideText!=null&&p.push({key:A(l,!0),labelConfig:babelHelpers["extends"]({},l,{height:h,width:d}),labelOrientation:"inside",x:t+f+h,y:j})}x={y:j,x:t,height:d,width:h};a.rect=x;a.leftY=x.y;a.rightY=x.y;o.push({key:B(b,c),rect:x});m=j+x.height+(k&&!e?r/2:q.marginBottom);u++});return{nodesRenderInfoForSection:o,labelsRenderInfoForSection:p,chartHeightForSection:Math.max(m,n)}}function r(a,b,c,d,e,f,g,h){__p&&__p();var i=[];if(g&&c>0){c=c/2;c=c-g.height/2;i.push({key:y(e),labelConfig:g,labelOrientation:"left",x:f+a.x,y:a.y+c})}if(h&&d>0){g=d/2;a=g-h.height/2;c=f+b.x-h.width;i.push({key:z(e),labelConfig:h,labelOrientation:"right",x:c,y:b.y+a})}return i}function s(a,b,c){return!a?null:a.find(function(a){return a.node===b&&a.section===c})}function t(a,c){if(!c)return 0;var d=0;c.nodes.forEach(function(e){e=s(a,e,b("nullthrows")(c).section);e&&e.width!=null&&(d=Math.max(d,e.width))});return d}function u(a,b,c,d){var e=(b.x-a.x)/4,f=n().moveTo(a.x,a.y).lineTo(a.x+e,a.y);f=v(f,a.x+e,a.y,b.x-e,b.y);f=f.lineTo(b.x,b.y).lineTo(b.x,b.y+d).lineTo(b.x-e,b.y+d);f=v(f,b.x-e,b.y+d,a.x+e,a.y+c);return f.lineTo(a.x,a.y+c).close()}function v(a,b,c,d,e){var f=(d-b)/2;return a.curveTo(b+f,c,b+f,e,d,e)}function w(a,c){a=b("nullthrows")(a.get(c.section));return b("nullthrows")(a.nodeDataMap.get(c.node))}function x(a,b,c){return a.value>0?Math.max(a.value*b,c):0}function y(a){return"LEFT_LINK_LABEL_"+a}function z(a){return"RIGHT_LINK_LABEL_"+a}function A(a,b){var c=a.node;a=a.section;return"NODE_LABEL_"+(b?"_INSIDE":"")+c+"__"+a}function B(a,b){return"NODE__"+b+"__"+a}function C(a){a=a.label;var c=a.labelConfig,d=a.labelOrientation,e=a.x;a=a.y;var f=c.content,g=c.height,h=c.width;return b("React").createElement("div",{className:"_3b94"+(d==="right"?" _3b95":"")+(d==="inside"?" _67zd":""),style:{height:g,left:Math.floor(e),top:Math.floor(a),width:h}},d==="inside"?c.insideText||"":f)}function D(a){var c=a.data;a=a.mouseHoverInfo;var d=a.key,e=a.x;a=a.y;c=c.find(function(a){return a.key===d});return!c||!c.hoverTooltip?null:b("React").createElement("div",{className:"_3b96",style:{left:e-o,top:a+o}},b("React").createElement("div",{className:"_3b97"}),b("React").createElement("div",{className:"_3b98"},c.hoverTooltip))}e.exports=a}),null);
__d("BUIInsightsSankeyFunnelChart.react",["InsightsSankeyFunnelChart.react","InsightsThemeableChartMixin","React","ReactComponentWithPureRenderMixin","BUIInsightsTheme"],(function(a,b,c,d,e,f){"use strict";a=b("React").createClass({displayName:"BUIInsightsSankeyFunnelChart",mixins:[b("InsightsThemeableChartMixin")(function(){return b("BUIInsightsTheme")}),b("ReactComponentWithPureRenderMixin")],render:function(){return b("React").createElement(b("InsightsSankeyFunnelChart.react"),babelHelpers["extends"]({},this.props,{theme:this.state.theme}))}});e.exports=a}),null);
__d("ComposerXNUX",["csx","cx","AsyncRequest","ComposerXDragDropUtils","CSS","DOM","Event","SubscriptionsHandler"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i={},j={};function k(a,c,d){d=d.dataTransfer.items;if(d){d=b("ComposerXDragDropUtils").filterImages(d);if(!d.length)return}l.acknowledgeDialog(a,c)}var l={onInit:function(a,c,d){__p&&__p();if(i[d])return;j[d]=j[d]||new(b("SubscriptionsHandler"))();var e=j[d];e.engage();var f=a.getRoot();b("CSS").addClass(f,"_4bka");f=b("DOM").scry(f,"._3o-a");f.forEach(function(c){e.addSubscriptions(b("Event").listen(c,"click",l.acknowledgeDialog.bind(null,d,a)))});d==l.CAMERA_NUX&&e.addSubscriptions(b("Event").listen(document,"dragenter",k.bind(null,d,a)));e.addSubscriptions(a.subscribe("cancel",l.sendMarkSeenRequest.bind(null,d)),a.subscribe("hide",e.release.bind(e)));a.setContext(c).show()},acknowledgeDialog:function(a,b){l.sendMarkSeenRequest(a),b.hide()},sendMarkSeenRequest:function(a){i[a]||(new(b("AsyncRequest"))("/ajax/photos/composer/mark_nux_seen.php").setData({type:a}).send(),i[a]=!0)},onCleanup:function(a){a.hide()}};e.exports=l}),null);
__d("d3-old/core/requote",[],(function(a,b,c,d,e,f){a=function(a){return a.replace(g,"\\$&")};var g=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;e.exports=a}),null);
__d("d3-old/time/format-en_US",[],(function(a,b,c,d,e,f){__p&&__p();a="%a %b %e %X %Y";b="%m/%d/%Y";c="%H:%M:%S";d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];e=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];var g=["January","February","March","April","May","June","July","August","September","October","November","December"],h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];f._formatDateTime=a;f._formatDate=b;f._formatTime=c;f._days=d;f._dayAbbreviations=e;f._months=g;f._monthAbbreviations=h}),null);
__d("d3-old/time/format",["d3-old/core/map","d3-old/time/format-en_US","d3-old/time/time","d3-old/core/requote","d3-old/time/day"],(function(a,b,c,d,e,f){__p&&__p();var g=b("d3-old/core/map")._Map,h=b("d3-old/time/format-en_US")._days,i=b("d3-old/time/format-en_US")._dayAbbreviations,j=b("d3-old/time/format-en_US")._months,k=b("d3-old/time/format-en_US")._monthAbbreviations,l=b("d3-old/time/format-en_US")._formatDateTime,m=b("d3-old/time/format-en_US")._formatDate,n=b("d3-old/time/format-en_US")._formatTime,o=function(a){__p&&__p();var c=a.length;function d(b){var d=[],e=-1,f=0,g,h,i;while(++e<c)a.charCodeAt(e)===37&&(d.push(a.substring(f,e)),(h=x[g=a.charAt(++e)])!=null&&(g=a.charAt(++e)),(i=y[g])&&(g=i(b,h==null?g==="e"?" ":"0":h)),d.push(g),f=e+1);d.push(a.substring(f,e));return d.join("")}d.parse=function(c){var d={y:1900,m:0,d:1,H:0,M:0,S:0,L:0},e=p(d,a,c,0);if(e!=c.length)return null;"p"in d&&(d.H=d.H%12+d.p*12);e=new(b("d3-old/time/time")._time)();e.setFullYear(d.y,d.m,d.d);e.setHours(d.H,d.M,d.S,d.L);return e};d.toString=function(){return a};return d};function p(a,b,c,d){__p&&__p();var e,f,g=0,h=b.length,i=c.length;while(g<h){if(d>=i)return-1;e=b.charCodeAt(g++);if(e===37){f=z[b.charAt(g++)];if(!f||(d=f(a,c,d))<0)return-1}else if(e!=c.charCodeAt(d++))return-1}return d}function a(a){return new RegExp("^(?:"+a.map(b("d3-old/core/requote")).join("|")+")","i")}function c(a){var b=new g(),c=-1,d=a.length;while(++c<d)b.set(a[c].toLowerCase(),c);return b}function q(a,b,c){a+="";var d=a.length;return d<c?new Array(c-d+1).join(b)+a:a}var r=a(h),s=a(i),t=a(j),u=c(j),v=a(k),w=c(k),x={"-":"",_:" ",0:"0"},y={a:function(a){return i[a.getDay()]},A:function(a){return h[a.getDay()]},b:function(a){return k[a.getMonth()]},B:function(a){return j[a.getMonth()]},c:o(l),d:function(a,b){return q(a.getDate(),b,2)},e:function(a,b){return q(a.getDate(),b,2)},H:function(a,b){return q(a.getHours(),b,2)},I:function(a,b){return q(a.getHours()%12||12,b,2)},j:function(a,c){return q(1+b("d3-old/time/day").ofYear(a),c,3)},L:function(a,b){return q(a.getMilliseconds(),b,3)},m:function(a,b){return q(a.getMonth()+1,b,2)},M:function(a,b){return q(a.getMinutes(),b,2)},p:function(a){return a.getHours()>=12?"PM":"AM"},S:function(a,b){return q(a.getSeconds(),b,2)},U:function(a,c){return q(b("d3-old/time/time").sundayOfYear(a),c,2)},w:function(a){return a.getDay()},W:function(a,c){return q(b("d3-old/time/time").mondayOfYear(a),c,2)},x:o(m),X:o(n),y:function(a,b){return q(a.getFullYear()%100,b,2)},Y:function(a,b){return q(a.getFullYear()%1e4,b,4)},Z:R,"%":function(){return"%"}},z={a:d,A:f,b:A,B:B,c:C,d:J,e:J,H:K,I:K,L:N,m:I,M:L,p:P,S:M,x:D,X:E,y:G,Y:F};function d(a,b,c){s.lastIndex=0;a=s.exec(b.substring(c));return a?c+=a[0].length:-1}function f(a,b,c){r.lastIndex=0;a=r.exec(b.substring(c));return a?c+=a[0].length:-1}function A(a,b,c){v.lastIndex=0;b=v.exec(b.substring(c));return b?(a.m=w.get(b[0].toLowerCase()),c+=b[0].length):-1}function B(a,b,c){t.lastIndex=0;b=t.exec(b.substring(c));return b?(a.m=u.get(b[0].toLowerCase()),c+=b[0].length):-1}function C(a,b,c){return p(a,y.c.toString(),b,c)}function D(a,b,c){return p(a,y.x.toString(),b,c)}function E(a,b,c){return p(a,y.X.toString(),b,c)}function F(a,b,c){O.lastIndex=0;b=O.exec(b.substring(c,c+4));return b?(a.y=+b[0],c+=b[0].length):-1}function G(a,b,c){O.lastIndex=0;b=O.exec(b.substring(c,c+2));return b?(a.y=H(+b[0]),c+=b[0].length):-1}function H(a){return a+(a>68?1900:2e3)}function I(a,b,c){O.lastIndex=0;b=O.exec(b.substring(c,c+2));return b?(a.m=b[0]-1,c+=b[0].length):-1}function J(a,b,c){O.lastIndex=0;b=O.exec(b.substring(c,c+2));return b?(a.d=+b[0],c+=b[0].length):-1}function K(a,b,c){O.lastIndex=0;b=O.exec(b.substring(c,c+2));return b?(a.H=+b[0],c+=b[0].length):-1}function L(a,b,c){O.lastIndex=0;b=O.exec(b.substring(c,c+2));return b?(a.M=+b[0],c+=b[0].length):-1}function M(a,b,c){O.lastIndex=0;b=O.exec(b.substring(c,c+2));return b?(a.S=+b[0],c+=b[0].length):-1}function N(a,b,c){O.lastIndex=0;b=O.exec(b.substring(c,c+3));return b?(a.L=+b[0],c+=b[0].length):-1}var O=/^\s*\d+/;function P(a,b,c){b=Q.get(b.substring(c,c+=2).toLowerCase());return b==null?-1:(a.p=b,c)}var Q=b("d3-old/core/map")({am:0,pm:1});function R(a){a=a.getTimezoneOffset();var b=a>0?"-":"+",c=~~(Math.abs(a)/60);a=Math.abs(a)%60;return b+q(c,"0",2)+q(a,"0",2)}e.exports=o}),null);
__d("d3-old/time/format-utc",["d3-old/time/time","d3-old/time/format"],(function(a,b,c,d,e,f){__p&&__p();var g=b("d3-old/time/time")._utc;a=function(a){__p&&__p();var c=b("d3-old/time/format")(a);function d(a){try{b("d3-old/time/time")._time=g;var d=new(b("d3-old/time/time")._time)();d._=a;return c(d)}finally{b("d3-old/time/time")._time=Date}}d.parse=function(a){try{b("d3-old/time/time")._time=g;a=c.parse(a);return a&&a._}finally{b("d3-old/time/time")._time=Date}};d.toString=c.toString;return d};e.exports=a}),null);
__d("maxBy",["minBy"],(function(a,b,c,d,e,f){var g=function(a,b){return a-b};function a(a,c,d){var e=d||g;return b("minBy")(a,c,function(a,b){return e(b,a)})}e.exports=a}),null);
__d("SignalsSDKSetupComponent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADD_DATA_SOURCE_SELECTOR:"add_data_source_selector",NO_APP_NUX:"no_app_nux",NO_EVENT_NUX:"no_event_nux",MANUAL_SDK_SETUP_OPTION:"manual_sdk_setup_option",MANUAL_SDK_SETUP_FLOW:"manual_sdk_setup_flow",PARTNER_APP_SDK_SETUP_OPTION:"partner_app_sdk_setup_option",APP_SELECTION_PANEL:"app_selection_panel",PLATFORM_SELECTION_PANEL:"platform_selection_panel",ACCOUNT_SELECTION_PANEL:"account_selection_panel",ACCOUNT_NEXT_STEP_BUTTON:"account_next_step_button",APP_CATEGORY_SELECTOR:"app_category_selector",EVENT_SELECTION_PANEL:"event_selection_panel",EVENT_NEXT_STEP_BUTTON:"event_next_step_button",SET_UP_METHOD_SELECTOR:"set_up_method_selector",PREVIEW_EMAIL_PANEL:"preview_email_panel",SEND_EMAIL_BUTTON:"send_email_button",NOTIF_JEWEL:"notif_jewel",CF_EVENT_NOT_READY_NOTICE:"cf_event_not_ready_notice",CF_EVENT_CONVERSION_TRACKING_NOTICE:"cf_event_conversion_tracking_notice",CF_EVENT_CONVERSION_NOTICE:"cf_event_conversion_notice",CF_EVENT_APP_SELECTOR_NO_EVENT_NOTICE:"cf_event_app_selector_no_event_notice",ADS_MANAGER_BANNER_UPSELL:"ads_manager_banner_upsell",SETUP_DECISION_MODAL:"setup_decision_modal",UNKNOWN:"unknown",FBA_SIDE_UNIT:"fba_side_unit",FBA_EVENTS_TAB:"fba_events_tab",SDK_UPSELL_MEGAPHONE_NUX:"sdk_upsell_megaphone_nux",APP_EM_UPSELL_NUX:"app_em_upsell_nux",CODELESS_APP_EM_UPSELL_NUX:"codeless_app_em_upsell_nux",CF_APP_INSTALLS_NUX:"cf_app_installs_nux",QP_SETUP:"qp_setup",AYMT_NOTIF_SETUP:"aymt_notif_setup",EMAIL_NOTIF_SETUP:"email_notif_setup",DEV_SITE_TOP_TIP:"dev_site_top_tip",SDK_READY_RETARGET:"sdk_ready_retarget",CODELESS_ONLY_EMAIL_NOTIF_SETUP:"codeless_only_email_notif_setup",CODELESS_ONLY_ADVERTISER_NOTIF_SETUP:"codeless_only_advertiser_notif_setup",CODELESS_ONLY_ADMIN_NOTIF_SETUP:"codeless_only_admin_notif_setup",BUTTON_INDEXING_NOTIF_SETUP:"button_indexing_notif_setup",BUTTON_INDEXING_APP_NUX:"button_indexing_app_nux",BUTTON_INDEXING_QP:"button_indexing_qp"})}),null);
__d("findDOMNode",["ReactDOM-fb"],(function(a,b,c,d,e,f){"use strict";a=b("ReactDOM-fb").findDOMNode;e.exports=a}),null);