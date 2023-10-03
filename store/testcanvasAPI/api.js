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
function modules_openai_audio_transcription_create(payload) {
  return testcanvasAPI.post(`/modules/openai/audio/transcription/`, payload)
}
function modules_openai_audio_translation_create(payload) {
  return testcanvasAPI.post(`/modules/openai/audio/translation/`, payload)
}
function modules_openai_chat_completions_create(payload) {
  return testcanvasAPI.post(`/modules/openai/chat/completions/`, payload)
}
function modules_openai_completion_create(payload) {
  return testcanvasAPI.post(`/modules/openai/completion/`, payload)
}
function modules_openai_edits_create(payload) {
  return testcanvasAPI.post(`/modules/openai/edits/`, payload)
}
function modules_openai_engines_retrieve(payload) {
  return testcanvasAPI.get(`/modules/openai/engines/`)
}
function modules_openai_engines_retrieve_2(payload) {
  return testcanvasAPI.get(`/modules/openai/engines/${payload.engine_id}/`)
}
function modules_openai_images_generations_create(payload) {
  return testcanvasAPI.post(`/modules/openai/images/generations/`, payload)
}
function modules_openai_models_retrieve(payload) {
  return testcanvasAPI.get(`/modules/openai/models/`)
}
function modules_openai_models_retrieve_2(payload) {
  return testcanvasAPI.get(`/modules/openai/models/${payload.model_id}/`)
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
  modules_openai_audio_transcription_create,
  modules_openai_audio_translation_create,
  modules_openai_chat_completions_create,
  modules_openai_completion_create,
  modules_openai_edits_create,
  modules_openai_engines_retrieve,
  modules_openai_engines_retrieve_2,
  modules_openai_images_generations_create,
  modules_openai_models_retrieve,
  modules_openai_models_retrieve_2,
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
