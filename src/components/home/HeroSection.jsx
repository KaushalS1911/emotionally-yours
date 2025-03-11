import React from "react";
import { Button, Typography, Box, Grid, Card, CardContent } from "@mui/material";

const HeroSection = () => {
    return (
        <Box sx={{ p: 5, textAlign: "center", backgroundColor: "#f8f9fa" }}>
            <Grid container spacing={5} alignItems="center" justifyContent="center">
                {/* Text Section */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" fontWeight="bold">
                        Start feeling better <Typography component="span" color="primary">today!</Typography>
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, color: "gray" }}>
                        Take a safe step on your therapy journey, just like our 1,000,000+ satisfied clients. Connect with the
                        perfect therapists for you from our network of 1,600+ licensed psychologists through a free 15-minute
                        introductory video call.
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ mt: 3, px: 4, py: 1.5, fontSize: "1rem" }}>
                        Get Started
                    </Button>
                </Grid>

                {/* Image Section */}
                <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box position="relative" sx={{ width: "300px", height: "auto" }}>
                        <Card sx={{ position: "absolute", top: 0, left: 20, zIndex: 2, width: "100%" }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">Hiwell</Typography>
                                <Typography variant="body2" color="gray">Mary Sorrell - Psychologist</Typography>
                                <Button variant="contained" size="small" sx={{ mt: 1 }}>
                                    Book Session
                                </Button>
                            </CardContent>
                        </Card>
                        <img
                            src="/path-to-image"
                            alt="Therapist Video Call"
                            style={{ width: "100%", borderRadius: "15px" }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HeroSection;
