import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Container,
} from "@mui/material";
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
    <Container maxWidth="xs" sx={{ paddingY: "1rem" }}>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Divider orientation="vertical" flexItem />
        <List>
          <Grid container>
            <Grid item xs={6} md={12}>
              <ListItem>
                <ListItemText
                  primary="Estimated Risk "
                  secondary={`${pipsRisk.toFixed(2)} pips`}
                />
              </ListItem>
            </Grid>
            {/* <Divider /> */}
            <Grid item xs={6} md={12}>
              <ListItem>
                <ListItemText
                  primary="Estimated Risk"
                  secondary={`$ ${risk.toFixed(2)}`}
                />
              </ListItem>
            </Grid>
            {/* <Divider /> */}
            <Grid item xs={6} md={12}>
              <ListItem>
                <ListItemText
                  primary="Estimated Profit "
                  secondary={`${pipsProfit.toFixed(2)} in pips`}
                />
              </ListItem>
            </Grid>
            <Grid item xs={6} md={12}>
              {" "}
              <ListItem>
                <ListItemText
                  primary="Estimated Profit"
                  secondary={`$ ${takeProfit.toFixed(2)}`}
                />
              </ListItem>
            </Grid>
          </Grid>
        </List>
      </Box>
    </Container>
  );
}

export default RightPannel;
