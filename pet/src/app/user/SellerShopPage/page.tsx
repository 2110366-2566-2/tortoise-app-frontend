
'use client';
// IMPORTS

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import TopBar from '../../../../components/TopBar';
import ProfileCard from '../../../../components/ProfileCard.tsx';
import CatalogueBySeller from "../../../../components/CatalogueBySeller";

// STYLE & THEME
const theme = createTheme();

// APP
export default function SellerShopPage() {

  const mainUser = {
    // DEFAULT VALUES
    title: "Seller", // Don't Modify this title
    pfp: "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png",
    name: "Khunnnnn",
    
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
                pfp={mainUser.pfp}
              ></ProfileCard>
            </Grid>

            {/* Catalogue */}
            <Grid item md={9}>
              <CatalogueBySeller sellerName={mainUser.name} />
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
}
