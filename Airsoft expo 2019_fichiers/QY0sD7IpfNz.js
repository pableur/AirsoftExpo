if (self.CavalryLogger) { CavalryLogger.start_js(["mleqt"]); }

__d("XMessengerIntegrityNuxController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messenger/biz/integrity/nux/",{action:{type:"String",required:!0},nux_id:{type:"Int",required:!0},page_id:{type:"Int",required:!0},type:{type:"Enum",enumType:1}})}),null);
__d("MessengerReportNUX.react",["fbt","AsyncRequest","React","XMessengerIntegrityNuxController","XUIAmbientNUX.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=6331;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.state={show:!1,fussCache:!1,stopCache:!1},this.$2=function(){if(!this.state.show||this.props.pageID===null)return;this.setState({show:!1});var a=b("XMessengerIntegrityNuxController").getURIBuilder().setString("action","dismiss").setInt("nux_id",i).setInt("page_id",this.props.pageID).getURI();new(b("AsyncRequest"))(a).setErrorHandler(function(a){}).send()}.bind(this),c}a.prototype.componentDidMount=function(){this.$1()};a.prototype.componentDidUpdate=function(){if(this.state.stopCache||this.state.show||this.props.pageID===null||!this.props.pageUnsubscribeStatus)return;var a=b("XMessengerIntegrityNuxController").getURIBuilder().setString("action","show").setInt("nux_id",i).setInt("page_id",this.props.pageID).setEnum("type","STOP_MESSAGES").getURI();new(b("AsyncRequest"))(a).setHandler(function(a){a=a.payload.show;a&&this.setState({show:a});this.setState({stopCache:!0})}.bind(this)).setErrorHandler(function(a){}).send()};a.prototype.componentWillUnmount=function(){this.$2()};a.prototype.$1=function(){if(this.state.fussCache||this.state.show||this.props.pageID===null)return;var a=b("XMessengerIntegrityNuxController").getURIBuilder().setString("action","show").setInt("nux_id",i).setInt("page_id",this.props.pageID).setEnum("type","FUSS_RED").getURI();new(b("AsyncRequest"))(a).setHandler(function(a){a=a.payload.show;a&&this.setState({show:a});this.setState({fussCache:!0})}.bind(this)).setErrorHandler(function(a){}).send()};a.prototype.render=function(){return b("React").createElement(b("XUIAmbientNUX.react"),{alignment:"right",contextRef:this.props.contextRef,shown:this.state.show,width:"auto",onCloseButtonClick:this.$2},g._("Cliquez ici pour g\u00e9rer les messages."))};e.exports=a}),null);