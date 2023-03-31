const Joi = require("joi");
const CONST = require("../const")

const userObject = {
    first_name: Joi.string()
        .pattern(new RegExp('^[a-zA-Z ]{2,30}$'))
        .required()
        .messages({
            'string.pattern.base': `${CONST.STRING_PATTERN}` ,
            'any.required': `${CONST.NAME_REQUIRED}`,
        }),
    last_name: Joi.string()
        .pattern(new RegExp('^[a-zA-Z ]{2,30}$'))
        .required()
        .messages({
            'string.pattern.base': `${CONST.STRING_PATTERN}`,
            'any.required': `${CONST.NAME_REQUIRED}`,
        }),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.email': `${CONST.VALID_EMAIL}`,
      'any.required': `${CONST.EMAIL_REQUIRED}`,
    }),
    salt: Joi.string(),
    phone: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
        .required()
        .messages({
            'string.pattern.base': `${CONST.PASSWORD_BASE}`,
            'any.required': `${CONST.PASSWORD_REQUIRED}`,
        }),
    role: Joi.string()
    .valid(...CONST.ROLE_ENUM)
    .required()
    .messages({
      'any.only': `${CONST.STATUS} ${CONST.ROLE_ENUM.join(', ')}`,
      'any.required': `${CONST.STATUS_REQUIRED}`,
    }),
    designation: Joi.string()
    .valid(...CONST.DESIGNATION_ENUM)
    .required()
    .messages({
      'any.only': `${CONST.STATUS} ${CONST.DESIGNATION_ENUM.join(', ')}`,
      'any.required': `${CONST.STATUS_REQUIRED}`,
    }),
}
const userSchema = Joi.object(userObject);
const {email,...updateUserObject} = userObject
const userUpdateSchema = Joi.object(updateUserObject);

module.exports = {
    userSchema,
    userUpdateSchema
};
