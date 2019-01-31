if (self.CavalryLogger) { CavalryLogger.start_js(["GHp76"]); }

__d("ReactComposerFunFactSinglePromptTaggerContainer.react",["cx","Arbiter","AsyncRequest","ComposerEntryPointRef","CurrentUser","FacebookAppIDs","FlexLayout.react","FluxContainer","ProfileEngagementTypedLogger","ProfileFunFactsEntryPoint","React","ReactComposerAttachmentStore","ReactComposerContextTypes","ReactComposerEvents","ReactComposerFormattedTextActions","ReactComposerFormattedTextStore","ReactComposerFunFactTaggerComponent.react","ReactComposerLoggingName","ReactComposerTaggerActions","ReactComposerTaggerHideOnEscapeKeyPress.react","ReactComposerTaggerStore","ReactComposerTaggerType","XProfileFunFactsSinglePromptFetchController","XUISpinner.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=-1,j=0;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=null,this.$5=function(){b("ReactComposerTaggerActions").setTaggerData(this.context.composerID,b("ReactComposerLoggingName").FUN_FACT,b("ReactComposerTaggerType").FUN_FACT,null)}.bind(this),c}a.getStores=function(){return[b("ReactComposerAttachmentStore"),b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){d=d.composerID;c=!!c.pinnedPromptID;var e=b("ReactComposerTaggerStore").getTaggerData(d,b("ReactComposerTaggerType").FUN_FACT);return{isAttached:e&&e.promptID,isDisabled:b("ReactComposerTaggerStore").isDisabled(d,b("ReactComposerTaggerType").FUN_FACT),isLoading:a?a.isLoading:c,taggerData:e}};a.prototype.componentDidMount=function(){b("Arbiter").inform("ReactComposerDialogLauncher/expandcomposer/"+this.context.composerID),this.props.pinnedPromptID&&this.$2()};a.prototype.componentDidUpdate=function(a,c){__p&&__p();if(!this.state.isAttached){this.$1&&this.$1.unsubscribe();return}a=this.state.taggerData.promptID;if(c.isAttached&&c.taggerData.promptID===a)return;this.$3("enter",a,this.state.taggerData.entryPoint||this.props.entryPoint,this.state.taggerData.tapTarget);this.$1&&this.$1.unsubscribe();this.$1=b("Arbiter").subscribeOnce(b("ReactComposerEvents").POST_STARTED+this.context.composerID,function(){if(this.state.isAttached){var a=this.state.taggerData;this.$3("create",a.promptID,a.entryPoint||this.props.entryPoint)}}.bind(this));this.$4()};a.prototype.$4=function(){if(b("ReactComposerTaggerStore").isDisabled(this.context.composerID,b("ReactComposerTaggerType").FORMATTED_TEXT))return;var a=b("ReactComposerFormattedTextStore").getSelectedIndex(this.context.composerID);a===i&&b("ReactComposerFormattedTextActions").setSelectedIndex(this.context.composerID,j)};a.prototype.$3=function(a,c,d,e){var f=this.context.composerType===b("ComposerEntryPointRef").GROUP?"group":"unknown";f=new(b("ProfileEngagementTypedLogger"))().setProductBucket("fun_facts").setProfileIDDummy(b("CurrentUser").getID()).setSurface(f).setEngagementType(a).setAppID(b("FacebookAppIDs").WWW);a==="create"?f.setItemType("answer_post").setEventMetadata({entry_point:d,prompt_id:c}).log():a==="enter"&&f.setItemType("composer_page").setItemSubtype("answer_post").setEventMetadata({entry_point:d,prompt_id:c,tap_target:e||""}).log()};a.prototype.$2=function(){b("ReactComposerTaggerActions").setTaggerData(this.context.composerID,b("ReactComposerLoggingName").FUN_FACT,b("ReactComposerTaggerType").FUN_FACT,{promptID:this.props.pinnedPromptID});var a=b("XProfileFunFactsSinglePromptFetchController").getURIBuilder().setInt("fetch_amount",1).setFBID("pinned_prompt_id",this.props.pinnedPromptID).setEnumVector("fun_fact_prompt_types",this.props.promptTypes).getURI();new(b("AsyncRequest"))(a).setHandler(function(a){var c=this.state.taggerData;c.prompt=a.getPayload().prompts[0];b("ReactComposerTaggerActions").setTaggerData(this.context.composerID,b("ReactComposerLoggingName").FUN_FACT,b("ReactComposerTaggerType").FUN_FACT,c);this.setState({isLoading:!1});this.$4()}.bind(this)).send()};a.prototype.render=function(){if(!this.state.isAttached||this.state.isDisabled)return null;if(this.state.isLoading)return b("React").createElement(b("FlexLayout.react"),{align:"center",className:"_2ph_",direction:"vertical"},b("React").createElement(b("XUISpinner.react"),null));var a=this.state.taggerData.prompt;return b("React").createElement(b("ReactComposerTaggerHideOnEscapeKeyPress.react"),null,b("React").createElement(b("ReactComposerFunFactTaggerComponent.react"),{attribution:a.isCrowdsourced?a.attribution:null,emoji:a.emoji,onClose:this.$5,showCloseButton:!0,title:a.title}))};a.defaultProps={entryPoint:b("ProfileFunFactsEntryPoint").UNKNOWN,promptTypes:[]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("XOfferController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/offer/detail/{offer_id}/",{offer_id:{type:"FBID",required:!0},referrer:{type:"Enum",enumType:1},__xts__:{type:"StringVector"},__tn__:{type:"String"}})}),null);