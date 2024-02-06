
'use client';
// IMPORTS

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import TopBar from '../../../../components/TopBar';
import ProfileCard from '../../../../components/ProfileCard.tsx';
import SettingsCard from '../../../../components/SettingsCard';

// STYLE & THEME
const theme = createTheme();

// APP
export default function PetProfile() {
  const [text, setText] = useState("");

  const mainUser = {
    // DEFAULT VALUES
    title: "PetName",
    name: "จุ้บเหมง",
    birth: "27.07.2002",
    breed: "Dog",
    gender: "female",
    weight: "30",
    characteristics: "Lazy",
    phone: "932-555-4247",
    email: "janedoe@gmail.com",
    
  };

  const fullName = `${mainUser.name} `;

  return (
    <div><TopBar/>
        {/* BACKGROUND */}
        <Grid container direction="column" sx={{ overflowX: "hidden" }}>
          

          {/* COMPONENTS */}
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{
              position: "absolute",
              top: "20vh",
              px: { xs: 0, md: 7 }
            }}
          >
            {/* PROFILE CARD */}
            <Grid item md={3}>
              <ProfileCard
                name={fullName}
                sub={mainUser.title}
              ></ProfileCard>
            </Grid>

            {/* SETTINGS CARD */}
            <Grid item md={9}>
              <SettingsCard
                expose={(v: string) => setText(v)}
                name={mainUser.name}
                birth={mainUser.birth}
                breed={mainUser.breed}
                gender={mainUser.gender}
                weight={mainUser.weight}
                characteristics={mainUser.characteristics}
                phone={mainUser.phone}
                email={mainUser.email}
                
                
              ></SettingsCard>
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
}
