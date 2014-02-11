//TODO 
//--create some sort of heirarchy for the tests and for the library
var library = require("../message_library");

var extras = require("node-assert-extras");
/*

UNIT TESTS

--documentation
--turn the sample function into a Setup.
     Perhaps implement tearDown as well
--improve naming convention



for each event_type
 --valid date in timestamp
 -- isNumber vs isNotNAN


*/

function sampleWhiteBoardDrawEvent() {
    var params = {};
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.channels = "someChannels";
    params.source = "someSource";
    params.meetingName = "someMeetingName";
    params.whiteboardId = "someWhiteBoardId";
    params.shapeId = "someShapeId";
    params.shapeType = "someShapeType";
    params.firstX = 0.5;
    params.firstY = 0.5;
    params.lastX = 0.5;
    params.lastY = 0.5;
    params.lineColor = 0;
    params.lineWeight = 18;
    params.lineType = "solid"; //TODO choose between "solid", ...
    params.byId = "someById";
    params.byName = "someByName";
    params.background_visible = true;
    params.background_color = 0;
    params.background_alpha = 1;
    params.square = false;

    return params;
}

function sampleWhiteBoardUpdateEvent() {
    var params = {};
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.channels = "someChannels";
    params.source = "someSource";
    params.meetingName = "someMeetingName";
    params.whiteboardId = "someWhiteBoardId";
    params.shapeId = "someShapeId";
    params.shapeType = "someShapeType";
    params.firstX = 0.5;
    params.firstY = 0.5;
    params.lastX = 0.5;
    params.lastY = 0.5;
    params.lineColor = 0;
    params.lineWeight = 18;
    params.lineType = "solid"; //TODO choose between "solid", ...
    params.byId = "someById";
    params.byName = "someByName";
    params.background_visible = true;
    params.background_color = 0;
    params.background_alpha = 1;
    params.square = false;

    return params;
}

function sampleCreateMeetingRequestEvent() {
    var params = {};

    params.channelsDestination = "someDesChannel";
    params.channelsReply = "someReplyChannel";
    params.correlationId = "someId";
    /*params.name
    params.timestamp*/
    params.source = "someSource";

    params.descriptorName = "English 101";
    params.descriptorExternalId = "english_101";
    params.descriptorRecord = true;
    params.descriptorWelcome = "Welcome to English 101";
    params.descriptorLogout = "http://www.bigbluebutton.org";
    params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton";
    params.descriptorMaxUsers = 20;
    params.durationLength = 120;
    params.durationAllowExtend = false;
    params.durationMaxMinutes = 240;
    params.voiceConfPin = 123456;
    params.voiceConfNumber = 85115;

    //TODO how to make the array things?!
    params.phoneNumbers = [];
    var a = {
        "number": "613-520-7600",
        "description": "Ottawa"
    };
    var b = {
        "number": "1-888-555-7890",
        "description": "NA Toll-Free"
    };
    params.phoneNumbers[0] = a;
    params.phoneNumbers[1] = b;

    params.metadataCustomerId = "acme-customer";
    params.metadataCustomerName = "ACME";

    return params;
}

exports.testWhiteboardDraw = function (test) {
    var event_type = library.WHITEBOARD_DRAW_EVENT;
    var params = sampleWhiteBoardDrawEvent();

    var testingJson;
    library.whiteboardDrawEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
            test.done();
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO must check if it's a real date
    extras.isString(testValue.header.source);
    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);
    extras.isString(testValue.payload.whiteboard_id);
    extras.isString(testValue.payload.shape_id);
    extras.isString(testValue.payload.shape_type);
    extras.isNumber(testValue.payload.data.coordinate.first_x); //TODO or isNotNaN ?!?!?!
    extras.isNumber(testValue.payload.data.coordinate.first_y); //TODO or isNotNaN ?!?!?!
    extras.isNumber(testValue.payload.data.coordinate.last_x); //TODO or isNotNaN ?!?!?!
    extras.isNumber(testValue.payload.data.coordinate.last_y); //TODO or isNotNaN ?!?!?!
    extras.isString(testValue.payload.data.line.line_type);
    extras.isNumber(testValue.payload.data.line.color);
    extras.isNumber(testValue.payload.data.weight);
    extras.isString(testValue.payload.by.id);
    extras.isString(testValue.payload.by.name);
    extras.isBoolean(testValue.payload.data.background.visible);
    extras.isNumber(testValue.payload.data.background.color);
    extras.isNumber(testValue.payload.data.background.alpha);
    extras.isBoolean(testValue.payload.data.square);

    test.done();
}

exports.testWhiteboardUpdate = function (test) {
    var event_type = library.WHITEBOARD_UPDATE_EVENT;
    var params = sampleWhiteBoardUpdateEvent();

    var testingJson;
    library.whiteboardUpdateEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
            test.done();
        });

    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO must check if it's a real date
    extras.isString(testValue.header.source);
    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);
    extras.isString(testValue.payload.whiteboard_id);
    extras.isString(testValue.payload.shape_id);
    extras.isString(testValue.payload.shape_type);
    extras.isNumber(testValue.payload.data.coordinate.first_x); //TODO or isNotNaN ?!?!?!
    extras.isNumber(testValue.payload.data.coordinate.first_y); //TODO or isNotNaN ?!?!?!
    extras.isNumber(testValue.payload.data.coordinate.last_x); //TODO or isNotNaN ?!?!?!
    extras.isNumber(testValue.payload.data.coordinate.last_y); //TODO or isNotNaN ?!?!?!
    extras.isString(testValue.payload.data.line.line_type);
    extras.isNumber(testValue.payload.data.line.color);
    extras.isNumber(testValue.payload.data.weight);
    extras.isString(testValue.payload.by.id);
    extras.isString(testValue.payload.by.name);
    extras.isBoolean(testValue.payload.data.background.visible);
    extras.isNumber(testValue.payload.data.background.color);
    extras.isNumber(testValue.payload.data.background.alpha);
    extras.isBoolean(testValue.payload.data.square);

    test.done();
}

exports.testCreateMeetingRequest = function (test) {
    var event_type = library.CREATE_MEETING_REQUEST;
    var params = sampleCreateMeetingRequestEvent();

    var testingJson;
    library.createMeetingRequestToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
            test.done();
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
        test.done();
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.reply.to);
    extras.isString(testValue.header.reply.correlation_id);
    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);
    extras.isString(testValue.payload.meeting_descriptor.name);
    extras.isString(testValue.payload.meeting_descriptor.external_id);
    extras.isBoolean(testValue.payload.meeting_descriptor.record);
    extras.isString(testValue.payload.meeting_descriptor.welcome_message);
    extras.isString(testValue.payload.meeting_descriptor.logout_url);
    extras.isString(testValue.payload.meeting_descriptor.avatar_url);
    extras.isNumber(testValue.payload.meeting_descriptor.max_users);
    extras.isNumber(testValue.payload.meeting_descriptor.duration.length_in_minutes);
    extras.isBoolean(testValue.payload.meeting_descriptor.duration.allow_extend);
    extras.isNumber(testValue.payload.meeting_descriptor.duration.max_minutes);

    extras.isNumber(testValue.payload.meeting_descriptor.voice_conference.pin);
    extras.isNumber(testValue.payload.meeting_descriptor.voice_conference.number);
    
    //Phone_numbers testing
    var isArray = testValue.payload.meeting_descriptor.phone_numbers.constructor.toString().indexOf("Array");

    test.notEqual(-1, isArray, "\"phone_numbers\" does not look like an array");

    if (isArray) {
        var contacts = testValue.payload.meeting_descriptor.phone_numbers;
        for (index in contacts) {
            var aContact = contacts[index];

            extras.isNotUndefined(aContact.number);
            extras.isNotNull(aContact.number);
            test.notEqual("", aContact.number);
            extras.isString(aContact.number);

            extras.isNotUndefined(aContact.description);
            extras.isNotNull(aContact.description);
            test.notEqual("", aContact.description);
            extras.isString(aContact.description);
        }
    }

    extras.isString(testValue.payload.meeting_descriptor.metadata.customer_id);
    extras.isString(testValue.payload.meeting_descriptor.metadata.customer_name);

    test.done();
}

exports.testCreateMeetingResponse = function (test) {
    var event_type = library.CREATE_MEETING_RESPONSE;
    var params = sampleCreateMeetingResponseEvent();

    var testingJson;
    library.createMeetingResponseToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
            //test.done();
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
       // test.done()
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.destination.correlation_id);
    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);
    extras.isBoolean(testValue.payload.result.success);
    extras.isString(testValue.payload.result.message);

    extras.isString(testValue.payload.meeting_descriptor.name);
    extras.isString(testValue.payload.meeting_descriptor.external_id);
    extras.isBoolean(testValue.payload.meeting_descriptor.record);
    extras.isString(testValue.payload.meeting_descriptor.welcome_message);
    extras.isString(testValue.payload.meeting_descriptor.logout_url);
    extras.isString(testValue.payload.meeting_descriptor.avatar_url);
    extras.isNumber(testValue.payload.meeting_descriptor.max_users);
    extras.isNumber(testValue.payload.meeting_descriptor.duration.length_in_minutes);
    extras.isBoolean(testValue.payload.meeting_descriptor.duration.allow_extend);
    extras.isNumber(testValue.payload.meeting_descriptor.duration.max_minutes);

    extras.isNumber(testValue.payload.meeting_descriptor.voice_conference.pin);
    extras.isNumber(testValue.payload.meeting_descriptor.voice_conference.number);

    //Phone_numbers testing
    var isArray = testValue.payload.meeting_descriptor.phone_numbers.constructor.toString().indexOf("Array");

    test.notEqual(-1, isArray, "\"phone_numbers\" does not look like an array");

    if (isArray) {
        var contacts = testValue.payload.meeting_descriptor.phone_numbers;
        for (index in contacts) {
            var aContact = contacts[index];

            extras.isNotUndefined(aContact.number);
            extras.isNotNull(aContact.number);
            test.notEqual("", aContact.number);
            extras.isString(aContact.number);

            extras.isNotUndefined(aContact.description);
            extras.isNotNull(aContact.description);
            test.notEqual("", aContact.description);
            extras.isString(aContact.description);
        }
    }

    extras.isString(testValue.payload.meeting_descriptor.metadata.customer_id);
    extras.isString(testValue.payload.meeting_descriptor.metadata.customer_name);

    test.done();
}

function sampleCreateMeetingResponseEvent() {
    var params = {};

    params.channelsDestination = "someDesChannel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.resultSuccess = true;
    params.resultMessage = "Success";
    params.correlationId = "someId";

    /*params.name
    params.timestamp*/
    params.source = "someSource";

    params.descriptorName = "English 101";
    params.descriptorExternalId = "english_101";
    params.descriptorRecord = true;
    params.descriptorWelcome = "Welcome to English 101";
    params.descriptorLogout = "http://www.bigbluebutton.org";
    params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton";
    params.descriptorMaxUsers = 20;
    params.durationLength = 120;
    params.durationAllowExtend = false;
    params.durationMaxMinutes = 240;
    params.voiceConfPin = 123456;
    params.voiceConfNumber = 85115;

    //TODO how to make the array things?!
    params.phoneNumbers = [];
    var a = {
        "number": "613-520-7600",
        "description": "Ottawa"
    };
    var b = {
        "number": "1-888-555-7890",
        "description": "NA Toll-Free"
    };
    params.phoneNumbers[0] = a;
    params.phoneNumbers[1] = b;


    params.metadataCustomerId = "acme-customer";
    params.metadataCustomerName = "ACME";

    return params;
}

function sampleMeetingCreatedEvent () {
    var params = {};

    params.channelsDestination = "someDesChannel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.resultSuccess = true;
    params.resultMessage = "Success";
    params.correlationId = "someId";

    /*params.name
    params.timestamp*/
    params.source = "bbb-apps";

    params.meetingName="someName";
    params.meetingID ="someId";
    params.sessionID = "someSessionId";

    params.descriptorName = "English 101";
    params.descriptorExternalId = "english_101";
    params.descriptorRecord = true;
    params.descriptorWelcome = "Welcome to English 101";
    params.descriptorLogout = "http://www.bigbluebutton.org";
    params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton";
    params.descriptorMaxUsers = 20;
    params.durationLength = 120;
    params.durationAllowExtend = false;
    params.durationMaxMinutes = 240;
    params.voiceConfPin = 123456;
    params.voiceConfNumber = 85115;

    //TODO how to make the array things?!
    params.phoneNumbers = [];
    var a = {
        "number": "613-520-7600",
        "description": "Ottawa"
    };
    var b = {
        "number": "1-888-555-7890",
        "description": "NA Toll-Free"
    };
    params.phoneNumbers[0] = a;
    params.phoneNumbers[1] = b;


    params.metadataCustomerId = "acme-customer";
    params.metadataCustomerName = "ACME";

    return params;
}

exports.testMeetingCreatedEvent = function(test){

    var event_type = library.MEETING_CREATED_EVENT;
    var params = sampleMeetingCreatedEvent();

    var testingJson;
    library.meetingCreatedEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.meeting_descriptor.name);
    extras.isString(testValue.payload.meeting_descriptor.external_id);
    extras.isBoolean(testValue.payload.meeting_descriptor.record);
    extras.isString(testValue.payload.meeting_descriptor.welcome_message);
    extras.isString(testValue.payload.meeting_descriptor.logout_url);
    extras.isString(testValue.payload.meeting_descriptor.avatar_url);
    extras.isNumber(testValue.payload.meeting_descriptor.max_users);
    extras.isNumber(testValue.payload.meeting_descriptor.duration.length_in_minutes);
    extras.isBoolean(testValue.payload.meeting_descriptor.duration.allow_extend);
    extras.isNumber(testValue.payload.meeting_descriptor.duration.max_minutes);

    extras.isNumber(testValue.payload.meeting_descriptor.voice_conference.pin);
    extras.isNumber(testValue.payload.meeting_descriptor.voice_conference.number);

    //Phone_numbers testing
    var isArray = testValue.payload.meeting_descriptor.phone_numbers.constructor.toString().indexOf("Array");

    test.notEqual(-1, isArray, "\"phone_numbers\" does not look like an array");

    if (isArray) {
        var contacts = testValue.payload.meeting_descriptor.phone_numbers;
        for (index in contacts) {
            var aContact = contacts[index];

            extras.isNotUndefined(aContact.number);
            extras.isNotNull(aContact.number);
            test.notEqual("", aContact.number);
            extras.isString(aContact.number);

            extras.isNotUndefined(aContact.description);
            extras.isNotNull(aContact.description);
            test.notEqual("", aContact.description);
            extras.isString(aContact.description);
        }
    }

    extras.isString(testValue.payload.meeting_descriptor.metadata.customer_id);
    extras.isString(testValue.payload.meeting_descriptor.metadata.customer_name);

    test.done();
}

function sampleEndMeetingRequest () {
    var params = {};

    params.channelsDestination = "someDesChannel";
    params.channelsReply="someChannelsRep";
    params.correlationId="someCorrId";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source="someSource";
    params.force = true;
    params.warnUsers=true;

    return params;
}

exports.testEndMeetingRequest = function(test){

    var event_type = library.END_MEETING_REQUEST;
    var params = sampleEndMeetingRequest();

    var testingJson;
    library.endMeetingRequestToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.reply.to);
    extras.isString(testValue.header.reply.correlation_id);
    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);
    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isBoolean(testValue.payload.force);
    extras.isBoolean(testValue.payload.warn_users);
  
    test.done();
}

function sampleEndMeetingResponse () {
    var params = {};

    params.channelsDestination = "someDesChannel";
    params.correlationId="someCorrId";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source="someSource";
    params.success = true;
    params.message="Success";

    return params;
}

exports.testEndMeetingResponse = function(test){

    var event_type = library.END_MEETING_RESPONSE;
    var params = sampleEndMeetingResponse();

    var testingJson;
    library.endMeetingResponseToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.destination.correlation_id);
    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);
    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isBoolean(testValue.payload.result.success);
    extras.isString(testValue.payload.result.message);
  
    test.done();
}

function sampleEndMeetingWarning () {
    var params = {};

    params.channelsDestination = "someDesChannel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source="someSource";
    params.timeLeft = 30;
    params.timeUnit = "seconds";
    params.allowExtend = false;

    return params;
}

exports.testEndMeetingWarning = function(test){

    var event_type = library.END_MEETING_WARNING_EVENT;
    var params = sampleEndMeetingWarning();

    var testingJson;
    library.endMeetingWarningToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);
    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isNumber(testValue.payload.time_left);
    extras.isString(testValue.payload.time_unit);
    extras.isBoolean(testValue.payload.allow_extend);

    test.done();
}

function sampleMeetingEndedEvent () {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source="bbb-apps";

    return params;
}

exports.testMeetingEndedEvent = function(test){

    var event_type = library.MEETING_ENDED_EVENT;
    var params = sampleMeetingEndedEvent();

    var testingJson;
    library.meetingEndedEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);
    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    test.done();
}

function sampleRegisterUserRequest () {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source="bbb-web";

    params.channelsReply = "apps_channel";
    params.correlationId = "abc";


    params.descriptorName = "Guga";
    params.descriptorExternalId = "user1";

    params.descriptorRole = "MODERATOR";
    params.descriptorPin = 12345;

    params.descriptorWelcome = "Welcome to English 101";
    params.descriptorLogout = "http://www.bigbluebutton.org";
    params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton";

    params.studentId = "54321";
    params.program ="engineering";


    return params;
}

exports.testRegisterUserRequest = function(test){

    var event_type = library.REGISTER_USER_REQUEST;
    var params = sampleRegisterUserRequest();

    var testingJson;
    library.registerUserRequestToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.reply.to);
    extras.isString(testValue.header.reply.correlation_id);
    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);
    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user_descriptor.external_id  );
    extras.isString(testValue.payload.user_descriptor.name  );
    extras.isString(testValue.payload.user_descriptor.role  );
    extras.isNumber(testValue.payload.user_descriptor.pin  );
    extras.isString(testValue.payload.user_descriptor.welcome_message  );
    extras.isString(testValue.payload.user_descriptor.logout_url  );
    extras.isString(testValue.payload.user_descriptor.avatar_url  );
    extras.isString(testValue.payload.user_descriptor.metadata.student_id  ); //TODO should this remain a string or become Number?
    extras.isString(testValue.payload.user_descriptor.metadata.program);

    test.done();
}

function sampleRegisterUserResponse () {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.correlationId = "abc";

    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source="bbb-web";


    params.token = "guga-token";
    params.success = true;
    params.message ="Success";
  
    params.descriptorName = "Guga";
    params.descriptorExternalId = "user1";
    params.descriptorRole = "MODERATOR";
    params.descriptorPin = 12345;
    params.descriptorWelcome = "Welcome to English 101";
    params.descriptorLogout = "http://www.bigbluebutton.org";
    params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton";

    params.studentId = "54321";
    params.program ="engineering";


    return params;
}

exports.testRegisterUserResponse = function(test){

    var event_type = library.REGISTER_USER_RESPONSE;
    var params = sampleRegisterUserResponse();

    var testingJson;
    library.registerUserResponseToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.destination.correlation_id);
    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);
    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user_descriptor.external_id  );
    extras.isString(testValue.payload.user_descriptor.name  );
    extras.isString(testValue.payload.user_descriptor.role  );
    extras.isNumber(testValue.payload.user_descriptor.pin  );
    extras.isString(testValue.payload.user_descriptor.welcome_message  );
    extras.isString(testValue.payload.user_descriptor.logout_url  );
    extras.isString(testValue.payload.user_descriptor.avatar_url  );
    extras.isString(testValue.payload.user_descriptor.metadata.student_id  ); //TODO should this remain a string or become Number?
    extras.isString(testValue.payload.user_descriptor.metadata.program);

    extras.isString(testValue.payload.user_token);
    extras.isBoolean(testValue.payload.result.success);
    extras.isString(testValue.payload.result.message);

    test.done();
}

function sampleUserRegisteredEvent () {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source="bbb-web";

    params.descriptorName = "Guga";
    params.descriptorExternalId = "user1";
    params.descriptorRole = "MODERATOR";
    params.descriptorPin = 12345;
    params.descriptorWelcome = "Welcome to English 101";
    params.descriptorLogout = "http://www.bigbluebutton.org";
    params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton";

    params.studentId = "54321";
    params.program ="engineering";


    return params;
}

exports.testUserRegisteredEvent = function(test){

    var event_type = library.USER_REGISTERED_EVENT;
    var params = sampleUserRegisteredEvent();

    var testingJson;
    library.userRegisteredEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);
    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user_descriptor.external_id  );
    extras.isString(testValue.payload.user_descriptor.name  );
    extras.isString(testValue.payload.user_descriptor.role  );
    extras.isNumber(testValue.payload.user_descriptor.pin  );
    extras.isString(testValue.payload.user_descriptor.welcome_message  );
    extras.isString(testValue.payload.user_descriptor.logout_url  );
    extras.isString(testValue.payload.user_descriptor.avatar_url  );
    extras.isString(testValue.payload.user_descriptor.metadata.student_id  ); //TODO should this remain a string or become Number?
    extras.isString(testValue.payload.user_descriptor.metadata.program);

    test.done();
}

function sampleUserJoinRequest () {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source="bbb-web";

    params.channelsReply= "bbb-web";
    params.correlationId= "someCorId";
    params.token = "user1-token-1";

    return params;
}

exports.testUserJoinRequest = function(test){

    var event_type = library.USER_JOIN_REQUEST;
    var params = sampleUserJoinRequest();

    var testingJson;
    library.userJoinRequestToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.header.reply.to);
    extras.isString(testValue.header.reply.correlation_id);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.token);

    test.done();
}


//new
function sampleUserJoinResponse () {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source="bbb-web";

    params.correlationId= "someCorId";

    params.success=true;
    params.message="Success";

    params.descriptorName = "Guga";
    params.descriptorExternalId = "user1";
    params.descriptorRole = "MODERATOR";
    params.descriptorPin = 12345;
    params.descriptorWelcome = "Welcome to English 101";
    params.descriptorLogout = "http://www.bigbluebutton.org";
    params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton";

    params.studentId = "54321";
    params.program ="engineering";



    return params;
}

exports.testUserJoinResponse = function(test){

    var event_type = library.USER_JOIN_RESPONSE;
    var params = sampleUserJoinResponse();

    var testingJson;
    library.userJoinResponseToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in "+event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false,"ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);
    extras.isString(testValue.header.destination.correlation_id);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isBoolean(testValue.payload.result.success);
    extras.isString(testValue.payload.result.message);

    extras.isString(testValue.payload.user_descriptor.external_id  );
    extras.isString(testValue.payload.user_descriptor.name  );
    extras.isString(testValue.payload.user_descriptor.role  );
    extras.isNumber(testValue.payload.user_descriptor.pin  );
    extras.isString(testValue.payload.user_descriptor.welcome_message  );
    extras.isString(testValue.payload.user_descriptor.logout_url  );
    extras.isString(testValue.payload.user_descriptor.avatar_url  );
    extras.isString(testValue.payload.user_descriptor.metadata.student_id  ); //TODO should this remain a string or become Number?
    extras.isString(testValue.payload.user_descriptor.metadata.program);

    test.done();
}