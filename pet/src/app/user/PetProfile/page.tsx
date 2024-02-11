// PetProfile.tsx
'use client';
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import TopBar from '../../../../components/TopBar';
import ProfileCard from '../../../../components/ProfileCard.tsx';
import SettingsCard from '../../../../components/SettingsCard';

const theme = createTheme();

export default function PetProfile() {
  const mainUser = {
    id: "6yhr57h55ij5",
    name: "BBBB",
    age: 27,
    price: 5000867676,
    is_sold: false,
    description: "PKDNHX SHNNXMMCgggggggggg",
    weight: 30,
    sex: "F",
    species: "Dog",
    type: "Poodie",
    behavior: "Trainning",
    media: "",
    medical_records: [
        {
            medical_id: "12508",
            date: "18/7/2017",
            description: "Maecenas leo odio"
        },
        {
            medical_id: "12509",
            date: "19/7/2017",
            description: "Mas leo odio"
        }
    ],
    seller_id: "65c7356900dfa761aed36122"
};

  return (
    <div>
      <TopBar/>
      <Grid container direction="column" sx={{ overflowX: "hidden" }}>
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
          
          <Grid item md={3}>
            <ProfileCard
              pet_id={"PetID : "+mainUser.id}
              name={mainUser.name}
              sub = {"PetName"}
              seller_id = {"SellerID: " + mainUser.seller_id}
              media={mainUser.media}
            ></ProfileCard>
          </Grid>
        

          <Grid item md={9}>
            <SettingsCard
                name={mainUser.name}
                age={mainUser.age}
                price={mainUser.price}
                is_sold={mainUser.is_sold}
                description={mainUser.description}
                weight={mainUser.weight}
                sex={mainUser.sex}
                species={mainUser.species} 
                type={mainUser.type}
                behavior={mainUser.behavior}
                medical_record={mainUser.medical_records.map(record => ({
                  medical_id: record.medical_id,
                  date: record.date,
                  description: record.description
                }))}
              />

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
