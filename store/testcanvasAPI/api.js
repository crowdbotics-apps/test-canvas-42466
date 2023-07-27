import axios from "axios"
const testcanvasAPI = axios.create({
  baseURL: "https://test-canvas-42466.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return testcanvasAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return testcanvasAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_profile_list(payload) {
  return testcanvasAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(payload) {
  return testcanvasAPI.post(`/api/v1/profile/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return testcanvasAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testcanvasAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return testcanvasAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return testcanvasAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return testcanvasAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return testcanvasAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testcanvasAPI.post(`/rest-auth/logout/`)
}
function api_v1_profile_retrieve(payload) {
  return testcanvasAPI.get(`/api/v1/profile/${payload.id}/`)
}
function api_v1_profile_update(payload) {
  return testcanvasAPI.put(`/api/v1/profile/${payload.id}/`, payload.data)
}
function api_v1_profile_partial_update(payload) {
  return testcanvasAPI.patch(`/api/v1/profile/${payload.id}/`, payload.data)
}
function api_v1_profile_destroy(payload) {
  return testcanvasAPI.delete(`/api/v1/profile/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return testcanvasAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return testcanvasAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return testcanvasAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testcanvasAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return testcanvasAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_profile_list,
  api_v1_profile_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_profile_retrieve,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
