'use client';
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export default function SettingsCard(props: any) {
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const genderSelect = [
    {
      value: "male",
      label: "Male"
    },
    {
      value: "female",
      label: "Female"
    }
  ];

  const [name, setName] = useState("จุ้บเหมง");
  const [birth, setBirth] = useState("27.07.2002");
  const [breed, setBreed] = useState("Dog");
  const [gender, setGender] = useState("female");
  const [weight, setWeight] = useState("30");
  const [characteristics, setCharacteristics] = useState("Lazy");
  const [phone, setPhone] = useState("932-555-4247");
  const [email, setEmail] = useState("janedoe@gmail.com");

  useEffect(() => {
    setName("จุ้บเหมง");
    setBirth("27.07.2002");
    setBreed("Dog");
    setGender("female");
    setWeight("30");
    setCharacteristics("Lazy");
    setPhone("932-555-4247");
    setEmail("janedoe@gmail.com");
  }, []);

  return (
    <Card variant="outlined" sx={{ height: "100%", width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
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
            <Grid component="form" item xs={6} >
              <Box>
                <label style={{ fontWeight: "bold" }} htmlFor="name">
                  Name
                </label>
                <TextField
                  fullWidth
                  margin="dense"
                  size="small"
                  id="name"
                  name="name"
                  defaultValue={name}
                  InputProps={{ readOnly: true }}
                />
              </Box>
            </Grid>

            <Grid component="form" item xs={6}>
              <Box>
                <label style={{ fontWeight: "bold" }} htmlFor="birth">
                  Birth
                </label>
                <TextField
                  fullWidth
                  margin="dense"
                  size="small"
                  id="birth"
                  name="birth"
                  defaultValue={birth}
                  InputProps={{ readOnly: true }}
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box>
                <label style={{ fontWeight: "bold" }} htmlFor="breed">
                  Breed
                </label>
                <TextField
                  fullWidth
                  margin="dense"
                  size="small"
                  id="breed"
                  name="breed"
                  defaultValue={breed}
                  InputProps={{ readOnly: true }}
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box>
                <label style={{ fontWeight: "bold" }} htmlFor="gender">
                  Gender
                </label>
                <TextField
                  select
                  fullWidth
                  margin="dense"
                  size="small"
                  id="gender"
                  name="gender"
                  defaultValue={gender}
                  InputProps={{ readOnly: true }}
                >
                  {genderSelect.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                  ))}
                </TextField>
              </Box>
            </Grid>

            <Grid component="form" item xs={6}>
              <Box>
                <label style={{ fontWeight: "bold" }} htmlFor="weight">
                  Weight
                </label>
                <TextField
                  fullWidth
                  margin="dense"
                  size="small"
                  id="weight"
                  name="weight"
                  defaultValue={weight}
                  InputProps={{ readOnly: true }}
                />
              </Box>
            </Grid>

            <Grid component="form" item xs={6}>
              <Box>
                <label style={{ fontWeight: "bold" }} htmlFor="characteristics">
                  Characteristics
                </label>
                <TextField
                  fullWidth
                  margin="dense"
                  size="small"
                  id="characteristics"
                  name="characteristics"
                  defaultValue={characteristics}
                  InputProps={{ readOnly: true }}
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box>
                <label style={{ fontWeight: "bold" }} htmlFor="phone">
                  Phone Number
                </label>
                <TextField
                  fullWidth
                  margin="dense"
                  size="small"
                  id="phone"
                  name="phone"
                  defaultValue={phone}
                  InputProps={{ readOnly: true, startAdornment: (
                    <InputAdornment position="start">66+</InputAdornment>
                  ) }}
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box>
                <label style={{ fontWeight: "bold" }} htmlFor="email">
                  Email Address
                </label>
                <TextField
                  type="email"
                  fullWidth
                  margin="dense"
                  size="small"
                  id="email"
                  name="email"
                  defaultValue={email}
                  InputProps={{ readOnly: true }}
                />
              </Box>
            </Grid>
          </Grid>
        </FormControl>
      </CardContent>
    </Card>
  );
}
