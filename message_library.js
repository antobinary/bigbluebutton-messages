//list of events to be selected from
module.exports.listEvents = {
    0: 'Please select an event type',
    1: 'whiteboard_draw_event',
    2: 'whiteboard_update_event',
    3: 'create_meeting_request',
    4: 'create_meeting_response',
    5: 'meeting_created_event',
    6: 'end_meeting_request',
    7: 'end_meeting_response',
    8: 'end_meeting_warning_event',
    9: 'meeting_ended_event',
    10: 'register_user_request',
    11: 'register_user_response',
    12: 'user_registered_event',
    13: 'user_join_request',
    14: 'user_join_response',
    15: 'user_joined_event',
    16: 'user_leave_event',
    17: 'user_left_event',
    18: 'get_users_request',
    19: 'get_users_response',
    20: 'raise_user_hand_request',
    21: 'user_raised_hand_event',
    22: 'assign_presenter_request',
    23: 'presenter_assigned_event',
    24: 'mute_user_request',
    25: 'mute_user_request_event',
    26: 'mute_voice_user_request',
    27: 'voice_user_muted_event',
    28: 'user_muted_event',
    29: 'user_publish_stream_request',
    30: 'publish_stream_request',
    31: 'publish_stream_response',
    32: 'user_publish_stream_response',
    33: 'published_stream_event',
    34: 'user_published_stream_event',
    35: 'unpublished_stream_event',
    36: 'user_unpublished_stream_event',
    37: 'public_chat_message_event',
    38: 'broadcast_public_chat_message_event',
    39: 'private_chat_message_event',
    40: 'broadcast_private_chat_message_event',
    41: 'broadcast_whiteboard_draw_event',
    42: 'broadcast_whiteboard_update_event',
    43: 'whiteboard_cursor_event',
    44: 'broadcast_whiteboard_cursor_event',
    45: 'share_presentation_event',
    46: 'broadcast_share_presentation_event',
    47: 'resize_and_move_page_presentation_event',
    48: 'broadcast_resize_and_move_page_presentation_event'
};

module.exports.returnJsonOf = function (event_type, meetingName, meetingID, sessionID) {
    switch (event_type) {
    case "whiteboard_draw_event":
        var event_name = "whiteboard_draw_event";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";
        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = "";
        payload = {};
        payload.meeting = {}; //TODO these were not in the original json from the scala page
        payload.meeting.name = meetingName; //TODO these were not in the original json from the scala page
        payload.meeting.id = meetingID; //TODO these were not in the original json from the scala page
        payload.session = sessionID; //TODO these were not in the original json from the scala page
        payload.whiteboard_id = "presentation_id/page_num";
        payload.shape_id = "";
        payload.shape_type = "rectangle";
        data = {};
        data.coordinate = {};
        data.coordinate.first_x = 0.016025641025641028;
        data.coordinate.first_y = 0.982905982905983;
        data.coordinate.last_x = 2.33;
        data.coordinate.last_y = 3.45;
        data.line = {};
        data.line.line_type = "solid";
        data.line.color = 0;
        data.weight = 18;
        payload.data = data;

        payload.by = {};
        payload.by.id = "";
        payload.by.name = "";
        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);

        break;
    case "whiteboard_update_event":
        var event_name = "whiteboard_update_event";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";
        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = "";
        payload = {};
        payload.meeting = {}; //TODO these were not in the original json from the scala page
        payload.meeting.name = meetingName; //TODO these were not in the original json from the scala page
        payload.meeting.id = meetingID; //TODO these were not in the original json from the scala page
        payload.session = sessionID; //TODO these were not in the original json from the scala page
        payload.whiteboard_id = "presentation_id/page_num";
        payload.shape_id = "";
        payload.shape_type = "rectangle";
        data = {};
        data.coordinate = {};
        data.coordinate.first_x = 0.016025641025641028;
        data.coordinate.first_y = 0.982905982905983;
        data.coordinate.last_x = 2.33;
        data.coordinate.last_y = 3.45;
        data.line = {};
        data.line.line_type = "solid";
        data.line.color = 0;
        data.weight = 18;
        payload.data = data;
        payload.by = {};
        payload.by.id = "";
        payload.by.name = "";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "create_meeting_request":

        var event_name = "create_meeting_request";
        var source_of_event = "web-api";

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
        payload.meeting_descriptor = {};
        payload.meeting_descriptor.name = "English 101";
        payload.meeting_descriptor.external_id = "english_101";
        payload.meeting_descriptor.record = true;
        payload.meeting_descriptor.welcome_message = "Welcome to English 101";
        payload.meeting_descriptor.logout_url = "http://www.bigbluebutton.org";
        payload.meeting_descriptor.avatar_url = "http://www.gravatar.com/bigbluebutton";
        payload.meeting_descriptor.max_users = 20;
        payload.meeting_descriptor.duration = {};
        payload.meeting_descriptor.duration.length_in_minutes = 120;
        payload.meeting_descriptor.duration.allow_extend = false;
        payload.meeting_descriptor.duration.max_minutes = 240;
        payload.meeting_descriptor.voice_conference = {};
        payload.meeting_descriptor.voice_conference.pin = 123456;
        payload.meeting_descriptor.voice_conference.number = 85115;
        payload.meeting_descriptor.phone_numbers = [];
        var a = {
            "number": "613-520-7600",
            "description": "Ottawa"
        };
        var b = {
            "number": "1-888-555-7890",
            "description": "NA Toll-Free"
        };
        payload.meeting_descriptor.phone_numbers[0] = a;
        payload.meeting_descriptor.phone_numbers[1] = b;

        payload.meeting_descriptor.metadata = {};
        payload.meeting_descriptor.metadata.customer_id = "acme-customer";
        payload.meeting_descriptor.metadata.customer_name = "ACME";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "create_meeting_response":
        var event_name = "create_meeting_response";
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

        payload.result = {};
        payload.result.success = true;
        payload.result.message = "Success";

        payload.meeting_descriptor = {};
        payload.meeting_descriptor.name = "English 101";
        payload.meeting_descriptor.external_id = "english_101";
        payload.meeting_descriptor.record = true;
        payload.meeting_descriptor.welcome_message = "Welcome to English 101";
        payload.meeting_descriptor.logout_url = "http://www.bigbluebutton.org";
        payload.meeting_descriptor.avatar_url = "http://www.gravatar.com/bigbluebutton";
        payload.meeting_descriptor.max_users = 20;
        payload.meeting_descriptor.duration = {};
        payload.meeting_descriptor.duration.length_in_minutes = 120;
        payload.meeting_descriptor.duration.allow_extend = false;
        payload.meeting_descriptor.duration.max_minutes = 240;
        payload.meeting_descriptor.voice_conference = {};
        payload.meeting_descriptor.voice_conference.pin = 123456;
        payload.meeting_descriptor.voice_conference.number = 85115;
        payload.meeting_descriptor.phone_numbers = [];
        var a = {
            "number": "613-520-7600",
            "description": "Ottawa"
        };
        var b = {
            "number": "1-888-555-7890",
            "description": "NA Toll-Free"
        };
        payload.meeting_descriptor.phone_numbers[0] = a;
        payload.meeting_descriptor.phone_numbers[1] = b;

        payload.meeting_descriptor.metadata = {};
        payload.meeting_descriptor.metadata.customer_id = "acme-customer";
        payload.meeting_descriptor.metadata.customer_name = "ACME";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "meeting_created_event":
        var event_name = "meeting_created_event";
        var source_of_event = "bbb-apps";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";
        //header.destination.correlation_id = "abc";
        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;

        payload.meeting_descriptor = {};
        payload.meeting_descriptor.name = "English 101";
        payload.meeting_descriptor.external_id = "english_101";
        payload.meeting_descriptor.record = true;
        payload.meeting_descriptor.welcome_message = "Welcome to English 101";
        payload.meeting_descriptor.logout_url = "http://www.bigbluebutton.org";
        payload.meeting_descriptor.avatar_url = "http://www.gravatar.com/bigbluebutton";
        payload.meeting_descriptor.max_users = 20;
        payload.meeting_descriptor.duration = {};
        payload.meeting_descriptor.duration.length_in_minutes = 120;
        payload.meeting_descriptor.duration.allow_extend = false;
        payload.meeting_descriptor.duration.max_minutes = 240;
        payload.meeting_descriptor.voice_conference = {};
        payload.meeting_descriptor.voice_conference.pin = 123456;
        payload.meeting_descriptor.voice_conference.number = 85115;
        payload.meeting_descriptor.phone_numbers = [];
        var a = {
            "number": "613-520-7600",
            "description": "Ottawa"
        };
        var b = {
            "number": "1-888-555-7890",
            "description": "NA Toll-Free"
        };
        payload.meeting_descriptor.phone_numbers[0] = a;
        payload.meeting_descriptor.phone_numbers[1] = b;

        payload.meeting_descriptor.metadata = {};
        payload.meeting_descriptor.metadata.customer_id = "acme-customer";
        payload.meeting_descriptor.metadata.customer_name = "ACME";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "end_meeting_request":
        var event_name = "end_meeting_request";
        var source_of_event = "bbb-web";

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

        payload.force = true;
        payload.warn_users = true;

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "end_meeting_response":
        var event_name = "end_meeting_response";
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

        payload.result = {};
        payload.result.success = true;
        payload.result.message = "Ending the meeting. Please wait several seconds to complete the request.";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "end_meeting_warning_event":
        var event_name = "end_meeting_warning_event";
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

        payload.time_left = 30;
        payload.time_unit = "seconds";
        payload.allow_extend = false;

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "meeting_ended_event":
        var event_name = "meeting_ended_event";
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

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "register_user_request":
        var event_name = "register_user_request";
        var source_of_event = "bbb-web";

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

        payload.user_descriptor = {};
        payload.user_descriptor.external_id = "user1";
        payload.user_descriptor.name = "Guga";
        payload.user_descriptor.role = "MODERATOR";
        payload.user_descriptor.pin = 12345;
        payload.user_descriptor.welcome_message = "Welcome to English 101";
        payload.user_descriptor.logout_url = "http://www.example.com";
        payload.user_descriptor.avatar_url = "http://www.example.com/avatar.png";
        payload.user_descriptor.metadata = {};
        payload.user_descriptor.metadata.student_id = "54321";
        payload.user_descriptor.metadata.program = "engineering";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "register_user_response":
        var event_name = "register_user_response";
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

        payload.user_token = "guga-token";
        payload.result = {};
        payload.result.success = true;
        payload.result.message = "Success";

        payload.user_descriptor = {};
        payload.user_descriptor.external_id = "user1";
        payload.user_descriptor.name = "Guga";
        payload.user_descriptor.role = "MODERATOR";
        payload.user_descriptor.pin = 12345;
        payload.user_descriptor.welcome_message = "Welcome to English 101";
        payload.user_descriptor.logout_url = "http://www.example.com";
        payload.user_descriptor.avatar_url = "http://www.example.com/avatar.png";
        payload.user_descriptor.metadata = {};
        payload.user_descriptor.metadata.student_id = "54321";
        payload.user_descriptor.metadata.program = "engineering";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "user_registered_event":
        var event_name = "user_registered_event";
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

        payload.user_descriptor = {};
        payload.user_descriptor.external_id = "user1";
        payload.user_descriptor.name = "Guga";
        payload.user_descriptor.role = "MODERATOR";
        payload.user_descriptor.pin = 12345;
        payload.user_descriptor.welcome_message = "Welcome to English 101";
        payload.user_descriptor.logout_url = "http://www.example.com";
        payload.user_descriptor.avatar_url = "http://www.example.com/avatar.png";
        payload.user_descriptor.metadata = {};
        payload.user_descriptor.metadata.student_id = "54321";
        payload.user_descriptor.metadata.program = "engineering";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "user_join_request":
        var event_name = "user_join_request";
        var source_of_event = "bbb-apps";

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
        payload.token = "user1-token-1";

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "user_join_response":
        var event_name = "user_join_response";
        var source_of_event = "web-api";

        header = {};
        header.destination = {};
        header.destination.to = "apps_channel";
        header.destination.correlation_id = "abc-corelid";

        header.name = event_name;
        header.timestamp = "2013-12-23T08:50Z";
        header.source = source_of_event;

        payload = {};
        payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;
        payload.result = {};
        payload.result.success = true;
        payload.result.message = "Success";

        payload.user = {}; //?!?! TODO shouldn't this be user_descriptor?!?!?!
        payload.user.id = "juan-user1";
        payload.user.external_id = "user1";
        payload.user.name = "Juan Tamad"; //?!?! TODO shouldn't this be user_descriptor?!?!?!
        payload.user.role = "MODERATOR";
        payload.user.pin = 12345;
        payload.user.welcome_message = "Welcome Juan"; //?!?! TODO shouldn't this be user_descriptor?!?!?!
        payload.user.logout_url = "http://www.example.com";
        payload.user.avatar_url = "http://www.example.com/avatar.png";
        payload.user.metadata = {}; //?!?! TODO shouldn't this be user_descriptor?!?!?!
        payload.user.metadata.student_id = "54321";
        payload.user.metadata.program = "engineering"; //?!?! TODO shouldn't this be user_descriptor?!?!?!

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "user_joined_event":
        var event_name = "user_joined_event";
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

        payload.user = {}; //?!?! TODO shouldn't this be user_descriptor?!?!?!
        payload.user.id = "juanid";
        payload.user.external_id = "userjuan";
        payload.user.name = "Juan Tamad"; //?!?! TODO shouldn't this be user_descriptor?!?!?!
        payload.user.role = "MODERATOR";
        payload.user.pin = 12345;
        payload.user.welcome_message = "Welcome to English 101"; //?!?! TODO shouldn't this be user_descriptor?!?!?!
        payload.user.logout_url = "http://www.example.com";
        payload.user.avatar_url = "http://www.example.com/avatar.png";
        payload.user.is_presenter = true;
        payload.user.status = {};
        payload.user.status.hand_raised = false;
        payload.user.status.muted = false;
        payload.user.status.locked = false;
        payload.user.status.talking = false;
        payload.user.caller_id = {};
        payload.user.caller_id.name = "Juan Tamad";
        payload.user.caller_id.number = "011-63-917-555-1234";

        payload.user.media_streams = [];

        var a = {};
        a.media_type = "audio";
        a.uri = "http://cdn.bigbluebutton.org/stream/a1234";
        a.metadata = {}
        a.metadata.foo = "bar";

        var b = {};
        b.media_type = "video";
        b.uri = "http://cdn.bigbluebutton.org/stream/v1234";
        b.metadata = {}
        b.metadata.foo = "bar";

        var c = {};
        c.media_type = "screen";
        c.uri = "http://cdn.bigbluebutton.org/stream/s1234";
        c.metadata = {}
        c.metadata.foo = "bar";

        payload.user.media_streams[0] = a;
        payload.user.media_streams[1] = b;
        payload.user.media_streams[2] = c;

        payload.user.metadata = {}; //?!?! TODO shouldn't this be user_descriptor?!?!?!
        payload.user.metadata.student_id = "54321";
        payload.user.metadata.program = "engineering"; //?!?! TODO shouldn't this be user_descriptor?!?!?!

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;

    case "user_leave_event":
        var event_name = "user_leave_event";
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

        payload.user = {}; //?!?! TODO shouldn't this be user_descriptor?!?!?!
        payload.user.id = "juanid";
        payload.user.name = "Juan Tamad"; //?!?! TODO shouldn't this be user_descriptor?!?!?!

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "user_left_event":
        var event_name = "user_left_event";
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

        payload.user = {}; //?!?! TODO shouldn't this be user_descriptor?!?!?!
        payload.user.id = "juanid";
        payload.user.name = "Juan Tamad"; //?!?! TODO shouldn't this be user_descriptor?!?!?!

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "get_users_request":
        var event_name = "get_users_request";
        var source_of_event = "bbb-web";

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

        payload.requester = {}; //?!?! TODO shouldn't this be user_descriptor?!?!?!
        payload.requester.id = "juanid";
        payload.requester.name = "Juan Tamad"; //?!?! TODO shouldn't this be user_descriptor?!?!?!

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "get_users_response":
        var event_name = "get_users_response";
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

        payload.users = [];

        var a = {};
        a.id = "juanid";
        a.external_id = "userjuan";
        a.name = "Juan Tamad";
        a.role = "MODERATOR";
        a.pin = 12345;
        a.welcome_message = "Welcome Juan";
        a.logout_url = "http://www.example.com";
        a.avatar_url = "http://www.example.com/avatar.png";
        a.is_presenter = true;
        a.status = {};
        a.status.hand_raised = false;
        a.status.muted = false;
        a.status.locked = false;
        a.status.talking = false;
        a.caller_id = {};
        a.caller_id.name = "Juan Tamad";
        a.caller_id.number = "011-63-917-555-1234";

        a.media_streams = [];

        var one = {};
        one.media_type = "audio";
        one.uri = "http://cdn.bigbluebutton.org/stream/a1234";
        one.metadata = {};
        one.metadata.foo = "bar";

        var two = {};
        two.media_type = "video";
        two.uri = "http://cdn.bigbluebutton.org/stream/v1234";
        two.metadata = {};
        two.metadata.foo = "bar";

        var three = {};
        three.media_type = "screen";
        three.uri = "http://cdn.bigbluebutton.org/stream/s1234";
        three.metadata = {};
        three.metadata.foo = "bar";

        a.media_streams[0] = one;
        a.media_streams[1] = two;
        a.media_streams[2] = three;

        a.metadata = {};
        a.metadata.student_id = "54321";
        a.metadata.program = "engineering";

        payload.users[0] = a;

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "raise_user_hand_request":
        var event_name = "raise_user_hand_request";
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

        payload.requester = {};
        payload.requester.id = "juanid";
        payload.requester.name = "Juan Tamad";

        payload.raise = true;

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;

    case "user_raised_hand_event":
        var event_name = "user_raised_hand_event";
        var source_of_event = "web-api"; //TODO -perhaps this or the previous event has the wrong source

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

        payload.requester = {};
        payload.requester.id = "juanid";
        payload.requester.name = "Juan Tamad";

        payload.raise = true;

        temp = {};
        temp.header = header;
        temp.payload = payload;

        return JSON.stringify(temp);
        break;
    case "assign_presenter_request":
        var event_name = "assign_presenter_request";
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

        /*payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;*/


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

        /*payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;*/

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

        /*payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;*/

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

        /*payload.meeting = {};
        payload.meeting.name = meetingName;
        payload.meeting.id = meetingID;
        payload.session = sessionID;*/

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
        //could not match a value from event_selector
        return -1;
    }
}