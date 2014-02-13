#TODO check again if these vars are going to interfere with the other modules' scope
#
#--check on documentation
#--check how to insert today's date for timestamp
#
#--CREATE THE REVERSE FUNCTIONALITY JSON->JavaScriptObject
#
#--improve naming convention
#
#--walk through the code and make sure that there are no 
#variables reused between functions 
#(e.x. correlationId from f1 in f2 (not redefined in f2))
#OR maybe the issue is that I just have not updated the list of requiredParams
#and they do not get checked
#SETUP tests that must fail!! tests where all params are empty or something and
#each of the tests must be failing by default. If they are not failing then
#something is going wrong
#
#--function that takes any json event and discovers what type of event it is
#
#--params.  to become this.params.
#
#
#

#list of events to be selected from
paramExist = (param) ->
  #TODO check for empty array
  return false  if typeof param is "undefined" or param is null or param is ""
  true
WHITEBOARD_DRAW_EVENT = "whiteboard_draw_event"
WHITEBOARD_UPDATE_EVENT = "whiteboard_update_event"
CREATE_MEETING_REQUEST = "create_meeting_request"
CREATE_MEETING_RESPONSE = "create_meeting_response"
MEETING_CREATED_EVENT = "meeting_created_event"
END_MEETING_REQUEST = "end_meeting_request"
END_MEETING_RESPONSE = "end_meeting_response"
END_MEETING_WARNING_EVENT = "end_meeting_warning_event"
MEETING_ENDED_EVENT = "meeting_ended_event"
REGISTER_USER_REQUEST = "meeting_ended_event"
REGISTER_USER_RESPONSE = "register_user_response"
USER_REGISTERED_EVENT = "user_registered_event"
USER_JOIN_REQUEST = "user_join_request"
USER_JOIN_RESPONSE = "user_join_response"
USER_JOINED_EVENT = "user_joined_event"
USER_LEAVE_EVENT = "user_leave_event"
USER_LEFT_EVENT = "user_left_event"
GET_USERS_REQUEST = "get_users_request"
GET_USERS_RESPONSE = "get_users_response"
RAISE_USER_HAND_REQUEST = "raise_user_hand_request"
USER_RAISED_HAND_EVENT = "user_raised_hand_event"
ASSIGN_PRESENTER_REQUEST = "assign_presenter_request"
PRESENTER_ASSIGNED_EVENT = "presenter_assigned_event"
MUTE_USER_REQUEST = "mute_user_request"
MUTE_USER_REQUEST_EVENT = "mute_user_request_event"
MUTE_VOICE_USER_REQUEST = "mute_voice_user_request"
VOICE_USER_MUTED_EVENT = "voice_user_muted_event"
USER_MUTED_EVENT = "user_muted_event"
USER_PUBLISH_STREAM_REQUEST = "user_publish_stream_request"
PUBLISH_STREAM_REQUEST = "publish_stream_request"
PUBLISH_STREAM_RESPONSE = "publish_stream_response"
USER_PUBLISH_STREAM_RESPONSE = "user_publish_stream_response"
PUBLISHED_STREAM_EVENT = "published_stream_event"
USER_PUBLISHED_STREAM_EVENT = "user_published_stream_event"
UNPUBLISHED_STREAM_EVENT = "unpublished_stream_event"
USER_UNPUBLISHED_STREAM_EVENT = "user_unpublished_stream_event"
PUBLIC_CHAT_MESSAGE_EVENT = "public_chat_message_event"
BROADCAST_PUBLIC_CHAT_MESSAGE_EVENT = "broadcast_public_chat_message_event"
PRIVATE_CHAT_MESSAGE_EVENT = "private_chat_message_event"
BROADCAST_PRIVATE_CHAT_MESSAGE_EVENT = "broadcast_private_chat_message_event"
BROADCAST_WHITEBOARD_DRAW_EVENT = "broadcast_whiteboard_draw_event"
BROADCAST_WHITEBOARD_UPDATE_EVENT = "broadcast_whiteboard_update_event"
WHITEBOARD_CURSOR_EVENT = "whiteboard_cursor_event"
BROADCAST_WHITEBOARD_CURSOR_EVENT = "broadcast_whiteboard_cursor_event"
SHARE_PRESENTATION_EVENT = "share_presentation_event"
BROADCAST_SHARE_PRESENTATION_EVENT = "broadcast_share_presentation_event"
RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT = "resize_and_move_page_presentation_event"
BROADCAST_RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT = "broadcast_resize_and_move_page_presentation_event"
module.exports.WHITEBOARD_DRAW_EVENT = WHITEBOARD_DRAW_EVENT
module.exports.WHITEBOARD_UPDATE_EVENT = WHITEBOARD_UPDATE_EVENT
module.exports.CREATE_MEETING_REQUEST = CREATE_MEETING_REQUEST
module.exports.CREATE_MEETING_RESPONSE = CREATE_MEETING_RESPONSE
module.exports.MEETING_CREATED_EVENT = MEETING_CREATED_EVENT
module.exports.END_MEETING_REQUEST = END_MEETING_REQUEST
module.exports.END_MEETING_RESPONSE = END_MEETING_RESPONSE
module.exports.END_MEETING_WARNING_EVENT = END_MEETING_WARNING_EVENT
module.exports.MEETING_ENDED_EVENT = MEETING_ENDED_EVENT
module.exports.REGISTER_USER_REQUEST = REGISTER_USER_REQUEST
module.exports.REGISTER_USER_RESPONSE = REGISTER_USER_RESPONSE
module.exports.USER_REGISTERED_EVENT = USER_REGISTERED_EVENT
module.exports.USER_JOIN_REQUEST = USER_JOIN_REQUEST
module.exports.USER_JOIN_RESPONSE = USER_JOIN_RESPONSE
module.exports.USER_JOINED_EVENT = USER_JOINED_EVENT
module.exports.USER_LEAVE_EVENT = USER_LEAVE_EVENT
module.exports.USER_LEFT_EVENT = USER_LEFT_EVENT
module.exports.GET_USERS_REQUEST = GET_USERS_REQUEST
module.exports.GET_USERS_RESPONSE = GET_USERS_RESPONSE
module.exports.RAISE_USER_HAND_REQUEST = RAISE_USER_HAND_REQUEST
module.exports.USER_RAISED_HAND_EVENT = USER_RAISED_HAND_EVENT
module.exports.ASSIGN_PRESENTER_REQUEST = ASSIGN_PRESENTER_REQUEST
module.exports.PRESENTER_ASSIGNED_EVENT = PRESENTER_ASSIGNED_EVENT
module.exports.MUTE_USER_REQUEST = MUTE_USER_REQUEST
module.exports.MUTE_USER_REQUEST_EVENT = MUTE_USER_REQUEST_EVENT
module.exports.MUTE_VOICE_USER_REQUEST = MUTE_VOICE_USER_REQUEST
module.exports.VOICE_USER_MUTED_EVENT = VOICE_USER_MUTED_EVENT
module.exports.USER_MUTED_EVENT = USER_MUTED_EVENT
module.exports.USER_PUBLISH_STREAM_REQUEST = USER_PUBLISH_STREAM_REQUEST
module.exports.PUBLISH_STREAM_REQUEST = PUBLISH_STREAM_REQUEST
module.exports.PUBLISH_STREAM_RESPONSE = PUBLISH_STREAM_RESPONSE
module.exports.USER_PUBLISH_STREAM_RESPONSE = USER_PUBLISH_STREAM_RESPONSE
module.exports.PUBLISHED_STREAM_EVENT = PUBLISHED_STREAM_EVENT
module.exports.USER_PUBLISHED_STREAM_EVENT = USER_PUBLISHED_STREAM_EVENT
module.exports.UNPUBLISHED_STREAM_EVENT = UNPUBLISHED_STREAM_EVENT
module.exports.USER_UNPUBLISHED_STREAM_EVENT = USER_UNPUBLISHED_STREAM_EVENT
module.exports.PUBLIC_CHAT_MESSAGE_EVENT = PUBLIC_CHAT_MESSAGE_EVENT
module.exports.BROADCAST_PUBLIC_CHAT_MESSAGE_EVENT = BROADCAST_PUBLIC_CHAT_MESSAGE_EVENT
module.exports.PRIVATE_CHAT_MESSAGE_EVENT = PRIVATE_CHAT_MESSAGE_EVENT
module.exports.BROADCAST_PRIVATE_CHAT_MESSAGE_EVENT = BROADCAST_PRIVATE_CHAT_MESSAGE_EVENT
module.exports.BROADCAST_WHITEBOARD_DRAW_EVENT = BROADCAST_WHITEBOARD_DRAW_EVENT
module.exports.BROADCAST_WHITEBOARD_UPDATE_EVENT = BROADCAST_WHITEBOARD_UPDATE_EVENT
module.exports.WHITEBOARD_CURSOR_EVENT = WHITEBOARD_CURSOR_EVENT
module.exports.BROADCAST_WHITEBOARD_CURSOR_EVENT = BROADCAST_WHITEBOARD_CURSOR_EVENT
module.exports.SHARE_PRESENTATION_EVENT = SHARE_PRESENTATION_EVENT
module.exports.BROADCAST_SHARE_PRESENTATION_EVENT = BROADCAST_SHARE_PRESENTATION_EVENT
module.exports.RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT = RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT
module.exports.BROADCAST_RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT = BROADCAST_RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT
module.exports.getEvents =
  0: "Please select an event type"
  1: WHITEBOARD_DRAW_EVENT
  2: WHITEBOARD_UPDATE_EVENT
  3: CREATE_MEETING_REQUEST
  4: CREATE_MEETING_RESPONSE
  5: MEETING_CREATED_EVENT
  6: END_MEETING_REQUEST
  7: END_MEETING_RESPONSE
  8: END_MEETING_WARNING_EVENT
  9: MEETING_ENDED_EVENT
  10: REGISTER_USER_REQUEST
  11: REGISTER_USER_RESPONSE
  12: USER_REGISTERED_EVENT
  13: USER_JOIN_REQUEST
  14: USER_JOIN_RESPONSE
  15: USER_JOINED_EVENT
  16: USER_LEAVE_EVENT
  17: USER_LEFT_EVENT
  18: GET_USERS_REQUEST
  19: GET_USERS_RESPONSE
  20: RAISE_USER_HAND_REQUEST
  21: USER_RAISED_HAND_EVENT
  22: ASSIGN_PRESENTER_REQUEST
  23: PRESENTER_ASSIGNED_EVENT
  24: MUTE_USER_REQUEST
  25: MUTE_USER_REQUEST_EVENT
  26: MUTE_VOICE_USER_REQUEST
  27: VOICE_USER_MUTED_EVENT
  28: USER_MUTED_EVENT
  29: USER_PUBLISH_STREAM_REQUEST
  30: PUBLISH_STREAM_REQUEST
  31: PUBLISH_STREAM_RESPONSE
  32: USER_PUBLISH_STREAM_RESPONSE
  33: PUBLISHED_STREAM_EVENT
  34: USER_PUBLISHED_STREAM_EVENT
  35: UNPUBLISHED_STREAM_EVENT
  36: USER_UNPUBLISHED_STREAM_EVENT
  37: PUBLIC_CHAT_MESSAGE_EVENT
  38: BROADCAST_PUBLIC_CHAT_MESSAGE_EVENT
  39: PRIVATE_CHAT_MESSAGE_EVENT
  40: BROADCAST_PRIVATE_CHAT_MESSAGE_EVENT
  41: BROADCAST_WHITEBOARD_DRAW_EVENT
  42: BROADCAST_WHITEBOARD_UPDATE_EVENT
  43: WHITEBOARD_CURSOR_EVENT
  44: BROADCAST_WHITEBOARD_CURSOR_EVENT
  45: SHARE_PRESENTATION_EVENT
  46: BROADCAST_SHARE_PRESENTATION_EVENT
  47: RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT
  48: BROADCAST_RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT


# TODO: Add some documentation using http://usejsdoc.org/
# Document requried and optional parameters
module.exports.whiteboardDrawEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "meetingId"
    "sessionId"
    "channels"
    "source"
    "meetingName"
    "whiteboardId"
    "shapeId"
    "shapeType"
    "firstX"
    "firstY"
    "lastX"
    "lastY"
    "lineColor"
    "lineWeight"
    "lineType"
    "background_visible"
    "background_color"
    "background_alpha"
    "square"
    "byId"
    "byName"
  ]
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = WHITEBOARD_DRAW_EVENT
    header.timestamp = "2013-12-23T08:50Z" # TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO these were not in the original json from the scala page
    payload.meeting.name = params.meetingName #TODO these were not in the original json from the scala page
    payload.meeting.id = params.meetingId #TODO these were not in the original json from the scala page
    payload.session = params.sessionId #TODO these were not in the original json from the scala page
    payload.whiteboard_id = params.whiteboardId
    payload.shape_id = params.shapeId
    payload.shape_type = params.shapeType
    data = {}
    data.coordinate = {}
    data.coordinate.first_x = params.firstX
    data.coordinate.first_y = params.firstY
    data.coordinate.last_x = params.lastX
    data.coordinate.last_y = params.lastY
    data.line = {}
    data.line.line_type = params.lineType
    data.line.color = params.lineColor
    data.weight = params.lineWeight
    data.background = {}
    data.background.visible = params.background_visible
    data.background.color = params.background_color
    data.background.alpha = params.background_alpha
    data.square = params.square
    payload.data = data
    payload.by = {}
    payload.by.id = params.byId
    payload.by.name = params.byName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)     
  return


# TODO: Do the same thing to convert from JSON to JS Object
#module.exports.whiteboardDrawEventFromJson(message, onSuccess, onFailure) {

# TODO: Add some documentation using http://usejsdoc.org/
# Document requried and optional parameters
module.exports.whiteboardUpdateEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "meetingId"
    "sessionId"
    "channels"
    "source"
    "meetingName"
    "whiteboardId"
    "shapeId"
    "shapeType"
    "firstX"
    "firstY"
    "lastX"
    "lastY"
    "lineColor"
    "lineWeight"
    "lineType"
    "background_visible"
    "background_color"
    "background_alpha"
    "square"
    "byId"
    "byName"
  ]
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = WHITEBOARD_UPDATE_EVENT
    header.timestamp = "2013-12-23T08:50Z" # TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO these were not in the original json from the scala page
    payload.meeting.name = params.meetingName #TODO these were not in the original json from the scala page
    payload.meeting.id = params.meetingId #TODO these were not in the original json from the scala page
    payload.session = params.sessionId #TODO these were not in the original json from the scala page
    payload.whiteboard_id = params.whiteboardId
    payload.shape_id = params.shapeId
    payload.shape_type = params.shapeType
    data = {}
    data.coordinate = {}
    data.coordinate.first_x = params.firstX
    data.coordinate.first_y = params.firstY
    data.coordinate.last_x = params.lastX
    data.coordinate.last_y = params.lastY
    data.line = {}
    data.line.line_type = params.lineType
    data.line.color = params.lineColor
    data.weight = params.lineWeight
    data.background = {}
    data.background.visible = params.background_visible
    data.background.color = params.background_color
    data.background.alpha = params.background_alpha
    data.square = params.square
    payload.data = data
    payload.by = {}
    payload.by.id = params.byId
    payload.by.name = params.byName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)     
  return

module.exports.createMeetingRequestToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "channelsReply"
    "correlationId"
    "source"
    "descriptorName"
    "descriptorExternalId"
    "descriptorRecord"
    "descriptorWelcome"
    "descriptorLogout"
    "descriptorAvatar"
    "descriptorMaxUsers"
    "durationLength"
    "durationAllowExtend"
    "durationMaxMinutes"
    "voiceConfPin"
    "voiceConfNumber"
    "phoneNumbers"
    "metadataCustomerId" #, "name", "timestamp"
    "metadataCustomerName"
  ]
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.reply = {}
    header.reply.to = params.channelsReply
    header.reply.correlation_id = params.correlationId
    header.name = CREATE_MEETING_REQUEST
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting_descriptor = {}
    payload.meeting_descriptor.name = params.descriptorName
    payload.meeting_descriptor.external_id = params.descriptorExternalId
    payload.meeting_descriptor.record = params.descriptorRecord
    payload.meeting_descriptor.welcome_message = params.descriptorWelcome
    payload.meeting_descriptor.logout_url = params.descriptorLogout
    payload.meeting_descriptor.avatar_url = params.descriptorAvatar
    payload.meeting_descriptor.max_users = params.descriptorMaxUsers
    payload.meeting_descriptor.duration = {}
    payload.meeting_descriptor.duration.length_in_minutes = params.durationLength
    payload.meeting_descriptor.duration.allow_extend = params.durationAllowExtend
    payload.meeting_descriptor.duration.max_minutes = params.durationMaxMinutes
    payload.meeting_descriptor.voice_conference = {}
    payload.meeting_descriptor.voice_conference.pin = params.voiceConfPin
    payload.meeting_descriptor.voice_conference.number = params.voiceConfNumber
    payload.meeting_descriptor.phone_numbers = params.phoneNumbers
    payload.meeting_descriptor.metadata = {}
    payload.meeting_descriptor.metadata.customer_id = params.metadataCustomerId
    payload.meeting_descriptor.metadata.customer_name = params.metadataCustomerName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.createMeetingResponseToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "meetingName"
    "meetingId"
    "sessionId"
    "resultSuccess"
    "resultMessage"
    "correlationId"
    "source"
    "descriptorName"
    "descriptorExternalId"
    "descriptorRecord"
    "descriptorWelcome"
    "descriptorLogout"
    "descriptorAvatar"
    "descriptorMaxUsers"
    "durationLength"
    "durationAllowExtend"
    "durationMaxMinutes"
    "voiceConfPin"
    "voiceConfNumber"
    "phoneNumbers"
    "metadataCustomerId" #, "name", "timestamp"
    "metadataCustomerName"
  ]
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.destination.correlation_id = params.correlationId
    header.name = CREATE_MEETING_RESPONSE
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.result = {}
    payload.result.success = params.resultSuccess
    payload.result.message = params.resultMessage
    payload.meeting_descriptor = {}
    payload.meeting_descriptor.name = params.descriptorName
    payload.meeting_descriptor.external_id = params.descriptorExternalId
    payload.meeting_descriptor.record = params.descriptorRecord
    payload.meeting_descriptor.welcome_message = params.descriptorWelcome
    payload.meeting_descriptor.logout_url = params.descriptorLogout
    payload.meeting_descriptor.avatar_url = params.descriptorAvatar
    payload.meeting_descriptor.max_users = params.descriptorMaxUsers
    payload.meeting_descriptor.duration = {}
    payload.meeting_descriptor.duration.length_in_minutes = params.durationLength
    payload.meeting_descriptor.duration.allow_extend = params.durationAllowExtend
    payload.meeting_descriptor.duration.max_minutes = params.durationMaxMinutes
    payload.meeting_descriptor.voice_conference = {}
    payload.meeting_descriptor.voice_conference.pin = params.voiceConfPin
    payload.meeting_descriptor.voice_conference.number = params.voiceConfNumber
    payload.meeting_descriptor.phone_numbers = params.phoneNumbers
    payload.meeting_descriptor.metadata = {}
    payload.meeting_descriptor.metadata.customer_id = params.metadataCustomerId
    payload.meeting_descriptor.metadata.customer_name = params.metadataCustomerName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.meetingCreatedEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "descriptorName"
    "descriptorExternalId"
    "descriptorRecord"
    "descriptorWelcome"
    "descriptorLogout"
    "descriptorAvatar"
    "descriptorMaxUsers"
    "durationLength"
    "durationAllowExtend"
    "durationMaxMinutes"
    "voiceConfPin"
    "voiceConfNumber"
    "phoneNumbers"
    "metadataCustomerId" #, "name", "timestamp"
    "metadataCustomerName"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = MEETING_CREATED_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingID
    payload.session = params.sessionID
    payload.meeting_descriptor = {}
    payload.meeting_descriptor.name = params.descriptorName
    payload.meeting_descriptor.external_id = params.descriptorExternalId
    payload.meeting_descriptor.record = params.descriptorRecord
    payload.meeting_descriptor.welcome_message = params.descriptorWelcome
    payload.meeting_descriptor.logout_url = params.descriptorLogout
    payload.meeting_descriptor.avatar_url = params.descriptorAvatar
    payload.meeting_descriptor.max_users = params.descriptorMaxUsers
    payload.meeting_descriptor.duration = {}
    payload.meeting_descriptor.duration.length_in_minutes = params.durationLength
    payload.meeting_descriptor.duration.allow_extend = params.durationAllowExtend
    payload.meeting_descriptor.duration.max_minutes = params.durationMaxMinutes
    payload.meeting_descriptor.voice_conference = {}
    payload.meeting_descriptor.voice_conference.pin = params.voiceConfPin
    payload.meeting_descriptor.voice_conference.number = params.voiceConfNumber
    payload.meeting_descriptor.phone_numbers = params.phoneNumbers
    payload.meeting_descriptor.metadata = {}
    payload.meeting_descriptor.metadata.customer_id = params.metadataCustomerId
    payload.meeting_descriptor.metadata.customer_name = params.metadataCustomerName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.endMeetingRequestToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "channelsReply"
    "correlationId"
    "force"
    "warnUsers"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.reply = {}
    header.reply.to = params.channelsReply
    header.reply.correlation_id = params.correlationId
    header.name = END_MEETING_REQUEST
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.force = params.force
    payload.warn_users = params.warnUsers
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.endMeetingResponseToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "correlationId"
    "success"
    "message"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.destination.correlation_id = params.correlationId
    header.name = END_MEETING_RESPONSE
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.result = {}
    payload.result.success = params.success
    payload.result.message = params.message
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.endMeetingWarningToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "timeLeft"
    "timeUnit"
    "allowExtend"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = END_MEETING_WARNING_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.time_left = params.timeLeft
    payload.time_unit = params.timeUnit
    payload.allow_extend = params.allowExtend
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.meetingEndedEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = MEETING_ENDED_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.registerUserRequestToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "correlationId"
    "channelsReply"
    "descriptorName"
    "descriptorExternalId"
    "descriptorRole"
    "descriptorPin"
    "descriptorWelcome"
    "descriptorAvatar"
    "descriptorLogout"
    "studentId"
    "program"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.reply = {}
    header.reply.to = params.channelsReply
    header.reply.correlation_id = params.correlationId
    header.name = REGISTER_USER_REQUEST
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.user_descriptor = {}
    payload.user_descriptor.external_id = params.descriptorExternalId
    payload.user_descriptor.name = params.descriptorName
    payload.user_descriptor.role = params.descriptorRole
    payload.user_descriptor.pin = params.descriptorPin
    payload.user_descriptor.welcome_message = params.descriptorWelcome
    payload.user_descriptor.logout_url = params.descriptorLogout
    payload.user_descriptor.avatar_url = params.descriptorAvatar
    payload.user_descriptor.metadata = {}
    payload.user_descriptor.metadata.student_id = params.studentId
    payload.user_descriptor.metadata.program = params.program
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.registerUserResponseToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "correlationId"
    "descriptorName"
    "descriptorExternalId"
    "descriptorRole"
    "descriptorPin"
    "descriptorWelcome"
    "descriptorAvatar"
    "descriptorLogout"
    "studentId"
    "program"
    "token"
    "success"
    "message"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.destination.correlation_id = "abc"
    header.name = REGISTER_USER_RESPONSE
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.user_token = params.token
    payload.result = {}
    payload.result.success = params.success
    payload.result.message = params.message
    payload.user_descriptor = {}
    payload.user_descriptor.external_id = params.descriptorExternalId
    payload.user_descriptor.name = params.descriptorName
    payload.user_descriptor.role = params.descriptorRole
    payload.user_descriptor.pin = params.descriptorPin
    payload.user_descriptor.welcome_message = params.descriptorWelcome
    payload.user_descriptor.logout_url = params.descriptorLogout
    payload.user_descriptor.avatar_url = params.descriptorAvatar
    payload.user_descriptor.metadata = {}
    payload.user_descriptor.metadata.student_id = params.studentId
    payload.user_descriptor.metadata.program = params.program
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.userRegisteredEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "descriptorName"
    "descriptorExternalId"
    "descriptorRole"
    "descriptorPin"
    "descriptorWelcome"
    "descriptorAvatar"
    "descriptorLogout"
    "studentId"
    "program"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = USER_REGISTERED_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.user_descriptor = {}
    payload.user_descriptor.external_id = params.descriptorExternalId
    payload.user_descriptor.name = params.descriptorName
    payload.user_descriptor.role = params.descriptorRole
    payload.user_descriptor.pin = params.descriptorPin
    payload.user_descriptor.welcome_message = params.descriptorWelcome
    payload.user_descriptor.logout_url = params.descriptorLogout
    payload.user_descriptor.avatar_url = params.descriptorAvatar
    payload.user_descriptor.metadata = {}
    payload.user_descriptor.metadata.student_id = params.studentId
    payload.user_descriptor.metadata.program = params.program
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.userJoinRequestToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "token"
    "correlationId"
    "channelsReply"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.reply = {}
    header.reply.to = params.channelsReply
    header.reply.correlation_id = params.correlationId
    header.name = USER_JOIN_REQUEST
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.token = params.token
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.userJoinResponseToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "correlationId"
    "success"
    "message"
    "descriptorName"
    "descriptorExternalId"
    "descriptorRole"
    "descriptorPin"
    "descriptorWelcome"
    "descriptorLogout"
    "descriptorAvatar"
    "studentId"
    "program"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.destination.correlation_id = params.correlationId
    header.name = USER_JOIN_RESPONSE
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.result = {}
    payload.result.success = true
    payload.result.message = "Success"
    payload.user_descriptor = {}
    payload.user_descriptor.external_id = params.descriptorExternalId
    payload.user_descriptor.name = params.descriptorName
    payload.user_descriptor.role = params.descriptorRole
    payload.user_descriptor.pin = params.descriptorPin
    payload.user_descriptor.welcome_message = params.descriptorWelcome
    payload.user_descriptor.logout_url = params.descriptorLogout
    payload.user_descriptor.avatar_url = params.descriptorAvatar
    payload.user_descriptor.metadata = {}
    payload.user_descriptor.metadata.student_id = params.studentId
    payload.user_descriptor.metadata.program = params.program
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.userJoinedEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "studentId"
    "program"
    "userId"
    "userExternalId"
    "userName"
    "role"
    "pin"
    "welcome"
    "logoutUrl"
    "avatarUrl"
    "isPresenter"
    "handRaised"
    "muted"
    "locked"
    "talking"
    "callerName"
    "callerNumber"
    "mediaStreams"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = USER_JOINED_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.user = {}
    payload.user.id = params.userId
    payload.user.external_id = params.userExternalId
    payload.user.name = params.userName
    payload.user.role = params.role
    payload.user.pin = params.pin
    payload.user.welcome_message = params.welcome
    payload.user.logout_url = params.logoutUrl
    payload.user.avatar_url = params.avatarUrl
    payload.user.is_presenter = params.isPresenter
    payload.user.status = {}
    payload.user.status.hand_raised = params.handRaised
    payload.user.status.muted = params.muted
    payload.user.status.locked = params.locked
    payload.user.status.talking = params.talking
    payload.user.caller_id = {}
    payload.user.caller_id.name = params.callerName
    payload.user.caller_id.number = params.callerNumber
    payload.user.media_streams = params.mediaStreams
    payload.user.metadata = {}
    payload.user.metadata.student_id = params.studentId
    payload.user.metadata.program = params.program
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.userLeaveEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = USER_LEAVE_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.user = {}
    payload.user.id = params.userId
    payload.user.name = params.userName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.userLeftEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = USER_LEFT_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.user = {}
    payload.user.id = params.userId
    payload.user.name = params.userName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.getUsersRequestToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
    "channelsReply"
    "correlationId"
    "requesterId"
    "requesterName"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.reply = {}
    header.reply.to = params.channelsReply
    header.reply.correlation_id = params.correlationId
    header.name = GET_USERS_REQUEST
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.user = {}
    payload.user.id = params.userId
    payload.user.name = params.userName
    payload.requester = {}
    payload.requester.id = params.requesterId
    payload.requester.name = params.requesterName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.getUsersResponseToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "listUsers"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = GET_USERS_RESPONSE
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.users = params.listUsers
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.raiseUserHandRequestToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "requesterId"
    "requesterName"
    "raise"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = RAISE_USER_HAND_REQUEST
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.requester = {}
    payload.requester.id = params.requesterId
    payload.requester.name = params.requesterName
    payload.raise = params.raise
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.userRaisedHandEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "requesterId"
    "requesterName"
    "raise"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = USER_RAISED_HAND_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.requester = {}
    payload.requester.id = params.requesterId
    payload.requester.name = params.requesterName
    payload.raise = params.raise
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.assignedPresenterRequestToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "presenterId"
    "presenterName"
    "assignedById"
    "assignedByName"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = ASSIGN_PRESENTER_REQUEST
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.presenter = {}
    payload.presenter.id = params.presenterId
    payload.presenter.name = params.presenterName
    payload.assigned_by = {}
    payload.assigned_by.id = params.assignedById
    payload.assigned_by.name = params.assignedByName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.presenterAssignedEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "presenterId"
    "presenterName"
    "assignedById"
    "assignedByName"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = PRESENTER_ASSIGNED_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.presenter = {}
    payload.presenter.id = params.presenterId
    payload.presenter.name = params.presenterName
    payload.assigned_by = {}
    payload.assigned_by.id = params.assignedById
    payload.assigned_by.name = params.assignedByName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.muteUserRequestToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
    "requesterId"
    "requesterName"
    "mute"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = MUTE_USER_REQUEST
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.user = {}
    payload.user.id = params.userId
    payload.user.name = params.userName
    payload.requester = {}
    payload.requester.id = params.requesterId
    payload.requester.name = params.requesterName
    payload.mute = params.mute
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.muteUserRequestEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
    "requesterId"
    "requesterName"
    "mute"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = MUTE_USER_REQUEST_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.user = {}
    payload.user.id = params.userId
    payload.user.name = params.userName
    payload.requester = {}
    payload.requester.id = params.requesterId
    payload.requester.name = params.requesterName
    payload.mute = params.mute
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.muteVoiceUserRequestToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
    "mute"
    "freeSWITCH_IPv4"
    "conference_Name"
    "conference_Unique_ID"
    "conference_member_id"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = MUTE_VOICE_USER_REQUEST
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.user_metadata = {}
    payload.user_metadata.id = params.userId
    payload.user_metadata.name = params.userName
    payload.mute = params.mute
    payload.voice_metadata = {}
    payload.voice_metadata.FreeSWITCH_IPv4 = params.freeSWITCH_IPv4
    payload.voice_metadata.Conference_Name = params.conference_Name
    payload.voice_metadata.Conference_Unique_ID = params.conference_Unique_ID
    payload.voice_metadata.conference_member_id = params.conference_member_id
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.voiceUserMutedEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
    "mute"
    "freeSWITCH_IPv4"
    "conference_Name"
    "conference_Unique_ID"
    "conference_member_id"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = VOICE_USER_MUTED_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.user_metadata = {}
    payload.user_metadata.id = params.userId
    payload.user_metadata.name = params.userName
    payload.mute = params.mute
    payload.voice_metadata = {}
    payload.voice_metadata.FreeSWITCH_IPv4 = params.freeSWITCH_IPv4
    payload.voice_metadata.Conference_Name = params.conference_Name
    payload.voice_metadata.Conference_Unique_ID = params.conference_Unique_ID
    payload.voice_metadata.conference_member_id = params.conference_member_id
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.userMutedEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
    "mute"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = USER_MUTED_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.user = {}
    payload.user.id = params.userId
    payload.user.name = params.userName
    payload.mute = params.mute
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.userPublishStreamRequestToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
    "mediaType"
    "metadataFoo"
    "channelsReply"
    "correlationId"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.reply = {}
    header.reply.to = params.channelsReply
    header.reply.correlation_id = params.correlationId
    header.name = USER_PUBLISH_STREAM_REQUEST
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.media = {}
    payload.media.media_type = "video"
    payload.media.metadata = {}
    payload.media.metadata.foo = "bar"
    payload.user = {}
    payload.user.id = params.userId
    payload.user.name = params.userName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.userPublishStreamResponseToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
    "mediaType"
    "metadataFoo"
    "correlationId"
    "uri"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.destination.correlation_id = params.correlationId
    header.name = USER_PUBLISH_STREAM_RESPONSE
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.media = {}
    payload.media.media_type = "video"
    payload.media.uri = params.uri
    payload.media.metadata = {}
    payload.media.metadata.foo = "bar"
    payload.user = {}
    payload.user.id = params.userId
    payload.user.name = params.userName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.publishedStreamEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
    "mediaType"
    "metadataFoo"
    "uri"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = PUBLISHED_STREAM_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.media = {}
    payload.media.media_type = "video"
    payload.media.uri = params.uri
    payload.media.metadata = {}
    payload.media.metadata.foo = "bar"
    payload.user = {}
    payload.user.id = params.userId
    payload.user.name = params.userName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.userPublishedStreamEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
    "mediaType"
    "metadataFoo"
    "uri"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
    return
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = USER_PUBLISHED_STREAM_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.media = {}
    payload.media.media_type = "video"
    payload.media.uri = params.uri
    payload.media.metadata = {}
    payload.media.metadata.foo = "bar"
    payload.user = {}
    payload.user.id = params.userId
    payload.user.name = params.userName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.unpublishedStreamEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
    "mediaType"
    "metadataFoo"
    "uri"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
    return
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = UNPUBLISHED_STREAM_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.media = {}
    payload.media.media_type = "video"
    payload.media.uri = params.uri
    payload.media.metadata = {}
    payload.media.metadata.foo = "bar"
    payload.user = {}
    payload.user.id = params.userId
    payload.user.name = params.userName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.userUnpublishedStreamEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
    "mediaType"
    "metadataFoo"
    "uri"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
    return
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = USER_UNPUBLISHED_STREAM_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.media = {}
    payload.media.media_type = "video"
    payload.media.uri = params.uri
    payload.media.metadata = {}
    payload.media.metadata.foo = "bar"
    payload.user = {}
    payload.user.id = params.userId
    payload.user.name = params.userName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.publicChatMessageEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "messageCorrelationId"
    "messageTimestamp"
    "messageFromId"
    "messageFromName"
    "messageText"
    "messageLang"
    "messageColor"
    "messageSize"
    "messageFontType"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
    return
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = PUBLIC_CHAT_MESSAGE_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO was not present in scala
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.chat_message = {}
    payload.chat_message.correlation_id = params.messageCorrelationId
    payload.chat_message.timestamp = params.messageTimestamp
    payload.chat_message.from = {}
    payload.chat_message.from.id = params.messageFromId
    payload.chat_message.from.name = params.messageFromName
    payload.chat_message.message = {}
    payload.chat_message.message.text = params.messageText
    payload.chat_message.message.lang = params.messageLang
    payload.chat_message.font = {}
    payload.chat_message.font.color = params.messageColor
    payload.chat_message.font.size = params.messageSize
    payload.chat_message.font.font_type = params.messageFontType
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.broadcastPublicChatMessageEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "messageCorrelationId"
    "messageFromId"
    "messageFromName"
    "messageText"
    "messageLang"
    "messageColor"
    "messageSize"
    "messageFontType"
    "messageId"
    "messageUserTimestamp"
    "messageServerTimestamp"
    "translations"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
    return
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = BROADCAST_PUBLIC_CHAT_MESSAGE_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO was not present in scala
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.chat_message = {}
    payload.chat_message.id = params.messageId
    payload.chat_message.server_timestamp = params.messageServerTimestamp
    payload.chat_message.correlation_id = params.messageCorrelationId
    payload.chat_message.user_timestamp = params.messageUserTimestamp
    payload.chat_message.from = {}
    payload.chat_message.from.id = params.messageFromId
    payload.chat_message.from.name = params.messageFromName
    payload.chat_message.message = {}
    payload.chat_message.message.text = params.messageText
    payload.chat_message.message.lang = params.messageLang
    payload.chat_message.font = {}
    payload.chat_message.font.color = params.messageColor
    payload.chat_message.font.size = params.messageSize
    payload.chat_message.font.font_type = params.messageFontType
    payload.chat_message.translations = params.translations
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.privateChatMessageEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "messageCorrelationId"
    "messageTimestamp"
    "messageFromId"
    "messageFromName"
    "messageText"
    "messageLang"
    "messageColor"
    "messageSize"
    "messageFontType"
    "messageToId"
    "messageToName"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
    return
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = PRIVATE_CHAT_MESSAGE_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO was not present in scala
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.chat_message = {}
    payload.chat_message.correlation_id = params.messageCorrelationId
    payload.chat_message.timestamp = params.messageTimestamp
    payload.chat_message.from = {}
    payload.chat_message.from.id = params.messageFromId
    payload.chat_message.from.name = params.messageFromName
    payload.chat_message.to = {}
    payload.chat_message.to.id = params.messageToId
    payload.chat_message.to.name = params.messageToName
    payload.chat_message.message = {}
    payload.chat_message.message.text = params.messageText
    payload.chat_message.message.lang = params.messageLang
    payload.chat_message.font = {}
    payload.chat_message.font.color = params.messageColor
    payload.chat_message.font.size = params.messageSize
    payload.chat_message.font.font_type = params.messageFontType
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.broadcastPrivateChatMessageEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "messageCorrelationId"
    "messageFromId"
    "messageFromName"
    "messageText"
    "messageLang"
    "messageColor"
    "messageSize"
    "messageFontType"
    "messageId"
    "messageUserTimestamp"
    "messageServerTimestamp"
    "translations"
  ]
  
  #TODO -try to take this for loop out of the function
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors
    return
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = BROADCAST_PRIVATE_CHAT_MESSAGE_EVENT
    header.timestamp = "2013-12-23T08:50Z" #TODO
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO was not present in scala
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.chat_message = {}
    payload.chat_message.id = params.messageId
    payload.chat_message.server_timestamp = params.messageServerTimestamp
    payload.chat_message.correlation_id = params.messageCorrelationId
    payload.chat_message.user_timestamp = params.messageUserTimestamp
    payload.chat_message.from = {}
    payload.chat_message.from.id = params.messageFromId
    payload.chat_message.from.name = params.messageFromName
    
    #TODO shouldn't there be "to" section?!
    payload.chat_message.message = {}
    payload.chat_message.message.text = params.messageText
    payload.chat_message.message.lang = params.messageLang
    payload.chat_message.font = {}
    payload.chat_message.font.color = params.messageColor
    payload.chat_message.font.size = params.messageSize
    payload.chat_message.font.font_type = params.messageFontType
    payload.chat_message.translations = params.translations
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)
  return

module.exports.broadcastWhiteboardDrawEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "meetingId"
    "sessionId"
    "channels"
    "source"
    "meetingName"
    "whiteboardId"
    "shapeId"
    "shapeType"
    "firstX"
    "firstY"
    "lastX"
    "lastY"
    "pTimestamp"
    "background_visible"
    "background_color"
    "background_alpha"
    "byId"
    "byName"
    "style"
    "color"
    "size"
    "text"
    "zorder"
  ]
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = BROADCAST_WHITEBOARD_DRAW_EVENT
    header.timestamp = "2013-12-23T08:50Z" # TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO these were not in the original json from the scala page
    payload.meeting.name = params.meetingName #TODO these were not in the original json from the scala page
    payload.meeting.id = params.meetingId #TODO these were not in the original json from the scala page
    payload.session = params.sessionId #TODO these were not in the original json from the scala page
    payload.whiteboard_id = params.whiteboardId
    payload.shape_id = params.shapeId
    payload.shape_type = params.shapeType
    payload.timestamp = params.pTimestamp
    payload.zorder = params.zorder
    




    console.log "++++++"+params.zorder
    #ONLY WITHING THE SCOPE OF THE FUNCTION



    data = {}
    data.coordinate = {}
    data.coordinate.first_x = params.firstX
    data.coordinate.first_y = params.firstY
    data.coordinate.last_x = params.lastX
    data.coordinate.last_y = params.lastY
    data.font = {}
    data.font.style = params.style
    data.font.color = params.color
    data.font.size = params.size
    data.text = params.text
    data.background = {}
    data.background.visible = params.background_visible
    data.background.color = params.background_color
    data.background.alpha = params.background_alpha
    payload.data = data
    payload.by = {}
    payload.by.id = params.byId
    payload.by.name = params.byName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)     
  return


#this is a "text" event
module.exports.broadcastWhiteboardUpdateEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "meetingId"
    "sessionId"
    "channels"
    "source"
    "meetingName"
    "whiteboardId"
    "shapeId"
    "shapeType"
    "firstX"
    "firstY"
    "lastX"
    "lastY"
    "pTimestamp"
    "background_visible"
    "background_color"
    "background_alpha"
    "byId"
    "byName"
    "style"
    "color"
    "size"
    "text"
    "zorder"
  ]
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = BROADCAST_WHITEBOARD_UPDATE_EVENT
    header.timestamp = "2013-12-23T08:50Z" # TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO these were not in the original json from the scala page
    payload.meeting.name = params.meetingName #TODO these were not in the original json from the scala page
    payload.meeting.id = params.meetingId #TODO these were not in the original json from the scala page
    payload.session = params.sessionId #TODO these were not in the original json from the scala page
    payload.whiteboard_id = params.whiteboardId
    payload.shape_id = params.shapeId
    payload.shape_type = params.shapeType
    payload.timestamp = params.pTimestamp
    payload.zorder = params.zorder
    
    #   console.log("++++++"+this.params.zorder);//TODO MUST LIMIT PARAM TO BE VISIBLE
    #ONLY WITHING THE SCOPE OF THE FUNCTION
    data = {}
    data.coordinate = {}
    data.coordinate.first_x = params.firstX
    data.coordinate.first_y = params.firstY
    data.coordinate.last_x = params.lastX
    data.coordinate.last_y = params.lastY
    data.font = {}
    data.font.style = params.style
    data.font.color = params.color
    data.font.size = params.size
    data.text = params.text
    data.background = {}
    data.background.visible = params.background_visible
    data.background.color = params.background_color
    data.background.alpha = params.background_alpha
    payload.data = data
    payload.by = {}
    payload.by.id = params.byId
    payload.by.name = params.byName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)     
  return

module.exports.whiteboardCursorEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "meetingId"
    "sessionId"
    "channels"
    "source"
    "meetingName"
    "whiteboardId"
    "byId"
    "byName"
    "cursorX"
    "cursorY"
  ]
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = WHITEBOARD_CURSOR_EVENT
    header.timestamp = "2013-12-23T08:50Z" # TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO these were not in the original json from the scala page
    payload.meeting.name = params.meetingName #TODO these were not in the original json from the scala page
    payload.meeting.id = params.meetingId #TODO these were not in the original json from the scala page
    payload.session = params.sessionId #TODO these were not in the original json from the scala page
    payload.whiteboard_id = params.whiteboardId
    payload.cursor = {}
    payload.cursor.x = params.cursorX
    payload.cursor.y = params.cursorY
    payload.by = {}
    payload.by.id = params.byId
    payload.by.name = params.byName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)     
  return

module.exports.broadcastWhiteboardCursorEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "meetingId"
    "sessionId"
    "channels"
    "source"
    "meetingName"
    "whiteboardId"
    "byId"
    "byName"
    "cursorX"
    "cursorY"
  ]
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = BROADCAST_WHITEBOARD_CURSOR_EVENT
    header.timestamp = "2013-12-23T08:50Z" # TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO these were not in the original json from the scala page
    payload.meeting.name = params.meetingName #TODO these were not in the original json from the scala page
    payload.meeting.id = params.meetingId #TODO these were not in the original json from the scala page
    payload.session = params.sessionId #TODO these were not in the original json from the scala page
    payload.whiteboard_id = params.whiteboardId
    payload.cursor = {}
    payload.cursor.x = params.cursorX
    payload.cursor.y = params.cursorY
    payload.by = {}
    payload.by.id = params.byId
    payload.by.name = params.byName
    message = {}
    message.header = header
    message.payload = payload
    
    #TODO verify carefully this event message
    onSuccess JSON.stringify(message)     
  return

module.exports.sharePresentationEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "meetingId"
    "sessionId"
    "channels"
    "source"
    "meetingName"
    "byId"
    "byName"
    "presentationId"
    "presentationName"
  ]
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = SHARE_PRESENTATION_EVENT
    header.timestamp = "2013-12-23T08:50Z" # TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO these were not in the original json from the scala page
    payload.meeting.name = params.meetingName #TODO these were not in the original json from the scala page
    payload.meeting.id = params.meetingId #TODO these were not in the original json from the scala page
    payload.session = params.sessionId #TODO these were not in the original json from the scala page
    payload.presentation = {}
    payload.presentation.id = params.presentationId
    payload.presentation.name = params.presentationName
    payload.by = {}
    payload.by.id = params.byId
    payload.by.name = params.byName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)     
  return

module.exports.broadcastSharePresentationEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "meetingId"
    "sessionId"
    "channels"
    "source"
    "meetingName"
    "byId"
    "byName"
    "presentationId"
    "presentationName"
    "xOffset"
    "yOffset"
    "heightRatio"
    "widthRatio"
    "pageId"
    "uri"
  ]
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = BROADCAST_SHARE_PRESENTATION_EVENT
    header.timestamp = "2013-12-23T08:50Z" # TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO these were not in the original json from the scala page
    payload.meeting.name = params.meetingName #TODO these were not in the original json from the scala page
    payload.meeting.id = params.meetingId #TODO these were not in the original json from the scala page
    payload.session = params.sessionId #TODO these were not in the original json from the scala page
    payload.presentation = {}
    payload.presentation.id = params.presentationId
    payload.presentation.name = params.presentationName
    payload.page = {}
    payload.page.id = params.pageId
    payload.page.uri = params.uri
    payload.page.position = {}
    payload.page.position.x_offset = params.xOffset
    payload.page.position.y_offset = params.yOffset
    payload.page.position.width_ratio = params.widthRatio
    payload.page.position.height_ratio = params.heightRatio
    payload.by = {}
    payload.by.id = params.byId
    payload.by.name = params.byName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)     
  return

module.exports.resizeAndMovePagePresentationEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "meetingId"
    "sessionId"
    "channels"
    "source"
    "meetingName"
    "byId"
    "byName"
    "presentationId"
    "presentationName"
    "xOffset"
    "yOffset"
    "heightRatio"
    "widthRatio"
    "pageId"
    "uri"
  ]
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT
    header.timestamp = "2013-12-23T08:50Z" # TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO these were not in the original json from the scala page
    payload.meeting.name = params.meetingName #TODO these were not in the original json from the scala page
    payload.meeting.id = params.meetingId #TODO these were not in the original json from the scala page
    payload.session = params.sessionId #TODO these were not in the original json from the scala page
    payload.presentation = {}
    payload.presentation.id = params.presentationId
    payload.presentation.name = params.presentationName
    payload.page = {}
    payload.page.id = params.pageId
    payload.page.uri = params.uri
    payload.page.position = {}
    payload.page.position.x_offset = params.xOffset
    payload.page.position.y_offset = params.yOffset
    payload.page.position.width_ratio = params.widthRatio
    payload.page.position.height_ratio = params.heightRatio
    payload.by = {}
    payload.by.id = params.byId
    payload.by.name = params.byName
    message = {}
    message.header = header
    message.payload = payload
    
    #TODO verify carefully this event
    onSuccess JSON.stringify(message)     
  return

module.exports.broadcastResizeAndMovePagePresentationEventToJson = (params, onSuccess, onFailure) ->
  
  # TODO: Check for required params
  errors = new Array()
  requiredParams = [
    "meetingId"
    "sessionId"
    "channels"
    "source"
    "meetingName"
    "byId"
    "byName"
    "presentationId"
    "presentationName"
    "xOffset"
    "yOffset"
    "heightRatio"
    "widthRatio"
    "pageId"
    "uri"
  ]
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = BROADCAST_RESIZE_AND_MOVE_PAGE_PRESENTATION_EVENT
    header.timestamp = "2013-12-23T08:50Z" # TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {} #TODO these were not in the original json from the scala page
    payload.meeting.name = params.meetingName #TODO these were not in the original json from the scala page
    payload.meeting.id = params.meetingId #TODO these were not in the original json from the scala page
    payload.session = params.sessionId #TODO these were not in the original json from the scala page
    payload.presentation = {}
    payload.presentation.id = params.presentationId
    payload.presentation.name = params.presentationName
    payload.page = {}
    payload.page.id = params.pageId
    payload.page.uri = params.uri
    payload.page.position = {}
    payload.page.position.x_offset = params.xOffset
    payload.page.position.y_offset = params.yOffset
    payload.page.position.width_ratio = params.widthRatio
    payload.page.position.height_ratio = params.heightRatio
    payload.by = {}
    payload.by.id = params.byId
    payload.by.name = params.byName
    message = {}
    message.header = header
    message.payload = payload
    onSuccess JSON.stringify(message)     
  return


#
#//JSON to JavaScriptObject
#function isValidJSON(message) {
#    //I could use the regEx from https://github.com/douglascrockford/JSON-js/blob/master/json2.js : ~450
#    //but for now will do the simple check
#    try {        
#        var tmp = JSON.parse(message);
#    } catch (err) {
#        return false;
#    }
#    return true;
#}
module.exports.whiteboardDrawEvent_fromJSON = (message, onSuccess, onFailure) ->
  
  #   // if (message is NOT valid) 
  #    if(! isValidJSON(message))
  #    {
  #        onFailure(errors);
  #    } 
  #    else 
  #    {
  #        var msgObject = JSON.parse(message);
  #        onSuccess(msgObject);
  #    }
  try
    msgObject = JSON.parse(message)
    onSuccess msgObject
  catch err
    onFailure err
  return