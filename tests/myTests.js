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

function sampleUserJoinedEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";


    params.userId = "juanid";
    params.userExternalId = "userjuan";
    params.userName = "Juan Tamad";
    params.role = "MODERATOR";
    params.pin = 12345;
    params.welcome = "Welcome to English 101";
    params.logoutUrl = "http://www.example.com";

    params.avatarUrl = "http://www.example.com/avatar.png";
    params.isPresenter = true;
    params.handRaised = false;
    params.muted = false;
    params.locked = false;
    params.talking = false;
    params.callerName = "Juan Tamad";
    params.callerNumber = "011-63-917-555-1234";

    params.mediaStreams = [];

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

    params.mediaStreams[0] = a;
    params.mediaStreams[1] = b;
    params.mediaStreams[2] = c;



    params.studentId = "54321";
    params.program = "engineering";



    return params;
}

exports.testUserJoinedEvent = function (test) {

    var event_type = library.USER_JOINED_EVENT;
    var params = sampleUserJoinedEvent();

    var testingJson;
    library.userJoinedEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user.id);
    extras.isString(testValue.payload.user.external_id);
    extras.isString(testValue.payload.user.name);
    extras.isString(testValue.payload.user.role);
    extras.isNumber(testValue.payload.user.pin);
    extras.isString(testValue.payload.user.welcome_message);
    extras.isString(testValue.payload.user.logout_url);
    extras.isString(testValue.payload.user.avatar_url);
    extras.isBoolean(testValue.payload.user.is_presenter);
    extras.isBoolean(testValue.payload.user.status.hand_raised);
    extras.isBoolean(testValue.payload.user.status.muted);
    extras.isBoolean(testValue.payload.user.status.locked);
    extras.isBoolean(testValue.payload.user.status.talking);
    extras.isString(testValue.payload.user.caller_id.name);
    extras.isString(testValue.payload.user.caller_id.number);

    //Media streams testing
    var isArray = testValue.payload.user.media_streams.constructor.toString().indexOf("Array");

    test.notEqual(-1, isArray, "\"media_streams\" does not look like an array");

    if (isArray) {
        var streams = testValue.payload.user.media_streams;
        for (index in streams) {
            var aStream = streams[index];

            //TODO must be either audio/video/screen
            extras.isNotUndefined(aStream.media_type);
            extras.isNotNull(aStream.media_type);
            test.notEqual("", aStream.media_type);
            extras.isString(aStream.media_type);

            extras.isNotUndefined(aStream.uri);
            extras.isNotNull(aStream.uri);
            test.notEqual("", aStream.uri);
            extras.isString(aStream.uri);

            extras.isNotUndefined(aStream.metadata);
            extras.isNotNull(aStream.metadata);
            extras.isObject(aStream.metadata);

            extras.isNotUndefined(aStream.metadata.foo);
            extras.isNotNull(aStream.metadata.foo);
            test.notEqual("", aStream.metadata.foo);
            extras.isString(aStream.metadata.foo);
        }
    }

    extras.isString(testValue.payload.user.metadata.student_id); //TODO not a # ?!
    extras.isString(testValue.payload.user.metadata.program);

    test.done();
}

function sampleUserLeftEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.userId = "juanid";
    params.userName = "Juan Tamad";

    return params;
}

exports.testUserLeftEvent = function (test) {

    var event_type = library.USER_LEFT_EVENT;
    var params = sampleUserLeftEvent();

    var testingJson;
    library.userLeftEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user.id);
    extras.isString(testValue.payload.user.name);

    test.done();
}

function sampleGetUsersRequest() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.userId = "juanid";
    params.userName = "Juan Tamad";

    params.channelsReply="apps_channel";
    params.correlationId="abc";

    params.requesterId="juanid";
    params.requesterName="Juan Tamad";

    return params;
}

exports.testGetUsersRequest = function (test) {

    var event_type = library.GET_USERS_REQUEST;
    var params = sampleGetUsersRequest();

    var testingJson;
    library.getUsersRequestToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user.id);
    extras.isString(testValue.payload.user.name);

    extras.isString(testValue.header.reply.to);
    extras.isString(testValue.header.reply.correlation_id);

    extras.isString(testValue.payload.requester.id);
    extras.isString(testValue.payload.requester.name);

    test.done();
}

function sampleGetUsersResponse() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";


    params.listUsers = [];

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

    params.listUsers[0] = a;

    return params;
}

exports.testGetUsersResponse = function (test) {

    var event_type = library.GET_USERS_RESPONSE;
    var params = sampleGetUsersResponse();

    var testingJson;
    library.getUsersResponseToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);



    //Users testing
    var isArray = testValue.payload.users.constructor.toString().indexOf("Array");
    test.notEqual(-1, isArray, "\"users\" does not look like an array");

    if (isArray) {
        var users = testValue.payload.users;
        for (index in users) {
            var aUser = users[index];

            extras.isNotUndefined(aUser.id);
            extras.isNotNull(aUser.id);
            test.notEqual("", aUser.id);
            extras.isString(aUser.id);

            extras.isNotUndefined(aUser.external_id);
            extras.isNotNull(aUser.external_id);
            test.notEqual("", aUser.external_id);
            extras.isString(aUser.external_id);

            extras.isNotUndefined(aUser.name);
            extras.isNotNull(aUser.name);
            test.notEqual("", aUser.name);
            extras.isString(aUser.name);

            extras.isNotUndefined(aUser.role);
            extras.isNotNull(aUser.role);
            test.notEqual("", aUser.role);
            extras.isString(aUser.role);

            extras.isNotUndefined(aUser.pin);
            extras.isNotNull(aUser.pin);
            extras.isNumber(aUser.pin);

            extras.isNotUndefined(aUser.welcome_message);
            extras.isNotNull(aUser.welcome_message);
            test.notEqual("", aUser.welcome_message);
            extras.isString(aUser.welcome_message);

            extras.isNotUndefined(aUser.logout_url);
            extras.isNotNull(aUser.logout_url);
            test.notEqual("", aUser.logout_url);
            extras.isString(aUser.logout_url);

            extras.isNotUndefined(aUser.avatar_url);
            extras.isNotNull(aUser.avatar_url);
            test.notEqual("", aUser.avatar_url);
            extras.isString(aUser.avatar_url);

            extras.isNotUndefined(aUser.is_presenter);
            extras.isNotNull(aUser.is_presenter);
            extras.isBoolean(aUser.is_presenter);

            extras.isNotUndefined(aUser.status);
            extras.isNotNull(aUser.status);
            extras.isObject(aUser.status);

            extras.isNotUndefined(aUser.status.hand_raised);
            extras.isNotNull(aUser.status.hand_raised);
            extras.isBoolean(aUser.status.hand_raised);

            extras.isNotUndefined(aUser.status.muted);
            extras.isNotNull(aUser.status.muted);
            extras.isBoolean(aUser.status.muted);

            extras.isNotUndefined(aUser.status.locked);
            extras.isNotNull(aUser.status.locked);
            extras.isBoolean(aUser.status.locked);

            extras.isNotUndefined(aUser.status.talking);
            extras.isNotNull(aUser.status.talking);
            extras.isBoolean(aUser.status.talking);


            extras.isNotUndefined(aUser.caller_id);
            extras.isNotNull(aUser.caller_id);
            extras.isObject(aUser.caller_id);

            extras.isNotUndefined(aUser.caller_id.name);
            extras.isNotNull(aUser.caller_id.name);
            test.notEqual("", aUser.caller_id.name);
            extras.isString(aUser.caller_id.name);

            extras.isNotUndefined(aUser.caller_id.number);
            extras.isNotNull(aUser.caller_id.number);
            test.notEqual("", aUser.caller_id.number);
            extras.isString(aUser.caller_id.number);

            //Media streams testing
            var isArrayStreams = testValue.payload.users[index].media_streams.constructor.toString().indexOf("Array");

            test.notEqual(-1, isArrayStreams, "\"media_streams\" does not look like an array");

            if (isArrayStreams) {
                var streams = testValue.payload.users[index].media_streams;
                for (i in streams) {
                    var aStream = streams[i];

                    //TODO must be either audio/video/screen
                    extras.isNotUndefined(aStream.media_type);
                    extras.isNotNull(aStream.media_type);
                    test.notEqual("", aStream.media_type);
                    extras.isString(aStream.media_type);

                    extras.isNotUndefined(aStream.uri);
                    extras.isNotNull(aStream.uri);
                    test.notEqual("", aStream.uri);
                    extras.isString(aStream.uri);

                    extras.isNotUndefined(aStream.metadata);
                    extras.isNotNull(aStream.metadata);
                    extras.isObject(aStream.metadata);

                    extras.isNotUndefined(aStream.metadata.foo);
                    extras.isNotNull(aStream.metadata.foo);
                    test.notEqual("", aStream.metadata.foo);
                    extras.isString(aStream.metadata.foo);
                }
            }

        }
    }




    test.done();
}

function sampleRaiseUserHandRequest() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.raise=true;

    params.requesterId="juanid";
    params.requesterName="Juan Tamad";

    return params;
}

exports.testRaiseUserHandRequest = function (test) {

    var event_type = library.RAISE_USER_HAND_REQUEST;
    var params = sampleRaiseUserHandRequest();

    var testingJson;
    library.raiseUserHandRequestToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isBoolean(testValue.payload.raise);

    extras.isString(testValue.payload.requester.id);
    extras.isString(testValue.payload.requester.name);

    test.done();
}

function sampleUserRaisedHandEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.raise=true;

    params.requesterId="juanid";
    params.requesterName="Juan Tamad";

    return params;
}

exports.testUserRaisedHandEvent = function (test) {

    var event_type = library.USER_RAISED_HAND_EVENT;
    var params = sampleUserRaisedHandEvent();

    var testingJson;
    library.userRaisedHandEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isBoolean(testValue.payload.raise);

    extras.isString(testValue.payload.requester.id);
    extras.isString(testValue.payload.requester.name);

    test.done();
}

function sampleAssignedPresenterRequest() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.presenterId="user1";
    params.presenterName="Guga";

    params.assignedById="user2";
    params.assignedByName="Juan";

    return params;
}

exports.testAssignedPresenterRequest = function (test) {

    var event_type = library.ASSIGN_PRESENTER_REQUEST;
    var params = sampleAssignedPresenterRequest();

    var testingJson;
    library.assignedPresenterRequestToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.presenter.id);
    extras.isString(testValue.payload.presenter.name);

    extras.isString(testValue.payload.assigned_by.id);
    extras.isString(testValue.payload.assigned_by.name);

    test.done();
}

function samplePresenterAssignedEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.presenterId="user1";
    params.presenterName="Guga";

    params.assignedById="user2";
    params.assignedByName="Juan";

    return params;
}

exports.testPresenterAssignedEvent = function (test) {

    var event_type = library.PRESENTER_ASSIGNED_EVENT;
    var params = samplePresenterAssignedEvent();

    var testingJson;
    library.presenterAssignedEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.presenter.id);
    extras.isString(testValue.payload.presenter.name);

    extras.isString(testValue.payload.assigned_by.id);
    extras.isString(testValue.payload.assigned_by.name);

    test.done();
}

function sampleMuteUserRequest() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.userId="user1";
    params.userName="Guga";

    params.requesterId="user2";
    params.requesterName="Juan";

    params.mute=true;

    return params;
}

exports.testMuteUserRequest = function (test) {

    var event_type = library.MUTE_USER_REQUEST;
    var params = sampleMuteUserRequest();

    var testingJson;
    library.muteUserRequestToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user.id);
    extras.isString(testValue.payload.user.name);

    extras.isString(testValue.payload.requester.id);
    extras.isString(testValue.payload.requester.name);

    extras.isBoolean(testValue.payload.mute);

    test.done();
}

function sampleMuteUserRequestEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.userId="user1";
    params.userName="Guga";

    params.requesterId="user2";
    params.requesterName="Juan";

    params.mute=true;

    return params;
}

exports.testMuteUserRequestEvent = function (test) {

    var event_type = library.MUTE_USER_REQUEST_EVENT;
    var params = sampleMuteUserRequestEvent();

    var testingJson;
    library.muteUserRequestEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user.id);
    extras.isString(testValue.payload.user.name);

    extras.isString(testValue.payload.requester.id);
    extras.isString(testValue.payload.requester.name);

    extras.isBoolean(testValue.payload.mute);

    test.done();
}
//feb12
function sampleMuteVoiceUserRequest() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.userId="user1";
    params.userName="Guga";

    params.mute=true;

    params.freeSWITCH_IPv4 = "192.168.0.166"; //// had to change - to _
    params.conference_Name = "72382"; //// had to change - to _
    params.conference_Unique_ID = "480d3f7c-224f-11e0-ae04-fbe97e271da0"; //// had to change - to _
    params.conference_member_id = "1";

    return params;
}

exports.testMuteVoiceUserRequest = function (test) {

    var event_type = library.MUTE_VOICE_USER_REQUEST;
    var params = sampleMuteVoiceUserRequest();

    var testingJson;
    library.muteVoiceUserRequestToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user_metadata.id);
    extras.isString(testValue.payload.user_metadata.name);

    extras.isBoolean(testValue.payload.mute);

    extras.isString(testValue.payload.voice_metadata.FreeSWITCH_IPv4);
    extras.isString(testValue.payload.voice_metadata.Conference_Name);
    extras.isString(testValue.payload.voice_metadata.Conference_Unique_ID);
    extras.isString(testValue.payload.voice_metadata.conference_member_id);

    console.log("wednesday");

    test.done();
}

function sampleVoiceUserMutedEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.userId="user1";
    params.userName="Guga";

    params.mute=true;

    params.freeSWITCH_IPv4 = "192.168.0.166"; //// had to change - to _
    params.conference_Name = "72382"; //// had to change - to _
    params.conference_Unique_ID = "480d3f7c-224f-11e0-ae04-fbe97e271da0"; //// had to change - to _
    params.conference_member_id = "1";

    return params;
}

exports.testVoiceUserMutedEvent = function (test) {

    var event_type = library.VOICE_USER_MUTED_EVENT;
    var params = sampleVoiceUserMutedEvent();

    var testingJson;
    library.voiceUserMutedEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user_metadata.id);
    extras.isString(testValue.payload.user_metadata.name);

    extras.isBoolean(testValue.payload.mute);

    extras.isString(testValue.payload.voice_metadata.FreeSWITCH_IPv4);
    extras.isString(testValue.payload.voice_metadata.Conference_Name);
    extras.isString(testValue.payload.voice_metadata.Conference_Unique_ID);
    extras.isString(testValue.payload.voice_metadata.conference_member_id);

    test.done();
}

function sampleUserMutedEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.userId="user1";
    params.userName="Guga";

    params.mute=true;

    return params;
}

exports.testUserMutedEvent = function (test) {

    var event_type = library.USER_MUTED_EVENT;
    var params = sampleUserMutedEvent();

    var testingJson;
    library.userMutedEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user.id);
    extras.isString(testValue.payload.user.name);

    extras.isBoolean(testValue.payload.mute);

    test.done();
}

function sampleUserPublishStreamRequest() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.userId="user1";
    params.userName="Guga";

    params.channelsReply="apps_channel";
    params.correlationId="abc";

    params.mediaType="video";
    params.metadataFoo="bar";

    return params;
}

exports.testUserPublishStreamRequest = function (test) {

    var event_type = library.USER_PUBLISH_STREAM_REQUEST;
    var params = sampleUserPublishStreamRequest();

    var testingJson;
    library.userPublishStreamRequestToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user.id);
    extras.isString(testValue.payload.user.name);

    extras.isString(testValue.header.reply.to);
    extras.isString(testValue.header.reply.correlation_id);

    extras.isString(testValue.payload.media.media_type);//TODO make it one of video/ / ..
    extras.isString(testValue.payload.media.metadata.foo);

    test.done();
}

function sampleUserPublishStreamResponse() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.userId="user1";
    params.userName="Guga";

    params.channelsReply="apps_channel";
    params.correlationId="abc";

    params.mediaType="video";
    params.metadataFoo="bar";
    params.uri="http://cdn.bigbluebutton.org/stream/v1234";

    return params;
}

exports.testUserPublishStreamResponse = function (test) {

    var event_type = library.USER_PUBLISH_STREAM_RESPONSE;
    var params = sampleUserPublishStreamResponse();

    var testingJson;
    library.userPublishStreamResponseToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
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

    extras.isString(testValue.payload.user.id);
    extras.isString(testValue.payload.user.name);

    extras.isString(testValue.payload.media.media_type);//TODO make it one of video/ / ..
    extras.isString(testValue.payload.media.metadata.foo);
    extras.isString(testValue.payload.media.uri);

    test.done();
}

//intro to new tests for ""
/*function sampleUserPublishStreamResponse__forNada() {
    var params = {};

    params.channelsDestination = "";
    params.meetingName = "";
    params.meetingId = "";
    params.sessionId = "";
    params.source = "";

    params.userId="";
    params.userName="";

    params.correlationId="";

    params.mediaType="";
    params.metadataFoo="";
    params.uri="";

    return params;
}
//intro to new tests for ""
exports.testUserPublishStreamResponse__forNada = function (test) {
    var params = sampleUserPublishStreamResponse__forNada();

    library.userPublishStreamResponseToJson(params,
        function (text) {
        },
        function (errors) {
            //Check if all parameters that were assigned values in sample***()
            //have been checked for not being null/""/undefined
            test.equals(Object.keys(params).length, errors.length);
        });

    test.done();
}*/

function samplePublishedStreamEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.userId="user1";
    params.userName="Guga";

    params.channelsReply="apps_channel";

    params.mediaType="video";
    params.metadataFoo="bar";
    params.uri="http://cdn.bigbluebutton.org/stream/v1234";

    return params;
}

exports.testPublishedStreamEvent = function (test) {

    var event_type = library.PUBLISHED_STREAM_EVENT;
    var params = samplePublishedStreamEvent();

    var testingJson;
    library.publishedStreamEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);    

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user.id);
    extras.isString(testValue.payload.user.name);

    extras.isString(testValue.payload.media.media_type);//TODO make it one of video/ / ..
    extras.isString(testValue.payload.media.metadata.foo);
    extras.isString(testValue.payload.media.uri);

    test.done();
}

/*function samplePublishedStreamEvent__forNada() {
    var params = {};

    params.channelsDestination = "";
    params.meetingName = "";
    params.meetingId = "";
    params.sessionId = "";
    params.source = "";

    params.userId="";
    params.userName="";

    params.mediaType="";
    params.metadataFoo="";
    params.uri="";

    return params;
}

exports.testPublishedStreamEvent__forNada = function (test) {
    var params = samplePublishedStreamEvent__forNada();

    library.publishedStreamEventToJson(params,
        function (text) {
        },
        function (errors) {
            //Check if all parameters that were assigned values in sample***()
            //have been checked for not being null/""/undefined
            test.equals(Object.keys(params).length, errors.length);
        });

    test.done();
}*/

function sampleUserPublishedStreamEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.userId="user1";
    params.userName="Guga";

    params.channelsReply="apps_channel";

    params.mediaType="video";
    params.metadataFoo="bar";
    params.uri="http://cdn.bigbluebutton.org/stream/v1234";

    return params;
}

exports.testUserPublishedStreamEvent = function (test) {

    var event_type = library.USER_PUBLISHED_STREAM_EVENT;
    var params = sampleUserPublishedStreamEvent();

    var testingJson;
    library.userPublishedStreamEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);    

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user.id);
    extras.isString(testValue.payload.user.name);

    extras.isString(testValue.payload.media.media_type);//TODO make it one of video/ / ..
    extras.isString(testValue.payload.media.metadata.foo);
    extras.isString(testValue.payload.media.uri);

    test.done();
}

function sampleUnpublishedStreamEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.userId="user1";
    params.userName="Guga";

    params.channelsReply="apps_channel";

    params.mediaType="video";
    params.metadataFoo="bar";
    params.uri="http://cdn.bigbluebutton.org/stream/v1234";

    return params;
}

exports.testUnpublishedStreamEvent = function (test) {

    var event_type = library.UNPUBLISHED_STREAM_EVENT;
    var params = sampleUnpublishedStreamEvent();

    var testingJson;
    library.unpublishedStreamEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);    

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user.id);
    extras.isString(testValue.payload.user.name);

    extras.isString(testValue.payload.media.media_type);//TODO make it one of video/ / ..
    extras.isString(testValue.payload.media.metadata.foo);
    extras.isString(testValue.payload.media.uri);

    test.done();
}

function sampleUserUnpublishedStreamEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.userId="user1";
    params.userName="Guga";

    params.channelsReply="apps_channel"; //TODO -do i need this?

    params.mediaType="video";
    params.metadataFoo="bar";
    params.uri="http://cdn.bigbluebutton.org/stream/v1234";

    return params;
}

exports.testUserUnpublishedStreamEvent = function (test) {

    var event_type = library.USER_UNPUBLISHED_STREAM_EVENT;
    var params = sampleUserUnpublishedStreamEvent();

    var testingJson;
    library.userUnpublishedStreamEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);    

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.user.id);
    extras.isString(testValue.payload.user.name);

    extras.isString(testValue.payload.media.media_type);//TODO make it one of video/ / ..
    extras.isString(testValue.payload.media.metadata.foo);
    extras.isString(testValue.payload.media.uri);

    test.done();
}

function samplePublicChatMessageEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.messageCorrelationId = "user1-msg1";
    params.messageTimestamp = "2013-12-23T08:50Z";//TODO
    params.messageFromId="user1";
    params.messageFromName= "Richard";
    params.messageText="Hello world!";
    params.messageLang="en_US";
    params.messageColor=16711680;
    params.messageSize=14;
    params.messageFontType="Arial";

    return params;
}

exports.testPublicChatMessageEvent = function (test) {

    var event_type = library.PUBLIC_CHAT_MESSAGE_EVENT;
    var params = samplePublicChatMessageEvent();

    var testingJson;
    library.publicChatMessageEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);    

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.chat_message.correlation_id);
    extras.isString(testValue.payload.chat_message.timestamp );
    extras.isString(testValue.payload.chat_message.from.id );
    extras.isString(testValue.payload.chat_message.from.name );
    extras.isString(testValue.payload.chat_message.message.text );
    extras.isString(testValue.payload.chat_message.message.lang ); //TODO from list of lang options
    extras.isNumber(testValue.payload.chat_message.font.color );
    extras.isNumber(testValue.payload.chat_message.font.size );
    extras.isString(testValue.payload.chat_message.font.font_type );

    test.done();
}

function sampleBroadcastPublicChatMessageEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.messageCorrelationId = "user1-msg1";
    params.messageUserTimestamp = "2013-12-23T08:50Z";//TODO
    params.messageFromId="user1";
    params.messageFromName= "Richard";
    params.messageText="Hello world!";
    params.messageLang="en_US";
    params.messageColor=16711680;
    params.messageSize=14;
    params.messageFontType="Arial";

    params.messageId = "msg1234"
    params.messageServerTimestamp="2013-12-23T08:50Z";//TODO

    params.translations = [];

    var a = {};
    a.lang = "es_LA";
    a.text = "Hola Mundo!";
    
    params.translations[0] = a;


    return params;
}

exports.testBroadcastPublicChatMessageEvent = function (test) {

    var event_type = library.BROADCAST_PUBLIC_CHAT_MESSAGE_EVENT;
    var params = sampleBroadcastPublicChatMessageEvent();

    var testingJson;
    library.broadcastPublicChatMessageEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);    

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.chat_message.correlation_id);
    extras.isString(testValue.payload.chat_message.id );
    extras.isString(testValue.payload.chat_message.server_timestamp);
    extras.isString(testValue.payload.chat_message.user_timestamp);
    extras.isString(testValue.payload.chat_message.from.id );
    extras.isString(testValue.payload.chat_message.from.name );
    extras.isString(testValue.payload.chat_message.message.text );
    extras.isString(testValue.payload.chat_message.message.lang ); //TODO from list of lang options
    extras.isNumber(testValue.payload.chat_message.font.color );
    extras.isNumber(testValue.payload.chat_message.font.size );
    extras.isString(testValue.payload.chat_message.font.font_type );


    //Translations testing
    var isArray = testValue.payload.chat_message.translations.constructor.toString().indexOf("Array");

    test.notEqual(-1, isArray, "\"translations\" does not look like an array");

    if (isArray) {
        var translations = testValue.payload.chat_message.translations;
        for (index in translations) {
            var aTranslation = translations[index];

            extras.isNotUndefined(aTranslation.lang);
            extras.isNotNull(aTranslation.lang);
            test.notEqual("", aTranslation.lang);
            extras.isString(aTranslation.lang);//TODO is one of the lang options

            extras.isNotUndefined(aTranslation.text);
            extras.isNotNull(aTranslation.text);
            test.notEqual("", aTranslation.text);
            extras.isString(aTranslation.text);
        }
    }

    test.done();
}

function samplePrivateChatMessageEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.messageCorrelationId = "user1-msg1";
    params.messageTimestamp = "2013-12-23T08:50Z";//TODO
    params.messageFromId="user1";
    params.messageFromName= "Richard";
    params.messageToId="user2";
    params.messageToName= "Guga";
    params.messageText="Hello world!";
    params.messageLang="en_US";
    params.messageColor=16711680;
    params.messageSize=14;
    params.messageFontType="Arial";

    return params;
}

exports.testPrivateChatMessageEvent = function (test) {

    var event_type = library.PRIVATE_CHAT_MESSAGE_EVENT;
    var params = samplePrivateChatMessageEvent();

    var testingJson;
    library.privateChatMessageEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);    

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.chat_message.correlation_id);
    extras.isString(testValue.payload.chat_message.timestamp );
    extras.isString(testValue.payload.chat_message.from.id );
    extras.isString(testValue.payload.chat_message.from.name );
    extras.isString(testValue.payload.chat_message.to.id );
    extras.isString(testValue.payload.chat_message.to.name );
    extras.isString(testValue.payload.chat_message.message.text );
    extras.isString(testValue.payload.chat_message.message.lang ); //TODO from list of lang options
    extras.isNumber(testValue.payload.chat_message.font.color );
    extras.isNumber(testValue.payload.chat_message.font.size );
    extras.isString(testValue.payload.chat_message.font.font_type );

    test.done();
}

function sampleBroadcastPrivateChatMessageEvent() {
    var params = {};

    params.channelsDestination = "apps_channel";
    params.meetingName = "someMeetingName";
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.source = "bbb-web";

    params.messageCorrelationId = "user1-msg1";
    params.messageUserTimestamp = "2013-12-23T08:50Z";//TODO
    params.messageFromId="user1";
    params.messageFromName= "Richard";
    params.messageText="Hello world!";
    params.messageLang="en_US";
    params.messageColor=16711680;
    params.messageSize=14;
    params.messageFontType="Arial";

    params.messageId = "msg1234"
    params.messageServerTimestamp="2013-12-23T08:50Z";//TODO

    params.translations = [];

    var a = {};
    a.lang = "es_LA";
    a.text = "Hola Mundo!";
    
    params.translations[0] = a;


    return params;
}

exports.testBroadcastPrivateChatMessageEvent = function (test) {

    var event_type = library.BROADCAST_PRIVATE_CHAT_MESSAGE_EVENT;
    var params = sampleBroadcastPrivateChatMessageEvent();

    var testingJson;
    library.broadcastPrivateChatMessageEventToJson(params,
        function (text) {
            testingJson = text;
        },
        function (errors) {
            test.equals(0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type);
        });
    var testValue;
    try {
        testValue = JSON.parse(testingJson);
    } catch (e) {
        test.ok(false, "ERROR while parsing " + e);
    }

    test.equals(testValue.header.name, event_type);

    extras.isString(testValue.header.destination.to);    

    extras.isString(testValue.header.name);
    extras.isString(testValue.header.timestamp); //TODO
    extras.isString(testValue.header.source);

    extras.isString(testValue.payload.meeting.name);
    extras.isString(testValue.payload.meeting.id);
    extras.isString(testValue.payload.session);

    extras.isString(testValue.payload.chat_message.correlation_id);
    extras.isString(testValue.payload.chat_message.id );
    extras.isString(testValue.payload.chat_message.server_timestamp);
    extras.isString(testValue.payload.chat_message.user_timestamp);
    extras.isString(testValue.payload.chat_message.from.id );
    extras.isString(testValue.payload.chat_message.from.name );
    extras.isString(testValue.payload.chat_message.message.text );
    extras.isString(testValue.payload.chat_message.message.lang ); //TODO from list of lang options
    extras.isNumber(testValue.payload.chat_message.font.color );
    extras.isNumber(testValue.payload.chat_message.font.size );
    extras.isString(testValue.payload.chat_message.font.font_type );


    //Translations testing
    var isArray = testValue.payload.chat_message.translations.constructor.toString().indexOf("Array");

    test.notEqual(-1, isArray, "\"translations\" does not look like an array");

    if (isArray) {
        var translations = testValue.payload.chat_message.translations;
        for (index in translations) {
            var aTranslation = translations[index];

            extras.isNotUndefined(aTranslation.lang);
            extras.isNotNull(aTranslation.lang);
            test.notEqual("", aTranslation.lang);
            extras.isString(aTranslation.lang);//TODO is one of the lang options

            extras.isNotUndefined(aTranslation.text);
            extras.isNotNull(aTranslation.text);
            test.notEqual("", aTranslation.text);
            extras.isString(aTranslation.text);
        }
    }

    test.done();
}



function sampleBroadcastWhiteBoardDrawEvent() {
    var params = {};
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.channels = "someChannels";
    params.source = "someSource";
    params.meetingName = "someMeetingName";
    params.whiteboardId = "someWhiteBoardId";
    params.shapeId = "someShapeId";
    params.shapeType = "someShapeType";
   // params.timestamp="someTimestamp";
    params.firstX = 0.5;
    params.firstY = 0.5;
    params.lastX = 0.5;
    params.lastY = 0.5;

    params.byId = "someById";
    params.byName = "someByName";
    params.background_visible = true;
    params.background_color = 0;
    params.background_alpha = 1;

    params.pTimestamp="someTimestamp";
    params.zorder = 100;
    params.text="He";
    params.style="Arial";
    params.color=0;
    params.size=18;

    return params;
}
exports.testBroadcastWhiteboardDrawEvent = function (test) {
    var event_type = library.BROADCAST_WHITEBOARD_DRAW_EVENT;
    var params = sampleBroadcastWhiteBoardDrawEvent();

    var testingJson;
    library.broadcastWhiteboardDrawEventToJson(params,
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

    extras.isString(testValue.payload.by.id);
    extras.isString(testValue.payload.by.name);
    extras.isBoolean(testValue.payload.data.background.visible);
    extras.isNumber(testValue.payload.data.background.color);
    extras.isNumber(testValue.payload.data.background.alpha);

    extras.isString(testValue.payload.data.font.style);
    extras.isNumber(testValue.payload.data.font.color);
    extras.isNumber(testValue.payload.data.font.size);
    extras.isString(testValue.payload.data.text);

    extras.isString(testValue.payload.timestamp); //TODO must check if it's a real date
    extras.isNumber(testValue.payload.zorder);

    test.done();
}
/*function sampleBroadcastWhiteBoardDrawEvent__Nada() {
    var params = [];
    params.meetingId= null;
    params.sessionId =null;
    params.channels =null;
    params.source =null;
    params.meetingName=null;
    params.whiteboardId=null;
    params.shapeId =null;
    params.shapeType=null;
    params.firstX=null;
    params.firstY=null;
    params.lastX =null;
    params.lastY=null;

    params.byId =null;
    params.byName=null;
    params.background_visible=null;
    params.background_color=null;
    params.background_alpha=null;

    params.pTimestamp=null;
    params.zorder=null;
    params.text=null;
    params.style=null;
    params.color=null;
    params.size=null;

    return params;
}
exports.testBroadcastWhiteBoardDrawEvent__forNada = function (test) {
    var params = sampleBroadcastWhiteBoardDrawEvent__Nada();

    library.broadcastWhiteboardDrawEventToJson(params,
        function (text) {
        },
        function (errors) {
            //Check if all parameters that were assigned values in sample***()
            //have been checked for not being null/""/undefined
            console.log("comparing: " +Object.keys(params).length + " and " +  errors.length );
            test.equals(Object.keys(params).length, errors.length);
        });

    test.done();
}*/




function sampleBroadcastWhiteBoardUpdateEvent() {
    var params = {};
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.channels = "someChannels";
    params.source = "someSource";
    params.meetingName = "someMeetingName";
    params.whiteboardId = "someWhiteBoardId";
    params.shapeId = "someShapeId";
    params.shapeType = "someShapeType";
   // params.timestamp="someTimestamp";
    params.firstX = 0.5;
    params.firstY = 0.5;
    params.lastX = 0.5;
    params.lastY = 0.5;

    params.byId = "someById";
    params.byName = "someByName";
    params.background_visible = true;
    params.background_color = 0;
    params.background_alpha = 1;

    params.pTimestamp="someTimestamp";
    params.zorder = 100;
    params.text="He";
    params.style="Arial";
    params.color=0;
    params.size=18;

    return params;
}
exports.testBroadcastWhiteboardUpdateEvent = function (test) {
    var event_type = library.BROADCAST_WHITEBOARD_UPDATE_EVENT;
    var params = sampleBroadcastWhiteBoardUpdateEvent();

    var testingJson;
    library.broadcastWhiteboardUpdateEventToJson(params,
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

    extras.isString(testValue.payload.by.id);
    extras.isString(testValue.payload.by.name);
    extras.isBoolean(testValue.payload.data.background.visible);
    extras.isNumber(testValue.payload.data.background.color);
    extras.isNumber(testValue.payload.data.background.alpha);

    extras.isString(testValue.payload.data.font.style);
    extras.isNumber(testValue.payload.data.font.color);
    extras.isNumber(testValue.payload.data.font.size);
    extras.isString(testValue.payload.data.text);

    extras.isString(testValue.payload.timestamp); //TODO must check if it's a real date
    extras.isNumber(testValue.payload.zorder);

    test.done();
}







function sampleWhiteboardCursorEvent() {
    var params = {};
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.channels = "someChannels";
    params.source = "someSource";
    params.meetingName = "someMeetingName";
    params.whiteboardId = "someWhiteBoardId";



        params.cursorX = 0.54;
        params.cursorY = 0.98;


    

    params.byId = "someById";
    params.byName = "someByName";

    return params;
}
exports.testWhiteboardCursorEvent = function (test) {
    var event_type = library.WHITEBOARD_CURSOR_EVENT;
    var params = sampleWhiteboardCursorEvent();

    var testingJson;
    library.whiteboardCursorEventToJson(params,
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


    extras.isString(testValue.payload.by.id);
    extras.isString(testValue.payload.by.name);

    extras.isNumber(testValue.payload.cursor.x);
    extras.isNumber(testValue.payload.cursor.y);


   
    test.done();
}
/*function sampleWhiteboardCursorEvent__Nada() {
    var params = [];
    params.meetingId= null;
    params.sessionId =null;
    params.channels =null;
    params.source =null;
    params.meetingName=null;
    params.whiteboardId=null;

    params.cursorX = null;
    params.cursorY = null;

    params.byId =null;
    params.byName=null;

    return params;
}
exports.testWhiteboardCursorEvent__forNada = function (test) {
    var params = sampleWhiteboardCursorEvent__Nada();

    library.whiteboardCursorEventToJson(params,
        function (text) {
        },
        function (errors) {
            //Check if all parameters that were assigned values in sample***()
            //have been checked for not being null/""/undefined
            console.log("comparing: " +Object.keys(params).length + " and " +  errors.length );
            test.equals(Object.keys(params).length, errors.length);
        });

    test.done();
}*/


function sampleBroadcastWhiteboardCursorEvent() {
    var params = {};
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.channels = "someChannels";
    params.source = "someSource";
    params.meetingName = "someMeetingName";
    params.whiteboardId = "someWhiteBoardId";



        params.cursorX = 0.54;
        params.cursorY = 0.98;


    

    params.byId = "someById";
    params.byName = "someByName";

    return params;
}
exports.testBroadcastWhiteboardCursorEvent = function (test) {
    var event_type = library.BROADCAST_WHITEBOARD_CURSOR_EVENT;
    var params = sampleBroadcastWhiteboardCursorEvent();

    var testingJson;
    library.broadcastWhiteboardCursorEventToJson(params,
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


    extras.isString(testValue.payload.by.id);
    extras.isString(testValue.payload.by.name);

    extras.isNumber(testValue.payload.cursor.x);
    extras.isNumber(testValue.payload.cursor.y);


   
    test.done();
}
/*function sampleBroadcastWhiteboardCursorEvent__Nada() {
    var params = [];
    params.meetingId= null;
    params.sessionId =null;
    params.channels =null;
    params.source =null;
    params.meetingName=null;
    params.whiteboardId=null;

    params.cursorX = null;
    params.cursorY = null;

    params.byId =null;
    params.byName=null;

    return params;
}
exports.testBroadcastWhiteboardCursorEvent__forNada = function (test) {
    var params = sampleBroadcastWhiteboardCursorEvent__Nada();

    library.broadcastWhiteboardCursorEventToJson(params,
        function (text) {
        },
        function (errors) {
            //Check if all parameters that were assigned values in sample***()
            //have been checked for not being null/""/undefined
            console.log("comparing: " +Object.keys(params).length + " and " +  errors.length );
            test.equals(Object.keys(params).length, errors.length);
        });

    test.done();
}*/







function sampleSharePresentationEvent() {
    var params = {};
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.channels = "someChannels";
    params.source = "someSource";
    params.meetingName = "someMeetingName";
  
    params.presentationId = "pres-123";
    params.presentationName = "Flight School";
        
    

    params.byId = "someById";
    params.byName = "someByName";

    return params;
}
exports.testSharePresentationEvent = function (test) {
    var event_type = library.SHARE_PRESENTATION_EVENT;
    var params = sampleSharePresentationEvent();

    var testingJson;
    library.sharePresentationEventToJson(params,
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

    extras.isString(testValue.payload.by.id);
    extras.isString(testValue.payload.by.name);

    extras.isString(testValue.payload.presentation.id);
    extras.isString(testValue.payload.presentation.name);

    test.done();
}
function sampleSharePresentationEvent__Nada() {
    var params = [];
    params.meetingId= null;
    params.sessionId =null;
    params.channels =null;
    params.source =null;
    params.meetingName=null;

    params.presentationId = null;
    params.presentationName = null;

    params.byId =null;
    params.byName=null;

    return params;
}
exports.testSharePresentationEvent__forNada = function (test) {
    var params = sampleSharePresentationEvent__Nada();

    library.sharePresentationEventToJson(params,
        function (text) {
        },
        function (errors) {
            //Check if all parameters that were assigned values in sample***()
            //have been checked for not being null/""/undefined
            console.log("comparing: " +Object.keys(params).length + " and " +  errors.length );
            test.equals(Object.keys(params).length, errors.length);
        });

    test.done();
}




function sampleBroadcastSharePresentationEvent() {
    var params = {};
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.channels = "someChannels";
    params.source = "someSource";
    params.meetingName = "someMeetingName";
  
    params.presentationId = "pres-123";
    params.presentationName = "Flight School";
        
    params.pageId = "pres-123/1";
    params.uri = "http://www.example.com/presentations/pres-123/1.swf";        
    params.xOffset = 0;
    params.yOffset = 0;
    params.widthRatio = 100;
    params.heightRatio = 100;   

    params.byId = "someById";
    params.byName = "someByName";

    return params;
}
exports.testBroadcastSharePresentationEvent = function (test) {
    var event_type = library.BROADCAST_SHARE_PRESENTATION_EVENT;
    var params = sampleBroadcastSharePresentationEvent();

    var testingJson;
    library.broadcastSharePresentationEventToJson(params,
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

    extras.isString(testValue.payload.by.id);
    extras.isString(testValue.payload.by.name);


    extras.isString(testValue.payload.page.id);
    extras.isNumber(testValue.payload.page.position.x_offset);
    extras.isNumber(testValue.payload.page.position.y_offset);
    extras.isNumber(testValue.payload.page.position.width_ratio);
    extras.isNumber(testValue.payload.page.position.height_ratio);

    extras.isString(testValue.payload.presentation.id);
    extras.isString(testValue.payload.presentation.name);

    test.done();
}
function sampleBroadcastSharePresentationEvent__Nada() {
    var params = [];
    params.meetingId= null;
    params.sessionId =null;
    params.channels =null;
    params.source =null;
    params.meetingName=null;

    params.presentationId = null;
    params.presentationName = null;

    params.pageId =null;
    params.uri = null;
    params.xOffset = null;
    params.yOffset = null;
    params.widthRatio = null;
    params.heightRatio = null;   


    params.byId =null;
    params.byName=null;

    return params;
}
exports.testBroadcastSharePresentationEvent__forNada = function (test) {
    var params = sampleBroadcastSharePresentationEvent__Nada();

    library.broadcastSharePresentationEventToJson(params,
        function (text) {
        },
        function (errors) {
            //Check if all parameters that were assigned values in sample***()
            //have been checked for not being null/""/undefined
            console.log("comparing: " +Object.keys(params).length + " and " +  errors.length );
            test.equals(Object.keys(params).length, errors.length);
        });

    test.done();
}





function sampleResizeAndMovePagePresentationEvent() {
    var params = {};
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.channels = "someChannels";
    params.source = "someSource";
    params.meetingName = "someMeetingName";
  
    params.presentationId = "pres-123";
    params.presentationName = "Flight School";
        
    params.pageId = "pres-123/1";
    params.uri = "http://www.example.com/presentations/pres-123/1.swf";        
    params.xOffset = 0;
    params.yOffset = 0;
    params.widthRatio = 100;
    params.heightRatio = 100;   

    params.byId = "someById";
    params.byName = "someByName";

    return params;
}
exports.testResizeAndMovePagePresentationEvent = function (test) {
    var event_type = library.RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT;
    var params = sampleResizeAndMovePagePresentationEvent();

    var testingJson;
    library.resizeAndMovePagePresentationEventToJson(params,
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

    extras.isString(testValue.payload.by.id);
    extras.isString(testValue.payload.by.name);


    extras.isString(testValue.payload.page.id);
    extras.isNumber(testValue.payload.page.position.x_offset);
    extras.isNumber(testValue.payload.page.position.y_offset);
    extras.isNumber(testValue.payload.page.position.width_ratio);
    extras.isNumber(testValue.payload.page.position.height_ratio);

    extras.isString(testValue.payload.presentation.id);
    extras.isString(testValue.payload.presentation.name);

    test.done();
}
function sampleResizeAndMovePagePresentationEvent__Nada() {
    var params = [];
    params.meetingId= null;
    params.sessionId =null;
    params.channels =null;
    params.source =null;
    params.meetingName=null;

    params.presentationId = null;
    params.presentationName = null;

    params.pageId =null;
    params.uri = null;
    params.xOffset = null;
    params.yOffset = null;
    params.widthRatio = null;
    params.heightRatio = null;   


    params.byId =null;
    params.byName=null;

    return params;
}
exports.testResizeAndMovePagePresentationEvent__forNada = function (test) {
    var params = sampleResizeAndMovePagePresentationEvent__Nada();

    library.resizeAndMovePagePresentationEventToJson(params,
        function (text) {
        },
        function (errors) {
            //Check if all parameters that were assigned values in sample***()
            //have been checked for not being null/""/undefined
            console.log("comparing: " +Object.keys(params).length + " and " +  errors.length );
            test.equals(Object.keys(params).length, errors.length);
        });

    test.done();
}





function sampleBroadcastResizeAndMovePagePresentationEvent() {
    var params = {};
    params.meetingId = "someMeetingId";
    params.sessionId = "someSessionId";
    params.channels = "someChannels";
    params.source = "someSource";
    params.meetingName = "someMeetingName";
  
    params.presentationId = "pres-123";
    params.presentationName = "Flight School";
        
    params.pageId = "pres-123/1";
    params.uri = "http://www.example.com/presentations/pres-123/1.swf";        
    params.xOffset = 0;
    params.yOffset = 0;
    params.widthRatio = 100;
    params.heightRatio = 100;   

    params.byId = "someById";
    params.byName = "someByName";

    return params;
}
exports.testBroadcastResizeAndMovePagePresentationEvent = function (test) {
    var event_type = library.BROADCAST_RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT;
    var params = sampleBroadcastResizeAndMovePagePresentationEvent();

    var testingJson;
    library.broadcastResizeAndMovePagePresentationEventToJson(params,
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

    extras.isString(testValue.payload.by.id);
    extras.isString(testValue.payload.by.name);


    extras.isString(testValue.payload.page.id);
    extras.isNumber(testValue.payload.page.position.x_offset);
    extras.isNumber(testValue.payload.page.position.y_offset);
    extras.isNumber(testValue.payload.page.position.width_ratio);
    extras.isNumber(testValue.payload.page.position.height_ratio);

    extras.isString(testValue.payload.presentation.id);
    extras.isString(testValue.payload.presentation.name);

    test.done();
}
function sampleBroadcastResizeAndMovePagePresentationEvent__Nada() {
    var params = [];
    params.meetingId= null;
    params.sessionId =null;
    params.channels =null;
    params.source =null;
    params.meetingName=null;

    params.presentationId = null;
    params.presentationName = null;

    params.pageId =null;
    params.uri = null;
    params.xOffset = null;
    params.yOffset = null;
    params.widthRatio = null;
    params.heightRatio = null;   


    params.byId =null;
    params.byName=null;

    return params;
}
exports.testBroadcastResizeAndMovePagePresentationEvent__forNada = function (test) {
    var params = sampleBroadcastResizeAndMovePagePresentationEvent__Nada();

    library.broadcastResizeAndMovePagePresentationEventToJson(params,
        function (text) {
        },
        function (errors) {
            //Check if all parameters that were assigned values in sample***()
            //have been checked for not being null/""/undefined
            console.log("comparing: " +Object.keys(params).length + " and " +  errors.length );
            test.equals(Object.keys(params).length, errors.length);
        });

    test.done();
}




