import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const Charts = React.memo(() => {
  return (
    <Stack direction="row" flex="1" sx={{ height: "550px", width: "100%" }}>
      <Stack
        flex="1"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "red" }}
      >
        <div>hello</div>
      </Stack>
      <Stack flex="1" sx={{ backgroundColor: "green" }}>
        <div>world</div>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Stack>
  );
});

export default Charts;
