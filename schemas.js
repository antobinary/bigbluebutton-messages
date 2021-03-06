/* JSON Message schemas used for validation */
var Joi = require('joi');

var common_schemas = {

  "header": {
    "name": Joi.string().required(),
    "timestamp": Joi.string().required(),
    "source": Joi.string().required(),
    "destination": Joi.object({
      "to": Joi.string().required()
    })
  },

  "payload": {
    "meeting": Joi.object({
      "name": Joi.string().required(),
      "id": Joi.string().required()
    }),
    "session": Joi.string().required()
  },

  "meeting": {
      "name": Joi.string().required(),
      "id": Joi.string().required()
    },

  "whiteboard": {
    "whiteboard_id": Joi.string(),
    "shape_id": Joi.string().required(),
    "shape_type": Joi.string().required(),
    "data": Joi.object({
      "coordinate": Joi.object({
        "first_x": Joi.number().required(),
        "first_y": Joi.number().required(),
        "last_x": Joi.number().required(),
        "last_y": Joi.number().required()
      }),
      "line": Joi.object({
        "color": Joi.number().required(),
        "line_type": Joi.string().required(),
        "weight": Joi.number().required()
      }),
      "background": Joi.object({
        "visible": Joi.boolean().required(),
        "color": Joi.number().required(),
        "alpha": Joi.number().required()
      }),
      "square": Joi.boolean() //" draw line" does not have it
    }),
    "by": Joi.object({
      "id": Joi.string().required(),
      "name": Joi.string().required()
    })
  },

  "user": {
    "id": Joi.string().required(),
    "name": Joi.string().required()
  },

  "metadata": {
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

  "caller_id": {
    "name": Joi.string().required(),
    "number": Joi.string().required()
  },

  "status": {
    "hand_raised": Joi.boolean().required(),
    "muted": Joi.boolean().required(),
    "locked": Joi.boolean().required(),
    "talking": Joi.boolean().required()
  },

  "by": {
    "id": Joi.string().required(),
    "name": Joi.string().required()
  }

};

/* Function to merge two objects */
function merge(obj1, obj2) {
  var obj3 = {};
  for (var attrname in obj1) {obj3[attrname] = obj1[attrname];}
  for (var attrname in obj2) {obj3[attrname] = obj2[attrname];}
  return obj3;
}

var schemas = {
  "whiteboard_draw_event": Joi.object({
    "header": Joi.object(common_schemas.header),
    "payload": Joi.object(merge(common_schemas.payload, common_schemas.whiteboard))
  }),

  "whiteboard_update_event": Joi.object({
    "header": Joi.object(common_schemas.header),
    "payload": Joi.object(merge(common_schemas.payload, common_schemas.whiteboard))
  }),

  "user_left_event": Joi.object({
    "header": Joi.object(common_schemas.header),
    "payload": Joi.object(merge(common_schemas.payload, {
      "user": Joi.object(common_schemas.user)
    }))
  }),

  "user_joined_event": Joi.object({
    "header": Joi.object(common_schemas.header),
    "payload": Joi.object({
      "meeting": Joi.object(common_schemas.meeting),
      "session": Joi.string().required(),
      "user": Joi.object({
        "id": Joi.string().required(),
        "external_id": Joi.string().required(),
        "name": Joi.string().required(),
        "role": Joi.string().required(),
        "pin": Joi.number().required(),
        "welcome_message": Joi.string().required(),
        "logout_url": Joi.string().required(),
        "avatar_url": Joi.string().required(),
        "is_presenter": Joi.boolean().required(),
        "status": Joi.object(common_schemas.status),
        "caller_id": Joi.object(common_schemas.caller_id),
        "media_streams": Joi.array(common_schemas.media_streams),
        "metadata": Joi.object(common_schemas.metadata)
      })
    })
  }),

  "share_presentation_event": Joi.object({
    "header": Joi.object(common_schemas.header),
    "payload": Joi.object(merge(common_schemas.payload, {
      "by": Joi.object(common_schemas.by),
      "presentation": Joi.object({
        "id": Joi.string().required(),
        "name": Joi.string().required(),
        "pages": Joi.array({
          "svg": Joi.string().required(),
          "png": Joi.string().required(),
          "swf": Joi.string().required()
        }).required()
      })
    }))
  }),

  "page_changed_event": Joi.object({
    "header": Joi.object(common_schemas.header),
    "payload": Joi.object(merge(common_schemas.payload, {
      "by": Joi.object(common_schemas.by),
      "presentation": Joi.object({
        "id": Joi.string().required(),
        "name": Joi.string().required(),
        "page": Joi.object({
          "id": Joi.string().required(),
          "num": Joi.number().required()
        }).required(),
        "slide": Joi.object({
          "svg": Joi.string().required(),
          "png": Joi.string().required(),
          "swf": Joi.string().required()
        })
      })
    }))
  })
};


module.exports = schemas;