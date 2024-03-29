const Joi = require("joi");
const roleEnum = ['admin', 'superadmin', 'manager', 'user'];
const designationEnum = ['ase', 'se', 'sse', 'atl', 'tl', 'apm', 'pm'];
const userObject = {
    first_name: Joi.string()
        .pattern(new RegExp('^[a-zA-Z ]{2,30}$'))
        .required()
        .messages({
            'string.pattern.base': 'Name must be between 2 and 30 characters long and contain only letters',
            'any.required': 'Name is required',
        }),
    last_name: Joi.string()
        .pattern(new RegExp('^[a-zA-Z ]{2,30}$'))
        .required()
        .messages({
            'string.pattern.base': 'Name must be between 2 and 30 characters long and contain only letters',
            'any.required': 'Name is required',
        }),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.email': 'Please enter a valid email address',
      'any.required': 'Email is required',
    }),
    phone: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
        .required()
        .messages({
            'string.pattern.base': 'Password must be at least 8 characters long and contain only letters and numbers',
            'any.required': 'Password is required',
        }),
    role: Joi.string()
    .valid(...roleEnum)
    .required()
    .messages({
      'any.only': `Status must be one of ${roleEnum.join(', ')}`,
      'any.required': 'Status is required',
    }),
    designation: Joi.string()
    .valid(...designationEnum)
    .required()
    .messages({
      'any.only': `Status must be one of ${designationEnum.join(', ')}`,
      'any.required': 'Status is required',
    }),
}
const userSchema = Joi.object(userObject);
const {email,id,...updateUserObject} = userObject
const userUpdateSchema = Joi.object(updateUserObject);
module.exports = {
    userSchema,
    userUpdateSchema
};