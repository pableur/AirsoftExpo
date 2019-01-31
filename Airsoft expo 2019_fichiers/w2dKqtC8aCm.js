if (self.CavalryLogger) { CavalryLogger.start_js(["B67ll"]); }

__d("SavedForLaterCounterContainer",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.counters=new Map()}a.prototype.add=function(a,b){this.counters.set(a,b)};a.prototype.increment=function(){this.counters.forEach(function(a){a.increment()})};a.prototype.decrement=function(){this.counters.forEach(function(a){a.decrement()})};e.exports=a}),null);
__d("SavedForLaterDashboardCollectionIcon.react",["cx","Image.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=20;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){if(this.props.src)return b("React").createElement("span",null,b("React").createElement(b("Image.react"),{src:this.props.src,width:i,height:i,className:"_2mwd"}));else if(this.props.firstLetter.length>0)return b("React").createElement("span",{className:"_2mwe"},b("React").createElement("span",{className:"_2mwg"},this.props.firstLetter));return null};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("XSaveListCreateDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/save/list/dialog/",{object_id:{type:"FBID"},mechanism:{type:"String"},surface:{type:"String"}})}),null);
__d("SavedForLaterDashboardAddToCollectionButton.react",["ix","cx","fbt","CollectionCurationMechanisms","CollectionsDisplaySurface","Image.react","MenuSeparator","PopoverMenu.react","React","ReactXUIMenu","SavedForLaterDashboardCollectionIcon.react","SavedListStateActions","XSaveListCreateDialogController","XSaveListMutationController","XUIButton.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=b("ReactXUIMenu").Item;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){return b("React").createElement(b("PopoverMenu.react"),{alignv:"baseline",menu:this.$1()},b("React").createElement(b("XUIButton.react"),{className:"_2p-o",image:b("React").createElement(b("Image.react"),{src:g("130011")}),label:i._("Ajouter \u00e0 la collection")}))};a.prototype.$1=function(){var a=this.$2();a.length>0&&a.push(b("React").createElement(b("MenuSeparator"),{key:"createListMenuSeparator"}));a.push(this.$3());return b("React").createElement(b("ReactXUIMenu"),null,a)};a.prototype.$2=function(){return this.props.nonContainingLists.map(function(a){var c=b("XSaveListMutationController").getURIBuilder().setFBID("object_id",this.props.savableId).setEnum("action",b("SavedListStateActions").SAVE_IN_EXISTING_LIST).setEnum("mechanism",b("CollectionCurationMechanisms").ADD_TO_LIST_BUTTON).setEnum("surface",b("CollectionsDisplaySurface").SAVE_DASHBOARD).setInt("list_id",a.listId).getURI();return b("React").createElement(k,{icon:b("React").createElement(b("SavedForLaterDashboardCollectionIcon.react"),{firstLetter:a.firstLetter,src:a.imageSource}),href:"#",ajaxify:c,rel:"async-post",key:a.listId,onClick:this.handleAddToCollection.bind(this,a.listId)},a.name)}.bind(this))};a.prototype.$3=function(){var a=b("XSaveListCreateDialogController").getURIBuilder().setFBID("object_id",this.props.savableId).setString("surface",b("CollectionsDisplaySurface").SAVE_DASHBOARD).setString("mechanism",b("CollectionCurationMechanisms").ADD_TO_SAVED_LIST_BUTTON).getURI();return b("React").createElement(k,{key:"createListMenuItem",ajaxify:a,rel:"dialog"},i._("Cr\u00e9er une collection"))};a.prototype.handleAddToCollection=function(a){this.props.addItemToList(a)};function a(){j.apply(this,arguments)}e.exports=a}),null);
__d("SavedForLaterDashboardDataStore",["CollectionsDisplaySurface","DataStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="constant_save_dashboard";a={setCollectionID:function(a){b("DataStore").set(g,"collection_id",a)},getCollectionID:function(){var a=null;b("DataStore").get(g,"collection_id")&&(a=b("DataStore").get(g,"collection_id"));return a},setSurface:function(a){b("DataStore").set(g,"surface",a)},getSurface:function(){var a=b("CollectionsDisplaySurface").SAVE_DASHBOARD;b("DataStore").get(g,"surface")&&(a=b("DataStore").get(g,"surface"));return a}};e.exports=a}),null);
__d("SavedForLaterDashboardClickLogger",["csx","cx","Banzai","CollectionsDisplaySurface","CSS","DOM","DOMQuery","Event","Parent","SavedForLaterDashboardDataStore","guid","tidyEvent"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="_5wci",j="_5wcf",k="_4mvy",l="._16xn",m="_16xn",n="_16xq",o="._16xq",p="._5yjp",q={init:function(a,c,d,e){var f=b("SavedForLaterDashboardDataStore").getSurface();b("tidyEvent")(b("Event").listen(a,"click",function(a){b("Banzai").post(c,{save_id:d,surface:f,mechanism:e,event_id:b("guid")()},{delay:0,retry:!0})}))},initWithSavable:function(a,c,d,e,f){var g=b("SavedForLaterDashboardDataStore").getSurface();b("tidyEvent")(b("Event").listen(a,"click",function(a){b("Banzai").post(c,{savable_id:d,wrapper_id:e,surface:g,mechanism:f,event_id:b("guid")()},{delay:0,retry:!0})}))},initForItemConsumption:function(a){__p&&__p();b("tidyEvent")(b("Event").listen(a,"click",function(c){__p&&__p();c=b("Parent").bySelector(a,p);c&&b("CSS").addClass(c,k);c=b("Parent").byClass(a,i);if(c){c=b("DOMQuery").scry(c,o);if(c.length>0){c=c[0];b("CSS").removeClass(c,n);b("CSS").addClass(c,m)}}c=b("Parent").byClass(a,j);if(c){var d=b("DOMQuery").scry(c,l);if(d.length>0){d=d[0];b("CSS").removeClass(d,m);b("CSS").addClass(d,n)}}d=new CustomEvent("saveItemConsumed");c.dispatchEvent(d)}))},initForLikeButton:function(a,c,d,e){b("tidyEvent")(b("Event").listen(a,"click",function(a){var f=b("SavedForLaterDashboardDataStore").getSurface();b("CSS").hasClass(a.target.parentElement,"PageLikedButton")||b("Banzai").post(c,{save_id:d,surface:f,mechanism:e})}))},initBySelector:function(a,c,d,e,f){a=b("DOMQuery").scry(a,c);a.forEach(function(a){q.init(a,d,e,f)})},initForSearchButton:function(a,c,d){a=b("DOM").find(a,"button");b("tidyEvent")(b("Event").listen(a,"click",function(a){if(a.isRightClick()||a.isMiddleClick())return;a=b("SavedForLaterDashboardDataStore").getSurface();b("SavedForLaterDashboardDataStore").setSurface(b("CollectionsDisplaySurface").SAVE_SEARCH_DASHBOARD);b("Banzai").post(c,{surface:a,mechanism:d})}))},initForSettingsButton:function(a,c,d){b("tidyEvent")(b("Event").listen(a,"click",function(a){if(a.isRightClick()||a.isMiddleClick())return;b("Banzai").post(c,{surface:b("SavedForLaterDashboardDataStore").getSurface(),mechanism:d})}))}};e.exports=q}),null);
__d("SavedForLaterDashboardHeader",["AsyncRequest","CollectionsDisplaySurface","DataStore","DOM","SavedForLaterCounterContainer","SavedStateActions","XSaveController"],(function(a,b,c,d,e,f){__p&&__p();var g="SavedForLaterItemCounters",h="SavedForLaterDataStoreNamespace";function i(a,b){"use strict";a=i.getStoredItemCounters();for(var c in b)a.set(c,b[c])}i.getStoredItemCounters=function(){"use strict";return b("DataStore").get(h,g,new Map())};i.addItemCounter=function(a,c,d){"use strict";var e=this.getStoredItemCounters();e.has(a)||e.set(a,new(b("SavedForLaterCounterContainer"))());e.get(a).add(d,c)};i.update=function(a,b){"use strict";var c=this.getStoredItemCounters();c.forEach(function(c,d){j(a,d)&&c.increment(),j(b,d)&&c.decrement()})};i.updateAndReplace=function(a,c){"use strict";i.update(c.increment,c.decrement),a&&b("DOM").replace(a,c.markup)};i.toggleStatus=function(a){"use strict";var b=document.getElementById("item-"+a);a=document.getElementById("removed-item-"+a);b&&b.classList.toggle("hidden_elem");a&&a.classList.toggle("hidden_elem")};i.updateAndToggleStatus=function(a,b){"use strict";i.update(b.increment,b.decrement),i.toggleStatus(a)};i.incrementList=function(a){"use strict";var b=this.getStoredItemCounters();b.has(a)&&b.get(a).increment()};i.decrementList=function(a){"use strict";var b=this.getStoredItemCounters();b.has(a)&&b.get(a).decrement()};i.getRemoveItemUriBuilder=function(a,c){"use strict";return b("XSaveController").getURIBuilder().setInt("object_id",a.object_id).setEnum("action",b("SavedStateActions").UNSAVE).setEnum("mechanism",c).setEnum("surface",b("CollectionsDisplaySurface").SAVE_DASHBOARD)};i.removeItem=function(a,c,d,e){"use strict";d=i.getRemoveItemUriBuilder(d,e);i.updateAndReplace(a,c);new(b("AsyncRequest"))(d.getURI()).setServerDialogCancelHandler(function(d){a&&b("DOM").replace(c.markup,a),i.update(c.decrement,[])}).send()};i.removeItemAndToggleStatus=function(a,c,d){"use strict";d=i.getRemoveItemUriBuilder(c,d);i.updateAndToggleStatus(c.object_id,a);new(b("AsyncRequest"))(d.getURI()).setServerDialogCancelHandler(function(b){i.toggleStatus(c.object_id),i.update(a.decrement,[])}).send()};function j(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1}e.exports=i}),null);
__d("SavedForLaterDashboardNUX",["cx","DataStore","DOM","Event","Parent","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h="saved_for_later_dashboard_nux",i="fb_content";function a(a,c,d){"use strict";this.nuxElement=d;b("tidyEvent")([b("Event").listen(a,"click",this.remove.bind(this)),b("Event").listen(c,"click",this.remove.bind(this))]);a=b("Parent").byClass(d,i);b("DataStore").set(a,h,this)}a.prototype.remove=function(){"use strict";b("DOM").remove(this.nuxElement)};a.dismiss=function(a){"use strict";a=b("Parent").byClass(a,i);a=b("DataStore").get(a,h);a&&a.remove()};e.exports=a}),null);
__d("SavedForLaterDashboardHeaderCategoryFilter",["cx","Banzai","CollectionCurationMechanisms","CollectionsDisplaySurface","LoadingIndicator.react","PageTransitions","React","ReactDOM","SavedForLaterDashboardDataStore","SavedForLaterDashboardNUX","Selector","ge","guid"],(function(a,b,c,d,e,f,g){__p&&__p();var h="saved_for_later:click",i="_5x-b",j="saved_loading_indicator",k=b("CollectionsDisplaySurface").SAVE_DASHBOARD;a={init:function(a){this.bindSelectorBehavior(a)},initLinkSelector:function(a,b){this.bindSelectorBehavior(a,b)},bindSelectorBehavior:function(a,c){__p&&__p();a.subscribe("show",function(){b("SavedForLaterDashboardDataStore").setSurface(k),b("Banzai").post(h,{surface:k,mechanism:b("CollectionCurationMechanisms").FILTER_BUTTON,event_id:b("guid")()},{delay:0,retry:!0})}),a.subscribe("change",function(a,d){__p&&__p();a=d.item.getValue();var e=b("ge")("saveContentFragment");c.firstChild.textContent=d.item.getLabel();b("SavedForLaterDashboardDataStore").setSurface(k);b("Banzai").post(h,{surface:k,mechanism:b("CollectionCurationMechanisms").FILTER_LIST_BUTTON,event_id:b("guid")(),dashboard_section:a},{delay:0,retry:!0});b("SavedForLaterDashboardNUX").dismiss(e);d=b("PageTransitions").getCurrentURI().getUnqualifiedURI();var f=b("PageTransitions").getCurrentURI().getUnqualifiedURI();f.removeQueryData("unlisted_only");f.removeQueryData("dashboard_section");f.removeQueryData("seen_state_filter");a=="NOT_SEEN"?f.addQueryData({seen_state_filter:1}):a=="UNLISTED"?f.addQueryData({unlisted_only:"true"}):f.addQueryData({dashboard_section:a});f.removeQueryData("list_id");b("PageTransitions").rewriteCurrentURI(d,f);b("ReactDOM").render(b("React").createElement("div",{className:i,id:j},b("React").createElement(b("LoadingIndicator.react"),{size:"large",color:"white"})),e)})}};e.exports=a}),null);
__d("SavedForLaterDashboardItemListsManager",["DataStore","SavedForLaterDashboardHeader"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="SavedForLaterListsForItem",h="SavedForLaterDataStoreNamespace";a={getListsForAllItems:function(){return b("DataStore").get(h,g,new Map())},getListsForItem:function(a){return this.getListsForAllItems().get(a)},setListsForItem:function(a,b){var c=this.getListsForAllItems();c.set(a,new Set());b.forEach(function(b){c.get(a).add(b)})},removeFromListsForItem:function(a,c){a=this.getListsForItem(a);a&&(a["delete"](c),b("SavedForLaterDashboardHeader").decrementList(c))},addToListsForItem:function(a,c){a=this.getListsForItem(a);a&&(a.add(c),b("SavedForLaterDashboardHeader").incrementList(c))}};e.exports=a}),null);
__d("SavedForLaterDashboardItemTags.react",["cx","fbt","MenuSeparator","MenuStaticItem","PageTransitions","PopoverMenu.react","React","ReactXUIMenu","SavedForLaterDashboardCollectionIcon.react","URI","XUISubNavigationItemsAndNavigationShortcutsHighlighting","XUIText.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("ReactXUIMenu").Item;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){return this.props.containingLists.length==0?null:b("React").createElement("span",{className:"_440n _3vo5"},b("React").createElement(b("XUIText.react"),{className:"_5znp"},"\xb7\xa0",this.$1()))};a.prototype.$1=function(){var a=this.props.containingLists[0];return b("React").createElement("span",{className:"_3a4y"},h._("Enregistr\u00e9 dans"),b("React").createElement("span",{className:"_397o"},b("React").createElement("a",{href:"#",onClick:this.handleTagClick.bind(null,a)},a.name)),this.$2())};a.prototype.$2=function(){var a=this.props.containingLists.slice(1);return a.length==0?null:b("React").createElement(b("PopoverMenu.react"),{alignv:"baseline",menu:this.$3()},b("React").createElement("span",{className:"_397o"},b("React").createElement("a",{href:"#"},h._({"*":"+{other collections} suppl\u00e9mentaires"},[h._param("other collections",a.length,[0])]))))};a.prototype.$3=function(){var a=this.props.containingLists.slice(1),c=this.handleTagClick;a=a.map(function(a){return b("React").createElement(j,{icon:b("React").createElement(b("SavedForLaterDashboardCollectionIcon.react"),{firstLetter:a.firstLetter,src:a.imageSource}),key:a.listId,onClick:c.bind(null,a)},a.name)});a.unshift(b("React").createElement(b("MenuStaticItem"),{key:"alsoLivesInMenuItem"},h._("Appartient \u00e9galement \u00e0\u00a0:")),b("React").createElement(b("MenuSeparator"),{key:"alsoLivesInMenuSeparator"}));return b("React").createElement(b("ReactXUIMenu"),null,a)};a.prototype.handleTagClick=function(a){a=new(b("URI"))(a.uri);b("PageTransitions").go(a,!0);b("XUISubNavigationItemsAndNavigationShortcutsHighlighting").removeHighlightingFromAllItemsExceptForURI(a.toString())};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("SavedForLaterDashboardMoreButton.react",["ix","cx","fbt","AsyncRequest","Banzai","CollectionCurationMechanisms","CollectionsDisplaySurface","Image.react","MenuSeparator","MenuStaticItem","PopoverMenu.react","React","ReactXUIMenu","SavedForLaterDashboardCollectionIcon.react","SavedListStateActions","SavedStateActions","XSaveController","XSaveListMutationController","XUIButton.react","fbglyph","guid"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k="saved_for_later:click",l=b("ReactXUIMenu").Item;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=j.constructor).call.apply(a,[this].concat(d)),this.handleOnClickUnsave=function(){var a=this.props.containingLists.length,b=i._("Lorsque vous retirez un article de vos enregistrements, vous le supprimez aussi de toutes les collections auxquelles vous l\u2019avez ajout\u00e9.");(a===0||confirm(b.toString()))&&this.handleUnsaveItem()}.bind(this),b}a.prototype.render=function(){return b("React").createElement(b("PopoverMenu.react"),{alignv:"baseline",menu:this.$1()},b("React").createElement(b("XUIButton.react"),{className:"_2p-o",image:b("React").createElement(b("Image.react"),{src:g("128601")}),label:i._("plus"),labelIsHidden:!0}))};a.prototype.$1=function(){__p&&__p();var a=[];if(this.props.isArchive){a.push(b("React").createElement(l,{href:"#",key:"unarchiveMenuItem",onClick:this.handleUnarchive.bind(this)},i._("Retirer de l\u2019archive")));return b("React").createElement(b("ReactXUIMenu"),null,a)}a.push(this.$2());a.push(b("React").createElement(b("MenuSeparator"),{key:"markAsMenuSeparator"}));var c=this.$3();c.length>0&&(a.push(b("React").createElement(b("MenuStaticItem"),{key:"removeFromMenuItem"},i._("Retirer de\u00a0:"))),a=a.concat(c),a.push(b("React").createElement(b("MenuSeparator"),{key:"unsaveMenuSeparator"})));a.push(this.$4());return b("React").createElement(b("ReactXUIMenu"),null,a)};a.prototype.$2=function(){var a=i._("Marquer comme non vu");this.props.unseen&&(a=i._("Marquer comme vu"));return b("React").createElement(l,{href:"#",key:"markAsMenuItem",onClick:this.handleMarkAs.bind(this)},a)};a.prototype.$3=function(){return this.props.containingLists.map(function(a){var c=b("XSaveListMutationController").getURIBuilder().setFBID("object_id",this.props.savableId).setEnum("action",b("SavedListStateActions").REMOVE_FROM_LIST).setEnum("mechanism",b("CollectionCurationMechanisms").REMOVE_FROM_SAVED_LIST_BUTTON).setEnum("surface",b("CollectionsDisplaySurface").SAVE_DASHBOARD).setInt("list_id",a.listId).getURI();return b("React").createElement(l,{icon:b("React").createElement(b("SavedForLaterDashboardCollectionIcon.react"),{firstLetter:a.firstLetter,src:a.imageSource}),href:"#",ajaxify:c,rel:"async-post",key:a.listId,onClick:this.handleRemoveFromCollection.bind(this,a.listId)},a.name)}.bind(this))};a.prototype.$4=function(){return b("React").createElement(l,{href:"#",key:"unsaveMenuItem",onClick:this.handleOnClickUnsave},i._("Annuler l\u2019enregistrement"))};a.prototype.handleMarkAs=function(a){a=b("CollectionCurationMechanisms").MARK_AS_UNSEEN_BUTTON;this.props.unseen&&(a=b("CollectionCurationMechanisms").MARK_AS_SEEN_BUTTON);b("Banzai").post(k,{savable_id:this.props.savableId,surface:b("CollectionsDisplaySurface").SAVE_DASHBOARD,mechanism:a,event_id:b("guid")()},{delay:0,retry:!0});this.props.toggleSeenStatus()};a.prototype.handleRemoveFromCollection=function(a){this.props.removeItemFromList(a)};a.prototype.handleUnsaveItem=function(){this.props.unsaveItem();var a=b("XSaveController").getURIBuilder().setInt("object_id",this.props.savableId).setEnum("action",b("SavedStateActions").UNSAVE).setEnum("mechanism",b("CollectionCurationMechanisms").DELETE_BUTTON).setEnum("surface",b("CollectionsDisplaySurface").SAVE_DASHBOARD).getURI();new(b("AsyncRequest"))(a).setServerDialogCancelHandler(this.props.cancelUnsaveItem).send()};a.prototype.handleUnarchive=function(){var a=b("XSaveController").getURIBuilder().setInt("object_id",this.props.savableId).setEnum("action",b("SavedStateActions").UNARCHIVE).setEnum("mechanism",b("CollectionCurationMechanisms").UNARCHIVE_BUTTON).setEnum("surface",b("CollectionsDisplaySurface").SAVE_DASHBOARD).getURI();new(b("AsyncRequest"))(a).send();this.props.unarchiveItem()};e.exports=a}),null);
__d("SavedForLaterDashboardItemActionButtonManager.react",["ix","cx","CSS","Image.react","React","ReactDOM","SavedForLaterDashboardAddToCollectionButton.react","SavedForLaterDashboardItemListsManager","SavedForLaterDashboardItemTags.react","SavedForLaterDashboardMoreButton.react","TimelineInHouseAppCollections","XUICardSection.react","$","fbglyph"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("TimelineInHouseAppCollections").SAVED_ALL.toString();c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={belongsToList:this.$1(),unseen:this.props.unseen,removed:!1},this.$3=function(a){this.setState(function(b,c){c=new Map(b.belongsToList);c.set(a,!0);return{belongsToList:c}}),b("SavedForLaterDashboardItemListsManager").addToListsForItem(this.props.savableId,a)}.bind(this),this.$4=function(a){this.setState(function(b,c){c=new Map(b.belongsToList);c.set(a,!1);return{belongsToList:c}}),b("SavedForLaterDashboardItemListsManager").removeFromListsForItem(this.props.savableId,a)}.bind(this),this.$5=function(){this.setState(function(a,b){return{unseen:!a.unseen}})}.bind(this),this.$7=function(){__p&&__p();var a=this.$2(!0);for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;b("SavedForLaterDashboardItemListsManager").removeFromListsForItem(this.props.savableId,e.listId)}b("SavedForLaterDashboardItemListsManager").removeFromListsForItem(this.props.savableId,j);this.$10()}.bind(this),this.$6=function(){__p&&__p();var a=this.$2(!0);for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;b("SavedForLaterDashboardItemListsManager").addToListsForItem(this.props.savableId,e.listId)}b("SavedForLaterDashboardItemListsManager").addToListsForItem(this.props.savableId,j);this.$10()}.bind(this),this.$8=function(){this.$11()}.bind(this),c}a.prototype.$1=function(){__p&&__p();var a=new Map();for(var b=this.props.savedLists,c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;a.set(e.listId,!1)}for(var e=this.props.containingLists,d=Array.isArray(e),c=0,e=d?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(d){if(c>=e.length)break;b=e[c++]}else{c=e.next();if(c.done)break;b=c.value}b=b;a.set(b,!0)}return a};a.prototype.render=function(){var a=this.$2(!0),c=this.$2(!1),d=b("$")("saved-seen-indicator-"+this.props.savableId),e=b("$")("saved-more-button-"+this.props.savableId),f=b("$")("saved-add-button-"+this.props.savableId),g=b("$")("saved-item-tags-"+this.props.savableId);return b("React").createElement(b("XUICardSection.react"),null,b("ReactDOM").createPortal(b("React").createElement(b("SavedForLaterDashboardItemTags.react"),{containingLists:a}),g),b("ReactDOM").createPortal(b("React").createElement(b("SavedForLaterDashboardAddToCollectionButton.react"),{nonContainingLists:c,addItemToList:this.$3,savableId:this.props.savableId}),f),b("ReactDOM").createPortal(b("React").createElement(b("SavedForLaterDashboardMoreButton.react"),{containingLists:a,removeItemFromList:this.$4,toggleSeenStatus:this.$5,cancelUnsaveItem:this.$6,unsaveItem:this.$7,savableId:this.props.savableId,unseen:this.state.unseen,unarchiveItem:this.$8,isArchive:this.props.isArchive}),e),b("ReactDOM").createPortal(this.$9(),d))};a.prototype.$9=function(){return this.state.unseen?b("React").createElement(b("Image.react"),{className:"_4trz",src:g("115777")}):null};a.prototype.$2=function(a){return this.props.savedLists.filter(function(b){return a==this.state.belongsToList.get(b.listId)}.bind(this))};a.prototype.$10=function(){var a=b("$")("item-"+this.props.savableId),c=b("$")("removed-item-"+this.props.savableId);this.state.removed?(b("CSS").removeClass(a,"hidden_elem"),b("CSS").addClass(c,"hidden_elem")):(b("CSS").removeClass(c,"hidden_elem"),b("CSS").addClass(a,"hidden_elem"));this.setState(function(a,b){return{removed:!a.removed}})};a.prototype.$11=function(){var a=b("$")("item-"+this.props.savableId),c=b("$")("unarchived-item-"+this.props.savableId);this.state.removed?(b("CSS").removeClass(a,"hidden_elem"),b("CSS").addClass(c,"hidden_elem")):(b("CSS").removeClass(c,"hidden_elem"),b("CSS").addClass(a,"hidden_elem"));this.setState(function(a,b){return{removed:!a.removed}})};e.exports=a}),null);
__d("SavedForLaterDashboardOptInNUX",["AsyncRequest","DOM"],(function(a,b,c,d,e,f){function a(a,c){"use strict";a.setDismissHandler(function(){b("DOM").remove(a.getRoot()),a.destroy(),new(b("AsyncRequest"))(c).send()})}e.exports=a}),null);
__d("SavedForLaterDashboardRemoveButton",["cx","CollectionCurationMechanisms","Event","Parent","SavedForLaterDashboardHeader","SavedForLaterDashboardItemListsManager","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h="_5wcf";function a(a,c,d){"use strict";b("tidyEvent")(b("Event").listen(a,"click",function(e){e=b("Parent").byClass(a,h);if(e){e=b("SavedForLaterDashboardItemListsManager").getListsForItem(d.object_id);e&&(c.decrement=Array.from(e));b("SavedForLaterDashboardHeader").removeItemAndToggleStatus(c,d,b("CollectionCurationMechanisms").XOUT_BUTTON)}}))}e.exports=a}),null);
__d("SavedForLaterDashboardSidebarSearch",["Event","XUISubNavigationItemsAndNavigationShortcutsHighlighting"],(function(a,b,c,d,e,f){"use strict";function a(a,c){b("Event").listen(a,"submit",b("XUISubNavigationItemsAndNavigationShortcutsHighlighting").removeHighlightingFromAllItemsExceptForURI.bind(c))}e.exports=a}),null);
__d("SavedForLaterHeaderCollectionCounter",["fbt","DOM","SavedForLaterDashboardHeader"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="savedForLaterCollectionHeader";function a(a,c,d){this.itemCounterContainer=a,this.listId=c.toString(),this.count=d,b("SavedForLaterDashboardHeader").addItemCounter(this.listId,this,h)}a.prototype.getListId=function(){return this.listId};a.prototype.increment=function(){this.$1(this.$2()+1)};a.prototype.decrement=function(){this.$1(this.$2()-1)};a.prototype.$2=function(){return this.count};a.prototype.$1=function(a){a<0&&(a=0);var c=g._({"*":"{number} \u00e9l\u00e9ments","_1":"1 \u00e9l\u00e9ment"},[g._plural(a,"number")]);b("DOM").setContent(this.itemCounterContainer,c);this.count=a};e.exports=a}),null);
__d("SavedForLaterSidebarBadgeAccesory",["CSS","DOM","SavedForLaterDashboardHeader"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="savedForLaterSidebarCounter";function a(a,c,d,e){this.sidebarBadgeAccessory=a,this.maxCount=e,this.listId=c.toString(),this.count=d,b("SavedForLaterDashboardHeader").addItemCounter(this.listId,this,g)}a.prototype.getListId=function(){return this.listId};a.prototype.increment=function(){this.$1(this.$2()+1)};a.prototype.decrement=function(){this.$1(this.$2()-1)};a.prototype.$2=function(){return this.count};a.prototype.$1=function(a){a<0&&(a=0),a<=0?b("CSS").addClass(this.sidebarBadgeAccessory,"hidden_elem"):b("CSS").removeClass(this.sidebarBadgeAccessory,"hidden_elem"),a<=this.maxCount?b("DOM").setContent(this.sidebarBadgeAccessory,a):b("DOM").setContent(this.sidebarBadgeAccessory,this.maxCount+"+"),this.count=a};e.exports=a}),null);