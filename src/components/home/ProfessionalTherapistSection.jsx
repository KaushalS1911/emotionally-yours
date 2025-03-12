import {Box, Grid, Typography, Button, Container} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckIcon from '@mui/icons-material/Check';
import img1 from "../../assets/home/home-psychologist-banner.webp"

const professionalTherapists = [
    { icon: <CheckIcon color="success" />, text: "License & Registration Verification" },
    { icon: <CheckIcon color="success" />, text: "Comprehensive Interviews" },
    { icon: <CheckIcon color="success" />, text: "1,600+ Licensed Therapists" },
    { icon: <CheckIcon color="success" />, text: "Advanced Training" },
];

const ProfessionalTherapistSection = () => {
    return (
        <Container>
            <Box sx={{ px: 6, py:8, background: "#F7F9FE" , borderRadius: "12px",my:5 }}>
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Typography variant='h3' fontWeight={800} gutterBottom>
                            Start Therapy with Our Professional <br/>Online Therapist Network!
                        </Typography>
                        <Typography sx={{fontSize: 20 , fontWeight: 300}} paragraph>
                            Our 1600+ licensed and vetted psychotherapists who have passed our comprehensive interviews are here to support your mental health and wellbeing.
                        </Typography>
                        {professionalTherapists.map((item, index) => (
                            <Box key={index} display="flex" alignItems="center" gap={1} sx={{ mb: 1 }}>
                                {item.icon}
                                <Typography sx={{fontSize: 20, fontWeight: 400, letterSpacing: 0.2}}>{item.text}</Typography>
                            </Box>
                        ))}
                        <Button variant="outlined" color="primary" sx={{ mt: 2, px: 5, py: 1.5, textTransform: "capitalize", fontWeight: 600, fontSize: 18, letterSpacing: 0.4, borderRadius: "14px" }}>
                            Get to Know the Emotionally yours Psychotherapists
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img
                            src={img1}
                            alt="Therapist at work"
                            style={{ width: "100%", borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ProfessionalTherapistSection