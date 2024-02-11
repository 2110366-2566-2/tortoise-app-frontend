'use client';
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Arial', 
      'sans-serif',
    ].join(','),
    
  },
});

export default function SettingsCard(props: {
  name: string;
  age: number;
  price: number;
  is_sold: boolean;
  description: string;
  weight: number;
  sex: string;
  species: string;
  type: string;
  behavior: string;
  medical_record: {
    medical_id: string;
    date: string;
    description: string;
  }[];
}) {
  
  return (
    <ThemeProvider theme={theme}>
      <Card variant="outlined" sx={{ height: "auto", width: "100%", overflowY: "scroll" }}>
        <Tabs
          value="one"
          textColor="secondary"
          indicatorColor="secondary"
          style={{ backgroundColor: '#F9C067' }}
        >
          <Tab value="one" label="Pet Information" />
        </Tabs>
        <Divider />
        <CardContent
          sx={{
            p: 3,
            maxHeight: { md: "100vh" },
            textAlign: { xs: "center", md: "start" }
          }}
        >
          <FormControl fullWidth>
            <Grid
              container
              direction={{ xs: "column", md: "row" }}
              columnSpacing={5}
              rowSpacing={3}
            >
              <Grid component="form" item xs={6}>
                <Box>
                  <label htmlFor="name" style={{ fontSize: "normal" }}>
                    Name : {props.name}
                  </label>
                </Box>
              </Grid>
              <Grid component="form" item xs={6}>
                <Box>
                  <label htmlFor="age" style={{ fontSize: "normal" }}>
                    Age: {props.age}
                  </label>
                </Box>
              </Grid>
              <Grid component="form" item xs={6}>
                <Box>
                  <label htmlFor="price" style={{ fontSize: "normal" }}>
                    Price: {props.price}
                  </label>
                </Box>
              </Grid>
              <Grid component="form" item xs={6}>
                <Box>
                  <label htmlFor="is_sold" style={{ fontSize: "normal" }}>
                    Sold: {props.is_sold ? 'Yes' : 'No'}
                  </label>
                </Box>
              </Grid>
              <Grid component="form" item xs={6}>
                <Box>
                  <label htmlFor="description" style={{ fontSize: "normal" }}>
                    Description: {props.description}
                  </label>
                </Box>
              </Grid>
              <Grid component="form" item xs={6}>
                <Box>
                  <label htmlFor="weight" style={{ fontSize: "normal" }}>
                    Weight: {props.weight}
                  </label>
                </Box>
              </Grid>
              <Grid component="form" item xs={6}>
                <Box>
                  <label htmlFor="sex" style={{ fontSize: "normal" }}>
                    Sex: {props.sex}
                  </label>
                </Box>
              </Grid>
              <Grid component="form" item xs={6}>
                <Box>
                  <label htmlFor="species" style={{ fontSize: "normal" }}>
                    Species: {props.species}
                  </label>
                </Box>
              </Grid>
              <Grid component="form" item xs={6}>
                <Box>
                  <label htmlFor="type" style={{ fontSize: "normal" }}>
                    Type: {props.type}
                  </label>
                </Box>
              </Grid>
              <Grid component="form" item xs={6}>
                <Box>
                  <label htmlFor="behavior" style={{ fontSize: "normal" }}>
                    Behavior: {props.behavior}
                  </label>
                </Box>
              </Grid>
            </Grid>
          </FormControl>

          {/* Medical Records */}
          <Typography variant="body1" gutterBottom style={{ marginTop: '20px', fontWeight: 'bold' }}>
            Medical Records:
          </Typography>
          {props.medical_record && props.medical_record.map((record, index) => (
            <Paper key={index} sx={{ p: 2, marginBottom: 2 }}>
              <Typography variant="body1"  gutterBottom>
                Medical ID: {record.medical_id}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Date: {record.date}
              </Typography>
              <Typography variant="body1">
                Description: {record.description}
              </Typography>
            </Paper>
          ))}
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
