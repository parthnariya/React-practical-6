import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getUser = createAsyncThunk("user/getUser", async (page) => {
  return fetch(`https://reqres.in/api/users?page=${page}`).then( res => res.json())
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: null,
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.users = payload;
      state.status = "success";
    },
    [getUser.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default userSlice.reducer;
