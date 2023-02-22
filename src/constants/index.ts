//const config = require("../config");
export default {
    IGNORE_MIDDLEWARE_URLS: [
        "/",
        "/user/sign-in",
        "/admin/sign-in",
        "/user/check-credentials-availability",
        "/user/sent-web-email-verification",
        "/user/sent-app-email-verification",
        "/user/email-verification",
        "/user/check-email-verification",
        "/user/web-forgot-password",
        "/user/sign-up-client",
        "/user/sign-up-user",
        "/user/social-sign-up",
        "/user/app-forgot-password-for-fan",
        "/user/reset-password",
        "/user/otp-validation",
        "/user/resend-web-email-verification",
        "/user/resend-app-email-verification",
        "/user/verify-associate-user",
        "/user/emails-off",
        "/interest/get-all-interests",
        "/admin/forgot-password",
        "/admin/reset-password",
        "/admin/otp-validation",
        "/others/get-avatars",
        "/others/test-notification",
        "/others/get-countries",
        "/campaign/get-campaign-by-domain",
        "/stats/set-viewers-stats",
        "/stats/get-top-influencers",
        "/policies/get",
        "/campaign/get-temp-campaign-by-domain",
        "/campaign/campaign-meta-html",
        "/campaign/generate-short-urls",
        "/campaign/short-url-details",
        "/generate-short-urls",
        "/short-url-details",
        "/user/verify-user",
        "/fonts/",
        "/others/fcm-notification",
        "webhook",
    ],
    // URLS: {
    //     CAMPAIGN_GOALS_NOTIFICATIONS: `${config.WORKER_URL}notifications/campaign-goals`,
    //     CAMPAIGN_UPDATE_STATUS_NOTIFICATIONS: `${config.WORKER_URL}notifications/campaign-update-status`,
    //     CAMPAIGN_REVIEW_NOTIFICATIONS: `${config.WORKER_URL}notifications/campaign-review`,
    //     CAMPAIGN_SUBMIT_NOTIFICATIONS: `${config.WORKER_URL}notifications/campaign-submit`,
    // },
    STATUS: {
        ACTIVE: "ACTIVE",
        PENDING: "PENDING",
        CANCELED: "CANCELED",
        DUE: "DUE",
        FAILED: "FAILED"
    },
    USER: {
        TYPE: {
            CLIENT: "CLIENT",
            FAN: "FAN",
            USER: "USER",
            ADMIN: "ADMIN",
            SUPER_ADMIN: "SUPER-ADMIN",
            ASSOCIATE: "ASSOCIATE",
        },
        ROLE: {
            SUPER_ADMIN: "Super admin",
            ADMIN: "Admin",
            ACCOUNT_MANAGER: "Account manager",
        },
        GENDER: {
            Male: { DB_OBJECT: "Male", TYPE: "Male" },
            Female: { DB_OBJECT: "Female", TYPE: "Female" },
            Non_Binary: { DB_OBJECT: "Non_Binary", TYPE: "Non-binary" },
            Transgender: { DB_OBJECT: "Transgender", TYPE: "Transgender" },
            Intersex: { DB_OBJECT: "Intersex", TYPE: "Intersex" },
            Other: { DB_OBJECT: "Other", TYPE: "Other" },
            Prefer_not_to_say: {
                DB_OBJECT: "Prefer_not_to_say",
                TYPE: "Prefer not to say",
            },
        },
        DEFAULT_ROLES: [
            {
                name: "Super admin",
                permissions: {},
                default_role: true,
            },
            {
                name: "Admin",
                permissions: {},
                default_role: true,
            },
            {
                name: "Account manager",
                permissions: {},
                default_role: true,
            },
        ],
        CATEGORY: {},
        USER_STATUS: {
            ACTIVATED: "ACTIVATED",
            DEACTIVATED: "DEACTIVATED",
            BLOCKED: "BLOCKED",
        },
        ADMIN_FORGOT_PASSWORD_ROUTE: "auth/change-forgot-password/",
    },
    POLICIES: {
        TYPE: {
            TERMS_AND_CONDITIONS: "TERMS_AND_CONDITIONS",
            PRIVACY_POLICIES: "PRIVACY_POLICIES",
            COOKIES_POLICIES: "COOKIES_POLICIES",
        },
    },
    // DEFAULT_REVENUE_SETTINGS: (flag = false) => ({
    //     client_revenue_share: 70,
    //     fan_revenue_share: 50,
    //     default: flag,
    // }),
    // CREATE_REVENUE_SETTINGS: ({ user }) => ({
    //     client_revenue_share: 70,
    //     fan_revenue_share: 50,
    //     user: user,
    // }),
    TERMS_AND_CONDITIONS: "<P> Terms And Conditions <p>",
    EMAIL_HOOKS: {
        EVENT: {
            COMPLAINT: "Complaint",
            BOUNCE: "Bounce",
            DELIVERY: "Delivery"
        },
        STATUS_CODES: {
            INTERNAL_FAILURE: 500,
            SERVICE_UNAVAILABLE: 503,
            VALIDATION_ERROR: 400, // AccessDeniedException, IncompleteSignature, InvalidAction, InvalidQueryParameter, ThrottlingException, ValidationError
            INVALID_CLIENT_ID: 403, // MissingAuthenticationToken
            MALFORMED_QUERY: 404
        }
    },
    S3_BUCKET_NAME: {
        PROFILE: "profile/",
    },
    S3_ACTIONS: {
        BASE64_PROFILE_IMAGE: "UPLOAD_BASE_64_PROFILE_IMAGE",
        BASE64_COVER_IMAGE: "UPLOAD_BASE_64_COVER_IMAGE",
    },
    SERVER_ENVIRONMENTS: { STG: "stg", PROD: "prod", PRODUCTION: "production" },
    DEFAULT_TEMPLATE: [
        {
            name: "Generic",
        },
        {
            name: "Video",
        },
        /*{
                name: 'Hashtag',
            },*/
        {
            name: "Leaderboard",
        },
        {
            name: "Music clip",
        },
        {
            name: "Upload file",
        },
        {
            name: "Event",
        },
    ],
    // DEFAULT_INTEREST: (bucket) => [
    //     {
    //         _id: "6290b8ccc9f37315f41635f0",
    //         name: "Arts & Entertainment",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/arts-entertainment.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/arts-entertainment.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635f1",
    //         name: "Auto & Vehicles",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/auto-vehicles.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/auto-vehicles.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635f2",
    //         name: "Beauty & Fitness",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/beauty-fitness.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/beauty-fitness.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635f3",
    //         name: "Books & Literature",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/books-literature.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/books-literature.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635f4",
    //         name: "Business & Industry",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/business-industry.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/business-industry.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635f5",
    //         name: "Computer & Electronics",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/computer-electronics.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/computer-electronics.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635f6",
    //         name: "Finance",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/finance.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/finance.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635f7",
    //         name: "Food & Drinks",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/food-drinks.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/food-drinks.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635f8",
    //         name: "Health",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/health.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/health.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635f9",
    //         name: "Hobbies & Leisure",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/hobbies-leisure.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/hobbies-leisure.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635fa",
    //         name: "Home & Garden",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/home-garden.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/home-garden.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635fb",
    //         name: "Internet & Telecom",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/internet-telecom.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/internet-telecom.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635fc",
    //         name: "Jobs & Education",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/jobs-education.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/jobs-education.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635fd",
    //         name: "Law & Government",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/law-government.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/law-government.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635fe",
    //         name: "News",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/news.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/news.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f41635ff",
    //         name: "Music",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/music.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/music.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f4163600",
    //         name: "Online Communities",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/online-communication.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/online-communication.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f4163601",
    //         name: "People & Society",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/people-society.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/people-society.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f4163602",
    //         name: "Pets & Animals",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/pets-animal.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/pets-animal.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f4163603",
    //         name: "Property",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/property.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/property.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f4163604",
    //         name: "Science",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/science.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/science.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f4163605",
    //         name: "Shopping",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/shopping.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/shopping.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f4163606",
    //         name: "Sports",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/sports.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/sports.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f4163607",
    //         name: "Travel",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/travel.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/travel.png`,
    //     },
    //     {
    //         _id: "6290b8ccc9f37315f4163608",
    //         name: "Other",
    //         icon: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-original/others.png`,
    //         icon_orange: `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/interest-orange/others.png`,
    //     },
    // ],
    // //https://fandist-backend-production.s3.eu-west-2.amazonaws.com/icons/avatars/avatar-1.png
    // AVATARS: (bucket) => [
    //     `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/avatars/avatar-1.png`,
    //     `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/avatars/avatar-2.png`,
    //     `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/avatars/avatar-3.png`,
    //     `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/avatars/avatar-4.png`,
    //     `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/avatars/avatar-5.png`,
    //     `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/avatars/avatar-6.png`,
    //     `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/avatars/avatar-7.png`,
    //     `https://${bucket}.s3.eu-west-2.amazonaws.com/icons/avatars/avatar-8.png`,
    // ],
    SOCIAL_PLATFORMS_SIGN_UPS: [
        { TYPE: "FACEBOOK", DB_OBJECT: "facebook_signups" },
        { TYPE: "INSTAGRAM", DB_OBJECT: "instagram_signups" },
        { TYPE: "TWITTER", DB_OBJECT: "twitter_signups" },
        { TYPE: "WHATSAPP", DB_OBJECT: "whatsapp_signups" },
        { TYPE: "EMAIL", DB_OBJECT: "email_signups" },
        { TYPE: "LINKEDIN", DB_OBJECT: "linkedin_signups" },
        { TYPE: "FANWEAVE", DB_OBJECT: "fanweave_signups" },
        { TYPE: "GENERIC", DB_OBJECT: "generic_signups" },
        { TYPE: "CRM", DB_OBJECT: "crm_signups" },
        { TYPE: "AFFINITY", DB_OBJECT: "affinity_site_signups" },
    ],
    SOCIAL_PLATFORMS_SHARES: [
        { TYPE: "FACEBOOK", DB_OBJECT: "facebook_shares" },
        { TYPE: "INSTAGRAM", DB_OBJECT: "instagram_shares" },
        { TYPE: "TWITTER", DB_OBJECT: "twitter_shares" },
        { TYPE: "WHATSAPP", DB_OBJECT: "whatsapp_shares" },
        { TYPE: "EMAIL", DB_OBJECT: "email_shares" },
        { TYPE: "LINKEDIN", DB_OBJECT: "linkedin_shares" },
        { TYPE: "GENERIC", DB_OBJECT: "generic_shares" },
        { TYPE: "CRM", DB_OBJECT: "crm_shares" },
        { TYPE: "AFFINITY", DB_OBJECT: "affinity_site_shares" },
    ],
    SOCIAL_PLATFORMS_VIEW: [
        { TYPE: "FACEBOOK", DB_OBJECT: "facebook_view" },
        { TYPE: "INSTAGRAM", DB_OBJECT: "instagram_view" },
        { TYPE: "TWITTER", DB_OBJECT: "twitter_view" },
        { TYPE: "WHATSAPP", DB_OBJECT: "whatsapp_view" },
        { TYPE: "EMAIL", DB_OBJECT: "email_view" },
        { TYPE: "LINKEDIN", DB_OBJECT: "linkedin_view" },
        { TYPE: "FANWEAVE", DB_OBJECT: "fanweave_view" },
        { TYPE: "GENERIC", DB_OBJECT: "generic_view" },
        { TYPE: "CRM", DB_OBJECT: "crm_view" },
        { TYPE: "AFFINITY", DB_OBJECT: "affinity_site_view" },
    ],
    SOCIAL_PLATFORMS_SHARES_STRINGS: [
        "FACEBOOK",
        "INSTAGRAM",
        "TWITTER",
        "WHATSAPP",
        "EMAIL",
        "LINKEDIN",
        "GENERIC",
        "CRM",
        "AFFINITY",
    ],
    // GENERATE_SHORT_URLS: function ({ user, campaign, random }) {
    //     let platforms = this.SOCIAL_PLATFORMS_SHARES_STRINGS;
    //     return platforms.reduce((objects, platform) => {
    //         objects.push({
    //             user: user,
    //             campaign: campaign,
    //             platform: platform,
    //             id: random("Aa0-_@", 10),
    //         });
    //         return objects;
    //     }, []);
    // },
    REGEX: {
        EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        PASSWORD:
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@#$%^&(){}:;<>,.?/~_+-]).{8,}$/,
        /*/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/*/
    },
    CAMPAIGN: {
        STATUS: {
            ACTIVE: "ACTIVE",
            PENDING: "PENDING",
            APPROVED: "APPROVED",
            REJECTED: "REJECTED",
            INACTIVE: "INACTIVE",
            COMPLETED: "COMPLETED",
            EXPIRED: "EXPIRED",
            BLOCKED: "BLOCKED",
            DRAFT: "DRAFT",
        },
        RESERVED_SUBDOMAIN: {
            STG: "stg",
            DEV: "dev",
            LOCAL: "localhost",
            QA: "qa",
        },
    },
    ADMIN_PERMISSIONS: (flag = false) => ({
        add_admin: flag,
        edit_admin: flag,
        delete_admin: flag,
        add_client: flag,
        edit_client: flag,
        block_client: flag,
        create_campaign: flag,
        edit_campaign: flag,
        manage_campaigns: flag,
        update_policies: flag,
        change_revenue_settings: flag,
        create_roles: flag,
        delete_roles: flag,
        view_roles: flag,
        edit_permissions: flag,
        view_permissions: flag,
        manage_subscriptions: flag,
        campaign_reports: flag,
        manage_fonts: flag,
    }),
    ASSOCIATE_PERMISSIONS: (flag = false) => ({
        add_associate: flag,
        edit_associate: flag,
        delete_associate: flag,
        create_campaign: flag,
        edit_campaign: flag,
        manage_campaigns: flag,
        create_roles: flag,
        delete_roles: flag,
        view_roles: flag,
        edit_permissions: flag,
        view_permissions: flag,
        manage_subscriptions: flag,
        manage_fonts: flag,
    }),
    CODE: {
        SUCCESS: 200,
        NOT_FOUND: 404,
        SERVER_ERROR: 500,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        UNVERIFIED: 422,
        EXPIRED: 9211,
    },
    CONDITIONS: {
        SIGN_UP: "signUp",
        CREATE_CAMPAIGN: "createCampaign",
    },
    SWITCH: {
        SIGN_UP_FAN: "SIGN_UP_FAN",
        SIGN_UP_CLIENT: "SIGN_UP_CLIENT",
        ARTIFICIAL_SIGN_UP: "ARTIFICIAL_SIGN_UP",
        SIGN_UP_USER: "SIGN_UP_USER",
        FOR_GOT_PASS_ADMIN: "FOR_GOT_PASS_ADMIN",
        FOR_GOT_PASS_FAN: "FOR_GOT_PASS_FAN",
        FOR_GOT_PASS_CLIENT: "FOR_GOT_PASS_CLIENT",
        FOR_GOT_PASS_CLIENT_AND_FAN: "FOR_GOT_PASS_CLIENT_AND_FAN",
        FOR_GOT_PASS_USER: "FOR_GOT_PASS_USER",
        FOR_GOT_PASS_ASSOCIATE: "FOR_GOT_PASS_ASSOCIATE",
        ADMIN_ADDED: "ADMIN_ADDED",
        CLIENT_ADDED: "CLIENT_ADDED",
        FAN_ADDED: "FAN_ADDED",
        RESEND_EMAIL_VERIFICATION: "RESEND_EMAIL_VERIFICATION",
        RESEND_EMAIL_VERIFICATION_FOR_APP: "RESEND_EMAIL_VERIFICATION_FOR_APP",
        CREATE_CAMPAIGN: "createCampaign",
        ADD_NEW_ASSOCIATE: "ADD_NEW_ASSOCIATE",
        ADD_EXISTING_ASSOCIATE: "ADD_EXISTING_ASSOCIATE",
        UPDATE_USER: "UPDATE_USER",
        CAMPAIGN_SHARE: "CAMPAIGN_SHARE",
        FOLLOW: "FOLLOW",
        USER_BLOCK: "USER_BLOCK",
        CAMPAIGN_CREATE: "CAMPAIGN_CREATE",
        CAMPAIGN_CREATE_FOR_FOLLOWERS: "CAMPAIGN_CREATE_FOR_FOLLOWERS",
        CAMPAIGN_GOAL_ACHIEVED: "CAMPAIGN_GOAL_ACHIEVED",
        CAMPAIGN_SHARE_GOAL_ACHIEVED: "CAMPAIGN_SHARE_GOAL_ACHIEVED",
        CAMPAIGN_PARTIALLY_SHARE_GOAL_ACHIEVED:
            "CAMPAIGN_PARTIALLY_SHARE_GOAL_ACHIEVED",
        CAMPAIGN_PARTIALLY_GOAL_ACHIEVED: "CAMPAIGN_PARTIALLY_GOAL_ACHIEVED",
        CAMPAIGN_REACH_GOAL_ACHIEVED: "CAMPAIGN_REACH_GOAL_ACHIEVED",
        CAMPAIGN_PARTIALLY_REACH_GOAL_ACHIEVED:
            "CAMPAIGN_PARTIALLY_REACH_GOAL_ACHIEVED",
        CAMPAIGN_REVENUE_GOAL_ACHIEVED: "CAMPAIGN_REVENUE_GOAL_ACHIEVED",
        CAMPAIGN_PARTIALLY_REVENUE_GOAL_ACHIEVED:
            "CAMPAIGN_PARTIALLY_REVENUE_GOAL_ACHIEVED",
        CAMPAIGN_UPDATE_REVIEW: "CAMPAIGN_UPDATE_REVIEW",
        CAMPAIGN_REVIEWED: "CAMPAIGN_REVIEWED",
        CAMPAIGN_UPDATE_SUBMIT: "CAMPAIGN_UPDATE_SUBMIT",
        CAMPAIGN_CREATE_SUBMIT: "CAMPAIGN_CREATE_SUBMIT",
        CAMPAIGN_APPROVED: "CAMPAIGN_APPROVED",
        CAMPAIGN_REJECTED: "CAMPAIGN_REJECTED",
        CAMPAIGN_PUBLISHED: "CAMPAIGN_PUBLISHED",
        CAMPAIGN_PUBLISHED_FOR_USERS: "CAMPAIGN_PUBLISHED_FOR_USERS",
        CAMPAIGN_PUBLISHED_FOR_CLIENT: "CAMPAIGN_PUBLISHED_FOR_CLIENT",
        CAMPAIGN_PUBLISHED_FOR_ADMIN: "CAMPAIGN_PUBLISHED_FOR_ADMIN",
        CAMPAIGN_EXPIRED: "CAMPAIGN_EXPIRED",
        CAMPAIGN_NEAR_EXPIRY: "CAMPAIGN_NEAR_EXPIRY",
        FOLLOWERS_CAMPAIGN_NEAR_EXPIRY: "FOLLOWERS_CAMPAIGN_NEAR_EXPIRY",
        CAMPAIGN_ALL_GOALS_ACHIEVED: "CAMPAIGN_ALL_GOALS_ACHIEVED",
        USER_CAMPAIGN_GOAL_ACHIEVED: "USER_CAMPAIGN_GOAL_ACHIEVED",
        USER_CAMPAIGN_PARTIALLY_GOAL_ACHIEVED:
            "USER_CAMPAIGN_PARTIALLY_GOAL_ACHIEVED",
        ADMIN_CAMPAIGN_GOAL_ACHIEVED: "ADMIN_CAMPAIGN_GOAL_ACHIEVED",
        ADMIN_CAMPAIGN_ALL_GOAL_ACHIEVED: "ADMIN_CAMPAIGN_ALL_GOAL_ACHIEVED",
        ADMIN_CAMPAIGN_PARTIALLY_SHARE_GOAL_ACHIEVED:
            "ADMIN_CAMPAIGN_PARTIALLY_SHARE_GOAL_ACHIEVED",
        CLIENT_CAMPAIGN_CREATE: "CLIENT_CAMPAIGN_CREATE",
        CLIENT_CAMPAIGN_UPDATE_REVIEW: "CLIENT_CAMPAIGN_UPDATE_REVIEW",
        ADMIN_CAMPAIGN_CREATE: "ADMIN_CAMPAIGN_CREATE",
        ADMIN_CAMPAIGN_CREATE_REVIEW: "ADMIN_CAMPAIGN_CREATE_REVIEW",
        ADMIN_CAMPAIGN_UPDATE_REVIEW: "ADMIN_CAMPAIGN_UPDATE_REVIEW",
        APPROVE_CONFIRMATION: "APPROVE_CONFIRMATION",
        REJECT_CONFIRMATION: "REJECT_CONFIRMATION",
        USER_SIGNUP: "USER_SIGNUP",
        GOAL_ACHIEVER: "GOAL_ACHIEVER",
        ASSOCIATE_OTP_UPDATE: "ASSOCIATE_OTP_UPDATE",
        FORGOT_PASSWORD_ASSOCIATE_OTP_UPDATE:
            "FORGOT_PASSWORD_ASSOCIATE_OTP_UPDATE",
        RESEND_EMAIL_VERIFICATION_ASSOCIATE_OTP_UPDATE:
            "RESEND_EMAIL_VERIFICATION_ASSOCIATE_OTP_UPDATE",
        USER_OTP_UPDATE: "USER_OTP_UPDATE",
        CLIENT_FAN_OTP_UPDATE: "CLIENT_FAN_OTP_UPDATE",
        OTP_UPDATE_ID_BASE: "OTP_UPDATE_ID_BASE",
        OTP_UPDATE_EMAIL_BASE: "OTP_UPDATE_EMAIL_BASE",
    },
    EXPORT_HEADERS: {
        CAMPAIGNS_BASIC: [
            "First Name",
            "Last Name",
            "Email",
            "Age",
            "Gender",
            "Interest",
            "Campaigns",
            "Sectors",
        ],
    },
    NOTIFICATION_TYPE: {
        FOLLOW: "FOLLOW",
        USER_BLOCK: "USER_BLOCK",
        CAMPAIGN_CREATE: "CAMPAIGN_CREATE",
        SHARE_GOAL_ACHIEVED: "SHARE_GOAL_ACHIEVED",
        CLIENT_CAMPAIGN_CREATE: "CLIENT_CAMPAIGN_CREATE",
        CAMPAIGN_CREATE_REVIEW: "CAMPAIGN_CREATE_REVIEW",
        CAMPAIGN_UPDATE_REVIEW: "CAMPAIGN_UPDATE_REVIEW",
        CAMPAIGN_REVIEWED: "CAMPAIGN_REVIEWED",
        CAMPAIGN_PUBLISHED: "CAMPAIGN_PUBLISHED",
        CAMPAIGN_EXPIRED: "CAMPAIGN_EXPIRED",
        SHARE_GOAL_MILESTONE_ACHIEVED: "SHARE_GOAL_MILESTONE_ACHIEVED",
        USER_SIGNUP: "USER_SIGNUP",
        GOAL_ACHIEVED: "GOAL_ACHIEVED",
        REACH_GOAL_ACHIEVED: "REACH_GOAL_ACHIEVED",
        REACH_GOAL_MILESTONE_ACHIEVED: "REACH_GOAL_MILESTONE_ACHIEVED",
        REVENUE_GOAL_ACHIEVED: "REVENUE_GOAL_ACHIEVED",
        REVENUE_GOAL_MILESTONE_ACHIEVED: "REVENUE_GOAL_MILESTONE_ACHIEVED",
    },
    // NOTIFICATION_MESSAGE: {
    //     FOLLOW: (user_name) =>
    //         `You just gained a new fan! User ${user_name} has started following you!`,
    //     USER_BLOCK: "USER_BLOCK",
    //     CAMPAIGN_CREATE: (user_name) =>
    //         `A campaign was just published by the ${user_name} for you.`,
    //     CLIENT_CAMPAIGN_CREATE: (data) =>
    //         `Your campaign ${data.campaign_name} has been sent to the admin for approval `,
    //     ADMIN_CAMPAIGN_CREATE: (data) =>
    //         `Your campaign titled ${data.campaign_name} has been created by the admin, visit the campaign hub to know more!`,
    //     ADMIN_CAMPAIGN_CREATE_REVIEW: (data) =>
    //         `User ${data.user_name} seeks approval for their campaign ${data.campaign_name}, review it now!`,
    //     CAMPAIGN_CREATE_FOR_USERS: (data) =>
    //         `${data.user_name} just created a campaign. Take a look at their latest content!`,
    //     CAMPAIGN_GOAL_ACHIEVED: (data) =>
    //         `Your campaign ${data.campaign_name} has achieved its ${data.goal} goal!`,
    //     CAMPAIGN_50_P_GOAL_ACHIEVED: (data) =>
    //         `Halfway There! Your campaign ${data.campaign_name} has covered 50% of the ${data.goal} goal`,
    //     CAMPAIGN_75_P_GOAL_ACHIEVED: (data) =>
    //         `Keep it up! Your campaign ${data.campaign_name} ${data.goal} goal is now 75% complete`,
    //     CAMPAIGN_90_P_GOAL_ACHIEVED: (data) =>
    //         `Almost there! You have achieved 90% of your campaign ${data.campaign_name} ${data.goal} goal`,
    //     ADMIN_ALL_CAMPAIGN_GOAL_ACHIEVED: (data) =>
    //         `Goals achieved! All goals for campaign ${data.campaign_name} have been completed.`,
    //     ADMIN_USER_CAMPAIGN_GOAL_ACHIEVED: (data) =>
    //         `GGoal alert! User ${data.user_name} has completed ${data.goal} goal against campaign ${data.campaign_name}`,
    //     USER_CAMPAIGN_GOAL_ACHIEVED: (data) =>
    //         `Congratulations! You have successfully completed ${data.goal} goal associated with campaign ${data.campaign_name}`,
    //     USER_CAMPAIGN_50_P_GOAL_ACHIEVED: (data) =>
    //         `Good job! You have completed 50% of ${data.goal} goals associated with campaign ${data.campaign_name}`,
    //     USER_CAMPAIGN_75_P_GOAL_ACHIEVED: (data) =>
    //         `Way to go! You have completed 75% of ${data.goal} goals associated with campaign  ${data.campaign_name}`,
    //     USER_CAMPAIGN_90_P_GOAL_ACHIEVED: (data) =>
    //         `What a Progress! You have completed 90% of ${data.goal} goals associated with campaign  ${data.campaign_name}`,
    //     SHARE_GOAL_MILESTONE_ACHIEVED: (data) =>
    //         `Your campaign (${data.campaign_name}) just achieved ${data.percent}% share goal.`,
    //     INDIVIDUAL_SHARE_GOAL_ACHIEVED: (data) =>
    //         `You have just achieved the campaign (${data.campaign_name}) share goal.`,
    //     CAMPAIGN_APPROVED: (data) =>
    //         `Your campaign ${data?.campaign_name} passed the vibe check! Publish your approved campaign now!`,
    //     CAMPAIGN_REJECTED: () =>
    //         `Your campaign didn’t meet our approval criteria, review and resubmit it now!`,
    //     APPROVE_CONFIRMATION: (data) =>
    //         `Your approval regarding campaign ${data.campaign_name} has been confirmed`,
    //     REJECT_CONFIRMATION: (data) =>
    //         `Your rejection regarding campaign ${data.campaign_name} has been confirmed `,
    //     ADMIN_CAMPAIGN_PUBLISHED: (data) =>
    //         `Campaign ${data.campaign_name} is now live`,
    //     ADMIN_CAMPAIGN_INACTIVE: (data) =>
    //         `Campaign ${data.campaign_name} is now live`,
    //     CLIENT_CAMPAIGN_PUBLISHED: (data) =>
    //         `Your campaign ${data.campaign_name} is now live`,
    //     CLIENT_CAMPAIGN_INACTIVE: () => ``,
    //     USERS_CAMPAIGN_PUBLISHED: (data) =>
    //         `New campaign alert! take a look at the latest content from user ${data.user_name} now! `,
    //     CAMPAIGN_PUBLISHED_FOR_CLIENT: (data) =>
    //         `Your campaign (${data.campaign_name}) has been published.`,
    //     USER_SIGNUP: (data) =>
    //         `A new ${data.user_type} (${data.user_name}) has been registered.`,
    //     CAMPAIGN_REACH_GOAL_ACHIEVED: (campaign_name) =>
    //         `Your campaign (${campaign_name}) just achieved the campaign reach goal.`,
    //     REACH_GOAL_MILESTONE_ACHIEVED: (data) =>
    //         `Your campaign (${data.campaign_name}) just achieved ${data.percent}%  reach goal.`,
    //     CAMPAIGN_REVENUE_GOAL_ACHIEVED: (campaign_name) =>
    //         `Your campaign (${campaign_name}) just achieved the campaign revenue goal.`,
    //     REVENUE_GOAL_MILESTONE_ACHIEVED: (data) =>
    //         `Your campaign (${data.campaign_name}) just achieved ${data.percent}%  revenue goal.`,
    //     FOLLOWERS_CAMPAIGN_NEAR_EXPIRY: (data) =>
    //         `10 days until campaign ${data.campaign_name} expires. Hurry and share while its available!`,
    //     CLIENT_CAMPAIGN_NEAR_EXPIRY: (data) =>
    //         `10 days until campaign ${data.campaign_name} expires. Find out more about your plan today.`,
    // },
    APP_EMAIL_VALIDATION_TIME_IN_MINUTES: 5,
    WEB_EMAIL_VALIDATION_TIME_IN_HOURS: 1,
    RESPONSE_MESSAGES: {
        SUCCESS: {
            SIGN_UP: "Registration successful.",
            LOG_IN: "You have logged in successfully.",
            LOG_OUT: "You have logged out successfully.",
            PERMISSION_ADDED: "Permission has been added successfully.",
            PERMISSION_DELETED: "Permission has been deleted successfully.",
            PERMISSION: "Permission",
            PERMISSIONS_LIST: "Permissions list",
            PERMISSIONS_UPDATED: "Permissions updated",
            OTP_FOR_RESET_PASSWORD:
                "OTP to reset password has been sent to your email",
            FORGOT_PASSWORD:
                "Reset password link has been sent to your provided email. Please check inbox",
            PASSWORD_UPDATED: "Password has been updated successfully",
            EMAIL_VERIFIED: "Email is verified successfully.",
            DATA_FOUND: "Record found",
            NO_RECORD_FOUND: "No record found",
            OTP_VALIDATED: "OTP validated successfully.",
            EMAIL_SENT: "email sent successfully",
            RESET_PASSWORD:
                "Reset password link has been sent to your provided email. Please check inbox",

            ROLE_ADDED: "Role has been added successfully.",
            ROLE_DELETED: "Role has been deleted successfully.",
            ROLE: "Role",
            ROLES_LIST: "Roles list",
            ROLES_UPDATED: "Role updated",

            USER_DELETED: "User has been deleted successfully.",
            USER: "User",
            USERS_LIST: "Users list",
            USER_UPDATED: "User updated",
            USER_AVATARS_DATA: "User avatars.",
            USER_ADDED: "User added successfully.",

            CAMPAIGN_CREATE: "campaign is created successfully.",
            CAMPAIGN_DELETED: "campaign is deleted successfully.",

            TEMPLATE_CREATED: "template created successfully.",
            TEMPLATE_DATA: "template data.",
            TEMPLATE_UPDATED: "template is updated successfully",
            TEMPLATE_DELETE: "template is deleted successfully.",

            INTEREST_CREATED: "interest created successfully.",
            INTEREST_DATA: "interest data.",
            INTEREST_UPDATED: "interest is updated successfully",
            INTEREST_DELETE: "interest is deleted successfully.",

            PLAN_CREATED: "plan created successfully.",
            PLAN_DATA: "plan data.",
            PLAN_UPDATED: "plan is updated successfully",
            PLAN_DELETE: "plan is deleted successfully.",
            PLAN_SWITCHED:
                "Your 'subscription plan switch' request has been received. The updated changes will take effect on the the next billing date.",

            COUPON_CREATED: "coupon created successfully.",
            COUPON_DATA: "coupon data.",
            COUPON_UPDATED: "coupon is updated successfully",
            COUPON_DELETE: "coupon is deleted successfully.",

            TERM_CONDITION_CREATED: "record created successfully.",
            TERM_CONDITION_DATA: "Terms And Conditions data.",
            TERM_CONDITION_UPDATED: "record is updated successfully",
            TERM_CONDITION_DELETE: "record is deleted successfully.",

            FONT_ADDED: "font added successfully.",
            FONT_DATA: "fonts data.",
            FONT_DELETE: "font is deleted successfully.",

            URL_CREATED: "Url has been created successfully.",

            JOINED_PROGRAMS: "joined programs data",
            OPERATION_PERFORMED: "operation performed successfully.",
            SUBSCRIPTION_CANCELLED:
                "Your 'unsubscribe' request has been received. The updated changes will take effect on the the next billing date.",
            CANCEL_REQUEST_UNSUBSCRIBE:
                "Your 'unsubscribe' request has been cancelled successfully.",
            CANCEL_REQUEST_SWITCH_PLAN:
                "Your 'plan switch' cancellation request has been processed successfully.",

            REPORT_SUBMITTED: "Report submitted successfully.",
            ALREADY_REPORTED: "This user is already reported",

            USER_BLOCKED: "User blocked successfully",
            USER_UNBLOCKED: "User unblocked successfully",
            CAMPAIGN_SIGN_UP_FOR_EXI_VER_USER:
                "Registration successful. Please login using your credentials",
            CAMPAIGN_SIGN_UP:
                "Registration successful. Please check your email for verification link",

            CARD_DELETED: "Card has been deleted successfully",
            PURCHASED_SUCCESSFULLY: "purchased successfully"
        },
        FAIL: {
            MISSING_PARAMS: "Please send all the required parameters.",
            USER_NOT_FOUND: "User not found",
            INVALID_OTP_EMAIL: "Invalid OTP or Email",
            OTP_EXPIRED: "The provided otp is expired or invalid",
            WRONG_EMAIL_OR_PASSWORD: "You have provided wrong email or password",
            SUPERIOR_USER_TRY_SIGNUP_IN_CAMPAIGN:
                "You have already registered with the same email. Please try to log in.",
            CLIENT_TRY_SIGNUP_IN_CAMPAIGN:
                "Email is already registered as a client, you can not participate in campaign using this email.",
            USE_SOCIAL_LOGIN: "Please try to sign-in through social platform.",
            REQUEST_NOT_COMPLETED: "Request not completed, please try again",
            UNAUTHORIZED: "You are unauthorized, please login and try again",
            USER_NOT_REGISTER_IN_THIS_CAMPAIGN:
                "You are not registered for this campaign",
            WRONG_CURRENT_PASSWORD: "Current password is not correct.",
            INVALID_EMAIL: "Email address is not valid",
            DUPLICATE_DATA_USER: "User with same credentials already exists.",
            COMPANY_NAME_NOT_AVAILABLE: "Company name is not available.",
            CAMPAIGN_DOMAIN_NOT_AVAILABLE: "Campaign Domain is not available.",
            CAMPAIGN_DOMAIN_AVAILABLE: "Campaign Domain is available.",
            EMAIL_NOT_VERIFIED: "Your email address has not been verified.",
            BLOCKED_USER:
                "Your account has been blocked please contact support for reactivation.",
            ROLE_ASSIGNED_TO_USER:
                "You can not delete this role because this role is assigned to the users",
            DELETE_ROLE_ERROR_ASSIGNED:
                "You cant't delete this role because its assigned to some users.",
            DUPLICATE_ROLE: "Role with same name already exists.",
            ALREADY_ADDED_AS_ASSOCIATE: "The user already added as associate by you",
            NOT_ASSOCIATED: "This user is not associated with this client.",
            BAD_REQUEST: "Bad request.",
            NO_RECORD_FOUND: "No record found",
            INVALID_COUPON: "Invalid coupon.",
            EXPIRED_COUPON: "Coupon is expired.",
            DUPLICATE_COUPON_CODE: "The coupon with the same code already exists",
            UNAUTHORIZED_PORTAL:
                "You are unauthorized to perform this action on this portal.",
            CAMPAIGN_EXPIRED: "Campaign expired.",
            SUBSCRIPTION_REQUIRED: "Pricing plan subscription is required",
            ALLOWED_LIMIT: "You have reached your campaign creation limit!",
            COUPON_INVALID: "Invalid Coupon",
            COUPON_EXPIRED: "Coupon Expired"
        },
        EMAIL_SUBJECTS: {
            CLIENT_ADDED: "Your account has beeen created.",
            ADMIN_ADDED: "Your account has beeen created.",
            FORGOT_EMAIL: "FORGOT PASSWORD.",
            FORGOT_EMAIL_OTP: "FORGOT PASSWORD OTP.",
            EMAIL_VERIFICATION: "EMAIL VERIFICATION.",
            ASSOCIATE_ACCOUNT_INVITATION: "ASSOCIATE ACCOUNT INVITATION.",
            CONTACT_US_SUBJECT: "CONTACT US",
            GOAL_ACHIEVED: "GOAL ACHIEVED",
            CAMPAIGN_CREATED: "CAMPAIGN CREATED",
            CAMPAIGN_APPROVED: "CAMPAIGN APPROVED",
            CAMPAIGN_REJECTED: "CAMPAIGN REJECTED",
            CAMPAIGN_REVIEW: "CAMPAIGN REVIEW",
            CAMPAIGN_EXPIRY: "CAMPAIGN EXPIRY",
            CAMPAIGN_BASIC_REPORT: "CAMPAIGN BASIC REPORT",
        },
    },
    JOBS: {
        CAMPAIGN: {
            CAMPAIGN_SIGNUP: "CAMPAIGN_SIGNUP",
            CAMPAIGN_GOALS: "CAMPAIGN_GOALS",
            CAMPAIGN_SHARE: "CAMPAIGN_SHARE",
            CAMPAIGN_UPDATE_STATUS: "CAMPAIGN_UPDATE_STATUS",
            CAMPAIGN_REVIEW: "CAMPAIGN_REVIEW",
            CAMPAIGN_SUBMIT: "CAMPAIGN_SUBMIT",
        },
        EMAILS:{
            SIGN_UP:"SIGN_UP",
            CLIENT_SIGN_UP:"CLIENT_SIGN_UP",
            CLIENT_ADDED:"CLIENT_ADDED",
            ADMIN_ADDED:"ADMIN_ADDED",
            ASSOCIATE_ADDED:"ASSOCIATE_ADDED",
            FORGOT_PASSWORD:"FORGOT_PASSWORD",
            FORGOT_PASSWORD_USER:"FORGOT_PASSWORD_USER",
            FORGOT_PASSWORD_APP:"FORGOT_PASSWORD_APP",
            FORGOT_PASSWORD_ADMIN:"FORGOT_PASSWORD_ADMIN",
            FORGOT_PASSWORD_WEB:"FORGOT_PASSWORD_WEB",
            EMAIL_VERIFICATION_WEB:"EMAIL_VERIFICATION",
            EMAIL_VERIFICATION_APP:"EMAIL_VERIFICATION_APP",
            EMAIL_VERIFICATION_CAMPAIGN:"EMAIL_VERIFICATION_CAMPAIGN",
            CONTACT_US:"CONTACT_US",
        },
        EXPORT: {
            CAMPAIGN_PARTICIPANTS_LIST: "CAMPAIGN_PARTICIPANTS_LIST",
        },
    },
    FONT_TYPE: {
        GLOBAL: "GLOBAL",
        LOCAL: "LOCAL",
    },
    PORTALS: {
        ADMIN: 1,
        USER: 2,
        SUB_DOMAIN: 3,
    },
};
