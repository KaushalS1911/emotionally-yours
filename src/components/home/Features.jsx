import { Box, Grid, Typography, Card, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DevicesIcon from "@mui/icons-material/Devices";
import PublicIcon from '@mui/icons-material/Public';
import LockIcon from "@mui/icons-material/Lock";

const features = [
  {
    icon: <StarIcon sx={{ fontSize: 40, color: "#2563eb" }} />, // Blue color
    title: "Expertise",
    description:
      "We provide ethical and professional support with our licensed, trusted clinical psychologists.",
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 40, color: "#2563eb" }} />,
    title: "Technology",
    description:
      "We personalize your therapy journey through technology, tailored to your needs and expectations.",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 40, color: "#2563eb" }} />,
    title: "Accessibility",
    description:
      "We make therapy accessible, budget-friendly, and sustainable for everyone, everywhere.",
  },
  {
    icon: <LockIcon sx={{ fontSize: 40, color: "#2563eb" }} />,
    title: "Privacy",
    description:
      "No session can be accessed or recorded by Emotionally Yours or any third party.",
  },
];

const FeatureSection = () => {
  return (
    <Container maxWidth='xl'>
      <Box sx={{ py: 10, textAlign: "center", backgroundColor: "#ffffff" }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Why Do Over 1 Million Clients <br /> Choose Emotionally Yours?
        </Typography>

        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{display:'flex', justifyContent:'center', p:0}}>
              <Card
                sx={{
                  p: 4,
                  height:"100%",
                  width:'330px',
                  textAlign: "center",
                  boxShadow: "none",
                  borderRadius: "16px",
                  transition: "0.3s",
                  border: "1px solid #3268f248",
                  "&:hover": {
                    boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
                    bgcolor:'#F7F9FE'
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f0f5ff",
                    borderRadius: "10px",
                    width: "70px",
                    height: "70px",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Box>

                <Typography variant="h6" fontSize={24} fontWeight={700} sx={{ mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" fontSize={16} color="textSecondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FeatureSection;
