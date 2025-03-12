import { Box, Grid, Typography, Card, Button, Container } from "@mui/material";
import Image1 from "../../assets/home/howitwork1.webp";
import Image2 from "../../assets/home/howitwork2.webp";
import Image3 from "../../assets/home/howitwork3.webp";
import CTAImage from "../../assets/home/how-it-works-final.svg"; // Import CTA image

const steps = [
  {
    number: "1.",
    img: Image1,
    title: "Get Matched with Your Therapist",
    description:
      "Emotionally Yours helps you connect with the therapist best suited for you by understanding your needs and therapy expectations through a few quick questions during registration.",
  },
  {
    number: "2.",
    img: Image2,
    title: "Meet Your Therapist for Free",
    description:
      "You can have free 15-minute introductory video calls to assess your compatibility with the therapist of your choice and discuss your expectations from therapy.",
  },
  {
    number: "3.",
    img: Image3,
    title: "Start Your Therapy Journey",
    description:
      "Start your personalized therapy process easily and securely with the licensed psychologist you select.",
  },
];

const HowItWorksSection = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700} gutterBottom mb={6}>
          How It Works
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} md={10} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  textAlign: { xs: "center", md: "left" },
                  gap: 2,
                }}
              >
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    fontSize: 43,
                    minWidth: "50px",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  {step.number}
                </Typography>

                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: { xs: 2, md: 3 },
                    width: "100%",
                    boxShadow: 0,
                    borderRadius: 3,
                    backgroundColor: "#F7F9FE",
                    border: "1px solid #3268f248",
                  }}
                >
                  <Box
                    sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}
                  >
                    <Typography variant="h6" fontWeight={700} fontSize={28}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" fontSize={18}>
                      {step.description}
                    </Typography>
                  </Box>

                  <Box
                    component="img"
                    src={step.img}
                    alt={step.title}
                    sx={{
                      maxWidth: { xs: "100%", sm: "40%" },
                      height: "auto",
                      mt: { xs: 2, md: 0 },
                      borderRadius: 2,
                    }}
                  />
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                textAlign: { xs: "center", md: "left" },
                mt: 6,
                gap: 2,
              }}
            >
              <Typography
                variant="h4"
                color="primary"
                sx={{
                  fontWeight: 700,
                  fontSize: 43,
                  minWidth: "50px",
                  display: { xs: "none", sm: "block" },
                }}
              >
                4.
              </Typography>

              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  p: { xs: 2, md: 5 },
                  width: "100%",
                  boxShadow: 0,
                  borderRadius: 3,
                  border: "1px solid #3268f248",
                  backgroundImage: `url(${CTAImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                }}
              >
                <Box
                  sx={{ position: "relative", zIndex: 1, textAlign: "start" }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    fontSize={34}
                    gutterBottom
                  >
                    Take the first step today <br/> to feel better!
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      mt: 2,
                      py: 1,
                      px: 3,
                      borderRadius: "10px",
                      boxShadow: 0,
                      fontSize: 18,
                      textTransform: "capitalize",
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    Meet Your Therapist for Free
                  </Button>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HowItWorksSection;
