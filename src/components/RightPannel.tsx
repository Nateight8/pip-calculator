import React from "react";
import { Box, List, ListItem, ListItemText, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type Props = {
  p?: string;
};

function RightPannel({ p = "3.5rem" }: Props) {
  const { pipsRisk, risk, takeProfit, pipsProfit } = useSelector(
    (store: RootState) => {
      return store.pips;
    }
  );

  return (
    <Box sx={{ flexGrow: 1, paddingY: p }}>
      <Divider orientation="vertical" flexItem />
      <List>
        <ListItem>
          <ListItemText
            primary="Estimated Risk (in pips)"
            secondary={`${pipsRisk.toFixed(2)} pips`}
          />
        </ListItem>
        {/* <Divider /> */}
        <ListItem>
          <ListItemText
            primary="Estimated Risk (in USD)"
            secondary={`$ ${risk.toFixed(2)}`}
          />
        </ListItem>
        {/* <Divider /> */}
        <ListItem>
          <ListItemText
            primary="Estimated Profit (in pips)"
            secondary={`${pipsProfit.toFixed(2)} in pips`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Estimated Profit (in USD)"
            secondary={`$ ${takeProfit.toFixed(2)}`}
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default RightPannel;
