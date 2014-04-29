var Joi = require('joi');
var Schemas = require('./schemas')

var message = {

    "header":{
        "name":"whiteboard_draw_event",
        "timestamp":"Thu, 24 Apr 2014 22:19:10 GMT",
        "source":"bbb-apps",
        "destination":{
            "to":"apps_channel"
        }
    },

    "payload":{
        "meeting":{
            "name":"Demo Meeting",
            "id":"123123123"
        },
        "session":"12313123123",
        "whiteboard_id":"presentation_id/page_num",
        "shape_id":"q779ogycfmxk-13-1383262166102",
        "shape_type":"line",
        "data":{
            "coordinate":{
                "first_x":0.016025641025641028,
                "first_y":0.982905982905983,
                "last_x":0.33,
                "last_y":0.45
            },
            "line":{
                "line_type":"solid",
                "color":0
            },
            "weight":18,
            "background":{
                "visible":true,
                "color":0,
                "alpha":1
            },
            "square":false
        },
        "by":{
            "id":"user1",
            "name":"Guga"
        }
    }
};

var name = message.header.name

console.log(Schemas[name]);

var val = Joi.validate(message, Schemas[name], function (err, value)
{
  if (err) {
    console.log(err);
  }
  else
  {
    console.log('Message is valid');
  }
});