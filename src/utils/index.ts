import { Response } from 'express';
import CONSTANTS from '../constants';
/*const config = require("../config");
const moment = require("moment");
const { campaigns } = require("../models");
const fs = require("node:fs/promises");*/

export const sendResponse = (
  res: Response,
  code: number,
  message: string | null = null,
  data: object | null = null
) => {
  res
    .status(getHTTPStatusCode(code))
    .json({ status: getStatusTrueFalse(code), message, data, code });
};

const getHTTPStatusCode = (code: number) => {
  if (code) {
    return code;
  } else {
    return CONSTANTS.CODE.SERVER_ERROR;
  }
};

const getStatusTrueFalse = (code: number) => {
  return code == CONSTANTS.CODE.SUCCESS;
};

const consoleLog = (message: string | null, data: object | null) => {
  console.log(message, ' ==> ', data || 'N/A');
};

/*const extractForAuthTable = (data) => ({
    email: data.email,
    user: data._id,
    user_name: data.user_name,
    first_name: data.first_name,
    last_name: data.last_name,
    user_type: data.user_type,
    user_status: data.user_status,
    notification: data.notification,
    fcm_token: data.fcm_token,
    role: data.role,
});
const extractJWTokenData = (data) => ({
    email: data.email,
    user: data._id,
    first_name: data.first_name,
    last_name: data.last_name,
    user_name: data.user_name,
    user_type: data.user_type,
});

const checkUserType = (userType, condition) => {
    let result = userType.find((type) => type === condition);
    if (result) return true;
    else return false;
};
const getNHoursFutureUnixTime = (n) => moment().utc().add(n, "hours").valueOf();
const getNMinutesFutureUnixTime = (n) =>
    moment().utc().add(n, "minutes").valueOf();
const getCurrentUnixTime = () => moment().utc().valueOf();
const getCurrentUnixTimeWithoutTime = () =>
    moment().utc().startOf("day").valueOf();
const getNDaysUTCDate = (n) =>
    moment().utc().add(n, "day").startOf("day").valueOf(); //(new Date(new Date(new Date().setDate(new Date().getDate()-n)).setHours(0,0,0,0)).getTime())
const getNDaysPastTime = (n) =>
    moment().utc().add(n, "day").startOf("day").format();
const getNUTCDateStartDay = (date) =>
    moment(date).utc().startOf("day").toDate(); //return new Date(new Date(new Date(date).setHours(0,0,0,0)).setDate(new Date().getUTCDate()))}
const getNUTCDateEndDay = (date) => moment(date).utc().endOf("day").toDate(); //return new Date(new Date(new Date(date).setHours(23,59,59,0)).setDate(new Date().getUTCDate()))}
const webSendEmailVerificationLink = (data) =>
    `${config.USER_PORTAL_URL}auth/FanInterests/${data.email}/${data.otp}`;
const webForgotPasswordLink = (data) =>
    `${config.USER_PORTAL_URL}auth/change-forgot-password/${data.user}/${data.otp}`;
const AdminWebForgotPasswordLink = (data) =>
    `${config.ADMIN_PORTAL_URL}reset-password/${data.user}/${data.otp}`;
const signUpFanClientEmailVerification = (data) =>
    `${config.USER_PORTAL_URL}auth/verification/${data.user}/${data.otp}`;
const signUpUserEmailVerification = (data) =>
    `${config.CAMPAIGN_PORTAL_PROTOCOL}${data.domainPrefix}.${config.CAMPAIGN_PORTAL_BASE_URL}verification/${data.user}/${data.otp}`;
const getCampaignLink = (data) =>
    `${config.CAMPAIGN_PORTAL_PROTOCOL}${data.domainPrefix}.${config.CAMPAIGN_PORTAL_BASE_URL}`;
const webUserResetPassword = (data) =>
    `${config.CAMPAIGN_PORTAL_PROTOCOL}${data.domainPrefix}.${config.CAMPAIGN_PORTAL_BASE_URL}reset-password/${data.user}/${data.otp}`;
const ClientFanLoginLink = () => `${config.USER_PORTAL_URL}`;
const associateUserAcceptLink = (existing, data) =>
    existing
        ? `${config.USER_PORTAL_URL}auth/verify-associate/${data.user}/${data.client}/${data.otp}`
        : `${config.USER_PORTAL_URL}auth/verify-associate/${data.user}/${data.client}/${data.otp}`;
const adminPendingCampaignPageLink = () =>
    `${config.ADMIN_PORTAL_URL}campaigns/pending-campaigns`;
const AdminLoginLink = () => `${config.ADMIN_PORTAL_URL}`;
const getListOfSpecificField = (data, fieldName, condObj) => {
    var listArray
    if (!condObj) {
        listArray = data.reduce((list, obj) => {
            if (obj[fieldName] && Array.isArray(obj[fieldName])) {
                list = [...list, ...obj[fieldName]];
                return list;
            } else if (obj[fieldName]) {
                list.push(obj[fieldName]);
                return list;
            } else {
                return list;
            }
        }, []);
    } else {
        listArray = data.reduce((list, obj) => {
            if (obj[fieldName] && obj[condObj.field] === condObj.condition)
                list.push(obj[fieldName]);
            return list;
        }, []);
    }
    return [...new Set(listArray)];
};
const getBucketName = (bucket) => {
    switch (bucket) {
        case CONSTANTS.S3_BUCKET_NAME.PROFILE:
            return `${CONSTANTS.S3_BUCKET_NAME.PROFILE}${new Date().getTime()}`;
        default:
            return `${CONSTANTS.S3_BUCKET_NAME.PROFILE}${new Date().getTime()}`;
    }
};
const notificationMapping = (data, condition) => {
    switch (condition) {
        case CONSTANTS.SWITCH.FOLLOW:
            return {
                campaign: data?.campaign,
                type: CONSTANTS.NOTIFICATION_TYPE.FOLLOW,
                message: CONSTANTS.NOTIFICATION_MESSAGE.FOLLOW(data.user_name),
                file: data?.file,
                from: data.from,
                to: [data.to],
            };
        case CONSTANTS.SWITCH.USER_BLOCK:
            return {
                campaign: data?.campaign,
                type: CONSTANTS.NOTIFICATION_TYPE.USER_BLOCK,
                from_user_type: CONSTANTS.USER.TYPE.ADMIN,
                message: CONSTANTS.NOTIFICATION_MESSAGE.USER_BLOCK,
                file: data?.file,
                from: data.from,
                to: [data.to],
            };
        case CONSTANTS.SWITCH.CAMPAIGN_CREATE:
            return {
                campaign: data?.campaign,
                campaign_name: data?.campaignName || "",
                campaign_domain: data?.campaignDomain || "",
                type: CONSTANTS.NOTIFICATION_TYPE.CAMPAIGN_CREATE,
                from_user_type: CONSTANTS.USER.TYPE.ADMIN,
                message: CONSTANTS.NOTIFICATION_MESSAGE.CAMPAIGN_CREATE(
                    data?.user_name
                ),
                file: data?.file,
                from: data.from,
                to: [data.to],
            };
        case CONSTANTS.SWITCH.CAMPAIGN_CREATE_FOR_FOLLOWERS:
            return {
                campaign: data?.campaign,
                campaign_name: data?.campaignName || "",
                campaign_domain: data?.campaignDomain || "",
                type: CONSTANTS.NOTIFICATION_TYPE.CAMPAIGN_CREATE,
                from_user_type: CONSTANTS.USER.TYPE.ADMIN,
                message: CONSTANTS.NOTIFICATION_MESSAGE.CAMPAIGN_CREATE_FOR_USERS(
                    data?.user_name
                ),
                file: data?.file,
                from: data.from,
                to: [data?.to],
            };
        case CONSTANTS.SWITCH.USER_SHARE_GOAL_ACHIEVED:
            return {
                campaign: data?.campaign,
                campaign_name: data?.campaignName || "",
                campaign_domain: data?.campaignDomain || "",
                type: CONSTANTS.NOTIFICATION_TYPE.SHARE_GOAL_ACHIEVED,
                from_user_type: CONSTANTS.USER.TYPE.USER,
                message:
                    CONSTANTS.NOTIFICATION_MESSAGE.USER_CAMPAIGN_SHARE_GOAL_ACHIEVED({
                        campaign_name: data.campaignName,
                        user_name: data.user_name,
                    }),
                file: data?.file,
                from: data.from,
                to: [data?.to],
            };
        case CONSTANTS.SWITCH.INDIVIDUAL_SHARE_GOAL_ACHIEVED:
            return {
                campaign: data?.campaign,
                campaign_name: data?.campaignName || "",
                campaign_domain: data?.campaignDomain || "",
                type: CONSTANTS.NOTIFICATION_TYPE.SHARE_GOAL_ACHIEVED,
                from_user_type: CONSTANTS.USER.TYPE.USER,
                message: CONSTANTS.NOTIFICATION_MESSAGE.INDIVIDUAL_SHARE_GOAL_ACHIEVED({
                    campaign_name: data?.campaignName,
                }),
                file: data?.file,
                from: data.from,
                to: [data?.to],
            };
        case CONSTANTS.SWITCH.SHARE_GOAL_ACHIEVED:
            return {
                campaign: data?.campaign,
                campaign_name: data?.campaignName || "",
                campaign_domain: data?.campaignDomain || "",
                type: CONSTANTS.NOTIFICATION_TYPE.SHARE_GOAL_ACHIEVED,
                from_user_type: CONSTANTS.USER.TYPE.USER,
                message: CONSTANTS.NOTIFICATION_MESSAGE.CAMPAIGN_SHARE_GOAL_ACHIEVED(
                    data?.campaignName
                ),
                file: data?.file,
                from: data.from,
                to: [data?.to],
            };
        case CONSTANTS.SWITCH.CAMPAIGN_CREATE_REVIEW:
            return {
                campaign: data?.campaign,
                campaign_name: data?.campaignName || "",
                campaign_domain: data?.campaignDomain || "",
                type: CONSTANTS.NOTIFICATION_TYPE.CAMPAIGN_CREATE_REVIEW,
                from_user_type: CONSTANTS.USER.TYPE.USER,
                message: CONSTANTS.NOTIFICATION_MESSAGE.CAMPAIGN_CREATE_REVIEW(
                    data?.user_name
                ),
                file: data?.file,
                from: data.from,
                to: [data?.to],
            };
        case CONSTANTS.SWITCH.CAMPAIGN_REVIEWED:
            return {
                campaign: data?.campaign,
                campaign_name: data?.campaignName || "",
                campaign_domain: data?.campaignDomain || "",
                type: CONSTANTS.NOTIFICATION_TYPE.CAMPAIGN_REVIEWED,
                from_user_type: CONSTANTS.USER.TYPE.ADMIN,
                message: CONSTANTS.NOTIFICATION_MESSAGE.CAMPAIGN_REVIEWED({
                    campaign_name: data?.campaignName,
                    status: data?.status,
                }),
                file: data?.file,
                from: data.from,
                to: [data?.to],
            };
        case CONSTANTS.SWITCH.CAMPAIGN_PUBLISHED_FOR_USERS:
            return {
                campaign: data?.campaign,
                campaign_name: data?.campaignName || "",
                campaign_domain: data?.campaignDomain || "",
                type: CONSTANTS.NOTIFICATION_TYPE.CAMPAIGN_REVIEWED,
                from_user_type: data.user_type,
                message: CONSTANTS.NOTIFICATION_MESSAGE.CAMPAIGN_PUBLISHED_FOR_USERS({
                    campaign_name: data?.campaignName,
                    user_name: data.user_name,
                }),
                file: data?.file,
                from: data.from,
                to: [data?.to],
            };
        case CONSTANTS.SWITCH.CAMPAIGN_PUBLISHED_FOR_CLIENT:
            return {
                campaign: data?.campaign,
                campaign_name: data?.campaignName || "",
                campaign_domain: data?.campaignDomain || "",
                type: CONSTANTS.NOTIFICATION_TYPE.CAMPAIGN_REVIEWED,
                from_user_type: data.user_type,
                message: CONSTANTS.NOTIFICATION_MESSAGE.CAMPAIGN_PUBLISHED_FOR_CLIENT({
                    campaign_name: data?.campaignName,
                }),
                file: data?.file,
                from: data.from,
                to: [data?.to],
            };
        case CONSTANTS.SWITCH.USER_SIGNUP:
            return {
                campaign: null,
                type: CONSTANTS.NOTIFICATION_TYPE.USER_SIGNUP,
                from_user_type: data.user_type,
                message: CONSTANTS.NOTIFICATION_MESSAGE.USER_SIGNUP({
                    user_name: data.user_name,
                    user_type: data.user_type,
                }),
                from: data.from,
                to: [data?.to],
            };
        default:
            return;
    }
};
const getNPercentageValue = (total, value) => Math.floor((value / total) * 100);
const findValueInProvidedList = (list, value, find) => {
    switch (find) {
        case CONSTANTS.SWITCH.GOAL_ACHIEVER:
            if (!list || !list?.length) return false;
            return list.some((v) => {
                if (v == value) return true;
                else return false;
            });

        case "":
            return false;
        default:
            return false;
    }
};
const checkForCampaignCreator = async (data) => {
    try {
        let camp = await campaigns
            .findOne({ _id: data.campaign }, { user: 1 })
            .populate({
                path: "user",
                select: ["associates"],
            })
            .lean();
        let associate = camp.user?.associates?.findIndex(
            (value) => value.toString() === data?.user?.toString()
        );
        if (
            data.user?.toString() === camp.user?._id?.toString() ||
            associate !== -1
        )
            return true;
        else return false;
    } catch (e) {
        return false;
    }
};
const campParRepDataFor = (data, header) => {
    var fields = Object.keys(data[0]);
    var sheetData = data.map(function (row) {
        return fields.map(function (fieldName) {
            return row[fieldName] ? row[fieldName] : "";
        });
    });
    sheetData.unshift(header);
    return sheetData;
};
const removeFileFromDir = async (path) => {
    try {
        await fs.unlink(path);
        console.log("successfully deleted", `${path}`);
    } catch (error) {
        console.error("there was an error:", error.message);
    }
};

const mapUserObject = (user) => ({
    _id: user._id,
    bio: user.bio,
    age: user.age,
    gender: user.gender,
    profile_image: user.profile_image,
    company_name: user.company_name,
    user_status: user.user_status,
    interest: user.interest,
    campaign_interest: user.campaign_interest,
    user_type: user.user_type,
    email_verified: user.email_verified,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    country: user.country,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    last_signIn_info: user.last_signIn_info,
});

const mapCampaignSignUpObject = (campaign_signup) => ({
    _id: campaign_signup._id,
    user_status: campaign_signup.user_status,
    first_name: campaign_signup.first_name,
    last_name: campaign_signup.last_name,
    campaign: campaign_signup.campaign,
    campaign_owner: campaign_signup.campaign_owner,
});

const getObjectFromList = (data, fieldName, condMatch) => {
    let foundIndex = data.findIndex((obj) => obj[fieldName] == condMatch);
    return data[foundIndex];
};*/

export default {
  sendResponse,
  consoleLog
  /*  extractForAuthTable,
    extractJWTokenData,
    getNHoursFutureUnixTime,
    getNMinutesFutureUnixTime,
    webSendEmailVerificationLink,
    webForgotPasswordLink,
    checkUserType,
    getListOfSpecificField,
    AdminWebForgotPasswordLink,
    getBucketName,
    signUpFanClientEmailVerification,
    ClientFanLoginLink,
    AdminLoginLink,
    associateUserAcceptLink,
    signUpUserEmailVerification,
    getCurrentUnixTime,
    webUserResetPassword,
    getNDaysUTCDate,
    notificationMapping,
    getCurrentUnixTimeWithoutTime,
    getNUTCDateStartDay,
    getNUTCDateEndDay,
    getCampaignLink,
    getNPercentageValue,
    getNDaysPastTime,
    findValueInProvidedList,
    adminPendingCampaignPageLink,
    checkForCampaignCreator,
    campParRepDataFor,
    removeFileFromDir,
    mapUserObject,
    mapCampaignSignUpObject,
    getObjectFromList,*/
};
