if (self.CavalryLogger) { CavalryLogger.start_js(["lgYrA"]); }

__d("MessagesJewelGameButton.react",["cx","fbt","InstantGameContextType","QuicksilverSources","React","XGamesQuicksilverPlayController","XUIButton.react","goURI"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$2=function(a){a.preventDefault();a.stopPropagation();a=this.props.gameID?this.props.gameID:this.props.thread.game_id;a=b("XGamesQuicksilverPlayController").getURIBuilder().setString("game_or_link",a).setString("context_source_id",this.props.thread.thread_fbid).setEnum("context_type",b("InstantGameContextType").THREAD).setEnum("source",b("QuicksilverSources").WWW_GAME_THREAD_ROW_CTA).getURI();b("goURI")(a)}.bind(this),this.$1=function(a){a.preventDefault();a.stopPropagation();a=b("XGamesQuicksilverPlayController").getURIBuilder().setString("game_or_link",this.props.botGameID).setEnum("source",b("QuicksilverSources").WWW_GAME_THREAD_ROW_CTA).getURI();b("goURI")(a)}.bind(this),c}a.prototype.render=function(){var a=h._("Jouer");return b("React").createElement(b("XUIButton.react"),{className:"_4oci",label:a,onClick:this.props.botGameID?this.$1:this.$2,use:"confirm"})};e.exports=a}),null);