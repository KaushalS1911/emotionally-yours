import { Box, Grid, Typography, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const professionalTherapists = [
    { icon: <VerifiedIcon color="success" />, text: "License & Registration Verification" },
    { icon: <AssessmentIcon color="success" />, text: "Comprehensive Interviews" },
    { icon: <AccountCircleIcon color="success" />, text: "1,600+ Licensed Therapists" },
    { icon: <TrendingUpIcon color="success" />, text: "Advanced Training" },
];

const ProfessionalTherapistSection = () => {
    return (
        <Box sx={{ py: 8, textAlign: "center" }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        Start Therapy with Our Professional Online Therapist Network!
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        Our 1600+ licensed and vetted psychotherapists who have passed our comprehensive interviews are here to support your mental health and well-being.
                    </Typography>
                    {professionalTherapists.map((item, index) => (
                        <Box key={index} display="flex" alignItems="center" gap={1} sx={{ mb: 1 }}>
                            {item.icon}
                            <Typography variant="body2">{item.text}</Typography>
                        </Box>
                    ))}
                    <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                        Get to Know the Hiwell Psychotherapists
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Therapist at work"
                        style={{ width: "100%", borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProfessionalTherapistSection