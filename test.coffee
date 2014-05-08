{MessageNames} = require './messagenames'
Joi = require 'joi'

console.log(MessageNames.WHITEBOARD_DRAW_EVENT)

schema = {
    username: Joi.string().alphanum().min(3).max(30).with('birthyear').required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).without('access_token'),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email()
};

err = Joi.validate({ username: 'abc', birthyear: 1994 }, schema); 

if not err 
  console.log("Schema is valid")

object = Joi.object({
    a: Joi.number().integer().min(1).max(10)
})

err = object.validate({ a: 5 });

mschema = Joi.object({
  header: Joi.object({
    destination: Joi.object({
      to: Joi.string()
    }),
    reply: Joi.object({
      to: Joi.string(),
      correlation_id: Joi.string()
    }),
    name: Joi.string()
  }) 
})

msg = {
  header: {
    destination: {
      to: "apps_channel"
    },
    reply: {
      to: "apps_channel",
      correlation_id: "abc"
    },
    name: "create_meeting_request"
  }
}

err = mschema.validate(msg)
if not err 
  console.log("Message is valid.")