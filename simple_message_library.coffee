Joi = require "joi"

Schemas      = require "./schemas"
messageNames = require "./messagenames"

checkForValidity = (params, requiredParams) ->
  errors = []
  for key of requiredParams
    unless params[requiredParams[key]]?
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  errors

#list of events to be selected from
module.exports.getEvents =
  0: "Please select an event type"
  1: messageNames.WHITEBOARD_DRAW_EVENT
  2: messageNames.WHITEBOARD_UPDATE_EVENT
  3: messageNames.SHARE_PRESENTATION_EVENT
  4: messageNames.PAGE_CHANGED_EVENT
  5: messageNames.USER_JOINED_EVENT
  6: messageNames.USER_LEFT_EVENT
  7: messageNames.ANTON_CUSTOM #does not go through the library. Adds the title to the Events dropdown

#returns the event type (the name of the event)
module.exports.getEventType = (message, onSuccess, onFailure) ->    
  ###  try
    if typeof message is "object" # if jsobject
      if message.header?.name?
        eventType = message.header.name
        extras.isString eventType

    else if typeof message is "string" #if json
      message = JSON.parse message
      if message.header?.name?
        eventType = message.header.name
        extras.isString eventType

    else eventType = null
    onSuccess eventType
  catch e
    onFailure "could not get the event type" + e ###
  if typeof message is "object" # if jsobject
      try
        if message.header?.name? #shorten?!
          eventType = message.header.name
          extras.isString eventType
          onSuccess eventType
          return
        else
          eventType = null
      catch err
        onFailure err
        return
  else if typeof message is "string" #if json
    try
        message = JSON.parse message
        if message.header?.name?
          eventType = message.header.name
          extras.isString eventType
          onSuccess eventType
          return
        else
          eventType = null
    catch e
        onFailure e
    
  else
    onFailure "could not get the event type"


# TODO: Add some documentation using http://usejsdoc.org/
# Document requried and optional parameters


# Converts the JSON to Javascript Object and triggers a validation against a schema
#    @message - JSON of the message
#    @eventName - the type of message: e.x. "whiteboard_draw_event"
#    @onSuccess - callback function to be executed should the conversion succeed
#    @onFailure - callback function to be executed should the conversion fail
module.exports.convertAndValidateJSON = (message, eventName, onSuccess, onFailure) ->
  try
    object = JSON.parse(message)

    #Validation
    schema = Schemas[eventName]

    Joi.validate(object, schema, (err, value) ->
      if err
        onFailure err
      else
        onSuccess JSON.stringify(value) #TODO double check at some point
      )
  catch err
    onFailure err


#WHITEBOARD_DRAW_EVENT
module.exports.whiteboard_draw_event_to_json = (params, onSuccess, onFailure) ->
  
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

  errors = checkForValidity params, requiredParams
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = messageNames.WHITEBOARD_DRAW_EVENT
    header.timestamp = new Date().toUTCString()# TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
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

    #Validation
    schema = Schemas[messageNames.WHITEBOARD_DRAW_EVENT]

    Joi.validate(message, schema, (err, value) ->
      if err
        onFailure err
      else
        onSuccess JSON.stringify(value)
      )

#WHITEBOARD_UPDATE_EVENT
module.exports.whiteboard_update_event_to_json = (params, onSuccess, onFailure) ->
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
  errors = checkForValidity params, requiredParams
  
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = messageNames.WHITEBOARD_UPDATE_EVENT
    header.timestamp = new Date().toUTCString()# TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
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

    #Validation
    schema = Schemas[messageNames.WHITEBOARD_UPDATE_EVENT]

    Joi.validate(message, schema, (err, value) ->
      if err
        onFailure err
      else
        onSuccess JSON.stringify(value)
      )

#SHARE_PRESENTATION_EVENT
module.exports.share_presentation_event_to_json = (params, onSuccess, onFailure) ->
  
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
    "pages"
  ]
  errors = checkForValidity params, requiredParams
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = messageNames.SHARE_PRESENTATION_EVENT
    header.timestamp = new Date().toUTCString()# TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {}
    payload.meeting.name = params.meetingName
    payload.meeting.id = params.meetingId
    payload.session = params.sessionId
    payload.presentation = {}
    payload.presentation.id = params.presentationId
    payload.presentation.name = params.presentationName

    payload.presentation.pages = params.pages

    payload.by = {}
    payload.by.id = params.byId
    payload.by.name = params.byName
    message = {}
    message.header = header
    message.payload = payload

    extras.isString header.destination.to
    extras.isString header.name
    extras.isString header.timestamp
    extras.isString header.source
    extras.isString payload.meeting.name
    extras.isString payload.meeting.id
    extras.isString payload.session
    extras.isString payload.by.id
    extras.isString payload.by.name
    extras.isString payload.presentation.id
    extras.isString payload.presentation.name

    for page in params.pages
      extras.isString page.svg, "svg"
      extras.isString page.png, "png" 
      extras.isString page.swf, "swf"

    onSuccess JSON.stringify(message)     
  return

#PAGE_CHANGED_EVENT
module.exports.page_changed_event_to_json = (params, onSuccess, onFailure) ->
  
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
    "pageId"
    "pageNum"
    "svg"
    "swf"
    "png"

  ]
  errors = checkForValidity params, requiredParams
  if errors.length > 0
    onFailure errors     
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channels
    header.name = messageNames.PAGE_CHANGED_EVENT
    header.timestamp = new Date().toUTCString()# TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {} # this was not present in the scala file
    payload.meeting.name = params.meetingName # this was not present in the scala file
    payload.meeting.id = params.meetingId # this was not present in the scala file
    payload.session = params.sessionId # this was not present in the scala file
    payload.presentation = {}
    payload.presentation.id = params.presentationId
    payload.presentation.name = params.presentationName

    payload.presentation.page = {}
    payload.presentation.page.id = params.pageId
    payload.presentation.page.num = params.pageNum

    payload.presentation.slide = {}
    payload.presentation.slide.png = params.png
    payload.presentation.slide.svg = params.svg
    payload.presentation.slide.swf = params.swf
    # x, y, w, h

    payload.by = {}
    payload.by.id = params.byId
    payload.by.name = params.byName
    message = {}
    message.header = header
    message.payload = payload

    extras.isString header.destination.to
    extras.isString header.name
    extras.isString header.timestamp
    extras.isString header.source
    extras.isString payload.meeting.name
    extras.isString payload.meeting.id
    extras.isString payload.session
    extras.isString payload.by.id
    extras.isString payload.by.name
    extras.isString payload.presentation.id
    extras.isString payload.presentation.name

    extras.isString payload.presentation.page.id
    extras.isNumber payload.presentation.page.num

    extras.isString payload.presentation.slide.png, "png"
    extras.isString payload.presentation.slide.svg, "svg"
    extras.isString payload.presentation.slide.swf, "swf"

    onSuccess JSON.stringify(message)     
  return

#USER_JOINED_EVENT
module.exports.user_joined_event_to_json = (params, onSuccess, onFailure) ->
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
  errors = checkForValidity params, requiredParams
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = messageNames.USER_JOINED_EVENT
    header.timestamp = new Date().toUTCString()# TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
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

    #Validation
    schema = Schemas[messageNames.USER_JOINED_EVENT]

    Joi.validate(message, schema, (err, value) ->
      if err
        onFailure err
      else
        onSuccess JSON.stringify(value)
      )

#USER_LEFT_EVENT
module.exports.user_left_event_to_json = (params, onSuccess, onFailure) ->
  requiredParams = [
    "channelsDestination"
    "source"
    "meetingName"
    "meetingId"
    "sessionId"
    "userId"
    "userName"
  ]
  errors = checkForValidity params, requiredParams
  if errors.length > 0
    onFailure errors
  else
    header = {}
    header.destination = {}
    header.destination.to = params.channelsDestination
    header.name = messageNames.USER_LEFT_EVENT
    header.timestamp = new Date().toUTCString()# TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
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

    #Validation
    schema = Schemas[messageNames.USER_LEFT_EVENT]

    Joi.validate(message, schema, (err, value) ->
      if err
        onFailure err
      else
        onSuccess JSON.stringify(value)
      )


#MANUAL events means that these functions are here to support the "message-library-tool".
#That tool allows for viewing and editing the json message before sending it to pubsub.
#The tool uses jsobject with different structure from the params object that is typically passed
#to the functions in this library.
#These functions (*_manual) can be removed from the library in Production when we do not need the tool anymore
module.exports.whiteboard_draw_event_to_json_manual = (params, onSuccess, onFailure) ->
  try
    json = JSON.stringify(params)

    schema = Schemas[messageNames.WHITEBOARD_DRAW_EVENT]

    Joi.validate(json, schema, (err, value) ->
      if err
        onFailure err
      else
        onSuccess value
      )
  catch e
    onFailure e
module.exports.whiteboard_update_event_to_json_manual = (params, onSuccess, onFailure) ->
  try
    json = JSON.stringify(params)

    #Validation
    schema = Schemas[messageNames.WHITEBOARD_UPDATE_EVENT]

    Joi.validate(json, schema, (err, value) ->
      if err
        onFailure err
      else
        onSuccess JSON.stringify(value)
      )
  catch e
    onFailure e
module.exports.share_presentation_event_to_json_manual = (params, onSuccess, onFailure) ->
  
  try
    json = JSON.stringify(params)
  catch e
    onFailure e


  extras.isString params.header.destination.to
  extras.isString params.header.name
  extras.isString params.header.timestamp
  extras.isString params.header.source
  extras.isString params.payload.meeting.name
  extras.isString params.payload.meeting.id
  extras.isString params.payload.session
  extras.isString params.payload.by.id
  extras.isString params.payload.by.name
  extras.isString params.payload.presentation.id
  extras.isString params.payload.presentation.name

  for page in params.payload.presentation.pages
    extras.isString page.svg, "svg"
    extras.isString page.png, "png" 
    extras.isString page.swf, "swf"

  onSuccess json
module.exports.page_changed_event_to_json_manual = (params, onSuccess, onFailure) ->
  try
    json = JSON.stringify(params)
  catch e
    onFailure e

  extras.isString params.header.destination.to
  extras.isString params.header.name
  extras.isString params.header.timestamp
  extras.isString params.header.source
  extras.isString params.payload.meeting.name
  extras.isString params.payload.meeting.id
  extras.isString params.payload.session
  extras.isString params.payload.by.id
  extras.isString params.payload.by.name
  extras.isString params.payload.presentation.id
  extras.isString params.payload.presentation.name

  extras.isString params.payload.presentation.page.id
  extras.isNumber params.payload.presentation.page.num

  extras.isString params.payload.presentation.slide.png, "png"
  extras.isString params.payload.presentation.slide.svg, "svg"
  extras.isString params.payload.presentation.slide.swf, "swf"

  onSuccess json
module.exports.user_joined_event_to_json_manual = (params, onSuccess, onFailure) ->
  try
    json = JSON.stringify(params)

    #Validation
    schema = Schemas[messageNames.USER_JOINED_EVENT]

    Joi.validate(json, schema, (err, value) ->
      if err
        onFailure err
      else
        onSuccess JSON.stringify(value)
      )
  catch e
    onFailure e
module.exports.user_left_event_to_json_manual = (params, onSuccess, onFailure) -> 
  try
    json = JSON.stringify(params)

    #Validation
    schema = Schemas[messageNames.USER_LEFT_EVENT]

    Joi.validate(json, schema, (err, value) ->
      if err
        onFailure err
      else
        onSuccess JSON.stringify(value)
      )
  catch e
    onFailure e
