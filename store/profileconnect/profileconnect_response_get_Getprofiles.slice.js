import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const profileconnect_get_api_v1_profile_list = createAsyncThunk(
  "profileconnect_response_get_Getprofiles/profileconnect_get_api_v1_profile_list",
  async payload => {
    const response = await apiService.profileconnect_get_api_v1_profile_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const profileconnect_response_get_GetprofilesSlice = createSlice({
  name: "profileconnect_response_get_Getprofiles",
  initialState,
  reducers: {},
  extraReducers: {
    [profileconnect_get_api_v1_profile_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [profileconnect_get_api_v1_profile_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [profileconnect_get_api_v1_profile_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  profileconnect_get_api_v1_profile_list,
  slice: profileconnect_response_get_GetprofilesSlice
}
