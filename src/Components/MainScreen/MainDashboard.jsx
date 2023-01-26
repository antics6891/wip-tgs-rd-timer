import { Grid, Container } from "@mui/material";
import React from "react";
import ProjectsCard from "./ProjectsCard";
import TotalCard from "./TotalCard";

const MainDashboard = () => {
  return (
    <Container>
      <Grid container justifyContent={"space-around"}>
        <Grid item>1</Grid>
        <Grid item>2</Grid>
      </Grid>
    </Container>
  );
};

export default MainDashboard;
