const BASE_URL = "http://localhost:3001";

export const GET_BY_LINK_NICK = BASE_URL + "/user";
export const GET_USER_PROFILE = BASE_URL + "/auth/get-user/";
export const SEND_EMAIL = BASE_URL + "/mail/send/";
export const FREELANCER_CREATE = BASE_URL + "/user/create/";
export const LINK_NICK_IS_AVAILABLE = BASE_URL + "/user/isLinkNickAvailable/";
export const LOGIN = BASE_URL + "/auth/login/";

export const CHANGE_PASSWORD = BASE_URL + "/auth/change-password/"
export const CHANGE_EMAIL = BASE_URL + "/auth/change-email/"

export const RESET_PASSWORD_SEND_EMAIL = BASE_URL + "/auth/reset-password-send-email/";
export const RESET_PASSWORD_CHECK_TOKEN = BASE_URL + "/auth/reset-password-check-token/";
export const RESET_PASSWORD = BASE_URL + "/auth/reset-password/";

export const GET_ALL_USERS = BASE_URL + "/user/getAll/";
export const GET_ALL_FREELANCERS = BASE_URL + "/user/getAll/";

export const INC_VISIT_COUNT = BASE_URL + "/user/addVisitCount/";
export const GET_VISIT_COUNT = BASE_URL + "/user/getVisitCount/";
export const GET_VISIT_DETAILS = BASE_URL + "/user/getVisitDetails/";

export const REGISTER = BASE_URL + "/auth/register/";

export const GET_BLOG = BASE_URL + "/blog";
export const GET_SKILL_BY_USER_ID = BASE_URL + "/skill";
export const GET_EXPERIENCE_BY_USER_ID = BASE_URL + "/experience";
export const GET_SOCIAL_MEDIA_BY_USER_ID = BASE_URL + "/socialLink";
export const CREATE_BLOG = BASE_URL + "/blogs/create/";
export const UPDATE_BLOG = BASE_URL + "/blogs/update/";

export const DELETE_BLOG = BASE_URL + "/blogs/delete-blog/";

export const GET_NOTIFICATIONS = BASE_URL + "/freelancer-notifications/getNotifications/";
export const SEND_NOTIFICATION = BASE_URL + "/freelancer-notifications/send/";
export const NOTIFICATION_SET_READ = BASE_URL + "/freelancer-notifications/setRead/";
export const GET_UNREAD_NOTIFICATIONS = BASE_URL + "/freelancer-notifications/getUnreadNotifications/";
export const NOTIFICATION_SET_ACCEPTED = BASE_URL + "/freelancer-notifications/setAccepted/";

export const CHANGE_COLLECTIVE_SHOWN = BASE_URL + "/user/change-collective-shown/";

export const CREATE_USER_PROFILE = BASE_URL + "/user/create/";
export const GET_USER_PROFILE_BY_USER_ID = BASE_URL + "/user/getById/";
export const USER_CHANGE_THEME = BASE_URL + "/user/change-theme/";

export const COMPANY_CREATE = BASE_URL + "/company/create/";
export const GET_BY_USER_ID_COMPANY = BASE_URL + "/company/getByUserId/";

export const GET_ALL_FREELANCER_ROLES = BASE_URL + "/user/getAllRoles/";

export const CREATE_TICKET = BASE_URL + "/ticket/create/";
export const DELETE_TICKET = BASE_URL + "/ticket/delete/";
export const CANCEL_TICKET_INVITE = BASE_URL + "/ticket/cancel-ticket-invite/";

export const JOB_REQUEST = BASE_URL + "/job-request";

export const CREATE_PROJECT = BASE_URL + "/project/create/";
export const JOIN_PROJECT = BASE_URL + "/project/join/";
export const LEAVE_PROJECT = BASE_URL + "/project/leave/";
export const GET_USER_PROJECTS = BASE_URL + "/project/getByUserId/";

export const GET_TICKET_BY_ID = BASE_URL + "/ticket/getById/";
export const SET_FREELANCER_ACCEPTED = BASE_URL + "/ticket/setFreelancerAccepted/";
export const SET_COMPANY_ACCEPTED = BASE_URL + "/ticket/setCompanyAccepted/";

export const GET_PROJECT_BY_ID = BASE_URL + "/project/getById/";
export const PROJECT_SEND_MESSAGE = BASE_URL + "/project/send-message/";
export const PROJECT_FILE = BASE_URL + "/project/file/";
export const PROJECT = BASE_URL + "/project/";

export const GET_TASKBOARD_BY_USER_ID = BASE_URL + "/task";
export const GET_TASK_BY_TASKID = BASE_URL + "/task";
export const CREATE_TASKBOARD = BASE_URL + "/task/";
export const DELETE_TASKBOARD = BASE_URL + "/task";
export const CREATE_TASK = BASE_URL + "/task/create";
export const TASK_UPDATE = BASE_URL + "/task/update";
export const TASK_DELETE = BASE_URL + "/task/delete";
export const UPDATE_TASK_BOARD = BASE_URL + "/task/";

export const TASK_STATE_CREATE = BASE_URL + "/task/add-state";
export const TASK_STATE_UPDATE = BASE_URL + "/task/update-state";
export const TASK_STATE_DELETE = BASE_URL + "/task/delete-state";

export const IS_EMAIL_AVAILABLE = BASE_URL + "/auth/is-email-available/";

export const GET_SALES_PIPELINE_BY_USER_ID = BASE_URL + "/sales-pipeline/user/";
export const UPDATE_SALES_PIPELINE = BASE_URL + "/sales-pipeline/"; 