import { API_URL } from "src/environments/environment";

// Authentication API List
export const AUTHENTICATION = {
    LOGIN: `${API_URL}/login`,
    LOGOUT: `${API_URL}/logout`,
    VERIFICATION_ID_VERIFY: `${API_URL}/verificationId-verify`,
    OTP_VERIFY: `${API_URL}/otp-verify`,
    RESEND_NEW_CODE: `${API_URL}/resend-otp`,
    FORGOT_PASSWORD: `${API_URL}/forgotPassword`,
    CHECK_EMAIL: `${API_URL}/check-email`,
    SIGN_UP: `${API_URL}/signup`,
    CHECK_TOKEN: `${API_URL}/reset-password/`,
    RESET_PASSWORD: `${API_URL}/reset-password/`,
    EMAIL_VERIFIED: `${API_URL}/verify-email/`,
};

// User Management API List
const USER_MANAGEMENT_PREFIX = `${API_URL}/users`;
export const USER_MANAGEMENT = {
    LIST: `${USER_MANAGEMENT_PREFIX}/list`,
    ADD: `${USER_MANAGEMENT_PREFIX}/addUser`,
    EDIT: `${USER_MANAGEMENT_PREFIX}/edit/`,
    DELETE: `${USER_MANAGEMENT_PREFIX}/delete/`,
    USER_DETAILS: `${USER_MANAGEMENT_PREFIX}/userDetail/`,
    CHANGE_PASSWORD: `${USER_MANAGEMENT_PREFIX}/change-password/`,
    EDIT_PROFILE: `${USER_MANAGEMENT_PREFIX}/profile/`,
    CHANGE_STATUS: `${USER_MANAGEMENT_PREFIX}/status/`,
    REGENERATE_TOKEN: `${USER_MANAGEMENT_PREFIX}/regenerateToken`,
};
