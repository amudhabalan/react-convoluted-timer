import React from "react";
import { Grid, Typography } from "@material-ui/core";
import TimeDisplay from "./TimeDisplay";

const TotalTimer = ({ timer }) => {
  return (
    <Grid
      item
      xs={12}
      style={{ border: "2px solid grey", textAlign: "center" }}
    >
      <Typography variant="h5">Total Timer</Typography>
      <TimeDisplay milliseconds={timer} />
    </Grid>
  );
};

export default TotalTimer;