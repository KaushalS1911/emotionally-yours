import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function UserThink() {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    py: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Grid container alignItems="center" spacing={4}>
                    {/* Title and Description */}
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography
                                sx={{ fontSize: "32px", fontWeight: "700", marginBottom: "24px" }}
                            >
                                What Do Users Think?
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: "300",
                                    lineHeight: "150%",
                                    color: "#21252bc2",
                                    maxWidth: "640px"
                                }}
                            >
                                Preferred by over 1 million clients, Hiwell is here to support you
                                every step of the way on your therapy journey!
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Stats Section */}
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={3} textAlign="center">
                            <Grid item xs={4}>
                                <Box
                                    sx={{
                                        fontSize: "32px",
                                        color: "#3168f1",
                                        fontWeight: "700",
                                        lineHeight: "1"
                                    }}
                                >
                                    1M+
                                </Box>
                                <Box
                                    sx={{
                                        fontSize: "16px",
                                        color: "#3168f1",
                                        lineHeight: "1"
                                    }}
                                >
                                    Active Users
                                </Box>
                            </Grid>

                            <Grid item xs={4}>
                                <Box
                                    sx={{
                                        fontSize: "32px",
                                        color: "#3168f1",
                                        fontWeight: "700",
                                        lineHeight: "1"
                                    }}
                                >
                                    1600+
                                </Box>
                                <Box
                                    sx={{
                                        fontSize: "16px",
                                        color: "#3168f1",
                                        lineHeight: "1"
                                    }}
                                >
                                    Licensed Therapists
                                </Box>
                            </Grid>

                            <Grid item xs={4} display="flex" justifyContent="center" >
                                <StarIcon sx={{ color: "blue", fontSize: 28, mr: 1 }} />
                                <Box>
                                    <Box
                                        sx={{
                                            fontSize: "32px",
                                            color: "#3168f1",
                                            fontWeight: "700",
                                            lineHeight: "1"
                                        }}
                                    >
                                        4.8/5
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: "16px",
                                            color: "#3168f1",
                                            lineHeight: "1"
                                        }}
                                    >
                                        App Rating
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default UserThink;