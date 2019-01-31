if (self.CavalryLogger) { CavalryLogger.start_js(["37C5d"]); }

__d("PagesMessengerLinkConfirmationDialog.react",["ix","cx","fbt","Image.react","React","XUIDialog.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIGrayText.react","XUIText.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=494;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){return b("React").createElement(b("XUIDialog.react"),{shown:this.props.shown,onToggle:function(a){return!a&&this.props.onDismiss}.bind(this),width:k},b("React").createElement(b("XUIDialogBody.react"),{className:"_3-95 _3pa-"},b("React").createElement(b("Image.react"),{className:"_3-97 _3-8x",src:"/images/pages/linkshare/checkmark.png"}),b("React").createElement(b("XUIText.react"),{size:"header3",display:"block"},i._("Le lien Messenger a \u00e9t\u00e9 copi\u00e9.")),b("React").createElement(b("XUIText.react"),{className:"_3-8y",display:"block",size:"header4"},i._("Le lien Messenger a \u00e9t\u00e9 copi\u00e9 dans votre presse-papiers. Toute personne qui clique sur ce lien pourra lancer une conversation avec votre Page."))),b("React").createElement(b("XUIDialogFooter.react"),{className:"_3pa_",fullbleedborder:"true",leftContent:b("React").createElement("div",null,b("React").createElement(b("Image.react"),{className:"_1-vn _3-8_",src:g("126379")}),b("React").createElement(b("XUIGrayText.react"),null,this.props.url))},b("React").createElement(b("XUIDialogButton.react"),{use:"confirm",label:i._("Termin\u00e9"),onClick:this.props.onDismiss})))};function a(){j.apply(this,arguments)}e.exports=a}),null);
__d("XPagesOnlineIndicatorAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/messaging/show_online_indicator/",{page_id:{type:"FBID",required:!0}})}),null);
__d("PagesMessageButton.react",["cx","fbt","ix","AsyncRequest","ChatOpenTabEventLogger","Clipboard","ContextualDialogArrow","ContextualLayerUpdateOnScroll","FantaTabActions","Image.react","InlineBlock.react","MenuSeparator.react","MercuryIDs","MessagingSourceEnum","PagesEventObserver","PagesEventType","PagesMessengerLinkConfirmationDialog.react","PopoverMenu.react","PopoverMenuShowOnHover","React","ReactXUIMenu","XBasicFBNuxDismissController","XPagesOnlineIndicatorAsyncController","XUIAmbientNUX.react","XUIButton.react","XUIPopoverButton.react","asset","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("ReactXUIMenu").Item,l=3997;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(a){__p&&__p();j.constructor.call(this,a),this.$4=function(a){a=this.props.pageID;var c=b("MercuryIDs").getThreadIDFromUserID(a);b("FantaTabActions").openTab(c,[this.props.settings.ref]);b("ChatOpenTabEventLogger").logUserClickOpen(this.props.settings.ref,a)}.bind(this),this.$6=function(a){a=this.props.settings.adminSettings&&this.props.settings.adminSettings.messengerLinkURI;if(!a)return;b("Clipboard").copy(a);this.setState({linkDialogShown:!0});b("PagesEventObserver").notify(b("PagesEventType").SHARED_MESSAGE_LINK_COPY,this.props.pageID,{source:b("MessagingSourceEnum").PAGES_MESSAGE_SHORTLINK})}.bind(this),this.$7=function(){this.setState({linkDialogShown:!1})}.bind(this),this.$9=function(){this.setState({nuxDismissed:!0})}.bind(this),this.$10=function(){this.setState({messengerLinkNUXDismissed:!0});var a=b("XBasicFBNuxDismissController").getURIBuilder().setInt("nux_id",l).getURI();new(b("AsyncRequest"))().setURI(a).send()}.bind(this),this.state={isOnline:!1,linkDialogShown:!1,messengerLinkNUXDismissed:!1,nuxDismissed:!1}}a.prototype.UNSAFE_componentWillMount=function(){var a=b("XPagesOnlineIndicatorAsyncController").getURIBuilder().setFBID("page_id",this.props.pageID).getURI();new(b("AsyncRequest"))().setURI(a).setHandler(function(a){a=a.payload;this.setState({isOnline:a.showOnlneIndicator})}.bind(this)).send()};a.getButtonSize=function(a){return b("XUIButton.react").getButtonSize(a)};a.prototype.componentDidMount=function(){b("PagesEventObserver").notify(b("PagesEventType").MESSAGES_BUTTON_RENDER,this.props.pageID,{source:"refresh",logged_out:!this.props.settings.isLoggedIn,ref:this.props.settings.ref})};a.prototype.render=function(){__p&&__p();if(!this.props.settings.isLoggedIn)return null;var a=h._("Contacter");this.props.settings.adminSettings||(this.props.className?a=h._("Envoyer un message"):this.props.settings.label&&(a=h._("{settings_label}",[h._param("settings_label",this.props.settings.label)])));var c=this.props.pageCategory==="WORKPLACE_BOT",d=c?i("701295"):i("481153");c=c?i("701294"):i("548580");var e=null;if(this.props.settings.adminSettings)e=b("React").createElement(b("PopoverMenu.react"),{alignh:"right",behaviors:[b("PopoverMenuShowOnHover")],className:b("joinClasses")(this.props.className,"_3u42"),layerBehaviors:[b("ContextualDialogArrow")],menu:this.$1()},e,this.$2());else{var f=b("joinClasses")(this.props.className,this.props.isInHovercard?null:"_p8f");c=this.props.isSecondaryAction||this.props.isInHovercard?c:d;e=b("React").createElement(b("XUIButton.react"),{className:f,"data-testid":"page-message-button",image:b("React").createElement(b("Image.react"),{src:c}),imageRight:this.$3(),label:a,onClick:this.$4,ref:"messageButton",size:this.props.size})}return b("React").createElement(b("InlineBlock.react"),{alignv:"middle",className:"_3u43 _p8r"},e,this.$5())};a.prototype.$3=function(){return!this.state.isOnline?null:b("React").createElement("span",{className:"_ljx"},b("React").createElement(b("Image.react"),{src:i("311942")}))};a.prototype.$1=function(){if(!this.props.settings.adminSettings)return null;var a=null;this.props.settings.adminSettings.messengerLinkURI&&(a=b("React").createElement(k,{onclick:this.$6},h._("Copier le lien Messenger")));return b("React").createElement(b("ReactXUIMenu"),null,b("React").createElement(k,{href:this.props.settings.adminSettings.inboxURI},h._("Afficher les messages")),this.props.settings.adminSettings.messengerLinkURI?b("React").createElement(b("MenuSeparator.react"),null):null,a)};a.prototype.$2=function(){var a=this.props.settings.adminSettings&&this.props.settings.adminSettings.messengerLinkURI;return!a?null:b("React").createElement(b("PagesMessengerLinkConfirmationDialog.react"),{onDismiss:this.$7,shown:this.state.linkDialogShown,url:a})};a.prototype.$5=function(){if(this.props.settings.adminSettings&&this.props.settings.adminSettings.showMessengerLinkNUX)return this.$8();if(!this.props.settings.showNUX)return null;var a=this.props.pageCategory==="WORKPLACE_BOT"?h._("Send a message to this Bot."):h._("Send a message to this Page.");return b("React").createElement(b("XUIAmbientNUX.react"),{alignment:"center",behaviors:{ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll")},contextRef:function(){return this.refs.messageButton}.bind(this),onCloseButtonClick:this.$9,position:"below",shown:!this.state.nuxDismissed,width:"auto"},a)};a.prototype.$8=function(){return!this.props.settings.adminSettings||!this.props.settings.adminSettings.showMessengerLinkNUX?null:b("React").createElement(b("XUIAmbientNUX.react"),{alignment:"right",autofocus:!1,behaviors:{ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll")},contextRef:function(){return this.refs.messageButton}.bind(this),onCloseButtonClick:this.$10,position:"below",shown:!this.state.messengerLinkNUXDismissed,width:"wide"},h._("Vous pouvez d\u00e9sormais partager un lien direct pour que les personnes puissent facilement envoyer un message \u00e0 votre Page."))};e.exports=a}),null);
__d("PagesBlueCrossAddStoryButton.react",["ix","cx","ActorURI","AsyncRequest","ComposerEntryPointRef","Image.react","PageContentTabLoadingDialog","React","ShimButton.react","XPagesComposerDialogController","XPagesProfileHomeController","XPagesProfilePostsController","asset","goURI"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=g("489388"),k=g("624751");function l(a){switch(a){case"small":return j;default:return k}}c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.$3=function(){this.$2()}.bind(this),b}a.prototype.$1=function(){var a=this.props,c=a.pageID;a=a.shouldLandOnPostTab;if(c===null||c===void 0)return;var d=b("XPagesProfileHomeController").getURIBuilder().setString("page_token",c).setString("referrer","page_add_story").getURI();c=b("XPagesProfilePostsController").getURIBuilder().setString("page_token",c).setString("referrer","page_add_story").getURI();b("goURI")(a?c:d)};a.prototype.$2=function(){var a=this.props.pageID;if(a===null||a===void 0)return;b("PageContentTabLoadingDialog").show();var c=b("XPagesComposerDialogController").getURIBuilder().setString("entry_point",b("ComposerEntryPointRef").PAGES_PROFILE_PIC_ADD_STORY).getURI();new(b("AsyncRequest"))().setURI(b("ActorURI").create(c,a)).setHandler(function(){b("PageContentTabLoadingDialog").hide()}).send()};a.prototype.render=function(){var a=this.props,c=a.borderWidth,d=a.bottomRightMargin;a=a.size;d="_6usj"+(d==="margin-4"?" margin-4":"")+(d==="margin-8"?" margin-8":"")+(c==="thin"?" border-thin":"")+(c==="thick"?" border-thick":"")+(a==="small"?" size-small":"")+(a==="normal"?" size-normal":"");return b("React").createElement(b("ShimButton.react"),{className:"_6uxp",onClick:this.$3},b("React").createElement("div",{className:d},b("React").createElement(b("Image.react"),{src:l(a)})))};e.exports=a}),null);
__d("PagesCircularProfilePictureOverlay.react",["ix","cx","fbt","FDSText.react","Image.react","Link.react","React","XPhotoPermalinkController","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=i._("Afficher la photo"),k=i._("Actualiser"),l=i._("Add a Picture"),m=i._("Options");function n(a){return!a.canViewerEdit?b("React").createElement(b("React").Fragment,null,b("React").createElement("div",null,b("React").createElement(b("Image.react"),{src:g("504208")})),b("React").createElement(b("FDSText.react"),{color:"white",size:"body3",weight:"bold"},j)):a.showStoryRing?b("React").createElement(b("React").Fragment,null,b("React").createElement("div",null,b("React").createElement(b("Image.react"),{src:g("492300")})),b("React").createElement("div",{className:"_6y7_"},b("React").createElement(b("FDSText.react"),{color:"white",size:"body3",weight:"bold"},m)),b("React").createElement("div",{className:"_6y1q"},b("React").createElement(b("Image.react"),{src:g("483253")}))):b("React").createElement(b("React").Fragment,null,b("React").createElement("div",null,b("React").createElement(b("Image.react"),{src:g("681203")})),b("React").createElement(b("FDSText.react"),{color:"white",size:"body3",weight:"bold"},a.hasProfilePhoto?k:l))}function a(a){__p&&__p();var c=a.canViewerEdit,d=a.profilePictureData,e=a.showStoryRing;a=a.onOverlayClick;if(!e&&!c)return null;var f=d.photoID;d=d.photoSourcePageID;e=b("React").createElement("div",{className:"_6v9b"},b("React").createElement("div",{className:"_6v8o"+(e?" size-small":"")+(e?"":" size-large")},b("React").createElement("div",{className:"_6w7n"},b("React").createElement(n,{canViewerEdit:c,hasProfilePhoto:f!==null,showStoryRing:e}))));if(!c){c=b("XPhotoPermalinkController").getURIBuilder().setInt("photo_id",f).setString("vanity",d).getURI();return b("React").createElement(b("Link.react"),{"aria-label":i._("Photo de profil"),className:"_2dgj",href:c,rel:"theater"},e)}return b("React").createElement(b("Link.react"),{"aria-label":i._("Update menu"),className:"_2dgj",onClick:a},e)}e.exports=a}),null);
__d("PagesProfilePictureStoryEditMenu.react",["cx","fbt","ActorURI","FBStoriesActions","FBStoriesStore","FBStoriesViewerEntrypoint","FBStoriesViewerHelper","FDSText.react","FileInput.react","FileInputUploader","Link.react","PagesProfilePictureActions","PagesProfileTestID","PhotoBrowserDialogEndpointType","PhotoBrowserDialogPhotoGeneratorType","React","ReactDOM","SUIActionMenu.react","SUIBusinessTheme","XPagesProfilePictureUploadAsyncController","XPhotoBrowserDialogController","XPhotoPermalinkController","XProfilePicCameraPhotoController","XProfilePicMenuDialogEditThumbnailController","XProfilePicRemoveDialogController"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("PagesProfilePictureActions").updateProfilePicture,k=h._("S\u00e9lectionner parmi les photos"),l=h._("Prendre une photo"),m=h._("Importer une photo"),n=h._("Modifier la miniature"),o=h._("Supprimer"),p=h._("Mettre \u00e0 jour la photo de profil"),q=h._("Add Profile Photo"),r=h._("View Profile Photo"),s=h._("Voir la story"),t=h._("Photo de profil"),u=h._("Stories de la Page");function v(a,b){return b!==a}function w(a){return b("React").createElement(b("FileInput.react"),{accept:"image/*",containerClassName:"_6xfx","data-testid":b("PagesProfileTestID").PROFILE_PICTURE_UPLOAD_MENU_ITEM,display:"inline-block",name:"profile_pic",onChange:a.onUploadPhoto,ref:a.fileInputRef},b("React").createElement(b("Link.react"),{className:"_6xfx",href:"#"},b("React").createElement(b("FDSText.react"),{color:"secondary",size:"body3"},m)))}function x(a){return b("React").createElement(b("Link.react"),{ajaxify:a.uri,className:"_6xfx",href:"#",rel:"dialog"},b("React").createElement(b("FDSText.react"),{color:"secondary",size:"body3"},a.labelText))}function y(a){a=a.profilePictureData;var c=a.pageID,d=a.photoID;a=a.photoSourcePageID;d=b("XPhotoPermalinkController").getURIBuilder().setInt("photo_id",d).setString("vanity",a).getURI();return b("React").createElement(b("Link.react"),{"aria-label":t,className:"_6xfx",href:b("ActorURI").create(d,c),rel:"theater"},b("React").createElement(b("FDSText.react"),{color:"secondary",size:"body3",weight:"bold"},r))}function z(a){return b("React").createElement(b("Link.react"),{"aria-label":u,className:"_6xfx",onClick:a.onViewStoryClick},b("React").createElement(b("FDSText.react"),{color:"secondary",size:"body3",weight:"bold"},s))}function A(a,c){return!a?null:b("XPhotoBrowserDialogController").getURIBuilder().setEnum("endpoint",b("PhotoBrowserDialogEndpointType").PAGE_PICTURE).setEnum("generator",b("PhotoBrowserDialogPhotoGeneratorType").PAGE).setString("data","pages_profile_picture").setInt("id",c).getURI()}function B(a){var c=b("XProfilePicCameraPhotoController").getURIBuilder().setInt("profile_id",a).setString("source","timeline").getURI();return b("ActorURI").create(c,a)}function C(a){var c=a.pageID,d=a.photoID,e=a.photoIsSquare;a=a.photoSourcePageID;if(d===null||e||v(c,a))return null;d=b("XProfilePicMenuDialogEditThumbnailController").getURIBuilder().setFBID("profile_id",c).getURI();return b("ActorURI").create(d,c)}function D(a){var c=a.pageID,d=a.photoID;a=a.photoSourcePageID;if(d===null||v(c,a))return null;d=b("XProfilePicRemoveDialogController").getURIBuilder().setInt("profile_id",c).getURI();return b("ActorURI").create(d,c)}function E(a,c,d,e){__p&&__p();var f=c.pageID,g=c.pageHasPhotos,h=[];g=A(g,f);g!==null&&h.push({type:"item",label:b("React").createElement(x,{labelText:k,uri:g}),onClick:d});h.push({type:"item",label:b("React").createElement(x,{labelText:l,uri:B(f)}),onClick:d});h.push({type:"item",label:b("React").createElement(w,{fileInputRef:a,onUploadPhoto:e}),onClick:function(){}});g=C(c);g!==null&&h.push({type:"item",label:b("React").createElement(x,{labelText:n,uri:g}),onClick:d});f=D(c);f!==null&&h.push({type:"item",label:b("React").createElement(x,{labelText:o,uri:f}),onClick:d});return h}c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$2=b("React").createRef(),this.$3=function(){var a=this.props,c=a.profilePictureData;a=a.onMenuClick;c=c.pageID;j();c=b("ActorURI").create(b("XPagesProfilePictureUploadAsyncController").getURIBuilder().setFBID("page_id",c).getURI(),c);new(b("FileInputUploader"))(b("ReactDOM").findDOMNode(this.$2.current)).setURI(c).setAllowCrossOrigin(!0).send();a()}.bind(this),this.$4=function(){var a=this.props.bucketID;if(a!==null&&a!==void 0){a=b("FBStoriesActions").userSelectedBucket(a)&&b("FBStoriesStore").getThreadCountForSelectedBucket()>0;a&&b("FBStoriesViewerHelper").toggleViewer(!0,b("FBStoriesViewerEntrypoint").PAGES_PROFILE_PICTURE)}}.bind(this),this.$5=function(a){this.$1=a}.bind(this),c}a.prototype.componentDidMount=function(){this.$1&&this.$1.focus()};a.prototype.render=function(){var a=this.props,c=a.profilePictureData,d=a.showCircularLoader,e=a.showStoryRing,f=a.onMenuClick,g=a.onMouseEnterMenu,h=a.onMouseLeaveMenu;a=a.onOverlayBlur;var i=c.photoID,j=[],k=E(this.$2,c,f,this.$3),l=b("React").createElement(b("SUIActionMenu.react"),{items:k,theme:b("SUIBusinessTheme")});e&&(j.push({type:"item",label:b("React").createElement(z,{onViewStoryClick:this.$4}),onClick:f}),i!==null&&j.push({type:"item",label:b("React").createElement(y,{profilePictureData:c}),onClick:f}),j.push({type:"group",label:i!==null?p:q,items:k}),l=b("React").createElement(b("SUIActionMenu.react"),{items:j,theme:b("SUIBusinessTheme")}));return b("React").createElement("div",{className:"_6xgp"+(!e&&!d?" small-padding":"")+(e||d?" large-padding":""),onBlur:a,onMouseEnter:g,onMouseLeave:h,ref:this.$5,tabIndex:"0"},l)};e.exports=a}),null);
__d("PagesProfilePictureStoryLink.react",["cx","fbt","FBStoriesActions","FBStoriesStore","FBStoriesViewerEntrypoint","FBStoriesViewerHelper","Link.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=h._("Stories de la Page");c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=function(){b("FBStoriesActions").userSelectedBucket(this.props.bucketID)&&b("FBStoriesStore").getThreadCountForSelectedBucket()>0&&b("FBStoriesViewerHelper").toggleViewer(!0,b("FBStoriesViewerEntrypoint").PAGES_PROFILE_PICTURE)}.bind(this),c}a.prototype.render=function(){return b("React").createElement(b("Link.react"),{"aria-label":j,className:"_2dgj",onClick:this.$1},this.props.children)};e.exports=a}),null);
__d("PagesCircularProfilePicture.react",["cx","Image.react","PagesBlueCrossAddStoryButton.react","PagesCircularProfilePictureOverlay.react","PagesProfilePictureActions","PagesProfilePictureLink.react","PagesProfilePictureStoryEditMenu.react","PagesProfilePictureStoryLink.react","PagesStoryCreationStatusTypes","ProfileHeaderSpinner.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("PagesProfilePictureActions").updateProfilePictureStory,j=172,k=156;function l(a){var c=a.canViewerEdit,d=a.overlayShown,e=a.profilePictureData,f=a.showCircularLoader,g=a.showStoryRing,h=a.storyBucket,i=a.onMouseEnterProfilePicture,l=a.onMouseLeaveProfilePicture;a=a.onOverlayClick;var m=e.loading,n=e.uri,o=f||g?k:j;n=b("React").createElement("div",{className:"_6tay",style:{width:o,height:o}},b("React").createElement(b("Image.react"),{className:"_6tb5"+(m?" _179t":""),height:o,src:n,width:o}));return b("React").createElement("div",{className:"_6taw"},b("React").createElement("div",{className:"_6tax",onMouseEnter:i,onMouseLeave:l},g?b("React").createElement(b("PagesProfilePictureStoryLink.react"),{bucketID:h.bucketID},n):b("React").createElement(b("PagesProfilePictureLink.react"),e,n),!m&&d&&b("React").createElement(b("PagesCircularProfilePictureOverlay.react"),{canViewerEdit:c,onOverlayClick:a,profilePictureData:e,showStoryRing:g||f})),b("React").createElement(b("ProfileHeaderSpinner.react"),{shown:m}))}d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){__p&&__p();var a,b;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return b=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={menuShown:!1,mouseOnMenu:!1,overlayShown:((c=this.props)!=null?(c=c.profilePictureData)!=null?c.photoID:c:c)===null},this.$1=function(){this.setState({overlayShown:!0})}.bind(this),this.$2=function(){var a;((a=this.props)!=null?(a=a.profilePictureData)!=null?a.photoID:a:a)!==null&&this.setState({overlayShown:!1})}.bind(this),this.$3=function(){this.setState({mouseOnMenu:!0})}.bind(this),this.$4=function(){this.setState({mouseOnMenu:!1})}.bind(this),this.$5=function(){var a=this.state.menuShown;a&&this.$4();this.setState({menuShown:!a})}.bind(this),this.$6=function(a){__p&&__p();var b;b=(b=a)!=null?b.relatedTarget:b;a=(a=a)!=null?a.currentTarget:a;if(b instanceof HTMLElement&&a instanceof HTMLElement){b=b&&b.parentElement;var c=b&&b.parentElement;if(b===a||c===a)return}((b=this.props)!=null?(b=b.profilePictureData)!=null?b.photoID:b:b)!==null&&!this.state.mouseOnMenu&&!this.state.overlayShown&&this.setState({menuShown:!1,mouseOnMenu:!1,overlayShown:!1})}.bind(this),b}a.prototype.shouldComponentUpdate=function(a){__p&&__p();var c,d;d=(d=this.props)!=null?(d=d.profilePictureData)!=null?d.profilePicStoryData:d:d;c=(c=a)!=null?(c=c.profilePictureData)!=null?c.profilePicStoryData:c:c;if(!c)return!0;c=c.get("storyCreationStatus");if(c===b("PagesStoryCreationStatusTypes").STORY_CREATION_SUCCESS){d=!!d&&d.get("storyCreationStatus");d=d===b("PagesStoryCreationStatusTypes").STORY_CREATION_STARTED&&c!==b("PagesStoryCreationStatusTypes").STORY_CREATION_STARTED;if(d){return((c=a)!=null?(c=c.storyBucket)!=null?c.latestThreadCreationTime:c:c)!==((d=this.props)!=null?(d=d.storyBucket)!=null?d.latestThreadCreationTime:d:d)}else return!!a.storyBucket}return!0};a.prototype.componentDidUpdate=function(a){!a.storyBucket&&!!this.props.storyBucket&&i(null)};a.prototype.render=function(){var a,c,d=this.props,e=d.profilePictureData;d=d.storyBucket;c=(c=e)!=null?c.profilePicStoryData:c;a=!!((a=e)!=null?a.editable:a);var f=!!c&&c.get("storyCreationStatus")===b("PagesStoryCreationStatusTypes").STORY_CREATION_STARTED,g=!!c&&c.get("useDialogStoryComposer");c=!!c&&c.get("postTabStoryCreationEnabled");var h=this.state,i=h.overlayShown;h=h.menuShown;return b("React").createElement(b("React").Fragment,null,b("React").createElement("div",{className:"_6taw"+(!!d||f?" _6tv-":"")+(f?" _6zia":"")+(!!d&&d.hasUnseenThreads?" _6two":"")},b("React").createElement(l,{canViewerEdit:a,onMouseEnterProfilePicture:this.$1,onMouseLeaveProfilePicture:this.$2,onOverlayClick:this.$5,overlayShown:i||h,profilePictureData:e,showCircularLoader:f,showStoryRing:!!d,storyBucket:d}),f&&b("React").createElement("div",{className:"_6zg7"}),a?b("React").createElement(b("PagesBlueCrossAddStoryButton.react"),{bottomRightMargin:!!d||f?"margin-4":"margin-8",pageID:e.pageID,shouldLandOnPostTab:c,shouldOpenComposerDialog:g,size:"normal"}):null),h&&b("React").createElement(b("PagesProfilePictureStoryEditMenu.react"),{bucketID:d?d.bucketID:null,onMenuClick:this.$5,onMouseEnterMenu:this.$3,onMouseLeaveMenu:this.$4,onOverlayBlur:this.$6,profilePictureData:e,showCircularLoader:f,showStoryRing:!!d}))};e.exports=a}),null);
__d("PagesCircularProfilePictureContainer.react",["CurrentUser","FBStoriesActions","FBStoriesDispatcher","FBStoriesStore","FBStoriesViewerBucketQueryWebGraphQLQuery","FluxContainer","PagesCircularProfilePicture.react","React","WebGraphQL","fbStoriesRootSelectors","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.getStores=function(){return[b("FBStoriesStore")]};a.calculateState=function(){var a=b("FBStoriesStore").getState();return{storyBucketDescriptors:b("fbStoriesRootSelectors").bucketDescriptors(a)}};a.prototype.componentDidMount=function(){b("FBStoriesDispatcher").explicitlyRegisterStores([b("FBStoriesStore")]);var a=this.state.storyBucketDescriptors;a=a&&a[0];a||this.$1()};a.prototype.componentDidUpdate=function(){var a=this.state.storyBucketDescriptors;a=a&&a[0];a||this.$1()};a.prototype.componentWillUnmount=function(){b("FBStoriesActions").resetStore()};a.prototype.$1=function(){var a;a=(a=this.props)!=null?(a=a.profilePictureData)!=null?a.profilePicStoryData:a:a;a=a&&a.get("bucketID");if(a===null||a===void 0)return;a=new(b("FBStoriesViewerBucketQueryWebGraphQLQuery"))({bucketID:a,threadCount:100});b("promiseDone")(b("WebGraphQL").exec(a),function(a){return this.$2(a)}.bind(this),function(a){return this.$3(a)}.bind(this))};a.prototype.$2=function(a){a=(a=a)!=null?a.node:a;if(a===null||a===void 0)return;b("FBStoriesActions").loadData(b("CurrentUser").getName(),b("CurrentUser").getID(),null,null,[a])};a.prototype.$3=function(a){};a.prototype.render=function(){var a=this.state.storyBucketDescriptors;return b("React").createElement(b("PagesCircularProfilePicture.react"),{profilePictureData:this.props.profilePictureData,storyBucket:a&&a[0]})};function a(){g.apply(this,arguments)}e.exports=b("FluxContainer").create(a)}),null);
__d("PagesProfilePictureStore",["FluxReduceStore","PagesCoverType","PagesHeaderDispatcher","PagesHeaderPayloadType","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return{currentCoverType:b("PagesCoverType").COVER_PHOTO,editable:!1,loading:!1,modules:{PagesProfilePictureEditMenu:null},pageHasPhotos:!1,pageID:"0",photoID:null,photoIsSquare:!0,photoSourcePageID:"0",size:0,uri:null,videoData:null,isShowPageProfileInHeader:!1,profilePicStoryData:null,shouldShowImportIgProfilePhoto:!1}};a.prototype.reduce=function(a,c){__p&&__p();var d;switch(c.type){case b("PagesHeaderPayloadType").PROFILE_PICTURE_DATA:return babelHelpers["extends"]({},a,c.data,{profilePicStoryData:b("immutable").fromJS((d=c)!=null?(d=d.data)!=null?d.profilePicStoryData:d:d)});case b("PagesHeaderPayloadType").PROFILE_PICTURE_UPDATE:return babelHelpers["extends"]({},a,c.data);case b("PagesHeaderPayloadType").PROFILE_PICTURE_STORY_UPLOADING:var e;d=a.profilePicStoryData;if(!d)return babelHelpers["extends"]({},a);e=(e=c)!=null?(e=e.data)!=null?e.profilePicStoryData:e:e;d=d.set("storyCreationStatus",!!e&&e.get("storyCreationStatus"));return babelHelpers["extends"]({},a,c.data,{profilePicStoryData:d})}return a};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("PagesHeaderDispatcher"))}),null);