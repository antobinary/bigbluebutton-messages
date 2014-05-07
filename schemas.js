/* JSON Message schemas used for validation */

var Joi = require('joi');

var common_schemas = {

  "header" : {
    "name" : Joi.string().required(),
    "timestamp": Joi.string().required(),
    "source": Joi.string().required(),
    "destination" : Joi.object({
      "to" : Joi.string().required()
    })
  },

  "payload" : {
    "meeting" : Joi.object({
      "name" : Joi.string().required(),
      "id" : Joi.string().required()
    }),
    "session" : Joi.string().required()
  },

  "whiteboard" : {
    "whiteboard_id" : Joi.string(),
    "shape_id" : Joi.string().required(),
    "shape_type" : Joi.string().required(),
    "data" : Joi.object({
      "coordinate" : Joi.object({
        "first_x" : Joi.number().required(),
        "first_y" : Joi.number().required(),
        "last_x" : Joi.number().required(),
        "last_y" : Joi.number().required()
      }),
      "line" : Joi.object({
        "color" : Joi.number().required(),
        "line_type" : Joi.string().required()
      }),
      "background" : Joi.object({
        "visible" : Joi.boolean().required(),
        "color" : Joi.number().required(),
        "alpha" : Joi.number().required()
       }),
      "weight" : Joi.number().required(),
      "square" : Joi.boolean().required()
    }),
    "by" : Joi.object({
      "id" : Joi.string().required(),
      "name" : Joi.string().required()
    })
  },
  "user" : {
    "user" : {
      "id" : Joi.string().required(),
      "name" : Joi.string().required()
    }
  },

  "metadata" : {
    "student_id": Joi.string().required(),
    "program": Joi.string().required()
  },

  "media_streams": Joi.array({
    "media_type": Joi.string().required(),
    "uri": Joi.string().required(),
    "metadata": Joi.object({
        "foo": Joi.string().required()
    })
  }).required(),

  "caller_id" : {
    "name": Joi.string().required(),
    "number": Joi.string().required()
  },

  "status" : {
    "hand_raised": Joi.boolean().required(),
    "muted": Joi.boolean().required(),
    "locked": Joi.boolean().required(),
    "talking": Joi.boolean().required()
  }

};

/* Function to merge two objects */
function merge(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

var schemas = {
  "whiteboard_draw_event" : Joi.object({
    "header": Joi.object(common_schemas.header),
    "payload": Joi.object(merge(common_schemas.payload, common_schemas.whiteboard))
  }),
  "whiteboard_update_event" : Joi.object({
    "header": Joi.object(common_schemas.header),
    "payload": Joi.object(merge(common_schemas.payload, common_schemas.whiteboard))
  }),
  "user_left_event" : Joi.object({
    "header": Joi.object(common_schemas.header),
    "payload": Joi.object(merge(common_schemas.payload, common_schemas.user))
  }),
  "user_joined_event": Joi.object(userJoinedEvent)
};

var userJoinedEvent = {
  "header": Joi.object(common_schemas.header),
  "payload": Joi.object(merge(common_schemas.payload, {
    "user": Joi.object(merge(common_schemas.user, 
      {
        "external_id": Joi.string().required(),
        "role": Joi.string().required(),
        "pin": Joi.number().required(),
        "welcome_message": Joi.string().required(),
        "logout_url": Joi.string().required(),
        "avatar_url": Joi.string().required(),
        "is_presenter": Joi.boolean().required()
        
      }
    )),
    "status": common_schemas.status,
    "caller_id": common_schemas.caller_id,
    "metadata": common_schemas.metadata,
    "media_streams": common_schemas.media_streams
  }))
};

   
module.exports = schemas;