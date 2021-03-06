import React from "react";
import Aboutme from "../components/Aboutme";
import { Avatar, Box, Container, Divider, Typography } from "@mui/material";
import { FONT_FAMILY, MAIN_COLOR } from "../theme/theme";
import Footer from "../components/Footer";
import Jobs from "../components/Jobs";
import Navbar from "../components/Navbar";
import Sobhanessi from "../pics/sobhanessi.jpg";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: MAIN_COLOR,
          pt: 15,
          fontFamily: FONT_FAMILY,
        }}
        maxWidth="xl"
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="Sobhan Esfandyari"
            src={Sobhanessi}
            sx={{ width: 192, height: 192, mr: 5 }}
          />
          <Box>
            <Typography
              variant="h4"
              color="#f79d2e"
              sx={{ fontFamily: FONT_FAMILY, fontWeight: 700 }}
            >
              This is "Sobhan Esfandyari" (sobi){" "}
              <span style={{ color: "white" }}>| </span>
              <span
                style={{
                  textDecoration: "underline #ff6266 5px",
                  color: "#2e5aeb",
                }}
              >
                A Computer Engineer
              </span>
            </Typography>
          </Box>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 6,
            fontFamily: FONT_FAMILY,
          }}
        >
          <Typography
            variant="h4"
            component="div"
            // color="#ff6266"
            color="white"
            gutterBottom
            sx={{ fontFamily: FONT_FAMILY, fontWeight: 600, mb: 8 }}
          >
            Here, I briefly explain who I am and what happened to me that I
            became such a person with these ideas!
          </Typography>
        </Container>
        <Container
          sx={{
            mb: 6,
          }}
        >
          <Aboutme />
        </Container>
        <hr style={{ color: "white", width: "100%" }} />
        <Container sx={{ pt: 3, pb: 3 }}>
          <Jobs />
        </Container>
      </Container>
      <Footer />
    </>
  );
}
