<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
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
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export default function SettingsCard(props: {
  name: string;
  birth: string;
  breed: string;
  gender: string;
  weight: string;
  characteristics: string;
  phone: string;
  email: string;
}) {
  const {
    name: initialName,
    birth: initialBirth,
    breed: initialBreed,
    gender: initialGender,
    weight: initialWeight,
    characteristics: initialCharacteristics,
    phone: initialPhone,
    email: initialEmail,
  } = props;

  const [name, setName] = useState(initialName);
  const [birth, setBirth] = useState(initialBirth);
  const [breed, setBreed] = useState(initialBreed);
  const [gender, setGender] = useState(initialGender);
  const [weight, setWeight] = useState(initialWeight);
  const [characteristics, setCharacteristics] = useState(initialCharacteristics);
  const [phone, setPhone] = useState(initialPhone);
  const [email, setEmail] = useState(initialEmail);

  useEffect(() => {
    setName(initialName);
    setBirth(initialBirth);
    setBreed(initialBreed);
    setGender(initialGender);
    setWeight(initialWeight);
    setCharacteristics(initialCharacteristics);
    setPhone(initialPhone);
    setEmail(initialEmail);
  }, [initialName, initialBirth, initialBreed, initialGender, initialWeight, initialCharacteristics, initialPhone, initialEmail]);

  return (
    <Card variant="outlined" sx={{ height: "100%", width: "100%" }}>
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
                  fullWidth
                  margin="dense"
                  size="small"
                  id="gender"
                  name="gender"
                  defaultValue={gender}
                  InputProps={{ readOnly: true }}
                >
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
|||||||
=======
'use client';
// IMPORTS
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomInput from "../CustomInput";

//APP
export default function SettingsCard(props: any) {
  //TAB STATES
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // GENDER SELECT STATES
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

  // FORM STATES
  const [user, setUser] = useState({
    // DEFAULT VALUES
    name: props.name,
    birth: props.birth,
    breed: props.breed,
    gender: props.gender,
    weight: props.weight,
    characteristics: props.characteristics,
    phone: props.phone,
    email: props.email,
    
  });

  const changeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //BUTTON STATES
  const [edit, update] = useState({
    required: true,
    disabled: true,
    isEdit: true
  });


  //RETURN
  return (
    <Card variant="outlined" sx={{ height: "100%", width: "100%" }}>
      {/* TABS */}
      
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        style={{ backgroundColor: '#F9C067' }}
      >
        <Tab value="one" label="Pet Information" />
        
      </Tabs>
      <Divider></Divider>

      {/* MAIN CONTENT CONTAINER */}
      <form>
        <CardContent
          sx={{
            p: 3,
            maxHeight: { md: "100vh" },
            textAlign: { xs: "center", md: "start" }
          }}
        >
          {/* FIELDS */}
          <FormControl fullWidth >
            <Grid
              container
              direction={{ xs: "column", md: "row" }}
              columnSpacing={5}
              rowSpacing={3}
            >
              {/* ROW 1: FIRST NAME */}
              <Grid component="form" item xs={6} >
                <CustomInput
                  id="name"
                  name="name"
                  value={user.name }
                  onChange={changeField}
                  title="Name"
                  dis={edit.disabled}
                  req={edit.required}
                  
                ></CustomInput>
              </Grid>

              {/* ROW 1: LAST NAME */}
              <Grid component="form" item xs={6}>
                <CustomInput
                  id="birth"
                  name="birth"
                  value={user.birth}
                  onChange={changeField}
                  title="Birth"
                  dis={edit.disabled}
                  req={edit.required}
                ></CustomInput>
              </Grid>

              {/* ROW 2: MIDDLE NAME */}
              <Grid item xs={6}>
                <CustomInput
                  id="breed"
                  name="breed"
                  value={user.breed}
                  onChange={changeField}
                  title="Breed"
                  dis={edit.disabled}
                  req={edit.required}
                ></CustomInput>
              </Grid>

              {/* ROW 2: GENDER */}
              <Grid item xs={6}>
                <CustomInput
                  select
                  id="gender"
                  name="gender"
                  value={user.gender}
                  onChange={changeField}
                  title="Gender"
                  dis={edit.disabled}
                  req={edit.required}
                  //MAP THRU OPTIONS
                  content={genderSelect.map((option) => (
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                  ))}
                ></CustomInput>
              </Grid>
              {/* ROW 3: WEIGHT */}
              <Grid component="form" item xs={6}>
                <CustomInput
                  id="weight"
                  name="weight"
                  value={user.weight}
                  onChange={changeField}
                  title="Weight"
                  dis={edit.disabled}
                  req={edit.required}
                ></CustomInput>
              </Grid>

              {/* ROW 3: characteristics*/}
              <Grid component="form" item xs={6}>
                <CustomInput
                  id="characteristics"
                  name="characteristics"
                  value={user.characteristics}
                  onChange={changeField}
                  title="Characteristics"
                  dis={edit.disabled}
                  req={edit.required}
                ></CustomInput>
              </Grid>

              {/* ROW 4: PHONE */}
              <Grid item xs={6}>
                <CustomInput
                  id="phone"
                  name="phone"
                  value={user.phone}
                  onChange={changeField}
                  title="Phone Number"
                  dis={edit.disabled}
                  req={edit.required}
                  //DIALING CODE
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">66+</InputAdornment>
                    )
                  }}
                ></CustomInput>
              </Grid>

              {/* ROW 4: EMAIL */}
              <Grid item xs={6}>
                <CustomInput
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={changeField}
                  title="Email Address"
                  dis={edit.disabled}
                  req={edit.required}
                ></CustomInput>
              </Grid>

              
              
            </Grid>
          </FormControl>
        </CardContent>
      </form>
    </Card>
  );
}
>>>>>>> [WIP] Pet profile waited for fix
|||||||
=======
'use client';
// IMPORTS
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomInput from "../CustomInput";

//APP
export default function SettingsCard(props: any) {
  //TAB STATES
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // GENDER SELECT STATES
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

  // FORM STATES
  const [user, setUser] = useState({
    // DEFAULT VALUES
    name: props.name,
    birth: props.birth,
    breed: props.breed,
    gender: props.gender,
    weight: props.weight,
    characteristics: props.characteristics,
    phone: props.phone,
    email: props.email,
    
  });

  const changeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //BUTTON STATES
  const [edit, update] = useState({
    required: true,
    disabled: true,
    isEdit: true
  });


  //RETURN
  return (
    <Card variant="outlined" sx={{ height: "100%", width: "100%" }}>
      {/* TABS */}
      
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        style={{ backgroundColor: '#F9C067' }}
      >
        <Tab value="one" label="Pet Information" />
        
      </Tabs>
      <Divider></Divider>

      {/* MAIN CONTENT CONTAINER */}
      <form>
        <CardContent
          sx={{
            p: 3,
            maxHeight: { md: "100vh" },
            textAlign: { xs: "center", md: "start" }
          }}
        >
          {/* FIELDS */}
          <FormControl fullWidth >
            <Grid
              container
              direction={{ xs: "column", md: "row" }}
              columnSpacing={5}
              rowSpacing={3}
            >
              {/* ROW 1: FIRST NAME */}
              <Grid component="form" item xs={6} >
                <CustomInput
                  id="name"
                  name="name"
                  value={user.name }
                  onChange={changeField}
                  title="Name"
                  dis={edit.disabled}
                  req={edit.required}
                  
                ></CustomInput>
              </Grid>

              {/* ROW 1: LAST NAME */}
              <Grid component="form" item xs={6}>
                <CustomInput
                  id="birth"
                  name="birth"
                  value={user.birth}
                  onChange={changeField}
                  title="Birth"
                  dis={edit.disabled}
                  req={edit.required}
                ></CustomInput>
              </Grid>

              {/* ROW 2: MIDDLE NAME */}
              <Grid item xs={6}>
                <CustomInput
                  id="breed"
                  name="breed"
                  value={user.breed}
                  onChange={changeField}
                  title="Breed"
                  dis={edit.disabled}
                  req={edit.required}
                ></CustomInput>
              </Grid>

              {/* ROW 2: GENDER */}
              <Grid item xs={6}>
                <CustomInput
                  select
                  id="gender"
                  name="gender"
                  value={user.gender}
                  onChange={changeField}
                  title="Gender"
                  dis={edit.disabled}
                  req={edit.required}
                  //MAP THRU OPTIONS
                  content={genderSelect.map((option) => (
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                  ))}
                ></CustomInput>
              </Grid>
              {/* ROW 3: WEIGHT */}
              <Grid component="form" item xs={6}>
                <CustomInput
                  id="weight"
                  name="weight"
                  value={user.weight}
                  onChange={changeField}
                  title="Weight"
                  dis={edit.disabled}
                  req={edit.required}
                ></CustomInput>
              </Grid>

              {/* ROW 3: characteristics*/}
              <Grid component="form" item xs={6}>
                <CustomInput
                  id="characteristics"
                  name="characteristics"
                  value={user.characteristics}
                  onChange={changeField}
                  title="Characteristics"
                  dis={edit.disabled}
                  req={edit.required}
                ></CustomInput>
              </Grid>

              {/* ROW 4: PHONE */}
              <Grid item xs={6}>
                <CustomInput
                  id="phone"
                  name="phone"
                  value={user.phone}
                  onChange={changeField}
                  title="Phone Number"
                  dis={edit.disabled}
                  req={edit.required}
                  //DIALING CODE
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">66+</InputAdornment>
                    )
                  }}
                ></CustomInput>
              </Grid>

              {/* ROW 4: EMAIL */}
              <Grid item xs={6}>
                <CustomInput
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={changeField}
                  title="Email Address"
                  dis={edit.disabled}
                  req={edit.required}
                ></CustomInput>
              </Grid>

              
              
            </Grid>
          </FormControl>
        </CardContent>
      </form>
    </Card>
  );
}
>>>>>>> [WIP] Pet profile waited for fix
