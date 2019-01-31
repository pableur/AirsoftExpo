if (self.CavalryLogger) { CavalryLogger.start_js(["pvxTh"]); }

__d("StepperAnimation",["invariant","Animation","mixInEventEmitter"],(function(a,b,c,d,e,f,g){__p&&__p();f={done:!0,go:!0};var h=function(a){a&&g(0,3870)};function a(a){"use strict";this.$1=new(b("Animation"))(a),this.$1.ondone(this.emit.bind(this,"done")),this.__fired__=!1}a.prototype.from=function(){"use strict";this.$1.from.apply(this.$1,arguments);return this};a.prototype.to=function(){"use strict";this.$1.to.apply(this.$1,arguments);return this};a.prototype.blind=function(){"use strict";this.$1.blind.apply(this.$1,arguments);return this};a.prototype.ease=function(){"use strict";this.$1.ease.apply(this.$1,arguments);return this};a.prototype.go=function(){"use strict";h(this.__fired__);this.__fired__=!0;this.$1.go();this.emit("go");return this};a.prototype.checkpoint=function(){"use strict";this.$1.checkpoint.apply(this.$1,arguments);return this};a.prototype.show=function(){"use strict";this.$1.show.apply(this.$1,arguments);return this};a.prototype.duration=function(){"use strict";this.$1.duration.apply(this.$1,arguments);return this};a.prototype.stop=function(){"use strict";this.$1.stop.apply(this.$1,arguments);return this};a.ease=b("Animation").ease;function c(a){"use strict";__p&&__p();this.$1=a||[];this.$2=0;for(var b=0,c=a.length;b<c;b++){var d=a[b+1];d&&a[b].addListener("done",d.go.bind(d))}if(this.$1.length){d=this.emit.bind(this,"go");this.$1[0].addListener("go",d);a=this.emit.bind(this,"done");this.$1.slice(-1)[0].addListener("done",a)}}c.prototype.go=function(){"use strict";h(this.__fired__);this.__fired__=!0;this.$1.length&&this.$1[0].go();this.emit("go");return this};c.prototype.stop=function(){"use strict";for(var a=0,b=this.$1.length;a<b;a++)this.$1[a].stop.apply(this.$1[a],arguments);return this};c.prototype.checkpoint=function(){"use strict";for(var a=0,b=this.$1.length;a<b;a++)this.$1[a].checkpoint.apply(this.$1[a],arguments);return this};c.prototype.duration=function(){"use strict";for(var a=0,b=this.$1.length;a<b;a++)this.$1[a].duration.apply(this.$1[a],arguments);return this};function d(a){"use strict";this.$2=a||[];this.$1=0;for(var b=0;b<a.length;b++)a[b].addListener("done",this.$3.bind(this))}d.prototype.$3=function(){"use strict";++this.$1===this.$2.length&&this.emit("done")};d.prototype.go=function(){"use strict";h(this.__fired__);this.__fired__=!0;for(var a=0;a<this.$2.length;a++)this.$2[a].go();this.emit("go");return this};d.prototype.stop=function(){"use strict";for(var a=0,b=this.$2.length;a<b;a++)this.$2[a].stop.apply(this.$2[a],arguments);return this};d.prototype.checkpoint=function(){"use strict";for(var a=0,b=this.$2.length;a<b;a++)this.$2[a].checkpoint.apply(this.$2[a],arguments);return this};d.prototype.duration=function(){"use strict";for(var a=0,b=this.$2.length;a<b;a++)this.$2[a].duration.apply(this.$2[a],arguments);return this};b("mixInEventEmitter")(a,f);b("mixInEventEmitter")(c,f);b("mixInEventEmitter")(d,f);a.Serial=c;a.Parallel=d;e.exports=a}),null);
__d("XUICarouselAnimator",["cx","Ease","Locale","StepperAnimation","Style","uuid"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=0,i=1;c=["vertical","horizontal","showcase"];function j(){this.$1=new Map()}j.prototype.get=function(a,c,d){__p&&__p();if(!a.offsetParent)return d();var e=a.dataset.uuid,f=this.$1.get(e);if(f!=null)if(c in f)return f[c];else{f[c]=d();return f[c]}else{a.dataset.uuid=e||b("uuid")();f=d();this.$1.set(a.dataset.uuid,(e={},e[c]=f,e));return f}};j.prototype.destroy=function(){this.$1.clear()};function a(a){__p&&__p();this.$30=function(a){return this.$31(a,i)}.bind(this);this.$29=function(a){return this.$31(a,h)}.bind(this);var b=a.centered,c=a.firstAndLastAligned,d=a.staticElemDimensions;a=a.type;a=a===void 0?"horizontal":a;var e=this.$5=a==="showcase",f=this.$4=a==="horizontal";a=this.$6=a==="vertical";this.$2=!!b;this.$3=!!c;this.$7=(e?"_9bn":"")+(a?" _9bo":"")+(f?" _9bp":"");d&&(this.$1=new j())}a.prototype.setFirstAndLastAligned=function(a){this.$3=a;return this};a.prototype.update=function(a){this.$5?this.$8(a):this.$9(a)};a.prototype.createAnimation=function(a){var b=a.nextIndex,c=a.items;if(b>=0&&b<c.length)if(this.$5)return this.$10(a);else return this.$11(a);return null};a.prototype.getCSSClassForRoot=function(){return this.$7};a.prototype.getViewportHeight=function(a){return this.$12(a)};a.prototype.getViewportWidth=function(a){return this.$13(a)};a.prototype.getContainerHeight=function(a){return this.$6?this.$14(a):this.$12(a)};a.prototype.getContainerWidth=function(a){return this.$4?this.$15(a):this.$13(a)};a.prototype.needsNextArrow=function(a,b,c,d){var e=a.viewport,f=a.container;if(!f||!e)return!0;if(this.$5)return b!==a.items.length-1;b=this.$16(a,b);this.$4?(c=c||this.getContainerWidth(a),a=this.$17(e)):(c=d||this.$18(f),a=this.$18(e));return c===0&&a===0?!0:c+b>a};a.prototype.remove=function(a){this.$5?this.$19(a):this.$20(a),this.$1&&this.$1.destroy()};a.prototype.isLastItemVisible=function(a,b){var c=a.items.length-1;return b===c||this.isItemVisible(a,c)&&this.$3};a.prototype.isItemVisible=function(a,c){__p&&__p();var d=a.items;a=a.viewport;d=d[c];if(!d)return!1;if(this.$5)return b("Style").get(d,"opacity")==="1";c=d.getBoundingClientRect();d=a.getBoundingClientRect();a=c.left>=d.left&&c.right<=d.right&&c.top>=d.top&&c.bottom<=d.bottom;return a};a.prototype.$19=function(a){a=a.items;for(var c=0,d=a.length;c<d;c++){var e=a[c];b("Style").set(e,"opacity",1);b("Style").set(e,"pointer-events","auto");b("Style").set(e,"left","auto");b("Style").set(e,"top","auto");b("Style").set(e,"position","static")}};a.prototype.$20=function(a){var c=this.$4?this.$21():"margin-top";b("Style").set(a.container,c,0)};a.prototype.$8=function(a){var b=a.items,c=a.index;this.$22(a,b,c)};a.prototype.$22=function(a,c,d){b("Style").set(a.container,"marginTop",0);b("Style").set(a.container,"marginLeft",0);for(var e=0,f=c.length;e<f;e++){var g=c[e];b("Style").set(g,"opacity",e===d?1:0);b("Style").set(g,"pointer-events",e===d?"auto":"none");b("Style").set(g,"position","absolute");this.$23(a,g)}};a.prototype.$9=function(a){var b=a.index,c=a.container;this.$24(a,b,c)};a.prototype.$24=function(a,c,d){var e=this.$4?this.$21():"margin-top";c=this.$16(a,(a=c)!=null?a:0);b("Style").set(d,e,c+"px")};a.prototype.$16=function(a,b){var c=this.$25();c=this.$26(a,c);var d=this.$27(a,b);a=this.$28(a,b);return-Math.min(c,d-a)};a.prototype.$27=function(a,c){__p&&__p();a=a.items;var d=a[c],e=0;if(d){var f,g;this.$4?(f="marginLeft",g=this.$29):(f="marginTop",g=this.$30);for(var h=0;h<c;h++)e+=g.call(this,a[h]);e+=this.$1?this.$1.get(d,f,function(){return parseInt(b("Style").get(d,f),10)}):parseInt(b("Style").get(d,f),10)}return e};a.prototype.$10=function(a){__p&&__p();var c=a.nextIndex,d=a.items,e=a.curIndex,f=d[e];e=d[c];var g=this.$1?this.$1.get(f,"opacity",function(){return parseFloat(b("Style").get(f,"opacity"))}):parseFloat(b("Style").get(f,"opacity")),h=null;if(a.animate){h=new(b("StepperAnimation").Parallel)([new(b("StepperAnimation"))(f).from("opacity",g).to("opacity",0).ease(b("Ease").sineInOut),new(b("StepperAnimation"))(e).from("opacity",0).to("opacity",1).ease(b("Ease").sineInOut)]);for(var g=0,e=d.length;g<e;g++)b("Style").set(d[g],"pointer-events",g===c?"auto":"none")}else this.$22(a,d,c);return h};a.prototype.$23=function(a,c){if(this.$2){a=a.viewport;var d=this.$17(a);a=this.$18(a);var e=this.$31(c,h),f=this.$31(c,i);b("Style").set(c,"left",(d-e)/2+"px");b("Style").set(c,"top",(a-f)/2+"px")}else b("Style").set(c,"left",0),b("Style").set(c,"top","auto")};a.prototype.$11=function(a){var c=a.container,d=a.nextIndex,e;this.$4?e=this.$21():e="margin-top";var f=this.$16(a,d),g=new(b("StepperAnimation"))(c);a.animate?g.from(e,b("Style").get(c,e)).to(e,f+"px").ease(b("Ease").sineInOut):this.$24(a,d,c);return g};a.prototype.$28=function(a,b){__p&&__p();var c=a.viewport,d=a.items;d=d[b];if(this.$3&&(b===0||b===a.items.length-1))return 0;if(this.$2){if(this.$4)return(this.$17(c)-this.$17(d))/2;if(this.$6)return(this.$18(c)-this.$18(d))/2}return 0};a.prototype.$12=function(a){return this.$32(a,i)};a.prototype.$13=function(a){return this.$32(a,h)};a.prototype.$32=function(a,b){return Math.max.apply(null,this.$33(a,b))};a.prototype.$31=function(a,c){__p&&__p();var d,e,f=a.style.position;b("Style").set(a,"position","static");c===h?(c=this.$17(a),d="marginLeft",e="marginRight"):(c=this.$18(a),d="marginTop",e="marginBottom");if(this.$1){var g=d,i=e;d=this.$1.get(a,g,function(){return parseInt(b("Style").get(a,g),10)});e=this.$1.get(a,i,function(){return parseInt(b("Style").get(a,i),10)})}else d=parseInt(b("Style").get(a,d),10),e=parseInt(b("Style").get(a,e),10);c=c+d+e;b("Style").set(a,"position",f);return c};a.prototype.$14=function(a){return this.$34(a,i)};a.prototype.$15=function(a){return this.$34(a,h)};a.prototype.$33=function(a,b){return a.items.map(function(a){return this.$31(a,b)}.bind(this))};a.prototype.$34=function(a,b){a=this.$33(a,b);return a.reduce(function(a,b){return a+b},0)};a.prototype.$26=function(a,c){if(!this.$3)return Infinity;var d=a.viewport;a=this.$34(a,c);var e=c===h?this.$17(d):this.$18(d);c=c===h?parseInt(b("Style").get(d,"border-left-width"),10)+parseInt(b("Style").get(d,"border-right-width"),10):parseInt(b("Style").get(d,"border-top-width"),10)+parseInt(b("Style").get(d,"border-bottom-width"),10);return a-e+c};a.prototype.$25=function(){return this.$4?h:i};a.prototype.$17=function(a){if(!a)return 0;if(this.$1)return this.$1.get(a,"offsetWidth",function(){return a.offsetWidth});else return a.offsetWidth};a.prototype.$18=function(a){if(this.$1)return this.$1.get(a,"offsetHeight",function(){return a.offsetHeight});else return a.offsetHeight};a.prototype.$21=function(){return b("Locale").isRTL()?"margin-right":"margin-left"};e.exports=a}),null);
__d("XUICarousel.react",["cx","fbt","Arbiter","Keys","KeyStatus","React","ReactDOM","XUICarouselAnimator","clearInterval","joinClasses","setInterval"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j="prev",k="next";c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$2=!1,this.$7=new(b("Arbiter"))(),this.state={animating:!1,index:this.props.initialIndex,autoplay:this.props.initialAutoplay,containerWidth:0,animatorClassForRoot:this.props.animator.getCSSClassForRoot(),containerHeight:0,viewportWidth:"auto",viewportHeight:"auto",visibleItems:[this.$8()[this.props.initialIndex]]},this.$16=function(){this.$2=!0,this.props.stopAutoplayOnHover&&this.$14()}.bind(this),this.$17=function(){this.$2=!1,this.state.autoplay&&this.$12()}.bind(this),this.next=function(){var a=this.state.index,b=this.getItemCount(),c=b-1;if((a!==c||a===c&&this.props.wrapAround)&&b){b=this.$10();b=this.props.animator.isLastItemVisible(b,a)?0:Math.min(c,a+this.props.moveStep);this.$1=k;this.setIndex(b);return b}return}.bind(this),this.prev=function(){__p&&__p();var a=this.state.index,b=this.getItemCount();if((a!==0||a===0&&this.props.wrapAround)&&b){var c=this.$9(),d=this.$8().findIndex(function(a){return a===c[0]})-this.props.moveStep;a=a===0?b-1:Math.max(d,0);this.$1=j;this.setIndex(a);return a}return}.bind(this),c}a.prototype.getItemCount=function(){return b("React").Children.count(this.props.children)};a.prototype.$8=function(){var a=this.getItemCount(),b=[];for(var c=0;c<a;c++)this.refs.itemsContainer&&this.refs.itemsContainer.childNodes[c]&&(b[c]=this.refs.itemsContainer.childNodes[c]);return b};a.prototype.$9=function(){return this.$8().filter(function(a,b){return this.props.animator.isItemVisible(this.$10(),b)}.bind(this))};a.prototype.$11=function(a){return a.length===this.state.visibleItems.length&&a.every(function(a,b){return a===this.state.visibleItems[b]}.bind(this))};a.prototype.$10=function(){var a=this.$8().map(function(a){return b("ReactDOM").findDOMNode(a)}),c=Math.max(0,a.length-1);a.length&&this.state.index>c&&this.setIndex(this.props.resetInitialIndex?0:c);return{container:b("ReactDOM").findDOMNode(this.refs.itemsContainer),items:a,viewport:b("ReactDOM").findDOMNode(this.refs.viewport)}};a.prototype.componentDidMount=function(){this.forceLayoutUpdate(),this.state.autoplay&&this.$12(),this.$1=null};a.prototype.UNSAFE_componentWillMount=function(){this.$2=!1,this.$3=null,this.$4=null};a.prototype.componentWillUnmount=function(){this.$13(),this.$14()};a.prototype.UNSAFE_componentWillUpdate=function(a,b){var c=l(this.props,a),d=l(this.state,b),e=this.$10();a.children&&a.children.length<b.index&&this.setState({index:this.props.resetInitialIndex?0:a.children.length-1});var f=a.animator;c.animator&&(this.$13(),this.props.animator.remove(e));var g=this.state.index;this.state.index!==g&&(this.$5=g);d.index&&(this.$7.inform("animation_start",b.index),this.$4&&this.$4.stop(),f=f.createAnimation(babelHelpers["extends"]({},e,{nextIndex:b.index,curIndex:g,animate:!this.$5})),this.$4=f,f.duration(a.animationDuration),f.addListener("done",this.$15.bind(this,b.index)),f.go());(d.autoplay||c.autoplayInterval||c.autoplayDirection)&&(this.$14(),b.autoplay&&(!this.$2||!a.stopAutoplayOnHover)&&this.$12())};a.prototype.componentDidUpdate=function(a,b){__p&&__p();b=this.props.animator;var c=this.$9();this.$11(c)||this.setState({visibleItems:c});c=this.$10();var d=!1,e=!1,f=!1,g=this.$6,h=this.$8();this.$6=h;g=!g||g.length!==h.length||!g.every(function(a,b){return a===h[b]});this.$5&&(this.setState({index:this.$5}),this.$5=null);g&&(f=!0,d=!0,e=this.props.resizeViewport==="dynamic",this.$7.inform("item_count_updated",this.getItemCount()));b!==a.animator&&(this.setState({animatorClassForRoot:b.getCSSClassForRoot()}),d=!0,f=!0);a.resizeViewport!==this.props.resizeViewport&&(e=a.resizeViewport==="disabled"||this.props.resizeViewport==="dynamic",d=!0);f&&this.setState({containerWidth:b.getContainerWidth(c),containerHeight:b.getContainerHeight(babelHelpers["extends"]({},c,{index:this.state.index}))});e&&this.setState({viewportWidth:b.getViewportWidth(c),viewportHeight:b.getViewportHeight(babelHelpers["extends"]({},c,{index:this.state.index}))});d&&b.update(babelHelpers["extends"]({},c,{index:this.state.index}))};a.prototype.setAutoplayEnabled=function(a){this.setState({autoplay:a})};a.prototype.$12=function(){if(!this.$3){var a=this.props.autoplayDirection==="forward"?this.next:this.prev;this.$3=b("setInterval")(a,this.props.autoplayInterval)}};a.prototype.$14=function(){b("clearInterval")(this.$3),this.$3=null};a.prototype.$13=function(){this.$4!=null&&(this.$4.stop(),this.$4=null)};a.prototype.$15=function(a){this.$4=null,this.$7.inform("animationEnd",a),this.setState({visibleItems:this.$9()})};a.prototype.setIndex=function(a){if(a>=0&&a<this.props.children.length){this.setState({index:a});this.$14();this.state.autoplay&&(!this.props.stopAutoplayOnHover||!this.$2)&&this.$12();return!0}return!1};a.prototype.subscribe=function(a,b,c){return this.$7.subscribe(a,b,c)};a.prototype.unsubscribe=function(a){this.$7.unsubscribe(a)};a.prototype.forceLayoutUpdate=function(){var a=this.props.animator,b=this.$10();this.setState({containerWidth:a.getContainerWidth(b),containerHeight:a.getContainerHeight(babelHelpers["extends"]({},b,{index:this.state.index})),viewportWidth:a.getViewportWidth(b),viewportHeight:a.getViewportHeight(babelHelpers["extends"]({},b,{index:this.state.index}))});a.update(babelHelpers["extends"]({},b,{index:this.state.index}))};a.prototype.$18=function(){var a=this.$8();return b("React").Children.map(this.props.children,function(c,d){return b("React").cloneElement(c,{ref:c.props.childIndex,index:d,onClick:function(){this.props.onItemClick?this.props.onItemClick(d):this.setIndex(d)}.bind(this),onFocus:function(){b("KeyStatus").getKeyDownCode()===b("Keys").TAB&&this.setIndex(d)}.bind(this),selected:d===this.state.index,size:this.props.children.length,visible:this.state.visibleItems.includes(a[d])})}.bind(this))};a.prototype.$19=function(){var a=this.props,b=a.wrapAround;a=a.animator;return b?!0:a.needsNextArrow(this.$10(),this.state.index,this.state.containerWidth,this.state.containerHeight)};a.prototype.$20=function(){if(this.props.arrows){var a=this.props.arrows,c=a[0];a=a[1];c=b("React").cloneElement(c,{key:j,onClick:c.props.onClick?c.props.onClick:this.prev,onBlur:this.$17,onFocus:this.$16,disabled:!this.props.wrapAround&&this.state.index===0,className:b("joinClasses")("_50z1",c.props.className),label:h._("Pr\u00e9c\u00e9dent"),wasLastClicked:this.$1===j});a=b("React").cloneElement(a,{key:k,onClick:a.props.onClick?a.props.onClick:this.next,onBlur:this.$17,onFocus:this.$16,disabled:!this.$19(),className:b("joinClasses")("_50z2",a.props.className),label:h._("Suivant"),wasLastClicked:this.$1===k});return[c,a]}return null};a.prototype.render=function(){var a=this.props,c=a.className,d=a.viewportWidth,e=a.viewportHeight;a=a.resizeViewport;c=b("joinClasses")(c,this.state.animatorClassForRoot,"_50z3"+(this.state.animating?" _50zi":""));var f={height:e,width:d};a!=="disabled"&&(f.width=this.props.autoViewportWidth?"auto":d||this.state.viewportWidth,f.height=this.props.autoViewportHeight?"auto":e||this.state.viewportHeight);return b("React").createElement("div",{className:c},b("React").createElement("div",{className:"_50zm",ref:"viewport",onMouseEnter:this.$16,onMouseLeave:this.$17,style:babelHelpers["extends"]({},f)},b("React").createElement("div",{style:{width:this.state.viewportWidth||"auto",height:this.state.viewportHeight||"auto"}},b("React").createElement("div",{className:"_50zn clearfix",style:{width:this.state.containerWidth||"auto",height:this.state.containerHeight||"auto"},ref:"itemsContainer"},this.$18())),this.props.renderArrowsOutsideViewport?null:this.$20()),this.props.renderArrowsOutsideViewport?this.$20():null)};a.defaultProps={animator:new(b("XUICarouselAnimator"))({type:"horizontal",centered:!0,firstAndLastAligned:!1}),initialIndex:0,moveStep:1,animationDuration:200,initialAutoplay:!0,autoplayInterval:5e3,autoplayDirection:"forward",autoViewportWidth:!1,autoViewportHeight:!1,stopAutoplayOnHover:!0,resizeViewport:"fixed",wrapAround:!0,resetInitialIndex:!1,renderArrowsOutsideViewport:!1};function l(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]!==b[d]);for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&!Object.prototype.hasOwnProperty.call(c,e)&&(c[e]=a[e]!==b[e]);return c}e.exports=a}),null);
__d("XUICarouselArrow.react",["cx","Link.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=b("joinClasses")(this.props.className,(this.props.disabled?"accessible_elem":"")+" _-op"+(this.props.disabled?" _-oq":"")+(this.props.wasLastClicked?" _6280":"")),c={role:"button","aria-disabled":this.props.disabled?"true":"false","aria-label":this.props.label||null};return b("React").createElement(b("Link.react"),babelHelpers["extends"]({className:a,onBlur:this.props.onBlur,onClick:this.props.onClick,onFocus:this.props.onFocus},c),this.props.children)};function a(){h.apply(this,arguments)}a.propTypes={children:c.oneOfType([c.array,c.element]),className:c.string,label:c.string,onBlur:c.func,onClick:c.func,onFocus:c.func,disabled:c.bool,wasLastClicked:c.bool};e.exports=a}),null);
__d("XUICarouselItem.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a=this.props,c=a.children,d=a.selected,e=a.index,f=a.size;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","selected","index","size"]);var g=this.props.className;g=b("joinClasses")(g,"_3el6"+(d?" _3el7":""));return b("React").createElement("div",{role:"article","aria-hidden":this.props.visible===!0?"false":"true","aria-posinset":e,"aria-setsize":f,className:"_3el8 clearfix"},b("React").createElement("div",babelHelpers["extends"]({},a,{className:g}),c))};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("CoverVideoStatus",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NO_COVER_VIDEO:"no_cover_video",UPLOADING:"uploading",ENCODING:"encoding",PREVIEWING:"previewing",CHOOSING_THUMBNAIL:"choosing_thumbnail",PUBLISHING:"publishing",PUBLISHED:"published",ERROR:"error"})}),null);