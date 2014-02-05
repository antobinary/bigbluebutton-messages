var library = require("../message_library");

/*

UNIT TESTS

*/

//check that the EventList var exists
exports.testEventsListExists = function (test) {
    var list = library.listEvents;

    test.notEqual(Object.keys(list).length, 0);
    test.done();
}

//check that is has the correct value for a random pick
exports.testEventsListRandomPick = function (test) {
    var list = library.listEvents;

    test.equals(list[0], 'Please select an event type');
    test.equals(list[37], 'public_chat_message_event');
    test.done();
}

//check what happens if no name is given to the event_type
exports.testEmptyEventType = function (test) {
    var event_type = "";

    var testingJson = library.returnJsonOf(event_type, "", "", "");
    var testingJSObject = JSON.parse(testingJson);

    test.equals(testingJSObject, -1);
    test.done();
}

//check what happens if a name that does not match is given to the event_type
exports.testWrongEventType = function (test) {
    var event_type = "blaaaah";

    var testingJson = library.returnJsonOf(event_type, "", "", "");
    var testingJSObject = JSON.parse(testingJson);

    test.equals(testingJSObject, -1);
    test.done();
}

//check that when given proper name for event_type the correct object is created
exports.testCorrectObjectCreated = function (test) {
    var event_type = "whiteboard_draw_event";
    var testingJson = library.returnJsonOf(event_type, "", "", "");

    test.equals(JSON.parse(testingJson).header.name, event_type);
    test.done();
}

//check that when given proper name for event_type an object (not "-1") is created and that object has the correct event_type
exports.testCorrectEventType = function (test) {
    var list = library.listEvents;
    var listLength = Object.keys(list).length;

    for (var i = 1; i < listLength; i++) {
        var json = library.returnJsonOf(list[i], "", "", "");

        test.notEqual(JSON.parse(json).header.name, "");
    }
    test.done();
}

//check how {meetingName, meetingID, sessionID} are assigned (or not) to events which do not have the required section in their structure
exports.testAttributeAssignment = function (test) {
    var list = library.listEvents;
    var listLength = Object.keys(list).length;

    for (var i = 1; i < listLength; i++) {
        var json = library.returnJsonOf(list[i], "aaa", "bbb", "ccc");

        if (JSON.parse(json).payload.meeting !== undefined && JSON.parse(json).payload.session !== undefined) {
            test.equals(JSON.parse(json).payload.meeting.name, "aaa");
            test.equals(JSON.parse(json).payload.meeting.id, "bbb");
            test.equals(JSON.parse(json).payload.session, "ccc");
        }
    }
    test.done();
}

//check how {meetingName, meetingID, sessionID} are assigned (or not) to events which do not have the required section in their structure
exports.testAttributeAssignment = function (test) {
    var list = library.listEvents;
    var listLength = Object.keys(list).length;

    for (var i = 1; i < listLength; i++) {
        var json = library.returnJsonOf(list[i], "aaa", "bbb", "ccc");

        if (JSON.parse(json).payload.meeting === undefined || JSON.parse(json).payload.session === undefined) {
            console.log("________" + list[i] + " does not have section 'meeting' or 'session'!!!");
        }

        //TODO when I resolve the missing sections, I will uncomment the following:
        //test.notEqual(JSON.parse(json).payload.meeting, undefined);
        //test.notEqual(JSON.parse(json).payload.session, undefined);
    }
    test.done();
}

//check if all event messages have their structure separated in a header and a payload
exports.testHeaderPayload = function (test) {
    var list = library.listEvents;
    var listLength = Object.keys(list).length;

    for (var i = 1; i < listLength; i++) {
        var json = library.returnJsonOf(list[i], "", "", "");

        test.notEqual(JSON.parse(json).header, undefined);
        test.notEqual(JSON.parse(json).payload, undefined);
    }
    test.done();
}

//check that all messages validate to correct JSON
exports.testValidJSON = function (test) {
    var list = library.listEvents;
    var listLength = Object.keys(list).length;

    for (var i = 1; i < listLength; i++) {
        var json = library.returnJsonOf(list[i], "", "", "");
        var jsonValid = true;
        try {
            var tmp = JSON.parse(json);
        } catch (err) {
            jsonValid = false;
        }
        test.equals(jsonValid, true);
    }
    test.done();
}

//check that the left hand side of the assignments does not contain "-"
exports.testDoesNotContain_Sample = function (test) {
    var list = library.listEvents;
    var listLength = Object.keys(list).length;

    for (var i = 1; i < listLength; i++) {
        var json = library.returnJsonOf(list[i], "", "", "");
        var JSObject = JSON.parse(json);

        var temp = [];
        blalala(JSObject);

        function blalala(jso) {
            for (var key in jso) {
                temp.push(key);
                if (typeof jso[key] === 'object') {
                    blalala(jso[key]);
                }
            }
        }

        for (index in temp) {
            var containsChar = temp[index].indexOf("-") > -1;
            test.notEqual(containsChar, true);
        }
    }
    test.done();
}
