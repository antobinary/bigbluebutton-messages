//TODO check again if these vars are going to interfere with the other modules' scope

/*
--check on documentation
--check how to insert today's date for timestamp

--CREATE THE REVERSE FUNCTIONALITY JSON->JavaScriptObject

--improve naming convention


*/



var WHITEBOARD_DRAW_EVENT = "whiteboard_draw_event";
var WHITEBOARD_UPDATE_EVENT = "whiteboard_update_event";
var CREATE_MEETING_REQUEST = "create_meeting_request";
var CREATE_MEETING_RESPONSE = "create_meeting_response";
var MEETING_CREATED_EVENT = "meeting_created_event";
var END_MEETING_REQUEST = "end_meeting_request";
var END_MEETING_RESPONSE = "end_meeting_response";
var END_MEETING_WARNING_EVENT = "end_meeting_warning_event";
var MEETING_ENDED_EVENT = "meeting_ended_event";
var REGISTER_USER_REQUEST = "meeting_ended_event";
var REGISTER_USER_RESPONSE = "register_user_response";
var USER_REGISTERED_EVENT = "user_registered_event";
var USER_JOIN_REQUEST = "user_join_request";
var USER_JOIN_RESPONSE = "user_join_response";
var USER_JOINED_EVENT = "user_joined_event";
var USER_LEAVE_EVENT = "user_leave_event";
var USER_LEFT_EVENT = "user_left_event";
var GET_USERS_REQUEST = "get_users_request";
var GET_USERS_RESPONSE = "get_users_response";
var RAISE_USER_HAND_REQUEST = "raise_user_hand_request";
var USER_RAISED_HAND_EVENT = "user_raised_hand_event";
var ASSIGN_PRESENTER_REQUEST = "assign_presenter_request";
var PRESENTER_ASSIGNED_EVENT = "presenter_assigned_event";
var MUTE_USER_REQUEST = "mute_user_request";
var MUTE_USER_REQUEST_EVENT = "mute_user_request_event";
var MUTE_VOICE_USER_REQUEST = "mute_voice_user_request";
var VOICE_USER_MUTED_EVENT = "voice_user_muted_event";
var USER_MUTED_EVENT = "user_muted_event";
var USER_PUBLISH_STREAM_REQUEST = "user_publish_stream_request";
var PUBLISH_STREAM_REQUEST = "publish_stream_request";
var PUBLISH_STREAM_RESPONSE = "publish_stream_response";
var USER_PUBLISH_STREAM_RESPONSE = "user_publish_stream_response";
var PUBLISHED_STREAM_EVENT = "published_stream_event";
var USER_PUBLISHED_STREAM_EVENT = "user_published_stream_event";
var UNPUBLISHED_STREAM_EVENT = "unpublished_stream_event";
var USER_UNPUBLISHED_STREAM_EVENT = "user_unpublished_stream_event";
var PUBLIC_CHAT_MESSAGE_EVENT = "public_chat_message_event";
var BROADCAST_PUBLIC_CHAT_MESSAGE_EVENT = "broadcast_public_chat_message_event";
var PRIVATE_CHAT_MESSAGE_EVENT = "private_chat_message_event";
var BROADCAST_PRIVATE_CHAT_MESSAGE_EVENT = "broadcast_private_chat_message_event";
var BROADCAST_WHITEBOARD_DRAW_EVENT = "broadcast_whiteboard_draw_event";
var BROADCAST_WHITEBOARD_UPDATE_EVENT = "broadcast_whiteboard_update_event";
var WHITEBOARD_CURSOR_EVENT = "whiteboard_cursor_event";
var BROADCAST_WHITEBOARD_CURSOR_EVENT = "broadcast_whiteboard_cursor_event";
var SHARE_PRESENTATION_EVENT = "share_presentation_event";
var BROADCAST_SHARE_PRESENTATION_EVENT = "broadcast_share_presentation_event";
var RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT = "resize_and_move_page_presentation_event";
var BROADCAST_RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT = "broadcast_resize_and_move_page_presentation_event";


module.exports.WHITEBOARD_DRAW_EVENT = WHITEBOARD_DRAW_EVENT;
module.exports.WHITEBOARD_UPDATE_EVENT = WHITEBOARD_UPDATE_EVENT;
module.exports.CREATE_MEETING_REQUEST = CREATE_MEETING_REQUEST;
module.exports.CREATE_MEETING_RESPONSE = CREATE_MEETING_RESPONSE;
module.exports.MEETING_CREATED_EVENT = MEETING_CREATED_EVENT;
module.exports.END_MEETING_REQUEST = END_MEETING_REQUEST;
module.exports.END_MEETING_RESPONSE = END_MEETING_RESPONSE;
module.exports.END_MEETING_WARNING_EVENT = END_MEETING_WARNING_EVENT;
module.exports.MEETING_ENDED_EVENT = MEETING_ENDED_EVENT;
module.exports.REGISTER_USER_REQUEST = REGISTER_USER_REQUEST;
module.exports.REGISTER_USER_RESPONSE = REGISTER_USER_RESPONSE;
module.exports.USER_REGISTERED_EVENT = USER_REGISTERED_EVENT;
module.exports.USER_JOIN_REQUEST = USER_JOIN_REQUEST;
module.exports.USER_JOIN_RESPONSE = USER_JOIN_RESPONSE;
module.exports.USER_JOINED_EVENT = USER_JOINED_EVENT;
module.exports.USER_LEAVE_EVENT = USER_LEAVE_EVENT;
module.exports.USER_LEFT_EVENT = USER_LEFT_EVENT;
module.exports.GET_USERS_REQUEST = GET_USERS_REQUEST;
module.exports.GET_USERS_RESPONSE = GET_USERS_RESPONSE;
module.exports.RAISE_USER_HAND_REQUEST = RAISE_USER_HAND_REQUEST;

module.exports.USER_RAISED_HAND_EVENT = USER_RAISED_HAND_EVENT;
module.exports.ASSIGN_PRESENTER_REQUEST = ASSIGN_PRESENTER_REQUEST;
module.exports.PRESENTER_ASSIGNED_EVENT = PRESENTER_ASSIGNED_EVENT;
module.exports.MUTE_USER_REQUEST = MUTE_USER_REQUEST;
module.exports.MUTE_USER_REQUEST_EVENT = MUTE_USER_REQUEST_EVENT;
module.exports.MUTE_VOICE_USER_REQUEST = MUTE_VOICE_USER_REQUEST;
module.exports.VOICE_USER_MUTED_EVENT = VOICE_USER_MUTED_EVENT;
module.exports.USER_MUTED_EVENT = USER_MUTED_EVENT;
module.exports.USER_PUBLISH_STREAM_REQUEST = USER_PUBLISH_STREAM_REQUEST;
module.exports.PUBLISH_STREAM_REQUEST = PUBLISH_STREAM_REQUEST;
module.exports.PUBLISH_STREAM_RESPONSE = PUBLISH_STREAM_RESPONSE;
module.exports.USER_PUBLISH_STREAM_RESPONSE = USER_PUBLISH_STREAM_RESPONSE;
module.exports.PUBLISHED_STREAM_EVENT = PUBLISHED_STREAM_EVENT;
module.exports.USER_PUBLISHED_STREAM_EVENT = USER_PUBLISHED_STREAM_EVENT;
module.exports.UNPUBLISHED_STREAM_EVENT = UNPUBLISHED_STREAM_EVENT;
module.exports.USER_UNPUBLISHED_STREAM_EVENT = USER_UNPUBLISHED_STREAM_EVENT;
module.exports.PUBLIC_CHAT_MESSAGE_EVENT = PUBLIC_CHAT_MESSAGE_EVENT;
module.exports.BROADCAST_PUBLIC_CHAT_MESSAGE_EVENT = BROADCAST_PUBLIC_CHAT_MESSAGE_EVENT;
module.exports.PRIVATE_CHAT_MESSAGE_EVENT = PRIVATE_CHAT_MESSAGE_EVENT;
module.exports.BROADCAST_PRIVATE_CHAT_MESSAGE_EVENT = BROADCAST_PRIVATE_CHAT_MESSAGE_EVENT;
module.exports.BROADCAST_WHITEBOARD_DRAW_EVENT = BROADCAST_WHITEBOARD_DRAW_EVENT;
module.exports.BROADCAST_WHITEBOARD_UPDATE_EVENT = BROADCAST_WHITEBOARD_UPDATE_EVENT;
module.exports.WHITEBOARD_CURSOR_EVENT = WHITEBOARD_CURSOR_EVENT;
module.exports.BROADCAST_WHITEBOARD_CURSOR_EVENT = BROADCAST_WHITEBOARD_CURSOR_EVENT;
module.exports.SHARE_PRESENTATION_EVENT = SHARE_PRESENTATION_EVENT;
module.exports.BROADCAST_SHARE_PRESENTATION_EVENT = BROADCAST_SHARE_PRESENTATION_EVENT;
module.exports.RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT = RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT;
module.exports.BROADCAST_RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT = BROADCAST_RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT;


//list of events to be selected from
module.exports.getEvents = {
    0: 'Please select an event type',
    1: WHITEBOARD_DRAW_EVENT,
    2: WHITEBOARD_UPDATE_EVENT,
    3: CREATE_MEETING_REQUEST,
    4: CREATE_MEETING_RESPONSE,
    5: MEETING_CREATED_EVENT,
    6: END_MEETING_REQUEST,
    7: END_MEETING_RESPONSE,
    8: END_MEETING_WARNING_EVENT,
    9: MEETING_ENDED_EVENT,
    10: REGISTER_USER_REQUEST,
    11: REGISTER_USER_RESPONSE,
    12: USER_REGISTERED_EVENT,
    13: USER_JOIN_REQUEST,
    14: USER_JOIN_RESPONSE,
    15: USER_JOINED_EVENT,
    16: USER_LEAVE_EVENT,
    17: USER_LEFT_EVENT,
    18: GET_USERS_REQUEST,
    19: GET_USERS_RESPONSE,
    20: RAISE_USER_HAND_REQUEST,
    21: USER_RAISED_HAND_EVENT,
    22: ASSIGN_PRESENTER_REQUEST,
    23: PRESENTER_ASSIGNED_EVENT,
    24: MUTE_USER_REQUEST,
    25: MUTE_USER_REQUEST_EVENT,
    26: MUTE_VOICE_USER_REQUEST,
    27: VOICE_USER_MUTED_EVENT,
    28: USER_MUTED_EVENT,
    29: USER_PUBLISH_STREAM_REQUEST,
    30: PUBLISH_STREAM_REQUEST,
    31: PUBLISH_STREAM_RESPONSE,
    32: USER_PUBLISH_STREAM_RESPONSE,
    33: PUBLISHED_STREAM_EVENT,
    34: USER_PUBLISHED_STREAM_EVENT,
    35: UNPUBLISHED_STREAM_EVENT,
    36: USER_UNPUBLISHED_STREAM_EVENT,
    37: PUBLIC_CHAT_MESSAGE_EVENT,
    38: BROADCAST_PUBLIC_CHAT_MESSAGE_EVENT,
    39: PRIVATE_CHAT_MESSAGE_EVENT,
    40: BROADCAST_PRIVATE_CHAT_MESSAGE_EVENT,
    41: BROADCAST_WHITEBOARD_DRAW_EVENT,
    42: BROADCAST_WHITEBOARD_UPDATE_EVENT,
    43: WHITEBOARD_CURSOR_EVENT,
    44: BROADCAST_WHITEBOARD_CURSOR_EVENT,
    45: SHARE_PRESENTATION_EVENT,
    46: BROADCAST_SHARE_PRESENTATION_EVENT,
    47: RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT,
    48: BROADCAST_RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT
};

function paramExist(param) {
  if (typeof param === "undefined" || param === null || param === "") {
    return false;
  }   
  return true;
}

// TODO: Add some documentation using http://usejsdoc.org/
// Document requried and optional parameters
module.exports.whiteboardDrawEventToJson = function(params, onSuccess, onFailure) {
    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = ["meetingId", "sessionId", "channels", "source", "meetingName", "whiteboardId", "shapeId", "shapeType",
        "firstX", "firstY", "lastX", "lastY", "lineColor", "lineWeight", "lineType", 
        "background_visible", "background_color", "background_alpha", "square", "byId", "byName"
    ];

    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg="Missing parameter [" + requiredParams[key] + "]=\""+params[requiredParams[key]]+"\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors); //TODO improve this
        
    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channels;
        header.name = WHITEBOARD_DRAW_EVENT;
        header.timestamp = "2013-12-23T08:50Z"; // TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
        header.source = params.source;
        payload = {};
        payload.meeting = {}; //TODO these were not in the original json from the scala page
        payload.meeting.name = params.meetingName; //TODO these were not in the original json from the scala page
        payload.meeting.id = params.meetingId; //TODO these were not in the original json from the scala page
        payload.session = params.sessionId; //TODO these were not in the original json from the scala page
        payload.whiteboard_id = params.whiteboardId;
        payload.shape_id = params.shapeId;
        payload.shape_type = params.shapeType;
        data = {};
        data.coordinate = {};
        data.coordinate.first_x = params.firstX;
        data.coordinate.first_y = params.firstY;
        data.coordinate.last_x = params.lastX;
        data.coordinate.last_y = params.lastY;
        data.line = {};
        data.line.line_type = params.lineType;
        data.line.color = params.lineColor;
        data.weight = params.lineWeight;
        
        data.background={};
        data.background.visible=params.background_visible;
        data.background.color=params.background_color;
        data.background.alpha=params.background_alpha;
        data.square=params.square;


        payload.data = data;

        payload.by = {};
        payload.by.id = params.byId;
        payload.by.name = params.byName;
        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));//TODO improve this
    }
}

// TODO: Do the same thing to convert from JSON to JS Object
//module.exports.whiteboardDrawEventFromJson(message, onSuccess, onFailure) {

// TODO: Add some documentation using http://usejsdoc.org/
// Document requried and optional parameters
module.exports.whiteboardUpdateEventToJson = function(params, onSuccess, onFailure) {
    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = ["meetingId", "sessionId", "channels", "source", "meetingName", "whiteboardId", "shapeId", "shapeType",
        "firstX", "firstY", "lastX", "lastY", "lineColor", "lineWeight", "lineType", 
        "background_visible", "background_color", "background_alpha", "square", "byId", "byName"
    ];

    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg="Missing parameter [" + requiredParams[key] + "]=\""+params[requiredParams[key]]+"\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors); //TODO improve this
        
    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channels;
        header.name = WHITEBOARD_UPDATE_EVENT;
        header.timestamp = "2013-12-23T08:50Z"; // TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
        header.source = params.source;
        payload = {};
        payload.meeting = {}; //TODO these were not in the original json from the scala page
        payload.meeting.name = params.meetingName; //TODO these were not in the original json from the scala page
        payload.meeting.id = params.meetingId; //TODO these were not in the original json from the scala page
        payload.session = params.sessionId; //TODO these were not in the original json from the scala page
        payload.whiteboard_id = params.whiteboardId;
        payload.shape_id = params.shapeId;
        payload.shape_type = params.shapeType;
        data = {};
        data.coordinate = {};
        data.coordinate.first_x = params.firstX;
        data.coordinate.first_y = params.firstY;
        data.coordinate.last_x = params.lastX;
        data.coordinate.last_y = params.lastY;
        data.line = {};
        data.line.line_type = params.lineType;
        data.line.color = params.lineColor;
        data.weight = params.lineWeight;
        
        data.background={};
        data.background.visible=params.background_visible;
        data.background.color=params.background_color;
        data.background.alpha=params.background_alpha;
        data.square=params.square;

        payload.data = data;

        payload.by = {};
        payload.by.id = params.byId;
        payload.by.name = params.byName;
        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));//TODO improve this
    }
}

module.exports.createMeetingRequestToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = ["channelsDestination", "channelsReply", "correlationId", "source",
        "descriptorName", "descriptorExternalId", "descriptorRecord", "descriptorWelcome",
        "descriptorLogout", "descriptorAvatar", "descriptorMaxUsers", "durationLength",
        "durationAllowExtend", "durationMaxMinutes", "voiceConfPin", "voiceConfNumber", "phoneNumbers",
        "metadataCustomerId", "metadataCustomerName"//, "name", "timestamp"
    ];

    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg="Missing parameter [" + requiredParams[key] + "]=\""+params[requiredParams[key]]+"\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;
        header.reply = {};
        header.reply.to = params.channelsReply;
        header.reply.correlation_id = params.correlationId;
        header.name = CREATE_MEETING_REQUEST;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting_descriptor = {};
        payload.meeting_descriptor.name = params.descriptorName;
        payload.meeting_descriptor.external_id = params.descriptorExternalId;
        payload.meeting_descriptor.record = params.descriptorRecord;
        payload.meeting_descriptor.welcome_message = params.descriptorWelcome;
        payload.meeting_descriptor.logout_url = params.descriptorLogout;
        payload.meeting_descriptor.avatar_url = params.descriptorAvatar;
        payload.meeting_descriptor.max_users = params.descriptorMaxUsers;
        payload.meeting_descriptor.duration = {};
        payload.meeting_descriptor.duration.length_in_minutes = params.durationLength;
        payload.meeting_descriptor.duration.allow_extend = params.durationAllowExtend;
        payload.meeting_descriptor.duration.max_minutes = params.durationMaxMinutes;
        payload.meeting_descriptor.voice_conference = {};
        payload.meeting_descriptor.voice_conference.pin = params.voiceConfPin;
        payload.meeting_descriptor.voice_conference.number = params.voiceConfNumber;
        payload.meeting_descriptor.phone_numbers = params.phoneNumbers;

        payload.meeting_descriptor.metadata = {};
        payload.meeting_descriptor.metadata.customer_id = params.metadataCustomerId;
        payload.meeting_descriptor.metadata.customer_name = params.metadataCustomerName;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.createMeetingResponseToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = ["channelsDestination", "meetingName", "meetingId", "sessionId", "resultSuccess", "resultMessage", "correlationId", "source",
        "descriptorName", "descriptorExternalId", "descriptorRecord", "descriptorWelcome",
        "descriptorLogout", "descriptorAvatar", "descriptorMaxUsers", "durationLength",
        "durationAllowExtend", "durationMaxMinutes", "voiceConfPin", "voiceConfNumber", "phoneNumbers",
        "metadataCustomerId", "metadataCustomerName"//, "name", "timestamp"
    ];

    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg="Missing parameter [" + requiredParams[key] + "]=\""+params[requiredParams[key]]+"\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;
        header.destination.correlation_id = params.correlationId;
        header.name = CREATE_MEETING_RESPONSE;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.result = {};
        payload.result.success = params.resultSuccess;
        payload.result.message = params.resultMessage;

        payload.meeting_descriptor = {};
        payload.meeting_descriptor.name = params.descriptorName;
        payload.meeting_descriptor.external_id = params.descriptorExternalId;
        payload.meeting_descriptor.record = params.descriptorRecord;
        payload.meeting_descriptor.welcome_message = params.descriptorWelcome;
        payload.meeting_descriptor.logout_url = params.descriptorLogout;
        payload.meeting_descriptor.avatar_url = params.descriptorAvatar;
        payload.meeting_descriptor.max_users = params.descriptorMaxUsers;
        payload.meeting_descriptor.duration = {};
        payload.meeting_descriptor.duration.length_in_minutes = params.durationLength;
        payload.meeting_descriptor.duration.allow_extend = params.durationAllowExtend;
        payload.meeting_descriptor.duration.max_minutes = params.durationMaxMinutes;
        payload.meeting_descriptor.voice_conference = {};
        payload.meeting_descriptor.voice_conference.pin = params.voiceConfPin;
        payload.meeting_descriptor.voice_conference.number = params.voiceConfNumber;
        payload.meeting_descriptor.phone_numbers = params.phoneNumbers;
        
        payload.meeting_descriptor.metadata = {};
        payload.meeting_descriptor.metadata.customer_id = params.metadataCustomerId;
        payload.meeting_descriptor.metadata.customer_name = params.metadataCustomerName;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.meetingCreatedEventToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = ["channelsDestination", "source", "meetingName", "meetingId", "sessionId",
        "descriptorName", "descriptorExternalId", "descriptorRecord", "descriptorWelcome",
        "descriptorLogout", "descriptorAvatar", "descriptorMaxUsers", "durationLength",
        "durationAllowExtend", "durationMaxMinutes", "voiceConfPin", "voiceConfNumber", "phoneNumbers",
        "metadataCustomerId", "metadataCustomerName"//, "name", "timestamp"
    ];
    
    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg="Missing parameter [" + requiredParams[key] + "]=\""+params[requiredParams[key]]+"\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;
        header.name = MEETING_CREATED_EVENT;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingID;
        payload.session = params.sessionID;

        payload.meeting_descriptor = {};
        payload.meeting_descriptor.name = params.descriptorName;
        payload.meeting_descriptor.external_id = params.descriptorExternalId;
        payload.meeting_descriptor.record = params.descriptorRecord;
        payload.meeting_descriptor.welcome_message = params.descriptorWelcome;
        payload.meeting_descriptor.logout_url = params.descriptorLogout;
        payload.meeting_descriptor.avatar_url = params.descriptorAvatar;
        payload.meeting_descriptor.max_users = params.descriptorMaxUsers;
        payload.meeting_descriptor.duration = {};
        payload.meeting_descriptor.duration.length_in_minutes = params.durationLength;
        payload.meeting_descriptor.duration.allow_extend = params.durationAllowExtend;
        payload.meeting_descriptor.duration.max_minutes = params.durationMaxMinutes;
        payload.meeting_descriptor.voice_conference = {};
        payload.meeting_descriptor.voice_conference.pin = params.voiceConfPin;
        payload.meeting_descriptor.voice_conference.number = params.voiceConfNumber;
        payload.meeting_descriptor.phone_numbers = params.phoneNumbers;

        payload.meeting_descriptor.metadata = {};
        payload.meeting_descriptor.metadata.customer_id = params.metadataCustomerId;
        payload.meeting_descriptor.metadata.customer_name = params.metadataCustomerName;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.endMeetingRequestToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "channelsReply", "correlationId","force", "warnUsers"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;

        header.reply = {};
        header.reply.to = params.channelsReply;
        header.reply.correlation_id = params.correlationId;


        header.name = END_MEETING_REQUEST;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.force = params.force;
        payload.warn_users = params.warnUsers;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.endMeetingResponseToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "correlationId", "success", "message"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;
        header.destination.correlation_id=params.correlationId;

        header.name = END_MEETING_RESPONSE;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.result={};
        payload.result.success = params.success;
        payload.result.message = params.message;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.endMeetingWarningToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "timeLeft", "timeUnit", "allowExtend"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;

        header.name = END_MEETING_WARNING_EVENT;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.time_left = params.timeLeft;
        payload.time_unit = params.timeUnit;
        payload.allow_extend = params.allowExtend;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.meetingEndedEventToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;

        header.name = MEETING_ENDED_EVENT;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.registerUserRequestToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "correlationId", "channelsReply",
        "descriptorName", "descriptorExternalId", "descriptorRole",
        "descriptorPin", "descriptorWelcome", "descriptorAvatar",
        "descriptorLogout", "studentId", "program"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;

        header.reply = {};
        header.reply.to = params.channelsReply;
        header.reply.correlation_id = params.correlationId;

        header.name = REGISTER_USER_REQUEST;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.user_descriptor = {};
        payload.user_descriptor.external_id = params.descriptorExternalId;
        payload.user_descriptor.name = params.descriptorName;
        payload.user_descriptor.role = params.descriptorRole;
        payload.user_descriptor.pin = params.descriptorPin;
        payload.user_descriptor.welcome_message = params.descriptorWelcome;
        payload.user_descriptor.logout_url = params.descriptorLogout;
        payload.user_descriptor.avatar_url = params.descriptorAvatar;
        payload.user_descriptor.metadata = {};
        payload.user_descriptor.metadata.student_id = params.studentId;
        payload.user_descriptor.metadata.program = params.program;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.registerUserResponseToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "correlationId", "descriptorName", 
        "descriptorExternalId", "descriptorRole",
        "descriptorPin", "descriptorWelcome", "descriptorAvatar",
        "descriptorLogout", "studentId", "program",
        "token", "success", "message"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;
        header.destination.correlation_id = "abc";

        header.name = REGISTER_USER_RESPONSE;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.user_token = params.token;
        payload.result = {};
        payload.result.success = params.success;
        payload.result.message = params.message;

        payload.user_descriptor = {};
        payload.user_descriptor.external_id = params.descriptorExternalId;
        payload.user_descriptor.name = params.descriptorName;
        payload.user_descriptor.role = params.descriptorRole;
        payload.user_descriptor.pin = params.descriptorPin;
        payload.user_descriptor.welcome_message = params.descriptorWelcome;
        payload.user_descriptor.logout_url = params.descriptorLogout;
        payload.user_descriptor.avatar_url = params.descriptorAvatar;
        payload.user_descriptor.metadata = {};
        payload.user_descriptor.metadata.student_id = params.studentId;
        payload.user_descriptor.metadata.program = params.program;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.userRegisteredEventToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "descriptorName", 
        "descriptorExternalId", "descriptorRole",
        "descriptorPin", "descriptorWelcome", "descriptorAvatar",
        "descriptorLogout", "studentId", "program"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;

        header.name = USER_REGISTERED_EVENT;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.user_descriptor = {};
        payload.user_descriptor.external_id = params.descriptorExternalId;
        payload.user_descriptor.name = params.descriptorName;
        payload.user_descriptor.role = params.descriptorRole;
        payload.user_descriptor.pin = params.descriptorPin;
        payload.user_descriptor.welcome_message = params.descriptorWelcome;
        payload.user_descriptor.logout_url = params.descriptorLogout;
        payload.user_descriptor.avatar_url = params.descriptorAvatar;
        payload.user_descriptor.metadata = {};
        payload.user_descriptor.metadata.student_id = params.studentId;
        payload.user_descriptor.metadata.program = params.program;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.userJoinRequestToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "token", "correlationId", "channelsReply"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;

        header.reply={};
        header.reply.to = params.channelsReply;
        header.reply.correlation_id = params.correlationId;

        header.name = USER_JOIN_REQUEST;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;
        payload.token=params.token;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.userJoinResponseToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "correlationId", "success", "message",
        "descriptorName", "descriptorExternalId", "descriptorRole",
        "descriptorPin", "descriptorWelcome", "descriptorLogout",
        "descriptorAvatar", "studentId", "program"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;
        header.destination.correlation_id = params.correlationId;

        header.name = USER_JOIN_RESPONSE;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.result = {};
        payload.result.success = true;
        payload.result.message = "Success";

        payload.user_descriptor = {};
        payload.user_descriptor.external_id = params.descriptorExternalId;
        payload.user_descriptor.name = params.descriptorName;
        payload.user_descriptor.role = params.descriptorRole;
        payload.user_descriptor.pin = params.descriptorPin;
        payload.user_descriptor.welcome_message = params.descriptorWelcome;
        payload.user_descriptor.logout_url = params.descriptorLogout;
        payload.user_descriptor.avatar_url = params.descriptorAvatar;
        payload.user_descriptor.metadata = {};
        payload.user_descriptor.metadata.student_id = params.studentId;
        payload.user_descriptor.metadata.program = params.program;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.userJoinedEventToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "studentId", "program", "userId", "userExternalId",
        "userName", "role", "pin", "welcome", "logoutUrl", "avatarUrl",
        "isPresenter", "handRaised", "muted", "locked", "talking",
        "callerName", "callerNumber", "mediaStreams"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;

        header.name = USER_JOINED_EVENT;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.user = {};
        payload.user.id =params.userId; 
        payload.user.external_id = params.userExternalId;
        payload.user.name = params.userName;
        payload.user.role = params.role;
        payload.user.pin = params.pin;
        payload.user.welcome_message=params.welcome; 
        payload.user.logout_url = params.logoutUrl;
        payload.user.avatar_url = params.avatarUrl;
        payload.user.is_presenter = params.isPresenter;
        payload.user.status = {};
        payload.user.status.hand_raised = params.handRaised;
        payload.user.status.muted = params.muted;
        payload.user.status.locked = params.locked;
        payload.user.status.talking = params.talking;
        payload.user.caller_id = {};
        payload.user.caller_id.name =params.callerName;
        payload.user.caller_id.number = params.callerNumber;

        payload.user.media_streams = params.mediaStreams;

        payload.user.metadata = {};
        payload.user.metadata.student_id = params.studentId;
        payload.user.metadata.program = params.program;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.userLeaveEventToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "userId", "userName"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;

        header.name = USER_LEAVE_EVENT;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.user = {};
        payload.user.id =params.userId; 
        payload.user.name = params.userName;
        
        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.userLeftEventToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "userId", "userName"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;

        header.name = USER_LEFT_EVENT;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.user = {};
        payload.user.id =params.userId; 
        payload.user.name = params.userName;
        
        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.getUsersRequestToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "userId", "userName", "channelsReply", "correlationId",
        "requesterId", "requesterName"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;


 header.reply = {};
        header.reply.to = params.channelsReply;
        header.reply.correlation_id = params.correlationId;

        header.name = GET_USERS_REQUEST;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.user = {};
        payload.user.id =params.userId; 
        payload.user.name = params.userName;

 payload.requester = {}; 
        payload.requester.id = params.requesterId;
        payload.requester.name =params.requesterName;

        
        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.getUsersResponseToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "listUsers"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;

        header.name = GET_USERS_RESPONSE;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.users=params.listUsers;

        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.raiseUserHandRequestToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "requesterId", "requesterName", "raise"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;

        header.name = RAISE_USER_HAND_REQUEST;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.requester = {}; 
        payload.requester.id = params.requesterId;
        payload.requester.name =params.requesterName;

        payload.raise = params.raise;
        
        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}

module.exports.userRaisedHandEventToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "requesterId", "requesterName", "raise"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;

        header.name = USER_RAISED_HAND_EVENT;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.requester = {}; 
        payload.requester.id = params.requesterId;
        payload.requester.name =params.requesterName;

        payload.raise = params.raise;
        
        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}





module.exports.assignedPresenterRequestToJson = function (params, onSuccess, onFailure) {

    // TODO: Check for required params
    var errors = new Array();
    var requiredParams = [
        "channelsDestination", "source", "meetingName", "meetingId",
        "sessionId", "presenterId", "presenterName",
        "assignedById", "assignedByName"
    ];

    //TODO -try to take this for loop out of the function
    for (var key in requiredParams) {
        if (!paramExist(params[requiredParams[key]])) {
            var error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\"";
            console.log(error_msg);
            errors.push(error_msg);
        }
    }

    if (errors.length > 0) {
        onFailure(errors);

    } else {
        header = {};
        header.destination = {};
        header.destination.to = params.channelsDestination;

        header.name = ASSIGN_PRESENTER_REQUEST;
        header.timestamp = "2013-12-23T08:50Z"; //TODO
        header.source = params.source;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = params.meetingName;
        payload.meeting.id = params.meetingId;
        payload.session = params.sessionId;

        payload.presenter = {}; 
        payload.presenter.id = params.presenterId;
        payload.presenter.name =params.presenterName;

        payload.assigned_by = {}; 
        payload.assigned_by.id = params.assignedById;
        payload.assigned_by.name =params.assignedByName;
        
        message = {};
        message.header = header;
        message.payload = payload;

        onSuccess(JSON.stringify(message));
    }
}




















module.exports.returnJsonOf = function (event_type, meetingName, meetingID, sessionID) {
    switch (event_type) {


    case "presenter_assigned_event":
        var event_name = "presenter_assigned_event";
        var source_of_event = "web-api";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.presenter = {};
        payload.presenter.id = "user1";
        payload.presenter.name = "Guga";

        payload.assigned_by = {};
        payload.assigned_by.id = "user2";
        payload.assigned_by.name = "Juan";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "mute_user_request":
        var event_name = "mute_user_request";
        var source_of_event = "web-api";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.user = {};
        payload.user.id = "user1";
        payload.user.name = "Guga";

        payload.requester = {};
        payload.requester.id = "user2";
        payload.requester.name = "Juan";

        payload.mute = true; //TODO maybe this should be "muteD"?!!!

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "mute_user_request_event":
        var event_name = "mute_user_request_event";
        var source_of_event = "web-api";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.user = {};
        payload.user.id = "user1";
        payload.user.name = "Guga";

        payload.requester = {};
        payload.requester.id = "user2";
        payload.requester.name = "Juan";

        payload.mute = true; //TODO maybe this should be "muteD"?!!!

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "mute_voice_user_request":
        var event_name = "mute_voice_user_request";
        var source_of_event = "web-api";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.mute = true; //TODO when is it mute and when muteD??!??!?!?!?

        payload.user_metadata = {};
        payload.user_metadata.id = "user1";
        payload.user_metadata.name = "Guga";

        payload.voice_metadata = {};
        payload.voice_metadata.FreeSWITCH_IPv4 = "192.168.0.166"; //// had to change - to _
        payload.voice_metadata.Conference_Name = "72382"; //// had to change - to _
        payload.voice_metadata.Conference_Unique_ID = "480d3f7c-224f-11e0-ae04-fbe97e271da0"; //// had to change - to _
        payload.voice_metadata.conference_member_id = "1";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "voice_user_muted_event":
        var event_name = "voice_user_muted_event";
        var source_of_event = "fs-esl";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.muted = true;

        payload.user_metadata = {};
        payload.user_metadata.id = "user1";
        payload.user_metadata.name = "Guga";

        payload.voice_metadata = {};
        payload.voice_metadata.FreeSWITCH_IPv4 = "192.168.0.166"; //// had to change - to _
        payload.voice_metadata.Conference_Name = "72382"; //// had to change - to _
        payload.voice_metadata.Conference_Unique_ID = "480d3f7c-224f-11e0-ae04-fbe97e271da0"; //// had to change - to _
        payload.voice_metadata.conference_member_id = "1";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;

    case "user_muted_event":
        var event_name = "user_muted_event";
        var source_of_event = "fs-esl";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.muted = true;

        payload.user = {};
        payload.user.id = "user1";
        payload.user.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "user_publish_stream_request":
        var event_name = "user_publish_stream_request";
        var source_of_event = "fs-esl";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.reply = {};
        header.reply.to = "apps_channel";
        header.reply.correlation_id = "abc";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.media = {};
        payload.media.media_type = "video";
        payload.media.metadata = {};
        payload.media.metadata.foo = "bar";

        payload.user = {};
        payload.user.id = "user1";
        payload.user.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "publish_stream_request":
        var event_name = "publish_stream_request";
        var source_of_event = "fs-esl";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.reply = {};
        header.reply.to = "apps_channel";
        header.reply.correlation_id = "abc";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.media = {};
        payload.media.media_type = "video";
        payload.media.metadata = {};
        payload.media.metadata.foo = "bar";

        payload.user = {};
        payload.user.id = "user1";
        payload.user.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "publish_stream_response":
        var event_name = "publish_stream_response";
        var source_of_event = "bbb-api";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";
        header.destination.correlation_id = "abc";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.media = {};
        payload.media.media_type = "video";
        payload.media.uri = "http://cdn.bigbluebutton.org/stream/v1234";
        payload.media.metadata = {};
        payload.media.metadata.foo = "bar";

        payload.user = {};
        payload.user.id = "user1";
        payload.user.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "user_publish_stream_response":
        var event_name = "user_publish_stream_response";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";
        header.destination.correlation_id = "abc";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.media = {};
        payload.media.media_type = "video";
        payload.media.uri = "http://cdn.bigbluebutton.org/stream/v1234";
        payload.media.metadata = {};
        payload.media.metadata.foo = "bar";

        payload.user = {};
        payload.user.id = "user1";
        payload.user.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "published_stream_event":
        var event_name = "published_stream_event";
        var source_of_event = "media-server";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.media = {};
        payload.media.media_type = "video";
        payload.media.uri = "http://cdn.bigbluebutton.org/stream/v1234";
        payload.media.metadata = {};
        payload.media.metadata.foo = "bar";

        payload.user = {};
        payload.user.id = "user1";
        payload.user.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "user_published_stream_event":
        var event_name = "user_published_stream_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.media = {};
        payload.media.media_type = "video";
        payload.media.uri = "http://cdn.bigbluebutton.org/stream/v1234";
        payload.media.metadata = {};
        payload.media.metadata.foo = "bar";

        payload.user = {};
        payload.user.id = "user1";
        payload.user.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;

    case "unpublished_stream_event":
        var event_name = "unpublished_stream_event";
        var source_of_event = "media-server";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.media = {};
        payload.media.media_type = "video";
        payload.media.uri = "http://cdn.bigbluebutton.org/stream/v1234";
        payload.media.metadata = {};
        payload.media.metadata.foo = "bar";

        payload.user = {};
        payload.user.id = "user1";
        payload.user.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "user_unpublished_stream_event":
        var event_name = "user_unpublished_stream_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.media = {};
        payload.media.media_type = "video";
        payload.media.uri = "http://cdn.bigbluebutton.org/stream/v1234";
        payload.media.metadata = {};
        payload.media.metadata.foo = "bar";

        payload.user = {};
        payload.user.id = "user1";
        payload.user.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "public_chat_message_event":
        var event_name = "public_chat_message_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {}; //TODO shouldn't there be a meeting=session section here?!?!?!

        //payload.meeting = {};
        //payload.meeting.name = meetingName;
        //payload.meeting.id = meetingID;
        //payload.session = sessionID;


        payload.chat_message = {};
        payload.chat_message.correlation_id = "user1-msg1";
        payload.chat_message.timestamp = "2013-12-23T08:50Z";
        payload.chat_message.from = {};
        payload.chat_message.from.id = "user1";
        payload.chat_message.from.name = "Richard";

        payload.chat_message.message = {};
        payload.chat_message.message.text = "Hello world!";
        payload.chat_message.message.lang = "en_US";

        payload.chat_message.font = {};
        payload.chat_message.font.color = 16711680;
        payload.chat_message.font.size = 14;
        payload.chat_message.font.font_type = "Arial";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "broadcast_public_chat_message_event":
        var event_name = "broadcast_public_chat_message_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {}; //TODO shouldn't there be a meeting=session section here?!?!?!

        //payload.meeting = {};
        //payload.meeting.name = meetingName;
        //payload.meeting.id = meetingID;
        //payload.session = sessionID;

        payload.chat_message = {};
        payload.chat_message.id = "msg1234";
        payload.chat_message.server_timestamp = "2013-12-23T08:50Z";
        payload.chat_message.correlation_id = "user1-msg1";
        payload.chat_message.user_timestamp = "2013-12-23T08:50Z";
        payload.chat_message.from = {};
        payload.chat_message.from.id = "user1";
        payload.chat_message.from.name = "Richard";

        payload.chat_message.message = {};
        payload.chat_message.message.text = "Hello world!";
        payload.chat_message.message.lang = "en_US";

        payload.chat_message.font = {};
        payload.chat_message.font.color = 16711680;
        payload.chat_message.font.size = 14;
        payload.chat_message.font.font_type = "Arial";

        payload.chat_message.translations = [];

        var a = {};
        a.lang = "es_LA";
        a.text = "Hola Mundo!";
        payload.chat_message.translations[0] = a;

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "private_chat_message_event":
        var event_name = "private_chat_message_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {}; //TODO shouldn't there be a meeting=session section here?!?!?!

        //payload.meeting = {};
        //payload.meeting.name = meetingName;
        //payload.meeting.id = meetingID;
        //payload.session = sessionID;

        payload.chat_message = {};
        payload.chat_message.correlation_id = "user1-msg1";
        payload.chat_message.timestamp = "2013-12-23T08:50Z";
        payload.chat_message.from = {};
        payload.chat_message.from.id = "user1";
        payload.chat_message.from.name = "Richard";

        payload.chat_message.to = {};
        payload.chat_message.to.id = "user2";
        payload.chat_message.to.name = "Guga";

        payload.chat_message.message = {};
        payload.chat_message.message.text = "Hello world!";
        payload.chat_message.message.lang = "en_US";

        payload.chat_message.font = {};
        payload.chat_message.font.color = 16711680;
        payload.chat_message.font.size = 14;
        payload.chat_message.font.font_type = "Arial";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "broadcast_private_chat_message_event":
        var event_name = "broadcast_private_chat_message_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {}; //TODO shouldn't there be a meeting=session section here?!?!?!

        //payload.meeting = {};
        //payload.meeting.name = meetingName;
        //payload.meeting.id = meetingID;
        //payload.session = sessionID;

        payload.chat_message = {};
        payload.chat_message.id = "msg1234";
        payload.chat_message.server_timestamp = "2013-12-23T08:50Z";
        payload.chat_message.correlation_id = "user1-msg1";
        payload.chat_message.user_timestamp = "2013-12-23T08:50Z";
        payload.chat_message.from = {};
        payload.chat_message.from.id = "user1";
        payload.chat_message.from.name = "Richard";

        payload.chat_message.message = {};
        payload.chat_message.message.text = "Hello world!";
        payload.chat_message.message.lang = "en_US";

        payload.chat_message.font = {};
        payload.chat_message.font.color = 16711680;
        payload.chat_message.font.size = 14;
        payload.chat_message.font.font_type = "Arial";

        payload.chat_message.translations = [];

        var a = {};
        a.lang = "es_LA";
        a.text = "Hola Mundo!";
        payload.chat_message.translations[0] = a;

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "broadcast_whiteboard_draw_event":

        var event_name = "broadcast_whiteboard_draw_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";
        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {}; //TODO these were not in the original json from the scala page
        payload.meeting.name = meetingName; //TODO these were not in the original json from the scala page
        payload.meeting.id = meetingID; //TODO these were not in the original json from the scala page
        payload.session = sessionID; //TODO these were not in the original json from the scala page

        payload.whiteboard_id = "presentation_id/page_num";
        payload.shape_id = "q779ogycfmxk-13-1383262166102";
        payload.shape_type = "text";

        payload.timestamp = "2013-12-23T08:50Z"; //TODO why do we need a second timestamp?! we have one in header.timestamp
        payload.zorder = 100;

        payload.data = {};
        payload.data.coordinate = {};
        payload.data.coordinate.first_x = 0.016025641025641028;
        payload.data.coordinate.first_y = 0.982905982905983;
        payload.data.coordinate.last_x = 2.33;
        payload.data.coordinate.last_y = 3.45;

        payload.data.font = {};
        payload.data.font.style = "Arial";
        payload.data.font.color = 0;
        payload.data.font.size = 18;

        payload.data.background = {};
        payload.data.background.visible = true;
        payload.data.background.color = 16777215;
        payload.data.background.alpha = 0;

        payload.data.text = "He";

        payload.by = {};
        payload.by.id = "user1";
        payload.by.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);

        break;
    case "broadcast_whiteboard_update_event":

        var event_name = "broadcast_whiteboard_update_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";
        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {}; //TODO these were not in the original json from the scala page
        payload.meeting.name = meetingName; //TODO these were not in the original json from the scala page
        payload.meeting.id = meetingID; //TODO these were not in the original json from the scala page
        payload.session = sessionID; //TODO these were not in the original json from the scala page

        payload.whiteboard_id = "presentation_id/page_num";
        payload.shape_id = "q779ogycfmxk-13-1383262166102";
        payload.shape_type = "text";

        payload.timestamp = "2013-12-23T08:50Z"; //TODO why do we need a second timestamp?! we have one in header.timestamp
        payload.zorder = 100;

        payload.data = {};
        payload.data.coordinate = {};
        payload.data.coordinate.first_x = 0.016025641025641028;
        payload.data.coordinate.first_y = 0.982905982905983;
        payload.data.coordinate.last_x = 2.33;
        payload.data.coordinate.last_y = 3.45;

        payload.data.font = {};
        payload.data.font.style = "Arial";
        payload.data.font.color = 0;
        payload.data.font.size = 18;

        payload.data.background = {};
        payload.data.background.visible = true;
        payload.data.background.color = 16777215;
        payload.data.background.alpha = 0;

        payload.data.text = "He";

        payload.by = {};
        payload.by.id = "user1";
        payload.by.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);

        break;
    case "whiteboard_cursor_event":

        var event_name = "whiteboard_cursor_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {}; //TODO these were not in the original json from the scala page
        payload.meeting.name = meetingName; //TODO these were not in the original json from the scala page
        payload.meeting.id = meetingID; //TODO these were not in the original json from the scala page
        payload.session = sessionID; //TODO these were not in the original json from the scala page

        payload.whiteboard_id = "user1-shape-1";

        payload.cursor = {};
        payload.cursor.x = 0.54;
        payload.cursor.y = 0.98;

        payload.by = {};
        payload.by.id = "user1";
        payload.by.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);

        break;
    case "broadcast_whiteboard_cursor_event":

        var event_name = "broadcast_whiteboard_cursor_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {}; //TODO these were not in the original json from the scala page
        payload.meeting.name = meetingName; //TODO these were not in the original json from the scala page
        payload.meeting.id = meetingID; //TODO these were not in the original json from the scala page
        payload.session = sessionID; //TODO these were not in the original json from the scala page

        payload.whiteboard_id = "user1-shape-1";

        payload.cursor = {};
        payload.cursor.x = 0.54;
        payload.cursor.y = 0.98;

        payload.by = {};
        payload.by.id = "user1";
        payload.by.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);

        break;
    case "share_presentation_event":

        var event_name = "share_presentation_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {}; //TODO these were not in the original json from the scala page
        payload.meeting.name = meetingName; //TODO these were not in the original json from the scala page
        payload.meeting.id = meetingID; //TODO these were not in the original json from the scala page
        payload.session = sessionID; //TODO these were not in the original json from the scala page

        payload.presentation = {};
        payload.presentation.id = "pres-123";
        payload.presentation.name = "Flight School";

        payload.by = {};
        payload.by.id = "user1";
        payload.by.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);

        break;
    case "broadcast_share_presentation_event":

        var event_name = "broadcast_share_presentation_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {}; //TODO these were not in the original json from the scala page
        payload.meeting.name = meetingName; //TODO these were not in the original json from the scala page
        payload.meeting.id = meetingID; //TODO these were not in the original json from the scala page
        payload.session = sessionID; //TODO these were not in the original json from the scala page

        payload.presentation = {};
        payload.presentation.id = "pres-123";
        payload.presentation.name = "Flight School";

        payload.page = {};
        payload.page.id = "pres-123/1";
        payload.page.uri = "http://www.example.com/presentations/pres-123/1.swf";
        payload.page.position = {};
        payload.page.position.x_offset = 0;
        payload.page.position.y_offset = 0;
        payload.page.position.width_ratio = 100;
        payload.page.position.height_ratio = 100;

        payload.by = {};
        payload.by.id = "user1";
        payload.by.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);

        break;
    case "resize_and_move_page_presentation_event":

        var event_name = "resize_and_move_page_presentation_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {}; //TODO these were not in the original json from the scala page
        payload.meeting.name = meetingName; //TODO these were not in the original json from the scala page
        payload.meeting.id = meetingID; //TODO these were not in the original json from the scala page
        payload.session = sessionID; //TODO these were not in the original json from the scala page

        payload.presentation = {};
        payload.presentation.id = "pres-123";
        payload.presentation.name = "Flight School";

        payload.page = {};
        payload.page.id = "pres-123/1";
        payload.page.uri = "http://www.example.com/presentations/pres-123/1.swf";
        payload.page.position = {};
        payload.page.position.x_offset = 0;
        payload.page.position.y_offset = 0;
        payload.page.position.width_ratio = 100;
        payload.page.position.height_ratio = 100;

        payload.by = {};
        payload.by.id = "user1";
        payload.by.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);

        break;
    case "broadcast_resize_and_move_page_presentation_event":

        var event_name = "broadcast_resize_and_move_page_presentation_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {}; //TODO these were not in the original json from the scala page
        payload.meeting.name = meetingName; //TODO these were not in the original json from the scala page
        payload.meeting.id = meetingID; //TODO these were not in the original json from the scala page
        payload.session = sessionID; //TODO these were not in the original json from the scala page

        payload.presentation = {};
        payload.presentation.id = "pres-123";
        payload.presentation.name = "Flight School";

        payload.page = {};
        payload.page.id = "pres-123/1";
        payload.page.uri = "http://www.example.com/presentations/pres-123/1.swf";
        payload.page.position = {};
        payload.page.position.x_offset = 0;
        payload.page.position.y_offset = 0;
        payload.page.position.width_ratio = 100;
        payload.page.position.height_ratio = 100;

        payload.by = {};
        payload.by.id = "user1";
        payload.by.name = "Guga";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);

        break;

    default:
        //alert("could not match a value from event_selector");
        return -1;
    }
}





/*
//JSON to JavaScriptObject
function isValidJSON(message) {
    //I could use the regEx from https://github.com/douglascrockford/JSON-js/blob/master/json2.js : ~450
    //but for now will do the simple check
    try {        
        var tmp = JSON.parse(message);
    } catch (err) {
        return false;
    }
    return true;
}*/

module.exports.whiteboardDrawEvent_fromJSON = function(message, onSuccess, onFailure) {


/*   // if (message is NOT valid) 
    if(! isValidJSON(message))
    {
        onFailure(errors);
    } 
    else 
    {
        var msgObject = JSON.parse(message);
        onSuccess(msgObject);
    }*/

    try {        
        var msgObject = JSON.parse(message);
        onSuccess(msgObject);
    } catch (err) {
        onFailure(err);
    }

    

}