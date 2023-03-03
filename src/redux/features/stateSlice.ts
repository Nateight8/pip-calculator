import { createSlice } from "@reduxjs/toolkit";

interface PipState {
  open: boolean;
}

const initialState: PipState = {
  open: false,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.open = true;
    },
    setClose: (state) => {
      state.open = false;
    },
  },
});

export default stateSlice.reducer;
export const { setOpen, setClose } = stateSlice.actions;
