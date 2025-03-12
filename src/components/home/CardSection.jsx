import React from "react";
import {Card, CardContent, Typography, Button, Grid, Box, Container} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import ShareIcon from "@mui/icons-material/Share";

const CustomCard = ({icon, title, description, buttonText}) => {
    return (
        <Card
            sx={{
                borderRadius: "12px",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                transition: "0.3s",
                "&:hover": {boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)"},
            }}
        >
            <CardContent>
                <Box sx={{display: "flex", alignItems: "center", mb: 2}}>
                    <Box
                        sx={{
                            backgroundColor: "#f5f5f5",
                            borderRadius: "10px",
                            width: 50,
                            height: 50,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {icon}
                    </Box>
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    {description}
                </Typography>
                <Button variant="contained" color="primary" sx={{mt: 2}}>
                    {buttonText}
                </Button>
            </CardContent>
        </Card>
    );
};

const CardSection = () => {
    return (
        <Box sx={{padding: "40px 0" ,margin:"40px 0"}}>
        <Container maxWidth="lg">
            <Grid container spacing={3} justifyContent="center" sx={{mt: 4}}>
                {[
                    {
                        icon: <BusinessIcon/>,
                        title: "Get in Touch for the Perfect Solution for Your Company!",
                        description:
                            "You can schedule a meeting with our corporate consultants so that we can understand your unique needs and provide the optimal solution for your company.",
                        buttonText: "Schedule a Meeting",
                    },
                    {
                        icon: <ShareIcon/>,
                        title: "Join the Emotionally Yours Online Therapists Network!",
                        description:
                            "With over 1,600 master's-level licensed therapists who have passed our rigorous interview process, we provide psychotherapy and psychological support to thousands of clients every day. Join this exceptional community today!",
                        buttonText: "Apply",
                    },
                ].map((item, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Box
                            sx={{
                                height: "100%",
                                display: "inline-block",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                padding: "42px",
                                border: "1px solid #C5D4FB",
                                borderRadius: 5,
                            }}
                        >
                            <Box
                                sx={{
                                    fontSize: "24px",
                                    margin: "0 0 16px",
                                    color: "#3268F3",
                                    bgcolor: "#F7F9FE",
                                    display: "inline-flex",
                                    padding: "19px",
                                    borderRadius: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {React.cloneElement(item.icon, {sx: {fontSize: "42px"}})}
                            </Box>


                            <Box sx={{
                                fontSize: "28px",
                                margin: "0 0 8px",
                                color: "#212529",
                                fontWeight: "700",
                                lineHeight: "1.2",
                            }}>
                                {item.title}
                            </Box>
                            <Box sx={{
                                fontSize: "16px",
                                color: "#212529",
                                margin: "0 0 16px",
                                fontWeight: "400"
                            }}>
                                {item.description}
                            </Box>
                            <Button sx={{
                                fontSize: "16px",
                                backgroundColor: "#3268F3",
                                padding: "6px 32px",
                                color: "#fff",
                                textTransform: "capitalize",
                                display: "inline-block",
                                borderRadius: "18px",
                            }}>
                                {item.buttonText}
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
        </Box>

    );
};

export default CardSection;
