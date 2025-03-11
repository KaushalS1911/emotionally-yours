import React from "react";
import { Card, CardContent, Typography, Button, Grid, Box } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import ShareIcon from "@mui/icons-material/Share";

const CustomCard = ({ icon, title, description, buttonText }) => {
    return (
        <Card
            sx={{
                borderRadius: "12px",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                transition: "0.3s",
                "&:hover": { boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" },
            }}
        >
            <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
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
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    {buttonText}
                </Button>
            </CardContent>
        </Card>
    );
};

const CardSection = () => {
    return (
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
            <Grid item xs={12} sm={6} md={5}>
                <CustomCard
                    icon={<BusinessIcon color="primary" />}
                    title="Get in Touch for the Perfect Solution for Your Company!"
                    description="You can schedule a meeting with our corporate consultants so that we can understand your unique needs and provide the optimal solution for your company."
                    buttonText="Schedule a Meeting"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
                <CustomCard
                    icon={<ShareIcon color="primary" />}
                    title="Join the Hiwell Online Therapists Network!"
                    description="With over 1,600 master's-level licensed therapists who have passed our rigorous interview process, we provide psychotherapy and psychological support to thousands of clients every day. Join this exceptional community today!"
                    buttonText="Apply"
                />
            </Grid>
        </Grid>
    );
};

export default CardSection;
