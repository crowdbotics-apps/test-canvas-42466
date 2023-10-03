import axios from "axios"
const testcanvasAPI = axios.create({
  baseURL: "https://test-canvas-42466.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return testcanvasAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return testcanvasAPI.post(`/api/v1/login/`, payload)
}
function api_v1_profile_list(payload) {
  return testcanvasAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(payload) {
  return testcanvasAPI.post(`/api/v1/profile/`, payload)
}
function api_v1_profile_retrieve(payload) {
  return testcanvasAPI.get(`/api/v1/profile/${payload.id}/`)
}
function api_v1_profile_update(payload) {
  return testcanvasAPI.put(`/api/v1/profile/${payload.id}/`, payload)
}
function api_v1_profile_partial_update(payload) {
  return testcanvasAPI.patch(`/api/v1/profile/${payload.id}/`, payload)
}
function api_v1_profile_destroy(payload) {
  return testcanvasAPI.delete(`/api/v1/profile/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return testcanvasAPI.post(`/api/v1/signup/`, payload)
}
function modules_disqus_comment_list(payload) {
  return testcanvasAPI.get(`/modules/disqus/comment/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_disqus_comment_create(payload) {
  return testcanvasAPI.post(`/modules/disqus/comment/`, payload)
}
function modules_disqus_comment_like_list(payload) {
  return testcanvasAPI.get(`/modules/disqus/comment-like/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_disqus_comment_like_create(payload) {
  return testcanvasAPI.post(`/modules/disqus/comment-like/`, payload)
}
function modules_disqus_comment_like_retrieve(payload) {
  return testcanvasAPI.get(`/modules/disqus/comment-like/${payload.id}/`)
}
function modules_disqus_comment_like_update(payload) {
  return testcanvasAPI.put(
    `/modules/disqus/comment-like/${payload.id}/`,
    payload
  )
}
function modules_disqus_comment_like_partial_update(payload) {
  return testcanvasAPI.patch(
    `/modules/disqus/comment-like/${payload.id}/`,
    payload
  )
}
function modules_disqus_comment_like_destroy(payload) {
  return testcanvasAPI.delete(`/modules/disqus/comment-like/${payload.id}/`)
}
function modules_disqus_comment_retrieve(payload) {
  return testcanvasAPI.get(`/modules/disqus/comment/${payload.id}/`)
}
function modules_disqus_comment_update(payload) {
  return testcanvasAPI.put(`/modules/disqus/comment/${payload.id}/`, payload)
}
function modules_disqus_comment_partial_update(payload) {
  return testcanvasAPI.patch(`/modules/disqus/comment/${payload.id}/`, payload)
}
function modules_disqus_comment_destroy(payload) {
  return testcanvasAPI.delete(`/modules/disqus/comment/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return testcanvasAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return testcanvasAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testcanvasAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testcanvasAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return testcanvasAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testcanvasAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return testcanvasAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return testcanvasAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return testcanvasAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testcanvasAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return testcanvasAPI.patch(`/rest-auth/user/`, payload)
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
  modules_disqus_comment_list,
  modules_disqus_comment_create,
  modules_disqus_comment_like_list,
  modules_disqus_comment_like_create,
  modules_disqus_comment_like_retrieve,
  modules_disqus_comment_like_update,
  modules_disqus_comment_like_partial_update,
  modules_disqus_comment_like_destroy,
  modules_disqus_comment_retrieve,
  modules_disqus_comment_update,
  modules_disqus_comment_partial_update,
  modules_disqus_comment_destroy,
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
}
