import axios from "axios";
const profileconnect = axios.create({
  baseURL: "https://test-canvas-42466.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function profileconnect_get_api_v1_profile_list(payload) {
  return profileconnect.get(`/api/v1/profile/`);
}

function profileconnect_post_api_v1_profile_create(payload) {
  return profileconnect.post(`/api/v1/profile/`, payload);
}

export const apiService = {
  profileconnect_get_api_v1_profile_list,
  profileconnect_post_api_v1_profile_create
};