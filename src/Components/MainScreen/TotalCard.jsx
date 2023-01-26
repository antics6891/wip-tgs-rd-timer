import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

const TotalCard = () => {
  return (
    <Card sx={{ height: "16rem" }} elevation={2}>
      <CardHeader title="TOTAL YEARLY HOURS"></CardHeader>
      <CardContent>
        <Typography variant="h2" textAlign={"center"}>
          1234
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TotalCard;
