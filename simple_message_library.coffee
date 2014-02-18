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
WHITEBOARD_UPDATE_EVENT = "whiteboard_update_event"



module.exports.WHITEBOARD_DRAW_EVENT = WHITEBOARD_DRAW_EVENT
module.exports.WHITEBOARD_UPDATE_EVENT = WHITEBOARD_UPDATE_EVENT

#list of events to be selected from
module.exports.getEvents =
  0: "Please select an event type"
  1: WHITEBOARD_DRAW_EVENT
  2: WHITEBOARD_UPDATE_EVENT


# TODO: Add some documentation using http://usejsdoc.org/
# Document requried and optional parameters
module.exports.whiteboardDrawEventToJson = (params, onSuccess, onFailure) ->
  
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
    console.log "MESSAGE_LIBRARY:" + " success "+message.header.name+"toJson"
    onSuccess JSON.stringify(message)     
  return

module.exports.whiteboardUpdateEventToJson = (params, onSuccess, onFailure) ->
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
    onSuccess JSON.stringify(message)     
  return




module.exports.whiteboardDrawEventToJavascriptObject = (message, onSuccess, onFailure) ->
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

    console.log "MESSAGE_LIBRARY:" + " success "+msgObject.header.name+" toJavascriptObject"

    onSuccess msgObject
  catch err
    onFailure err
  return


module.exports.whiteboardUpdateEventToJavascriptObject = (message, onSuccess, onFailure) ->
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

    console.log "MESSAGE_LIBRARY:" + " success "+msgObject.header.name+" toJavascriptObject"


    onSuccess msgObject
  catch err
    onFailure err
  return

###
module.exports.whiteboardUpdateEventToJavascriptObject = (message, onSuccess, onFailure) ->
  try
    msgObject = JSON.parse(message)
    onSuccess msgObject
  catch err
    onFailure err
  return###