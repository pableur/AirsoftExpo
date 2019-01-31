if (self.CavalryLogger) { CavalryLogger.start_js(["D\/u67"]); }

__d("XEventReactionPermalinkAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/{event_id}/ajax/permalink/reaction/",{acontext:{type:"String"},event_id:{type:"Int",required:!0},event_time_id:{type:"FBID"},active_tab:{type:"Enum",defaultValue:"about",enumType:1}})}),null);
__d("EventComposerSuccessMessage.react",["cx","fbt","AsyncRequest","EventsPermalinkTabBar","Link.react","React","XEventReactionPermalinkAsyncController","XUICard.react"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";var a=b("XEventReactionPermalinkAsyncController").getURIBuilder().setInt("event_id",this.props.eventID).setEnum("active_tab","discussion").getURI();return b("React").createElement(b("XUICard.react"),{className:"_340"},b("React").createElement("p",{className:"_342"},h._("{view_post_link} dans la discussion de l\u2019\u00e9v\u00e8nement.",[h._param("view_post_link",b("React").createElement(b("Link.react"),{href:"#",onClick:function(){new(b("AsyncRequest"))(a).send(),b("EventsPermalinkTabBar").showWait()},className:"_39o"},"View your post"))])))};function a(){"use strict";i.apply(this,arguments)}a.propTypes={eventID:c.string};e.exports=a}),null);
__d("EventsAboutTabComposer",["Arbiter","Bootloader","EventComposerSuccessMessage.react","React","ReactDOM","Run","SubscriptionsHandler"],(function(a,b,c,d,e,f){__p&&__p();var g=600;function h(a,c){b("Bootloader").loadModules(["Animation","ComposerXController","ComposerXMarauderLogger","DOM"],function(d,e,f,h){e=document.getElementById("eventComposerSuccess");e&&(b("ReactDOM").render(b("React").createElement(b("EventComposerSuccessMessage.react"),{eventID:c}),e),new d(e).from("opacity",0).to("opacity",1).duration(g).go());f.logCompleted(a)},"EventsAboutTabComposer")}a={initComposer:function(a,c){var d=new(b("SubscriptionsHandler"))();d.addSubscriptions(b("Arbiter").subscribe("LitestandComposer/publish",function(b,d){d.composer_id===a&&h(a,c)}));b("Run").onLeave(function(){d.release()})}};e.exports=a}),null);
__d("EventNotificationSettingsDialogMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"EventUpdateNotificationSubscriptionLevelData!",defaultValue:null}],b=[{kind:"LinkedField",alias:null,name:"event_update_notification_subscription_level",storageKey:null,args:[{kind:"Variable",name:"data",variableName:"input",type:"EventUpdateNotificationSubscriptionLevelData!"}],concreteType:"EventUpdateNotificationSubscriptionLevelResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"event",storageKey:null,args:null,concreteType:"Event",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"viewer_notification_subscription_level",args:null,storageKey:null}]}]}];return{kind:"Request",operationKind:"mutation",name:"EventNotificationSettingsDialogMutation",id:"1835202389903507",text:null,metadata:{},fragment:{kind:"Fragment",name:"EventNotificationSettingsDialogMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:b},operation:{kind:"Operation",name:"EventNotificationSettingsDialogMutation",argumentDefinitions:a,selections:b}}}();e.exports=a}),null);
__d("EventNotificationSettingsDialogQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"eventID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"eventID",type:"ID!"}];return{kind:"Request",operationKind:"query",name:"EventNotificationSettingsDialogQuery",id:"1640075452768171",text:null,metadata:{},fragment:{kind:"Fragment",name:"EventNotificationSettingsDialogQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"event",storageKey:null,args:b,concreteType:"Event",plural:!1,selections:[{kind:"FragmentSpread",name:"EventNotificationSettingsDialog_event",args:null}]}]},operation:{kind:"Operation",name:"EventNotificationSettingsDialogQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"event",storageKey:null,args:b,concreteType:"Event",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"viewer_notification_subscription_level",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"possible_notification_subscription_levels",storageKey:null,args:null,concreteType:"EventNotificationSubscriptionLevelsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"EventNotificationSubscriptionLevelsEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"EventNotificationSubscriptionLevelSetting",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"level",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"display_name",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"description",args:null,storageKey:null}]}]}]}]}]}}}();e.exports=a}),null);
__d("EventNotificationSettingsDialog_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"EventNotificationSettingsDialog_event",type:"Event",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"viewer_notification_subscription_level",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"possible_notification_subscription_levels",storageKey:null,args:null,concreteType:"EventNotificationSubscriptionLevelsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"EventNotificationSubscriptionLevelsEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"EventNotificationSubscriptionLevelSetting",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"level",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"display_name",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"description",args:null,storageKey:null}]}]}]}]};e.exports=a}),null);
__d("EventNotificationSettingsDialog.react",["cx","fbt","DialogExpansion","GraphQLMutationAction","GraphQLMutationQueryCreator","InputLabel_DEPRECATED.react","InputLabelLabel_DEPRECATED.react","LoadingDialog.react","Random","React","RelayAPIConfig","RelayFBEnvironment","RelayModern","XUIDialog.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIDialogTitle.react","XUIGrayText.react","XUIRadioInput.react","XUIText.react","nullthrows","EventNotificationSettingsDialogMutation.graphql","EventNotificationSettingsDialog_event.graphql","EventNotificationSettingsDialogQuery.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=b("RelayModern").QueryRenderer,l=b("RelayModern").commitMutation;d=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;var m=450,n=function(){return b("EventNotificationSettingsDialogMutation.graphql")};f=babelHelpers.inherits(a,b("React").Component);i=f&&f.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={currentLevel:b("nullthrows")(this.props.event.viewer_notification_subscription_level)},this.$1=function(){var a=this.props.event,c=this.state.currentLevel;if(c!==a.viewer_notification_subscription_level){var d={input:{client_mutation_id:"EventNotificationSettingsDialogMutation"+b("Random").uint32(),actor_id:b("RelayAPIConfig").actorID,event_id:a.id,level:c}};l(b("RelayFBEnvironment"),{mutation:n,variables:d,optimisticResponse:function(){return{event:{id:a.id,viewer_notification_subscription_level:c}}}})}this.props.onHide()}.bind(this),this.$2=function(a){this.setState({currentLevel:a.target.value})}.bind(this),this.$3=function(a){return b("React").createElement(b("InputLabel_DEPRECATED.react"),{display:"block",key:a.level,className:"_2emp"},b("React").createElement(b("XUIRadioInput.react"),{value:a.level,checked:a.level===this.state.currentLevel,onChange:this.$2}),b("React").createElement(b("InputLabelLabel_DEPRECATED.react"),null,b("React").createElement(b("XUIText.react"),{display:"block",weight:"bold"},a.display_name),b("React").createElement(b("XUIGrayText.react"),{display:"block",shade:"light",weight:"normal"},a.description)))}.bind(this),c}a.prototype.render=function(){var a;a=(a=this.props.event.possible_notification_subscription_levels)!=null?a.edges:a;a=b("nullthrows")(a).map(function(a){return this.$3(b("nullthrows")(a.node))}.bind(this));return b("React").createElement(b("XUIDialog.react"),{behaviors:{DialogExpansion:b("DialogExpansion"),LayerFadeOnShow:null},causalElement:this.props.causalElement,causalElementRef:this.props.causalElementRef,shown:this.props.showDialog,onHide:this.props.onHide,isStrictlyControlled:!0,width:m,ref:"notificationDialog",key:"dialog"},b("React").createElement(b("XUIDialogTitle.react"),null,h._("Param\u00e8tres des notifications")),b("React").createElement(b("XUIDialogBody.react"),null,b("React").createElement("div",{className:"_2enb"},a)),b("React").createElement(b("XUIDialogFooter.react"),null,b("React").createElement(b("XUIDialogButton.react"),{label:h._("Termin\u00e9"),use:"confirm",action:"confirm",onClick:this.$1})))};var o=d(a,{event:function(){return b("EventNotificationSettingsDialog_event.graphql")}}),p=function(){return b("EventNotificationSettingsDialogQuery.graphql")};j=babelHelpers.inherits(c,b("React").Component);j&&j.prototype;c.prototype.render=function(){var a=this.props,c=a.causalElement,d=a.causalElementRef,e=a.eventID,f=a.onHide,g=a.showDialog;return!g?null:b("React").createElement(k,{environment:b("RelayFBEnvironment"),query:p,variables:{eventID:e},render:function(a){a.error;a=a.props;return a?b("React").createElement(o,{causalElement:c,causalElementRef:d,event:a.event,onHide:f,showDialog:g}):b("React").createElement(b("LoadingDialog.react"),{behaviors:{LayerFadeOnShow:null},causalElement:c,causalElementRef:d,onHide:f})}})};function c(){j.apply(this,arguments)}e.exports=c}),null);
__d("EventNotificationSettingsDialogLink.react",["cx","fbt","EventActionContext","EventNotificationSettingsDialog.react","EventsActionsLogger","Link.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.linkRef=b("React").createRef(),this.state={actionContext:b("EventActionContext").getFromString(this.props.actionContextStr),showDialog:!1},this.$1=function(){return this.linkRef.current}.bind(this),this.$2=function(){this.setState({showDialog:!1})}.bind(this),this.$3=function(){b("EventsActionsLogger").log(this.props.eventID,{type:b("EventsActionsLogger").Type.VIEW,target:b("EventsActionsLogger").Target.NOTIFICATIONS_MENU,mechanism:b("EventsActionsLogger").Mechanism.NOTIFICATION_SETTINGS,acontext:this.state.actionContext}),this.setState({showDialog:!0})}.bind(this),c}a.prototype.render=function(){return b("React").createElement(b("React").Fragment,null,b("React").createElement(b("Link.react"),{className:"_4c_-",ref:this.linkRef,onClick:this.$3},h._("Modifier les param\u00e8tres")),b("React").createElement(b("EventNotificationSettingsDialog.react"),{causalElementRef:this.$1,eventID:this.props.eventID,onHide:this.$2,showDialog:this.state.showDialog}))};e.exports=a}),null);
__d("ReactComposerEventBootloader",["Bootloader"],(function(a,b,c,d,e,f){"use strict";a={statusAttachment:function(a){b("Bootloader").loadModules(["ReactComposerStatusAttachmentContainer.react","ReactComposerEventPostButtonContainer.react"],a,"ReactComposerEventBootloader")},mediaAttachment:function(a){b("Bootloader").loadModules(["ReactComposerMediaAttachmentContainer.react","ReactComposerEventMediaPostButtonContainer.react"],a,"ReactComposerEventBootloader")},questionAttachment:function(a){b("Bootloader").loadModules(["ReactComposerQuestionAttachmentContainer.react","ReactComposerEventPostButtonContainer.react"],a,"ReactComposerEventBootloader")}};e.exports=a}),null);
__d("ReactEventComposer.react",["cx","fbt","BootloadedComponent.react","ComposerEntryPointRef","EventsAboutTabComposer","JSResource","LitestandComposer","React","ReactComposer.react","ReactComposerAttachmentType","ReactComposerBodyContainer.react","ReactComposerConfig","ReactComposerContextConfig","ReactComposerContextProviderMixin","ReactComposerEventBootloader","ReactComposerLazyHeader.react","ReactComposerMarkdownTaggerButton.react","ReactComposerMarkdownTaggerContainer.react","ReactComposerMediaAttachmentSelector.react","ReactComposerMediaLazyAttachment.react","ReactComposerQuestionAttachmentSelector.react","ReactComposerQuestionLazyAttachment.react","ReactComposerStatusAttachmentSelector.react","ReactComposerStatusLazyAttachment.react","ReactComposerTaggerType","XUISpinner.react"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").createClass({displayName:"ReactEventComposer",mixins:[b("ReactComposerContextProviderMixin")],propTypes:{contextConfig:b("ReactComposerContextConfig").isRequired,config:b("ReactComposerConfig").isRequired},componentDidMount:function(){this.props.config.loggingConfig.ref===b("ComposerEntryPointRef").EVENT_ABOUT?b("EventsAboutTabComposer").initComposer(this.props.contextConfig.composerID,this.props.config.targetData.targetID):b("LitestandComposer").initComposer(this.props.contextConfig.composerID)},render:function(){var a=this._getAttachmentComponents(),c=a[0];a=a[1];var d=this.props.config.actorConfig?b("React").createElement(b("BootloadedComponent.react"),babelHelpers["extends"]({},this.props.config.actorConfig,{bootloadPlaceholder:b("React").createElement(b("XUISpinner.react"),{className:"_3igw"}),bootloadLoader:b("JSResource")("ReactComposerActorSelectorContainer.react").__setRef("ReactEventComposer.react")})):null;return b("React").createElement(b("ReactComposer.react"),{className:"_4lmd",loggingConfig:this.props.config.loggingConfig},b("React").createElement(b("ReactComposerLazyHeader.react"),{rightChild:d},c),b("React").createElement(b("ReactComposerBodyContainer.react"),null,a))},_getAttachmentComponents:function(){var a=[],c=[],d=this.props.config.attachmentsConfig,e=d[b("ReactComposerAttachmentType").MEDIA].enabled;d=d[b("ReactComposerAttachmentType").QUESTION].enabled;a.push(b("React").createElement(b("ReactComposerStatusAttachmentSelector.react"),{key:"status",label:h._("Message")}));c.push(b("React").createElement(b("ReactComposerStatusLazyAttachment.react"),{additionalTaggers:this._getAdditionalTaggersForStatusAttachment(),config:this.props.config,key:"status",placeholder:h._("Exprimez-vous"),selected:!0,bootloader:b("ReactComposerEventBootloader")}));e&&(a.push(b("React").createElement(b("ReactComposerMediaAttachmentSelector.react"),{key:"media",label:h._("Ajouter photo\/vid\u00e9o")})),c.push(b("React").createElement(b("ReactComposerMediaLazyAttachment.react"),{additionalTaggers:this._getAdditionalTaggersForStatusAttachment(),config:this.props.config,key:"media",bootloader:b("ReactComposerEventBootloader")})));d&&(a.push(b("React").createElement(b("ReactComposerQuestionAttachmentSelector.react"),{key:"question"})),c.push(b("React").createElement(b("ReactComposerQuestionLazyAttachment.react"),{config:this.props.config,key:"question",bootloader:b("ReactComposerEventBootloader")})));return[a,c]},_getAdditionalTaggersForStatusAttachment:function(){var a=[];this.props.config.taggersConfig[b("ReactComposerTaggerType").MARKDOWN].enabled&&a.push({button:b("React").createElement(b("ReactComposerMarkdownTaggerButton.react"),{key:"markdown_button"}),container:b("React").createElement(b("ReactComposerMarkdownTaggerContainer.react"),{key:"markdown_container"})});return a}});e.exports=a}),null);