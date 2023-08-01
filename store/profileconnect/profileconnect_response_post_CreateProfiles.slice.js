import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const profileconnect_post_api_v1_profile_create = createAsyncThunk(
  "profileconnect_response_post_CreateProfiles/profileconnect_post_api_v1_profile_create",
  async payload => {
    const response = await apiService.profileconnect_post_api_v1_profile_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const profileconnect_response_post_CreateProfilesSlice = createSlice({
  name: "profileconnect_response_post_CreateProfiles",
  initialState,
  reducers: {},
  extraReducers: {
    [profileconnect_post_api_v1_profile_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [profileconnect_post_api_v1_profile_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [profileconnect_post_api_v1_profile_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  profileconnect_post_api_v1_profile_create,
  slice: profileconnect_response_post_CreateProfilesSlice
}
