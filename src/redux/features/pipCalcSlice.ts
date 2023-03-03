import { createSlice } from "@reduxjs/toolkit";

interface PipState {
  risk: number;
  pipsRisk: number;
  takeProfit: number;
  pipsProfit: number;
  // positionSize: number;
}

const initialState: PipState = {
  risk: 0,
  pipsRisk: 0,
  takeProfit: 0,
  pipsProfit: 0,
  // positionSize: 0,
};

const pipSlice = createSlice({
  name: "pips calc",
  initialState,
  reducers: {
    calcPips: (state, actions) => {
      let riskInPips = actions.payload.entry_price - actions.payload.stop_loss;
      let profitInPips =
        actions.payload.entry_price - actions.payload.take_profit;

      let profit =
        actions.payload.position_size * actions.payload.currency * profitInPips;

      let risk =
        actions.payload.position_size * actions.payload.currency * riskInPips;

      // console.log(
      //   actions.payload.position_size * actions.payload.currency * risk
      // );

      state.pipsRisk = Math.abs(riskInPips);
      state.pipsProfit = Math.abs(profitInPips);
      state.risk = Math.abs(risk);
      state.takeProfit = Math.abs(profit);
    },
  },
});

export default pipSlice.reducer;
export const { calcPips } = pipSlice.actions;

// const positionSize = 10000; // Position size in units of base currency
// const stopLossDistanceInPips = 50; // Stop loss distance in pips
// const pipValue = 0.1; // Pip value in quote currency
// const exchangeRate = 1.2; // Exchange rate of the currency pair

// const riskInDollars = (positionSize * stopLossDistanceInPips * pipValue) / exchangeRate;
