import axios from "axios";
const testcanvasAPI = axios.create({
  baseURL: "https://test-canvas-42466.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return testcanvasAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_login_create(payload) {
  return testcanvasAPI.post(`/api/v1/login/`, payload);
}

function api_v1_profile_list(payload) {
  return testcanvasAPI.get(`/api/v1/profile/`);
}

function api_v1_profile_create(payload) {
  return testcanvasAPI.post(`/api/v1/profile/`, payload);
}

function api_v1_profile_retrieve(payload) {
  return testcanvasAPI.get(`/api/v1/profile/${payload.id}/`);
}

function api_v1_profile_update(payload) {
  return testcanvasAPI.put(`/api/v1/profile/${payload.id}/`, payload);
}

function api_v1_profile_partial_update(payload) {
  return testcanvasAPI.patch(`/api/v1/profile/${payload.id}/`, payload);
}

function api_v1_profile_destroy(payload) {
  return testcanvasAPI.delete(`/api/v1/profile/${payload.id}/`);
}

function api_v1_signup_create(payload) {
  return testcanvasAPI.post(`/api/v1/signup/`, payload);
}

function modules_docusign_auth_token_retrieve(payload) {
  return testcanvasAPI.get(`/modules/docusign/auth/token/`);
}

function modules_docusign_envelope_create_create(payload) {
  return testcanvasAPI.post(`/modules/docusign/envelope/create/`);
}

function modules_docusign_envelope_download_retrieve(payload) {
  return testcanvasAPI.get(`/modules/docusign/envelope/download/`);
}

function modules_docusign_envelope_retrieve_retrieve(payload) {
  return testcanvasAPI.get(`/modules/docusign/envelope/retrieve/`);
}

function modules_docusign_envelope_retrieve_all_retrieve(payload) {
  return testcanvasAPI.get(`/modules/docusign/envelope/retrieve-all/`);
}

function modules_two_factor_authentication_enable_2fa_retrieve(payload) {
  return testcanvasAPI.get(`/modules/two-factor-authentication/enable/2fa`);
}

function modules_two_factor_authentication_enable_2fa_create(payload) {
  return testcanvasAPI.post(`/modules/two-factor-authentication/enable/2fa`);
}

function modules_two_factor_authentication_enable_2fa_destroy(payload) {
  return testcanvasAPI.delete(`/modules/two-factor-authentication/enable/2fa`);
}

function modules_two_factor_authentication_google_authenticator_qr_retrieve(payload) {
  return testcanvasAPI.get(`/modules/two-factor-authentication/google/authenticator/qr`);
}

function modules_two_factor_authentication_send_otp_create(payload) {
  return testcanvasAPI.post(`/modules/two-factor-authentication/send/otp`);
}

function modules_two_factor_authentication_verify_otp_create(payload) {
  return testcanvasAPI.post(`/modules/two-factor-authentication/verify/otp`);
}

function modules_two_factor_authentication_verify_otp_create_2(payload) {
  return testcanvasAPI.post(`/modules/two-factor-authentication/verify/otp/${payload.enable}`);
}

function rest_auth_login_create(payload) {
  return testcanvasAPI.post(`/rest-auth/login/`, payload);
}

function rest_auth_logout_retrieve(payload) {
  return testcanvasAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return testcanvasAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return testcanvasAPI.post(`/rest-auth/password/change/`, payload);
}

function rest_auth_password_reset_create(payload) {
  return testcanvasAPI.post(`/rest-auth/password/reset/`, payload);
}

function rest_auth_password_reset_confirm_create(payload) {
  return testcanvasAPI.post(`/rest-auth/password/reset/confirm/`, payload);
}

function rest_auth_registration_create(payload) {
  return testcanvasAPI.post(`/rest-auth/registration/`, payload);
}

function rest_auth_registration_verify_email_create(payload) {
  return testcanvasAPI.post(`/rest-auth/registration/verify-email/`, payload);
}

function rest_auth_user_retrieve(payload) {
  return testcanvasAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return testcanvasAPI.put(`/rest-auth/user/`, payload);
}

function rest_auth_user_partial_update(payload) {
  return testcanvasAPI.patch(`/rest-auth/user/`, payload);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_profile_list,
  api_v1_profile_create,
  api_v1_profile_retrieve,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_destroy,
  api_v1_signup_create,
  modules_docusign_auth_token_retrieve,
  modules_docusign_envelope_create_create,
  modules_docusign_envelope_download_retrieve,
  modules_docusign_envelope_retrieve_retrieve,
  modules_docusign_envelope_retrieve_all_retrieve,
  modules_two_factor_authentication_enable_2fa_retrieve,
  modules_two_factor_authentication_enable_2fa_create,
  modules_two_factor_authentication_enable_2fa_destroy,
  modules_two_factor_authentication_google_authenticator_qr_retrieve,
  modules_two_factor_authentication_send_otp_create,
  modules_two_factor_authentication_verify_otp_create,
  modules_two_factor_authentication_verify_otp_create_2,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};