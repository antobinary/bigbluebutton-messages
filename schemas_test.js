var Joi = require('joi');
var Schemas = require('./schemas')

var message = {
    "header": {
        "destination": {
            "to": "apps_channel"
        },
        "name": "user_left_event",
        "timestamp": "2013-12-23T08:50Z",
        "source": "web-api"
    },
    "payload": {
        "meeting": {
            "name": "English 101",
            "id": "english_101"
        },
        "session": "english_101-12345",
        "user": {
            "id": "juanid",
            "name": "Juan Tamad"
        }
    }
};

var name = message.header.name

console.log(JSON.stringify(Schemas[name]));

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


/*console.log("_________");
Joi.boolean().validate(1==1, function (err, value) {
if (err)
 console.log ("err" + err)
 else
 console.log ("va;=" + JSON.stringify(value)) });
//console.log (a);*/