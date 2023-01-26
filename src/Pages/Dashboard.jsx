import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";

import React from "react";
import MainDashboard from "../Components/MainScreen/MainDashboard";
import ProjectsCard from "../Components/MainScreen/ProjectsCard";
import TotalCard from "../Components/MainScreen/TotalCard";
import Sidenav from "../Components/Sidenav";
const Dashboard = () => {
  return (
    <React.Fragment>
      <AppBar color="inherit" position="fixed">
        <Toolbar>
          <Typography>R&D Timer</Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid
          item
          xs={2}
          md={3}
          lg={2}
          sx={{
            display: { xs: "none", md: "block" },
            backgroundColor: "lightgrey",
            borderRight: "3px solid #bababa",
          }}
        >
          <Sidenav />
        </Grid>
        <Grid item xs>
          <Box sx={{ height: "100vh" }}>
            <Container sx={{ paddingTop: "6rem" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm>
                  <ProjectsCard />
                </Grid>
                <Grid item xs={12} sm>
                  <TotalCard />
                </Grid>
                <Grid item xs={12} sm>
                  2
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
