import { configureStore } from "@reduxjs/toolkit";
import pipSlice from "./features/pipCalcSlice";
import stateSlice from "./features/stateSlice";

const store = configureStore({
  reducer: {
    pips: pipSlice,
    state: stateSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
