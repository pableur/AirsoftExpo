if (self.CavalryLogger) { CavalryLogger.start_js(["\/mnVq"]); }

__d("PhotoTagApproval",["Arbiter","CSS","DOM","Event","Parent","PhotosConst","ge"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";__p&&__p();this.viewer=a;this.units=[];this.currentUnit=0;var c=a.getVersionConst();c==b("PhotosConst").VIEWER_SNOWLIFT?this._root=b("ge")("fbPhotoSnowliftTagApproval"):this._root=b("ge")("fbPhotoPageTagApproval");b("Arbiter").subscribe(a.getEventString("DATA_CHANGE"),this.restartTagApproval.bind(this));b("Arbiter").subscribe("PhotoTagApproval.PENDING_TAG_PHOTO_CLICK",this.pendingTagPhotoClick.bind(this));b("Event").listen(this._root,"click",this.handleClick.bind(this));b("Event").listen(this._root,"mousemove",function(a){this.hiliteCurrentPendingTag(),b("Event").kill(a)}.bind(this));this.restartTagApproval()}a.prototype.handleClick=function(a){"use strict";__p&&__p();a=a.getTarget();if(b("CSS").hasClass(a,"nextPager")&&b("CSS").hasClass(a,"enabled"))this.showNextUnit();else if(b("CSS").hasClass(a,"prevPager")&&b("CSS").hasClass(a,"enabled"))this.showPrevUnit();else if(b("Parent").byClass(a,"fbPhotoApprovalPendingButtons")){var c=this.units[this.currentUnit];c=this.getTagNameID(c);if(c){a=b("Parent").byClass(a,"approve");b("Arbiter").inform("PhotoTagApproval.UPDATE_TAG_BOX",{id:c,approve:a,version:this.viewer.getVersionConst()})}setTimeout(this.removeSelectedUnit.bind(this),0)}return!0};a.prototype.loadUnits=function(a){"use strict";this.units=b("DOM").scry(this._root,"div.fbPhotoApprovalUnit"),this.units.length?(b("CSS").show(this._root),this.showUnit(a),b("CSS").conditionClass(this._root,"hidePagers",this.units.length==1)):(b("CSS").hide(this._root),b("Arbiter").inform("PhotoTagApproval.HILITE_TAG",{tag:null,version:this.viewer.getVersionConst()}))};a.prototype.restartTagApproval=function(){"use strict";this.loadUnits(0)};a.prototype.pendingTagPhotoClick=function(a,c){"use strict";__p&&__p();if(c.version!==b("PhotosConst").VIEWER_PERMALINK&&c.version!==b("PhotosConst").VIEWER_SNOWLIFT)return!0;a="approve:"+c.id;for(var c=0;c<this.units.length;c++)if(this.units[c].id===a){this.showUnit(c);return!1}return!0};a.prototype.removeSelectedUnit=function(){"use strict";var a=this.units[this.currentUnit];b("DOM").remove(a);this.loadUnits(this.currentUnit)};a.prototype.showNextUnit=function(){"use strict";this.showUnit(this.currentUnit+1)};a.prototype.showPrevUnit=function(){"use strict";this.showUnit(this.currentUnit-1)};a.prototype.getTagNameID=function(a){"use strict";var b=a.id.indexOf(":");return a.id.slice(b+1)};a.prototype.showUnit=function(a){"use strict";this.units.forEach(b("CSS").hide);this.currentUnit=(a+this.units.length)%this.units.length;a=this.units[this.currentUnit];b("CSS").show(a);this.hiliteCurrentPendingTag();b("CSS").conditionClass(b("DOM").find(this._root,"a.prevPager"),"enabled",this.currentUnit>0);b("CSS").conditionClass(b("DOM").find(this._root,"a.nextPager"),"enabled",this.currentUnit<this.units.length-1)};a.prototype.hiliteCurrentPendingTag=function(){"use strict";var a=this.units[this.currentUnit];a=this.getTagNameID(a);b("Arbiter").inform("PhotoTagApproval.HILITE_TAG",{tag:a,version:this.viewer.getVersionConst()})};e.exports=a}),null);
__d("PhotoTags",["csx","Arbiter","CSS","DOM","Event","Parent","PhotosConst","ge"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c,d){"use strict";this.tagTargets=a,this.tagBox=c,this.version=d||b("PhotosConst").VIEWER_PERMALINK,this.handlers=[],this.tagTargets.forEach(function(a){this.handlers.push(b("Event").listen(a,{mouseover:this.showTag.bind(this),mouseout:this.hideTags.bind(this)}))}.bind(this)),this.subscriptions=[],this.version==b("PhotosConst").VIEWER_SNOWLIFT&&this.subscriptions.push(b("Arbiter").subscribe("PhotoSnowlift.PAGE",this.hideTags.bind(this)))}a.prototype.showTag=function(a){"use strict";__p&&__p();a=a.getTarget();var c=b("CSS").hasClass(a,"taggee"),d=b("CSS").matchesSelector(a,"._54ru"),e=null,f=null;if(c)e=a.getAttribute("data-tag"),f=a.getAttribute("data-tagtype");else if(d){c=b("Parent").byTag(a,"a");e=c&&c.getAttribute("data-tag")}e||(a=b("Parent").byClass(a,"taggee"),a&&(e=a.getAttribute("data-tag"),f=a.getAttribute("data-tagtype")));d=this.version==b("PhotosConst").VIEWER_PERMALINK?"perm:tag:"+e:"tag:"+e;c=d&&b("ge")(d);c&&(f==="product"?b("CSS").addClass(c,"hover"):b("CSS").addClass(c,"showTag"),b("CSS").addClass(this.tagBox,"showingTag"),b("Arbiter").inform("PhotoTags.SHOWTAG",e))};a.prototype.hideTags=function(){"use strict";b("CSS").removeClass(this.tagBox,"showingTag"),b("DOM").scry(this.tagBox,"div.showTag").forEach(function(a){b("CSS").removeClass(a,"showTag")}),b("DOM").scry(this.tagBox,"div.hover").forEach(function(a){b("CSS").removeClass(a,"hover")}),b("Arbiter").inform("PhotoTags.HIDETAG")};a.prototype.destroy=function(){"use strict";for(var a in this.handlers)this.handlers[a].remove();this.subscriptions.forEach(b("Arbiter").unsubscribe,b("Arbiter"))};e.exports=a}),null);
__d("PhotoViewerFollow",["Arbiter","AsyncRequest","BanzaiODS","CSS","DOM","Event","Parent","PhotosConst","$","collectDataAttributes"],(function(a,b,c,d,e,f){__p&&__p();var g={};function h(a){"use strict";this.FOLLOW_LOCATION_PHOTO=48,this.viewer=a}h.prototype.init=function(a,c,d,e,f,g,h){"use strict";this.subscribeLink=a,this.unsubscribeFlyout=c,this.subscribeEndpoints=f,this.unsubscribeEndpoints=g,this.unsubLinks=e,this.unsubDiv=d,this.reset(),this.activate(),this.type=h,b("Event").listen(this.subscribeLink,"click",function(a){b("Parent").byClass(a.getTarget(),"photoViewerFollowLink")&&this.subscribePhotoOwner()}.bind(this)),b("Event").listen(this.unsubLinks.user,"click",this.unsubscribePhotoOwner.bind(this)),b("Event").listen(this.unsubLinks.page,"click",this.unsubscribePhotoOwner.bind(this)),b("Arbiter").subscribe(["FollowUser","FollowUserFail","UnfollowUser","UnfollowUserFail"],this.updateSubscribe.bind(this)),b("Arbiter").subscribe(this.viewer.getEventString("DATA_CHANGE"),this.showSubscribeLinkOnChange.bind(this)),this.viewer.getVersionConst()===b("PhotosConst").VIEWER_SNOWLIFT&&(b("Arbiter").subscribe(this.viewer.getEventString("CLOSE"),this.reset.bind(this)),b("Arbiter").subscribe(this.viewer.getEventString("OPEN"),this.activate.bind(this))),this.registerUnsubscribeTarget()};h.prototype.activate=function(){"use strict";this.activated=!0};h.prototype.reset=function(){"use strict";this.unsubscribeFlyout&&this.unsubscribeFlyout.clearNodes(),this.subscriptionChange={},this.activated=!1};h.prototype.registerUnsubscribeTarget=function(){"use strict";if(!this.unsubscribeFlyout)return;var a=b("DOM").scry(this.subscribeLink,".photoViewerFollowedMsg")[0];a&&!b("CSS").hasClass(a,"unsubFlyoutEnabled")&&(this.unsubscribeFlyout.initNode(a),b("CSS").addClass(a,"unsubFlyoutEnabled"))};h.prototype.updateSubscribe=function(a,b){"use strict";if(!this.activated)return;b=b.profile_id;b&&(this.subscriptionChange[b]=a==="FollowUser"||a==="UnfollowUserFail"?"following":"unfollowed",this.toggleSubscribeLink(b))};h.prototype.showSubscribeLinkOnChange=function(a,c){"use strict";this.type=c.ownertype,b("CSS").conditionClass(this.unsubDiv,"isPage",this.type==="page"),this.toggleSubscribeLink(c.owner)};h.prototype.toggleSubscribeLink=function(a){"use strict";var c=b("DOM").scry(this.subscribeLink,"span.fbPhotoSubscribeWrapper")[0];if(!c)return;this.subscriptionChange[a]&&(b("CSS").conditionClass(c,"followingOwner",this.subscriptionChange[a]==="following"),this.subscriptionChange[a]==="unfollowed"&&(this.unsubscribeFlyout&&this.unsubscribeFlyout.hideFlyout(!0)));this.registerUnsubscribeTarget()};h.prototype.subscribePhotoOwner=function(){"use strict";__p&&__p();if(!this.viewer.getOwnerId())return;var a=this.type==="user"?{profile_id:this.viewer.getOwnerId()}:{fbpage_id:this.viewer.getOwnerId(),add:!0,reload:!1,fan_origin:"photo_snowlift"};b("Arbiter").inform("FollowUser",{profile_id:this.viewer.getOwnerId()});this.type==="page"&&b("BanzaiODS").bumpEntityKey("snowlift_page_like","snowlift_page_like.clicked_link");a.location=this.FOLLOW_LOCATION_PHOTO;var c=event.getTarget();c&&Object.assign(a,{ft:b("collectDataAttributes")(c,["ft"]).ft});new(b("AsyncRequest"))(this.subscribeEndpoints[this.type]).setAllowCrossPageTransition(!0).setData(a).setMethod("POST").setReadOnly(!1).setErrorHandler(b("Arbiter").inform.bind(null,"FollowUserFail",a)).send()};h.prototype.unsubscribePhotoOwner=function(){"use strict";if(!this.viewer.getOwnerId())return;var a=this.type==="user"?{profile_id:this.viewer.getOwnerId()}:{fbpage_id:this.viewer.getOwnerId(),add:!1,reload:!1};b("Arbiter").inform("UnfollowUser",{profile_id:this.viewer.getOwnerId()});a.location=this.FOLLOW_LOCATION_PHOTO;var c=event.getTarget();c&&Object.assign(a,{ft:b("collectDataAttributes")(c,["ft"]).ft});new(b("AsyncRequest"))(this.unsubscribeEndpoints[this.type]).setAllowCrossPageTransition(!0).setData(a).setMethod("POST").setReadOnly(!1).setErrorHandler(b("Arbiter").inform.bind(null,"UnfollowUserFail",a)).send()};h.createInstance=function(a,c,d,e,f,i,j,k){"use strict";a=a.getInstance();var l=new h(a);l.init(b("$")(c),d,e,f,i,j,k);g[a.getVersionConst()]=l;return l};h.getInstance=function(a){"use strict";return g[a]};e.exports=h}),null);
__d("PhotoViewerInitPagelet",["DOM","PhotoSnowlift","PhotoTagApproval","PhotoTagger","PhotoTags","ge"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";__p&&__p();b("PhotoSnowlift").attachTagger(a.tagging,a.tokenizer,a.ufi);var c=b("PhotoSnowlift").getInstance(),d=c.getRoot();new(b("PhotoTags"))([b("ge")("fbPhotoSnowliftAuthorName"),b("DOM").find(d,"span.fbPhotoTagList"),b("DOM").find(d,"div.fbPhotoProductsTagList"),b("DOM").find(d,"div.fbCommerceProductMiniListHscroll")],b("ge")("fbPhotoSnowliftTagBoxes"),a.version);if(a.setupPhotoTagger){d=new(b("PhotoTagger"))(c);d.initSnowlift(a.tagging,a.tokenizer,a.userId,a.ufi);d.setQueueName(a.queueName)}new(b("PhotoTagApproval"))(c)}e.exports=a}),null);
__d("TagToken",["DOM","Token"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("Token"));g=c&&c.prototype;function a(a){"use strict";g.constructor.call(this,a,"tag")}a.prototype.createElement=function(){"use strict";var a=this.isFreeform(),c=b("DOM").create("span",{className:"separator"},", "),d=b("DOM").create(a?"span":"a",{className:"taggee","data-tag":this.getValue()},this.getText());a||(d.href=this.getInfo().path);return b("DOM").create("span",{className:"tagItem"},[c,d])};e.exports=a}),null);
__d("TagTokenizer",["fbt","Arbiter","CSS","DOM","Parent","TagToken","Tokenizer","createObjectFrom","ge","getElementText"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("Tokenizer"));h=c&&c.prototype;function a(a,c,d,e,f){"use strict";h.constructor.call(this,d,e,f),b("Arbiter").subscribe("PhotoInlineEditor.CANCEL_INLINE_EDITING",this.updateTokenareaVisibility.bind(this),"new"),this.appphoto=c,b("Arbiter").subscribe(a.getInstance().getEventString("DATA_CHANGE"),this.setup.bind(this),"new")}a.prototype.setup=function(a,b){"use strict";this.appphoto=b.byapp;this.byowner=b.isowner;return this.reset()};a.prototype.reset=function(){"use strict";var a=this.getTokenElements().map(this.getTokenDataFromTag,this);this.withTagKeys={};var c=this.getWithTagTokenElements().map(function(a){return this._tokenKey(this.getTokenDataFromTag(a))}.bind(this));this.withTagKeys=b("createObjectFrom")(c);return h.reset.call(this,a)};a.prototype.processEvents=function(a,c,d){"use strict";if(b("Parent").byClass(c,"remove")){d=this.getTokenFromElement(d);d=this.addTokenData(d,c);this.removeToken(d);a.kill()}};a.prototype.insertToken=function(a){"use strict";return null};a.prototype.removeToken=function(a){"use strict";if(this.appphoto)return this.replaceToken(a);else this.inform("removeToken",a),b("Arbiter").inform("Form/change",{node:this.element});return null};a.prototype.addTokenData=function(a,c){"use strict";b("Parent").byClass(c,"blockuser")&&(a.blockUser=!0);return a};a.prototype.getTokenDataFromTag=function(a){"use strict";return{uid:b("DOM").find(a,"input").value,text:b("getElementText")(b("DOM").find(a,".taggee"))}};a.prototype.getTokenElementFromTarget=function(a){"use strict";return b("Parent").byClass(a,"tagItem")};a.prototype.getTokenElements=function(){"use strict";return b("DOM").scry(this.tokenarea,"span.tagItem").filter(this.filterNonTokenElements,this)};a.prototype.getWithTagTokenElements=function(){"use strict";return b("DOM").scry(this.tokenarea,"span.withTagItem")};a.prototype.filterNonTokenElements=function(a){"use strict";return!b("CSS").hasClass(a,"markasspam")&&!b("CSS").hasClass(a,"reported")&&!b("CSS").hasClass(a,"withTagItem")};a.prototype.createToken=function(a,c){"use strict";var d=this.getToken(this._tokenKey(a));d=d||new(b("TagToken"))(a);c&&d.setElement(c);return d};a.prototype.updateTokenareaVisibility=function(){"use strict";var a=this.getTokenElements().filter(function(a){return b("CSS").shown(a)}),c=this.getWithTagTokenElements(),d=b("DOM").scry(this.tokenarea,"span.ogTagItem");b("CSS").conditionShow(this.tokenarea,a.length!==0||c.length!==0||d.length!==0)};a.prototype.replaceToken=function(a){"use strict";__p&&__p();if(!a)return;var c=this.tokens.indexOf(a);if(c<0)return;this.tokens.splice(this.tokens.indexOf(a),1);delete this.unique[this._tokenKey(a.getInfo())];c=b("ge")("tagspam"+a.getValue());c&&b("DOM").remove(c);c=[" [",g._("Identification retir\u00e9e.")," "];c.push(b("DOM").create("a",{onclick:this.markAsSpam.bind(this,a.getValue())},g._("Marquer l\u2019identification comme ind\u00e9sirable")));c.push("] ");c=b("DOM").create("span",{className:"fbPhotosTaglistTag tagItem markasspam",id:"tagspam"+a.getValue()},c);b("DOM").replace(a.getElement(),c);this.updateTokenarea();this.inform("removeToken",a);b("Arbiter").inform("Form/change",{node:this.element})};a.prototype.markAsSpam=function(a){"use strict";var c=b("ge")("tagspam"+a),d=[" [",g._("Identification signal\u00e9e"),"] "];d=b("DOM").create("span",{className:"fbPhotosTaglistTag tagItem reported",id:"tagspam"+a},d);b("DOM").replace(c,d);this.inform("markTagAsSpam",a)};a.prototype.removeTokenForSpatialTag=function(a){"use strict";h.removeToken.call(this,a)};e.exports=a}),null);