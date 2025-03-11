import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DevicesIcon from "@mui/icons-material/Devices";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LockIcon from "@mui/icons-material/Lock";

const features = [
    {
        icon: <StarIcon color="primary" fontSize="large" />,
        title: "Expertise",
        description: "We provide ethical and professional support with our licensed, trusted clinical psychologists."
    },
    {
        icon: <DevicesIcon color="primary" fontSize="large" />,
        title: "Technology",
        description: "We personalize your therapy journey through technology, tailored to your needs and expectations."
    },
    {
        icon: <AccessibilityNewIcon color="primary" fontSize="large" />,
        title: "Accessibility",
        description: "We make therapy accessible, budget-friendly, and sustainable for everyone, everywhere."
    },
    {
        icon: <LockIcon color="primary" fontSize="large" />,
        title: "Privacy",
        description: "No session can be accessed or recorded by Hiwell or any third party."
    }
];

const FeatureSection = () => {
    return (
        <Box sx={{ py: 8, textAlign: "center" }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                Why Do Over 1 Million Clients Choose Hiwell?
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ p: 3, textAlign: "center", boxShadow: 2, borderRadius: 3 }}>
                            <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                            <Typography variant="h6" fontWeight={700}>{feature.title}</Typography>
                            <Typography variant="body2" color="textSecondary">{feature.description}</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeatureSection;
