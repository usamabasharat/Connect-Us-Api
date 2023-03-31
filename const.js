const roleEnum = ['admin', 'superadmin', 'manager', 'user'];
const designationEnum = ['ase', 'se', 'sse', 'atl', 'tl', 'apm', 'pm'];
const meeting_participant_type=['host', 'participant'];
const question_type = ["mock", "codereview", "one", "annual", "biannual", "quarterly"];
const question_answer_type = ["numeric", "string", "boolean", "options"];
const week_day = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

const STRING_PATTERN = 'Name must be between 2 and 30 characters long and contain only letters'
const NAME_REQUIRED = 'Name is required'
const VALID_EMAIL = 'Please enter a valid email address'
const EMAIL_REQUIRED = 'Email is required'
const PASSWORD_BASE = 'Password must be at least 8 characters long and contain only letters and numbers'
const PASSWORD_REQUIRED = 'Password is required'
const STATUS = 'Status must be one of'
const STATUS_REQUIRED = 'Status is required'
const TYPE_MESSAGE = 'meeting participant type must be one of'
const PARTICIPANT_REQUIRED = "meeting participant type is required"
const FROM_TIME =  "from is required"
const TO_TIME =  "to is required"
const QUESTION_REQUIRED = "Question is required"
const QUESTION_MESSAGE = "Question Type must be one of"
const QUESTION_TYPE = "Question Type is required"
const ANSWER_TYPE = "Question Answer Type must be one of"
const ANSWER_REQUIRED = "Question Answer Type is required"
const ATTACHMENT_REQUIRED = "Attachment is required"
const DESCRIPTION_REQUIRED = "Description is required"
const TITLE_REQUIRED = "Title is required"
const WEEKDAY_REQUIRED = "Week Day is required"
const WEEKDAY_MESSAGE = "Week day must be one of"
const FEEDBACK_REQUIRED = "feedback type is required"
const FEEDBACK_MESSAGE = "Feedback type must be one of"
const OPTIONAL_REQUIRED = "optional is required"

module.exports = {
  roleEnum,
  designationEnum,
  meeting_participant_type,
  question_type,
  question_answer_type,
  week_day,
  STRING_PATTERN,
  NAME_REQUIRED,
  VALID_EMAIL,
  EMAIL_REQUIRED,
  PASSWORD_BASE, 
  PASSWORD_REQUIRED,
  STATUS,
  STATUS_REQUIRED,
  TYPE_MESSAGE,
  PARTICIPANT_REQUIRED,
  FROM_TIME,
  TO_TIME,
  QUESTION_REQUIRED,
  QUESTION_MESSAGE,
  QUESTION_TYPE,
  ANSWER_TYPE,
  ANSWER_REQUIRED,
  TITLE_REQUIRED,
  DESCRIPTION_REQUIRED,
  ATTACHMENT_REQUIRED,
  WEEKDAY_REQUIRED,
  WEEKDAY_MESSAGE,
  FEEDBACK_REQUIRED,
  FEEDBACK_MESSAGE,
  OPTIONAL_REQUIRED
};
