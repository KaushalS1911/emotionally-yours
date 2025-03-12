import React from "react";
import { Button, Typography, Box, Grid, useMediaQuery } from "@mui/material";
import sidebarImage from '../../assets/home/mobile-mockup-enx2.webp';
import bg from "../../assets/home/hero-banner-bg.png";
import disny from '../../assets/home/disney-logo.svg';
import turkish from '../../assets/home/turkish-airlines-logo.svg';
import turkiya from '../../assets/home/turkiye-sigorta-logo.svg';
import transferGo from '../../assets/home/transfergo-logo.webp';
import department from '../../assets/home/dit-logo.webp';
import boosmart from '../../assets/home/boosmart-logo.webp';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const logos = [disny, turkish, turkiya, transferGo, department, boosmart];

const HeroSection = () => {
  const isSmallScreen = useMediaQuery("(max-width:1200px)"); // lg = 1200px

  return (
    <Box sx={{ p: 5, textAlign: "center", backgroundColor: "#F4F8FF" }} height={"100%"} minHeight={"82VH"}>
      <Grid container spacing={5} alignItems="center" justifyContent="end">
        {/* Left Section */}
        <Grid item xs={12} lg={4} textAlign={"start"}>
          <Typography variant="h2" fontWeight="bold">
            <Box width={"100%"}>Start feeling</Box> better <Typography component="span" fontWeight="bold" variant="h2" color="primary">today!</Typography>
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, color: "gray" }}>
            Take a safe step on your therapy journey, just like our 1,000,000+ satisfied clients. Connect with the
            perfect therapists for you from our network of 1,600+ licensed psychologists through a free 15-minute
            introductory video call.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3, px: 4, py: 1.5, fontSize: "1.1rem", borderRadius: 3 }}>
            Get Started
          </Button>
        </Grid>

        {/* Right Section (Image + Background) */}
        <Grid
          item xs={12} lg={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { lg: 'unset', xs: 'center' },
            backgroundImage: `url(${bg})`,
            height: '100%',
            width: "100%",
            backgroundPosition: 'center',
            backgroundSize: "contain",
            backgroundRepeat: 'no-repeat'
          }}
        >
          <Box sx={{ width: "400px", height: "auto", ml: { lg: 10, xs: 0 } }}>
            <img src={sidebarImage} alt="Therapist Video Call" style={{ width: "100%", borderRadius: "15px" }} />
          </Box>
        </Grid>

        {/* Logo Section */}
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
          {isSmallScreen ? (
            <Swiper
               breakpoints={{
      0: { slidesPerView: 2 },  // Extra small screens (mobile)
      600: { slidesPerView: 2 }, // Small screens (tablets)
      900: { slidesPerView: 3 }, // Medium screens (desktops)
      1200: { slidesPerView: 6 }, // Large screens (extra-wide desktops)
    }}
              spaceBetween={10}
            //   navigation
            //   pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }} // ✅ Added autoplay
              modules={[Navigation, Pagination, Autoplay]} // ✅ Included Autoplay
              style={{ width: "90%", maxWidth: "600px", height: "100px" }} // ✅ Set explicit height
            >
              {logos.map((item, index) => (
                <SwiperSlide key={index}>
                  <Box display="flex" justifyContent="center">
                    <img
                      src={item}
                      alt={item}
                      style={{
                        // width: "100%",
                        height: "30px",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Box display={"flex"}>
              {logos.map((item) => (
                <Box mx={3} key={item}>
                  <img
                    src={item}
                    alt={item}
                    style={{ width: "100px", height: "40px", backgroundSize: 'cover'}}
                  />
                </Box>
              ))}
            </Box>
          )}
        </Grid>

        <Grid item xs={12} fontSize={24} color={"#212529"}>
          Over 1.000.000 clients worldwide trust Hiwell.
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
