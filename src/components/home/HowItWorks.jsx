import { Box, Grid, Typography, Card, CardContent, Button } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PeopleIcon from "@mui/icons-material/People";
import PsychologyIcon from "@mui/icons-material/Psychology";

const steps = [
    {
        number: "1.",
        icon: <LaptopMacIcon color="primary" fontSize="large" />,
        title: "Get Matched with Your Therapist",
        description: "Hiwell helps you connect with the therapist best suited for you by understanding your needs and therapy expectations through a few quick questions during registration."
    },
    {
        number: "2.",
        icon: <PeopleIcon color="primary" fontSize="large" />,
        title: "Meet Your Therapist for Free",
        description: "You can have free 15-minute introductory video calls to assess your compatibility with the therapist of your choice and discuss your expectations from therapy."
    },
    {
        number: "3.",
        icon: <PsychologyIcon color="primary" fontSize="large" />,
        title: "Start Your Therapy Journey",
        description: "Start your personalized therapy process easily and securely with the licensed psychologist you select."
    }
];

const HowItWorksSection = () => {
    return (
        <Box sx={{ py: 8, textAlign: "center" }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                How It Works
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {steps.map((step, index) => (
                    <Grid item xs={12} md={8} key={index}>
                        <Card sx={{ display: "flex", alignItems: "center", p: 3, boxShadow: 2, borderRadius: 3 }}>
                            <Typography variant="h4" color="primary" sx={{ fontWeight: 700, pr: 2 }}>{step.number}</Typography>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h6" fontWeight={700}>{step.title}</Typography>
                                <Typography variant="body2" color="textSecondary">{step.description}</Typography>
                            </Box>
                            <Box sx={{ ml: 2 }}>{step.icon}</Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ mt: 4 }}>
                <Card sx={{ p: 3, boxShadow: 2, borderRadius: 3, backgroundColor: "#f5f5f5" }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                        Take the first step today to feel better!
                    </Typography>
                    <Button variant="contained" color="primary">Meet Your Therapist for Free</Button>
                </Card>
            </Box>
        </Box>
    );
};

export default HowItWorksSection