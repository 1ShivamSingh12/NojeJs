import Joi from "joi";


const validate = require("koa-joi-validate");

export const playerUpdateSchema = validate({
  body: {
    Name: Joi.string().trim(),
    bowlerId: Joi.string().hex().length(24).required(),
    ball:Joi.number().required(),
    Runs:Joi.number().optional(),
    four:Joi.number().optional(),
    Six:Joi.number().optional(),
    wicket: Joi.number().optional()
  },
});