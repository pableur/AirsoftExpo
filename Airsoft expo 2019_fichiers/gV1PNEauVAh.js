if (self.CavalryLogger) { CavalryLogger.start_js(["frn5k"]); }

__d("LiveVideoBroadcastStatusUpdateWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function(a,b,c,d,e,f){"use strict";e.exports=b("WebGraphQLSubscriptionHelper").getExports({docID:"1528668480484478",queryID:"213402205795051"})}),null);
__d("LiveVideoBroadcastStatusUpdateSubscription",["BaseGraphQLSubscription","LiveVideoBroadcastStatusUpdateWebGraphQLSubscription","uuid"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("BaseGraphQLSubscription"));g&&g.prototype;a.prototype.getTopic=function(a){"use strict";return"gqls/"+this.getSubscriptionCallName()+"/video_id_"+a};a.prototype.getQueryID=function(){"use strict";return b("LiveVideoBroadcastStatusUpdateWebGraphQLSubscription").getDocID()};a.prototype.getQueryParameters=function(a){"use strict";return{input:JSON.stringify({client_subscription_id:b("uuid")(),video_id:a})}};a.prototype.getSubscriptionCallName=function(){"use strict";return"live_video_broadcast_status_update_subscribe"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("LiveVideoBroadcastStatusUpdateSubscriptionHack",["LiveVideoBroadcastStatusUpdateSubscription"],(function(a,b,c,d,e,f){__p&&__p();var g=new Map(),h=new Map();a={subscribe:function(a,c){__p&&__p();if(!g.has(a)){var d=[];g.set(a,d);var e=b("LiveVideoBroadcastStatusUpdateSubscription").subscribe(a,function(a){for(var b=0;b<d.length;b++){var c=d[b];c(a)}});h.set(a,e)}e=g.get(a);e&&e.push(c);return{unsubscribe:function(){__p&&__p();var b=g.get(a);if(b){b=b.filter(function(a){return a!==c});g.set(a,b);if(b.length===0){b=h.get(a);b&&b.unsubscribe&&b.unsubscribe();g["delete"](a);h["delete"](a)}}}}}};e.exports=a}),null);
__d("LivingRoomTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LivingRoomLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setClienttime=function(a){this.$1.clienttime=a;return this};a.prototype.setCommentBody=function(a){this.$1.comment_body=a;return this};a.prototype.setComposerSessionID=function(a){this.$1.composer_session_id=a;return this};a.prototype.setContentItemID=function(a){this.$1.content_item_id=a;return this};a.prototype.setCurationContext=function(a){this.$1.curation_context=a;return this};a.prototype.setDeviceid=function(a){this.$1.deviceid=a;return this};a.prototype.setEntrySource=function(a){this.$1.entry_source=a;return this};a.prototype.setErrorMessage=function(a){this.$1.error_message=a;return this};a.prototype.setErrorStack=function(a){this.$1.error_stack=a;return this};a.prototype.setExitStatus=function(a){this.$1.exit_status=a;return this};a.prototype.setIsCommentReply=function(a){this.$1.is_comment_reply=a;return this};a.prototype.setLivingRoomAction=function(a){this.$1.living_room_action=a;return this};a.prototype.setLivingRoomID=function(a){this.$1.living_room_id=a;return this};a.prototype.setLivingRoomSurface=function(a){this.$1.living_room_surface=a;return this};a.prototype.setManualConfigType=function(a){this.$1.manual_config_type=a;return this};a.prototype.setManualCreationSource=function(a){this.$1.manual_creation_source=a;return this};a.prototype.setManualGroupID=function(a){this.$1.manual_group_id=a;return this};a.prototype.setManualProfileID=function(a){this.$1.manual_profile_id=a;return this};a.prototype.setManualSessionID=function(a){this.$1.manual_session_id=a;return this};a.prototype.setOldScheduledStartTime=function(a){this.$1.old_scheduled_start_time=a;return this};a.prototype.setPlaylistID=function(a){this.$1.playlist_id=a;return this};a.prototype.setQuery=function(a){this.$1.query=a;return this};a.prototype.setReactionType=function(a){this.$1.reaction_type=a;return this};a.prototype.setSuggestedItemID=function(a){this.$1.suggested_item_id=a;return this};a.prototype.setTargetID=function(a){this.$1.target_id=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setTimeSpent=function(a){this.$1.time_spent=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setVideoEvent=function(a){this.$1.video_event=a;return this};a.prototype.setVideoIDMarauder=function(a){this.$1.video_id_marauder=a;return this};a.prototype.setVideoOffset=function(a){this.$1.video_offset=a;return this};a.prototype.setVideoState=function(a){this.$1.video_state=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.setXmaClickSameVideo=function(a){this.$1.xma_click_same_video=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={clienttime:!0,comment_body:!0,composer_session_id:!0,content_item_id:!0,curation_context:!0,deviceid:!0,entry_source:!0,error_message:!0,error_stack:!0,exit_status:!0,is_comment_reply:!0,living_room_action:!0,living_room_id:!0,living_room_surface:!0,manual_config_type:!0,manual_creation_source:!0,manual_group_id:!0,manual_profile_id:!0,manual_session_id:!0,old_scheduled_start_time:!0,playlist_id:!0,query:!0,reaction_type:!0,suggested_item_id:!0,target_id:!0,time:!0,time_spent:!0,vc:!0,video_event:!0,video_id_marauder:!0,video_offset:!0,video_state:!0,weight:!0,xma_click_same_video:!0};e.exports=a}),null);
__d("LivingRoomNoVideoPreview.react",["cx","ix","Image.react","React"],(function(a,b,c,d,e,f,g,h){function a(a){return b("React").createElement("div",{className:"_3hj7"},b("React").createElement(b("Image.react"),{className:"_3hj8",src:a.backgroundImageURL!==null&&a.backgroundImageURL!==void 0&&a.backgroundImageURL!==""?a.backgroundImageURL:h("646608")}))}e.exports=a}),null);
__d("LivingRoomConstants",[],(function(a,b,c,d,e,f){a={END_SCREEN_CHAINING_TIMEOUT_SECONDS:5,FEED_BLUR_OVERLAY_DELAY_MS:7500,INVITE_FRIENDS_RESULTS_PER_PAGE:20,INVITE_FRIENDS_RESULTS_PER_EXTRA_PAGE:10,NUX_CREATE_WITH_CUSTOM_NAME:6218,NUX_FEED_PRESENCE:6358,NUX_HOST_WELCOME:5612,NUX_HOST_WALKTHROUGH:5634,NUX_PRE_POP:5972,NUX_PRESENCE_TRAY:5584,NUX_VIEWER_WELCOME:5594,NUX_PAGE_VIDEO_LIBRARY_BUTTON:6488,TOPIC_CHANNEL_NUX_VIEWER_WELCOME:5814,TOPIC_CHANNEL_NUX_PRESENCE_TRAY:5815,PARTICIPANTS_PAGE_SIZE:20,RECAP_LOAD_SIZE:10,RECAP_REFETCH_PADDING:5,TV_EMOJI:"1f4fa",UPDATE_SUGGESTED_ITEMS:"update_suggested_items",UPDATE_VIDEO_STATE:"update_video_state",VIEWER_REACTION:"viewer_reaction",VIDEO_START_SECONDS:1e-5,VIDEO_SEARCH_DEBOUNCING_DELAY:750,VIDEO_SEARCH_BQF:"keywords_blended_videos",VIDEO_SEARCH_PAGE_BQF:"videos-by",VIDEO_SEARCH_RESULTS_PER_PAGE:20,VIDEO_SEARCH_RESULTS_PER_EXTRA_PAGE:10};e.exports=a}),null);
__d("LivingRoomExperiments",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({THREADED_COMMENTS:"THREADED_COMMENTS",COMMENT_UPDATES:"COMMENT_UPDATES",VIDEO_QUERY_SUGGESTED:"VIDEO_QUERY_SUGGESTED",VIDEO_QUERY_FRIENDS:"VIDEO_QUERY_FRIENDS",VIDEO_QUERY_POPULAR:"VIDEO_QUERY_POPULAR",VIDEO_QUERY_TRENDING:"VIDEO_QUERY_TRENDING",QUICK_COMMENTS:"QUICK_COMMENTS",AVD_DEFAULT_PAGE_TAB:"AVD_DEFAULT_PAGE_TAB"})}),null);
__d("LivingRoomLoggerAction",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADD_CONTENT:"add_content",ADVANCE_QUEUE:"advance_queue",ADVANCE_QUEUE_CANCELED:"advance_queue_canceled",ADVANCE_QUEUE_PROCESSED:"advance_queue_processed",ADVANCE_QUEUE_SCHEDULED:"advance_queue_scheduled",ADVANCE_QUEUE_INVALID:"advance_queue_invalid",AUTO_COHOST_OPT_OUT_BANNER_RENDERED:"auto_cohost_opt_out_banner_rendered",AUTO_PLAY_BANNER_JOB_CANCELED:"auto_play_banner_job_canceled",AUTO_PLAY_BANNER_JOB_INVALID:"auto_play_banner_job_invalid",AUTO_PLAY_BANNER_JOB_PROCESSED:"auto_play_banner_job_processed",AUTO_PLAY_BANNER_JOB_SCHEDULED:"auto_play_banner_job_scheduled",AUTO_PLAY_VIDEO_NOT_FOUND:"auto_play_video_not_found",AUTO_PLAY_FAIL_TO_RETRIEVE_FROM_SEARCH_SOURCE:"auto_play_fail_to_retrieve_from_search_source",AUTO_PLAY_SEARCH_SOURCE_VIDEO_NOT_FOUND:"auto_play_search_source_video_not_found",AUTO_PLAY_FIT_SOURCE_VIDEO_NOT_FOUND:"auto_play_fit_source_video_not_found",AUTO_PLAY_VIDEO_FAIL_INTEGRITY_CHECK:"auto_play_video_fail_integrity_check",AUTO_PLAY_VIDEO_FAIL_VALIDATION:"auto_play_video_fail_validation",AUTO_PLAY_VIDEO_PLAYED:"auto_play_video_played",AUTO_PLAY_VIDEO_SET:"auto_play_video_set",AUTO_SEAL_JOB_INVALID:"auto_seal_job_invalid",AUTOCURATE_PLAYLIST:"autocurate_playlist",BANNER_AUTO_PLAY_VIDEO_RENDERED:"banner_cancel_auto_play_video_rendered",BANNER_CURRENT_PLAYING_VIDEO_RENDERED:"banner_current_playing_video_rendered",BECOME_HOST:"become_host",CHAINED_LIVING_ROOM_GENERATED:"chained_living_room_generated",CHAINED_LIVING_ROOM_NOT_GENERATED:"chained_living_room_not_generated",COHOST_PROMOTION_REQUEST_BANNER_RENDERED:"cohost_promotion_request_banner_rendered",CLICK_ADD_VIDEO:"click_add_video",CLICK_ADD_VIDEO_TAB:"click_add_video_tab",CLICK_AUTO_COHOST_OPT_OUT_BANNER:"click_auto_cohost_opt_out_banner",CLICK_AUTO_COHOST_OPT_OUT_BANNER_OPT_OUT:"click_auto_cohost_opt_out_banner_opt_out",CLICK_AUTO_PLAY_VIDEO_BANNER:"click_cancel_auto_play_video_banner",CLICK_AUTO_PLAY_VIDEO_BANNER_ACCEPT:"click_cancel_auto_play_video_banner_accept",CLICK_AUTO_PLAY_VIDEO_BANNER_CANCEL:"click_cancel_auto_play_video_banner_cancel",CLICK_COHOST_PROMOTION_REQUEST_BANNER:"click_cohost_promotion_request_banner",CLICK_COHOST_PROMOTION_REQUEST_BANNER_APPROVE:"click_cohost_promotion_request_banner_approve",CLICK_COHOST_PROMOTION_REQUEST_BANNER_DECLINE:"click_cohost_promotion_request_banner_decline",CLICK_CURRENT_PLAYING_VIDEO_BANNER:"click_current_playing_video_banner",CLICK_END_SESSION:"click_end_session",CLICK_INVITE_BUTTON:"click_invite_button",CLICK_TO_OPEN:"click_to_open",CLICK_PREPOPULATE:"click_prepopulate",CLICK_PREPOPULATE_LATER:"click_prepopulate_later",CLICK_PROFILE:"click_profile",CLICK_RECOMMENDED_SHOW:"click_recommended_show",CLICK_RECOMMENDED_VIDEO:"click_recommended_video",CLICK_RECAP_VIDEO:"click_recap_video",CLICK_RECAP_INSIGHTS:"click_recap_insights",CLICK_RECAP_SAVE:"click_recap_save",CLICK_RECAP_UNSAVE:"click_recap_unsave",CLICK_SEND_INVITE:"click_send_invite",CLICK_SEND_IN_MESSENGER:"click_send_in_messenger",CLICK_SHARE_LIVING_ROOM:"click_share_living_room",CLICK_SPROUT:"click_sprout",CLICK_SUGGEST_VIDEO:"click_suggest_video",CLICK_SUGGESTED_VIDEO_BANNER:"click_suggested_video_banner",CLICK_SUGGESTED_VIDEO_BANNER_ACCEPT:"click_suggested_video_banner_accept",CLICK_VIEW_QUEUE:"click_view_queue",COMMENT:"comment",COMMENT_PAYLOAD_RECEIVED:"comment_payload_received",COMMENT_PAYLOAD_RENDERED:"comment_payload_rendered",COMMENT_REACTION:"comment_reaction",COMPOSER_POST_BUTTON_DISABLED:"composer_post_button_disabled",CREATE_LIVING_ROOM:"create_living_room",CREATE_LIVING_ROOM_ACTION_LINK_IMPRESSION:"create_living_room_action_link_impression",CREATE_POST_CLICKED:"create_post_clicked",CREATE_POST_FAILED:"create_post_failed",CREATE_POST_SUCCEEDED:"create_post_succeeded",CREATION_ENTRY_POINT_IMPRESSION:"creation_entry_point_impression",CREATOR_FIRST_ENTER_PROCESSED:"creator_first_enter_processed",CURATION_VIDEOS_REQUESTED:"curation_videos_requested",CURATION_VIDEOS_RETURNED:"curation_videos_returned",DISABLE_ADD_COHOST_BY_DEFAULT_AND_REVOKE_COHOSTS:"disable_add_cohost_by_default_and_revoke_cohosts",DELETED:"deleted",DISMISS_ALL_SUGGESTED:"dismiss_all_suggested",DISMISS_SUGGESTED:"dismiss_suggested",END_SCREEN_CHAIN_AUTO_JOIN:"end_screen_chain_auto_join",END_SCREEN_CHAIN_TAP_TO_JOIN:"end_screen_chain_tap_to_join",END_SCREEN_CHAIN_TIMER_PAUSE:"end_screen_chain_timer_pause",END_SCREEN_CHAIN_TIMER_RESUME:"end_screen_chain_timer_resume",ENTERING_FULLSCREEN:"entering_fullscreen",ERROR:"error",EXECUTE_PAGE_SEARCH:"execute_page_search",EXECUTE_VIDEO_SEARCH:"execute_video_search",EXIST_ACTIVE_LIVING_ROOM:"exist_active_living_room",GRANT_HOST:"grant_host",HIDE_ENTRY_POINT:"hide_entry_point",IMPRESSION:"impression",INACTIVE_VIEWER_COMMENT:"inactive_viewer_comment",INACTIVE_VIEWER_PRESENCE:"inactive_viewer_presence",INACTIVE_VIEWER_REACTION:"inactive_viewer_reaction",INACTIVE_VIEWER_REJOIN:"inactive_viewer_rejoin",INVITE_ONLINE_FRIENDS_CTA_IMPRESSION:"invite_online_friends_cta_impression",INVITE_ONLINE_FRIENDS_CTA_CLICK:"invite_online_friends_cta_click",INVITE_ONLINE_FRIENDS_CTA_CLICK_INVITE:"invite_online_friends_cta_click_invite",INVITE_ONLINE_FRIENDS_CTA_INVITE_PROCESSED:"invite_online_friends_cta_invite_processed",JOIN:"join",JOIN_PROCESSED:"join_processed",LEAVE:"leave",LEAVE_PROCESSED:"leave_processed",LOADING_LIVING_ROOM:"loading_living_room",INITIAL_VIDEO_PLAY:"initial_video_play",MESSENGER_CTA_CLICK_CREATE:"messenger_cta_click_create",MESSENGER_CTA_CLICK_ENTRY_POINT:"messenger_cta_click_entry_point",MESSENGER_CTA_IMPRESSION:"messenger_cta_impression",MESSENGER_AUTO_PLAY_PROCESSED:"messenger_auto_play_processed",MESSENGER_AUTO_PLAY_SCHEDULED:"messenger_auto_play_scheduled",MESSENGER_AUTO_PLAY_INVAILD:"messenger_auto_play_invalid",MUSIC_VIDEO_ADDED:"music_video_added",NOTIF_SUBSCRIPTIONS_ALL:"notif_subscriptions_all",NOTIF_SUBSCRIPTIONS_HIGHLIGHTS:"notif_subscriptions_highlights",NOTIF_SUBSCRIPTIONS_OFF:"notif_subscriptions_off",NOTIF_SUBSCRIPTIONS_CANNOT_SEE_BELL:"notif_subscriptions_cannot_see_bell",NOTIF_SUBSCRIPTIONS_OFF_PAGE_UNFOLLOWED:"notif_subscriptions_off_page_unfollowed",NULL_STATE_RENDERED:"null_state_rendered",OPEN_CREATION_DIALOG:"open_creation_dialog",PIN_COMMENT:"pin_comment",PLAY_FIRST_VIDEO:"play_first_video",PLAY_NEXT_FROM_QUEUE:"play_next_from_queue",PLAY_NOW_FROM_QUEUE:"play_now_from_queue",PRESENCE_SUBSCRIPTION_PAYLOAD:"presence_subscription_payload",QUICK_PROMOTION_IMPRESSION:"quick_promotion_impression",QUICK_PROMOTION_CLICK:"quick_promotion_click",QUEUE_END_REACHED:"queue_end_reached",QUEUE_STALL_PROCESSED:"queue_stall_processed",REACTION:"reaction",RECOMMENDED_SHOWS_QUERY_PROCESSED:"recommended_shows_query_processed",REMOVE_CONTENT:"remove_content",RESTRICTED_CONTENT_HIDDEN:"restricted_content_hidden",REVOKE_HOST:"revoke_host",GROUP_MALL_UPSELL_IMPRESSION:"group_mall_upsell_impression",GROUP_MALL_UPSELL_CLICK:"group_mall_upsell_click",RESCHEDULE:"reschedule",SCHEDULE:"schedule",START:"start",RESUME:"resume",CANCEL:"cancel",SEAL_ASYNC:"seal_async",SEND_INVITE:"send_invite",SEND_INVITE_NOTIF:"send_invite_notif",SEND_INVITE_MESSAGE:"send_invite_message",SESSION_END:"session_end",SESSION_START:"session_start",SHOW_CUSTOMIZATION_DIALOG:"show_customization_dialog",SHOW_INVITE_DIALOG:"show_invite_dialog",SHOW_MANAGE_PARTICIPANTS:"show_manage_participants",SPROUT_IMPRESSION:"sprout_impression",START_COMMENTATING_BANNER_RENDERED:"start_commentating_banner_rendered",START_COMMENTATING_BANNER_CLICK:"start_commentating_banner_click",SUGGEST_VIDEO:"suggest_video",SUGGEST_VIDEO_PROCESSED:"suggest_video_processed",SUGGESTED_VIDEO_BANNER_RENDERED:"suggested_video_banner_rendered",UNHANDLED_GRAPHQL_ERROR:"unhandled_graphql_error",UNPIN_COMMENT:"unpin_comment",UPDATE_CUSTOM_NAME:"update_custom_name",VIDEO_STATE:"video_state",VIDEO_STATE_PUBLISH:"video_state_publish",VIDEO_VALIDATION_FAILED:"video_validation_failed",VOICE_SELECTOR_ACTOR_CHANGE:"voice_selector_actor_change",ZOMBIE_TRIGGER_FIRED:"zombie_trigger_fired",CURATION_CLOSE:"curation_close",CURATION_OPEN:"curation_open",CURATION_TAB_IMPRESSION:"curation_tab_impression",CURATION_CLICK_SEARCH:"curation_click_search",ADD_TO_QUEUE:"add_to_queue",REMOVE_FROM_QUEUE:"remove_from_queue",PLAY_NOW:"play_now",PLAY_NEXT:"play_next",CURATION_VIDEO_VALIDATION_FAILED:"curation_video_validation_failed",SOCIAL_PLAYER_CREATION_SHEET_CANCELED:"social_player_creation_sheet_canceled",SOCIAL_PLAYER_CREATION_SHEET_PRIVACY_SELECTOR_CHANGED:"social_player_creation_sheet_privacy_selector_changed",SOCIAL_PLAYER_CREATION_SHEET_PRIVACY_SELECTOR_CLICKED:"social_player_creation_sheet_privacy_selector_clicked",SOCIAL_PLAYER_CREATION_SHEET_SEARCH_TEXT_ENTERED:"social_player_creation_sheet_search_text_entered",SOCIAL_PLAYER_CREATION_SHEET_SEARCHED_FRIEND_SELECTED:"social_player_creation_sheet_searched_friend_selected",SOCIAL_PLAYER_CREATION_SHEET_SELECT_NF_POST:"social_player_creation_sheet_select_nf_post",SOCIAL_PLAYER_CREATION_SHEET_SEND_INVITATION:"social_player_creation_sheet_send_invitation",SOCIAL_PLAYER_CREATION_SHEET_SUBMITTED:"social_player_creation_sheet_submitted",SOCIAL_PLAYER_PLUGIN_CLICK_INVITE_FRIENDS:"social_player_plugin_click_invite_friends",SOCIAL_PLAYER_PLUGIN_CLICK_FACEPILE:"social_player_plugin_click_facepile",SOCIAL_PLAYER_PLUGIN_IMPRESSION:"social_player_plugin_impression",DID_FETCH_COMMENTATING_VIDEO:"did_fetch_commentating_video",DID_SHOW_PLAYBACK:"did_show_playback",DID_START_PLAYING:"did_start_playing",DID_PLAYBACK_END:"did_playback_end",DID_PLAYBACK_FAIL:"did_playback_fail",DID_PLAYBACK_STALL:"did_playback_stall",DID_MUTE:"did_mute",DID_UNMUTE:"did_unmute",SEND_DELTA_FAILED:"send_delta_failed",MESSENGER_AUTO_PLAY_JOB_CANCELED:"messenger_auto_play_job_canceled"})}),null);