extras = require "node-assert-extras"
assert = require "assert"

paramExist = (param) ->
  #TODO check for empty array
  return false  if typeof param is "undefined" or param is null or param is ""
  true


checkForValidity = (params, requiredParams) ->
  errors = []
  for key of requiredParams
    unless paramExist(params[requiredParams[key]])
      error_msg = "Missing parameter [" + requiredParams[key] + "]=\"" + params[requiredParams[key]] + "\""
      console.log error_msg
      errors.push error_msg
  errors


WHITEBOARD_DRAW_EVENT = "whiteboard_draw_event"
module.exports.WHITEBOARD_DRAW_EVENT = WHITEBOARD_DRAW_EVENT

WHITEBOARD_UPDATE_EVENT = "whiteboard_update_event"
module.exports.WHITEBOARD_UPDATE_EVENT = WHITEBOARD_UPDATE_EVENT

SHARE_PRESENTATION_EVENT = "share_presentation_event"
module.exports.SHARE_PRESENTATION_EVENT = SHARE_PRESENTATION_EVENT

PAGE_CHANGED_EVENT = "page_changed_event"
module.exports.PAGE_CHANGED_EVENT = PAGE_CHANGED_EVENT

#this event does not go through the library. We just need the title to appear in the Events dropdown
ANTON_CUSTOM = "anton_custom" #TEMP 
module.exports.ANTON_CUSTOM = ANTON_CUSTOM #TEMP



#list of events to be selected from
module.exports.getEvents =
  0: "Please select an event type"
  1: WHITEBOARD_DRAW_EVENT
  2: WHITEBOARD_UPDATE_EVENT
  3: SHARE_PRESENTATION_EVENT
  4: PAGE_CHANGED_EVENT
  5: ANTON_CUSTOM #this event does not go through the library. We just need the title to appear in the Events dropdown

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
    header.name = WHITEBOARD_DRAW_EVENT
    header.timestamp = new Date().toUTCString()# TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {} # this was not present in the scala file
    payload.meeting.name = params.meetingName # this was not present in the scala file
    payload.meeting.id = params.meetingId # this was not present in the scala file
    payload.session = params.sessionId # this was not present in the scala file
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

    assert.equal header.name, WHITEBOARD_DRAW_EVENT
    #check if data is of the expected type
    extras.isString header.destination.to
    extras.isString header.name
    extras.isString header.timestamp
    extras.isString header.source
    extras.isString payload.meeting.name
    extras.isString payload.meeting.id
    extras.isString payload.session
    extras.isString payload.whiteboard_id
    extras.isString payload.shape_id
    extras.isString payload.shape_type
    extras.isNumber payload.data.coordinate.first_x
    extras.isNumber payload.data.coordinate.first_y
    extras.isNumber payload.data.coordinate.last_x
    extras.isNumber payload.data.coordinate.last_y
    extras.isString payload.data.line.line_type
    extras.isNumber payload.data.line.color
    extras.isNumber payload.data.weight
    extras.isString payload.by.id
    extras.isString payload.by.name
    extras.isBoolean payload.data.background.visible
    extras.isNumber payload.data.background.color
    extras.isNumber payload.data.background.alpha
    extras.isBoolean payload.data.square

    message = {}
    message.header = header
    message.payload = payload
    #console.log "inMSGLIB:" + "Object=" + message + "\n"
    #console.log "inMSGLIB:" + "json=" + JSON.stringify(message) + "\n"
    onSuccess JSON.stringify(message)     
  return
module.exports.whiteboard_draw_event_to_javascript_object = (message, onSuccess, onFailure) ->
  try
    msgObject = JSON.parse(message)
    assert.equal msgObject.header.name, WHITEBOARD_DRAW_EVENT
    #check if data is of the expected type
    extras.isString msgObject.header.destination.to
    extras.isString msgObject.header.name
    extras.isString msgObject.header.timestamp
    extras.isString msgObject.header.source
    extras.isString msgObject.payload.meeting.name
    extras.isString msgObject.payload.meeting.id
    extras.isString msgObject.payload.session
    extras.isString msgObject.payload.whiteboard_id
    extras.isString msgObject.payload.shape_id
    extras.isString msgObject.payload.shape_type
    extras.isNumber msgObject.payload.data.coordinate.first_x
    extras.isNumber msgObject.payload.data.coordinate.first_y
    extras.isNumber msgObject.payload.data.coordinate.last_x
    extras.isNumber msgObject.payload.data.coordinate.last_y
    extras.isString msgObject.payload.data.line.line_type
    extras.isNumber msgObject.payload.data.line.color
    extras.isNumber msgObject.payload.data.weight
    extras.isString msgObject.payload.by.id
    extras.isString msgObject.payload.by.name
    extras.isBoolean msgObject.payload.data.background.visible
    extras.isNumber msgObject.payload.data.background.color
    extras.isNumber msgObject.payload.data.background.alpha
    extras.isBoolean msgObject.payload.data.square

    #console.log "MESSAGE_LIBRARY:" + " success "+msgObject.header.name+" toJavascriptObject"

    onSuccess msgObject
  catch err
    onFailure err
  return

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
    header.name = WHITEBOARD_UPDATE_EVENT
    header.timestamp = new Date().toUTCString()# TODO: Generate ISO8601 timestamps (https://github.com/csnover/js-iso8601)
    header.source = params.source
    payload = {}
    payload.meeting = {} # this was not present in the scala file
    payload.meeting.name = params.meetingName # this was not present in the scala file
    payload.meeting.id = params.meetingId # this was not present in the scala file
    payload.session = params.sessionId # this was not present in the scala file
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

    console.log "inMSGLIB:" + "Object=" + message + "\n"
    console.log "inMSGLIB:" + "json=" + JSON.stringify(message) + "\n"
    
    onSuccess JSON.stringify(message)     
  return
module.exports.whiteboard_update_event_to_javascript_object = (message, onSuccess, onFailure) ->
  try
    msgObject = JSON.parse(message)

    assert.equal msgObject.header.name, WHITEBOARD_UPDATE_EVENT
    #check if data is of the expected type
    extras.isString msgObject.header.destination.to
    extras.isString msgObject.header.name
    extras.isString msgObject.header.timestamp
    extras.isString msgObject.header.source
    extras.isString msgObject.payload.meeting.name
    extras.isString msgObject.payload.meeting.id
    extras.isString msgObject.payload.session
    extras.isString msgObject.payload.whiteboard_id
    extras.isString msgObject.payload.shape_id
    extras.isString msgObject.payload.shape_type
    extras.isNumber msgObject.payload.data.coordinate.first_x
    extras.isNumber msgObject.payload.data.coordinate.first_y
    extras.isNumber msgObject.payload.data.coordinate.last_x
    extras.isNumber msgObject.payload.data.coordinate.last_y
    extras.isString msgObject.payload.data.line.line_type
    extras.isNumber msgObject.payload.data.line.color
    extras.isNumber msgObject.payload.data.weight
    extras.isString msgObject.payload.by.id
    extras.isString msgObject.payload.by.name
    extras.isBoolean msgObject.payload.data.background.visible
    extras.isNumber msgObject.payload.data.background.color
    extras.isNumber msgObject.payload.data.background.alpha
    extras.isBoolean msgObject.payload.data.square

    #console.log "MESSAGE_LIBRARY:" + " success "+msgObject.header.name+" toJavascriptObject"


    onSuccess msgObject
  catch err
    onFailure err
  return

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
    header.name = SHARE_PRESENTATION_EVENT
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
module.exports.share_presentation_event_to_javascript_object = (message, onSuccess, onFailure) ->
  try
    msgObject = JSON.parse(message)

    assert.equal msgObject.header.name, SHARE_PRESENTATION_EVENT
    #check if data is of the expected type
    extras.isString msgObject.header.destination.to
    extras.isString msgObject.header.name
    extras.isString msgObject.header.timestamp
    extras.isString msgObject.header.source
    extras.isString msgObject.payload.meeting.name
    extras.isString msgObject.payload.meeting.id
    extras.isString msgObject.payload.session
    extras.isString msgObject.payload.by.id
    extras.isString msgObject.payload.by.name
    extras.isString msgObject.payload.presentation.id
    extras.isString msgObject.payload.presentation.name

    for page in msgObject.payload.presentation.pages
      extras.isString page.svg, "svg"
      extras.isString page.png, "png"
      extras.isString page.swf, "swf"

    onSuccess msgObject
  catch err
    onFailure err
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
    header.name = PAGE_CHANGED_EVENT
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
module.exports.page_changed_event_to_javascript_object = (message, onSuccess, onFailure) ->
  try
    msgObject = JSON.parse(message)

    assert.equal msgObject.header.name, PAGE_CHANGED_EVENT
    #check if data is of the expected type
    extras.isString msgObject.header.destination.to
    extras.isString msgObject.header.name
    extras.isString msgObject.header.timestamp
    extras.isString msgObject.header.source
    extras.isString msgObject.payload.meeting.name
    extras.isString msgObject.payload.meeting.id
    extras.isString msgObject.payload.session
    extras.isString msgObject.payload.by.id
    extras.isString msgObject.payload.by.name
    extras.isString msgObject.payload.presentation.id
    extras.isString msgObject.payload.presentation.name
    extras.isString msgObject.payload.presentation.page.id
    extras.isNumber msgObject.payload.presentation.page.num

    extras.isString msgObject.payload.presentation.slide.svg, "svg"
    extras.isString msgObject.payload.presentation.slide.png, "png"
    extras.isString msgObject.payload.presentation.slide.swf, "swf"

    onSuccess msgObject
  catch err
    onFailure err
  return


#MANUAL events means that these functions are here to support the "message-library-tool".
#That tool allows for viewing and editing the json message before sending it to pubsub.
#The tool uses jsobject with different structure from the params object that is typically passed
#to the functions in this library.
#These functions (*_manual) can be removed from the library in Production where we do not need the tool anymore
module.exports.whiteboard_draw_event_to_json_manual = (params, onSuccess, onFailure) ->

  try
    json = JSON.stringify(params)
  catch e
    onFailure e

  assert.equal params.header.name, WHITEBOARD_DRAW_EVENT
  extras.isString params.header.destination.to
  extras.isString params.header.name
  extras.isString params.header.timestamp
  extras.isString params.header.source
  extras.isString params.payload.meeting.name
  extras.isString params.payload.meeting.id
  extras.isString params.payload.session
  extras.isString params.payload.whiteboard_id
  extras.isString params.payload.shape_id
  extras.isString params.payload.shape_type
  extras.isNumber params.payload.data.coordinate.first_x
  extras.isNumber params.payload.data.coordinate.first_y
  extras.isNumber params.payload.data.coordinate.last_x
  extras.isNumber params.payload.data.coordinate.last_y
  extras.isString params.payload.data.line.line_type
  extras.isNumber params.payload.data.line.color
  extras.isNumber params.payload.data.weight
  extras.isString params.payload.by.id
  extras.isString params.payload.by.name
  extras.isBoolean params.payload.data.background.visible
  extras.isNumber params.payload.data.background.color
  extras.isNumber params.payload.data.background.alpha
  extras.isBoolean params.payload.data.square

  onSuccess json 
module.exports.whiteboard_update_event_to_json_manual = (params, onSuccess, onFailure) ->
  try
    json = JSON.stringify(params)
  catch e
    onFailure e

  assert.equal params.header.name, WHITEBOARD_UPDATE_EVENT
  extras.isString params.header.destination.to
  extras.isString params.header.name
  extras.isString params.header.timestamp
  extras.isString params.header.source
  extras.isString params.payload.meeting.name
  extras.isString params.payload.meeting.id
  extras.isString params.payload.session
  extras.isString params.payload.whiteboard_id
  extras.isString params.payload.shape_id
  extras.isString params.payload.shape_type
  extras.isNumber params.payload.data.coordinate.first_x
  extras.isNumber params.payload.data.coordinate.first_y
  extras.isNumber params.payload.data.coordinate.last_x
  extras.isNumber params.payload.data.coordinate.last_y
  extras.isString params.payload.data.line.line_type
  extras.isNumber params.payload.data.line.color
  extras.isNumber params.payload.data.weight
  extras.isString params.payload.by.id
  extras.isString params.payload.by.name
  extras.isBoolean params.payload.data.background.visible
  extras.isNumber params.payload.data.background.color
  extras.isNumber params.payload.data.background.alpha
  extras.isBoolean params.payload.data.square

  onSuccess json   
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

