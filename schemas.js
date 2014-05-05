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
  })
};

module.exports = schemas;