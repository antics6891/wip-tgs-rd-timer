import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Sidenav = () => {
  return (
    <Container>
      <Grid
        spacing={1}
        container
        direction={"column"}
        sx={{ marginTop: "5rem" }}
      >
        <Grid item>
          <Button variant="contained" fullWidth>
            Dashboard
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" fullWidth>
            New
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" fullWidth>
            Manage
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sidenav;
