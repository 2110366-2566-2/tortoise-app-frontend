
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

  const [text, setText] = useState("");

  const mainUser = {
    // DEFAULT VALUES
    title: "Seller",
    name: "khunnnnn",
    
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

            {/* Catalogue */}
            <Grid item md={9}>
              <CatalogueBySeller/>
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
}
