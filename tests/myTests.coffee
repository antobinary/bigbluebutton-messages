
#
#
#UNIT TESTS
#
#--documentation
#--turn the sample function into a Setup.
#     Perhaps implement tearDown as well
#--improve naming convention
#
#
#
#for each event_type
# --valid date in timestamp
#
#
#

library = require("../message_library")
extras = require("node-assert-extras")


sampleWhiteBoardUpdateEvent = ->
  params = {}
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.channels = "someChannels"
  params.source = "someSource"
  params.meetingName = "someMeetingName"
  params.whiteboardId = "someWhiteBoardId"
  params.shapeId = "someShapeId"
  params.shapeType = "someShapeType"
  params.firstX = 0.5
  params.firstY = 0.5
  params.lastX = 0.5
  params.lastY = 0.5
  params.lineColor = 0
  params.lineWeight = 18
  params.lineType = "solid" #TODO choose between "solid", ...
  params.byId = "someById"
  params.byName = "someByName"
  params.background_visible = true
  params.background_color = 0
  params.background_alpha = 1
  params.square = false
  params
sampleCreateMeetingRequestEvent = ->
  params = {}
  params.channelsDestination = "someDesChannel"
  params.channelsReply = "someReplyChannel"
  params.correlationId = "someId"
  #    params.timestamp
  params.source = "someSource"
  params.descriptorName = "English 101"
  params.descriptorExternalId = "english_101"
  params.descriptorRecord = true
  params.descriptorWelcome = "Welcome to English 101"
  params.descriptorLogout = "http://www.bigbluebutton.org"
  params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton"
  params.descriptorMaxUsers = 20
  params.durationLength = 120
  params.durationAllowExtend = false
  params.durationMaxMinutes = 240
  params.voiceConfPin = 123456
  params.voiceConfNumber = 85115
  
  params.phoneNumbers = []
  a =
    number: "613-520-7600"
    description: "Ottawa"

  b =
    number: "1-888-555-7890"
    description: "NA Toll-Free"

  params.phoneNumbers[0] = a
  params.phoneNumbers[1] = b
  params.metadataCustomerId = "acme-customer"
  params.metadataCustomerName = "ACME"
  params
#TODO must check if it's a real date
#TODO must check if it's a real date
#TODO

#Phone_numbers testing

#test.done();

# test.done()
#TODO

#Phone_numbers testing

sampleMeetingCreatedEvent = ->
  params = {}
  params.channelsDestination = "someDesChannel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.resultSuccess = true
  params.resultMessage = "Success"
  params.correlationId = "someId"
  #    params.timestamp
  params.source = "bbb-apps"
  params.meetingName = "someName"
  params.meetingID = "someId"
  params.sessionID = "someSessionId"
  params.descriptorName = "English 101"
  params.descriptorExternalId = "english_101"
  params.descriptorRecord = true
  params.descriptorWelcome = "Welcome to English 101"
  params.descriptorLogout = "http://www.bigbluebutton.org"
  params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton"
  params.descriptorMaxUsers = 20
  params.durationLength = 120
  params.durationAllowExtend = false
  params.durationMaxMinutes = 240
  params.voiceConfPin = 123456
  params.voiceConfNumber = 85115
  
  params.phoneNumbers = []
  a =
    number: "613-520-7600"
    description: "Ottawa"

  b =
    number: "1-888-555-7890"
    description: "NA Toll-Free"

  params.phoneNumbers[0] = a
  params.phoneNumbers[1] = b
  params.metadataCustomerId = "acme-customer"
  params.metadataCustomerName = "ACME"
  params
#TODO

#Phone_numbers testing
sampleEndMeetingRequest = ->
  params = {}
  params.channelsDestination = "someDesChannel"
  params.channelsReply = "someChannelsRep"
  params.correlationId = "someCorrId"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "someSource"
  params.force = true
  params.warnUsers = true
  params
#TODO
sampleEndMeetingResponse = ->
  params = {}
  params.channelsDestination = "someDesChannel"
  params.correlationId = "someCorrId"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "someSource"
  params.success = true
  params.message = "Success"
  params
#TODO
sampleEndMeetingWarning = ->
  params = {}
  params.channelsDestination = "someDesChannel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "someSource"
  params.timeLeft = 30
  params.timeUnit = "seconds"
  params.allowExtend = false
  params
#TODO
sampleMeetingEndedEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-apps"
  params
#TODO
sampleRegisterUserRequest = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.channelsReply = "apps_channel"
  params.correlationId = "abc"
  params.descriptorName = "Guga"
  params.descriptorExternalId = "user1"
  params.descriptorRole = "MODERATOR"
  params.descriptorPin = 12345
  params.descriptorWelcome = "Welcome to English 101"
  params.descriptorLogout = "http://www.bigbluebutton.org"
  params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton"
  params.studentId = "54321"
  params.program = "engineering"
  params
#TODO
#TODO should this remain a string or become Number?
sampleRegisterUserResponse = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.correlationId = "abc"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.token = "guga-token"
  params.success = true
  params.message = "Success"
  params.descriptorName = "Guga"
  params.descriptorExternalId = "user1"
  params.descriptorRole = "MODERATOR"
  params.descriptorPin = 12345
  params.descriptorWelcome = "Welcome to English 101"
  params.descriptorLogout = "http://www.bigbluebutton.org"
  params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton"
  params.studentId = "54321"
  params.program = "engineering"
  params
#TODO
#TODO should this remain a string or become Number?
sampleUserRegisteredEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.descriptorName = "Guga"
  params.descriptorExternalId = "user1"
  params.descriptorRole = "MODERATOR"
  params.descriptorPin = 12345
  params.descriptorWelcome = "Welcome to English 101"
  params.descriptorLogout = "http://www.bigbluebutton.org"
  params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton"
  params.studentId = "54321"
  params.program = "engineering"
  params
#TODO
#TODO should this remain a string or become Number?
sampleUserJoinRequest = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.channelsReply = "bbb-web"
  params.correlationId = "someCorId"
  params.token = "user1-token-1"
  params
#TODO
sampleUserJoinResponse = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.correlationId = "someCorId"
  params.success = true
  params.message = "Success"
  params.descriptorName = "Guga"
  params.descriptorExternalId = "user1"
  params.descriptorRole = "MODERATOR"
  params.descriptorPin = 12345
  params.descriptorWelcome = "Welcome to English 101"
  params.descriptorLogout = "http://www.bigbluebutton.org"
  params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton"
  params.studentId = "54321"
  params.program = "engineering"
  params
#TODO
#TODO should this remain a string or become Number?
sampleUserJoinedEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.userId = "juanid"
  params.userExternalId = "userjuan"
  params.userName = "Juan Tamad"
  params.role = "MODERATOR"
  params.pin = 12345
  params.welcome = "Welcome to English 101"
  params.logoutUrl = "http://www.example.com"
  params.avatarUrl = "http://www.example.com/avatar.png"
  params.isPresenter = true
  params.handRaised = false
  params.muted = false
  params.locked = false
  params.talking = false
  params.callerName = "Juan Tamad"
  params.callerNumber = "011-63-917-555-1234"
  params.mediaStreams = []
  a = {}
  a.media_type = "audio"
  a.uri = "http://cdn.bigbluebutton.org/stream/a1234"
  a.metadata = {}
  a.metadata.foo = "bar"
  b = {}
  b.media_type = "video"
  b.uri = "http://cdn.bigbluebutton.org/stream/v1234"
  b.metadata = {}
  b.metadata.foo = "bar"
  c = {}
  c.media_type = "screen"
  c.uri = "http://cdn.bigbluebutton.org/stream/s1234"
  c.metadata = {}
  c.metadata.foo = "bar"
  params.mediaStreams[0] = a
  params.mediaStreams[1] = b
  params.mediaStreams[2] = c
  params.studentId = "54321"
  params.program = "engineering"
  params
#TODO

#Media streams testing

#TODO must be either audio/video/screen
#TODO not a # ?!
sampleUserLeftEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.userId = "juanid"
  params.userName = "Juan Tamad"
  params
#TODO
sampleGetUsersRequest = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.userId = "juanid"
  params.userName = "Juan Tamad"
  params.channelsReply = "apps_channel"
  params.correlationId = "abc"
  params.requesterId = "juanid"
  params.requesterName = "Juan Tamad"
  params
#TODO
sampleGetUsersResponse = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.listUsers = []
  a = {}
  a.id = "juanid"
  a.external_id = "userjuan"
  a.name = "Juan Tamad"
  a.role = "MODERATOR"
  a.pin = 12345
  a.welcome_message = "Welcome Juan"
  a.logout_url = "http://www.example.com"
  a.avatar_url = "http://www.example.com/avatar.png"
  a.is_presenter = true
  a.status = {}
  a.status.hand_raised = false
  a.status.muted = false
  a.status.locked = false
  a.status.talking = false
  a.caller_id = {}
  a.caller_id.name = "Juan Tamad"
  a.caller_id.number = "011-63-917-555-1234"
  a.media_streams = []
  one = {}
  one.media_type = "audio"
  one.uri = "http://cdn.bigbluebutton.org/stream/a1234"
  one.metadata = {}
  one.metadata.foo = "bar"
  two = {}
  two.media_type = "video"
  two.uri = "http://cdn.bigbluebutton.org/stream/v1234"
  two.metadata = {}
  two.metadata.foo = "bar"
  three = {}
  three.media_type = "screen"
  three.uri = "http://cdn.bigbluebutton.org/stream/s1234"
  three.metadata = {}
  three.metadata.foo = "bar"
  a.media_streams[0] = one
  a.media_streams[1] = two
  a.media_streams[2] = three
  a.metadata = {}
  a.metadata.student_id = "54321"
  a.metadata.program = "engineering"
  params.listUsers[0] = a
  params
#TODO

#Users testing

#Media streams testing

#TODO must be either audio/video/screen
sampleRaiseUserHandRequest = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.raise = true
  params.requesterId = "juanid"
  params.requesterName = "Juan Tamad"
  params
#TODO
sampleUserRaisedHandEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.raise = true
  params.requesterId = "juanid"
  params.requesterName = "Juan Tamad"
  params
#TODO
sampleAssignedPresenterRequest = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.presenterId = "user1"
  params.presenterName = "Guga"
  params.assignedById = "user2"
  params.assignedByName = "Juan"
  params
#TODO
samplePresenterAssignedEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.presenterId = "user1"
  params.presenterName = "Guga"
  params.assignedById = "user2"
  params.assignedByName = "Juan"
  params
#TODO
sampleMuteUserRequest = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.userId = "user1"
  params.userName = "Guga"
  params.requesterId = "user2"
  params.requesterName = "Juan"
  params.mute = true
  params
#TODO
sampleMuteUserRequestEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.userId = "user1"
  params.userName = "Guga"
  params.requesterId = "user2"
  params.requesterName = "Juan"
  params.mute = true
  params
#TODO

#feb12
sampleMuteVoiceUserRequest = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.userId = "user1"
  params.userName = "Guga"
  params.mute = true
  params.freeSWITCH_IPv4 = "192.168.0.166" #// had to change - to _
  params.conference_Name = "72382" #// had to change - to _
  params.conference_Unique_ID = "480d3f7c-224f-11e0-ae04-fbe97e271da0" #// had to change - to _
  params.conference_member_id = "1"
  params
#TODO
sampleVoiceUserMutedEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.userId = "user1"
  params.userName = "Guga"
  params.mute = true
  params.freeSWITCH_IPv4 = "192.168.0.166" #// had to change - to _
  params.conference_Name = "72382" #// had to change - to _
  params.conference_Unique_ID = "480d3f7c-224f-11e0-ae04-fbe97e271da0" #// had to change - to _
  params.conference_member_id = "1"
  params
#TODO
sampleUserMutedEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.userId = "user1"
  params.userName = "Guga"
  params.mute = true
  params
#TODO

#TODO
#TODO make it one of video/ / ..
sampleUserPublishStreamResponse = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.userId = "user1"
  params.userName = "Guga"
  params.channelsReply = "apps_channel"
  params.correlationId = "abc"
  params.mediaType = "video"
  params.metadataFoo = "bar"
  params.uri = "http://cdn.bigbluebutton.org/stream/v1234"
  params
#TODO
#TODO make it one of video/ / ..

#intro to new tests for ""
sampleUserPublishStreamResponse__forNada = ->
  params = {}
  params.channelsDestination = ""
  params.meetingName = ""
  params.meetingId = ""
  params.sessionId = ""
  params.source = ""
  params.userId = ""
  params.userName = ""
  params.correlationId = ""
  params.mediaType = ""
  params.metadataFoo = ""
  params.uri = ""
  params

#intro to new tests for ""

#Check if all parameters that were assigned values in sample***()
#have been checked for not being null/""/undefined
samplePublishedStreamEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.userId = "user1"
  params.userName = "Guga"
  params.channelsReply = "apps_channel"
  params.mediaType = "video"
  params.metadataFoo = "bar"
  params.uri = "http://cdn.bigbluebutton.org/stream/v1234"
  params
#TODO
#TODO make it one of video/ / ..
samplePublishedStreamEvent__forNada = ->
  params = {}
  params.channelsDestination = ""
  params.meetingName = ""
  params.meetingId = ""
  params.sessionId = ""
  params.source = ""
  params.userId = ""
  params.userName = ""
  params.mediaType = ""
  params.metadataFoo = ""
  params.uri = ""
  params

#Check if all parameters that were assigned values in sample***()
#have been checked for not being null/""/undefined
sampleUserPublishedStreamEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.userId = "user1"
  params.userName = "Guga"
  params.channelsReply = "apps_channel"
  params.mediaType = "video"
  params.metadataFoo = "bar"
  params.uri = "http://cdn.bigbluebutton.org/stream/v1234"
  params
#TODO
#TODO make it one of video/ / ..
sampleUnpublishedStreamEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.userId = "user1"
  params.userName = "Guga"
  params.channelsReply = "apps_channel"
  params.mediaType = "video"
  params.metadataFoo = "bar"
  params.uri = "http://cdn.bigbluebutton.org/stream/v1234"
  params
#TODO
#TODO make it one of video/ / ..
sampleUserUnpublishedStreamEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.userId = "user1"
  params.userName = "Guga"
  params.channelsReply = "apps_channel" #TODO -do i need this?
  params.mediaType = "video"
  params.metadataFoo = "bar"
  params.uri = "http://cdn.bigbluebutton.org/stream/v1234"
  params
#TODO
#TODO make it one of video/ / ..
samplePublicChatMessageEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.messageCorrelationId = "user1-msg1"
  params.messageTimestamp = "2013-12-23T08:50Z" #TODO
  params.messageFromId = "user1"
  params.messageFromName = "Richard"
  params.messageText = "Hello world!"
  params.messageLang = "en_US"
  params.messageColor = 16711680
  params.messageSize = 14
  params.messageFontType = "Arial"
  params
#TODO
#TODO from list of lang options
sampleBroadcastPublicChatMessageEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.messageCorrelationId = "user1-msg1"
  params.messageUserTimestamp = "2013-12-23T08:50Z" #TODO
  params.messageFromId = "user1"
  params.messageFromName = "Richard"
  params.messageText = "Hello world!"
  params.messageLang = "en_US"
  params.messageColor = 16711680
  params.messageSize = 14
  params.messageFontType = "Arial"
  params.messageId = "msg1234"
  params.messageServerTimestamp = "2013-12-23T08:50Z" #TODO
  params.translations = []
  a = {}
  a.lang = "es_LA"
  a.text = "Hola Mundo!"
  params.translations[0] = a
  params
#TODO
#TODO from list of lang options

#Translations testing
#TODO is one of the lang options
samplePrivateChatMessageEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.messageCorrelationId = "user1-msg1"
  params.messageTimestamp = "2013-12-23T08:50Z" #TODO
  params.messageFromId = "user1"
  params.messageFromName = "Richard"
  params.messageToId = "user2"
  params.messageToName = "Guga"
  params.messageText = "Hello world!"
  params.messageLang = "en_US"
  params.messageColor = 16711680
  params.messageSize = 14
  params.messageFontType = "Arial"
  params
#TODO
#TODO from list of lang options
sampleBroadcastPrivateChatMessageEvent = ->
  params = {}
  params.channelsDestination = "apps_channel"
  params.meetingName = "someMeetingName"
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.source = "bbb-web"
  params.messageCorrelationId = "user1-msg1"
  params.messageUserTimestamp = "2013-12-23T08:50Z" #TODO
  params.messageFromId = "user1"
  params.messageFromName = "Richard"
  params.messageText = "Hello world!"
  params.messageLang = "en_US"
  params.messageColor = 16711680
  params.messageSize = 14
  params.messageFontType = "Arial"
  params.messageId = "msg1234"
  params.messageServerTimestamp = "2013-12-23T08:50Z" #TODO
  params.translations = []
  a = {}
  a.lang = "es_LA"
  a.text = "Hola Mundo!"
  params.translations[0] = a
  params
#TODO
#TODO from list of lang options

#Translations testing
#TODO is one of the lang options
sampleBroadcastWhiteBoardDrawEvent = ->
  params = {}
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.channels = "someChannels"
  params.source = "someSource"
  params.meetingName = "someMeetingName"
  params.whiteboardId = "someWhiteBoardId"
  params.shapeId = "someShapeId"
  params.shapeType = "someShapeType"
  
  # params.timestamp="someTimestamp";
  params.firstX = 0.5
  params.firstY = 0.5
  params.lastX = 0.5
  params.lastY = 0.5
  params.byId = "someById"
  params.byName = "someByName"
  params.background_visible = true
  params.background_color = 0
  params.background_alpha = 1
  params.pTimestamp = "someTimestamp"
  params.zorder = 100
  params.text = "He"
  params.style = "Arial"
  params.color = 0
  params.size = 18
  params
#TODO must check if it's a real date
#TODO must check if it's a real date
sampleBroadcastWhiteBoardDrawEvent__Nada = ->
  params = []
  params.meetingId = null
  params.sessionId = null
  params.channels = null
  params.source = null
  params.meetingName = null
  params.whiteboardId = null
  params.shapeId = null
  params.shapeType = null
  params.firstX = null
  params.firstY = null
  params.lastX = null
  params.lastY = null
  params.byId = null
  params.byName = null
  params.background_visible = null
  params.background_color = null
  params.background_alpha = null
  params.pTimestamp = null
  params.zorder = null
  params.text = null
  params.style = null
  params.color = null
  params.size = null
  params

#Check if all parameters that were assigned values in sample***()
#have been checked for not being null/""/undefined
sampleBroadcastWhiteBoardUpdateEvent = ->
  params = {}
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.channels = "someChannels"
  params.source = "someSource"
  params.meetingName = "someMeetingName"
  params.whiteboardId = "someWhiteBoardId"
  params.shapeId = "someShapeId"
  params.shapeType = "someShapeType"
  
  # params.timestamp="someTimestamp";
  params.firstX = 0.5
  params.firstY = 0.5
  params.lastX = 0.5
  params.lastY = 0.5
  params.byId = "someById"
  params.byName = "someByName"
  params.background_visible = true
  params.background_color = 0
  params.background_alpha = 1
  params.pTimestamp = "someTimestamp"
  params.zorder = 100
  params.text = "He"
  params.style = "Arial"
  params.color = 0
  params.size = 18
  params
#TODO must check if it's a real date
#TODO must check if it's a real date
sampleWhiteboardCursorEvent = ->
  params = {}
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.channels = "someChannels"
  params.source = "someSource"
  params.meetingName = "someMeetingName"
  params.whiteboardId = "someWhiteBoardId"
  params.cursorX = 0.54
  params.cursorY = 0.98
  params.byId = "someById"
  params.byName = "someByName"
  params
#TODO must check if it's a real date
sampleWhiteboardCursorEvent__Nada = ->
  params = []
  params.meetingId = null
  params.sessionId = null
  params.channels = null
  params.source = null
  params.meetingName = null
  params.whiteboardId = null
  params.cursorX = null
  params.cursorY = null
  params.byId = null
  params.byName = null
  params

#Check if all parameters that were assigned values in sample***()
#have been checked for not being null/""/undefined
sampleBroadcastWhiteboardCursorEvent = ->
  params = {}
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.channels = "someChannels"
  params.source = "someSource"
  params.meetingName = "someMeetingName"
  params.whiteboardId = "someWhiteBoardId"
  params.cursorX = 0.54
  params.cursorY = 0.98
  params.byId = "someById"
  params.byName = "someByName"
  params
#TODO must check if it's a real date
sampleBroadcastWhiteboardCursorEvent__Nada = ->
  params = []
  params.meetingId = null
  params.sessionId = null
  params.channels = null
  params.source = null
  params.meetingName = null
  params.whiteboardId = null
  params.cursorX = null
  params.cursorY = null
  params.byId = null
  params.byName = null
  params

#Check if all parameters that were assigned values in sample***()
#have been checked for not being null/""/undefined
sampleSharePresentationEvent = ->
  params = {}
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.channels = "someChannels"
  params.source = "someSource"
  params.meetingName = "someMeetingName"
  params.presentationId = "pres-123"
  params.presentationName = "Flight School"
  params.byId = "someById"
  params.byName = "someByName"
  params
#TODO must check if it's a real date
sampleSharePresentationEvent__Nada = ->
  params = []
  params.meetingId = null
  params.sessionId = null
  params.channels = null
  params.source = null
  params.meetingName = null
  params.presentationId = null
  params.presentationName = null
  params.byId = null
  params.byName = null
  params

#Check if all parameters that were assigned values in sample***()
#have been checked for not being null/""/undefined
sampleBroadcastSharePresentationEvent = ->
  params = {}
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.channels = "someChannels"
  params.source = "someSource"
  params.meetingName = "someMeetingName"
  params.presentationId = "pres-123"
  params.presentationName = "Flight School"
  params.pageId = "pres-123/1"
  params.uri = "http://www.example.com/presentations/pres-123/1.swf"
  params.xOffset = 0
  params.yOffset = 0
  params.widthRatio = 100
  params.heightRatio = 100
  params.byId = "someById"
  params.byName = "someByName"
  params
#TODO must check if it's a real date
sampleBroadcastSharePresentationEvent__Nada = ->
  params = []
  params.meetingId = null
  params.sessionId = null
  params.channels = null
  params.source = null
  params.meetingName = null
  params.presentationId = null
  params.presentationName = null
  params.pageId = null
  params.uri = null
  params.xOffset = null
  params.yOffset = null
  params.widthRatio = null
  params.heightRatio = null
  params.byId = null
  params.byName = null
  params

#Check if all parameters that were assigned values in sample***()
#have been checked for not being null/""/undefined
sampleResizeAndMovePagePresentationEvent = ->
  params = {}
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.channels = "someChannels"
  params.source = "someSource"
  params.meetingName = "someMeetingName"
  params.presentationId = "pres-123"
  params.presentationName = "Flight School"
  params.pageId = "pres-123/1"
  params.uri = "http://www.example.com/presentations/pres-123/1.swf"
  params.xOffset = 0
  params.yOffset = 0
  params.widthRatio = 100
  params.heightRatio = 100
  params.byId = "someById"
  params.byName = "someByName"
  params
#TODO must check if it's a real date
sampleResizeAndMovePagePresentationEvent__Nada = ->
  params = []
  params.meetingId = null
  params.sessionId = null
  params.channels = null
  params.source = null
  params.meetingName = null
  params.presentationId = null
  params.presentationName = null
  params.pageId = null
  params.uri = null
  params.xOffset = null
  params.yOffset = null
  params.widthRatio = null
  params.heightRatio = null
  params.byId = null
  params.byName = null
  params

#Check if all parameters that were assigned values in sample***()
#have been checked for not being null/""/undefined
sampleBroadcastResizeAndMovePagePresentationEvent = ->
  params = {}
  params.meetingId = "someMeetingId"
  params.sessionId = "someSessionId"
  params.channels = "someChannels"
  params.source = "someSource"
  params.meetingName = "someMeetingName"
  params.presentationId = "pres-123"
  params.presentationName = "Flight School"
  params.pageId = "pres-123/1"
  params.uri = "http://www.example.com/presentations/pres-123/1.swf"
  params.xOffset = 0
  params.yOffset = 0
  params.widthRatio = 100
  params.heightRatio = 100
  params.byId = "someById"
  params.byName = "someByName"
  params
#TODO must check if it's a real date
sampleBroadcastResizeAndMovePagePresentationEvent__Nada = ->
  params = []
  params.meetingId = null
  params.sessionId = null
  params.channels = null
  params.source = null
  params.meetingName = null
  params.presentationId = null
  params.presentationName = null
  params.pageId = null
  params.uri = null
  params.xOffset = null
  params.yOffset = null
  params.widthRatio = null
  params.heightRatio = null
  params.byId = null
  params.byName = null
  params
exports.testWhiteboardDraw = (test) ->
  event_type = library.WHITEBOARD_DRAW_EVENT
  sampleWhiteBoardDrawEvent = ->
    params = {}
    params.meetingId = "someMeetingId"
    params.sessionId = "someSessionId"
    params.channels = "someChannels"
    params.source = "someSource"
    params.meetingName = "someMeetingName"
    params.whiteboardId = "someWhiteBoardId"
    params.shapeId = "someShapeId"
    params.shapeType = "someShapeType"
    params.firstX = 0.5
    params.firstY = 0.5
    params.lastX = 0.5
    params.lastY = 0.5
    params.lineColor = 0
    params.lineWeight = 18
    params.lineType = "solid" #TODO choose between "solid", ...
    params.byId = "someById"
    params.byName = "someByName"
    params.background_visible = true
    params.background_color = 0
    params.background_alpha = 1
    params.square = false
    params

  params = sampleWhiteBoardDrawEvent()
  testingJson = undefined
  library.whiteboardDrawEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    test.done()
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.whiteboard_id
  extras.isString testValue.payload.shape_id
  extras.isString testValue.payload.shape_type
  extras.isNumber testValue.payload.data.coordinate.first_x
  extras.isNumber testValue.payload.data.coordinate.first_y
  extras.isNumber testValue.payload.data.coordinate.last_x
  extras.isNumber testValue.payload.data.coordinate.last_y
  extras.isString testValue.payload.data.line.line_type
  extras.isNumber testValue.payload.data.line.color
  extras.isNumber testValue.payload.data.weight
  extras.isString testValue.payload.by.id
  extras.isString testValue.payload.by.name
  extras.isBoolean testValue.payload.data.background.visible
  extras.isNumber testValue.payload.data.background.color
  extras.isNumber testValue.payload.data.background.alpha
  extras.isBoolean testValue.payload.data.square
  test.done()
  return

exports.testWhiteboardUpdate = (test) ->
  event_type = library.WHITEBOARD_UPDATE_EVENT
  params = sampleWhiteBoardUpdateEvent()
  testingJson = undefined
  library.whiteboardUpdateEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    test.done()
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.whiteboard_id
  extras.isString testValue.payload.shape_id
  extras.isString testValue.payload.shape_type
  extras.isNumber testValue.payload.data.coordinate.first_x
  extras.isNumber testValue.payload.data.coordinate.first_y
  extras.isNumber testValue.payload.data.coordinate.last_x
  extras.isNumber testValue.payload.data.coordinate.last_y
  extras.isString testValue.payload.data.line.line_type
  extras.isNumber testValue.payload.data.line.color
  extras.isNumber testValue.payload.data.weight
  extras.isString testValue.payload.by.id
  extras.isString testValue.payload.by.name
  extras.isBoolean testValue.payload.data.background.visible
  extras.isNumber testValue.payload.data.background.color
  extras.isNumber testValue.payload.data.background.alpha
  extras.isBoolean testValue.payload.data.square
  test.done()
  return

exports.testCreateMeetingRequest = (test) ->
  event_type = library.CREATE_MEETING_REQUEST
  params = sampleCreateMeetingRequestEvent()
  testingJson = undefined
  library.createMeetingRequestToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    test.done()
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
    test.done()
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.reply.to
  extras.isString testValue.header.reply.correlation_id
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting_descriptor.name
  extras.isString testValue.payload.meeting_descriptor.external_id
  extras.isBoolean testValue.payload.meeting_descriptor.record
  extras.isString testValue.payload.meeting_descriptor.welcome_message
  extras.isString testValue.payload.meeting_descriptor.logout_url
  extras.isString testValue.payload.meeting_descriptor.avatar_url
  extras.isNumber testValue.payload.meeting_descriptor.max_users
  extras.isNumber testValue.payload.meeting_descriptor.duration.length_in_minutes
  extras.isBoolean testValue.payload.meeting_descriptor.duration.allow_extend
  extras.isNumber testValue.payload.meeting_descriptor.duration.max_minutes
  extras.isNumber testValue.payload.meeting_descriptor.voice_conference.pin
  extras.isNumber testValue.payload.meeting_descriptor.voice_conference.number
  isArray = testValue.payload.meeting_descriptor.phone_numbers.constructor.toString().indexOf("Array")
  test.notEqual -1, isArray, "\"phone_numbers\" does not look like an array"
  if isArray
    contacts = testValue.payload.meeting_descriptor.phone_numbers
    for index of contacts
      aContact = contacts[index]
      extras.isNotUndefined aContact.number
      extras.isNotNull aContact.number
      test.notEqual "", aContact.number
      extras.isString aContact.number
      extras.isNotUndefined aContact.description
      extras.isNotNull aContact.description
      test.notEqual "", aContact.description
      extras.isString aContact.description
  extras.isString testValue.payload.meeting_descriptor.metadata.customer_id
  extras.isString testValue.payload.meeting_descriptor.metadata.customer_name
  test.done()
  return

exports.testCreateMeetingResponse = (test) ->
  event_type = library.CREATE_MEETING_RESPONSE
  sampleCreateMeetingResponseEvent = ->
    params = {}
    params.channelsDestination = "someDesChannel"
    params.meetingName = "someMeetingName"
    params.meetingId = "someMeetingId"
    params.sessionId = "someSessionId"
    params.resultSuccess = true
    params.resultMessage = "Success"
    params.correlationId = "someId"
    #    params.timestamp
    params.source = "someSource"
    params.descriptorName = "English 101"
    params.descriptorExternalId = "english_101"
    params.descriptorRecord = true
    params.descriptorWelcome = "Welcome to English 101"
    params.descriptorLogout = "http://www.bigbluebutton.org"
    params.descriptorAvatar = "http://www.gravatar.com/bigbluebutton"
    params.descriptorMaxUsers = 20
    params.durationLength = 120
    params.durationAllowExtend = false
    params.durationMaxMinutes = 240
    params.voiceConfPin = 123456
    params.voiceConfNumber = 85115
    
    params.phoneNumbers = []
    a =
      number: "613-520-7600"
      description: "Ottawa"

    b =
      number: "1-888-555-7890"
      description: "NA Toll-Free"

    params.phoneNumbers[0] = a
    params.phoneNumbers[1] = b
    params.metadataCustomerId = "acme-customer"
    params.metadataCustomerName = "ACME"
    params

  params = sampleCreateMeetingResponseEvent()
  testingJson = undefined
  library.createMeetingResponseToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.destination.correlation_id
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isBoolean testValue.payload.result.success
  extras.isString testValue.payload.result.message
  extras.isString testValue.payload.meeting_descriptor.name
  extras.isString testValue.payload.meeting_descriptor.external_id
  extras.isBoolean testValue.payload.meeting_descriptor.record
  extras.isString testValue.payload.meeting_descriptor.welcome_message
  extras.isString testValue.payload.meeting_descriptor.logout_url
  extras.isString testValue.payload.meeting_descriptor.avatar_url
  extras.isNumber testValue.payload.meeting_descriptor.max_users
  extras.isNumber testValue.payload.meeting_descriptor.duration.length_in_minutes
  extras.isBoolean testValue.payload.meeting_descriptor.duration.allow_extend
  extras.isNumber testValue.payload.meeting_descriptor.duration.max_minutes
  extras.isNumber testValue.payload.meeting_descriptor.voice_conference.pin
  extras.isNumber testValue.payload.meeting_descriptor.voice_conference.number
  isArray = testValue.payload.meeting_descriptor.phone_numbers.constructor.toString().indexOf("Array")
  test.notEqual -1, isArray, "\"phone_numbers\" does not look like an array"
  if isArray
    contacts = testValue.payload.meeting_descriptor.phone_numbers
    for index of contacts
      aContact = contacts[index]
      extras.isNotUndefined aContact.number
      extras.isNotNull aContact.number
      test.notEqual "", aContact.number
      extras.isString aContact.number
      extras.isNotUndefined aContact.description
      extras.isNotNull aContact.description
      test.notEqual "", aContact.description
      extras.isString aContact.description
  extras.isString testValue.payload.meeting_descriptor.metadata.customer_id
  extras.isString testValue.payload.meeting_descriptor.metadata.customer_name
  test.done()
  return

exports.testMeetingCreatedEvent = (test) ->
  event_type = library.MEETING_CREATED_EVENT
  params = sampleMeetingCreatedEvent()
  testingJson = undefined
  library.meetingCreatedEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.meeting_descriptor.name
  extras.isString testValue.payload.meeting_descriptor.external_id
  extras.isBoolean testValue.payload.meeting_descriptor.record
  extras.isString testValue.payload.meeting_descriptor.welcome_message
  extras.isString testValue.payload.meeting_descriptor.logout_url
  extras.isString testValue.payload.meeting_descriptor.avatar_url
  extras.isNumber testValue.payload.meeting_descriptor.max_users
  extras.isNumber testValue.payload.meeting_descriptor.duration.length_in_minutes
  extras.isBoolean testValue.payload.meeting_descriptor.duration.allow_extend
  extras.isNumber testValue.payload.meeting_descriptor.duration.max_minutes
  extras.isNumber testValue.payload.meeting_descriptor.voice_conference.pin
  extras.isNumber testValue.payload.meeting_descriptor.voice_conference.number
  isArray = testValue.payload.meeting_descriptor.phone_numbers.constructor.toString().indexOf("Array")
  test.notEqual -1, isArray, "\"phone_numbers\" does not look like an array"
  if isArray
    contacts = testValue.payload.meeting_descriptor.phone_numbers
    for index of contacts
      aContact = contacts[index]
      extras.isNotUndefined aContact.number
      extras.isNotNull aContact.number
      test.notEqual "", aContact.number
      extras.isString aContact.number
      extras.isNotUndefined aContact.description
      extras.isNotNull aContact.description
      test.notEqual "", aContact.description
      extras.isString aContact.description
  extras.isString testValue.payload.meeting_descriptor.metadata.customer_id
  extras.isString testValue.payload.meeting_descriptor.metadata.customer_name
  test.done()
  return

exports.testEndMeetingRequest = (test) ->
  event_type = library.END_MEETING_REQUEST
  params = sampleEndMeetingRequest()
  testingJson = undefined
  library.endMeetingRequestToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.reply.to
  extras.isString testValue.header.reply.correlation_id
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isBoolean testValue.payload.force
  extras.isBoolean testValue.payload.warn_users
  test.done()
  return

exports.testEndMeetingResponse = (test) ->
  event_type = library.END_MEETING_RESPONSE
  params = sampleEndMeetingResponse()
  testingJson = undefined
  library.endMeetingResponseToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.destination.correlation_id
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isBoolean testValue.payload.result.success
  extras.isString testValue.payload.result.message
  test.done()
  return

exports.testEndMeetingWarning = (test) ->
  event_type = library.END_MEETING_WARNING_EVENT
  params = sampleEndMeetingWarning()
  testingJson = undefined
  library.endMeetingWarningToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isNumber testValue.payload.time_left
  extras.isString testValue.payload.time_unit
  extras.isBoolean testValue.payload.allow_extend
  test.done()
  return

exports.testMeetingEndedEvent = (test) ->
  event_type = library.MEETING_ENDED_EVENT
  params = sampleMeetingEndedEvent()
  testingJson = undefined
  library.meetingEndedEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  test.done()
  return

exports.testRegisterUserRequest = (test) ->
  event_type = library.REGISTER_USER_REQUEST
  params = sampleRegisterUserRequest()
  testingJson = undefined
  library.registerUserRequestToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.reply.to
  extras.isString testValue.header.reply.correlation_id
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user_descriptor.external_id
  extras.isString testValue.payload.user_descriptor.name
  extras.isString testValue.payload.user_descriptor.role
  extras.isNumber testValue.payload.user_descriptor.pin
  extras.isString testValue.payload.user_descriptor.welcome_message
  extras.isString testValue.payload.user_descriptor.logout_url
  extras.isString testValue.payload.user_descriptor.avatar_url
  extras.isString testValue.payload.user_descriptor.metadata.student_id
  extras.isString testValue.payload.user_descriptor.metadata.program
  test.done()
  return

exports.testRegisterUserResponse = (test) ->
  event_type = library.REGISTER_USER_RESPONSE
  params = sampleRegisterUserResponse()
  testingJson = undefined
  library.registerUserResponseToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.destination.correlation_id
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user_descriptor.external_id
  extras.isString testValue.payload.user_descriptor.name
  extras.isString testValue.payload.user_descriptor.role
  extras.isNumber testValue.payload.user_descriptor.pin
  extras.isString testValue.payload.user_descriptor.welcome_message
  extras.isString testValue.payload.user_descriptor.logout_url
  extras.isString testValue.payload.user_descriptor.avatar_url
  extras.isString testValue.payload.user_descriptor.metadata.student_id
  extras.isString testValue.payload.user_descriptor.metadata.program
  extras.isString testValue.payload.user_token
  extras.isBoolean testValue.payload.result.success
  extras.isString testValue.payload.result.message
  test.done()
  return

exports.testUserRegisteredEvent = (test) ->
  event_type = library.USER_REGISTERED_EVENT
  params = sampleUserRegisteredEvent()
  testingJson = undefined
  library.userRegisteredEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user_descriptor.external_id
  extras.isString testValue.payload.user_descriptor.name
  extras.isString testValue.payload.user_descriptor.role
  extras.isNumber testValue.payload.user_descriptor.pin
  extras.isString testValue.payload.user_descriptor.welcome_message
  extras.isString testValue.payload.user_descriptor.logout_url
  extras.isString testValue.payload.user_descriptor.avatar_url
  extras.isString testValue.payload.user_descriptor.metadata.student_id
  extras.isString testValue.payload.user_descriptor.metadata.program
  test.done()
  return

exports.testUserJoinRequest = (test) ->
  event_type = library.USER_JOIN_REQUEST
  params = sampleUserJoinRequest()
  testingJson = undefined
  library.userJoinRequestToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.header.reply.to
  extras.isString testValue.header.reply.correlation_id
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.token
  test.done()
  return

exports.testUserJoinResponse = (test) ->
  event_type = library.USER_JOIN_RESPONSE
  params = sampleUserJoinResponse()
  testingJson = undefined
  library.userJoinResponseToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.destination.correlation_id
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isBoolean testValue.payload.result.success
  extras.isString testValue.payload.result.message
  extras.isString testValue.payload.user_descriptor.external_id
  extras.isString testValue.payload.user_descriptor.name
  extras.isString testValue.payload.user_descriptor.role
  extras.isNumber testValue.payload.user_descriptor.pin
  extras.isString testValue.payload.user_descriptor.welcome_message
  extras.isString testValue.payload.user_descriptor.logout_url
  extras.isString testValue.payload.user_descriptor.avatar_url
  extras.isString testValue.payload.user_descriptor.metadata.student_id
  extras.isString testValue.payload.user_descriptor.metadata.program
  test.done()
  return

exports.testUserJoinedEvent = (test) ->
  event_type = library.USER_JOINED_EVENT
  params = sampleUserJoinedEvent()
  testingJson = undefined
  library.userJoinedEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user.id
  extras.isString testValue.payload.user.external_id
  extras.isString testValue.payload.user.name
  extras.isString testValue.payload.user.role
  extras.isNumber testValue.payload.user.pin
  extras.isString testValue.payload.user.welcome_message
  extras.isString testValue.payload.user.logout_url
  extras.isString testValue.payload.user.avatar_url
  extras.isBoolean testValue.payload.user.is_presenter
  extras.isBoolean testValue.payload.user.status.hand_raised
  extras.isBoolean testValue.payload.user.status.muted
  extras.isBoolean testValue.payload.user.status.locked
  extras.isBoolean testValue.payload.user.status.talking
  extras.isString testValue.payload.user.caller_id.name
  extras.isString testValue.payload.user.caller_id.number
  isArray = testValue.payload.user.media_streams.constructor.toString().indexOf("Array")
  test.notEqual -1, isArray, "\"media_streams\" does not look like an array"
  if isArray
    streams = testValue.payload.user.media_streams
    for index of streams
      aStream = streams[index]
      extras.isNotUndefined aStream.media_type
      extras.isNotNull aStream.media_type
      test.notEqual "", aStream.media_type
      extras.isString aStream.media_type
      extras.isNotUndefined aStream.uri
      extras.isNotNull aStream.uri
      test.notEqual "", aStream.uri
      extras.isString aStream.uri
      extras.isNotUndefined aStream.metadata
      extras.isNotNull aStream.metadata
      extras.isObject aStream.metadata
      extras.isNotUndefined aStream.metadata.foo
      extras.isNotNull aStream.metadata.foo
      test.notEqual "", aStream.metadata.foo
      extras.isString aStream.metadata.foo
  extras.isString testValue.payload.user.metadata.student_id
  extras.isString testValue.payload.user.metadata.program
  test.done()
  return

exports.testUserLeftEvent = (test) ->
  event_type = library.USER_LEFT_EVENT
  params = sampleUserLeftEvent()
  testingJson = undefined
  library.userLeftEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user.id
  extras.isString testValue.payload.user.name
  test.done()
  return

exports.testGetUsersRequest = (test) ->
  event_type = library.GET_USERS_REQUEST
  params = sampleGetUsersRequest()
  testingJson = undefined
  library.getUsersRequestToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user.id
  extras.isString testValue.payload.user.name
  extras.isString testValue.header.reply.to
  extras.isString testValue.header.reply.correlation_id
  extras.isString testValue.payload.requester.id
  extras.isString testValue.payload.requester.name
  test.done()
  return

exports.testGetUsersResponse = (test) ->
  event_type = library.GET_USERS_RESPONSE
  params = sampleGetUsersResponse()
  testingJson = undefined
  library.getUsersResponseToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  isArray = testValue.payload.users.constructor.toString().indexOf("Array")
  test.notEqual -1, isArray, "\"users\" does not look like an array"
  if isArray
    users = testValue.payload.users
    for index of users
      aUser = users[index]
      extras.isNotUndefined aUser.id
      extras.isNotNull aUser.id
      test.notEqual "", aUser.id
      extras.isString aUser.id
      extras.isNotUndefined aUser.external_id
      extras.isNotNull aUser.external_id
      test.notEqual "", aUser.external_id
      extras.isString aUser.external_id
      extras.isNotUndefined aUser.name
      extras.isNotNull aUser.name
      test.notEqual "", aUser.name
      extras.isString aUser.name
      extras.isNotUndefined aUser.role
      extras.isNotNull aUser.role
      test.notEqual "", aUser.role
      extras.isString aUser.role
      extras.isNotUndefined aUser.pin
      extras.isNotNull aUser.pin
      extras.isNumber aUser.pin
      extras.isNotUndefined aUser.welcome_message
      extras.isNotNull aUser.welcome_message
      test.notEqual "", aUser.welcome_message
      extras.isString aUser.welcome_message
      extras.isNotUndefined aUser.logout_url
      extras.isNotNull aUser.logout_url
      test.notEqual "", aUser.logout_url
      extras.isString aUser.logout_url
      extras.isNotUndefined aUser.avatar_url
      extras.isNotNull aUser.avatar_url
      test.notEqual "", aUser.avatar_url
      extras.isString aUser.avatar_url
      extras.isNotUndefined aUser.is_presenter
      extras.isNotNull aUser.is_presenter
      extras.isBoolean aUser.is_presenter
      extras.isNotUndefined aUser.status
      extras.isNotNull aUser.status
      extras.isObject aUser.status
      extras.isNotUndefined aUser.status.hand_raised
      extras.isNotNull aUser.status.hand_raised
      extras.isBoolean aUser.status.hand_raised
      extras.isNotUndefined aUser.status.muted
      extras.isNotNull aUser.status.muted
      extras.isBoolean aUser.status.muted
      extras.isNotUndefined aUser.status.locked
      extras.isNotNull aUser.status.locked
      extras.isBoolean aUser.status.locked
      extras.isNotUndefined aUser.status.talking
      extras.isNotNull aUser.status.talking
      extras.isBoolean aUser.status.talking
      extras.isNotUndefined aUser.caller_id
      extras.isNotNull aUser.caller_id
      extras.isObject aUser.caller_id
      extras.isNotUndefined aUser.caller_id.name
      extras.isNotNull aUser.caller_id.name
      test.notEqual "", aUser.caller_id.name
      extras.isString aUser.caller_id.name
      extras.isNotUndefined aUser.caller_id.number
      extras.isNotNull aUser.caller_id.number
      test.notEqual "", aUser.caller_id.number
      extras.isString aUser.caller_id.number
      isArrayStreams = testValue.payload.users[index].media_streams.constructor.toString().indexOf("Array")
      test.notEqual -1, isArrayStreams, "\"media_streams\" does not look like an array"
      if isArrayStreams
        streams = testValue.payload.users[index].media_streams
        for i of streams
          aStream = streams[i]
          extras.isNotUndefined aStream.media_type
          extras.isNotNull aStream.media_type
          test.notEqual "", aStream.media_type
          extras.isString aStream.media_type
          extras.isNotUndefined aStream.uri
          extras.isNotNull aStream.uri
          test.notEqual "", aStream.uri
          extras.isString aStream.uri
          extras.isNotUndefined aStream.metadata
          extras.isNotNull aStream.metadata
          extras.isObject aStream.metadata
          extras.isNotUndefined aStream.metadata.foo
          extras.isNotNull aStream.metadata.foo
          test.notEqual "", aStream.metadata.foo
          extras.isString aStream.metadata.foo
  test.done()
  return

exports.testRaiseUserHandRequest = (test) ->
  event_type = library.RAISE_USER_HAND_REQUEST
  params = sampleRaiseUserHandRequest()
  testingJson = undefined
  library.raiseUserHandRequestToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isBoolean testValue.payload.raise
  extras.isString testValue.payload.requester.id
  extras.isString testValue.payload.requester.name
  test.done()
  return

exports.testUserRaisedHandEvent = (test) ->
  event_type = library.USER_RAISED_HAND_EVENT
  params = sampleUserRaisedHandEvent()
  testingJson = undefined
  library.userRaisedHandEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isBoolean testValue.payload.raise
  extras.isString testValue.payload.requester.id
  extras.isString testValue.payload.requester.name
  test.done()
  return

exports.testAssignedPresenterRequest = (test) ->
  event_type = library.ASSIGN_PRESENTER_REQUEST
  params = sampleAssignedPresenterRequest()
  testingJson = undefined
  library.assignedPresenterRequestToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.presenter.id
  extras.isString testValue.payload.presenter.name
  extras.isString testValue.payload.assigned_by.id
  extras.isString testValue.payload.assigned_by.name
  test.done()
  return

exports.testPresenterAssignedEvent = (test) ->
  event_type = library.PRESENTER_ASSIGNED_EVENT
  params = samplePresenterAssignedEvent()
  testingJson = undefined
  library.presenterAssignedEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.presenter.id
  extras.isString testValue.payload.presenter.name
  extras.isString testValue.payload.assigned_by.id
  extras.isString testValue.payload.assigned_by.name
  test.done()
  return

exports.testMuteUserRequest = (test) ->
  event_type = library.MUTE_USER_REQUEST
  params = sampleMuteUserRequest()
  testingJson = undefined
  library.muteUserRequestToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user.id
  extras.isString testValue.payload.user.name
  extras.isString testValue.payload.requester.id
  extras.isString testValue.payload.requester.name
  extras.isBoolean testValue.payload.mute
  test.done()
  return

exports.testMuteUserRequestEvent = (test) ->
  event_type = library.MUTE_USER_REQUEST_EVENT
  params = sampleMuteUserRequestEvent()
  testingJson = undefined
  library.muteUserRequestEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user.id
  extras.isString testValue.payload.user.name
  extras.isString testValue.payload.requester.id
  extras.isString testValue.payload.requester.name
  extras.isBoolean testValue.payload.mute
  test.done()
  return

exports.testMuteVoiceUserRequest = (test) ->
  event_type = library.MUTE_VOICE_USER_REQUEST
  params = sampleMuteVoiceUserRequest()
  testingJson = undefined
  library.muteVoiceUserRequestToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user_metadata.id
  extras.isString testValue.payload.user_metadata.name
  extras.isBoolean testValue.payload.mute
  extras.isString testValue.payload.voice_metadata.FreeSWITCH_IPv4
  extras.isString testValue.payload.voice_metadata.Conference_Name
  extras.isString testValue.payload.voice_metadata.Conference_Unique_ID
  extras.isString testValue.payload.voice_metadata.conference_member_id
  test.done()
  return

exports.testVoiceUserMutedEvent = (test) ->
  event_type = library.VOICE_USER_MUTED_EVENT
  params = sampleVoiceUserMutedEvent()
  testingJson = undefined
  library.voiceUserMutedEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user_metadata.id
  extras.isString testValue.payload.user_metadata.name
  extras.isBoolean testValue.payload.mute
  extras.isString testValue.payload.voice_metadata.FreeSWITCH_IPv4
  extras.isString testValue.payload.voice_metadata.Conference_Name
  extras.isString testValue.payload.voice_metadata.Conference_Unique_ID
  extras.isString testValue.payload.voice_metadata.conference_member_id
  test.done()
  return

exports.testUserMutedEvent = (test) ->
  event_type = library.USER_MUTED_EVENT
  params = sampleUserMutedEvent()
  testingJson = undefined
  library.userMutedEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user.id
  extras.isString testValue.payload.user.name
  extras.isBoolean testValue.payload.mute
  test.done()
  return

exports.testUserPublishStreamRequest = (test) ->
  event_type = library.USER_PUBLISH_STREAM_REQUEST
  sampleUserPublishStreamRequest = ->
    params = {}
    params.channelsDestination = "apps_channel"
    params.meetingName = "someMeetingName"
    params.meetingId = "someMeetingId"
    params.sessionId = "someSessionId"
    params.source = "bbb-web"
    params.userId = "user1"
    params.userName = "Guga"
    params.channelsReply = "apps_channel"
    params.correlationId = "abc"
    params.mediaType = "video"
    params.metadataFoo = "bar"
    params

  params = sampleUserPublishStreamRequest()
  testingJson = undefined
  library.userPublishStreamRequestToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user.id
  extras.isString testValue.payload.user.name
  extras.isString testValue.header.reply.to
  extras.isString testValue.header.reply.correlation_id
  extras.isString testValue.payload.media.media_type
  extras.isString testValue.payload.media.metadata.foo
  test.done()
  return

exports.testUserPublishStreamResponse = (test) ->
  event_type = library.USER_PUBLISH_STREAM_RESPONSE
  params = sampleUserPublishStreamResponse()
  testingJson = undefined
  library.userPublishStreamResponseToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.destination.correlation_id
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user.id
  extras.isString testValue.payload.user.name
  extras.isString testValue.payload.media.media_type
  extras.isString testValue.payload.media.metadata.foo
  extras.isString testValue.payload.media.uri
  test.done()
  return

exports.testUserPublishStreamResponse__forNada = (test) ->
  params = sampleUserPublishStreamResponse__forNada()
  library.userPublishStreamResponseToJson params, ((text) ->
  ), (errors) ->
    test.equals Object.keys(params).length, errors.length
    return

  test.done()
  return

exports.testPublishedStreamEvent = (test) ->
  event_type = library.PUBLISHED_STREAM_EVENT
  params = samplePublishedStreamEvent()
  testingJson = undefined
  library.publishedStreamEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user.id
  extras.isString testValue.payload.user.name
  extras.isString testValue.payload.media.media_type
  extras.isString testValue.payload.media.metadata.foo
  extras.isString testValue.payload.media.uri
  test.done()
  return

exports.testPublishedStreamEvent__forNada = (test) ->
  params = samplePublishedStreamEvent__forNada()
  library.publishedStreamEventToJson params, ((text) ->
  ), (errors) ->
    test.equals Object.keys(params).length, errors.length
    return

  test.done()
  return

exports.testUserPublishedStreamEvent = (test) ->
  event_type = library.USER_PUBLISHED_STREAM_EVENT
  params = sampleUserPublishedStreamEvent()
  testingJson = undefined
  library.userPublishedStreamEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user.id
  extras.isString testValue.payload.user.name
  extras.isString testValue.payload.media.media_type
  extras.isString testValue.payload.media.metadata.foo
  extras.isString testValue.payload.media.uri
  test.done()
  return

exports.testUnpublishedStreamEvent = (test) ->
  event_type = library.UNPUBLISHED_STREAM_EVENT
  params = sampleUnpublishedStreamEvent()
  testingJson = undefined
  library.unpublishedStreamEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user.id
  extras.isString testValue.payload.user.name
  extras.isString testValue.payload.media.media_type
  extras.isString testValue.payload.media.metadata.foo
  extras.isString testValue.payload.media.uri
  test.done()
  return

exports.testUserUnpublishedStreamEvent = (test) ->
  event_type = library.USER_UNPUBLISHED_STREAM_EVENT
  params = sampleUserUnpublishedStreamEvent()
  testingJson = undefined
  library.userUnpublishedStreamEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.user.id
  extras.isString testValue.payload.user.name
  extras.isString testValue.payload.media.media_type
  extras.isString testValue.payload.media.metadata.foo
  extras.isString testValue.payload.media.uri
  test.done()
  return

exports.testPublicChatMessageEvent = (test) ->
  event_type = library.PUBLIC_CHAT_MESSAGE_EVENT
  params = samplePublicChatMessageEvent()
  testingJson = undefined
  library.publicChatMessageEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.chat_message.correlation_id
  extras.isString testValue.payload.chat_message.timestamp
  extras.isString testValue.payload.chat_message.from.id
  extras.isString testValue.payload.chat_message.from.name
  extras.isString testValue.payload.chat_message.message.text
  extras.isString testValue.payload.chat_message.message.lang
  extras.isNumber testValue.payload.chat_message.font.color
  extras.isNumber testValue.payload.chat_message.font.size
  extras.isString testValue.payload.chat_message.font.font_type
  test.done()
  return

exports.testBroadcastPublicChatMessageEvent = (test) ->
  event_type = library.BROADCAST_PUBLIC_CHAT_MESSAGE_EVENT
  params = sampleBroadcastPublicChatMessageEvent()
  testingJson = undefined
  library.broadcastPublicChatMessageEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.chat_message.correlation_id
  extras.isString testValue.payload.chat_message.id
  extras.isString testValue.payload.chat_message.server_timestamp
  extras.isString testValue.payload.chat_message.user_timestamp
  extras.isString testValue.payload.chat_message.from.id
  extras.isString testValue.payload.chat_message.from.name
  extras.isString testValue.payload.chat_message.message.text
  extras.isString testValue.payload.chat_message.message.lang
  extras.isNumber testValue.payload.chat_message.font.color
  extras.isNumber testValue.payload.chat_message.font.size
  extras.isString testValue.payload.chat_message.font.font_type
  isArray = testValue.payload.chat_message.translations.constructor.toString().indexOf("Array")
  test.notEqual -1, isArray, "\"translations\" does not look like an array"
  if isArray
    translations = testValue.payload.chat_message.translations
    for index of translations
      aTranslation = translations[index]
      extras.isNotUndefined aTranslation.lang
      extras.isNotNull aTranslation.lang
      test.notEqual "", aTranslation.lang
      extras.isString aTranslation.lang
      extras.isNotUndefined aTranslation.text
      extras.isNotNull aTranslation.text
      test.notEqual "", aTranslation.text
      extras.isString aTranslation.text
  test.done()
  return

exports.testPrivateChatMessageEvent = (test) ->
  event_type = library.PRIVATE_CHAT_MESSAGE_EVENT
  params = samplePrivateChatMessageEvent()
  testingJson = undefined
  library.privateChatMessageEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.chat_message.correlation_id
  extras.isString testValue.payload.chat_message.timestamp
  extras.isString testValue.payload.chat_message.from.id
  extras.isString testValue.payload.chat_message.from.name
  extras.isString testValue.payload.chat_message.to.id
  extras.isString testValue.payload.chat_message.to.name
  extras.isString testValue.payload.chat_message.message.text
  extras.isString testValue.payload.chat_message.message.lang
  extras.isNumber testValue.payload.chat_message.font.color
  extras.isNumber testValue.payload.chat_message.font.size
  extras.isString testValue.payload.chat_message.font.font_type
  test.done()
  return

exports.testBroadcastPrivateChatMessageEvent = (test) ->
  event_type = library.BROADCAST_PRIVATE_CHAT_MESSAGE_EVENT
  params = sampleBroadcastPrivateChatMessageEvent()
  testingJson = undefined
  library.broadcastPrivateChatMessageEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.chat_message.correlation_id
  extras.isString testValue.payload.chat_message.id
  extras.isString testValue.payload.chat_message.server_timestamp
  extras.isString testValue.payload.chat_message.user_timestamp
  extras.isString testValue.payload.chat_message.from.id
  extras.isString testValue.payload.chat_message.from.name
  extras.isString testValue.payload.chat_message.message.text
  extras.isString testValue.payload.chat_message.message.lang
  extras.isNumber testValue.payload.chat_message.font.color
  extras.isNumber testValue.payload.chat_message.font.size
  extras.isString testValue.payload.chat_message.font.font_type
  isArray = testValue.payload.chat_message.translations.constructor.toString().indexOf("Array")
  test.notEqual -1, isArray, "\"translations\" does not look like an array"
  if isArray
    translations = testValue.payload.chat_message.translations
    for index of translations
      aTranslation = translations[index]
      extras.isNotUndefined aTranslation.lang
      extras.isNotNull aTranslation.lang
      test.notEqual "", aTranslation.lang
      extras.isString aTranslation.lang
      extras.isNotUndefined aTranslation.text
      extras.isNotNull aTranslation.text
      test.notEqual "", aTranslation.text
      extras.isString aTranslation.text
  test.done()
  return

exports.testBroadcastWhiteboardDrawEvent = (test) ->
  event_type = library.BROADCAST_WHITEBOARD_DRAW_EVENT
  params = sampleBroadcastWhiteBoardDrawEvent()
  testingJson = undefined
  library.broadcastWhiteboardDrawEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    test.done()
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.whiteboard_id
  extras.isString testValue.payload.shape_id
  extras.isString testValue.payload.shape_type
  extras.isNumber testValue.payload.data.coordinate.first_x
  extras.isNumber testValue.payload.data.coordinate.first_y
  extras.isNumber testValue.payload.data.coordinate.last_x
  extras.isNumber testValue.payload.data.coordinate.last_y
  extras.isString testValue.payload.by.id
  extras.isString testValue.payload.by.name
  extras.isBoolean testValue.payload.data.background.visible
  extras.isNumber testValue.payload.data.background.color
  extras.isNumber testValue.payload.data.background.alpha
  extras.isString testValue.payload.data.font.style
  extras.isNumber testValue.payload.data.font.color
  extras.isNumber testValue.payload.data.font.size
  extras.isString testValue.payload.data.text
  extras.isString testValue.payload.timestamp
  extras.isNumber testValue.payload.zorder
  test.done()
  return

exports.testBroadcastWhiteBoardDrawEvent__forNada = (test) ->
  params = sampleBroadcastWhiteBoardDrawEvent__Nada()
  library.broadcastWhiteboardDrawEventToJson params, ((text) ->
  ), (errors) ->
    console.log "comparing: " + Object.keys(params).length + " and " + errors.length
    test.equals Object.keys(params).length, errors.length
    return

  test.done()
  return

exports.testBroadcastWhiteboardUpdateEvent = (test) ->
  event_type = library.BROADCAST_WHITEBOARD_UPDATE_EVENT
  params = sampleBroadcastWhiteBoardUpdateEvent()
  testingJson = undefined
  library.broadcastWhiteboardUpdateEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    test.done()
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.whiteboard_id
  extras.isString testValue.payload.shape_id
  extras.isString testValue.payload.shape_type
  extras.isNumber testValue.payload.data.coordinate.first_x
  extras.isNumber testValue.payload.data.coordinate.first_y
  extras.isNumber testValue.payload.data.coordinate.last_x
  extras.isNumber testValue.payload.data.coordinate.last_y
  extras.isString testValue.payload.by.id
  extras.isString testValue.payload.by.name
  extras.isBoolean testValue.payload.data.background.visible
  extras.isNumber testValue.payload.data.background.color
  extras.isNumber testValue.payload.data.background.alpha
  extras.isString testValue.payload.data.font.style
  extras.isNumber testValue.payload.data.font.color
  extras.isNumber testValue.payload.data.font.size
  extras.isString testValue.payload.data.text
  extras.isString testValue.payload.timestamp
  extras.isNumber testValue.payload.zorder
  test.done()
  return

exports.testWhiteboardCursorEvent = (test) ->
  event_type = library.WHITEBOARD_CURSOR_EVENT
  params = sampleWhiteboardCursorEvent()
  testingJson = undefined
  library.whiteboardCursorEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    test.done()
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.whiteboard_id
  extras.isString testValue.payload.by.id
  extras.isString testValue.payload.by.name
  extras.isNumber testValue.payload.cursor.x
  extras.isNumber testValue.payload.cursor.y
  test.done()
  return

exports.testWhiteboardCursorEvent__forNada = (test) ->
  params = sampleWhiteboardCursorEvent__Nada()
  library.whiteboardCursorEventToJson params, ((text) ->
  ), (errors) ->
    console.log "comparing: " + Object.keys(params).length + " and " + errors.length
    test.equals Object.keys(params).length, errors.length
    return

  test.done()
  return

exports.testBroadcastWhiteboardCursorEvent = (test) ->
  event_type = library.BROADCAST_WHITEBOARD_CURSOR_EVENT
  params = sampleBroadcastWhiteboardCursorEvent()
  testingJson = undefined
  library.broadcastWhiteboardCursorEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    test.done()
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.whiteboard_id
  extras.isString testValue.payload.by.id
  extras.isString testValue.payload.by.name
  extras.isNumber testValue.payload.cursor.x
  extras.isNumber testValue.payload.cursor.y
  test.done()
  return

exports.testBroadcastWhiteboardCursorEvent__forNada = (test) ->
  params = sampleBroadcastWhiteboardCursorEvent__Nada()
  library.broadcastWhiteboardCursorEventToJson params, ((text) ->
  ), (errors) ->
    console.log "comparing: " + Object.keys(params).length + " and " + errors.length
    test.equals Object.keys(params).length, errors.length
    return

  test.done()
  return

exports.testSharePresentationEvent = (test) ->
  event_type = library.SHARE_PRESENTATION_EVENT
  params = sampleSharePresentationEvent()
  testingJson = undefined
  library.sharePresentationEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    test.done()
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.by.id
  extras.isString testValue.payload.by.name
  extras.isString testValue.payload.presentation.id
  extras.isString testValue.payload.presentation.name
  test.done()
  return

exports.testSharePresentationEvent__forNada = (test) ->
  params = sampleSharePresentationEvent__Nada()
  library.sharePresentationEventToJson params, ((text) ->
  ), (errors) ->
    console.log "comparing: " + Object.keys(params).length + " and " + errors.length
    test.equals Object.keys(params).length, errors.length
    return

  test.done()
  return

exports.testBroadcastSharePresentationEvent = (test) ->
  event_type = library.BROADCAST_SHARE_PRESENTATION_EVENT
  params = sampleBroadcastSharePresentationEvent()
  testingJson = undefined
  library.broadcastSharePresentationEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    test.done()
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.by.id
  extras.isString testValue.payload.by.name
  extras.isString testValue.payload.page.id
  extras.isNumber testValue.payload.page.position.x_offset
  extras.isNumber testValue.payload.page.position.y_offset
  extras.isNumber testValue.payload.page.position.width_ratio
  extras.isNumber testValue.payload.page.position.height_ratio
  extras.isString testValue.payload.presentation.id
  extras.isString testValue.payload.presentation.name
  test.done()
  return

exports.testBroadcastSharePresentationEvent__forNada = (test) ->
  params = sampleBroadcastSharePresentationEvent__Nada()
  library.broadcastSharePresentationEventToJson params, ((text) ->
  ), (errors) ->
    console.log "comparing: " + Object.keys(params).length + " and " + errors.length
    test.equals Object.keys(params).length, errors.length
    return

  test.done()
  return

exports.testResizeAndMovePagePresentationEvent = (test) ->
  event_type = library.RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT
  params = sampleResizeAndMovePagePresentationEvent()
  testingJson = undefined
  library.resizeAndMovePagePresentationEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    test.done()
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.by.id
  extras.isString testValue.payload.by.name
  extras.isString testValue.payload.page.id
  extras.isNumber testValue.payload.page.position.x_offset
  extras.isNumber testValue.payload.page.position.y_offset
  extras.isNumber testValue.payload.page.position.width_ratio
  extras.isNumber testValue.payload.page.position.height_ratio
  extras.isString testValue.payload.presentation.id
  extras.isString testValue.payload.presentation.name
  test.done()
  return

exports.testResizeAndMovePagePresentationEvent__forNada = (test) ->
  params = sampleResizeAndMovePagePresentationEvent__Nada()
  library.resizeAndMovePagePresentationEventToJson params, ((text) ->
  ), (errors) ->
    console.log "comparing: " + Object.keys(params).length + " and " + errors.length
    test.equals Object.keys(params).length, errors.length
    return

  test.done()
  return

exports.testBroadcastResizeAndMovePagePresentationEvent = (test) ->
  event_type = library.BROADCAST_RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT
  params = sampleBroadcastResizeAndMovePagePresentationEvent()
  testingJson = undefined
  library.broadcastResizeAndMovePagePresentationEventToJson params, ((text) ->
    testingJson = text
    return
  ), (errors) ->
    test.equals 0, errors.length, "Some of the parameters were undefined/null/\"\" in " + event_type
    test.done()
    return

  testValue = undefined
  try
    testValue = JSON.parse(testingJson)
  catch e
    test.ok false, "ERROR while parsing " + e
  test.equals testValue.header.name, event_type
  extras.isString testValue.header.destination.to
  extras.isString testValue.header.name
  extras.isString testValue.header.timestamp
  extras.isString testValue.header.source
  extras.isString testValue.payload.meeting.name
  extras.isString testValue.payload.meeting.id
  extras.isString testValue.payload.session
  extras.isString testValue.payload.by.id
  extras.isString testValue.payload.by.name
  extras.isString testValue.payload.page.id
  extras.isNumber testValue.payload.page.position.x_offset
  extras.isNumber testValue.payload.page.position.y_offset
  extras.isNumber testValue.payload.page.position.width_ratio
  extras.isNumber testValue.payload.page.position.height_ratio
  extras.isString testValue.payload.presentation.id
  extras.isString testValue.payload.presentation.name
  test.done()
  return

exports.testBroadcastResizeAndMovePagePresentationEvent__forNada = (test) ->
  params = sampleBroadcastResizeAndMovePagePresentationEvent__Nada()
  library.broadcastResizeAndMovePagePresentationEventToJson params, ((text) ->
  ), (errors) ->
    
    #Check if all parameters that were assigned values in sample***()
    #have been checked for not being null/""/undefined
    console.log "comparing: " + Object.keys(params).length + " and " + errors.length
    test.equals Object.keys(params).length, errors.length
    return

  test.done()
  return